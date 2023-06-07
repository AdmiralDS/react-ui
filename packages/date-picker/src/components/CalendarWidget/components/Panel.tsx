import type { FC, MouseEvent } from 'react';
import * as React from 'react';
import type { Dayjs } from 'dayjs';
import { TooltipHoc } from '@admiral-ds/react-ui';
import { useTheme } from 'styled-components';
import { LIGHT_THEME } from '@admiral-ds/react-ui';

import { PanelComponent } from '../styled/PanelComponent';
import { Month, PanelDate, Year } from '../styled/PanelDate';
import { capitalizeFirstLetter } from '../constants';

import { Button } from './Button';
import { getFormattedValue } from '../date-utils';

const MonthWithTooltip = TooltipHoc(Month);
const YearWithTooltip = TooltipHoc(Year);
const ButtonWithTooltip = TooltipHoc(Button);

interface IPanelProps {
  viewDate: Dayjs;
  yearsView: boolean;
  monthsView: boolean;
  minDate?: Dayjs;
  maxDate?: Dayjs;
  tooltipContainer?: Element | null;
  locale?: {
    backwardText?: string;
    forwardText?: string;
    nextMonthText?: string;
    previousMonthText?: string;
    returnText?: string;
    selectYearText?: string;
    selectMonthText?: string;
  };

  onYearsViewShow?: (event: MouseEvent<HTMLDivElement>) => void;

  onYearsViewHide?: (event: MouseEvent<HTMLDivElement>) => void;

  onMonthsViewShow?: (event: MouseEvent<HTMLDivElement>) => void;

  onMonthsViewHide?: (event: MouseEvent<HTMLDivElement>) => void;

  onNext?: (event: MouseEvent<HTMLButtonElement>) => void;

  onPrevious?: (event: MouseEvent<HTMLButtonElement>) => void;
  userLocale?: string;
}

export const Panel: FC<IPanelProps> = ({
  viewDate,
  minDate,
  maxDate,
  yearsView,
  monthsView,
  tooltipContainer,
  locale,
  onYearsViewShow,
  onYearsViewHide,
  onMonthsViewShow,
  onMonthsViewHide,
  onNext = () => undefined,
  onPrevious = () => undefined,
  userLocale,
}) => {
  const theme = useTheme() || LIGHT_THEME;
  const previousMonthDisabled = !!minDate && minDate.diff(viewDate.subtract(1, 'month'), 'month') > 0;
  const nextMonthDisabled = !!maxDate && viewDate.add(1, 'month').diff(maxDate, 'year') > 0;
  const previousYearDisabled = !!minDate && minDate.diff(viewDate.subtract(1, 'year'), 'year') > 0;
  const nextYearDisabled = !!maxDate && viewDate.add(1, 'year').diff(maxDate, 'year') > 0;
  const previousDisabled = yearsView ? previousYearDisabled : previousMonthDisabled;
  const nextDisabled = yearsView ? nextYearDisabled : nextMonthDisabled;

  const currentLocale = userLocale || theme.currentLocale || 'ru';

  const monthMouseDownHandle = (event: any) => {
    event.preventDefault();
    monthsView ? onMonthsViewHide?.(event) : onMonthsViewShow?.(event);
  };
  const yearMouseDownHandle = (event: any) => {
    event.preventDefault();
    yearsView ? onYearsViewHide?.(event) : onYearsViewShow?.(event);
  };

  return (
    <PanelComponent yearsView={yearsView} monthsView={monthsView} className="ui-kit-calendar-panel-component">
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
          view={monthsView}
          onMouseDown={monthMouseDownHandle}
        >
          {capitalizeFirstLetter(getFormattedValue(viewDate, currentLocale, 'MMMM'))}
        </MonthWithTooltip>
        <YearWithTooltip
          renderContent={() =>
            yearsView
              ? locale?.returnText || theme.locales[theme.currentLocale].calendar.returnText
              : locale?.selectYearText || theme.locales[theme.currentLocale].calendar.selectYearText
          }
          view={yearsView}
          onMouseDown={yearMouseDownHandle}
        >
          {viewDate.get('year')}
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

export const renderDefaultPanel = (props: IPanelProps) => {
  return <Panel {...props} />;
};
