import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { Checkbox, ALL_BORDER_RADIUS_VALUES, ALL_DIMENSIONS_VALUES } from '@admiral-ds/react-ui';

import { CheckboxDemoTemplate } from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import CheckboxDemoRaw from '!!raw-loader!./Templates/CheckboxDemo';

export default {
  title: 'Admiral-2.1/Atoms/Checkbox',
  decorators: undefined,
  component: Checkbox,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A20804',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A21015',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: ALL_DIMENSIONS_VALUES,
      control: { type: 'radio' },
    },
    indeterminate: {
      control: { type: 'boolean' },
    },
    checked: {
      options: [false, true],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    readOnly: {
      control: { type: 'boolean' },
    },
    hovered: {
      control: { type: 'boolean' },
    },
    error: {
      control: { type: 'boolean' },
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
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
  },
} as Meta<typeof Checkbox>;

//<editor-fold desc="Checkbox. Пример">
const CheckboxDemoStory: StoryFn<typeof Checkbox> = (props) => <CheckboxDemoTemplate {...cleanUpProps(props)} />;

export const CheckboxDemo = {
  render: CheckboxDemoStory,

  parameters: {
    docs: {
      source: {
        code: CheckboxDemoRaw,
      },
    },
  },

  name: 'Checkbox. Пример',
};
