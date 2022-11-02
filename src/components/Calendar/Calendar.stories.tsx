import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Button } from '#src/components/Button';

import { Calendar, CalendarPropType } from './index';
import { ViewScreenType } from './interfaces';
import { ThemeProvider } from 'styled-components';
import { Theme } from '#src/components/themes';
import { T } from '#src/components/T';

export default {
  title: 'Admiral-2.1/Calendar',
  decorators: [withDesign],
  component: Calendar,
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
    themeBorderKind: {
      control: {
        type: 'radio',
        options: ['Border radius 0', 'Border radius 2', 'Border radius 4', 'Border radius 8'],
      },
    },
  },
} as ComponentMeta<typeof Calendar>;

const Template1: ComponentStory<typeof Calendar> = (args) => {
  const [selected, setSelected] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return args.range ? (
    <ThemeProvider theme={swapBorder}>
      <Calendar
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
      <Calendar
        {...args}
        selected={selected}
        onChange={(value: any) => {
          setSelected(value);
        }}
      />
    </ThemeProvider>
  );
};

const Template2: ComponentStory<typeof Calendar> = (args: CalendarPropType) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  return (
    <>
      <Calendar
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

const Template3: ComponentStory<typeof Calendar> = ({ range, ...args }: CalendarPropType) => {
  const [selected, setSelected] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const tomorrow = new Date();
  tomorrow.setDate(new Date().getDate() + 1);
  return range ? (
    <>
      <Calendar
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
      <Calendar
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

const Template4: ComponentStory<typeof Calendar> = ({ range, ...args }: CalendarPropType) => {
  const [selected, setSelected] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const isWeekday = (date: Date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };
  return range ? (
    <>
      <Calendar
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
      <Calendar
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

const Template5: ComponentStory<typeof Calendar> = ({ range, ...args }: CalendarPropType) => {
  const [selected, setSelected] = useState<Date | null>(null);

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

      <Calendar
        {...args}
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

const Template6: ComponentStory<typeof Calendar> = ({ range, ...args }: CalendarPropType) => {
  const [selected, setSelected] = useState<Date | null>(null);
  const [currentActiveView, setCurrentActiveView] = useState<ViewScreenType | null>(null);

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
      <Calendar
        {...args}
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

const Template7: ComponentStory<typeof Calendar> = ({ range, ...args }: CalendarPropType) => {
  const [selected, setSelected] = useState<Date | null>(null);
  const [currentActiveView, setActiveViewDateScreen] = useState<ViewScreenType | null>(null);

  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '25px' }}>
        Открытие экрана выбора месяца после выбора года
      </T>
      <Calendar
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

const Template8: ComponentStory<typeof Calendar> = ({ range, ...args }: CalendarPropType) => {
  const [selected, setSelected] = useState<Date | null>(null);
  const [currentActiveView, setCurrentActiveView] = useState<ViewScreenType | null>('MONTH');

  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '25px' }}>
        Показываем только экраны выбора месяца и года
      </T>
      <T font="Body/Body 2 Long" as="div" style={{ marginBottom: '25px' }}>
        Если выставлен currentActiveViewImportant, то необходимо самому управлять открытием экранов
      </T>
      <div>
        <Button onClick={() => setSelected(new Date())}>set Date now</Button>
      </div>
      <br />
      <Calendar
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
