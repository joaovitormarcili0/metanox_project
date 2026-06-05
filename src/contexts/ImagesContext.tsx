import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '@/lib/supabase';

export interface WebsiteImage {
  slot_id: string;
  category: string;
  image_path: string;
  description: string | null;
}

interface ImagesContextType {
  images: Record<string, string>;
  isLoading: boolean;
  refreshImages: () => Promise<void>;
  getImage: (slotId: string, fallbackPath: string) => string;
}

const ImagesContext = createContext<ImagesContextType | undefined>(undefined);

export const ImagesProvider = ({ children }: { children: ReactNode }) => {
  const [images, setImages] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(true);

  const refreshImages = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('website_images')
        .select('*');

      if (error) {
        console.error('Error fetching images:', error);
        return;
      }

      const imageMap: Record<string, string> = {};
      if (data) {
        data.forEach((img: WebsiteImage) => {
          imageMap[img.slot_id] = img.image_path;
        });
      }
      setImages(imageMap);
    } catch (err) {
      console.error('Unexpected error fetching images:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    refreshImages();
  }, []);

  // Helper function to safely get an image or return fallback
  const getImage = (slotId: string, fallbackPath: string) => {
    if (images[slotId] && images[slotId].trim() !== '') {
      return images[slotId];
    }
    return fallbackPath;
  };

  return (
    <ImagesContext.Provider value={{ images, isLoading, refreshImages, getImage }}>
      {children}
    </ImagesContext.Provider>
  );
};

export const useImages = () => {
  const context = useContext(ImagesContext);
  if (context === undefined) {
    throw new Error('useImages must be used within an ImagesProvider');
  }
  return context;
};
