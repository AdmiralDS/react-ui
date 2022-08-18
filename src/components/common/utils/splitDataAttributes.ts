export const FORM_FIELD_DATA_ATTRIBUTE = 'data-container';

export function splitFormFieldDataAttributes(initialProps: any, containerProps: any) {
  (Object.keys(initialProps) as Array<keyof typeof initialProps>).forEach((key) => {
    if (typeof key === 'string' && key.startsWith(FORM_FIELD_DATA_ATTRIBUTE)) {
      const internalKey = 'data' + key.slice(FORM_FIELD_DATA_ATTRIBUTE.length);
      const descriptor = Object.getOwnPropertyDescriptor(initialProps, key);
      containerProps[key] = initialProps[key];
      if (typeof descriptor !== 'undefined') {
        Object.defineProperty(initialProps, internalKey, descriptor);
      }
      delete initialProps[key];
    }
  });
}
