import { useEffect, useState } from 'react';

export const useMediaQuery = (query: string) => {
  const [state, setState] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    if (state !== mediaQuery.matches) {
      setState(mediaQuery.matches);
    }

    const updateMediaQuery = () => setState(mediaQuery.matches);

    mediaQuery.addEventListener('change', updateMediaQuery);
    return () => mediaQuery.removeEventListener('change', updateMediaQuery);
  }, [query, state]);

  return state;
};
