import * as React from 'react';

import type { CalendarPropType, ViewScreenType } from '@admiral-ds/react-ui';
import { Calendar, T } from '@admiral-ds/react-ui';

export const SimpleWithChangeViewDateTemplate = ({ ...props }: CalendarPropType) => {
  const [selected, setSelected] = React.useState<Date | null>(null);

  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Пример с коллбеками (смотри в консоль)
      </T>
      <T font="Body/Body 2 Long" as="div">
        Открытие экранов выбора года и месяца `(onViewEnter, onViewLeave)`
      </T>
      <T font="Body/Body 2 Long" as="div" style={{ marginBottom: '24px' }}>
        Изменение даты после выбора года или месяца по стрелкам `(onIncreaseDecreaseDate)`
      </T>

      <Calendar
        {...props}
        selected={selected}
        onChange={(value) => {
          setSelected(value as Date);
        }}
        onDateIncreaseDecrease={(value) => {
          // eslint-disable-next-line no-console
          console.log('onIncreaseDecreaseDate', value);
        }}
        onViewEnter={(view: ViewScreenType) => {
          // eslint-disable-next-line no-console
          console.log('onViewEnter', view);
        }}
        onViewLeave={(view: ViewScreenType) => {
          // eslint-disable-next-line no-console
          console.log('onViewLeave', view);
        }}
      />
    </>
  );
};
