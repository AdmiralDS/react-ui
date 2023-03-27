// https://github.com/martinstark/throttle-ts
export const throttle = <T extends (...args: any[]) => any>(fn: T, delay: number): [T | (() => void), () => void] => {
  let wait = false;
  let timeout: undefined | number;
  let cancelled = false;

  return [
    (...args: any[]) => {
      if (cancelled) return undefined;
      if (wait) return undefined;

      const val = fn(...args);

      wait = true;

      timeout = window.setTimeout(() => {
        wait = false;
      }, delay);

      return val;
    },
    () => {
      cancelled = true;
      clearTimeout(timeout);
    },
  ];
};
