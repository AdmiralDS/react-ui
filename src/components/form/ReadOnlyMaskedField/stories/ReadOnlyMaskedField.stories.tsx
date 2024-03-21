import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import { Field, INPUT_DIMENSIONS_VALUES, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { ReadOnlyMaskedFieldTemplate } from './ReadOnlyMaskedField.template';
import { DataAttributesDescription } from '#src/components/form/common';

// Imports of text sources
import ReadOnlyMaskedFieldRaw from './ReadOnlyMaskedField.template?raw';

export default {
  title: 'Admiral-2.1/Form Field/ReadOnlyMaskedField',
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
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=149351%3A119027&t=0hLwy6SkOu2Lc4PO-1',
      },
    ],
  },
  args: {
    dimension: 'm',
  },
  argTypes: {
    dimension: {
      options: INPUT_DIMENSIONS_VALUES,
      control: { type: 'radio' },
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
    skeleton: {
      control: false,
    },
    theme: {
      control: false,
    },
    ref: {
      control: false,
    },
  },
} as Meta<typeof Field>;

//<editor-fold desc="ReadOnly masked field">
const ReadOnlyMaskedFieldStory: StoryFn<typeof Field> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <ReadOnlyMaskedFieldTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const ReadOnlyMaskedField = {
  render: ReadOnlyMaskedFieldStory,

  parameters: {
    docs: {
      source: {
        code: ReadOnlyMaskedFieldRaw,
      },
    },
  },

  name: 'ReadOnly masked field',
};
