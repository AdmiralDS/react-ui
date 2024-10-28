export const FORM_FIELD_DATA_CONTAINER_ATTRIBUTE = 'data-container';
export const FORM_FIELD_DATA_ATTRIBUTE = 'data-field';
export const DROPDOWN_DATA_ATTRIBUTE = 'data-dropdown-container';
export const MENU_DATA_ATTRIBUTE = 'data-menu';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function passFormFieldContainerDataAttributes(initialProps: any, containerProps: any) {
  passDataAttributes(initialProps, containerProps, FORM_FIELD_DATA_CONTAINER_ATTRIBUTE, true);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function passFormFieldDataAttributes(initialProps: any, containerProps: any) {
  passDataAttributes(initialProps, containerProps, FORM_FIELD_DATA_ATTRIBUTE, false);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function passDropdownDataAttributes(initialProps: any) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dropMenuProps = {} as Record<string, any>;
  passDataAttributes(initialProps, dropMenuProps, DROPDOWN_DATA_ATTRIBUTE, true);
  return dropMenuProps;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function passMenuDataAttributes(initialProps: any) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const menuProps = {} as Record<string, any>;
  passDataAttributes(initialProps, menuProps, MENU_DATA_ATTRIBUTE, true);
  return menuProps;
}

export function passDataAttributes(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sourceProps: any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  destinationProps: any,
  dataAttributesStart: string,
  deleteProp: boolean,
) {
  (Object.keys(sourceProps) as Array<keyof typeof sourceProps>).forEach((key) => {
    if (typeof key === 'string' && key.startsWith(dataAttributesStart)) {
      destinationProps[key] = sourceProps[key];
      if (deleteProp) {
        delete sourceProps[key];
      }
    }
  });
}
