import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "@/lib/supabase";
import { sendBudgetEmail } from "@/lib/email";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { UploadCloud, MessageCircle, AlertCircle, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ALLOWED_TYPES = ["application/pdf", "image/jpeg", "image/png", "application/acad", "image/vnd.dwg", "image/vnd.dxf"];

const formSchema = z.object({
  nome: z.string().min(2, "Nome é obrigatório"),
  cidade: z.string().min(2, "Cidade é obrigatória"),
  email: z.string().email("E-mail inválido"),
  telefone: z.string().min(10, "Telefone inválido"),
  mensagem: z.string().min(10, "Descreva um pouco o projeto"),
});

type FormData = z.infer<typeof formSchema>;

const BudgetForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isQuotaExhausted, setIsQuotaExhausted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  // Verify EmailJS Quota from Supabase on Load
  useEffect(() => {
    const checkQuota = async () => {
      try {
        const currentMonth = new Date().toISOString().slice(0, 7);
        const { data, error } = await supabase
          .from("email_quota")
          .select("is_exhausted")
          .eq("month", currentMonth)
          .single();
        
        if (data && data.is_exhausted) {
          setIsQuotaExhausted(true);
        }
      } catch (err) {
        console.error("Erro ao checar cota:", err);
        // Silently fail, assume quota is free to avoid blocking the user accidentally
      }
    };
    checkQuota();
  }, []);

  const markQuotaExhausted = async () => {
    try {
      const currentMonth = new Date().toISOString().slice(0, 7);
      await supabase
        .from("email_quota")
        .upsert({ month: currentMonth, is_exhausted: true }, { onConflict: "month" });
      setIsQuotaExhausted(true);
    } catch (err) {
      console.error("Failed to mark quota:", err);
    }
  };

  const onSubmit = async (data: FormData) => {
    if (!file) {
      toast.error("Por favor, anexe o arquivo do projeto.");
      return;
    }
    if (file.size > MAX_FILE_SIZE) {
      toast.error("O arquivo deve ter no máximo 10MB.");
      return;
    }

    setIsSubmitting(true);
    setUploadProgress(10); // Indicate start

    try {
      // 1. Upload file to Supabase Storage
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`;
      
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('orcamentos')
        .upload(fileName, file, {
          cacheControl: '3600',
          upsert: false
        });

      if (uploadError) {
        throw uploadError;
      }
      setUploadProgress(100);

      // 2. Get Public URL
      const { data: { publicUrl } } = supabase.storage
        .from('orcamentos')
        .getPublicUrl(fileName);

      // 3. Send Email via EmailJS
      try {
        await sendBudgetEmail({
          ...data,
          link_projeto: publicUrl,
        });
        setIsSuccess(true);
        reset();
        setFile(null);
        toast.success("Orçamento enviado com sucesso!");
      } catch (emailError: any) {
        console.error("Email error details:", emailError);
        // If EmailJS fails with 4xx, it's likely a quota or auth issue
        if (emailError?.status >= 400 && emailError?.status < 500) {
          await markQuotaExhausted();
          toast.error("O limite de orçamentos online foi atingido. Redirecionando para o WhatsApp...");
          // Fallback manually sending to Whatsapp
          const msg = `Olá! Vim pelo site e gostaria de solicitar um orçamento sob medida.\n\nNome: ${data.nome}\nTelefone: ${data.telefone}\nCidade: ${data.cidade}\n\nO meu projeto é esse e já vou enviar as fotos/plantas logo abaixo!\nObs (Link do arquivo que tentei subir no site): ${publicUrl}`;
          window.open(`https://api.whatsapp.com/send?phone=5548988164249&text=${encodeURIComponent(msg)}`, "_blank");
        } else {
          toast.error("Erro inesperado ao enviar o e-mail. Tente via WhatsApp.");
        }
      }
    } catch (uploadError) {
      console.error("Upload error:", uploadError);
      toast.error("Erro ao processar o arquivo. Verifique o tamanho ou tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // State 2: Quota Exhausted Fallback UI
  if (isQuotaExhausted) {
    return (
      <div className="bg-foreground/5 border border-foreground/10 rounded-2xl p-8 md:p-12 text-center max-w-2xl mx-auto">
        <div className="w-16 h-16 bg-foreground text-background rounded-full flex items-center justify-center mx-auto mb-6">
          <MessageCircle size={32} />
        </div>
        <h3 className="text-2xl font-bold mb-4">Orçamento Express via WhatsApp</h3>
        <p className="text-foreground/70 mb-8 leading-relaxed">
          Devido à alta demanda de projetos hoje, desativamos temporariamente nosso formulário de anexos para garantir um atendimento rápido para você.
          <br /><br />
          Clique abaixo para falar diretamente com nosso especialista e <strong>envie a foto ou planta direto no chat!</strong>
        </p>
        <a
          href="https://api.whatsapp.com/send?phone=5548988164249&text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20sob%20medida.%20O%20meu%20projeto%20%C3%A9%20esse%20e%20j%C3%A1%20vou%20enviar%20as%20fotos%2Fplantas%20logo%20abaixo!"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size="lg" className="w-full sm:w-auto text-base h-14 px-8 rounded-full">
            <MessageCircle className="mr-2" />
            Enviar Projeto no WhatsApp
          </Button>
        </a>
      </div>
    );
  }

  // State 3: Success UI
  if (isSuccess) {
    return (
      <div className="bg-foreground/5 border border-foreground/10 rounded-2xl p-8 md:p-12 text-center max-w-2xl mx-auto">
        <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-2xl font-bold mb-4">Projeto Recebido!</h3>
        <p className="text-foreground/70 mb-8 leading-relaxed">
          Recebemos o seu arquivo e os detalhes do projeto. Nossa equipe de engenharia avaliará a solicitação e entraremos em contato o mais rápido possível pelo seu telefone/e-mail.
        </p>
        <Button onClick={() => setIsSuccess(false)} variant="outline" className="rounded-full">
          Enviar Novo Projeto
        </Button>
      </div>
    );
  }

  // State 1: Normal Form UI
  return (
    <div className="bg-card text-card-foreground border rounded-2xl p-6 md:p-8 shadow-sm">
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-2">Solicite um Orçamento</h3>
        <p className="text-muted-foreground">Envie seu projeto em DWG, DXF ou PDF e nossa equipe técnica fará uma análise detalhada.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="nome">Nome Completo <span className="text-red-500">*</span></Label>
            <Input id="nome" placeholder="Seu nome" {...register("nome")} disabled={isSubmitting} />
            {errors.nome && <p className="text-sm text-red-500">{errors.nome.message}</p>}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="cidade">Cidade <span className="text-red-500">*</span></Label>
            <Input id="cidade" placeholder="Sua cidade - UF" {...register("cidade")} disabled={isSubmitting} />
            {errors.cidade && <p className="text-sm text-red-500">{errors.cidade.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">E-mail <span className="text-red-500">*</span></Label>
            <Input id="email" type="email" placeholder="exemplo@gmail.com" {...register("email")} disabled={isSubmitting} />
            {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="telefone">Telefone / WhatsApp <span className="text-red-500">*</span></Label>
            <Input id="telefone" placeholder="(48) 9XXXX-XXXX" {...register("telefone")} disabled={isSubmitting} />
            {errors.telefone && <p className="text-sm text-red-500">{errors.telefone.message}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="mensagem">Mensagem <span className="text-red-500">*</span></Label>
          <Textarea id="mensagem" placeholder="Descreva os detalhes do seu projeto..." className="min-h-[120px]" {...register("mensagem")} disabled={isSubmitting} />
          {errors.mensagem && <p className="text-sm text-red-500">{errors.mensagem.message}</p>}
        </div>

        <div className="space-y-2">
          <Label>Arquivo do Projeto (Máx 10MB) <span className="text-red-500">*</span></Label>
          <div className="border-2 border-dashed border-muted-foreground/20 rounded-xl p-8 text-center bg-muted/30 hover:bg-muted/50 transition-colors">
            <input
              type="file"
              id="file"
              className="hidden"
              accept=".pdf,.jpg,.jpeg,.png,.dwg,.dxf"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  setFile(e.target.files[0]);
                }
              }}
              disabled={isSubmitting}
            />
            <Label htmlFor="file" className="cursor-pointer flex flex-col items-center justify-center">
              <UploadCloud className="w-10 h-10 text-muted-foreground mb-4" />
              <span className="text-sm font-medium mb-1">
                {file ? file.name : "Clique para anexar seu arquivo"}
              </span>
              <span className="text-xs text-muted-foreground">
                {file ? `Tamanho: ${(file.size / 1024 / 1024).toFixed(2)} MB` : "DWG, DXF, PDF, JPG ou PNG (Até 10MB)"}
              </span>
            </Label>
          </div>
        </div>

        <Button type="submit" className="w-full h-14 text-base font-medium rounded-xl" disabled={isSubmitting}>
          {isSubmitting ? (
            uploadProgress < 100 ? `Enviando Arquivo...` : "Processando..."
          ) : (
            "Enviar Orçamento Oficial"
          )}
        </Button>
        <p className="text-xs text-center text-muted-foreground flex items-center justify-center gap-1 mt-4">
          <AlertCircle size={12} /> Seus dados e projetos são tratados com total sigilo.
        </p>
      </form>
    </div>
  );
};

export default BudgetForm;
