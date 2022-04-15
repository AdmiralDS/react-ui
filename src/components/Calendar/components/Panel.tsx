import type { FC, MouseEvent } from 'react';
import React from 'react';

import {
  addMonths,
  addYears,
  differenceMonths,
  differenceYears,
  getFormattedValue,
  subMonths,
  subYears,
} from '../date-utils';
import { PanelComponent } from '../styled/PanelComponent';
import { Month, PanelDate, Year } from '../styled/PanelDate';
import type { LocaleType } from '../constants';
import {
  BACK,
  capitalizeFirstLetter,
  FORWARD,
  NEXT_MONTH,
  PREVIOUS_MONTH,
  RETURN,
  SELECT_MONTH,
  SELECT_YEAR,
} from '../constants';
import { Tooltip } from '../../Tooltip';

import { Button } from './Button';

interface IPanelProps {
  onYearsViewShow(event: MouseEvent<HTMLDivElement>): void;

  onYearsViewHide(event: MouseEvent<HTMLDivElement>): void;

  onMonthsViewShow(event: MouseEvent<HTMLDivElement>): void;

  onMonthsViewHide(event: MouseEvent<HTMLDivElement>): void;

  onNext(event: MouseEvent<HTMLDivElement>): void;

  onPrevious(event: MouseEvent<HTMLDivElement>): void;

  viewDate: Date;
  yearsView: boolean;
  monthsView: boolean;
  localeName: LocaleType;
  minDate?: Date;
  maxDate?: Date;
  tooltipContainer?: Element | null;
}

export const Panel: FC<IPanelProps> = ({
  viewDate,
  minDate,
  maxDate,
  yearsView,
  monthsView,
  localeName,
  onYearsViewShow,
  onYearsViewHide,
  onMonthsViewShow,
  onMonthsViewHide,
  onNext,
  onPrevious,
}) => {
  const previousMonthDisabled = !!minDate && differenceMonths(minDate, subMonths(viewDate, 1)) > 0;
  const nextMonthDisabled = !!maxDate && differenceMonths(addMonths(viewDate, 1), maxDate) > 0;
  const previousYearDisabled = !!minDate && differenceYears(minDate, subYears(viewDate, 1)) > 0;
  const nextYearDisabled = !!maxDate && differenceYears(addYears(viewDate, 1), maxDate) > 0;
  const previousDisabled = yearsView ? previousYearDisabled : previousMonthDisabled;
  const nextDisabled = yearsView ? nextYearDisabled : nextMonthDisabled;

  const monthMouseDownHandle = (event: any) => {
    event.preventDefault();
    monthsView ? onMonthsViewHide(event) : onMonthsViewShow(event);
  };
  const yearMouseDownHandle = (event: any) => {
    event.preventDefault();
    yearsView ? onYearsViewHide(event) : onYearsViewShow(event);
  };
  return (
    <PanelComponent yearsView={yearsView} monthsView={monthsView} className="ui-kit-calendar-panel-component">
      {!monthsView && (
        <Tooltip renderContent={() => (yearsView ? BACK : PREVIOUS_MONTH)}>
          <Button onMouseDown={onPrevious} disabled={previousDisabled} type="left" />
        </Tooltip>
      )}
      <PanelDate>
        <Tooltip renderContent={() => (monthsView ? RETURN : SELECT_MONTH)}>
          <Month view={monthsView} onMouseDown={monthMouseDownHandle}>
            {capitalizeFirstLetter(getFormattedValue(viewDate, { month: 'long' }, localeName))}
          </Month>
        </Tooltip>
        <Tooltip renderContent={() => (yearsView ? RETURN : SELECT_YEAR)}>
          <Year view={yearsView} onMouseDown={yearMouseDownHandle}>
            {viewDate.getFullYear()}
          </Year>
        </Tooltip>
      </PanelDate>
      {!monthsView && (
        <Tooltip renderContent={() => (yearsView ? FORWARD : NEXT_MONTH)}>
          <Button onMouseDown={onNext} disabled={nextDisabled} type="right" />
        </Tooltip>
      )}
    </PanelComponent>
  );
};
