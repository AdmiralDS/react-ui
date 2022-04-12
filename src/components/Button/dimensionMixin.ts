import { css } from 'styled-components';
import { typography } from '#/components/Typography';

const defaultDimensionMixin = css<{ displayAsSquare?: boolean }>`
  padding: 0;
  height: 56px;
  ${(props) => (props.displayAsSquare ? 'width: 56px;' : 'padding: 0 30px;')}

  ${typography['Button/M']}
`;

export const dimensionMixin = css<{ displayAsSquare?: boolean }>`
  ${defaultDimensionMixin}

  &[data-dimension='xl'] {
    ${defaultDimensionMixin}
  }

  &[data-dimension='l'] {
    height: 48px;
    ${(props) => (props.displayAsSquare ? 'width: 48px;' : 'padding: 0 22px;')}
  }

  &[data-dimension='m'] {
    height: 40px;
    ${(props) => (props.displayAsSquare ? 'width: 40px;' : 'padding: 0 18px;')}
  }

  &[data-dimension='s'] {
    height: 32px;
    ${(props) => (props.displayAsSquare ? 'width: 32px;' : 'padding: 0 14px;')}
    ${typography['Button/S']}
  }
`;
