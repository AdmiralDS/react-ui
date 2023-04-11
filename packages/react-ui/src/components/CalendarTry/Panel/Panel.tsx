import * as React from 'react';
import type { MouseEvent } from 'react';
import type { Dayjs } from 'dayjs';
import { capitalizeFirstLetter } from '#src/components/CalendarTry/utils';
import { Month, PanelDate, Year } from '#src/components/CalendarTry/Panel/PanelDate';
import { PanelWrapper } from '#src/components/CalendarTry/Panel/PanelWrapper';
import { TooltipHoc } from '#src/components/TooltipHOC';
import { Button } from '#src/components/CalendarTry/Panel/PanelButton';
import { ThemeContext } from 'styled-components';
import { LIGHT_THEME } from '#src/components/themes';

const MonthWithTooltip = TooltipHoc(Month);
const YearWithTooltip = TooltipHoc(Year);
const ButtonWithTooltip = TooltipHoc(Button);

interface PanelProps {
  date: Dayjs;
  userLocale?: string;
  locale?: {
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

export const Panel = ({ date, userLocale, locale, onNext, onPrevious }: PanelProps) => {
  const theme = React.useContext(ThemeContext) || LIGHT_THEME;
  const currentLocale = userLocale || theme.currentLocale;

  return (
    <PanelWrapper monthsView={false} yearsView={false}>
      <ButtonWithTooltip
        disabled={false}
        type={'left'}
        onMouseDown={onPrevious}
        renderContent={() => locale?.previousMonthText || theme.locales[currentLocale].calendar.previousMonthText}
      />
      <PanelDate>
        <MonthWithTooltip
          renderContent={() => locale?.selectMonthText || theme.locales[currentLocale].calendar.selectMonthText}
          view={false}
        >
          {capitalizeFirstLetter(date.format('MMMM'))}
        </MonthWithTooltip>
        <YearWithTooltip
          renderContent={() => locale?.selectYearText || theme.locales[currentLocale].calendar.selectYearText}
          view={false}
        >
          {date.format('YYYY')}
        </YearWithTooltip>
      </PanelDate>
      <ButtonWithTooltip
        disabled={false}
        type={'right'}
        onMouseDown={onNext}
        renderContent={() => locale?.nextMonthText || theme.locales[currentLocale].calendar.nextMonthText}
      />
    </PanelWrapper>
  );
};
