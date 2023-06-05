import React, { useState } from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { ThemeProvider } from 'styled-components';

import type { CalendarPropType, Theme } from '#src/index';
import { Calendar, ALL_BORDER_RADIUS_VALUES } from '#src/index';

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
import SimpleWithSpecialDatesRaw from '!!raw-loader!./Templates/SimpleWithSpecialDates';
import SimpleWithSetActiveViewWithoutDayRaw from '!!raw-loader!./Templates/SimpleWithSetActiveViewWithoutDay';
import SimpleWithSetActiveViewDateAfterChooseYearRaw from '!!raw-loader!./Templates/SimpleWithSetActiveViewDateAfterChooseYear';
import SimpleWithSetActiveViewDateRaw from '!!raw-loader!./Templates/SimpleWithSetActiveViewDate';
import SimpleWithChangeViewDateRaw from '!!raw-loader!./Templates/SimpleWithChangeViewDate';
import SimpleWithFilterDateRaw from '!!raw-loader!./Templates/SimpleWithFilterDate';
import SimpleWithMaxDateRaw from '!!raw-loader!./Templates/SimpleWithMaxDate';
import RangeRaw from '!!raw-loader!./Templates/Range';
import CalendarSimpleRaw from '!!raw-loader!./Templates/CalendarSimple';

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
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Calendar>;

//<editor-fold desc="Пример календаря с выбором даты>">
const CalendarSimpleStory: ComponentStory<typeof Calendar> = (args) => (
  <CalendarSimpleTemplate onChange={() => undefined} {...cleanUpProps(args)} />
);

export const CalendarSimple = CalendarSimpleStory.bind({});
CalendarSimple.parameters = {
  docs: {
    source: {
      code: CalendarSimpleRaw,
    },
    description: {
      story: 'Пример календаря с выбором даты>.',
    },
  },
};
CalendarSimple.args = {};
CalendarSimple.storyName = 'Simple.';
//</editor-fold>

//<editor-fold desc="Пример с выбором диапазона">
const RangeStory: ComponentStory<typeof Calendar> = (args: CalendarPropType) => (
  <RangeTemplate onChange={() => undefined} {...cleanUpProps(args)} />
);

export const Range = RangeStory.bind({});
Range.parameters = {
  docs: {
    source: {
      code: RangeRaw,
    },
    description: {
      story: 'Пример с выбором диапазона.',
    },
  },
};
Range.args = {};
Range.storyName = 'Range.';
//</editor-fold>

//<editor-fold desc="Пример с ограничением максимальной даты">
const SimpleWithMaxDateStory: ComponentStory<typeof Calendar> = ({ range, ...args }: CalendarPropType) => (
  <SimpleWithMaxDateTemplate onChange={() => undefined} {...cleanUpProps(args)} />
);

export const SimpleWithMaxDate = SimpleWithMaxDateStory.bind({});
SimpleWithMaxDate.parameters = {
  docs: {
    source: {
      code: SimpleWithMaxDateRaw,
    },
    description: {
      story: 'Пример с ограничением максимальной даты.',
    },
  },
};
SimpleWithMaxDate.args = {};
SimpleWithMaxDate.storyName = 'maxDate.';
//</editor-fold>

//<editor-fold desc="Пример с недоступными для выбора датами">
const SimpleWithFilterDateStory: ComponentStory<typeof Calendar> = ({ range, ...args }: CalendarPropType) => (
  <SimpleWithFilterDateTemplate onChange={() => undefined} {...cleanUpProps(args)} />
);

export const SimpleWithFilterDate = SimpleWithFilterDateStory.bind({});
SimpleWithFilterDate.parameters = {
  docs: {
    source: {
      code: SimpleWithFilterDateRaw,
    },
    description: {
      story: 'Пример с недоступными для выбора датами.',
    },
  },
};
SimpleWithFilterDate.args = {};
SimpleWithFilterDate.storyName = 'FilterDate.';
//</editor-fold>

//<editor-fold desc="Пример с коллбеками">
const SimpleWithChangeViewDateStory: ComponentStory<typeof Calendar> = ({ range, ...args }: CalendarPropType) => (
  <SimpleWithChangeViewDateTemplate onChange={() => undefined} {...cleanUpProps(args)} />
);

export const SimpleWithChangeViewDate = SimpleWithChangeViewDateStory.bind({});
SimpleWithChangeViewDate.parameters = {
  docs: {
    source: {
      code: SimpleWithChangeViewDateRaw,
    },
    description: {
      story: 'Пример с коллбеками.',
    },
  },
};
SimpleWithChangeViewDate.args = {};
SimpleWithChangeViewDate.storyName = 'Callback';
//</editor-fold>

//<editor-fold desc="Пример с переключением экранов выбора дат">
const SimpleWithSetActiveViewDateStory: ComponentStory<typeof Calendar> = ({ range, ...args }: CalendarPropType) => (
  <SimpleWithSetActiveViewDateTemplate onChange={() => undefined} {...cleanUpProps(args)} />
);

export const SimpleWithSetActiveViewDate = SimpleWithSetActiveViewDateStory.bind({});
SimpleWithSetActiveViewDate.parameters = {
  docs: {
    source: {
      code: SimpleWithSetActiveViewDateRaw,
    },
    description: {
      story: 'Пример с переключением экранов выбора дат.',
    },
  },
};
SimpleWithSetActiveViewDate.args = {};
SimpleWithSetActiveViewDate.storyName = 'Active ViewDate screen';
//</editor-fold>

//<editor-fold desc="Пример с выбором только месяца/года">
const SimpleWithSetActiveViewDateAfterChooseYearStory: ComponentStory<typeof Calendar> = ({
  range,
  ...args
}: CalendarPropType) => (
  <SimpleWithSetActiveViewDateAfterChooseYearTemplate onChange={() => undefined} {...cleanUpProps(args)} />
);

export const SimpleWithSetActiveViewDateAfterChooseYear = SimpleWithSetActiveViewDateAfterChooseYearStory.bind({});
SimpleWithSetActiveViewDateAfterChooseYear.parameters = {
  docs: {
    source: {
      code: SimpleWithSetActiveViewDateAfterChooseYearRaw,
    },
    description: {
      story: 'Пример с открытием экрана выбора месяца после выбора года.',
    },
  },
};
SimpleWithSetActiveViewDateAfterChooseYear.args = {};
SimpleWithSetActiveViewDateAfterChooseYear.storyName = 'ViewDate screen after choose year';
//</editor-fold>

//<editor-fold desc="Пример с выбором только месяца/года">
const SimpleWithSetActiveViewWithoutDayStory: ComponentStory<typeof Calendar> = ({
  range,
  ...args
}: CalendarPropType) => (
  <SimpleWithSetActiveViewWithoutDayTemplate onChange={() => undefined} {...cleanUpProps(args)} />
);

export const SimpleWithSetActiveViewWithoutDay = SimpleWithSetActiveViewWithoutDayStory.bind({});
SimpleWithSetActiveViewWithoutDay.parameters = {
  docs: {
    source: {
      code: SimpleWithSetActiveViewWithoutDayRaw,
    },
    description: {
      story: 'Пример с выбором только месяца/года.',
    },
  },
};
SimpleWithSetActiveViewWithoutDay.args = {};
SimpleWithSetActiveViewWithoutDay.storyName = 'ViewDate year/month';
//</editor-fold>

//<editor-fold desc="Пример с подсветкой выходных, праздничный и специальных дат">
const SimpleWithSpecialDatesStory: ComponentStory<typeof Calendar> = (args) => (
  <SimpleWithSpecialDatesTemplate onChange={() => undefined} {...cleanUpProps(args)} />
);
export const SimpleWithSpecialDates = SimpleWithSpecialDatesStory.bind({});
SimpleWithSpecialDates.parameters = {
  docs: {
    source: {
      code: SimpleWithSpecialDatesRaw,
    },
    description: {
      story: 'Пример с подсветкой выходных, праздничный и специальных дат.',
    },
  },
};
SimpleWithSpecialDates.args = {};
SimpleWithSpecialDates.storyName = 'Highlight special dates';
//</editor-fold>
