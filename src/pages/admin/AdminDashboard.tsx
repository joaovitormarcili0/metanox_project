import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { Save, RefreshCw, Image as ImageIcon } from 'lucide-react';
import { WebsiteImage } from '@/contexts/ImagesContext';

// Catálogo fixo de slots que existem no site
const AVAILABLE_SLOTS = [
  // Hero
  { id: 'hero_slide_1', category: 'Hero', desc: 'Slide 1: Fundo principal (ex: /hero-1.png)' },
  { id: 'hero_slide_2', category: 'Hero', desc: 'Slide 2: Fundo principal (ex: /hero-2.png)' },
  { id: 'hero_slide_3', category: 'Hero', desc: 'Slide 3: Fundo principal (ex: /hero-3.png)' },
  
  // Quem Somos
  { id: 'about_image_1', category: 'Quem Somos', desc: 'Imagem lateral da seção (ex: /obras.png)' },
  
  // O que você está buscando (IntentNav)
  { id: 'intent_1', category: 'Busca Rápida', desc: 'Card 1: Construção Civil (ex: /obras.png)' },
  { id: 'intent_2', category: 'Busca Rápida', desc: 'Card 2: Ferragens (ex: /spider.png)' },
  { id: 'intent_3', category: 'Busca Rápida', desc: 'Card 3: Casa (ex: /residencia.png)' },
  { id: 'intent_4', category: 'Busca Rápida', desc: 'Card 4: Corrimão (ex: /residencia.png)' },
  { id: 'intent_5', category: 'Busca Rápida', desc: 'Card 5: Puxadores (ex: /puxador.png)' },

  // Destaques (ProductShowcase)
  { id: 'showcase_1', category: 'Destaques', desc: 'Produto Destaque 1 (ex: /hero.png)' },
  { id: 'showcase_2', category: 'Destaques', desc: 'Produto Destaque 2 (ex: /puxador.png)' },
  { id: 'showcase_3', category: 'Destaques', desc: 'Produto Destaque 3 (ex: /spider.png)' },
  
  // Projetos Especiais
  { id: 'custom_project_1', category: 'Projetos Especiais', desc: 'Imagem da seção Sob Medida (ex: /custom.png)' },
  
  // Final CTA
  { id: 'final_cta_bg', category: 'Rodapé CTA', desc: 'Imagem de fundo do CTA final (ex: /custom.png)' },
];

const AdminDashboard = () => {
  const [images, setImages] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState<string | null>(null);

  const fetchImages = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.from('website_images').select('*');
      if (error) throw error;
      
      const map: Record<string, string> = {};
      if (data) {
        data.forEach((img: WebsiteImage) => {
          map[img.slot_id] = img.image_path;
        });
      }
      setImages(map);
    } catch (err) {
      console.error('Error fetching:', err);
      toast.error('Erro ao carregar os dados do banco.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleSave = async (slotId: string, category: string, desc: string) => {
    setSaving(slotId);
    try {
      const path = images[slotId] || '';
      const { error } = await supabase
        .from('website_images')
        .upsert({
          slot_id: slotId,
          category: category,
          image_path: path,
          description: desc
        }, { onConflict: 'slot_id' });

      if (error) throw error;
      toast.success('Imagem mapeada com sucesso!');
    } catch (err) {
      console.error('Error saving:', err);
      toast.error('Erro ao salvar no banco.');
    } finally {
      setSaving(null);
    }
  };

  const handleInputChange = (slotId: string, value: string) => {
    setImages(prev => ({ ...prev, [slotId]: value }));
  };

  // Group slots by category
  const groupedSlots = AVAILABLE_SLOTS.reduce((acc, slot) => {
    if (!acc[slot.category]) acc[slot.category] = [];
    acc[slot.category].push(slot);
    return acc;
  }, {} as Record<string, typeof AVAILABLE_SLOTS>);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Catálogo de Imagens</h2>
          <p className="text-muted-foreground mt-1">
            Mapeie quais arquivos do Github devem aparecer em cada área do site.
          </p>
        </div>
        <Button onClick={fetchImages} variant="outline" disabled={loading}>
          <RefreshCw className={`mr-2 h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
          Recarregar
        </Button>
      </div>

      {loading ? (
        <div className="h-40 flex items-center justify-center text-muted-foreground">
          Carregando banco de dados...
        </div>
      ) : (
        <div className="space-y-12">
          {Object.entries(groupedSlots).map(([category, slots]) => (
            <div key={category} className="space-y-4">
              <div className="border-b pb-2">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <ImageIcon className="h-5 w-5 text-primary" />
                  {category}
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {slots.map(slot => (
                  <div key={slot.id} className="bg-card border rounded-xl p-5 shadow-sm flex flex-col gap-4">
                    <div>
                      <h4 className="font-medium text-sm text-foreground/80">{slot.id}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{slot.desc}</p>
                    </div>
                    
                    <div className="mt-auto space-y-3">
                      <Input
                        placeholder="Ex: /nova-foto.jpg"
                        value={images[slot.id] || ''}
                        onChange={(e) => handleInputChange(slot.id, e.target.value)}
                        className="font-mono text-sm"
                      />
                      <Button 
                        onClick={() => handleSave(slot.id, slot.category, slot.desc)}
                        disabled={saving === slot.id}
                        className="w-full"
                        size="sm"
                      >
                        {saving === slot.id ? 'Salvando...' : (
                          <>
                            <Save className="mr-2 h-4 w-4" />
                            Salvar Slot
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

export default AdminDashboard;
