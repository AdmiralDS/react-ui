import * as React from 'react';
import styled from 'styled-components';
import type { Meta, StoryFn } from '@storybook/react';
import { BadgeDot } from '@admiral-ds/react-ui';

import { BadgeDotPlaygroundTemplate } from './BadgeDotPlayground.template';
import { BadgeDotVariantsTemplate } from './BadgeDotVariants.template';

// Imports of text sources
import BadgeDotPlaygroundRaw from './BadgeDotPlayground.template?raw';
import BadgeDotVariantsRaw from './BadgeDotVariants.template?raw';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    BadgeDot — вспомогательный компонент применяемый в сочетании с другими компонентами для обозначения статуса. Имеет
    шесть разных цветов и четыре размера.
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
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?type=design&node-id=37-18426&mode=design&t=hEGLAaOLUryZYP7B-4',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?type=design&node-id=37-18581&mode=design&t=hEGLAaOLUryZYP7B-4',
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
