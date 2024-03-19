import { BorderRadiusType, LIGHT_THEME, Theme } from '@admiral-ds/react-ui';

export function createBorderRadiusSwapper(
  borderRadiusKind?: BorderRadiusType,
  borderRadiusType?: 'small' | 'medium' | 'large',
) {
  let storyContainer =
    document.getElementsByClassName('admiral-light-theme')[0] ??
    document.getElementsByClassName('admiral-dark-theme')[0];
  (storyContainer as HTMLElement)?.style.setProperty('--admiral-border-radius', '0');

  return function swapBorder(theme?: Theme): Theme {
    if (theme) {
      theme.shape.borderRadiusKind = borderRadiusKind || theme.shape.borderRadiusKind;
      return theme;
    }
    LIGHT_THEME.shape.borderRadiusKind = borderRadiusKind || LIGHT_THEME.shape.borderRadiusKind;
    return LIGHT_THEME;
  };
}
