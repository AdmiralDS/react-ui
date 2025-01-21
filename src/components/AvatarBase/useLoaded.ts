import { useEffect, useState } from 'react';

export const useLoaded = (src: string | undefined) => {
  const [loaded, setLoaded] = useState<'loaded' | 'error' | boolean>(false);

  useEffect(() => {
    if (!src) return;
    setLoaded(false);

    let effectActive = true;
    const image = new Image();
    image.src = src;

    image.onload = () => {
      if (!effectActive) {
        return;
      }
      setLoaded('loaded');
    };
    image.onerror = () => {
      if (!effectActive) {
        return;
      }
      setLoaded('error');
    };
    return () => {
      effectActive = false;
    };
  }, [src]);

  return loaded;
};
