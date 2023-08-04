import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';

import type { FlexContainerProps } from '@admiral-ds/react-ui';
import { Flex } from '@admiral-ds/react-ui';

import { FlexPlaygroundTemplate } from './FlexPlayground.template';

// Imports of text sources
import FlexPlaygroundRaw from './FlexPlayground.template?raw';

export default {
  title: 'Admiral-2.1/Flex.Container',
  component: Flex.Container,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?type=design&node-id=538-68923&t=Ybv78CTY3A6lMQZU-0',
      },
    ],
  },
  decorators: undefined,
  argTypes: {
    rowGap: {
      control: { type: 'number' },
    },
    columnGap: {
      control: { type: 'number' },
    },
  },
} as Meta<typeof Flex.Container>;

//<editor-fold desc="Пример работы с Flex">
const FlexPlaygroundStory: StoryFn<typeof Flex.Container> = (props: FlexContainerProps) => (
  <FlexPlaygroundTemplate {...props} />
);

export const FlexPlayground = {
  render: FlexPlaygroundStory,

  parameters: {
    docs: {
      source: {
        code: FlexPlaygroundRaw,
      },
    },
  },

  name: 'Пример работы с Flex',
};
