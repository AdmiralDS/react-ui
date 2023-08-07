import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import styled from 'styled-components';
import { ProgressStepper } from '@admiral-ds/react-ui';

import { ProgressStepperPlaygroundTemplate } from './ProgressStepperPlayground.template';
import { ProgressStepperVariantsTemplate } from './ProgressStepperVariants.template';

// Imports of text sources
import ProgressStepperPlaygroundRaw from './ProgressStepperPlayground.template?raw';
import ProgressStepperVariantsRaw from './ProgressStepperVariants.template?raw';

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
    <Separator />
    Названия шагов должны сопровождать индикатор прогресса, чтобы указать, что пользователь будет выполнять на каждом из
    этапов. Рекомендуется использовать короткие и емкие названия шагов для явного отображения сути.
    <Separator />
    Линия условно делится на количество частей соответствующее количеству шагов. Может изменяться по ширине, минимальная
    ширина 388px.
    <Separator />
    На мобильных устройствах применяется компонент Stepper Progress Mobile. Использование строки названия следующего
    шага — опционально.
  </Desc>
);

export default {
  title: 'Admiral-2.1/ProgressStepper',
  decorators: undefined,
  component: ProgressStepper,
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
  argTypes: {
    mobile: {
      control: { type: 'boolean' },
    },
    displayNextStepName: {
      control: { type: 'boolean' },
    },
    activeStep: {
      control: { type: 'number' },
    },
    steps: {
      control: false,
    },
    locale: {
      control: false,
    },
  },
} as Meta<typeof ProgressStepper>;

//<editor-fold desc="Playground">
const PlaygroundStory: StoryFn<typeof ProgressStepper> = (props) => <ProgressStepperPlaygroundTemplate {...props} />;

export const PlaygroundExample = {
  render: PlaygroundStory,

  parameters: {
    docs: {
      source: {
        code: ProgressStepperPlaygroundRaw,
      },
    },
  },

  name: 'StepperProgress. Playground.',
};

//</editor-fold>

//<editor-fold desc="Variants">
const VariantsStory: StoryFn<typeof ProgressStepper> = (props) => <ProgressStepperVariantsTemplate {...props} />;

export const VariantsExample = {
  render: VariantsStory,

  parameters: {
    docs: {
      source: {
        code: ProgressStepperVariantsRaw,
      },
    },
  },

  name: 'StepperProgress. Примеры использования.',
};

//</editor-fold>
