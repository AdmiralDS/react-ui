import { css } from 'styled-components';
import { typography } from '#src/components/Typography';
import { IconContainer } from '#src/components/TextButton/commonMixin';

interface DimensionProps {
  $dimension?: string;
  $skeleton?: boolean;
}

export const dimensionMixin = css<DimensionProps>`
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
