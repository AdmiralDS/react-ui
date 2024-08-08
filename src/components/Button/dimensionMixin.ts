import styled, { css } from 'styled-components';
import { typography } from '#src/components/Typography';
import type { Dimension } from '#src/components/Button/types';

export const ButtonIconContainer = styled.div``;

function getHorizontalIconPadding(dimension: Dimension) {
  switch (dimension) {
    case 's':
      return 13;
    case 'm':
      return 17;
    case 'l':
      return 21;
    case 'xl':
    default:
      return 29;
  }
}

/**
 * @deprecated Помечено как deprecated в версии 5.2.0, будет удалено в 9.x.x версии.
 * Взамен используйте iconStart или iconEnd
 *
 * css mixin для установки правильного отступа у иконки
 **/
export const PaddingForButtonWithIconLeft = css<{ $displayAsSquare?: boolean }>`
  .button-group[data-dimension='xl'] &&,
  &[data-dimension='xl'] {
    ${(props) => !props.$displayAsSquare && `padding-left: ${getHorizontalIconPadding('xl')}px;`}
  }

  .button-group[data-dimension='l'] &&,
  &[data-dimension='l'] {
    ${(props) => !props.$displayAsSquare && `padding-left: ${getHorizontalIconPadding('l')}px;`}
  }

  .button-group[data-dimension='m'] &&,
  &[data-dimension='m'] {
    ${(props) => !props.$displayAsSquare && `padding-left: ${getHorizontalIconPadding('m')}px;`}
  }

  .button-group[data-dimension='s'] &&,
  &[data-dimension='s'] {
    ${(props) => !props.$displayAsSquare && `padding-left: ${getHorizontalIconPadding('s')}px;`}
  }
`;

/**
 * @deprecated Помечено как deprecated в версии 5.2.0, будет удалено в 9.x.x версии.
 * Взамен используйте iconStart или iconEnd
 *
 * css mixin для установки правильного отступа у иконки
 **/
export const PaddingForButtonWithIconRight = css<{ $displayAsSquare?: boolean }>`
  .button-group[data-dimension='xl'] &&,
  &[data-dimension='xl'] {
    ${(props) => !props.$displayAsSquare && `padding-right: ${getHorizontalIconPadding('xl')}px;`}
  }

  .button-group[data-dimension='l'] &&,
  &[data-dimension='l'] {
    ${(props) => !props.$displayAsSquare && `padding-right: ${getHorizontalIconPadding('l')}px;`}
  }

  .button-group[data-dimension='m'] &&,
  &[data-dimension='m'] {
    ${(props) => !props.$displayAsSquare && `padding-right: ${getHorizontalIconPadding('m')}px;`}
  }

  .button-group[data-dimension='s'] &&,
  &[data-dimension='s'] {
    ${(props) => !props.$displayAsSquare && `padding-right: ${getHorizontalIconPadding('s')}px;`}
  }
`;

const defaultDimensionMixin = css<{ $displayAsSquare?: boolean }>`
  padding: 0;
  height: 56px;
  ${(props) => (props.$displayAsSquare ? 'width: 56px;' : 'padding: 0 29px;')}
  ${ButtonIconContainer} {
    width: 24px;
    height: 24px;
  }

  ${typography['Button/Button 1']}
`;

export const dimensionMixin = css<{ $displayAsSquare?: boolean }>`
  ${defaultDimensionMixin}

  .button-group[data-dimension='xl'] &&,
  &[data-dimension='xl'] {
    ${defaultDimensionMixin}
  }

  .button-group[data-dimension='l'] &&,
  &[data-dimension='l'] {
    height: 48px;
    ${(props) => (props.$displayAsSquare ? 'width: 48px;' : 'padding: 0 21px;')}
  }

  .button-group[data-dimension='m'] &&,
  &[data-dimension='m'] {
    height: 40px;
    ${(props) => (props.$displayAsSquare ? 'width: 40px;' : 'padding: 0 17px;')}
  }

  .button-group[data-dimension='s'] &&,
  &[data-dimension='s'] {
    height: 32px;
    ${(props) => (props.$displayAsSquare ? 'width: 32px;' : 'padding: 0 13px;')}
    ${ButtonIconContainer} {
      width: 20px;
      height: 20px;
    }
    ${typography['Button/Button 2']}
  }
`;
