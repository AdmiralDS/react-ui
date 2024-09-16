import * as React from 'react';
import styled from 'styled-components';
import type { Meta, StoryFn } from '@storybook/react';
import { List } from '@admiral-ds/react-ui';

import { ListPlaygroundTemplate } from './ListPlayground.template';
import { ListOrderedTemplate } from './ListOrdered.template';

// Imports of text sources
import ListPlaygroundRaw from './ListPlayground.template?raw';
import ListOrderedRaw from './ListOrdered.template?raw';

const Separator = styled.div`
  height: 20px;
  width: 8px;
`;
const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Badge — компонент, который обычно дополняет другие компоненты и показывает количественные значения. Например, в
    компоненте Tabs может показывать количество элементов в закладке. Или показывать количество оповещений в панели
    нотификации.
    <Separator />
    Компонент существует в двух размерах — S 16 и M 20 px по высоте.
  </Desc>
);

export default {
  title: 'Admiral-2.1/List',
  decorators: undefined,
  component: List,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    componentSubtitle: <Description />,
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A18581',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A18684',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: ['m', 's'],
      control: { type: 'radio' },
    },
    theme: {
      control: false,
    },
  },
} as Meta<typeof List>;

//<editor-fold desc="Playground">
const PlaygroundStory: StoryFn<typeof List> = (props) => <ListPlaygroundTemplate {...props} />;

export const PlaygroundExample = {
  render: PlaygroundStory,

  parameters: {
    docs: {
      source: {
        code: ListPlaygroundRaw,
      },
    },
  },

  name: 'Playground',
};

//</editor-fold>

//<editor-fold desc="Order">
const OrderStory: StoryFn<typeof List> = (props) => <ListOrderedTemplate {...props} />;

export const OrderExample = {
  render: OrderStory,

  parameters: {
    docs: {
      source: {
        code: ListOrderedRaw,
      },
    },
  },

  name: 'Order list',
};

//</editor-fold>
