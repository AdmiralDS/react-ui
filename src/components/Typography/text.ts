import { css } from 'styled-components';

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
  font-family: ${(p) => p.theme.fontFamily};
  font-size: ${TYPOGRAPHY.fontSize[fontSize]};
  font-weight: ${TYPOGRAPHY.fontWeight[fontWeight]};
  line-height: ${TYPOGRAPHY.lineHeight[lineHeight]};
`;
