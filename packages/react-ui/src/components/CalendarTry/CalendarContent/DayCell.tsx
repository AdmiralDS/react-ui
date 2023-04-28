import * as React from 'react';
import type { MouseEvent } from 'react';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import type { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
import styled from 'styled-components';
import { typography } from '#src/components/Typography';
import type { Corners, CornerKeys } from '#src/components/CalendarTry/constants';
import { mediumGroupBorderRadius } from '#src/components/themes';

const DAY_SIZE = 36;
const DAY_PADDING = '8px 0';
const DAY_MARGIN_BOTTOM = '4px';

export interface DayCellProps {
  date: Dayjs;
  activeDate?: Dayjs;
  startDate?: Dayjs;
  endDate?: Dayjs;
  selected?: Dayjs;
  onSelectDate?: (date: Dayjs) => void;
  disabled?: boolean;
  isHidden: boolean;
  highlightSpecialDay?: (date: Dayjs) => FlattenInterpolation<ThemeProps<DefaultTheme>> | undefined;
  onMouseEnter: (date: Dayjs, event: MouseEvent<HTMLDivElement>) => void;
}

export const DayCellWrapper = styled.div<{
  today?: boolean;
  isActiveDate: boolean;
  disabled?: boolean;
  outsideMonth?: boolean;
  selected?: boolean;
  inRange?: boolean;
  inSelectingRange?: boolean;
  corners?: Corners;
  highlightSpecialDayMixin?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
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

  ${(p) => p.highlightSpecialDayMixin}

  // недоступная для выбора дата
  ${(p) =>
    p.disabled &&
    `
      color: ${p.theme.color['Neutral/Neutral 30']};
    `}

  // дата, не входящая в отображаемый месяц
  ${(p) =>
    p.outsideMonth &&
    `
      color: ${p.theme.color['Neutral/Neutral 30']};
      opacity: 0;
      pointer-events: none;
    `}

  // выбранная или активная дата
  ${(p) =>
    !p.disabled &&
    (p.selected || (p.inSelectingRange && p.isActiveDate)) &&
    //p.selected &&
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
  ${({ disabled, inRange, inSelectingRange, theme, corners, selected, isActiveDate }) =>
    !disabled &&
    (inRange || inSelectingRange) &&
    `
      &:before {
        z-index: -1;
        content: '';
        position: absolute;
        width: 100%;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: ${inSelectingRange ? theme.color['Opacity/Focus'] : theme.color['Opacity/Hover']};
        ${
          corners &&
          Object.keys(corners)
            .map((key) =>
              corners[key as CornerKeys]
                ? selected || isActiveDate
                  ? `border-${key}-radius: 50%;`
                  : `border-${key}-radius: ${mediumGroupBorderRadius(theme.shape)};`
                : '',
            )
            .join('')
        }
      }
    `}
`;

function isInSelectingRange(date: Dayjs, disabled?: boolean, startDate?: Dayjs, endDate?: Dayjs, activeDate?: Dayjs) {
  const res =
    !disabled &&
    !!startDate &&
    !endDate &&
    !!activeDate &&
    activeDate.isSameOrAfter(startDate, 'date') &&
    date.isBetween(startDate, activeDate, 'date', '[]');
  /*if (res) {
    console.log(`${date.format('DD-MM-YYYY')} isInSelectingRange`);
  }*/
  return res;
}

function getCorners(
  date: Dayjs,
  startDate?: Dayjs,
  rangeStart?: boolean,
  rangeEnd?: boolean,
  rangeSelectingStart?: boolean,
  rangeSelectingEnd?: boolean,
) {
  const corners: Corners = {};
  if (startDate) {
    const weekStart = date.isSame(date.startOf('week'), 'date');
    const weekEnd = date.isSame(date.endOf('week'), 'date');
    const start = rangeStart || rangeSelectingStart;
    const end = rangeEnd || rangeSelectingEnd;
    // если endDate не определена, то активную дату мы не выделяем серым фоном
    corners['top-left'] = start || weekStart;
    corners['bottom-left'] = start || weekStart;
    corners['top-right'] = end || weekEnd;
    corners['bottom-right'] = end || weekEnd;
    /*corners['top-left'] = start || (weekStart && !end);
    corners['bottom-left'] = start || (weekStart && !end);
    corners['top-right'] = end || (weekEnd && !start);
    corners['bottom-right'] = end || (weekEnd && !start);*/
    /*if (corners['top-left'] && corners['bottom-left']) {
      console.log(`${date.format('DD-MM-YYYY')}: left`);
    }
    if (corners['top-right'] && corners['bottom-right']) {
      console.log(`${date.format('DD-MM-YYYY')}: right`);
    }*/
  }
  return corners;
}

export const DayCell = ({
  date,
  startDate,
  endDate,
  selected,
  activeDate,
  disabled,
  onSelectDate,
  isHidden,
  highlightSpecialDay,
  onMouseEnter,
}: DayCellProps) => {
  // ранее выбранный диапазон
  const inRange = !!startDate && !!endDate && date.isBetween(startDate, endDate, 'date', '[]');
  const rangeStart = !!startDate && date.isSame(startDate, 'date');
  const rangeEnd = !!startDate && !!endDate && date.isSame(endDate, 'date');
  // диапазон в процессе выбора
  const inSelectingRange = isInSelectingRange(date, disabled, startDate, endDate, activeDate);
  /*const inSelectingRange =
    !disabled &&
    !!startDate &&
    !endDate &&
    !!activeDate &&
    activeDate.isSameOrAfter(startDate, 'date') &&
    date.isBetween(startDate, activeDate, 'date', '[]');*/
  const rangeSelectingStart = inSelectingRange && date.isSame(startDate, 'date');
  const rangeSelectingEnd = inSelectingRange && date.isSame(activeDate, 'date');

  const corners: Corners = getCorners(date, startDate, rangeStart, rangeEnd, rangeSelectingStart, rangeSelectingEnd);

  const handleClick = () => {
    if (!disabled) {
      onSelectDate?.(date);
    }
  };

  return (
    <DayCellWrapper
      key={date.valueOf()}
      today={date.isSame(dayjs(), 'day')}
      isActiveDate={!!activeDate && date.isSame(activeDate, 'date')}
      outsideMonth={isHidden}
      selected={(!!selected && date.isSame(selected, 'date')) || rangeStart || rangeEnd}
      disabled={disabled}
      inRange={inRange}
      inSelectingRange={inSelectingRange}
      corners={corners}
      onClick={handleClick}
      highlightSpecialDayMixin={highlightSpecialDay?.(date)}
      onMouseEnter={(e) => !disabled && onMouseEnter && onMouseEnter(date, e)}
    >
      {date.date()}
    </DayCellWrapper>
  );
};
