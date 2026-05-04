import { useEffect, useState } from 'react';

const IS_SERVER = typeof window === 'undefined';

export const useMediaQuery = (query: string) => {
  const [state, setState] = useState(() => {
    if (IS_SERVER) {
      return false;
    }
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const updateMediaQuery = () => setState(mediaQuery.matches);

    updateMediaQuery();

    mediaQuery.addEventListener('change', updateMediaQuery);
    return () => mediaQuery.removeEventListener('change', updateMediaQuery);
  }, [query]);

  return state;
};
