import type { FC, MouseEvent } from 'react';
import React from 'react';
import { Tooltip } from '#src/components/Tooltip';
import { ThemeContext } from 'styled-components';
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

interface IPanelProps {
  viewDate: Date;
  yearsView: boolean;
  monthsView: boolean;
  minDate?: Date;
  maxDate?: Date;
  tooltipContainer?: Element | null;

  onYearsViewShow(event: MouseEvent<HTMLDivElement>): void;

  onYearsViewHide(event: MouseEvent<HTMLDivElement>): void;

  onMonthsViewShow(event: MouseEvent<HTMLDivElement>): void;

  onMonthsViewHide(event: MouseEvent<HTMLDivElement>): void;

  onNext(event: MouseEvent<HTMLDivElement>): void;

  onPrevious(event: MouseEvent<HTMLDivElement>): void;
}

export const Panel: FC<IPanelProps> = ({
  viewDate,
  minDate,
  maxDate,
  yearsView,
  monthsView,
  tooltipContainer,
  onYearsViewShow,
  onYearsViewHide,
  onMonthsViewShow,
  onMonthsViewHide,
  onNext,
  onPrevious,
}) => {
  const theme = React.useContext(ThemeContext) || LIGHT_THEME;
  const previousMonthDisabled = !!minDate && differenceMonths(minDate, subMonths(viewDate, 1)) > 0;
  const nextMonthDisabled = !!maxDate && differenceMonths(addMonths(viewDate, 1), maxDate) > 0;
  const previousYearDisabled = !!minDate && differenceYears(minDate, subYears(viewDate, 1)) > 0;
  const nextYearDisabled = !!maxDate && differenceYears(addYears(viewDate, 1), maxDate) > 0;
  const previousDisabled = yearsView ? previousYearDisabled : previousMonthDisabled;
  const nextDisabled = yearsView ? nextYearDisabled : nextMonthDisabled;

  const previousBtnRef = React.useRef<HTMLDivElement | null>(null);
  const nextBtnRef = React.useRef<HTMLDivElement | null>(null);
  const monthRef = React.useRef(null);
  const yearRef = React.useRef(null);

  const [previousBtnTipVisible, setPreviousBtnTipVisible] = React.useState(false);
  const [nextBtnTipVisible, setNextBtnTipVisible] = React.useState(false);
  const [monthTipVisible, setMonthTipVisible] = React.useState(false);
  const [yearTipVisible, setYearTipVisible] = React.useState(false);

  const handlePreviousBtnTipChange = (visible: boolean) => setPreviousBtnTipVisible(visible);
  const handleNextBtnTipChange = (visible: boolean) => setNextBtnTipVisible(visible);
  const handleMonthTipChange = (visible: boolean) => setMonthTipVisible(visible);
  const handleYearTipChange = (visible: boolean) => setYearTipVisible(visible);

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
        <>
          <Button innerRef={previousBtnRef} onMouseDown={onPrevious} disabled={previousDisabled} type="left" />
          <Tooltip
            targetRef={previousBtnRef}
            visible={previousBtnTipVisible}
            onVisibilityChange={handlePreviousBtnTipChange}
            renderContent={() =>
              yearsView
                ? theme.locales[theme.currentLocale].calendar_back
                : theme.locales[theme.currentLocale].calendar_previous_month
            }
            container={tooltipContainer}
          />
        </>
      )}
      <PanelDate>
        <Month ref={monthRef} view={monthsView} onMouseDown={monthMouseDownHandle}>
          {/* {capitalizeFirstLetter(getFormattedValue(viewDate, { month: 'long' }, localeName))} */}
          {capitalizeFirstLetter(getFormattedValue(viewDate, { month: 'long' }, theme.currentLocale || 'ru'))}
        </Month>
        <Tooltip
          targetRef={monthRef}
          visible={monthTipVisible}
          onVisibilityChange={handleMonthTipChange}
          renderContent={() =>
            monthsView
              ? theme.locales[theme.currentLocale].calendar_return
              : theme.locales[theme.currentLocale].calendar_select_month
          }
          container={tooltipContainer}
        />
        <Year ref={yearRef} view={yearsView} onMouseDown={yearMouseDownHandle}>
          {viewDate.getFullYear()}
        </Year>
        <Tooltip
          targetRef={yearRef}
          visible={yearTipVisible}
          onVisibilityChange={handleYearTipChange}
          renderContent={() =>
            yearsView
              ? theme.locales[theme.currentLocale].calendar_return
              : theme.locales[theme.currentLocale].calendar_select_year
          }
          container={tooltipContainer}
        />
      </PanelDate>
      {!monthsView && (
        <>
          <Button innerRef={nextBtnRef} onMouseDown={onNext} disabled={nextDisabled} type="right" />
          <Tooltip
            targetRef={nextBtnRef}
            visible={nextBtnTipVisible}
            onVisibilityChange={handleNextBtnTipChange}
            renderContent={() =>
              yearsView
                ? theme.locales[theme.currentLocale].calendar_forward
                : theme.locales[theme.currentLocale].calendar_next_month
            }
            container={tooltipContainer}
          />
        </>
      )}
    </PanelComponent>
  );
};
