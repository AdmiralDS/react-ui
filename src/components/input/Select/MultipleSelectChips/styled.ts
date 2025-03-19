import styled, { css } from 'styled-components';
import { COUNTER_WIDTH } from '#src/components/input/Select/constants';
import { Chips } from '#src/components/Chips';

export const ShadowCounterChip = styled.div`
  width: ${COUNTER_WIDTH}px;
  height: 24px;
`;

export const CounterChipWrap = styled.div`
  display: flex;
  width: ${COUNTER_WIDTH}px;
  visibility: hidden;
  [data-show-count] & {
    visibility: visible;
  }
  > * {
    width: ${COUNTER_WIDTH}px;
    border-radius: 16px;
    // Убирает действие inline-block
    display: flex;
  }
`;

export const StyledCounterChip = styled(Chips)`
  flex-shrink: 0;
  flex-grow: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  padding: 4px 0;
  cursor: pointer;
`;

export const ContentTooltip = styled.div`
  max-width: 488px;

  @media (max-width: 768px) {
    max-width: 250px;
  }
`;

const disabledChipStyle = css`
  // оставлено, чтоб обрабатывался onClick
  pointer-events: auto;
  &:hover {
    color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
  }
`;

export const StyledChip = styled(Chips)`
  margin-right: 4px;
  // Убирает пробел от inline-flex
  display: flex;
  ${({ disabled }) => disabled && disabledChipStyle};

  min-width: ${COUNTER_WIDTH}px;
  @media (max-width: 768px) {
    max-width: 140px;
  }

  // По дизайну при наведении цвет самого чипса меняться не должен, но т.к. есть обработчик onClick для stopPropagation,
  // то крестик чипса получается clickable и при ховере меняет цвет
  // disabled и readOnly чипсы не меняют цвет при ховере (в readOnly в целом отсутствует кнопка крестика)
  &:hover {
    ${({ theme, disabled }) => {
      if (!disabled)
        return `background-color: var(--admiral-color-Opacity_Neutral8, ${theme.color['Opacity/Neutral 8']})`;
    }}
  }
`;
