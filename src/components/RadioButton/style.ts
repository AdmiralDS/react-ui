import styled from 'styled-components';
import { typography } from '#/components/Typography';

type Dimension = 'm' | 's';

const DIMENSION_M = '20px';
const DIMENSION_S = '18px';
const BORDER_WIDTH_DEFAULT = '1px';
const BORDER_WIDTH_CHECKED = '6px';
const TEXT_PADDING_M = '10px';
const TEXT_PADDING_S = '9px';

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
  ${({ theme, dimension }) => `
    background-color: ${theme.color.background.primary};
    width: ${dimension === 's' ? DIMENSION_S : DIMENSION_M};
    height: ${dimension === 's' ? DIMENSION_S : DIMENSION_M};
  `}
  fieldset[data-dimension='s'] & {
    width: ${DIMENSION_S};
    height: ${DIMENSION_S};
  }
  border: ${BORDER_WIDTH_DEFAULT} solid
    ${({ theme, disabled }) => (disabled ? theme.color.text.tertiary : theme.color.basic.tertiary)};
  fieldset:disabled & {
    border: ${BORDER_WIDTH_DEFAULT} solid ${({ theme }) => theme.color.text.tertiary};
  }
  border-radius: 50%;
  transition: all 0.25s ease-in-out;
`;

export const InputContainer = styled.div<{ dimension: Dimension }>`
  position: relative;
  display: inline-block;
  ${({ dimension }) => `
    min-width: ${dimension === 's' ? DIMENSION_S : DIMENSION_M};
    height: ${dimension === 's' ? DIMENSION_S : DIMENSION_M};
  `}
  fieldset[data-dimension='s'] & {
    min-width: ${DIMENSION_S};
    height: ${DIMENSION_S};
  }
`;

export const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked:disabled + ${Span} {
    border: ${BORDER_WIDTH_CHECKED} solid ${({ theme }) => theme.color.text.tertiary};
  }

  &:checked:not(disabled) + ${Span} {
    border: ${BORDER_WIDTH_CHECKED} solid ${({ theme }) => theme.color.basic.primary};
  }

  &:checked:not(:disabled) {
    &:focus + ${Span}, &:hover + ${Span} {
      ${({ theme }) =>
        `
          background-color: ${theme.color.background.secondary};
          border: ${BORDER_WIDTH_CHECKED} solid ${theme.color.basic.hover};
        `}
    }
  }

  &:not(checked):not(:disabled) {
    &:focus + ${Span}, &:hover + ${Span} {
      ${({ theme }) =>
        `
          background-color: ${theme.color.background.secondary};
          border: ${BORDER_WIDTH_DEFAULT} solid ${theme.color.basic.primary};
        `}
    }
  }
`;

export const Label = styled.span<{
  dimension: Dimension;
  disabled?: boolean;
}>`
  display: inline-flex;
  flex-direction: column;
  box-sizing: content-box;
  ${({ dimension }) => (dimension === 's' ? typography['Additional/XS'] : typography['Additional/M'])}
  padding-left: ${({ dimension }) => (dimension === 's' ? TEXT_PADDING_S : TEXT_PADDING_M)};
  color: ${({ disabled, theme }) => (disabled ? theme.color.text.tertiary : theme.color.basic.secondary)};

  fieldset[data-dimension='s'] && {
    ${typography['Additional/XS']}
    padding-left: ${TEXT_PADDING_S};
    color: ${({ disabled, theme }) => (disabled ? theme.color.text.tertiary : theme.color.basic.secondary)};
  }
  fieldset:disabled && {
    color: ${({ theme }) => theme.color.text.tertiary};
  }
  margin: auto 0;
  user-select: none;
`;

export const Hint = styled.span<{ dimension: Dimension; disabled?: boolean }>`
  margin-top: 6px;
  ${({ dimension }) => (dimension === 's' ? typography['Caption/XS'] : typography['Additional/XS'])}
  color: ${({ disabled, theme }) => (disabled ? theme.color.text.tertiary : theme.color.text.secondary)};

  fieldset[data-dimension='s'] && {
    ${typography['Caption/XS']}
    color: ${({ disabled, theme }) => (disabled ? theme.color.text.tertiary : theme.color.text.secondary)};
  }
`;

export const RadioButtonComponent = styled.label<{
  disabled?: boolean;
}>`
  margin: 0;
  padding: 0;
  display: inline-flex;
  align-items: flex-start;
  box-sizing: content-box;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  fieldset:disabled & {
    cursor: default;
  }
`;
