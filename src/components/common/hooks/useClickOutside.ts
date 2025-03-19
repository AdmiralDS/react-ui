import * as React from 'react';

export const useClickOutside = (
  elements: React.RefObject<HTMLElement>[],
  handler: (e: MouseEvent | TouchEvent) => void,
) => {
  const listener = React.useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (
        elements.every((element) => {
          return element.current && !element.current.contains(e.target as Element);
        })
      ) {
        handler(e);
      }
    },
    [handler, elements],
  );

  React.useEffect(() => {
    document.addEventListener('mousedown', listener, true);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener, true);
      document.removeEventListener('touchstart', listener);
    };
  }, [listener]);
};
