// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const cleanUpProps = (props: any) =>
  (Object.keys(props) as Array<keyof typeof props>).reduce(
    (acc, key) => {
      if (props[key] !== undefined) acc[key.toString()] = props[key];

      return acc;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    {} as Record<any, any>,
  );
