// Copy-Paste from https://gist.github.com/Danziger/336e75b6675223ad805a88c2dfdcfd4a

import type React from 'react';
import { useEffect, useRef } from 'react';

/**
 * Use setInterval with Hooks in a declarative way.
 *
 * @see https://stackoverflow.com/a/59274004/3723993
 * @see https://overreacted.io/making-setinterval-declarative-with-react-hooks/
 */
export function useInterval(
  callback: React.EffectCallback,
  delay: number | null,
): React.MutableRefObject<ReturnType<typeof setInterval> | null> {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const callbackRef = useRef(callback);

  // Remember the latest callback:
  //
  // Without this, if you change the callback, when setInterval ticks again, it
  // will still call your old callback.
  //
  // If you add `callback` to useEffect's deps, it will work fine but the
  // interval will be reset.

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  // Set up the interval:

  useEffect(() => {
    if (typeof delay === 'number') {
      intervalRef.current = setInterval(() => callbackRef.current(), delay);

      // Clear interval if the components is unmounted or the delay changes:
      return () => clearInterval(intervalRef.current || 0);
    }
  }, [delay]);

  // In case you want to manually clear the interval from the consuming component...:
  return intervalRef;
}
