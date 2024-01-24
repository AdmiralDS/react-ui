import * as React from 'react';
import styled from 'styled-components';
import type { Meta, StoryFn } from '@storybook/react';
import { BadgeDot } from '@admiral-ds/react-ui';

import { BadgeDotPlaygroundTemplate } from './BadgeDotPlayground.template';
import { BadgeDotVariantsTemplate } from './BadgeDotVariants.template';

// Imports of text sources
import BadgeDotPlaygroundRaw from './BadgeDotPlayground.template?raw';
import BadgeDotVariantsRaw from './BadgeDotVariants.template?raw';

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
  title: 'Admiral-2.1/BadgeDot',
  decorators: undefined,
  component: BadgeDot,
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
      options: ['l', 'm', 's', 'xs'],
      control: { type: 'radio' },
    },
    appearance: {
      options: ['neutral', 'info', 'error', 'success', 'warning', 'attention'],
      control: { type: 'select' },
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
} as Meta<typeof BadgeDot>;

//<editor-fold desc="Playground">
const PlaygroundStory: StoryFn<typeof BadgeDot> = (props) => <BadgeDotPlaygroundTemplate {...props} />;

export const PlaygroundExample = {
  render: PlaygroundStory,

  parameters: {
    docs: {
      source: {
        code: BadgeDotPlaygroundRaw,
      },
    },
  },

  name: 'Playground',
};

//</editor-fold>

//<editor-fold desc="Варианты использования">
const VariantsStory: StoryFn<typeof BadgeDot> = () => <BadgeDotVariantsTemplate />;

export const VariantsExample = {
  render: VariantsStory,

  parameters: {
    docs: {
      source: {
        code: BadgeDotVariantsRaw,
      },
    },
  },

  name: 'Badge. Варианты использования.',
};

//</editor-fold>
