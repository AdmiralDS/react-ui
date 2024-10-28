export const FORM_FIELD_DATA_CONTAINER_ATTRIBUTE = 'data-container';
export const FORM_FIELD_DATA_ATTRIBUTE = 'data-field';
export const DROPDOWN_DATA_ATTRIBUTE = 'data-dropdown-container';
export const MENU_DATA_ATTRIBUTE = 'data-menu';

export function passFormFieldContainerDataAttributes(initialProps: any, containerProps: any) {
  passDataAttributes(initialProps, containerProps, FORM_FIELD_DATA_CONTAINER_ATTRIBUTE, true);
}

export function passFormFieldDataAttributes(initialProps: any, containerProps: any) {
  passDataAttributes(initialProps, containerProps, FORM_FIELD_DATA_ATTRIBUTE, false);
}

export function passDropdownDataAttributes(initialProps: any) {
  const dropMenuProps = {} as Record<string, any>;
  passDataAttributes(initialProps, dropMenuProps, DROPDOWN_DATA_ATTRIBUTE, true);
  return dropMenuProps;
}

export function passMenuDataAttributes(initialProps: any) {
  const menuProps = {} as Record<string, any>;
  passDataAttributes(initialProps, menuProps, MENU_DATA_ATTRIBUTE, true);
  return menuProps;
}

export function passDataAttributes(
  sourceProps: any,
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
