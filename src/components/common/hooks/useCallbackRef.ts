import { useEffect, useMemo, useRef } from 'react';

function useCallbackRef<T extends (...args: unknown[]) => unknown>(callback: T | undefined): T {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  });

  // https://github.com/facebook/react/issues/19240
  return useMemo(
    () =>
      ((...args: Parameters<T>) => {
        return callbackRef.current?.(...args);
      }) as T,
    [],
  );
}

export { useCallbackRef };
