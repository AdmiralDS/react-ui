import styled from 'styled-components';
import { typography } from '#src/components/Typography';
import { rangeHighlightMixin } from '#src/components/CalendarTry/CalendarContent/styled';

export const CellWrapper = styled.div<{
  disabled?: boolean;
  selected?: boolean;
  today?: boolean;
  isActiveDate: boolean;
  inRange?: boolean;
  inSelectingRange?: boolean;
  isRowStart: boolean;
  isRowEnd: boolean;
  isRangeStart: boolean;
  isRangeEnd: boolean;
}>`
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  ${typography['Body/Body 2 Long']}
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  color: ${({ theme }) => theme.color['Neutral/Neutral 90']};

  // рамка у "сегодня"
  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border: 1px solid
      ${(p) =>
        p.today && !p.selected && !(p.inSelectingRange && p.isActiveDate)
          ? p.disabled
            ? p.theme.color['Neutral/Neutral 30']
            : p.theme.color['Neutral/Neutral 90']
          : 'transparent'};
    border-radius: 50%;
  }

  // активная дата
  &:hover:after {
    ${(p) =>
      p.disabled || p.selected || (p.inSelectingRange && p.isActiveDate)
        ? ''
        : `border: 1px solid ${p.theme.color['Primary/Primary 60 Main']};
           background: ${p.theme.color['Special/Elevated BG']};
           z-index: -1;`}
  }

  // недоступная для выбора дата
  ${(p) =>
    p.disabled &&
    `
      color: ${p.theme.color['Neutral/Neutral 30']};
    `}

  // выбранная или активная дата
  ${(p) =>
    !p.disabled &&
    (p.selected || (p.inSelectingRange && p.isActiveDate)) &&
    `
      color: ${p.theme.color['Special/Static White']};
      background: ${
        p.inSelectingRange ? p.theme.color['Primary/Primary 70'] : p.theme.color['Primary/Primary 60 Main']
      };
      border-radius: 50%;
      &:hover {
        background: ${p.theme.color['Primary/Primary 70']};
      }
    `}

  // подсветка диапазона
  ${rangeHighlightMixin}
`;
