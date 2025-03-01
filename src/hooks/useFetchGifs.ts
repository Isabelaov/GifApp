import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
import { IImage } from "../interfaces/imageInterface";

export const useFetchGifs = (category: string) => {
  const [images, setImages] = useState<IImage[]>([]);
  const [loading, setLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return { images, loading };
};
