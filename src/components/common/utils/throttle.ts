// https://github.com/martinstark/throttle-ts
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const throttle = <T extends (...args: any[]) => any>(fn: T, delay: number): [T | (() => void), () => void] => {
  let wait = false;
  let timeout: undefined | ReturnType<typeof setTimeout>;
  let cancelled = false;

  return [
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (...args: any[]) => {
      if (cancelled) return undefined;
      if (wait) return undefined;

      const val = fn(...args);

      wait = true;

      timeout = setTimeout(() => {
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
