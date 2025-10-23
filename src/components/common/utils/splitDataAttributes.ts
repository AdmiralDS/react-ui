export const FORM_FIELD_DATA_CONTAINER_ATTRIBUTE = 'data-container';
export const FORM_FIELD_DATA_ATTRIBUTE = 'data-field';
export const DROPDOWN_DATA_ATTRIBUTE = 'data-dropdown-container';
export const MENU_DATA_ATTRIBUTE = 'data-menu';

type DataAttributeValue = string | number | boolean | undefined;
export type DataAttributeMap = Record<string, DataAttributeValue>;

export function passFormFieldContainerDataAttributes<
  TSource extends Record<string, unknown>,
  TDestination extends Record<string, unknown>,
>(initialProps: TSource, containerProps: TDestination) {
  passDataAttributes(initialProps, containerProps, FORM_FIELD_DATA_CONTAINER_ATTRIBUTE, true);
}

export function passFormFieldDataAttributes<
  TSource extends Record<string, unknown>,
  TDestination extends Record<string, unknown>,
>(initialProps: TSource, containerProps: TDestination) {
  passDataAttributes(initialProps, containerProps, FORM_FIELD_DATA_ATTRIBUTE, false);
}

export function passDropdownDataAttributes<TSource extends Record<string, unknown>>(
  initialProps: TSource,
): DataAttributeMap {
  const dropMenuProps: DataAttributeMap = {};
  passDataAttributes(initialProps, dropMenuProps, DROPDOWN_DATA_ATTRIBUTE, true);
  return dropMenuProps;
}

export function passMenuDataAttributes<TSource extends Record<string, unknown>>(
  initialProps: TSource,
): DataAttributeMap {
  const menuProps: DataAttributeMap = {};
  passDataAttributes(initialProps, menuProps, MENU_DATA_ATTRIBUTE, true);
  return menuProps;
}

export function passDataAttributes<
  TSource extends Record<string, unknown>,
  TDestination extends Record<string, unknown>,
>(sourceProps: TSource, destinationProps: TDestination, dataAttributesStart: string, deleteProp: boolean) {
  Object.keys(sourceProps).forEach((key) => {
    if (key.startsWith(dataAttributesStart)) {
      (destinationProps as Record<string, unknown>)[key] = sourceProps[key];
      if (deleteProp) {
        delete (sourceProps as Record<string, unknown>)[key];
      }
    }
  });
}
