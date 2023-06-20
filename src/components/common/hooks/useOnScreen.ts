import type { RefCallback } from 'react';
import { useCallback, useEffect, useState } from 'react';

export function useOnScreen(options?: IntersectionObserverInit): [boolean, (instance: HTMLElement | null) => void] {
  const [isIntersecting, setIntersecting] = useState(false);
  const [node, setNode] = useState<HTMLElement | null>(null);
  const ref = useCallback<RefCallback<HTMLElement>>((node) => setNode(node), []);

  useEffect(() => {
    if (node) {
      const observer = new IntersectionObserver(([entry]) => {
        setIntersecting(entry.isIntersecting);
      }, options);
      observer.observe(node);
      return () => observer.unobserve(node);
    }
  }, [node]); // Empty array ensures that effect is only run on mount and unmount
  return [isIntersecting, ref];
}
