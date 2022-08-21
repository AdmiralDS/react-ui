import type { FC, MouseEvent } from 'react';
import React from 'react';
import { Tooltip } from '#src/components/TooltipRefactor';

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

import { Button } from './Button';

interface IPanelProps {
  viewDate: Date;
  yearsView: boolean;
  monthsView: boolean;
  localeName: LocaleType;
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
  localeName,
  tooltipContainer,
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
            renderContent={() => (yearsView ? BACK : PREVIOUS_MONTH)}
            container={tooltipContainer}
          />
        </>
      )}
      <PanelDate>
        <Month ref={monthRef} view={monthsView} onMouseDown={monthMouseDownHandle}>
          {capitalizeFirstLetter(getFormattedValue(viewDate, { month: 'long' }, localeName))}
        </Month>
        <Tooltip
          targetRef={monthRef}
          visible={monthTipVisible}
          onVisibilityChange={handleMonthTipChange}
          renderContent={() => (monthsView ? RETURN : SELECT_MONTH)}
          container={tooltipContainer}
        />
        <Year ref={yearRef} view={yearsView} onMouseDown={yearMouseDownHandle}>
          {viewDate.getFullYear()}
        </Year>
        <Tooltip
          targetRef={yearRef}
          visible={yearTipVisible}
          onVisibilityChange={handleYearTipChange}
          renderContent={() => (yearsView ? RETURN : SELECT_YEAR)}
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
            renderContent={() => (yearsView ? FORWARD : NEXT_MONTH)}
            container={tooltipContainer}
          />
        </>
      )}
    </PanelComponent>
  );
};
