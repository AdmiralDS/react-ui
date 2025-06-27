import * as React from 'react';
import styled from 'styled-components';
import type { Meta, StoryFn } from '@storybook/react';
import { Badge } from '@admiral-ds/react-ui';

import { BadgePlaygroundTemplate } from './BadgePlayground.template';
import { BadgeVariantsTemplate } from './BadgeVariants.template';
import { BadgeAccessabilityTemplate } from './BadgeAccessability.template';

// Imports of text sources
import BadgePlaygroundRaw from './BadgePlayground.template?raw';
import BadgeVariantsRaw from './BadgeVariants.template?raw';
import BadgeAccessabilityRaw from './BadgeAccessability.template?raw';

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
  title: 'Admiral-2.1/Badge',
  decorators: undefined,
  component: Badge,
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
    appearance: {
      options: [
        'light',
        'info',
        'warning',
        'success',
        'error',
        'grey',
        'dark',
        'lightInactive',
        'lightDisable',
        'white',
        'whiteInactive',
        'whiteDisable',
        'whiteBlue',
      ],
      control: { type: 'select' },
    },
    theme: {
      control: false,
    },
    ref: {
      control: false,
    },
  },
} as Meta<typeof Badge>;

//<editor-fold desc="Playground">
const PlaygroundStory: StoryFn<typeof Badge> = (props) => <BadgePlaygroundTemplate {...props} />;

export const PlaygroundExample = {
  render: PlaygroundStory,

  parameters: {
    docs: {
      source: {
        code: BadgePlaygroundRaw,
      },
    },
  },

  name: 'Playground',
};

//</editor-fold>

//<editor-fold desc="Варианты использования">
const VariantsStory: StoryFn<typeof Badge> = () => <BadgeVariantsTemplate />;

export const VariantsExample = {
  render: VariantsStory,

  parameters: {
    docs: {
      source: {
        code: BadgeVariantsRaw,
      },
    },
  },

  name: 'Badge. Варианты использования.',
};

//</editor-fold>

//<editor-fold desc="Accessability">
const AccessabilityStory: StoryFn<typeof Badge> = () => <BadgeAccessabilityTemplate />;

export const AccessabilityExample = {
  render: AccessabilityStory,

  parameters: {
    docs: {
      source: {
        code: BadgeAccessabilityRaw,
      },
    },
  },

  name: 'Badge. Accessability.',
};
