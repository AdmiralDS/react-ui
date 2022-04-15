import { Color } from '#src/components-ver2/themes/common/color';
import { ZIndex } from '#src/components-ver2/themes/common/zIndex';
import baseStyled, { ThemedStyledInterface } from 'styled-components';

export * from './color';

export type ColorName = keyof Color;

export const DefaultFontColorName: ColorName = 'Neutral/Neutral 90';
export const DefaultBackgroundColorName: ColorName = 'Neutral/Neutral 00';
export const MainPrimaryColorName: ColorName = 'Primary/Primary 60 Main';

export interface Shadow {
  'Shadow 02': string;
  'Shadow 04': string;
  'Shadow 08': string;
  'Shadow 16': string;
  'Shadow Stroke': string;
}

export interface Theme {
  color: Color;
  shadow: Shadow;
  zIndex: ZIndex;
  name: 'light' | 'dark';
}

export const styled = baseStyled as ThemedStyledInterface<Theme>;
