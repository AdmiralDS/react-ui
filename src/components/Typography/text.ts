import styled, { css } from 'styled-components';

import type { Typography } from './typography';
import { TYPOGRAPHY } from './typography';

export type TextProps = {
  color?: string;
};

export const getTextStyle = ({
  color,
  fontSize,
  fontWeight,
  lineHeight,
}: {
  color?: string;
  fontSize: keyof Typography['fontSize'];
  fontWeight: keyof Typography['fontWeight'];
  lineHeight: keyof Typography['lineHeight'];
}) => css`
  color: ${color || 'inherit'};
  font-family: ${TYPOGRAPHY.fontFamily};
  font-size: ${TYPOGRAPHY.fontSize[fontSize]};
  font-weight: ${TYPOGRAPHY.fontWeight[fontWeight]};
  line-height: ${TYPOGRAPHY.lineHeight[lineHeight]};
`;

/**
 * @deprecated since version 0.0.35
 * Will be deleted in version 0.0.38
 *
 * use component <T font='Header/HL3'/> instead
 */
export const Main_XXL = styled.div<TextProps>`
  ${({ color }) => getTextStyle({ color, fontSize: 42, fontWeight: 'bold', lineHeight: 52 })};
`;

/**
 * @deprecated since version 0.0.35
 * Will be deleted in version 0.0.38
 *
 * use component <T font='Header/H1'/> instead
 */
export const Main_XL = styled.div<TextProps>`
  ${({ color }) => getTextStyle({ color, fontSize: 36, fontWeight: 'bold', lineHeight: 44 })};
`;

/**
 * @deprecated since version 0.0.35
 * Will be deleted in version 0.0.38
 *
 * use component <T font='Header/H2'/> instead
 */
export const Main_L = styled.h1<TextProps>`
  ${({ color }) => getTextStyle({ color, fontSize: 32, fontWeight: 'bold', lineHeight: 40 })};
`;

/**
 * @deprecated since version 0.0.35
 * Will be deleted in version 0.0.38
 *
 * use component <T font='Header/H3'/> instead
 */
export const Main_M = styled.h2<TextProps>`
  ${({ color }) => getTextStyle({ color, fontSize: 28, fontWeight: 'bold', lineHeight: 36 })};
`;

/**
 * @deprecated since version 0.0.35
 * Will be deleted in version 0.0.38
 *
 * use component <T font='Header/H5'/> instead
 */
export const Main_S = styled.h3<TextProps>`
  ${({ color }) => getTextStyle({ color, fontSize: 22, fontWeight: 'bold', lineHeight: 28 })};
`;

/**
 * @deprecated since version 0.0.35
 * Will be deleted in version 0.0.38
 *
 * use component <T font='Header/H6'/> instead
 */
export const Main_XS_bold = styled.h4<TextProps>`
  ${({ color }) => getTextStyle({ color, fontSize: 18, fontWeight: 'bold', lineHeight: 24 })};
`;

/**
 * @deprecated since version 0.0.35
 * Will be deleted in version 0.0.38
 *
 * use component <T font='Subtitle/Subtitle 1'/> instead
 */
export const Main_XS_normal = styled.h5<TextProps>`
  ${({ color }) =>
    getTextStyle({
      color,
      fontSize: 18,
      fontWeight: 'normal',
      lineHeight: 24,
    })};
`;

/**
 * @deprecated since version 0.0.35
 * Will be deleted in version 0.0.38
 *
 * use component <T font='Subtitle/Subtitle 2'/> instead
 */
export const Additional_L_bold = styled.h6<TextProps>`
  ${({ color }) => getTextStyle({ color, fontSize: 16, fontWeight: 'bold', lineHeight: 24 })};
`;

/**
 * @deprecated since version 0.0.35
 * Will be deleted in version 0.0.38
 *
 * use component <T font='Body/Body 1 Long'/> instead
 */
export const Additional_L_normal = styled.div<TextProps>`
  ${({ color }) =>
    getTextStyle({
      color,
      fontSize: 16,
      fontWeight: 'normal',
      lineHeight: 24,
    })};
`;

/**
 * @deprecated since version 0.0.35
 * Will be deleted in version 0.0.38
 *
 * use component <T font='Body/Body 1 Short'/> instead
 */
export const Additional_M_normal = styled.div<TextProps>`
  ${({ color }) =>
    getTextStyle({
      color,
      fontSize: 16,
      fontWeight: 'normal',
      lineHeight: 20,
    })};
`;

/**
 * @deprecated since version 0.0.35
 * Will be deleted in version 0.0.38
 *
 * use component <T font='Subtitle/Subtitle 3'/> instead
 */
export const Additional_S_bold = styled.div<TextProps>`
  ${({ color }) => getTextStyle({ color, fontSize: 14, fontWeight: 'bold', lineHeight: 20 })};
`;

/**
 * @deprecated since version 0.0.35
 * Will be deleted in version 0.0.38
 *
 * use component <T font='Body/Body 2 Long'/> instead
 */
export const Additional_S_normal = styled.div<TextProps>`
  ${({ color }) =>
    getTextStyle({
      color,
      fontSize: 14,
      fontWeight: 'normal',
      lineHeight: 20,
    })};
`;

/**
 * @deprecated since version 0.0.35
 * Will be deleted in version 0.0.38
 *
 * use component <T font='Body/Body 2 Short'/> instead
 */
export const Additional_XS_normal = styled.div<TextProps>`
  ${({ color }) =>
    getTextStyle({
      color,
      fontSize: 14,
      fontWeight: 'normal',
      lineHeight: 16,
    })};
`;

/**
 * @deprecated since version 0.0.35
 * Will be deleted in version 0.0.38
 *
 * use component <T font='Button/Button 1'/> instead
 */
export const Button_M = styled.div<TextProps>`
  ${({ color }) =>
    getTextStyle({
      color,
      fontSize: 16,
      fontWeight: 'medium',
      lineHeight: 24,
    })};
`;

/**
 * @deprecated since version 0.0.35
 * Will be deleted in version 0.0.38
 *
 * use component <T font='Button/Button 2'/> instead
 */
export const Button_S = styled.div<TextProps>`
  ${({ color }) =>
    getTextStyle({
      color,
      fontSize: 14,
      fontWeight: 'medium',
      lineHeight: 20,
    })};
`;

/**
 * @deprecated since version 0.0.35
 * Will be deleted in version 0.0.38
 *
 * use component <T font='Caption/Caption 1'/> instead
 */
export const Caption_XS = styled.div<TextProps>`
  ${({ color }) =>
    getTextStyle({
      color,
      fontSize: 12,
      fontWeight: 'normal',
      lineHeight: 16,
    })};
`;
