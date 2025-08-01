import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';

import { INPUT_DIMENSIONS_VALUES, INPUT_STATUS_VALUES, Field, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { DateTimeFieldBaseTemplate } from './DateTimeFieldBase.template';
import { DateTimeFieldDisabledTemplate } from './DateTimeFieldDisabled.template';
import { DateTimeFieldReadOnlyTemplate } from './DateTimeFieldReadOnly.template';
import { DateTimeFieldStatusTemplate } from './DateTimeFieldStatus.template';
import { DataAttributesDescription } from '#src/components/form/common';

// Imports of text sources
import DateTimeFieldBaseRaw from './DateTimeFieldBase.template?raw';
import DateTimeFieldDisabledRaw from './DateTimeFieldDisabled.template?raw';
import DateTimeFieldReadOnlyRaw from './DateTimeFieldReadOnly.template?raw';
import DateTimeFieldStatusRaw from './DateTimeFieldStatus.template?raw';

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
    extraText: {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
    },
    additionalLabel: {
      control: { type: 'text' },
    },
    displayInline: {
      control: { type: 'boolean' },
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
  },
} as Meta<typeof Field>;

//<editor-fold desc="DateTimeField example">
const DateTimeFieldBaseStory: StoryFn<typeof Field> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <DateTimeFieldBaseTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

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
const DateTimeFieldDisabledStory: StoryFn<typeof Field> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <DateTimeFieldDisabledTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

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
const DateTimeFieldReadOnlyStory: StoryFn<typeof Field> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <DateTimeFieldReadOnlyTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

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
const DateTimeFieldStatusStory: StoryFn<typeof Field> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <DateTimeFieldStatusTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

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
