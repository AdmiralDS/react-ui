import * as React from 'react';

import type { CalendarPropType, ViewScreenType } from '@admiral-ds/react-ui';
import { Calendar, T } from '@admiral-ds/react-ui';

export const SimpleWithSetActiveViewDateAfterChooseYearTemplate = (props: CalendarPropType) => {
  const [selected, setSelected] = React.useState<Date | null>(null);
  const [currentActiveView, setActiveViewDateScreen] = React.useState<ViewScreenType | null>(null);

  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Пример с открытием экрана выбора месяца после выбора года.
      </T>
      <Calendar
        {...props}
        selected={selected}
        currentActiveView={currentActiveView}
        onDateIncreaseDecrease={(date) => {
          setActiveViewDateScreen(null);
          // eslint-disable-next-line no-console
          console.log(date, 'onIncreaseDecreaseDate');
        }}
        onChange={(value) => {
          setSelected(value as Date);
          // eslint-disable-next-line no-console
          console.log(value, 'onChange');
        }}
        onYearSelect={() => {
          setActiveViewDateScreen('MONTH');
        }}
      />
    </>
  );
};
