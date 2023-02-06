import { css } from 'styled-components';
import { typography } from '#src/components/Typography';
import { IconContainer } from '#src/components/TextButton/commonMixin';

const defaultDimensionMixin = css<{ displayAsSquare?: boolean; hasIconLeft?: boolean; hasIconRight?: boolean }>`
  padding: 0;
  height: 56px;
  ${(props) => (props.displayAsSquare ? 'width: 56px;' : 'padding: 0 31px;')}
  ${(props) => (!props.displayAsSquare && props.hasIconLeft ? 'padding-left: 29px;' : '')}
  ${(props) => (!props.displayAsSquare && props.hasIconRight ? 'padding-right: 29px;' : '')}
  ${IconContainer} {
    width: 24px;
    height: 24px;
  }

  ${typography['Button/Button 1']}
`;

export const dimensionMixin = css<{ displayAsSquare?: boolean; hasIconLeft?: boolean; hasIconRight?: boolean }>`
  ${defaultDimensionMixin}

  &[data-dimension='xl'] {
    ${defaultDimensionMixin}
  }

  &[data-dimension='l'] {
    height: 48px;
    ${(props) => (props.displayAsSquare ? 'width: 48px;' : 'padding: 0 23px;')}
    ${(props) => (!props.displayAsSquare && props.hasIconLeft ? 'padding-left: 21px;' : '')}
    ${(props) => (!props.displayAsSquare && props.hasIconRight ? 'padding-right: 21px;' : '')}
  }

  &[data-dimension='m'] {
    height: 40px;
    ${(props) => (props.displayAsSquare ? 'width: 40px;' : 'padding: 0 19px;')}
    ${(props) => (!props.displayAsSquare && props.hasIconLeft ? 'padding-left: 17px;' : '')}
    ${(props) => (!props.displayAsSquare && props.hasIconRight ? 'padding-right: 17px;' : '')}
  }

  &[data-dimension='s'] {
    height: 32px;
    ${(props) => (props.displayAsSquare ? 'width: 32px;' : 'padding: 0 15px;')}
    ${(props) => (!props.displayAsSquare && props.hasIconLeft ? 'padding-left: 13px;' : '')}
    ${(props) => (!props.displayAsSquare && props.hasIconRight ? 'padding-right: 13px;' : '')}
    ${IconContainer} {
      width: 20px;
      height: 20px;
    }
    ${typography['Button/Button 2']}
  }
`;
