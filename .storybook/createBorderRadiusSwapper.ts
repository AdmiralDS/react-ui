import { BorderRadiusType, LIGHT_THEME, Theme } from '@admiral-ds/react-ui';

export function createBorderRadiusSwapper(borderRadiusKind?: BorderRadiusType) {
  return function swapBorder(theme?: Theme): Theme {
    if (theme) {
      theme.shape.borderRadiusKind = borderRadiusKind || theme.shape.borderRadiusKind;
      return theme;
    }
    LIGHT_THEME.shape.borderRadiusKind = borderRadiusKind || LIGHT_THEME.shape.borderRadiusKind;
    return LIGHT_THEME;
  };
}
