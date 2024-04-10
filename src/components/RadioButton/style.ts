import styled, { css } from 'styled-components';
import { typography } from '#src/components/Typography';

type Dimension = 'm' | 's';

const DIMENSION_M = 20;
const DIMENSION_S = 18;
const BORDER_WIDTH_DEFAULT = 1;
const BORDER_WIDTH_CHECKED = 5;
const FOCUS_OFFSET = 2;
const FOCUS_BORDER_WIDTH = 2;
const HOVER_BORDER_WIDTH_M = 8;
const HOVER_BORDER_WIDTH_S = 7;
const LABEL_MARGIN_M = '10px';
const LABEL_MARGIN_S = '9px';

export const RadioButtonHover = styled.div<{ $dimension: Dimension }>`
  visibility: hidden;
  pointer-events: none;
  position: absolute;
  background: var(--admiral-color-Opacity_Hover, ${(p) => p.theme.color['Opacity/Hover']});
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  ${(p) => `
        width: calc(100% + ${p.$dimension === 's' ? HOVER_BORDER_WIDTH_S * 2 : HOVER_BORDER_WIDTH_M * 2}px);
        height: calc(100% + ${p.$dimension === 's' ? HOVER_BORDER_WIDTH_S * 2 : HOVER_BORDER_WIDTH_M * 2}px);
      `}
  background-color: var(--admiral-color-Opacity_Hover, ${(p) => p.theme.color['Opacity/Hover']});
`;
export const RadioButtonLabel = styled.div<{
  $dimension: Dimension;
  disabled: boolean;
}>`
  display: flex;
  flex-direction: column;
  align-content: center;
  margin-left: ${(p) => (p.$dimension === 's' ? LABEL_MARGIN_S : LABEL_MARGIN_M)};
  ${(p) => (p.$dimension === 's' ? 'margin-top: 1px;' : '')}
  ${(p) => (p.$dimension === 's' ? typography['Body/Body 2 Short'] : typography['Body/Body 1 Short'])}
  color: ${(p) =>
    p.disabled
      ? `var(--admiral-color-Neutral_Neutral30, ${p.theme.color['Neutral/Neutral 30']})`
      : `var(--admiral-color-Neutral_Neutral90, ${p.theme.color['Neutral/Neutral 90']})`};
  fieldset:disabled && {
    color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
  }
  fieldset[data-dimension='s'] && {
    margin-left: ${LABEL_MARGIN_S};
    margin-top: 1px;
    ${typography['Body/Body 2 Short']}
  }
`;

const disabledCss = css`
  border-color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
  background-color: var(--admiral-color-Neutral_Neutral10, ${(p) => p.theme.color['Neutral/Neutral 10']});
`;

export const Span = styled.span<{ $dimension: Dimension; disabled?: boolean; $error?: boolean }>`
  display: inline-block;
  position: absolute;
  flex-shrink: 0;
  margin: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  content: '';
  box-sizing: border-box;
  pointer-events: none;
  border-radius: 50%;
  transition: all 0.25s ease-in-out;

  width: ${(p) => (p.$dimension === 's' ? DIMENSION_S : DIMENSION_M)}px;
  height: ${(p) => (p.$dimension === 's' ? DIMENSION_S : DIMENSION_M)}px;
  background-color: var(--admiral-color-Neutral_Neutral00, ${(p) => p.theme.color['Neutral/Neutral 00']});
  border: ${BORDER_WIDTH_DEFAULT}px solid
    var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});

  fieldset[data-dimension='s'] & {
    width: ${DIMENSION_S}px;
    height: ${DIMENSION_S}px;
  }
  ${(p) => (p.disabled ? disabledCss : '')}
  ${(p) =>
    p.$error ? `border-color: var(--admiral-color-Error_Error60Main, ${p.theme.color['Error/Error 60 Main']});` : ''}

  fieldset:disabled & {
    border: ${BORDER_WIDTH_DEFAULT}px solid
      var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
  }
`;

export const InputContainer = styled.div<{ $dimension: Dimension }>`
  pointer-events: none;
  position: relative;
  flex-shrink: 0;
  border-radius: 50%;
  ${(p) => `
    width: ${p.$dimension === 's' ? DIMENSION_S : DIMENSION_M}px;
    height: ${p.$dimension === 's' ? DIMENSION_S : DIMENSION_M}px;
  `}
  fieldset[data-dimension='s'] & {
    width: ${DIMENSION_S}px;
    height: ${DIMENSION_S}px;
  }
`;

const readOnlyCss = css`
  pointer-events: none;

  &:not(:checked) {
    & + div > span {
      background-color: var(--admiral-color-Neutral_Neutral10, ${(p) => p.theme.color['Neutral/Neutral 10']});
    }
  }

  &:checked {
    & + div > span {
      background-color: var(--admiral-color-Neutral_Neutral00, ${(p) => p.theme.color['Neutral/Neutral 00']});
    }
  }
`;

export const Input = styled.input<{ $dimension: Dimension }>`
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

  ${(p) => p.readOnly && readOnlyCss};

  &:disabled {
    cursor: not-allowed;
  }

  &:not(:checked):disabled {
    & + div > span {
      background-color: var(--admiral-color-Neutral_Neutral10, ${(p) => p.theme.color['Neutral/Neutral 10']});
    }
  }

  &:checked:disabled {
    & + div > span {
      border: ${BORDER_WIDTH_CHECKED}px solid
        var(--admiral-color-Primary_Primary30, ${(p) => p.theme.color['Primary/Primary 30']});
      background-color: var(--admiral-color-Neutral_Neutral00, ${(p) => p.theme.color['Neutral/Neutral 00']});
    }
  }

  &:checked:not(:disabled) {
    & + div > span {
      border: ${(p) =>
        p.readOnly
          ? `${BORDER_WIDTH_CHECKED}px solid var(--admiral-color_Primary_Primary30, ${p.theme.color['Primary/Primary 30']})`
          : `${BORDER_WIDTH_CHECKED}px solid var(--admiral-color_Primary_Primary60Main, ${p.theme.color['Primary/Primary 60 Main']})`};
    }
  }

  &:not(:disabled) {
    &:focus-visible + div {
      outline-offset: ${FOCUS_OFFSET}px;
      outline: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']}) solid
        ${FOCUS_BORDER_WIDTH}px;
    }

    &:hover {
      & + div > div {
        ${(p) => !p.readOnly && `visibility: visible`};
      }
      &:focus-visible + div {
        outline: none;
      }
    }
    &:active {
      & + div > div {
        ${(p) => !p.readOnly && `visibility: visible`};
        background: var(--admiral-color-Opacity_Press, ${(p) => p.theme.color['Opacity/Press']});
      }
      &:focus-visible + div {
        outline: none;
      }
    }
  }
`;

export const Hint = styled.div<{ $dimension: Dimension; disabled?: boolean }>`
  margin-top: 6px;
  ${(p) => (p.$dimension === 's' ? typography['Caption/Caption 1'] : typography['Body/Body 2 Short'])}
  color: ${(p) =>
    p.disabled
      ? `var(--admiral-color-Neutral_Neutral30, ${p.theme.color['Neutral/Neutral 30']})`
      : `var(--admiral-color-Neutral_Neutral50, ${p.theme.color['Neutral/Neutral 50']})`};

  fieldset[data-dimension='s'] && {
    ${typography['Caption/Caption 1']}
  }
`;

export const RadioButtonComponent = styled.label<{
  $dimension: Dimension;
  disabled?: boolean;
  readOnly?: boolean;
}>`
  display: flex;
  align-items: flex-start;
  position: relative;
  box-sizing: content-box;
  padding: ${(p) => (p.$dimension === 's' ? '1px 0 1px 1px' : '2px 0 2px 2px')};
  user-select: none;

  cursor: ${(p) => (p.disabled ? 'not-allowed' : p.readOnly ? 'default' : 'pointer')};

  ${(p) => (p.$dimension === 's' ? typography['Body/Body 2 Short'] : typography['Body/Body 1 Short'])}
  color: ${(p) =>
    p.disabled
      ? `var(--admiral-color-Neutral_Neutral30, ${p.theme.color['Neutral/Neutral 30']})`
      : `var(--admiral-color-Neutral_Neutral90, ${p.theme.color['Neutral/Neutral 90']})`};

  fieldset[data-dimension='s'] && {
    padding: 1px 0 1px 1px;
    ${typography['Body/Body 2 Short']};
  }
  fieldset:disabled && {
    color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
    cursor: not-allowed;
  }

  ${(p) =>
    p.readOnly &&
    css`
      & > * {
        pointer-events: none;
      }
    `};
`;
