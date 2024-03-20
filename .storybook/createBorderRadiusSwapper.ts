import { BorderRadiusType, LIGHT_THEME, Theme } from '@admiral-ds/react-ui';

const getNumFromStr = (str: string) => {
  let result = str;
  return result.replace(/^\D+/g, '');
};

export function createBorderRadiusSwapper(
  borderRadiusKind?: BorderRadiusType,
  borderRadiusType?: 'Small' | 'Medium' | 'Large',
  CSSCustomProps?: boolean,
) {
  if (borderRadiusKind && CSSCustomProps) {
    const cssPropName = `--admiral-border-radius-${borderRadiusType}`;
    const cssPropValue = `var(--admiral-border-kind-${borderRadiusType}_${getNumFromStr(borderRadiusKind)})`;
    document.body.style.setProperty(cssPropName, cssPropValue);
  } else if (!CSSCustomProps) {
    document.body.style.removeProperty('--admiral-border-radius-Small');
    document.body.style.removeProperty('--admiral-border-radius-Medium');
    document.body.style.removeProperty('--admiral-border-radius-Large');
  }

  return function swapBorder(theme?: Theme): Theme {
    if (theme) {
      theme.shape.borderRadiusKind = borderRadiusKind || theme.shape.borderRadiusKind;
      return theme;
    }
    LIGHT_THEME.shape.borderRadiusKind = borderRadiusKind || LIGHT_THEME.shape.borderRadiusKind;
    return LIGHT_THEME;
  };
}
