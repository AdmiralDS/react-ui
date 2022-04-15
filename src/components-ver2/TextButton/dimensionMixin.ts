import { css } from 'styled-components';
import { typography } from '#src/components-ver2/Typography';
import { IconContainer } from '#src/components-ver2/TextButton/commonMixin';

interface DimensionProps {
  dimension?: string;
  skeleton?: boolean;
  displayRight?: boolean;
}

const defaultDimensionMixin = css<DimensionProps>`
  ${IconContainer} {
    margin: ${(p) => (p.displayRight ? '0 0 0 10px' : '0 10px 0 0')};
  }
`;

export const dimensionMixin = css<DimensionProps>`
  ${defaultDimensionMixin}

  &[data-dimension='m'] {
    ${IconContainer} {
      width: ${({ skeleton }) => (skeleton ? '24px' : '20px')};
      height: ${({ skeleton }) => (skeleton ? '24px' : '20px')};
    }
    ${typography['Button/Button 1']};
  }

  &[data-dimension='s'] {
    ${IconContainer} {
      width: ${({ skeleton }) => (skeleton ? '20px' : '16px')};
      height: ${({ skeleton }) => (skeleton ? '20px' : '16px')};
    }
    ${typography['Button/Button 2']};
  }
`;
