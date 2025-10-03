import styled, { css } from 'styled-components';
import { typography } from '#src/components/Typography';
import type { ComponentDimension, InputStatus } from '#src/components/input/types';
import { iconSizeValue, horizontalPaddingValue } from '../TimePickerIcons';
import { skeletonMixin } from '#src/components/input/Container';
import { mediumGroupBorderRadius } from '#src/components/themes/borderRadius';

export type SizeProps = {
  $dimension?: ComponentDimension;
};

const extraPadding = css<{ $iconsAfterCount?: number } & SizeProps>`
  padding-right: ${(props) =>
    horizontalPaddingValue(props) + (iconSizeValue(props) + 8) * (props.$iconsAfterCount ?? 0)}px;
`;

const disabledColors = css`
  background-color: var(--admiral-color-Neutral_Neutral10, ${(p) => p.theme.color['Neutral/Neutral 10']});
  border-color: transparent;
`;

const getBorderColor = css<{ $status?: InputStatus }>`
  ${({ $status, theme }) => {
    if (!$status) {
      return `var(--admiral-color-Neutral_Neutral40, ${theme.color['Neutral/Neutral 40']})`;
    }
    switch ($status) {
      case 'error':
        return `var(--admiral-color-Error_Error60Main, ${theme.color['Error/Error 60 Main']})`;
      case 'success':
        return `var(--admiral-color-Success_Success50Main, ${theme.color['Success/Success 50 Main']})`;
    }
  }}
`;

const getHoverBorderColor = css<{ $status?: InputStatus }>`
  ${({ $status, theme }) => {
    if (!$status) {
      return `var(--admiral-color-Neutral_Neutral60, ${theme.color['Neutral/Neutral 60']})`;
    }
    switch ($status) {
      case 'error':
        return `var(--admiral-color-Error_Error70, ${theme.color['Error/Error 70']})`;
      case 'success':
        return `var(--admiral-color-Success_Success50Main, ${theme.color['Success/Success 50 Main']})`;
    }
  }}
`;

const getFocusBorderColor = css<{ $status?: InputStatus }>`
  ${({ $status, theme }) => {
    if (!$status) {
      return `var(--admiral-color-Primary_Primary60Main, ${theme.color['Primary/Primary 60 Main']})`;
    }
    switch ($status) {
      case 'error':
        return `var(--admiral-color-Error_Error60Main, ${theme.color['Error/Error 60 Main']})`;
      case 'success':
        return `var(--admiral-color-Success_Success50Main, ${theme.color['Success/Success 50 Main']})`;
    }
  }}
`;

const dimensionFocusBoxStyles = {
  xl: `
    height: 56px;
    & * {
      line-height: 56px;
    }
  `,
  s: `
    height: 32px;
    padding-inline-start: 12px;
    padding-inline-end: 12px;
    & * {
      ${typography['Body/Body 2 Long']}
      line-height: 32px;
    }
  `,
  m: ``,
};

export const InputBox = styled.div<
  SizeProps & {
    disabled?: boolean;
    readOnly?: boolean;
    $status?: InputStatus;
    $iconsAfterCount?: number;
    $isLoading?: boolean;
    $skeleton?: boolean;
  }
>`
  cursor: text;
  display: inline-flex;
  overflow: hidden;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: stretch;
  width: 280px;
  position: relative;

  height: 40px;
  padding: 0;
  padding-inline-start: 16px;
  padding-inline-end: 16px;

  & * {
    ${typography['Body/Body 1 Long']}
    line-height: 40px;
  }
  &[data-size='xl'] {
    height: 56px;
    & * {
      line-height: 56px;
    }
  }
  &[data-size='s'] {
    height: 32px;
    padding-inline-start: 12px;
    padding-inline-end: 12px;
    & * {
      ${typography['Body/Body 2 Long']}
      line-height: 32px;
    }
  }

  box-sizing: border-box;
  border-radius: var(--admiral-border-radius-Medium, ${(p) => mediumGroupBorderRadius(p.theme.shape)});

  background: transparent;
  /* https://stackoverflow.com/questions/69658462/inset-box-shadow-visual-artifacts-in-google-chrome */
  transform: translate3d(0, 0, 0);
  box-shadow: 0px 0px 0px 1px ${getBorderColor} inset;

  &:hover:not(:focus-within):not([data-disabled]):not([data-read-only]):not([data-skeleton]) {
    box-shadow: 0px 0px 0px 1px ${getHoverBorderColor} inset;
  }
  &:focus-within:not([data-disabled]):not([data-read-only]):not([data-skeleton]) {
    box-shadow: 0px 0px 0px 2px ${getFocusBorderColor} inset;
  }

  transition: box-shadow 0.3s ease-in-out;

  ${(p) => (p.disabled || p.readOnly) && disabledColors}
  ${(p) => (p.disabled ? 'cursor: not-allowed;' : p.$isLoading ? 'cursor: default;' : '')}

  &[data-disabled],
  &[data-read-only] {
    ${disabledColors}
  }

  &[data-disabled] {
    cursor: not-allowed;
  }

  &[data-loading] {
    cursor: default;
  }

  [data-loading] &&&,
  &&&:disabled {
    cursor: not-allowed;
    pointer-events: none;
  }

  &[data-disable-copying] input {
    user-select: none;
    &::selection {
      background-color: transparent;
    }
  }

  ${(p) => p.$skeleton && skeletonMixin}
  ${(p) => p.$skeleton && 'border-radius: 0; box-shadow: none;'}
  
  &[data-skeleton] {
    ${skeletonMixin}
    border-radius: 0;
    box-shadow: none;
    cursor: default;
  }

  ${({ $dimension }) => $dimension && dimensionFocusBoxStyles[$dimension]}
  ${extraPadding}
`;
