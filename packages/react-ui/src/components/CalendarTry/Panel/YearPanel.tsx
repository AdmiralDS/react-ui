import * as React from 'react';
import { ButtonWithTooltip } from '#src/components/CalendarTry/Panel/PanelButton';
import { PanelDate, YearsRange } from '#src/components/CalendarTry/Panel/PanelDate';
import { differenceYears, yearsRange } from '#src/components/CalendarTry/utils';
import { DEFAULT_YEAR_COUNT } from '#src/components/CalendarTry/constants';
import type { PanelTypesProps } from '#src/components/CalendarTry/Panel/interfaces';

export const YearPanel = ({ date, minDate, maxDate, locale, onNext, onPrevious }: PanelTypesProps) => {
  const { start, end } = yearsRange(date, DEFAULT_YEAR_COUNT);
  const previousDisabled = !!minDate && differenceYears(minDate, date.subtract(1, 'year')) > 0;
  const nextDisabled = !!maxDate && differenceYears(date.add(1, 'year'), maxDate) > 0;
  return (
    <>
      {!previousDisabled && (
        <ButtonWithTooltip
          disabled={false}
          type={'left'}
          onMouseDown={onPrevious}
          renderContent={() => locale.backwardText}
        />
      )}
      <PanelDate>
        <YearsRange>{`${start} – ${end}`}</YearsRange>
      </PanelDate>
      {!nextDisabled && (
        <ButtonWithTooltip
          disabled={false}
          type={'right'}
          onMouseDown={onNext}
          renderContent={() => locale.forwardText}
        />
      )}
    </>
  );
};
