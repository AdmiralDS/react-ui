import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import type { CalendarPropType } from '@admiral-ds/react-ui';
import { Calendar, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import {
  SimpleWithSpecialDatesTemplate,
  SimpleWithSetActiveViewWithoutDayTemplate,
  SimpleWithSetActiveViewDateAfterChooseYearTemplate,
  SimpleWithSetActiveViewDateTemplate,
  SimpleWithChangeViewDateTemplate,
  SimpleWithFilterDateTemplate,
  SimpleWithMaxDateTemplate,
  RangeTemplate,
  CalendarSimpleTemplate,
} from '#src/components/Calendar/Stories/Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import SimpleWithSpecialDatesRaw from './Templates/SimpleWithSpecialDates?raw';
import SimpleWithSetActiveViewWithoutDayRaw from './Templates/SimpleWithSetActiveViewWithoutDay?raw';
import SimpleWithSetActiveViewDateAfterChooseYearRaw from './Templates/SimpleWithSetActiveViewDateAfterChooseYear?raw';
import SimpleWithSetActiveViewDateRaw from './Templates/SimpleWithSetActiveViewDate?raw';
import SimpleWithChangeViewDateRaw from './Templates/SimpleWithChangeViewDate?raw';
import SimpleWithFilterDateRaw from './Templates/SimpleWithFilterDate?raw';
import SimpleWithMaxDateRaw from './Templates/SimpleWithMaxDate?raw';
import RangeRaw from './Templates/Range?raw';
import CalendarSimpleRaw from './Templates/CalendarSimple?raw';

export default {
  title: 'Admiral-2.1/Calendar',
  decorators: undefined,
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
    locale: {
      control: false,
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
  },
} as Meta<typeof Calendar>;

//<editor-fold desc="Пример календаря с выбором даты>">
const CalendarSimpleStory: StoryFn<typeof Calendar> = (args) => (
  <CalendarSimpleTemplate onChange={() => undefined} {...cleanUpProps(args)} />
);

export const CalendarSimple = {
  render: CalendarSimpleStory,

  parameters: {
    docs: {
      source: {
        code: CalendarSimpleRaw,
      },
      description: {
        story: 'Пример календаря с выбором даты>.',
      },
    },
  },

  args: {},
  name: 'Simple.',
};

//</editor-fold>

//<editor-fold desc="Пример с выбором диапазона">
const RangeStory: StoryFn<typeof Calendar> = (args: CalendarPropType) => (
  <RangeTemplate onChange={() => undefined} {...cleanUpProps(args)} />
);

export const Range = {
  render: RangeStory,

  parameters: {
    docs: {
      source: {
        code: RangeRaw,
      },
      description: {
        story: 'Пример с выбором диапазона.',
      },
    },
  },

  args: {},
  name: 'Range.',
};

//</editor-fold>

//<editor-fold desc="Пример с ограничением максимальной даты">
const SimpleWithMaxDateStory: StoryFn<typeof Calendar> = ({ range, ...args }: CalendarPropType) => (
  <SimpleWithMaxDateTemplate onChange={() => undefined} {...cleanUpProps(args)} />
);

export const SimpleWithMaxDate = {
  render: SimpleWithMaxDateStory,

  parameters: {
    docs: {
      source: {
        code: SimpleWithMaxDateRaw,
      },
      description: {
        story: 'Пример с ограничением максимальной даты.',
      },
    },
  },

  args: {},
  name: 'maxDate.',
};

//</editor-fold>

//<editor-fold desc="Пример с недоступными для выбора датами">
const SimpleWithFilterDateStory: StoryFn<typeof Calendar> = ({ range, ...args }: CalendarPropType) => (
  <SimpleWithFilterDateTemplate onChange={() => undefined} {...cleanUpProps(args)} />
);

export const SimpleWithFilterDate = {
  render: SimpleWithFilterDateStory,

  parameters: {
    docs: {
      source: {
        code: SimpleWithFilterDateRaw,
      },
      description: {
        story: 'Пример с недоступными для выбора датами.',
      },
    },
  },

  args: {},
  name: 'FilterDate.',
};

//</editor-fold>

//<editor-fold desc="Пример с коллбеками">
const SimpleWithChangeViewDateStory: StoryFn<typeof Calendar> = ({ range, ...args }: CalendarPropType) => (
  <SimpleWithChangeViewDateTemplate onChange={() => undefined} {...cleanUpProps(args)} />
);

export const SimpleWithChangeViewDate = {
  render: SimpleWithChangeViewDateStory,

  parameters: {
    docs: {
      source: {
        code: SimpleWithChangeViewDateRaw,
      },
      description: {
        story: 'Пример с коллбеками.',
      },
    },
  },

  args: {},
  name: 'Callback',
};

//</editor-fold>

//<editor-fold desc="Пример с переключением экранов выбора дат">
const SimpleWithSetActiveViewDateStory: StoryFn<typeof Calendar> = ({ range, ...args }: CalendarPropType) => (
  <SimpleWithSetActiveViewDateTemplate onChange={() => undefined} {...cleanUpProps(args)} />
);

export const SimpleWithSetActiveViewDate = {
  render: SimpleWithSetActiveViewDateStory,

  parameters: {
    docs: {
      source: {
        code: SimpleWithSetActiveViewDateRaw,
      },
      description: {
        story: 'Пример с переключением экранов выбора дат.',
      },
    },
  },

  args: {},
  name: 'Active ViewDate screen',
};

//</editor-fold>

//<editor-fold desc="Пример с выбором только месяца/года">
const SimpleWithSetActiveViewDateAfterChooseYearStory: StoryFn<typeof Calendar> = ({
  range,
  ...args
}: CalendarPropType) => (
  <SimpleWithSetActiveViewDateAfterChooseYearTemplate onChange={() => undefined} {...cleanUpProps(args)} />
);

export const SimpleWithSetActiveViewDateAfterChooseYear = {
  render: SimpleWithSetActiveViewDateAfterChooseYearStory,

  parameters: {
    docs: {
      source: {
        code: SimpleWithSetActiveViewDateAfterChooseYearRaw,
      },
      description: {
        story: 'Пример с открытием экрана выбора месяца после выбора года.',
      },
    },
  },

  args: {},
  name: 'ViewDate screen after choose year',
};

//</editor-fold>

//<editor-fold desc="Пример с выбором только месяца/года">
const SimpleWithSetActiveViewWithoutDayStory: StoryFn<typeof Calendar> = ({ range, ...args }: CalendarPropType) => (
  <SimpleWithSetActiveViewWithoutDayTemplate onChange={() => undefined} {...cleanUpProps(args)} />
);

export const SimpleWithSetActiveViewWithoutDay = {
  render: SimpleWithSetActiveViewWithoutDayStory,

  parameters: {
    docs: {
      source: {
        code: SimpleWithSetActiveViewWithoutDayRaw,
      },
      description: {
        story: 'Пример с выбором только месяца/года.',
      },
    },
  },

  args: {},
  name: 'ViewDate year/month',
};

//</editor-fold>

//<editor-fold desc="Пример с подсветкой выходных, праздничный и специальных дат">
const SimpleWithSpecialDatesStory: StoryFn<typeof Calendar> = (args) => (
  <SimpleWithSpecialDatesTemplate onChange={() => undefined} {...cleanUpProps(args)} />
);

export const SimpleWithSpecialDates = {
  render: SimpleWithSpecialDatesStory,

  parameters: {
    docs: {
      source: {
        code: SimpleWithSpecialDatesRaw,
      },
      description: {
        story: 'Пример с подсветкой выходных, праздничный и специальных дат.',
      },
    },
  },

  args: {},
  name: 'Highlight special dates',
};
