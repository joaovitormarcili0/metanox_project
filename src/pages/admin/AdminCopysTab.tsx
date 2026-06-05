import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Save, RefreshCw, Type } from 'lucide-react';
import { WebsiteCopy } from '@/contexts/CopyContext';

const AVAILABLE_COPYS = [
  // Hero
  { id: 'hero_title', category: 'Hero', desc: 'Título Principal', type: 'input' },
  { id: 'hero_subtitle', category: 'Hero', desc: 'Subtítulo', type: 'textarea' },
  { id: 'hero_button_primary', category: 'Hero', desc: 'Botão Principal', type: 'input' },
  { id: 'hero_button_secondary', category: 'Hero', desc: 'Botão Secundário', type: 'input' },

  // Quem Somos
  { id: 'about_title', category: 'Quem Somos', desc: 'Título da Seção', type: 'input' },
  { id: 'about_subtitle', category: 'Quem Somos', desc: 'Subtítulo', type: 'textarea' },
  { id: 'about_description_1', category: 'Quem Somos', desc: 'Parágrafo 1', type: 'textarea' },
  { id: 'about_description_2', category: 'Quem Somos', desc: 'Parágrafo 2', type: 'textarea' },
  
  // Busca Rápida
  { id: 'intent_title', category: 'Busca Rápida', desc: 'Título da Seção', type: 'input' },
  { id: 'intent_subtitle', category: 'Busca Rápida', desc: 'Subtítulo', type: 'input' },

  // Destaques
  { id: 'showcase_title', category: 'Destaques', desc: 'Título da Seção', type: 'input' },
  { id: 'showcase_subtitle', category: 'Destaques', desc: 'Subtítulo', type: 'input' },
  
  // Custom Project
  { id: 'custom_project_title', category: 'Projetos Especiais', desc: 'Título', type: 'input' },
  { id: 'custom_project_desc', category: 'Projetos Especiais', desc: 'Descrição', type: 'textarea' },

  // Produtos
  { id: 'produtos_title', category: 'Página de Produtos', desc: 'Título Hero', type: 'input' },
  { id: 'produtos_subtitle', category: 'Página de Produtos', desc: 'Subtítulo Hero', type: 'textarea' },
  { id: 'produtos_sobmedida_title', category: 'Página de Produtos', desc: 'Título Sob Medida', type: 'input' },
  { id: 'produtos_loja_title', category: 'Página de Produtos', desc: 'Título Loja', type: 'input' },

  // Serviços
  { id: 'servicos_title', category: 'Página de Serviços', desc: 'Título Hero', type: 'input' },
  { id: 'servicos_subtitle', category: 'Página de Serviços', desc: 'Subtítulo Hero', type: 'textarea' },
  
  // Final CTA
  { id: 'final_cta_title', category: 'Rodapé CTA', desc: 'Título', type: 'input' },
  { id: 'final_cta_desc', category: 'Rodapé CTA', desc: 'Descrição', type: 'textarea' },
];

export const AdminCopysTab = () => {
  const [copys, setCopys] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState<string | null>(null);

  const fetchCopys = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.from('website_copys').select('*');
      if (error) throw error;
      
      const map: Record<string, string> = {};
      if (data) {
        data.forEach((item: WebsiteCopy) => {
          map[item.id] = item.text_content;
        });
      }
      setCopys(map);
    } catch (err) {
      console.error('Error fetching copys:', err);
      toast.error('Erro ao carregar os textos do banco.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCopys();
  }, []);

  const handleSave = async (slotId: string, category: string, desc: string) => {
    setSaving(slotId);
    try {
      const text = copys[slotId] || '';
      const { error } = await supabase
        .from('website_copys')
        .upsert({
          id: slotId,
          category: category,
          text_content: text,
          description: desc
        }, { onConflict: 'id' });

      if (error) throw error;
      toast.success('Texto atualizado com sucesso!');
    } catch (err) {
      console.error('Error saving copy:', err);
      toast.error('Erro ao salvar no banco.');
    } finally {
      setSaving(null);
    }
  };

  const handleInputChange = (slotId: string, value: string) => {
    setCopys(prev => ({ ...prev, [slotId]: value }));
  };

  const groupedCopys = AVAILABLE_COPYS.reduce((acc, slot) => {
    if (!acc[slot.category]) acc[slot.category] = [];
    acc[slot.category].push(slot);
    return acc;
  }, {} as Record<string, typeof AVAILABLE_COPYS>);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Gerenciador de Textos</h2>
          <p className="text-muted-foreground mt-1">
            Altere os títulos e descrições do site instantaneamente.
          </p>
        </div>
        <Button onClick={fetchCopys} variant="outline" disabled={loading}>
          <RefreshCw className={`mr-2 h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
          Recarregar
        </Button>
      </div>

      {loading ? (
        <div className="h-40 flex items-center justify-center text-muted-foreground">
          Carregando textos do banco de dados...
        </div>
      ) : (
        <div className="space-y-10">
          {Object.entries(groupedCopys).map(([category, slots]) => (
            <div key={category} className="space-y-4">
              <div className="border-b pb-2">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Type className="h-4 w-4 text-primary" />
                  {category}
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {slots.map(slot => (
                  <div key={slot.id} className="bg-card border rounded-xl p-5 shadow-sm flex flex-col gap-4">
                    <div>
                      <h4 className="font-medium text-sm text-foreground/80">{slot.desc}</h4>
                      <p className="text-xs text-muted-foreground mt-1 font-mono">ID: {slot.id}</p>
                    </div>
                    
                    <div className="mt-auto space-y-3">
                      {slot.type === 'textarea' ? (
                        <Textarea
                          placeholder="Digite o texto aqui..."
                          value={copys[slot.id] || ''}
                          onChange={(e) => handleInputChange(slot.id, e.target.value)}
                          className="min-h-[100px] text-sm"
                        />
                      ) : (
                        <Input
                          placeholder="Digite o texto aqui..."
                          value={copys[slot.id] || ''}
                          onChange={(e) => handleInputChange(slot.id, e.target.value)}
                          className="text-sm"
                        />
                      )}
                      
                      <Button 
                        onClick={() => handleSave(slot.id, slot.category, slot.desc)}
                        disabled={saving === slot.id}
                        className="w-full"
                        size="sm"
                      >
                        {saving === slot.id ? 'Salvando...' : (
                          <>
                            <Save className="mr-2 h-4 w-4" />
                            Salvar Texto
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
