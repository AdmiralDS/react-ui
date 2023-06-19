import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import {
  DateField,
  INPUT_DIMENSIONS_VALUES,
  INPUT_STATUS_VALUES,
  ALL_BORDER_RADIUS_VALUES,
} from '@admiral-ds/react-ui';

import { DateFieldBaseTemplate } from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';
import { DataAttributesDescription } from '#src/components/form/common';

// Imports of text sources
import DateFieldBaseRaw from '!!raw-loader!./Templates/DateFieldBase';

export default {
  title: 'Admiral-2.1/Form Field/DateField',
  component: DateField,
  decorators: [withDesign],
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    componentSubtitle: <DataAttributesDescription />,
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
    currentActiveView: {
      options: [undefined, 'DAY', 'MONTH', 'YEAR'],
      control: { type: 'radio' },
    },
    isVisible: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    displayClearIcon: {
      control: { type: 'boolean' },
    },
    disableCopying: {
      control: { type: 'boolean' },
    },
    range: {
      control: { type: 'boolean' },
    },
    displayCharacterCounter: {
      control: { type: 'boolean' },
    },
    displayInline: {
      control: { type: 'boolean' },
    },
    defaultIsCalendarOpen: {
      control: { type: 'boolean' },
    },
    isLoading: {
      control: { type: 'boolean' },
    },
    showTooltip: {
      control: { type: 'boolean' },
    },
    currentActiveViewImportant: {
      control: { type: 'boolean' },
    },
    extraText: {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
    },
    handleInput: {
      control: false,
    },
    placeholder: {
      control: { type: 'text' },
    },
    minDate: {
      control: false,
    },
    maxDate: {
      control: false,
    },
    calendarRef: {
      control: false,
    },
    containerRef: {
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
    icon: {
      control: false,
    },
    icons: {
      control: false,
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
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
    skeleton: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof DateField>;

//<editor-fold desc="DateField example">
const DateFieldBaseStory: ComponentStory<typeof DateField> = (props) => (
  <DateFieldBaseTemplate {...cleanUpProps(props)} />
);

export const DateFieldBase = DateFieldBaseStory.bind({});
DateFieldBase.parameters = {
  docs: {
    source: {
      code: DateFieldBaseRaw,
    },
  },
};
DateFieldBase.storyName = 'DateField example';
//</editor-fold>
