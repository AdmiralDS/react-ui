import type { FC, MouseEvent } from 'react';
import * as React from 'react';
import { TooltipHoc } from '#src/components/TooltipHOC';
import { useTheme } from 'styled-components';
import { LIGHT_THEME } from '#src/components/themes';

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
import { capitalizeFirstLetter } from '../constants';

import { Button } from './Button';

const MonthWithTooltip = TooltipHoc(Month);
const YearWithTooltip = TooltipHoc(Year);
const ButtonWithTooltip = TooltipHoc(Button);

interface IPanelProps {
  viewDate: Date;
  yearsView: boolean;
  monthsView: boolean;
  minDate?: Date;
  maxDate?: Date;
  locale?: {
    backwardText?: string;
    forwardText?: string;
    nextMonthText?: string;
    previousMonthText?: string;
    returnText?: string;
    selectYearText?: string;
    selectMonthText?: string;
  };

  onYearsViewShow(event: MouseEvent<HTMLDivElement>): void;

  onYearsViewHide(event: MouseEvent<HTMLDivElement>): void;

  onMonthsViewShow(event: MouseEvent<HTMLDivElement>): void;

  onMonthsViewHide(event: MouseEvent<HTMLDivElement>): void;

  onNext(event: MouseEvent<HTMLButtonElement>): void;

  onPrevious(event: MouseEvent<HTMLButtonElement>): void;
}

export const Panel: FC<IPanelProps> = ({
  viewDate,
  minDate,
  maxDate,
  yearsView,
  monthsView,
  locale,
  onYearsViewShow,
  onYearsViewHide,
  onMonthsViewShow,
  onMonthsViewHide,
  onNext,
  onPrevious,
}) => {
  const theme = useTheme() || LIGHT_THEME;
  const previousMonthDisabled = !!minDate && differenceMonths(minDate, subMonths(viewDate, 1)) > 0;
  const nextMonthDisabled = !!maxDate && differenceMonths(addMonths(viewDate, 1), maxDate) > 0;
  const previousYearDisabled = !!minDate && differenceYears(minDate, subYears(viewDate, 1)) > 0;
  const nextYearDisabled = !!maxDate && differenceYears(addYears(viewDate, 1), maxDate) > 0;
  const previousDisabled = yearsView ? previousYearDisabled : previousMonthDisabled;
  const nextDisabled = yearsView ? nextYearDisabled : nextMonthDisabled;

  const monthMouseDownHandle: React.MouseEventHandler<HTMLHeadingElement> = (event) => {
    event.preventDefault();
    monthsView ? onMonthsViewHide(event) : onMonthsViewShow(event);
  };
  const yearMouseDownHandle: React.MouseEventHandler<HTMLHeadingElement> = (event) => {
    event.preventDefault();
    yearsView ? onYearsViewHide(event) : onYearsViewShow(event);
  };
  return (
    <PanelComponent $yearsView={yearsView} $monthsView={monthsView} className="ui-kit-calendar-panel-component">
      {!monthsView && !previousDisabled ? (
        <ButtonWithTooltip
          renderContent={() =>
            yearsView
              ? locale?.backwardText || theme.locales[theme.currentLocale].calendar.backwardText
              : locale?.previousMonthText || theme.locales[theme.currentLocale].calendar.previousMonthText
          }
          onMouseDown={onPrevious}
          disabled={previousDisabled}
          type="left"
        />
      ) : (
        <Button onMouseDown={onPrevious} disabled={previousDisabled} type="left" />
      )}
      <PanelDate>
        <MonthWithTooltip
          renderContent={() =>
            monthsView
              ? locale?.returnText || theme.locales[theme.currentLocale].calendar.returnText
              : locale?.selectMonthText || theme.locales[theme.currentLocale].calendar.selectMonthText
          }
          $view={monthsView}
          onMouseDown={monthMouseDownHandle}
        >
          {capitalizeFirstLetter(getFormattedValue(viewDate, { month: 'long' }, theme.currentLocale || 'ru'))}
        </MonthWithTooltip>
        <YearWithTooltip
          renderContent={() =>
            yearsView
              ? locale?.returnText || theme.locales[theme.currentLocale].calendar.returnText
              : locale?.selectYearText || theme.locales[theme.currentLocale].calendar.selectYearText
          }
          $view={yearsView}
          onMouseDown={yearMouseDownHandle}
        >
          {viewDate.getFullYear()}
        </YearWithTooltip>
      </PanelDate>
      {!monthsView && !nextDisabled ? (
        <ButtonWithTooltip
          renderContent={() =>
            yearsView
              ? locale?.forwardText || theme.locales[theme.currentLocale].calendar.forwardText
              : locale?.nextMonthText || theme.locales[theme.currentLocale].calendar.nextMonthText
          }
          onMouseDown={onNext}
          disabled={nextDisabled}
          type="right"
        />
      ) : (
        <Button onMouseDown={onNext} disabled={nextDisabled} type="right" />
      )}
    </PanelComponent>
  );
};
