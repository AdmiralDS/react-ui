import { useEffect, useRef } from 'react';

export default function useInterval_DEPRECATED(
  callback: (...args: unknown[]) => void,
  delay?: number | null,
  ...args: unknown[]
) {
  const savedCallback = useRef<((...args: unknown[]) => void) | undefined>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current(...args);
      }
    }

    if (delay !== null && delay !== undefined) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay, ...args]);
}
