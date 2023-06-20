import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { INPUT_DIMENSIONS_VALUES, INPUT_STATUS_VALUES, Field, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';
import type { FieldProps, ComponentDimension } from '@admiral-ds/react-ui';

import {
  DateTimeFieldBaseTemplate,
  DateTimeFieldDisabledTemplate,
  DateTimeFieldReadOnlyTemplate,
  DateTimeFieldStatusTemplate,
} from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';
import { DataAttributesDescription } from '#src/components/form/common';

// Imports of text sources
import DateTimeFieldBaseRaw from '!!raw-loader!./Templates/DateTimeFieldBase';
import DateTimeFieldDisabledRaw from '!!raw-loader!./Templates/DateTimeFieldDisabled';
import DateTimeFieldReadOnlyRaw from '!!raw-loader!./Templates/DateTimeFieldReadOnly';
import DateTimeFieldStatusRaw from '!!raw-loader!./Templates/DateTimeFieldStatus';

interface DateTimeFieldProps extends FieldProps {
  dimension?: ComponentDimension;
}

export default {
  title: 'Admiral-2.1/Form Field/DateTimeField',
  component: Field,
  decorators: undefined,
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
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=112005%3A67969',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: INPUT_DIMENSIONS_VALUES,
      control: { type: 'radio' },
    },
    maxLength: {
      control: { type: { name: 'number', required: false } },
    },
    extraText: {
      control: { type: 'text' },
    },
    prefixValue: {
      control: { type: 'text' },
    },
    suffixValue: {
      control: { type: 'text' },
    },
    displayClearIcon: {
      control: { type: 'boolean' },
    },
    disableCopying: {
      control: { type: 'boolean' },
    },
    displayCharacterCounter: {
      control: { type: 'boolean' },
    },
    displayInline: {
      control: { type: 'boolean' },
    },
    icons: {
      control: false,
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
    ref: {
      control: false,
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
    skeleton: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    readOnly: {
      control: { type: 'boolean' },
    },
    status: {
      options: INPUT_STATUS_VALUES,
      control: { type: 'radio' },
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
  },
} as Meta<typeof Field>;

//<editor-fold desc="DateTimeField example">
const DateTimeFieldBaseStory: StoryFn<typeof Field> = (props) => <DateTimeFieldBaseTemplate {...cleanUpProps(props)} />;

export const DateTimeFieldBase = {
  render: DateTimeFieldBaseStory,

  parameters: {
    docs: {
      source: {
        code: DateTimeFieldBaseRaw,
      },
    },
  },

  name: 'DateTimeField example',
};

//</editor-fold>

//<editor-fold desc="DateTimeField disabled example">
const DateTimeFieldDisabledStory: StoryFn<typeof Field> = (props) => (
  <DateTimeFieldDisabledTemplate {...cleanUpProps(props)} />
);

export const DateTimeFieldDisabled = {
  render: DateTimeFieldDisabledStory,

  parameters: {
    docs: {
      source: {
        code: DateTimeFieldDisabledRaw,
      },
    },
  },

  name: 'DateTimeField disabled example',
};

//</editor-fold>

//<editor-fold desc="DateTimeField read only example">
const DateTimeFieldReadOnlyStory: StoryFn<typeof Field> = (props) => (
  <DateTimeFieldReadOnlyTemplate {...cleanUpProps(props)} />
);

export const DateTimeFieldReadOnly = {
  render: DateTimeFieldReadOnlyStory,

  parameters: {
    docs: {
      source: {
        code: DateTimeFieldReadOnlyRaw,
      },
    },
  },

  name: 'DateTimeField read only example',
};

//</editor-fold>

//<editor-fold desc="DateTimeField status example">
const DateTimeFieldStatusStory: StoryFn<typeof Field> = (props: DateTimeFieldProps) => (
  <DateTimeFieldStatusTemplate {...cleanUpProps(props)} />
);

export const DateTimeFieldStatus = {
  render: DateTimeFieldStatusStory,

  parameters: {
    docs: {
      source: {
        code: DateTimeFieldStatusRaw,
      },
    },
  },

  name: 'DateTimeField status example',
};
