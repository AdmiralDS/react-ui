import styled from 'styled-components';
import { typography } from '#src/components-ver2/Typography';

type Dimension = 'm' | 's';

const DIMENSION_M = 20;
const DIMENSION_S = 18;
const BORDER_WIDTH_DEFAULT = 1;
const BORDER_WIDTH_CHECKED = 5;
const TEXT_PADDING_M = 10;
const TEXT_PADDING_S = 9;
const INPUT_OFFSET = 2;
const INNER_PADDING_M = 2;
const INNER_PADDING_S = 3;
const FOCUS_OFFSET = 2;
const FOCUS_BORDER_WIDTH = 2;
const HOVER_BORDER_WIDTH_M = 8;
const HOVER_BORDER_WIDTH_S = 7;

export const Span = styled.span<{ dimension: Dimension; disabled?: boolean }>`
  display: inline-block;
  position: absolute;
  margin: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  content: '';
  box-sizing: border-box;
  pointer-events: none;

  ${({ theme, dimension }) => `
    background-color: ${theme.color['Neutral/Neutral 00']};
    width: ${dimension === 's' ? DIMENSION_S : DIMENSION_M}px;
    height: ${dimension === 's' ? DIMENSION_S : DIMENSION_M}px;
  `}
  fieldset[data-dimension='s'] & {
    width: ${DIMENSION_S}px;
    height: ${DIMENSION_S}px;
  }
  border: ${BORDER_WIDTH_DEFAULT}px solid
    ${({ theme, disabled }) => (disabled ? theme.color['Neutral/Neutral 30'] : theme.color['Neutral/Neutral 50'])};
  fieldset:disabled & {
    border: ${BORDER_WIDTH_DEFAULT}px solid ${({ theme }) => theme.color['Neutral/Neutral 30']};
  }
  border-radius: 50%;
  transition: all 0.25s ease-in-out;
`;

export const InputContainer = styled.div<{ dimension: Dimension }>`
  position: absolute;
  top: ${INPUT_OFFSET}px;
  left: ${INPUT_OFFSET}px;
  display: inline-block;
  ${({ dimension }) => `
    min-width: ${dimension === 's' ? DIMENSION_S : DIMENSION_M}px;
    height: ${dimension === 's' ? DIMENSION_S : DIMENSION_M}px;
  `}
  fieldset[data-dimension='s'] & {
    min-width: ${DIMENSION_S}px;
    height: ${DIMENSION_S}px;
  }
`;

export const Input = styled.input<{ dimension: Dimension }>`
  appearance: none;
  ::-ms-check {
    display: none;
  }
  width: 100%;
  height: 100%;

  position: absolute;
  margin: 0;
  padding: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  box-sizing: border-box;
  cursor: pointer;
  border-radius: 50%;

  &:checked:disabled + ${Span} {
    border: ${BORDER_WIDTH_CHECKED}px solid ${({ theme }) => theme.color['Primary/Primary 30']};
  }

  &:checked:not(disabled) + ${Span} {
    border: ${BORDER_WIDTH_CHECKED}px solid ${({ theme }) => theme.color['Primary/Primary 60 Main']};
  }

  &:not(:disabled):hover,
  &:not(:disabled):focus {
    &::after {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      ${({ dimension }) => `
        width: calc(100% + ${dimension === 's' ? HOVER_BORDER_WIDTH_S * 2 : HOVER_BORDER_WIDTH_M * 2}px);
        height: calc(100% + ${dimension === 's' ? HOVER_BORDER_WIDTH_S * 2 : HOVER_BORDER_WIDTH_M * 2}px);
      `}
      background-color: ${({ theme }) => theme.color['Opacity/Hover']};
    }
  }

  &:focus-visible {
    outline-offset: ${FOCUS_OFFSET}px;
    outline: ${(p) => p.theme.color['Primary/Primary 60 Main']} solid ${FOCUS_BORDER_WIDTH}px;
  }
`;

export const Hint = styled.div<{ dimension: Dimension; disabled?: boolean }>`
  margin-top: 6px;
  ${({ dimension }) => (dimension === 's' ? typography['Caption/Caption 1'] : typography['Body/Body 2 Short'])}
  color: ${({ disabled, theme }) => (disabled ? theme.color['Neutral/Neutral 30'] : theme.color['Neutral/Neutral 50'])};

  fieldset[data-dimension='s'] && {
    ${typography['Caption/Caption 1']}
    color: ${({ disabled, theme }) =>
      disabled ? theme.color['Neutral/Neutral 30'] : theme.color['Neutral/Neutral 50']};
  }
`;

export const RadioButtonComponent = styled.label<{
  dimension: Dimension;
  disabled?: boolean;
}>`
  margin: 0;
  ${({ dimension }) => `
    padding-top: ${dimension === 's' ? INNER_PADDING_S : INNER_PADDING_M}px;
    padding-bottom: ${dimension === 's' ? INNER_PADDING_S : INNER_PADDING_M}px;
    padding-left: ${dimension === 's' ? DIMENSION_S + TEXT_PADDING_S : DIMENSION_M + TEXT_PADDING_M}px;
  `}
  display: inline-block;
  position: relative;
  box-sizing: content-box;

  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  ${({ dimension }) => (dimension === 's' ? typography['Body/Body 2 Short'] : typography['Body/Body 1 Short'])}
  color: ${({ disabled, theme }) => (disabled ? theme.color['Neutral/Neutral 30'] : theme.color['Neutral/Neutral 90'])};

  fieldset[data-dimension='s'] && {
    ${typography['Body/Body 2 Short']}
    color: ${({ disabled, theme }) =>
      disabled ? theme.color['Neutral/Neutral 30'] : theme.color['Neutral/Neutral 90']};
  }
  fieldset:disabled && {
    color: ${({ theme }) => theme.color['Neutral/Neutral 30']};
  }

  fieldset:disabled & {
    cursor: default;
  }
`;
