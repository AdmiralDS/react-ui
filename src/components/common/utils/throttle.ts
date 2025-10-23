export const throttle = <Args extends unknown[], R>(
  fn: (...args: Args) => R,
  delay: number,
): [(...args: Args) => R | undefined, () => void] => {
  let wait = false;
  let timeout: ReturnType<typeof setTimeout> | undefined;
  let cancelled = false;

  return [
    (...args: Args): R | undefined => {
      if (cancelled || wait) return undefined;

      const val = fn(...args);

      wait = true;
      timeout = setTimeout(() => (wait = false), delay);

      return val;
    },
    () => {
      cancelled = true;
      clearTimeout(timeout);
    },
  ];
};
