import React, { createContext, useContext, useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

// Inicializa o cliente do Supabase
const supabaseUrl = 'https://hlupxxtadecnmbpyajug.supabase.co';
// Substituir pela sua chave anônima (mesma do EmailJS se já tiver, ou pegue no painel)
const supabaseAnonKey = 'sb_publishable_Zzmov_F-PW9vc8omXMQLPg_hbKJ8obD';
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface WebsiteCopy {
  id: string;
  category: string;
  text_content: string;
  description: string;
}

interface CopyContextType {
  copys: Record<string, string>;
  loading: boolean;
  refreshCopys: () => Promise<void>;
  getCopy: (id: string, fallbackText: string) => string;
}

const CopyContext = createContext<CopyContextType | undefined>(undefined);

export const CopyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [copys, setCopys] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);

  const fetchCopys = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('website_copys')
        .select('*');

      if (error) {
        console.error('Erro ao buscar textos no Supabase:', error);
        return;
      }

      // Converte o array em um objeto para busca rápida { [id]: text_content }
      const copysMap: Record<string, string> = {};
      data?.forEach((item: WebsiteCopy) => {
        if (item.text_content) {
          copysMap[item.id] = item.text_content;
        }
      });
      
      setCopys(copysMap);
    } catch (err) {
      console.error('Falha na requisição de textos:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCopys();
  }, []);

  // Função utilitária para pegar o texto. Se não existir no banco ou estiver vazio, retorna o original do site.
  const getCopy = (id: string, fallbackText: string) => {
    if (copys[id] && copys[id].trim() !== '') {
      return copys[id];
    }
    return fallbackText;
  };

  return (
    <CopyContext.Provider value={{ copys, loading, refreshCopys: fetchCopys, getCopy }}>
      {children}
    </CopyContext.Provider>
  );
};

export const useCopy = () => {
  const context = useContext(CopyContext);
  if (context === undefined) {
    throw new Error('useCopy must be used within a CopyProvider');
  }
  return context;
};
