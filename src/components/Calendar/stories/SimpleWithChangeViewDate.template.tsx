import * as React from 'react';

import type { CalendarPropType, ViewScreenType } from '@admiral-ds/react-ui';
import { Calendar, T } from '@admiral-ds/react-ui';

export const SimpleWithChangeViewDateTemplate = ({ ...props }: CalendarPropType) => {
  const [selected, setSelected] = React.useState<Date | null>(null);

  return (
    <>
      <T font="Body/Body 1 Long" forwardedAs="div" style={{ marginBottom: '25px' }}>
        Коллбеки (смотри в консоль)
      </T>
      <T font="Body/Body 2 Long" forwardedAs="div">
        Открытие экранов выбора года и месяца `(onViewEnter, onViewLeave)`
      </T>
      <T font="Body/Body 2 Long" forwardedAs="div" style={{ marginBottom: '25px' }}>
        Изменение даты после выбора года или месяца по стрелкам `(onIncreaseDecreaseDate)`
      </T>

      <Calendar
        {...props}
        selected={selected}
        onChange={(value: any) => {
          setSelected(value);
        }}
        onDateIncreaseDecrease={(value: any) => {
          console.log('onIncreaseDecreaseDate', value);
        }}
        onViewEnter={(view: ViewScreenType) => {
          console.log('onViewEnter', view);
        }}
        onViewLeave={(view: ViewScreenType) => {
          console.log('onViewLeave', view);
        }}
      />
    </>
  );
};
