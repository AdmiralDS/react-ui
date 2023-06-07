import { ButtonWithTooltip } from './PanelButton';
import { PanelDate, YearsRange } from './PanelDate';
import { differenceYears, yearsRange } from '../utils';
import { DEFAULT_YEAR_COUNT } from '../constants';
import type { BaseContentProps } from './interfaces';

export const YearPanel = ({ date, minDate, maxDate, locale, onNext, onPrevious }: BaseContentProps) => {
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
