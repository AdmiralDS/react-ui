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
    /**
     * @deprecated Помечено как deprecated в версии 7.12.1, будет удалено в версии 10.x.x
     *
     * Взамен используйте свойство 'Header/HL3'
     */
    'Main/XXL': css`
      font-family: var(--admiral-font-family, ${(p) => p.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_HL3, 550);
      font-size: var(--admiral-font-size-Header_HL3, 42px);
      line-height: var(--admiral-line-height-Header_HL3, 52px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,
    /**
     * @deprecated Помечено как deprecated в версии 7.12.1, будет удалено в версии 10.x.x
     *
     * Взамен используйте свойство 'Header/H1'
     */
    'Main/XL': css`
      font-family: var(--admiral-font-family, ${(p) => p.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H1, 550);
      font-size: var(--admiral-font-size-Header_H1, 36px);
      line-height: var(--admiral-line-height-Header_H1, 44px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,
    /**
     * @deprecated Помечено как deprecated в версии 7.12.1, будет удалено в версии 10.x.x
     *
     * Взамен используйте свойство 'Header/H2'
     */
    'Main/L': css`
      font-family: var(--admiral-font-family, ${(p) => p.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H2, 500);
      font-size: var(--admiral-font-size-Header_H2, 32px);
      line-height: var(--admiral-line-height-Header_H2, 40px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,
    /**
     * @deprecated Помечено как deprecated в версии 7.12.1, будет удалено в версии 10.x.x
     *
     * Взамен используйте свойство 'Header/H3'
     */
    'Main/M': css`
      font-family: var(--admiral-font-family, ${(p) => p.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H3, 550);
      font-size: var(--admiral-font-size-Header_H3, 28px);
      line-height: var(--admiral-line-height-Header_H3, 36px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,
    /**
     * @deprecated Помечено как deprecated в версии 7.12.1, будет удалено в версии 10.x.x
     *
     * Взамен используйте свойство 'Header/H5'
     */
    'Main/S': css`
      font-family: var(--admiral-font-family, ${(p) => p.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H5, 550);
      font-size: var(--admiral-font-size-Header_H5, 20px);
      line-height: var(--admiral-line-height-Header_H5, 28px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,
    /**
     * @deprecated Помечено как deprecated в версии 7.12.1, будет удалено в версии 10.x.x
     *
     * Взамен используйте свойство 'Header/H6'
     */
    'Main/XS-bold': css`
      font-family: var(--admiral-font-family, ${(p) => p.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H6, 550);
      font-size: var(--admiral-font-size-Header_H6, 18px);
      line-height: var(--admiral-line-height-Header_H6, 24px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,
    /**
     * @deprecated Помечено как deprecated в версии 7.12.1, будет удалено в версии 10.x.x
     *
     * Взамен используйте свойство 'Subtitle/Subtitle 1'
     */
    'Main/XS': css`
      font-family: var(--admiral-font-family, ${(p) => p.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle1, 400);
      font-size: var(--admiral-font-size-Subtitle_Subtitle1, 18px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle1, 24px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,
    /**
     * @deprecated Помечено как deprecated в версии 7.12.1, будет удалено в версии 10.x.x
     *
     * Взамен используйте свойство 'Subtitle/Subtitle 2'
     */
    'Additional/L-bold': css`
      font-family: var(--admiral-font-family, ${(p) => p.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle2, 550);
      font-size: var(--admiral-font-size-Subtitle_Subtitle2, 16px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle2, 24px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,
    /**
     * @deprecated Помечено как deprecated в версии 7.12.1, будет удалено в версии 10.x.x
     *
     * Взамен используйте свойство 'Body/Body 1 Long'
     */
    'Additional/L': css`
      font-family: var(--admiral-font-family, ${(p) => p.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body1Long, 400);
      font-size: var(--admiral-font-size-Body_Body1Long, 16px);
      line-height: var(--admiral-line-height-Body_Body1Long, 24px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,
    /**
     * @deprecated Помечено как deprecated в версии 7.12.1, будет удалено в версии 10.x.x
     *
     * Взамен используйте свойство 'Body/Body 1 Short'
     */
    'Additional/M': css`
      font-family: var(--admiral-font-family, ${(p) => p.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body1Short, 400);
      font-size: var(--admiral-font-size-Body_Body1Short, 16px);
      line-height: var(--admiral-line-height-Body_Body1Short, 20px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,
    /**
     * @deprecated Помечено как deprecated в версии 7.12.1, будет удалено в версии 10.x.x
     *
     * Взамен используйте свойство 'Body/Body 2 Long'
     */
    'Additional/S': css`
      font-family: var(--admiral-font-family, ${(p) => p.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body2Long, 400);
      font-size: var(--admiral-font-size-Body_Body2Long, 14px);
      line-height: var(--admiral-line-height-Body_Body2Long, 20px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,
    /**
     * @deprecated Помечено как deprecated в версии 7.12.1, будет удалено в версии 10.x.x
     *
     * Взамен используйте свойство 'Subtitle/Subtitle 3'
     */
    'Additional/S-bold': css`
      font-family: var(--admiral-font-family, ${(p) => p.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle3, 500);
      font-size: var(--admiral-font-size-Subtitle_Subtitle3, 14px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle3, 20px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,
    /**
     * @deprecated Помечено как deprecated в версии 7.12.1, будет удалено в версии 10.x.x
     *
     * Взамен используйте свойство 'Body/Body 2 Short'
     */
    'Additional/XS': css`
      font-family: var(--admiral-font-family, ${(p) => p.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body2Short, 400);
      font-size: var(--admiral-font-size-Body_Body2Short, 14px);
      line-height: var(--admiral-line-height-Body_Body2Short, 16px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,
    /**
     * @deprecated Помечено как deprecated в версии 7.12.1, будет удалено в версии 10.x.x
     *
     * Взамен используйте свойство 'Button/Button 1'
     */
    'Button/M': css`
      font-family: var(--admiral-font-family, ${(p) => p.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Button_Button1, 500);
      font-size: var(--admiral-font-size-Button_Button1, 16px);
      line-height: var(--admiral-line-height-Button_Button1, 24px);
      /* or 150% */

      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,
    /**
     * @deprecated Помечено как deprecated в версии 7.12.1, будет удалено в версии 10.x.x
     *
     * Взамен используйте свойство 'Button/Button 2'
     */
    'Button/S': css`
      font-family: var(--admiral-font-family, ${(p) => p.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Button_Button2, 500);
      font-size: var(--admiral-font-size-Button_Button2, 14px);
      line-height: var(--admiral-line-height-Button_Button2, 20px);
      /* or 143% */

      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,
    /**
     * @deprecated Помечено как deprecated в версии 7.12.1, будет удалено в версии 10.x.x
     *
     * Взамен используйте свойство 'Caption/Caption 1'
     */
    'Caption/XS': css`
      font-family: var(--admiral-font-family, ${(p) => p.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Caption_Caption1, 400);
      font-size: var(--admiral-font-size-Caption_Caption1, 12px);
      line-height: var(--admiral-line-height-Caption_Caption1, 16px);
      /* identical to box height, or 133% */

      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,

    'Header/HL1': css`
      font-family: var(--admiral-font-family, ${(p) => p.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_HL1, 550);
      font-size: var(--admiral-font-size-Header_HL1, 72px);
      line-height: var(--admiral-line-height-Header_HL1, 80px);
      /* or 111% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,

    'Header/HL2': css`
      font-family: var(--admiral-font-family, ${(p) => p.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_HL2, 550);
      font-size: var(--admiral-font-size-Header_HL2, 56px);
      line-height: var(--admiral-line-height-Header_HL2, 64px);
      /* or 114% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,

    'Header/HL3': css`
      font-family: var(--admiral-font-family, ${(p) => p.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_HL3, 550);
      font-size: var(--admiral-font-size-Header_HL3, 48px);
      line-height: var(--admiral-line-height-Header_HL3, 56px);
      /* or 117% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,

    'Header/H1': css`
      font-family: var(--admiral-font-family, ${(p) => p.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H1, 550);
      font-size: var(--admiral-font-size-Header_H1, 40px);
      line-height: var(--admiral-line-height-Header_H1, 48px);
      /* or 120% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,

    'Header/H2': css`
      font-family: var(--admiral-font-family, ${(p) => p.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H2, 550);
      font-size: var(--admiral-font-size-Header_H2, 34px);
      line-height: var(--admiral-line-height-Header_H2, 40px);
      /* or 118% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,

    'Header/H3': css`
      font-family: var(--admiral-font-family, ${(p) => p.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H3, 550);
      font-size: var(--admiral-font-size-Header_H3, 28px);
      line-height: var(--admiral-line-height-Header_H3, 36px);
      /* or 129% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,

    'Header/H4': css`
      font-family: var(--admiral-font-family, ${(p) => p.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H4, 550);
      font-size: var(--admiral-font-size-Header_H4, 24px);
      line-height: var(--admiral-line-height-Header_H4, 32px);
      /* or 133% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,

    'Header/H5': css`
      font-family: var(--admiral-font-family, ${(p) => p.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H5, 550);
      font-size: var(--admiral-font-size-Header_H5, 20px);
      line-height: var(--admiral-line-height-Header_H5, 28px);
      /* or 140% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,

    'Header/H6': css`
      font-family: var(--admiral-font-family, ${(p) => p.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H6, 550);
      font-size: var(--admiral-font-size-Header_H6, 18px);
      line-height: var(--admiral-line-height-Header_H6, 24px);
      /* or 133% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,

    'Subtitle/Subtitle 1': css`
      font-family: var(--admiral-font-family, ${(p) => p.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle1, 400);
      font-size: var(--admiral-font-size-Subtitle_Subtitle1, 18px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle1, 24px);
      /* or 133% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,

    'Subtitle/Subtitle 2': css`
      font-family: var(--admiral-font-family, ${(p) => p.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle2, 550);
      font-size: var(--admiral-font-size-Subtitle_Subtitle2, 16px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle2, 24px);
      /* or 150% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,

    'Subtitle/Subtitle 3': css`
      font-family: var(--admiral-font-family, ${(p) => p.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle3, 550);
      font-size: var(--admiral-font-size-Subtitle_Subtitle3, 14px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle3, 20px);
      /* or 143% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,

    'Body/Body 1 Long': css`
      font-family: var(--admiral-font-family, ${(p) => p.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body1Long, 400);
      font-size: var(--admiral-font-size-Body_Body1Long, 16px);
      line-height: var(--admiral-line-height-Body_Body1Long, 24px);
      /* or 150% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,

    'Body/Body 1 Short': css`
      font-family: var(--admiral-font-family, ${(p) => p.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body1Short, 400);
      font-size: var(--admiral-font-size-Body_Body1Short, 16px);
      line-height: var(--admiral-line-height-Body_Body1Short, 20px);
      /* or 125% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,

    'Body/Body 2 Long': css`
      font-family: var(--admiral-font-family, ${(p) => p.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body2Long, 400);
      font-size: var(--admiral-font-size-Body_Body2Long, 14px);
      line-height: var(--admiral-line-height-Body_Body2Long, 20px);
      /* or 133% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,

    'Body/Body 2 Short': css`
      font-family: var(--admiral-font-family, ${(p) => p.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body2Short, 400);
      font-size: var(--admiral-font-size-Body_Body2Short, 14px);
      line-height: var(--admiral-line-height-Body_Body2Short, 16px);
      /* or 114% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,

    'Button/Button 1': css`
      font-family: var(--admiral-font-family, ${(p) => p.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Button_Button1, 500);
      font-size: var(--admiral-font-size-Button_Button1, 16px);
      line-height: var(--admiral-line-height-Button_Button1, 24px);
      /* or 150% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,

    'Button/Button 2': css`
      font-family: var(--admiral-font-family, ${(p) => p.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Button_Button2, 500);
      font-size: var(--admiral-font-size-Button_Button2, 14px);
      line-height: var(--admiral-line-height-Button_Button2, 20px);
      /* or 143% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,

    'Caption/Caption 1': css`
      font-family: var(--admiral-font-family, ${(p) => p.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Caption_Caption1, 400);
      font-size: var(--admiral-font-size-Caption_Caption1, 12px);
      line-height: var(--admiral-line-height-Caption_Caption1, 16px);
      /* identical to box height, or 133% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,

    'Caption/Caption 2': css`
      font-family: var(--admiral-font-family, ${(p) => p.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Caption_Caption2, 400);
      font-size: var(--admiral-font-size-Caption_Caption2, 10px);
      line-height: var(--admiral-line-height-Caption_Caption2, 12px);
      /* or 120% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,
  };
}
