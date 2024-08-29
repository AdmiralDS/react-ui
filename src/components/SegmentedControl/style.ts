import styled, { css } from 'styled-components';
import { mediumGroupBorderRadius } from '#src/components/themes/borderRadius';

import { dimensionMixin, ButtonIconContainer, filledMixin, outlinedMixin, checkedMixin } from './mixins';
export { ButtonIconContainer } from './mixins';

export const SpinnerContainer = styled(ButtonIconContainer)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  container-type: inline-size;
  .button-group[data-appearance='primary'] & {
    & path {
      fill: ${(p) => `var(--admiral-color-Special_StaticWhite, ${p.theme.color['Special/Static White']})`};
    }
  }
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

  [data-dimension='s'] & {
    height: 20px;
    & > svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const AdditionalPadding = styled.div`
  display: inline-block;
  width: 2px;
`;

interface WrapperProps {
  $appearance?: 'outlined' | 'filled';
  $dimension?: 'xl' | 'l' | 'm' | 's';
  $disabled?: boolean;
  $displayAsDisabled?: boolean;
  $displayAsSquare?: boolean;
  $loading?: boolean;
  $buttonCssMixin?: ReturnType<typeof css>;
}

export const Button = styled.div.attrs<
  WrapperProps & {
    'data-appearance'?: string;
  }
>((props) => ({
  'data-appearance': [props.$appearance, props.$displayAsDisabled ? 'disabled' : undefined]
    .filter((val) => val !== undefined)
    .join(' '),
}))<WrapperProps>`
  position: relative;
  box-sizing: border-box;
  //   display: inline-block;
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  border: none;
  border-radius: ${(p) => `var(--admiral-border-radius-Medium, ${mediumGroupBorderRadius(p.theme.shape)})`};
  appearance: none;
  vertical-align: middle;
  cursor: ${(p) => (p.$loading ? 'default' : p.$disabled ? 'not-allowed' : 'pointer')};

  ${dimensionMixin};
  ${(p) => p.$buttonCssMixin};

  ${ButtonContent} {
    ${(p) => (p.$loading ? 'visibility: hidden;' : '')}
  }
`;

export const Wrapper = styled.label`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
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

  fieldset:disabled &,
  &:disabled {
    cursor: not-allowed;
    &:checked {
      & + div {
        background-color: var(--admiral-color-Neutral_Neutral10, ${(p) => p.theme.color['Neutral/Neutral 10']});
        color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
        border-color: var(--admiral-color-Neutral_Neutral10, ${(p) => p.theme.color['Neutral/Neutral 10']});
        & *[fill^='#'] {
          fill: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
        }
      }
    }
  }

  fieldset[data-appearance='outlined']:disabled &,
  fieldset[data-appearance='outlined'] &:disabled {
    &:not(:checked) {
      & + div {
        background-color: transparent;
        color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
        & *[fill^='#'] {
          fill: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
        }
      }
    }
  }

  fieldset[data-appearance='filled']:disabled &,
  fieldset[data-appearance='filled'] &:disabled {
    &:not(:checked) {
      & + div {
        background-color: var(--admiral-color-Opacity_Neutral8, ${(p) => p.theme.color['Opacity/Neutral 8']});
        color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
        border-color: transparent;
        & *[fill^='#'] {
          fill: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
        }
      }
    }
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
