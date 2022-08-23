export const FORM_FIELD_DATA_CONTAINER_ATTRIBUTE = 'data-container';
export const DROPDOWN_DATA_ATTRIBUTE = 'data-dropdown-container';

export function passFormFieldContainerDataAttributes(initialProps: any, containerProps: any) {
  passDataAttributes(initialProps, containerProps, FORM_FIELD_DATA_CONTAINER_ATTRIBUTE);
}

export function passDropdownDataAttributes(initialProps: any): Record<string, any> {
  const dropMenuProps = {} as Record<string, any>;
  passDataAttributes(initialProps, dropMenuProps, DROPDOWN_DATA_ATTRIBUTE);
  return [dropMenuProps];
}

function passDataAttributes(sourceProps: any, destinationProps: any, dataAttributesStart: string) {
  (Object.keys(sourceProps) as Array<keyof typeof sourceProps>).forEach((key) => {
    if (typeof key === 'string' && key.startsWith(dataAttributesStart)) {
      destinationProps[key] = sourceProps[key];
      delete sourceProps[key];
    }
  });
}
