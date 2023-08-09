export const cleanUpProps = (props: any) =>
  (Object.keys(props) as Array<keyof typeof props>).reduce(
    (acc, key) => {
      if (props[key] !== undefined) acc[key.toString()] = props[key];

      return acc;
    },
    {} as Record<any, any>,
  );
