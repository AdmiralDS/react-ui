import { BorderRadiusType, LIGHT_THEME, Theme } from '@admiral-ds/react-ui';

const getNumFromStr = (str: string) => {
  let result = str;
  return result.replace(/^\D+/g, '');
};

export function createBorderRadiusSwapper(borderRadiusKind?: BorderRadiusType, CSSCustomProps?: boolean) {
  if (borderRadiusKind && CSSCustomProps) {
    const cssPropValueSmall = `var(--admiral-border-kind-Small_${getNumFromStr(borderRadiusKind)})`;
    const cssPropValueMedium = `var(--admiral-border-kind-Medium_${getNumFromStr(borderRadiusKind)})`;
    const cssPropValueLarge = `var(--admiral-border-kind-Large_${getNumFromStr(borderRadiusKind)})`;

    document.body.style.setProperty('--admiral-border-radius-Small', cssPropValueSmall);
    document.body.style.setProperty('--admiral-border-radius-Medium', cssPropValueMedium);
    document.body.style.setProperty('--admiral-border-radius-Large', cssPropValueLarge);
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
