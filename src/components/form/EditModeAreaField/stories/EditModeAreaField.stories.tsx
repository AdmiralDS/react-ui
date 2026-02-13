import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';

import { EditModeAreaField, INPUT_STATUS_VALUES, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { EditModeAreaFieldPlaygroundTemplate } from './EditModeAreaFieldPlayground.template';
import { EditModeAreaFieldErrorStateTemplate } from './EditModeAreaFieldErrorState.template';
import { EditModeAreaFieldExtraTextTemplate } from './EditModeAreaFieldExtraText.template';
import { DataAttributesDescription } from '#src/components/form/common';

// Imports of text sources
import EditModeAreaFieldPlaygroundRaw from './EditModeAreaFieldPlayground.template?raw';
import EditModeAreaFieldErrorStateRaw from './EditModeAreaFieldErrorState.template?raw';
import EditModeAreaFieldExtraTextRaw from './EditModeAreaFieldExtraText.template?raw';

export default {
  title: 'Admiral-2.1/Form Field/EditModeAreaField',
  component: EditModeAreaField,
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
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=38%3A10602',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=38%3A10901',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: ['xxl', 'xl', 'm', 's'],
      control: { type: 'radio' },
    },
    status: {
      control: { type: 'radio' },
      options: INPUT_STATUS_VALUES,
    },
    bold: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    readOnly: {
      control: { type: 'boolean' },
    },
    disableCopying: {
      control: { type: 'boolean' },
    },
    displayInline: {
      control: { type: 'boolean' },
    },
    displayCharacterCounter: {
      control: { type: 'boolean' },
    },
    showTooltip: {
      control: { type: 'boolean' },
    },
    skeleton: {
      control: { type: 'boolean' },
    },
    multilineView: {
      control: { type: 'boolean' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    onChange: {
      action: 'onChange',
    },
    containerRef: {
      control: false,
    },
    handleInput: {
      control: false,
    },
    containerCssMixin: {
      control: false,
    },
    extraText: {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
    },
    icons: {
      control: false,
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
  },
} as Meta<typeof EditModeAreaField>;

//<editor-fold desc="Playground">
const EditModeAreaFieldPlaygroundStory: StoryFn<typeof EditModeAreaField> = (props) => (
  <EditModeAreaFieldPlaygroundTemplate {...props} />
);

export const EditModeAreaFieldPlayground = {
  render: EditModeAreaFieldPlaygroundStory,

  parameters: {
    docs: {
      source: {
        code: EditModeAreaFieldPlaygroundRaw,
      },
    },
  },

  name: 'EditModeAreaField. Playground',
};

//</editor-fold>

//<editor-fold desc="Пример с поясняющим текстом">
const EditModeAreaFieldExtraTextStory: StoryFn<typeof EditModeAreaField> = (props) => (
  <EditModeAreaFieldExtraTextTemplate {...props} />
);

export const EditModeAreaFieldExtraText = {
  render: EditModeAreaFieldExtraTextStory,
  name: 'Пример с поясняющим текстом',

  parameters: {
    docs: {
      source: {
        code: EditModeAreaFieldExtraTextRaw,
      },
    },
  },
};

//</editor-fold>

//<editor-fold desc="Пример с состоянием ошибки">
const EditModeAreaFieldErrorStateStory: StoryFn<typeof EditModeAreaField> = (props) => (
  <EditModeAreaFieldErrorStateTemplate {...props} />
);

export const EditModeAreaFieldErrorState = {
  render: EditModeAreaFieldErrorStateStory,

  parameters: {
    docs: {
      source: {
        code: EditModeAreaFieldErrorStateRaw,
      },
    },
  },

  name: 'Пример с состоянием ошибки',
};

//</editor-fold>
