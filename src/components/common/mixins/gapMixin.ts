import { css } from 'styled-components';

export type GapMixinType = 'horizontal' | 'vertical' | 'both';

type GapMixinProps = {
  $gap: number;
  $type?: GapMixinType;
};

const createHorizontalStyles = (halfValue: string, negativeHalfValue: string) => css`
  margin-left: ${negativeHalfValue};
  margin-right: ${negativeHalfValue};

  & > * {
    margin-left: ${halfValue};
    margin-right: ${halfValue};
  }
`;

const createVerticalStyles = (halfValue: string, negativeHalfValue: string) => css`
  margin-top: ${negativeHalfValue};
  margin-bottom: ${negativeHalfValue};

  & > * {
    margin-top: ${halfValue};
    margin-bottom: ${halfValue};
  }
`;

const buildGapStyles = ({ $gap, $type = 'both' }: GapMixinProps) => {
  if (!$gap) {
    return css``;
  }

  const halfValue = `${$gap / 2}px`;
  const negativeHalfValue = `-${$gap / 2}px`;

  switch ($type) {
    case 'horizontal':
      return createHorizontalStyles(halfValue, negativeHalfValue);
    case 'vertical':
      return createVerticalStyles(halfValue, negativeHalfValue);
    case 'both':
    default:
      return css`
        ${createHorizontalStyles(halfValue, negativeHalfValue)};
        ${createVerticalStyles(halfValue, negativeHalfValue)};
      `;
  }
};

export const gapMixin = css<GapMixinProps>`
  ${(p) => buildGapStyles(p)}
`;
