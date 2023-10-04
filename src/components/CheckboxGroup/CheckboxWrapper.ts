import styled from 'styled-components';
import { styleTextMixin } from './mixins';
import type { CheckboxDimension } from '../Checkbox/CheckboxDimension';

export const CheckboxGroupWrapper = styled.div<{ disabled?: boolean; $dimension: CheckboxDimension }>`
  flex-direction: column;
  display: inline-flex;
  box-sizing: border-box;
  ${styleTextMixin};

  & > * {
    margin-top: ${({ $dimension }) => ($dimension === 'm' ? 16 : 12)}px;
  }
`;
