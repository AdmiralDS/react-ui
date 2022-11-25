import styled, { css } from 'styled-components';
import { COUNTER_WIDTH } from '#src/components/input/Select/constants';
import { Chips } from '#src/components/Chips';

export const ChipsHintWrap = styled.div`
  display: flex;
  gap: 4px;
  flex-direction: column;
  align-items: flex-start;
`;

export const ShadowCounterChip = styled.div`
  width: ${COUNTER_WIDTH}px;
  height: 24px;
`;

export const CounterChipWrap = styled.div`
  display: flex;
  width: ${COUNTER_WIDTH}px;
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
  visibility: hidden;
  [data-visible-counter] & {
    visibility: visible;
  }
`;

export const ContentTooltip = styled.div`
  max-width: 488px;

  @media (max-width: 768px) {
    max-width: 250px;
  }
`;

// К сожалению, пришлось переопределить стили disabled чипса, так как при pointer-events: none
// чипс с числом оставшихся опций "заезжает" на disabled чип
const disabledChipStyle = css`
  pointer-events: auto;
  :hover {
    color: ${({ theme }) => theme.color['Neutral/Neutral 30']};
    background-color: ${({ theme }) => theme.color['Neutral/Neutral 10']};
    border: 1px solid ${({ theme }) => theme.color['Neutral/Neutral 10']};
  }
  & > * {
    pointer-events: none;
  }
`;

export const StyledChip = styled(Chips)`
  margin-right: 4px;
  // Убирает пробел от inline-flex
  display: flex;
  ${({ disabled }) => (disabled ? disabledChipStyle : '')};

  min-width: ${COUNTER_WIDTH}px;
  @media (max-width: 768px) {
    max-width: 140px;
  }
`;
