import styled from 'styled-components';

import { typography } from '#src/components/Typography';

/** Размеры компонента */
export type CheckboxComponentDimension = 'm' | 's';

export const CheckboxComponentWrapper = styled.label<{
  $dimension: CheckboxComponentDimension;
  disabled?: boolean;
  readOnly?: boolean;
}>`
  display: inline-flex;
  align-items: flex-start;
  position: relative;
  box-sizing: content-box;
  padding: 0;
  user-select: none;

  cursor: ${(p) => (p.disabled ? 'not-allowed' : p.readOnly ? 'default' : 'pointer')};

  ${(p) => (p.$dimension === 's' ? typography['Body/Body 2 Short'] : typography['Body/Body 1 Short'])}
  color: ${(p) =>
    p.disabled
      ? `var(--admiral-color-Neutral_Neutral30, ${p.theme.color['Neutral/Neutral 30']})`
      : `var(--admiral-color-Neutral_Neutral90, ${p.theme.color['Neutral/Neutral 90']})`};

  fieldset[data-dimension='s'] && {
    ${typography['Body/Body 2 Short']};
  }
  fieldset:disabled && {
    color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
    cursor: not-allowed;
  }

  ${(p) => (p.readOnly ? `pointer-events: none` : '')};
`;

export const CheckboxComponentLabel = styled.div<{
  $dimension: CheckboxComponentDimension;
  disabled: boolean;
}>`
  display: flex;
  flex-direction: column;
  align-content: center;
  margin: 2px 0 2px 8px;
  ${(p) => (p.$dimension === 's' ? typography['Body/Body 2 Short'] : typography['Body/Body 1 Short'])}
  color: ${(p) =>
    p.disabled
      ? `var(--admiral-color-Neutral_Neutral30, ${p.theme.color['Neutral/Neutral 30']})`
      : `var(--admiral-color-Neutral_Neutral90, ${p.theme.color['Neutral/Neutral 90']})`};
  fieldset:disabled && {
    color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
  }
  fieldset[data-dimension='s'] && {
    ${typography['Body/Body 2 Short']}
  }
`;

export const CheckboxComponentHint = styled.div<{ disabled?: boolean }>`
  margin-block-start: 6px;
  ${typography['Body/Body 2 Short']};
  color: ${(p) =>
    p.disabled
      ? `var(--admiral-color-Neutral_Neutral30, ${p.theme.color['Neutral/Neutral 30']})`
      : `var(--admiral-color-Neutral_Neutral50, ${p.theme.color['Neutral/Neutral 50']})`};
`;
