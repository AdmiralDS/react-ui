import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import { Flex } from '@admiral-ds/react-ui';

import { FlexPlaygroundTemplate } from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import FlexPlaygroundRaw from '!!raw-loader!./Templates/FlexPlayground';

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
  decorators: [withDesign],
  argTypes: {
    rowGap: {
      control: { type: 'number' },
    },
    columnGap: {
      control: { type: 'number' },
    },
  },
} as ComponentMeta<typeof Flex.Container>;

//<editor-fold desc="Пример работы с Flex">
const FlexPlaygroundStory: ComponentStory<typeof Flex.Container> = (props) => (
  <FlexPlaygroundTemplate {...cleanUpProps(props)} />
);

export const FlexPlayground = FlexPlaygroundStory.bind({});
FlexPlayground.parameters = {
  docs: {
    source: {
      code: FlexPlaygroundRaw,
    },
  },
};
FlexPlayground.storyName = 'Пример работы с Flex';
//</editor-fold>
