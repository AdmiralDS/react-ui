import React, { useState } from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Button } from '@admiral-ds/react-ui';

import type { Calendar3Props } from '@admiral-ds/date-picker';
import { Calendar3 } from '@admiral-ds/date-picker';
import type { ViewScreen3 } from '@admiral-ds/date-picker';
import { css, ThemeProvider } from 'styled-components';
import type { Theme } from '@admiral-ds/react-ui';
import { T } from '@admiral-ds/react-ui';
import { ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';
import { weekendMixin } from '@admiral-ds/react-ui';
import { startOfDay } from './date-utils';

export default {
  title: 'Admiral-2.1/Calendar3',
  decorators: [withDesign],
  component: Calendar3,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A53407',
    },
  },
  argTypes: {
    range: {
      control: { type: 'boolean' },
    },
    currentActiveViewImportant: {
      control: { type: 'boolean' },
    },
    currentActiveView: {
      options: ['YEAR', 'MONTH', 'DAY'],
      control: { type: 'radio' },
    },
    validator: {
      control: false,
    },
    tooltipContainer: {
      control: false,
    },
    startDate: {
      control: false,
    },
    selected: {
      control: false,
    },
    endDate: {
      control: false,
    },
    minDate: {
      control: false,
    },
    maxDate: {
      control: false,
    },
    highlightWeekend: {
      control: { type: 'boolean' },
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Calendar3>;

const Template1: ComponentStory<typeof Calendar3> = (args) => {
  const [selected, setSelected] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return args.range ? (
    <ThemeProvider theme={swapBorder}>
      <Calendar3
        {...args}
        range
        startDate={selected}
        endDate={endDate}
        onChange={(value: any) => {
          setSelected(value[0]);
          setEndDate(value[1]);
        }}
      />
    </ThemeProvider>
  ) : (
    <ThemeProvider theme={swapBorder}>
      <Calendar3
        {...args}
        selected={selected}
        onChange={(value: any) => {
          setSelected(value);
        }}
      />
    </ThemeProvider>
  );
};

const Template2: ComponentStory<typeof Calendar3> = (args: Calendar3Props) => {
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);
  return (
    <>
      <Calendar3
        {...args}
        range
        startDate={startDate}
        endDate={endDate}
        onChange={(value: any) => {
          setStartDate(value[0]);
          setEndDate(value[1]);
        }}
      />
    </>
  );
};

const Template3: ComponentStory<typeof Calendar3> = ({ range, ...args }: Calendar3Props) => {
  const [selected, setSelected] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);
  const tomorrow = dayjs().add(1, 'day');
  return range ? (
    <>
      <Calendar3
        {...args}
        range
        startDate={selected}
        endDate={endDate}
        maxDate={tomorrow}
        onChange={(value: any) => {
          setSelected(value[0]);
          setEndDate(value[1]);
        }}
      />
    </>
  ) : (
    <>
      <Calendar3
        {...args}
        maxDate={tomorrow}
        selected={selected}
        onChange={(value: any) => {
          setSelected(value);
        }}
      />
    </>
  );
};

const Template4: ComponentStory<typeof Calendar3> = ({ range, ...args }: Calendar3Props) => {
  const [selected, setSelected] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);
  const isWeekday = (date: Dayjs) => {
    const day = date.day();
    return day !== 0 && day !== 6;
  };
  return range ? (
    <>
      <Calendar3
        {...args}
        range
        startDate={selected}
        endDate={endDate}
        filterDate={isWeekday}
        onChange={(value: any) => {
          setSelected(value[0]);
          setEndDate(value[1]);
        }}
      />
    </>
  ) : (
    <>
      <Calendar3
        {...args}
        filterDate={isWeekday}
        selected={selected}
        onChange={(value: any) => {
          setSelected(value);
        }}
      />
    </>
  );
};

const Template5: ComponentStory<typeof Calendar3> = ({ range, ...args }: Calendar3Props) => {
  const [selected, setSelected] = useState<Dayjs | null>(null);

  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '25px' }}>
        Коллбеки (смотри в консоль)
      </T>
      <T font="Body/Body 2 Long" as="div">
        Открытие экранов выбора года и месяца `(onViewEnter, onViewLeave)`
      </T>
      <T font="Body/Body 2 Long" as="div" style={{ marginBottom: '25px' }}>
        Изменение даты после выбора года или месяца по стрелкам `(onIncreaseDecreaseDate)`
      </T>

      <Calendar3
        {...args}
        selected={selected}
        onChange={(value: any) => {
          setSelected(value);
        }}
        onDateIncreaseDecrease={(value: any) => {
          console.log('onIncreaseDecreaseDate', value);
        }}
        onViewEnter={(view: ViewScreen3) => {
          console.log('onViewEnter', view);
        }}
        onViewLeave={(view: ViewScreen3) => {
          console.log('onViewLeave', view);
        }}
      />
    </>
  );
};

const Template6: ComponentStory<typeof Calendar3> = ({ range, ...args }: Calendar3Props) => {
  const [selected, setSelected] = useState<Dayjs | null>(null);
  const [currentActiveView, setCurrentActiveView] = useState<ViewScreen3 | null>(null);

  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '25px' }}>
        Переключение экранов выбора дат - месяц/год/день
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
      <Calendar3
        {...args}
        selected={selected}
        currentActiveView={currentActiveView}
        currentActiveViewImportant={true}
        onDateIncreaseDecrease={() => {
          setCurrentActiveView(null);
        }}
        onYearSelect={(data) => {
          setSelected(data as Dayjs);
          setCurrentActiveView('MONTH');
        }}
        onMonthSelect={(data) => {
          setSelected(data as Dayjs);
        }}
        onViewMonthSelect={() => {
          console.log('onViewMonthSelect');
          setCurrentActiveView('MONTH');
        }}
        onViewYearSelect={() => {
          console.log('onViewYearSelect');
          setCurrentActiveView('YEAR');
        }}
        onChange={(value: any) => {
          setSelected(value);
        }}
      />
    </>
  );
};

const Template7: ComponentStory<typeof Calendar3> = ({ range, ...args }: Calendar3Props) => {
  const [selected, setSelected] = useState<Dayjs | null>(null);
  const [currentActiveView, setActiveViewDateScreen] = useState<ViewScreen3 | null>(null);

  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '25px' }}>
        Открытие экрана выбора месяца после выбора года
      </T>
      <Calendar3
        {...args}
        selected={selected}
        currentActiveView={currentActiveView}
        onDateIncreaseDecrease={(date: any) => {
          setActiveViewDateScreen(null);
          console.log(date, 'onIncreaseDecreaseDate');
        }}
        onChange={(value: any) => {
          setSelected(value);
          console.log(value, 'onChange');
        }}
        onYearSelect={() => {
          setActiveViewDateScreen('MONTH');
        }}
      />
    </>
  );
};

const Template8: ComponentStory<typeof Calendar3> = ({ range, ...args }: Calendar3Props) => {
  const [selected, setSelected] = useState<Dayjs | null>(null);
  const [currentActiveView, setCurrentActiveView] = useState<ViewScreen3 | null>('MONTH');

  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '25px' }}>
        Показываем только экраны выбора месяца и года
      </T>
      <T font="Body/Body 2 Long" as="div" style={{ marginBottom: '25px' }}>
        Если выставлен currentActiveViewImportant, то необходимо самому управлять открытием экранов
      </T>
      <div>
        <Button onClick={() => setSelected(dayjs())}>set Dayjs now</Button>
      </div>
      <br />
      <Calendar3
        {...args}
        selected={selected}
        currentActiveView={currentActiveView}
        currentActiveViewImportant={true}
        onDateIncreaseDecrease={(date: any) => {
          console.log(date, 'onIncreaseDecreaseDate');
          setSelected(date);
        }}
        onChange={(value: any) => {
          setSelected(value);
          console.log(value, 'onChange');
        }}
        onViewMonthSelect={() => {
          console.log('onViewMonthSelect');
          setCurrentActiveView('MONTH');
        }}
        onViewYearSelect={() => {
          console.log('onViewYearSelect');
          setCurrentActiveView('YEAR');
        }}
      />
    </>
  );
};

const HOLIDAY = 'holidays';
const PRE_HOLIDAY = 'preholidays';
const WEEKEND = 'weekend';
const holidayCalendar: Array<{ date: string; type: string }> = [
  { date: '2022-01-01', type: HOLIDAY },
  { date: '2022-01-02', type: HOLIDAY },
  { date: '2022-01-03', type: HOLIDAY },
  { date: '2022-01-04', type: HOLIDAY },
  { date: '2022-01-05', type: HOLIDAY },
  { date: '2022-01-06', type: HOLIDAY },
  { date: '2022-01-07', type: HOLIDAY },
  { date: '2022-01-08', type: HOLIDAY },
  { date: '2022-01-09', type: WEEKEND },
  { date: '2022-01-15', type: WEEKEND },
  { date: '2022-01-16', type: WEEKEND },
  { date: '2022-01-22', type: WEEKEND },
  { date: '2022-01-23', type: WEEKEND },
  { date: '2022-01-29', type: WEEKEND },
  { date: '2022-01-30', type: WEEKEND },
  { date: '2022-02-05', type: WEEKEND },
  { date: '2022-02-06', type: WEEKEND },
  { date: '2022-02-12', type: WEEKEND },
  { date: '2022-02-13', type: WEEKEND },
  { date: '2022-02-19', type: WEEKEND },
  { date: '2022-02-20', type: WEEKEND },
  { date: '2022-02-23', type: HOLIDAY },
  { date: '2022-02-26', type: WEEKEND },
  { date: '2022-02-27', type: WEEKEND },
  { date: '2022-03-06', type: WEEKEND },
  { date: '2022-03-07', type: WEEKEND },
  { date: '2022-03-08', type: HOLIDAY },
  { date: '2022-03-12', type: WEEKEND },
  { date: '2022-03-13', type: WEEKEND },
  { date: '2022-03-19', type: WEEKEND },
  { date: '2022-03-20', type: WEEKEND },
  { date: '2022-03-26', type: WEEKEND },
  { date: '2022-03-27', type: WEEKEND },
  { date: '2022-04-02', type: WEEKEND },
  { date: '2022-04-03', type: WEEKEND },
  { date: '2022-04-09', type: WEEKEND },
  { date: '2022-04-10', type: WEEKEND },
  { date: '2022-04-16', type: WEEKEND },
  { date: '2022-04-17', type: WEEKEND },
  { date: '2022-04-23', type: WEEKEND },
  { date: '2022-04-24', type: WEEKEND },
  { date: '2022-04-30', type: WEEKEND },
  { date: '2022-05-01', type: HOLIDAY },
  { date: '2022-05-02', type: WEEKEND },
  { date: '2022-05-03', type: WEEKEND },
  { date: '2022-05-07', type: WEEKEND },
  { date: '2022-05-08', type: WEEKEND },
  { date: '2022-05-09', type: HOLIDAY },
  { date: '2022-05-10', type: WEEKEND },
  { date: '2022-05-14', type: WEEKEND },
  { date: '2022-05-15', type: WEEKEND },
  { date: '2022-05-21', type: WEEKEND },
  { date: '2022-05-22', type: WEEKEND },
  { date: '2022-05-28', type: WEEKEND },
  { date: '2022-05-29', type: WEEKEND },
  { date: '2022-06-04', type: WEEKEND },
  { date: '2022-06-05', type: WEEKEND },
  { date: '2022-06-11', type: WEEKEND },
  { date: '2022-06-12', type: HOLIDAY },
  { date: '2022-06-13', type: WEEKEND },
  { date: '2022-06-18', type: WEEKEND },
  { date: '2022-06-19', type: WEEKEND },
  { date: '2022-06-25', type: WEEKEND },
  { date: '2022-06-26', type: WEEKEND },
  { date: '2022-07-02', type: WEEKEND },
  { date: '2022-07-03', type: WEEKEND },
  { date: '2022-07-09', type: WEEKEND },
  { date: '2022-07-10', type: WEEKEND },
  { date: '2022-07-16', type: WEEKEND },
  { date: '2022-07-17', type: WEEKEND },
  { date: '2022-07-23', type: WEEKEND },
  { date: '2022-07-24', type: WEEKEND },
  { date: '2022-07-30', type: WEEKEND },
  { date: '2022-07-31', type: WEEKEND },
  { date: '2022-08-06', type: WEEKEND },
  { date: '2022-08-07', type: WEEKEND },
  { date: '2022-08-13', type: WEEKEND },
  { date: '2022-08-14', type: WEEKEND },
  { date: '2022-08-20', type: WEEKEND },
  { date: '2022-08-21', type: WEEKEND },
  { date: '2022-08-27', type: WEEKEND },
  { date: '2022-08-28', type: WEEKEND },
  { date: '2022-09-03', type: WEEKEND },
  { date: '2022-09-04', type: WEEKEND },
  { date: '2022-09-10', type: WEEKEND },
  { date: '2022-09-11', type: WEEKEND },
  { date: '2022-09-17', type: WEEKEND },
  { date: '2022-09-18', type: WEEKEND },
  { date: '2022-09-24', type: WEEKEND },
  { date: '2022-09-25', type: WEEKEND },
  { date: '2022-10-01', type: WEEKEND },
  { date: '2022-10-02', type: WEEKEND },
  { date: '2022-10-08', type: WEEKEND },
  { date: '2022-10-09', type: WEEKEND },
  { date: '2022-10-15', type: WEEKEND },
  { date: '2022-10-16', type: WEEKEND },
  { date: '2022-10-22', type: WEEKEND },
  { date: '2022-10-23', type: WEEKEND },
  { date: '2022-10-29', type: WEEKEND },
  { date: '2022-10-30', type: WEEKEND },
  { date: '2022-11-04', type: HOLIDAY },
  { date: '2022-11-05', type: WEEKEND },
  { date: '2022-11-06', type: WEEKEND },
  { date: '2022-11-12', type: WEEKEND },
  { date: '2022-11-13', type: WEEKEND },
  { date: '2022-11-19', type: WEEKEND },
  { date: '2022-11-20', type: WEEKEND },
  { date: '2022-11-26', type: WEEKEND },
  { date: '2022-11-27', type: WEEKEND },
  { date: '2022-12-03', type: WEEKEND },
  { date: '2022-12-04', type: WEEKEND },
  { date: '2022-12-10', type: WEEKEND },
  { date: '2022-12-11', type: WEEKEND },
  { date: '2022-12-17', type: WEEKEND },
  { date: '2022-12-18', type: WEEKEND },
  { date: '2022-12-24', type: WEEKEND },
  { date: '2022-12-25', type: WEEKEND },
  { date: '2022-12-31', type: WEEKEND },
  { date: '2022-02-22', type: PRE_HOLIDAY },
  { date: '2022-03-05', type: PRE_HOLIDAY },
  { date: '2022-11-03', type: PRE_HOLIDAY },
  { date: '2023-01-01', type: HOLIDAY },
  { date: '2023-01-02', type: HOLIDAY },
  { date: '2023-01-03', type: HOLIDAY },
  { date: '2023-01-04', type: HOLIDAY },
  { date: '2023-01-05', type: HOLIDAY },
  { date: '2023-01-06', type: HOLIDAY },
  { date: '2023-01-07', type: HOLIDAY },
  { date: '2023-01-08', type: HOLIDAY },
  { date: '2023-01-14', type: WEEKEND },
  { date: '2023-01-15', type: WEEKEND },
  { date: '2023-01-21', type: WEEKEND },
  { date: '2023-01-22', type: WEEKEND },
  { date: '2023-01-28', type: WEEKEND },
  { date: '2023-01-29', type: WEEKEND },
  { date: '2023-02-04', type: WEEKEND },
  { date: '2023-02-05', type: WEEKEND },
  { date: '2023-02-11', type: WEEKEND },
  { date: '2023-02-12', type: WEEKEND },
  { date: '2023-02-18', type: WEEKEND },
  { date: '2023-02-19', type: WEEKEND },
  { date: '2023-02-23', type: HOLIDAY },
  { date: '2023-02-24', type: WEEKEND },
  { date: '2023-02-25', type: WEEKEND },
  { date: '2023-02-26', type: WEEKEND },
  { date: '2023-03-04', type: WEEKEND },
  { date: '2023-03-05', type: WEEKEND },
  { date: '2023-03-08', type: HOLIDAY },
  { date: '2023-03-11', type: WEEKEND },
  { date: '2023-03-12', type: WEEKEND },
  { date: '2023-03-18', type: WEEKEND },
  { date: '2023-03-19', type: WEEKEND },
  { date: '2023-03-25', type: WEEKEND },
  { date: '2023-03-26', type: WEEKEND },
  { date: '2023-04-01', type: WEEKEND },
  { date: '2023-04-02', type: WEEKEND },
  { date: '2023-04-08', type: WEEKEND },
  { date: '2023-04-09', type: WEEKEND },
  { date: '2023-04-15', type: WEEKEND },
  { date: '2023-04-16', type: WEEKEND },
  { date: '2023-04-22', type: WEEKEND },
  { date: '2023-04-23', type: WEEKEND },
  { date: '2023-04-29', type: WEEKEND },
  { date: '2023-04-30', type: WEEKEND },
  { date: '2023-05-01', type: HOLIDAY },
  { date: '2023-05-06', type: WEEKEND },
  { date: '2023-05-07', type: WEEKEND },
  { date: '2023-05-08', type: WEEKEND },
  { date: '2023-05-09', type: HOLIDAY },
  { date: '2023-05-13', type: WEEKEND },
  { date: '2023-05-14', type: WEEKEND },
  { date: '2023-05-20', type: WEEKEND },
  { date: '2023-05-21', type: WEEKEND },
  { date: '2023-05-27', type: WEEKEND },
  { date: '2023-05-28', type: WEEKEND },
  { date: '2023-06-03', type: WEEKEND },
  { date: '2023-06-04', type: WEEKEND },
  { date: '2023-06-10', type: WEEKEND },
  { date: '2023-06-11', type: WEEKEND },
  { date: '2023-06-12', type: HOLIDAY },
  { date: '2023-06-17', type: WEEKEND },
  { date: '2023-06-18', type: WEEKEND },
  { date: '2023-06-24', type: WEEKEND },
  { date: '2023-06-25', type: WEEKEND },
  { date: '2023-07-01', type: WEEKEND },
  { date: '2023-07-02', type: WEEKEND },
  { date: '2023-07-08', type: WEEKEND },
  { date: '2023-07-09', type: WEEKEND },
  { date: '2023-07-15', type: WEEKEND },
  { date: '2023-07-16', type: WEEKEND },
  { date: '2023-07-22', type: WEEKEND },
  { date: '2023-07-23', type: WEEKEND },
  { date: '2023-07-29', type: WEEKEND },
  { date: '2023-07-30', type: WEEKEND },
  { date: '2023-08-05', type: WEEKEND },
  { date: '2023-08-06', type: WEEKEND },
  { date: '2023-08-12', type: WEEKEND },
  { date: '2023-08-13', type: WEEKEND },
  { date: '2023-08-19', type: WEEKEND },
  { date: '2023-08-20', type: WEEKEND },
  { date: '2023-08-26', type: WEEKEND },
  { date: '2023-08-27', type: WEEKEND },
  { date: '2023-09-02', type: WEEKEND },
  { date: '2023-09-03', type: WEEKEND },
  { date: '2023-09-09', type: WEEKEND },
  { date: '2023-09-10', type: WEEKEND },
  { date: '2023-09-16', type: WEEKEND },
  { date: '2023-09-17', type: WEEKEND },
  { date: '2023-09-23', type: WEEKEND },
  { date: '2023-09-24', type: WEEKEND },
  { date: '2023-09-30', type: WEEKEND },
  { date: '2023-10-01', type: WEEKEND },
  { date: '2023-10-07', type: WEEKEND },
  { date: '2023-10-08', type: WEEKEND },
  { date: '2023-10-14', type: WEEKEND },
  { date: '2023-10-15', type: WEEKEND },
  { date: '2023-10-21', type: WEEKEND },
  { date: '2023-10-22', type: WEEKEND },
  { date: '2023-10-28', type: WEEKEND },
  { date: '2023-10-29', type: WEEKEND },
  { date: '2023-11-04', type: HOLIDAY },
  { date: '2023-11-05', type: WEEKEND },
  { date: '2023-11-06', type: WEEKEND },
  { date: '2023-11-11', type: WEEKEND },
  { date: '2023-11-12', type: WEEKEND },
  { date: '2023-11-18', type: WEEKEND },
  { date: '2023-11-19', type: WEEKEND },
  { date: '2023-11-25', type: WEEKEND },
  { date: '2023-11-26', type: WEEKEND },
  { date: '2023-12-02', type: WEEKEND },
  { date: '2023-12-03', type: WEEKEND },
  { date: '2023-12-09', type: WEEKEND },
  { date: '2023-12-10', type: WEEKEND },
  { date: '2023-12-16', type: WEEKEND },
  { date: '2023-12-17', type: WEEKEND },
  { date: '2023-12-23', type: WEEKEND },
  { date: '2023-12-24', type: WEEKEND },
  { date: '2023-12-30', type: WEEKEND },
  { date: '2023-12-31', type: WEEKEND },
  { date: '2023-02-22', type: PRE_HOLIDAY },
  { date: '2023-03-07', type: PRE_HOLIDAY },
  { date: '2023-11-03', type: PRE_HOLIDAY },
];

const holidayMixin = css<{ disabled?: boolean }>`
  color: ${(p) => (p.disabled ? p.theme.color['Success/Success 30'] : p.theme.color['Success/Success 50 Main'])};
`;

const preHolidayMixin = css<{ disabled?: boolean }>`
  color: ${(p) =>
    p.disabled ? p.theme.color['Attention/Attention 30'] : p.theme.color['Attention/Attention 50 Main']};
`;

const holidayDates = new Map(
  holidayCalendar.map((day) => {
    const date = dayjs(day.date);
    const keyDate = startOfDay(date);
    return [keyDate.valueOf(), day.type];
  }),
);

const Template9: ComponentStory<typeof Calendar3> = (args) => {
  const [selected, setSelected] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  const highlightHolidays = (day: Dayjs) => {
    const key = startOfDay(day).valueOf();
    const check = holidayDates.get(key);
    switch (check) {
      case HOLIDAY:
        return holidayMixin;
      case PRE_HOLIDAY:
        return preHolidayMixin;
      case WEEKEND:
        return weekendMixin;
      default:
        return undefined;
    }
  };

  return args.range ? (
    <ThemeProvider theme={swapBorder}>
      <Calendar3
        {...args}
        range
        startDate={selected}
        endDate={endDate}
        onChange={(value: any) => {
          setSelected(value[0]);
          setEndDate(value[1]);
        }}
        highlightSpecialDay={highlightHolidays}
      />
    </ThemeProvider>
  ) : (
    <ThemeProvider theme={swapBorder}>
      <Calendar3
        {...args}
        selected={selected}
        onChange={(value: any) => {
          setSelected(value);
        }}
        highlightSpecialDay={highlightHolidays}
      />
    </ThemeProvider>
  );
};

export const CalendarSimple = Template1.bind({});
CalendarSimple.args = {};
CalendarSimple.storyName = 'Simple.';

export const Range = Template2.bind({});
Range.args = {};
Range.storyName = 'Range.';

export const SimpleWithMaxDate = Template3.bind({});
SimpleWithMaxDate.args = {};
SimpleWithMaxDate.storyName = 'maxDate.';

export const SimpleWithFilterDate = Template4.bind({});
SimpleWithFilterDate.args = {};
SimpleWithFilterDate.storyName = 'FilterDate.';

export const SimpleWithChangeViewDate = Template5.bind({});
SimpleWithChangeViewDate.args = {};
SimpleWithChangeViewDate.storyName = 'Callback';

export const SimpleWithSetActiveViewDate = Template6.bind({});
SimpleWithSetActiveViewDate.args = {};
SimpleWithSetActiveViewDate.storyName = 'Active ViewDate screen';

export const SimpleWithSetActiveViewDateAfterChooseYear = Template7.bind({});
SimpleWithSetActiveViewDateAfterChooseYear.args = {};
SimpleWithSetActiveViewDateAfterChooseYear.storyName = 'ViewDate screen after choose year';

export const SimpleWithSetActiveViewWithOutDay = Template8.bind({});
SimpleWithSetActiveViewWithOutDay.args = {};
SimpleWithSetActiveViewWithOutDay.storyName = 'ViewDate year/month';

export const SimpleWithSpecialDates = Template9.bind({});
SimpleWithSpecialDates.args = {};
SimpleWithSpecialDates.storyName = 'Highlight special dates';
