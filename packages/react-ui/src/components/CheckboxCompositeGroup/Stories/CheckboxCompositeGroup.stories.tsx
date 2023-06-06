import * as React from 'react';
import type { ComponentMeta, Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import { CheckboxCompositeGroup, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';
import type { CheckboxCompositeGroupProps } from '@admiral-ds/react-ui';

import { CheckboxCompositeGroupExampleTemplate } from './Templates';

// Imports of text sources
import CheckboxCompositeGroupExampleRaw from '!!raw-loader!./Templates/CheckboxCompositeGroupExample';

export default {
  title: 'Admiral-2.1/CheckboxCompositeGroup',
  decorators: [withDesign],
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
} as ComponentMeta<typeof CheckboxCompositeGroup>;

//<editor-fold desc="CheckboxCompositeGroup. Пример">
const CheckboxCompositeGroupExampleStory: Story = (args: CheckboxCompositeGroupProps) => (
  <CheckboxCompositeGroupExampleTemplate {...args} />
);

export const CheckboxCompositeGroupExample = CheckboxCompositeGroupExampleStory.bind({});
CheckboxCompositeGroupExample.parameters = {
  docs: {
    source: {
      code: CheckboxCompositeGroupExampleRaw,
    },
  },
};
CheckboxCompositeGroupExample.storyName = 'CheckboxCompositeGroup. Пример';
CheckboxCompositeGroupExample.args = {};
//</editor-fold>
