import { Color } from '#src/components/themes/common/color';
import { ZIndex } from '#src/components/themes/common/zIndex';
import baseStyled, { ThemedStyledInterface } from 'styled-components';

export * from './color';

export interface Shadow {
  ClickableActive: string;
  ClickableDefault: string;
  ClickableHover: string;
  NonClickable: string;
}

export interface Theme {
  color: Color;
  shadow: Shadow;
  zIndex: ZIndex;
  name: 'light' | 'dark';
}

export const styled = baseStyled as ThemedStyledInterface<Theme>;
