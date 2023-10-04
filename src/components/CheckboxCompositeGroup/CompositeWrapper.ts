import styled, { css } from 'styled-components';

import type { CheckboxDimension } from '@admiral-ds/react-ui';
import { CheckboxGroupWrapper } from '../CheckboxGroup/CheckboxWrapper';
import { styleTextMixin } from '../CheckboxGroup/mixins';

export const CompositeWrapper = styled.div<{ $dimension: CheckboxDimension; disabled?: boolean }>`
  ${({ $dimension }) => css`
    position: relative;
    width: fit-content;
    display: flex;
    flex-flow: column;
    & > ${CheckboxGroupWrapper} {
      padding-left: ${$dimension === 'm' ? 30 : 25}px;
    }
  `}
  ${styleTextMixin}
`;
