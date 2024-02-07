import type { Color } from './color';
import type { ZIndex } from './zIndex';
import type { Locale } from './locales';
import type { css } from 'styled-components';

export type ColorName = keyof Color;

export const DefaultFontColorName: ColorName = 'Neutral/Neutral 90';
export const DefaultBackgroundColorName: ColorName = 'Neutral/Neutral 00';
export const MainPrimaryColorName: ColorName = 'Primary/Primary 60 Main';
export type ThemeTypographyType = {
  'Main/XXL': ReturnType<typeof css>;

  'Main/XL': ReturnType<typeof css>;

  'Main/L': ReturnType<typeof css>;

  'Main/M': ReturnType<typeof css>;

  'Main/S': ReturnType<typeof css>;

  'Main/XS-bold': ReturnType<typeof css>;

  'Main/XS': ReturnType<typeof css>;

  'Additional/L-bold': ReturnType<typeof css>;

  'Additional/L': ReturnType<typeof css>;

  'Additional/M': ReturnType<typeof css>;

  'Additional/S': ReturnType<typeof css>;

  'Additional/S-bold': ReturnType<typeof css>;

  'Additional/XS': ReturnType<typeof css>;

  'Button/M': ReturnType<typeof css>;

  'Button/S': ReturnType<typeof css>;

  'Caption/XS': ReturnType<typeof css>;

  'Header/HL1': ReturnType<typeof css>;

  'Header/HL2': ReturnType<typeof css>;

  'Header/HL3': ReturnType<typeof css>;

  'Header/H1': ReturnType<typeof css>;

  'Header/H2': ReturnType<typeof css>;

  'Header/H3': ReturnType<typeof css>;

  'Header/H4': ReturnType<typeof css>;

  'Header/H5': ReturnType<typeof css>;

  'Header/H6': ReturnType<typeof css>;

  'Subtitle/Subtitle 1': ReturnType<typeof css>;

  'Subtitle/Subtitle 2': ReturnType<typeof css>;

  'Subtitle/Subtitle 3': ReturnType<typeof css>;

  'Body/Body 1 Long': ReturnType<typeof css>;

  'Body/Body 1 Short': ReturnType<typeof css>;

  'Body/Body 2 Long': ReturnType<typeof css>;

  'Body/Body 2 Short': ReturnType<typeof css>;

  'Button/Button 1': ReturnType<typeof css>;

  'Button/Button 2': ReturnType<typeof css>;

  'Caption/Caption 1': ReturnType<typeof css>;

  'Caption/Caption 2': ReturnType<typeof css>;
};

export interface Shadow {
  'Shadow 02': string;
  'Shadow 04': string;
  'Shadow 08': string;
  'Shadow 12': string;
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
  description?: string;
  /** Код локали, поддерживаемый Intl */
  currentLocale: string;
  locales: { [localeCode: string]: Locale };
  typography: ThemeTypographyType;
  fontFamily: string;
}
