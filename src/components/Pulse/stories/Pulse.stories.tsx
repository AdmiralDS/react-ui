import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import styled from 'styled-components';
import { Pulse } from '@admiral-ds/react-ui';

import { PulsePlaygroundTemplate } from './PulsePlayground.template';

// Imports of text sources
import PulsePlaygroundRaw from './PulsePlayground.template?raw';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Separator = styled.div`
  height: 20px;
  width: 100%;
`;

const Description = () => (
  <Desc>
    Компонент Progress Stepper — визуальное отображение пользовательского прогресса в виде заполняющейся линии.
    Уведомляет пользователя о текущем положении на пути при выполнении конкретной задачи.
  </Desc>
);

export default {
  title: 'Admiral-2.1/Pulse',
  decorators: undefined,
  component: Pulse,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    componentSubtitle: <Description />,
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A16832',
    },
  },
  argTypes: {},
} as Meta<typeof Pulse>;

//<editor-fold desc="Playground">
const PlaygroundStory: StoryFn<typeof Pulse> = (props) => <PulsePlaygroundTemplate />;

export const PlaygroundExample = {
  render: PlaygroundStory,

  parameters: {
    docs: {
      source: {
        code: PulsePlaygroundRaw,
      },
    },
  },

  name: 'Pulse. Playground.',
};

//</editor-fold>
