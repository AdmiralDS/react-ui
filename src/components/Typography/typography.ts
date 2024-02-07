import { css } from 'styled-components';

type FontSize = {
  12: string;
  14: string;
  16: string;
  18: string;
  22: string;
  28: string;
  32: string;
  36: string;
  42: string;
};

const FONT_SIZE: FontSize = {
  12: '12px',
  14: '14px',
  16: '16px',
  18: '18px',
  22: '22px',
  28: '28px',
  32: '32px',
  36: '36px',
  42: '42px',
};

type FontWeight = {
  normal: number;
  medium: number;
  bold: number;
};

const FONT_WEIGHT: FontWeight = {
  normal: 400,
  medium: 500,
  bold: 600,
};

type LineHeight = {
  16: string;
  20: string;
  24: string;
  28: string;
  36: string;
  40: string;
  44: string;
  52: string;
};

const LINE_HEIGHT: LineHeight = {
  16: '16px',
  20: '20px',
  24: '24px',
  28: '28px',
  36: '36px',
  40: '40px',
  44: '44px',
  52: '52px',
};

export type Typography = {
  fontSize: FontSize;
  fontWeight: FontWeight;
  lineHeight: LineHeight;
};

export const TYPOGRAPHY: Typography = {
  fontSize: FONT_SIZE,
  fontWeight: FONT_WEIGHT,
  lineHeight: LINE_HEIGHT,
};

export const typography = createTypography();

export function createTypography() {
  return {
    'Main/XXL': css`
      font-family: ${(p) => p.theme.fontFamily};
      font-style: normal;
      font-weight: 550;
      font-size: 42px;
      line-height: 52px;
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,

    'Main/XL': css`
      font-family: ${(p) => p.theme.fontFamily};
      font-style: normal;
      font-weight: 550;
      font-size: 36px;
      line-height: 44px;
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,

    'Main/L': css`
      font-family: ${(p) => p.theme.fontFamily};
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      line-height: 40px;
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,

    'Main/M': css`
      font-family: ${(p) => p.theme.fontFamily};
      font-style: normal;
      font-weight: 550;
      font-size: 28px;
      line-height: 36px;
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,

    'Main/S': css`
      font-family: ${(p) => p.theme.fontFamily};
      font-style: normal;
      font-weight: 550;
      font-size: 20px;
      line-height: 28px;
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,

    'Main/XS-bold': css`
      font-family: ${(p) => p.theme.fontFamily};
      font-style: normal;
      font-weight: 550;
      font-size: 18px;
      line-height: 24px;
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,

    'Main/XS': css`
      font-family: ${(p) => p.theme.fontFamily};
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 24px;
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,

    'Additional/L-bold': css`
      font-family: ${(p) => p.theme.fontFamily};
      font-style: normal;
      font-weight: 550;
      font-size: 16px;
      line-height: 24px;
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,

    'Additional/L': css`
      font-family: ${(p) => p.theme.fontFamily};
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,

    'Additional/M': css`
      font-family: ${(p) => p.theme.fontFamily};
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 20px;
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,

    'Additional/S': css`
      font-family: ${(p) => p.theme.fontFamily};
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,

    'Additional/S-bold': css`
      font-family: ${(p) => p.theme.fontFamily};
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,

    'Additional/XS': css`
      font-family: ${(p) => p.theme.fontFamily};
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 16px;
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,

    'Button/M': css`
      font-family: ${(p) => p.theme.fontFamily};
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      /* or 150% */

      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,

    'Button/S': css`
      font-family: ${(p) => p.theme.fontFamily};
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      /* or 143% */

      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,

    'Caption/XS': css`
      font-family: ${(p) => p.theme.fontFamily};
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 16px;
      /* identical to box height, or 133% */

      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,

    'Header/HL1': css`
      font-family: ${(p) => p.theme.fontFamily};
      font-style: normal;
      font-weight: 550;
      font-size: 72px;
      line-height: 80px;
      /* or 111% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,

    'Header/HL2': css`
      font-family: ${(p) => p.theme.fontFamily};
      font-style: normal;
      font-weight: 550;
      font-size: 56px;
      line-height: 64px;
      /* or 114% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,

    'Header/HL3': css`
      font-family: ${(p) => p.theme.fontFamily};
      font-style: normal;
      font-weight: 550;
      font-size: 48px;
      line-height: 56px;
      /* or 117% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,

    'Header/H1': css`
      font-family: ${(p) => p.theme.fontFamily};
      font-style: normal;
      font-weight: 550;
      font-size: 40px;
      line-height: 48px;
      /* or 120% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,

    'Header/H2': css`
      font-family: ${(p) => p.theme.fontFamily};
      font-style: normal;
      font-weight: 550;
      font-size: 34px;
      line-height: 40px;
      /* or 118% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,

    'Header/H3': css`
      font-family: ${(p) => p.theme.fontFamily};
      font-style: normal;
      font-weight: 550;
      font-size: 28px;
      line-height: 36px;
      /* or 129% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,

    'Header/H4': css`
      font-family: ${(p) => p.theme.fontFamily};
      font-style: normal;
      font-weight: 550;
      font-size: 24px;
      line-height: 32px;
      /* or 133% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,

    'Header/H5': css`
      font-family: ${(p) => p.theme.fontFamily};
      font-style: normal;
      font-weight: 550;
      font-size: 20px;
      line-height: 28px;
      /* or 140% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,

    'Header/H6': css`
      font-family: ${(p) => p.theme.fontFamily};
      font-style: normal;
      font-weight: 550;
      font-size: 18px;
      line-height: 24px;
      /* or 133% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,

    'Subtitle/Subtitle 1': css`
      font-family: ${(p) => p.theme.fontFamily};
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 24px;
      /* or 133% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,

    'Subtitle/Subtitle 2': css`
      font-family: ${(p) => p.theme.fontFamily};
      font-style: normal;
      font-weight: 550;
      font-size: 16px;
      line-height: 24px;
      /* or 150% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,

    'Subtitle/Subtitle 3': css`
      font-family: ${(p) => p.theme.fontFamily};
      font-style: normal;
      font-weight: 550;
      font-size: 14px;
      line-height: 20px;
      /* or 143% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,

    'Body/Body 1 Long': css`
      font-family: ${(p) => p.theme.fontFamily};
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      /* or 150% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,

    'Body/Body 1 Short': css`
      font-family: ${(p) => p.theme.fontFamily};
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      /* or 125% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,

    'Body/Body 2 Long': css`
      font-family: ${(p) => p.theme.fontFamily};
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      /* or 133% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,

    'Body/Body 2 Short': css`
      font-family: ${(p) => p.theme.fontFamily};
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      /* or 114% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,

    'Button/Button 1': css`
      font-family: ${(p) => p.theme.fontFamily};
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      /* or 150% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,

    'Button/Button 2': css`
      font-family: ${(p) => p.theme.fontFamily};
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      /* or 143% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,

    'Caption/Caption 1': css`
      font-family: ${(p) => p.theme.fontFamily};
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      /* identical to box height, or 133% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,

    'Caption/Caption 2': css`
      font-family: ${(p) => p.theme.fontFamily};
      font-style: normal;
      font-weight: 400;
      font-size: 10px;
      line-height: 12px;
      /* or 120% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,
  };
}
