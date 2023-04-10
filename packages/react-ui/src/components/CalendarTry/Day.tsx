import * as React from 'react';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import styled from 'styled-components';
import { typography } from '#src/components/Typography';

const DAY_SIZE = 36;
const DAY_PADDING = '8px 0';
const DAY_MARGIN_BOTTOM = '4px';

export interface DayProps {
  viewDate: Dayjs;
  date: Dayjs;
  selected?: Dayjs;
  onClickHandler?: (date: Dayjs) => void;
}

export const DayWrapper = styled.div<{
  today?: boolean;
  disabled?: boolean;
  outsideMonth?: boolean;
  selected?: boolean;
}>`
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  width: ${DAY_SIZE}px;
  height: ${DAY_SIZE}px;
  padding: ${DAY_PADDING};
  margin-bottom: ${DAY_MARGIN_BOTTOM};
  text-align: center;
  ${typography['Body/Body 2 Long']}
  color: ${({ theme }) => theme.color['Neutral/Neutral 90']};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border: 1px solid
      ${({ theme, today, selected }) => (today && !selected ? theme.color['Neutral/Neutral 90'] : 'transparent')};
    border-radius: 50%;
  }

  &:hover:after {
    border: 1px solid ${(p) => p.theme.color['Primary/Primary 60 Main']};
  }

  ${({ theme, outsideMonth }) =>
    outsideMonth &&
    `
      color: ${theme.color['Neutral/Neutral 30']};
      opacity: 0;
      pointer-events: none;
    `}

  ${({ disabled, theme, selected }) =>
    !disabled &&
    selected &&
    `
      color: ${theme.color['Special/Static White']};
      background: ${theme.color['Primary/Primary 60 Main']};
      border-radius: 50%;
      &:hover {
        background: ${theme.color['Primary/Primary 70']};
      }
    `}
`;
export const Day = ({ viewDate, date, selected, onClickHandler }: DayProps) => {
  const handleClick = () => {
    onClickHandler?.(date);
  };

  return (
    <DayWrapper
      today={date.isSame(dayjs(), 'day')}
      outsideMonth={!date.isSame(viewDate, 'month')}
      selected={date.isSame(selected, 'date')}
      onClick={handleClick}
    >
      {date.date()}
    </DayWrapper>
  );
};
