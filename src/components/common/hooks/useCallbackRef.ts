import { useEffect, useMemo, useRef } from 'react';

function useCallbackRef<T extends (...args: any[]) => any>(callback: T | undefined): T {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  });

  // https://github.com/facebook/react/issues/19240
  return useMemo(() => ((...args) => callbackRef.current?.(...args)) as T, []);
}

export { useCallbackRef };
