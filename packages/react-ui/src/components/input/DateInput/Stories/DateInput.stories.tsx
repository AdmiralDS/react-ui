import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import {
  DateInput,
  INPUT_DIMENSIONS_VALUES,
  INPUT_STATUS_VALUES,
  ALL_BORDER_RADIUS_VALUES,
} from '@admiral-ds/react-ui';
import { ReactComponent as CalendarSolidSVG } from '@admiral-ds/icons/build/system/CalendarSolid.svg';

import { DateInputPlaygroundTemplate, DateInputPickMonthTemplate } from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import DateInputPlaygroundRaw from '!!raw-loader!./Templates/DateInputPlayground';
import DateInputPickMonthRaw from '!!raw-loader!./Templates/DateInputPickMonth';

export default {
  title: 'Admiral-2.1/Input/DateInput',
  component: DateInput,
  decorators: [withDesign],
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A53407',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A53678',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A53659',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: INPUT_DIMENSIONS_VALUES,
      control: { type: 'radio' },
    },
    status: {
      control: { type: 'radio' },
      options: INPUT_STATUS_VALUES,
    },
    disabled: {
      control: { type: 'boolean' },
    },
    defaultIsCalendarOpen: { type: 'boolean' },
    value: { control: { type: 'text', disabled: true }, description: 'Значение DateInput' },
    onChange: {
      action: 'onChange',
    },
    displayStatusIcon: {
      control: { type: 'boolean' },
    },
    displayClearIcon: {
      control: { type: 'boolean' },
    },
    readOnly: {
      control: { type: 'boolean' },
    },
    disableCopying: {
      control: { type: 'boolean' },
    },
    range: {
      control: false,
    },
    type: {
      options: ['date', 'date-range'],
      control: { type: 'radio' },
    },
    placeholder: {
      type: 'string',
    },
    minDate: {
      control: false,
    },
    maxDate: {
      control: false,
    },
    containerRef: {
      control: false,
    },
    handleInput: {
      control: false,
    },
    icon: {
      control: false,
    },
    icons: {
      control: false,
    },
    calendarRef: {
      control: false,
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
    skeleton: {
      control: { type: 'boolean' },
    },
    showTooltip: {
      control: { type: 'boolean' },
    },
    isLoading: {
      control: { type: 'boolean' },
    },
    locale: {
      control: false,
    },
    startDate: {
      control: false,
    },
    endDate: {
      control: false,
    },
    validator: {
      control: false,
    },
    selected: {
      control: false,
    },
    tooltipContainer: {
      control: false,
    },
    currentActiveViewImportant: {
      control: { type: 'boolean' },
    },
    theme: {
      control: false,
    },
    as: {
      control: false,
    },
    forwardedAs: {
      control: false,
    },
    isVisible: {
      control: false,
    },
    onVisibilityChange: {
      control: false,
    },
    dropContainerCssMixin: {
      control: false,
    },
    dropContainerClassName: {
      control: false,
    },
    dropContainerStyle: {
      control: false,
    },
    currentActiveView: {
      options: [undefined, 'DAY', 'MONTH', 'YEAR'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof DateInput>;

//<editor-fold desc="DateInput (input type="date")">
const DateInputPlaygroundStory: ComponentStory<typeof DateInput> = (props) => (
  <DateInputPlaygroundTemplate {...cleanUpProps(props)} defaultIsCalendarOpen={true} />
);

export const DateInputPlayground = DateInputPlaygroundStory.bind({});
DateInputPlayground.parameters = {
  docs: {
    source: {
      code: DateInputPlaygroundRaw,
    },
  },
};
DateInputPlayground.storyName = 'DateInput (input type="date")';
//</editor-fold>

//<editor-fold desc="DateInput. Альтернативная иконка">
const DateInputCustomIconStory: ComponentStory<typeof DateInput> = (props) => (
  <DateInputPlaygroundTemplate {...cleanUpProps(props)} icon={CalendarSolidSVG} />
);

export const DateInputCustomIcon = DateInputCustomIconStory.bind({});
DateInputCustomIcon.parameters = {
  docs: {
    source: {
      code: DateInputPlaygroundRaw,
    },
  },
};
DateInputCustomIcon.storyName = 'DateInput. Альтернативная иконка';
//</editor-fold>

//<editor-fold desc="DateInput. Выбор месяца">
const DateInputPickMonthStory: ComponentStory<typeof DateInput> = (props) => (
  <DateInputPickMonthTemplate {...cleanUpProps(props)} />
);

export const DateInputPickMonth = DateInputPickMonthStory.bind({});
DateInputPickMonth.parameters = {
  docs: {
    source: {
      code: DateInputPickMonthRaw,
    },
  },
};
DateInputPickMonth.storyName = 'DateInput. Выбор месяца';
//</editor-fold>
