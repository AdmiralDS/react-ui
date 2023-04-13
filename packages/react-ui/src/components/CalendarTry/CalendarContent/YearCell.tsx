import * as React from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import type { DateValidator } from '#src/components/CalendarTry/validator';
import type { MouseEvent } from 'react';
import styled from 'styled-components';
import { typography } from '#src/components/Typography';

export interface YearCellProps {
  date: Dayjs;
  selected?: Dayjs;
  validator?: DateValidator;
  onSelectYear: (date: Dayjs, event: MouseEvent<HTMLDivElement>) => void;
}

type YearCellWrapperProps = {
  today?: boolean;
  selected?: boolean;
  disabled?: boolean;
};

const YEAR_HEIGHT = '36px';
const YEAR_WIDTH = '60px';
const YEAR_MARGIN_BOTTOM = '16px';
const YEAR_PADDING = '8px 0';
const YEAR_BORDER_RADIUS = '18px';

export const YearCellWrapper = styled.div<YearCellWrapperProps>`
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  width: ${YEAR_WIDTH};
  height: ${YEAR_HEIGHT};
  padding: ${YEAR_PADDING};
  margin-bottom: ${YEAR_MARGIN_BOTTOM};
  border: 1px solid ${({ today, theme }) => (today ? theme.color['Neutral/Neutral 90'] : 'transparent')};
  border-radius: ${YEAR_BORDER_RADIUS};
  background: transparent;
  ${typography['Body/Body 2 Long']}
  color: ${({ theme }) => theme.color['Neutral/Neutral 90']};
  user-select: none;
  cursor: pointer;

  ${({ disabled, theme }) =>
    disabled &&
    `
      cursor: default;
      color: ${theme.color['Neutral/Neutral 30']};
    `}

  ${({ disabled, theme }) =>
    !disabled &&
    `
      &:hover {
        border: 1px solid ${theme.color['Primary/Primary 60 Main']};
      }
    `}

  ${({ disabled, theme, selected }) =>
    !disabled &&
    selected &&
    `
      border: 1px solid ${theme.color['Primary/Primary 60 Main']};
      color: ${theme.color['Special/Static White']};
      background: ${theme.color['Primary/Primary 60 Main']};
      &:hover {
        border: 1px solid ${theme.color['Primary/Primary 70']};
        background: ${theme.color['Primary/Primary 70']};
      }
    `}
`;

export const YearCell = ({ date, selected, validator, onSelectYear }: YearCellProps) => {
  const disabled = !!validator?.invalidYear(date.year());
  const handleClick = (e: any) => {
    e.preventDefault();
    const day = date.startOf('year');
    !disabled && onSelectYear && onSelectYear(day, e);
  };
  return (
    <YearCellWrapper
      key={date.valueOf()}
      today={date.isSame(dayjs(), 'year')}
      selected={!!selected && date.isSame(selected, 'year')}
      disabled={disabled}
      onMouseDown={handleClick}
    >
      {date.format('YYYY')}
    </YearCellWrapper>
  );
};
