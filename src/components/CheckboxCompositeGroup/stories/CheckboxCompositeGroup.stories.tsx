import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import { CheckboxCompositeGroup, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';
import type { CheckboxCompositeGroupProps } from '@admiral-ds/react-ui';

import { CheckboxCompositeGroupExampleTemplate } from './CheckboxCompositeGroupExample.template';

// Imports of text sources
import CheckboxCompositeGroupExampleRaw from './CheckboxCompositeGroupExample.template?raw';

export default {
  title: 'Admiral-2.1/CheckboxCompositeGroup',
  decorators: undefined,
  component: CheckboxCompositeGroup,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A21015',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: ['m', 's'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
  },
} as Meta<typeof CheckboxCompositeGroup>;

//<editor-fold desc="CheckboxCompositeGroup. Пример">
const CheckboxCompositeGroupExampleStory: StoryFn = (props: CheckboxCompositeGroupProps) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <CheckboxCompositeGroupExampleTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const CheckboxCompositeGroupExample = {
  render: CheckboxCompositeGroupExampleStory,

  parameters: {
    docs: {
      source: {
        code: CheckboxCompositeGroupExampleRaw,
      },
    },
  },

  name: 'CheckboxCompositeGroup. Пример',
};
