export const FORM_FIELD_DATA_ATTRIBUTE = 'data-container';
export const DROPDOWN_DATA_ATTRIBUTE = 'data-dropdown-container';

export function splitFormFieldDataAttributes(initialProps: any, containerProps: any) {
  (Object.keys(initialProps) as Array<keyof typeof initialProps>).forEach((key) => {
    if (typeof key === 'string' && key.startsWith(FORM_FIELD_DATA_ATTRIBUTE)) {
      containerProps[key] = initialProps[key];
      delete initialProps[key];
    }
  });
}

export function splitDropdownDataAttributes(initialProps: any): Record<string, any> {
  const dropMenuProps = {} as Record<string, any>;
  (Object.keys(initialProps) as Array<keyof typeof initialProps>).forEach((key) => {
    if (typeof key === 'string' && key.startsWith(DROPDOWN_DATA_ATTRIBUTE)) {
      dropMenuProps[key] = initialProps[key];
      delete initialProps[key];
    }
  });
  return [dropMenuProps];
}
