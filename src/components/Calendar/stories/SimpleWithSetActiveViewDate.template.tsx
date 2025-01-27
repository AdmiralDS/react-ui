import * as React from 'react';

import type { CalendarPropType, ViewScreenType } from '@admiral-ds/react-ui';
import { Button, Calendar, T } from '@admiral-ds/react-ui';

export const SimpleWithSetActiveViewDateTemplate = ({ ...props }: CalendarPropType) => {
  const [selected, setSelected] = React.useState<Date | null>(null);
  const [currentActiveView, setCurrentActiveView] = React.useState<ViewScreenType | null>(null);

  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Пример с переключением экранов выбора дат - месяц/год/день.
      </T>
      <div style={{ display: 'flex' }}>
        <Button dimension="s" onClick={() => setCurrentActiveView('MONTH')}>
          Month
        </Button>
        &nbsp;
        <Button dimension="s" onClick={() => setCurrentActiveView('YEAR')}>
          Year
        </Button>
        &nbsp;
        <Button dimension="s" onClick={() => setCurrentActiveView('DAY')}>
          Day
        </Button>
      </div>
      <br />
      <Calendar
        {...props}
        selected={selected}
        currentActiveView={currentActiveView}
        currentActiveViewImportant={true}
        onDateIncreaseDecrease={() => {
          setCurrentActiveView(null);
        }}
        onYearSelect={(data) => {
          setSelected(data as Date);
          setCurrentActiveView('MONTH');
        }}
        onMonthSelect={(data) => {
          setSelected(data as Date);
        }}
        onViewMonthSelect={() => {
          // eslint-disable-next-line no-console
          console.log('onViewMonthSelect');
          setCurrentActiveView('MONTH');
        }}
        onViewYearSelect={() => {
          // eslint-disable-next-line no-console
          console.log('onViewYearSelect');
          setCurrentActiveView('YEAR');
        }}
        onChange={(value) => {
          setSelected(value as Date);
        }}
      />
    </>
  );
};
