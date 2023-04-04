import { css } from 'styled-components';
import { typography } from '#src/components/Typography';
import { IconContainer } from '#src/components/TextButton/commonMixin';

interface DimensionProps {
  dimension?: string;
  skeleton?: boolean;
  displayRight?: boolean;
}

const defaultDimensionMixin = css<DimensionProps>`
  ${IconContainer} {
    margin: ${(p) => (p.displayRight ? '0 0 0 8px' : '0 8px 0 0')};
  }
`;

export const dimensionMixin = css<DimensionProps>`
  ${defaultDimensionMixin}

  &[data-dimension='m'] {
    ${IconContainer} {
      width: 24px;
      height: 24px;
    }
    ${typography['Button/Button 1']};
  }

  &[data-dimension='s'] {
    ${IconContainer} {
      width: 20px;
      height: 20px;
    }
    ${typography['Button/Button 2']};
  }
`;
