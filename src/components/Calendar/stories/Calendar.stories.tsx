import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import type { CalendarPropType } from '@admiral-ds/react-ui';
import { Calendar, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { SimpleWithSpecialDatesTemplate } from './SimpleWithSpecialDates.template';
import { SimpleWithSetActiveViewWithoutDayTemplate } from './SimpleWithSetActiveViewWithoutDay.template';
import { SimpleWithSetActiveViewDateAfterChooseYearTemplate } from './SimpleWithSetActiveViewDateAfterChooseYear.template';
import { SimpleWithSetActiveViewDateTemplate } from './SimpleWithSetActiveViewDate.template';
import { SimpleWithChangeViewDateTemplate } from './SimpleWithChangeViewDate.template';
import { SimpleWithFilterDateTemplate } from './SimpleWithFilterDate.template';
import { SimpleWithMaxDateTemplate } from './SimpleWithMaxDate.template';
import { RangeTemplate } from './Range.template';
import { CalendarSimpleTemplate } from './CalendarSimple.template';

// Imports of text sources
import SimpleWithSpecialDatesRaw from './SimpleWithSpecialDates.template?raw';
import SimpleWithSetActiveViewWithoutDayRaw from './SimpleWithSetActiveViewWithoutDay.template?raw';
import SimpleWithSetActiveViewDateAfterChooseYearRaw from './SimpleWithSetActiveViewDateAfterChooseYear.template?raw';
import SimpleWithSetActiveViewDateRaw from './SimpleWithSetActiveViewDate.template?raw';
import SimpleWithChangeViewDateRaw from './SimpleWithChangeViewDate.template?raw';
import SimpleWithFilterDateRaw from './SimpleWithFilterDate.template?raw';
import SimpleWithMaxDateRaw from './SimpleWithMaxDate.template?raw';
import RangeRaw from './Range.template?raw';
import CalendarSimpleRaw from './CalendarSimple.template?raw';

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
const CalendarSimpleStory: StoryFn<typeof Calendar> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <CalendarSimpleTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const CalendarSimple = {
  render: CalendarSimpleStory,

  parameters: {
    docs: {
      source: {
        code: CalendarSimpleRaw,
      },
    },
  },

  args: {},
  name: 'Simple.',
};

//</editor-fold>

//<editor-fold desc="Пример с выбором диапазона">
const RangeStory: StoryFn<typeof Calendar> = (props: CalendarPropType) => <RangeTemplate {...props} />;

export const Range = {
  render: RangeStory,

  parameters: {
    docs: {
      source: {
        code: RangeRaw,
      },
    },
  },

  args: {},
  name: 'Range.',
};

//</editor-fold>

//<editor-fold desc="Пример с ограничением максимальной даты">
const SimpleWithMaxDateStory: StoryFn<typeof Calendar> = (props: CalendarPropType) => (
  <SimpleWithMaxDateTemplate {...props} />
);

export const SimpleWithMaxDate = {
  render: SimpleWithMaxDateStory,

  parameters: {
    docs: {
      source: {
        code: SimpleWithMaxDateRaw,
      },
    },
  },

  args: {},
  name: 'maxDate.',
};

//</editor-fold>

//<editor-fold desc="Пример с недоступными для выбора датами">
const SimpleWithFilterDateStory: StoryFn<typeof Calendar> = (props: CalendarPropType) => (
  <SimpleWithFilterDateTemplate {...props} />
);

export const SimpleWithFilterDate = {
  render: SimpleWithFilterDateStory,

  parameters: {
    docs: {
      source: {
        code: SimpleWithFilterDateRaw,
      },
    },
  },

  args: {},
  name: 'FilterDate.',
};

//</editor-fold>

//<editor-fold desc="Пример с коллбеками">
const SimpleWithChangeViewDateStory: StoryFn<typeof Calendar> = (props: CalendarPropType) => (
  <SimpleWithChangeViewDateTemplate {...props} />
);

export const SimpleWithChangeViewDate = {
  render: SimpleWithChangeViewDateStory,

  parameters: {
    docs: {
      source: {
        code: SimpleWithChangeViewDateRaw,
      },
    },
  },

  args: {},
  name: 'Callback',
};

//</editor-fold>

//<editor-fold desc="Пример с переключением экранов выбора дат">
const SimpleWithSetActiveViewDateStory: StoryFn<typeof Calendar> = (props: CalendarPropType) => (
  <SimpleWithSetActiveViewDateTemplate {...props} />
);

export const SimpleWithSetActiveViewDate = {
  render: SimpleWithSetActiveViewDateStory,

  parameters: {
    docs: {
      source: {
        code: SimpleWithSetActiveViewDateRaw,
      },
    },
  },

  args: {},
  name: 'Active ViewDate screen',
};

//</editor-fold>

//<editor-fold desc="Пример с выбором только месяца/года">
const SimpleWithSetActiveViewDateAfterChooseYearStory: StoryFn<typeof Calendar> = (props: CalendarPropType) => (
  <SimpleWithSetActiveViewDateAfterChooseYearTemplate {...props} />
);

export const SimpleWithSetActiveViewDateAfterChooseYear = {
  render: SimpleWithSetActiveViewDateAfterChooseYearStory,

  parameters: {
    docs: {
      source: {
        code: SimpleWithSetActiveViewDateAfterChooseYearRaw,
      },
    },
  },

  args: {},
  name: 'ViewDate screen after choose year',
};

//</editor-fold>

//<editor-fold desc="Пример с выбором только месяца/года">
const SimpleWithSetActiveViewWithoutDayStory: StoryFn<typeof Calendar> = (props: CalendarPropType) => (
  <SimpleWithSetActiveViewWithoutDayTemplate {...props} />
);

export const SimpleWithSetActiveViewWithoutDay = {
  render: SimpleWithSetActiveViewWithoutDayStory,

  parameters: {
    docs: {
      source: {
        code: SimpleWithSetActiveViewWithoutDayRaw,
      },
    },
  },

  args: {},
  name: 'ViewDate year/month',
};

//</editor-fold>

//<editor-fold desc="Пример с подсветкой выходных, праздничный и специальных дат">
const SimpleWithSpecialDatesStory: StoryFn<typeof Calendar> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <SimpleWithSpecialDatesTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const SimpleWithSpecialDates = {
  render: SimpleWithSpecialDatesStory,

  parameters: {
    docs: {
      source: {
        code: SimpleWithSpecialDatesRaw,
      },
    },
  },

  args: {},
  name: 'Highlight special dates',
};
