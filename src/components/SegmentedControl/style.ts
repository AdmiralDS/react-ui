import type { css } from 'styled-components';
import styled from 'styled-components';
import { mediumGroupBorderRadius } from '#src/components/themes/borderRadius';

import {
  dimensionMixin,
  ButtonIconContainer,
  filledMixin,
  filledDisabledMixin,
  outlinedMixin,
  outlineDisabledMixin,
  checkedMixin,
} from './mixins';
export { ButtonIconContainer } from './mixins';

export const Label = styled.label`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
`;

export const ButtonContent = styled.div<{ $addPadding: number }>`
  vertical-align: top;

  display: inline-flex;
  gap: 8px;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  max-width: calc(100% - ${(p) => p.$addPadding}px);

  > * {
    display: inline-block;
    flex: 0 1 auto;
    white-space: nowrap;
  }
  > ${ButtonIconContainer} {
    flex: 0 0 auto;
  }

  height: 24px;
  & > svg {
    width: 24px;
    height: 24px;
  }

  fieldset[data-dimension='s'] & {
    height: 20px;
    & > svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const Button = styled.div<{
  $displayAsSquare?: boolean;
  $loading?: boolean;
  $buttonCssMixin?: ReturnType<typeof css>;
}>`
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border: none;
  border-radius: ${(p) => `var(--admiral-border-radius-Medium, ${mediumGroupBorderRadius(p.theme.shape)})`};
  vertical-align: middle;
  pointer-events: none;

  ${dimensionMixin};
  ${(p) => p.$buttonCssMixin};

  ${ButtonContent} {
    ${(p) => (p.$loading ? 'visibility: hidden;' : '')}
  }
`;

export const SpinnerContainer = styled(ButtonIconContainer)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  container-type: inline-size;
`;

export const AdditionalPadding = styled.div`
  display: inline-block;
  width: 2px;
`;

export const Input = styled.input`
  appearance: none;
  ::-ms-check {
    display: none;
  }
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0;
  margin: 0;
  opacity: 0;
  box-sizing: border-box;

  fieldset[data-appearance='outlined'] &:disabled {
    cursor: not-allowed;
    ${outlineDisabledMixin}
  }

  fieldset[data-appearance='filled'] &:disabled {
    cursor: not-allowed;
    ${filledDisabledMixin}
  }

  &:checked:not(:disabled) {
    ${checkedMixin}
    & + div > ${SpinnerContainer} {
      & path {
        fill: ${(p) => `var(--admiral-color-Special_StaticWhite, ${p.theme.color['Special/Static White']})`};
      }
    }
  }

  fieldset[data-appearance='outlined'] &:not(:checked):not(:disabled) {
    ${outlinedMixin}
  }
  fieldset[data-appearance='filled'] &:not(:checked):not(:disabled) {
    ${filledMixin}
  }

  &:not(:active):focus-visible + div {
    outline-offset: 2px;
    outline: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']}) solid 2px;
  }
`;
