export const cleanUpProps = <T extends Record<string, unknown>>(props: T): Partial<T> =>
  Object.keys(props).reduce<Partial<T>>((acc, key) => {
    const typedKey = key as keyof T;
    if (props[typedKey] !== undefined) {
      acc[typedKey] = props[typedKey];
    }
    return acc;
  }, {});
