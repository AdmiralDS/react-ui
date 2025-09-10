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
      padding-left: ${$dimension === 'm' ? 32 : 28}px;
    }
  `}
  ${styleTextMixin}
`;
