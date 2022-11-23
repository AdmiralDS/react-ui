import { Color } from '#src/components/themes/common/color';
import { ZIndex } from '#src/components/themes/common/zIndex';
import { Locale } from '#src/components/themes/common/locales';
import baseStyled, { ThemedStyledInterface } from 'styled-components';

export * from './color';
export * from './locales';

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

export type BorderRadiusType =
  | 'Border radius 0'
  | 'Border radius 2'
  | 'Border radius 4'
  | 'Border radius 6'
  | 'Border radius 8'
  | 'Border radius 10';

export interface Shape {
  borderRadiusKind: BorderRadiusType;
}

export interface Theme {
  color: Color;
  shadow: Shadow;
  zIndex: ZIndex;
  shape: Shape;
  name: 'light' | 'dark';
  /** Код локали, поддерживаемый Intl */
  currentLocale: string;
  locales: { [localeCode: string]: Locale };
}

export const styled = baseStyled as ThemedStyledInterface<Theme>;
