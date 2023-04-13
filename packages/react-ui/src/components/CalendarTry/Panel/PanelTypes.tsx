import * as React from 'react';
import type { MouseEvent } from 'react';
import type { Dayjs } from 'dayjs';
import { TooltipHoc } from '#src/components/TooltipHOC';
import { Button } from '#src/components/CalendarTry/Panel/PanelButton';
import { Month, PanelDate, Year } from '#src/components/CalendarTry/Panel/PanelDate';
import { capitalizeFirstLetter, differenceMonths, differenceYears } from '#src/components/CalendarTry/utils';
import type { CalendarViewMode } from '#src/components/CalendarTry/constants';

const MonthWithTooltip = TooltipHoc(Month);
const YearWithTooltip = TooltipHoc(Year);
const ButtonWithTooltip = TooltipHoc(Button);

export interface PanelTypesProps {
  viewMode: CalendarViewMode;
  date: Dayjs;
  minDate?: Dayjs;
  maxDate?: Dayjs;
  locale: {
    backwardText?: string;
    forwardText?: string;
    nextMonthText?: string;
    previousMonthText?: string;
    returnText?: string;
    selectYearText?: string;
    selectMonthText?: string;
  };

  onNext(event: MouseEvent<HTMLButtonElement>): void;
  onPrevious(event: MouseEvent<HTMLButtonElement>): void;
}

export const DateMonthYearPanel = ({
  viewMode,
  date,
  minDate,
  maxDate,
  locale,
  onNext,
  onPrevious,
}: PanelTypesProps) => {
  const monthsView = viewMode === 'MONTHS';
  const yearsView = viewMode === 'YEARS';
  const previousMonthDisabled = !!minDate && differenceMonths(minDate, date.subtract(1, 'month')) > 0;
  const nextMonthDisabled = !!maxDate && differenceMonths(date.add(1, 'month'), maxDate) > 0;
  const previousYearDisabled = !!minDate && differenceYears(minDate, date.subtract(1, 'year')) > 0;
  const nextYearDisabled = !!maxDate && differenceYears(date.add(1, 'year'), maxDate) > 0;
  const previousDisabled = yearsView ? previousYearDisabled : previousMonthDisabled;
  const nextDisabled = yearsView ? nextYearDisabled : nextMonthDisabled;
  return (
    <>
      {!monthsView && !previousDisabled && (
        <ButtonWithTooltip
          disabled={false}
          type={'left'}
          onMouseDown={onPrevious}
          renderContent={() => (yearsView ? locale.backwardText : locale.previousMonthText)}
        />
      )}
      <PanelDate>
        <MonthWithTooltip renderContent={() => (monthsView ? locale.returnText : locale.selectMonthText)} view={false}>
          {capitalizeFirstLetter(date.format('MMMM'))}
        </MonthWithTooltip>
        <YearWithTooltip renderContent={() => (yearsView ? locale.returnText : locale.selectYearText)} view={false}>
          {date.format('YYYY')}
        </YearWithTooltip>
      </PanelDate>
      {!monthsView && !nextDisabled && (
        <ButtonWithTooltip
          disabled={false}
          type={'right'}
          onMouseDown={onNext}
          renderContent={() => (yearsView ? locale.forwardText : locale.nextMonthText)}
        />
      )}
    </>
  );
};
export const MonthYearPanel = () => {};
export const YearsPanel = () => {};
