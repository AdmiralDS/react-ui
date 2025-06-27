import * as React from 'react';
import styled from 'styled-components';
import type { Meta, StoryFn } from '@storybook/react';
import { Stepper } from '@admiral-ds/react-ui';

import { StepperPlaygroundTemplate } from './StepperPlayground.template';
import { StepperStepKindsTemplate } from './StepperStepKinds.template';
import { StepperAdaptiveTemplate } from './StepperAdaptive.template';
import { StepperClickableLinksTemplate } from './StepperClickableLinks.template';
import { StepperCustomStepContentTemplate } from './StepperCustomStepContent.template';
import { StepperClickPropTemplate } from './StepperClickProp.template';
import { StepperPreviousStepsTemplate } from './StepperPreviousSteps.template';
import { StepperMobileTemplate } from './StepperMobile.template';

// Imports of text sources
import StepperPlaygroundRaw from './StepperPlayground.template?raw';
import StepperStepKindsRaw from './StepperStepKinds.template?raw';
import StepperAdaptiveRaw from './StepperAdaptive.template?raw';
import StepperClickableLinksRaw from './StepperClickableLinks.template?raw';
import StepperCustomStepContentRaw from './StepperCustomStepContent.template?raw';
import StepperClickPropRaw from './StepperClickProp.template?raw';
import StepperPreviousStepsRaw from './StepperPreviousSteps.template?raw';
import StepperMobileRaw from './StepperMobile.template?raw';

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
    Компонент Stepper — визуальное отображение пользовательского прогресса через набор шагов. Уведомляет пользователя о
    текущем положении на пути при выполнении конкретной задачи.
    <Separator />
    Названия шагов должны сопровождать индикатор прогресса, чтобы указать, что пользователь будет выполнять на каждом из
    этапов. Рекомендуется использовать короткие и емкие названия шагов для явного отображения сути.
    <Separator />
    Компонент представлен в двух вариантах — горизонтальном и вертикальном.
  </Desc>
);

export default {
  title: 'Admiral-2.1/Stepper',
  decorators: undefined,
  component: Stepper,
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
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A16671',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A16789',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A16767',
      },
    ],
  },
  argTypes: {
    orientation: {
      options: ['horizontal', 'vertical'],
      control: { type: 'radio' },
    },
    lineClamp: {
      options: [1, 2, 3],
      control: { type: 'radio' },
    },
    hideLastStepLine: {
      control: { type: 'boolean' },
    },
    mobile: {
      control: { type: 'boolean' },
    },
    stepWidth: {
      control: false,
    },
  },
} as Meta<typeof Stepper>;

//<editor-fold desc="Playground">
const PlaygroundStory: StoryFn<typeof Stepper> = (props) => <StepperPlaygroundTemplate {...props} />;

export const Playground = {
  render: PlaygroundStory,

  parameters: {
    docs: {
      source: {
        code: StepperPlaygroundRaw,
      },
    },
  },

  name: 'Stepper. Playground.',
};

//</editor-fold>

//<editor-fold desc="Виды шагов">
const StepKindsStory: StoryFn<typeof Stepper> = () => <StepperStepKindsTemplate />;

export const StepKindsExample = {
  render: StepKindsStory,

  parameters: {
    docs: {
      source: {
        code: StepperStepKindsRaw,
      },
    },
  },

  name: 'Stepper. Виды шагов.',
};

//</editor-fold>

//<editor-fold desc="Адаптив">
const AdaptiveStory: StoryFn<typeof Stepper> = () => <StepperAdaptiveTemplate />;

export const AdaptiveExample = {
  render: AdaptiveStory,

  parameters: {
    docs: {
      source: {
        code: StepperAdaptiveRaw,
      },
    },
  },

  name: 'Stepper. Адаптив.',
};

//</editor-fold>

//<editor-fold desc="Кастомный StepContent">
const CustomStepContentStory: StoryFn<typeof Stepper> = () => <StepperCustomStepContentTemplate />;

export const CustomStepContentExample = {
  render: CustomStepContentStory,

  parameters: {
    docs: {
      source: {
        code: StepperCustomStepContentRaw,
      },
    },
  },

  name: 'Stepper. Кастомный StepContent.',
};

//</editor-fold>

//<editor-fold desc="Шаги в виде ссылок">
const ClickableLinksStory: StoryFn<typeof Stepper> = () => <StepperClickableLinksTemplate />;

export const ClickableLinksExample = {
  render: ClickableLinksStory,

  parameters: {
    docs: {
      source: {
        code: StepperClickableLinksRaw,
      },
    },
  },

  name: 'Stepper. Шаги в виде ссылок.',
};

//</editor-fold>

//<editor-fold desc="Кликабельные шаги">
const ClickPropStory: StoryFn<typeof Stepper> = () => <StepperClickPropTemplate />;

export const ClickPropExample = {
  render: ClickPropStory,

  parameters: {
    docs: {
      source: {
        code: StepperClickPropRaw,
      },
    },
  },

  name: 'Stepper. Кликабельные шаги.',
};

//</editor-fold>

//<editor-fold desc="Возврат к предыдущим шагам">
const PreviousStepsStory: StoryFn<typeof Stepper> = () => <StepperPreviousStepsTemplate />;

export const PreviousStepsExample = {
  render: PreviousStepsStory,

  parameters: {
    docs: {
      source: {
        code: StepperPreviousStepsRaw,
      },
    },
  },

  name: 'Stepper. Возврат к предыдущим шагам.',
};

//</editor-fold>

//<editor-fold desc="Mobile">
const MobileStory: StoryFn<typeof Stepper> = () => <StepperMobileTemplate />;

export const MobileExample = {
  render: MobileStory,

  parameters: {
    docs: {
      source: {
        code: StepperMobileRaw,
      },
    },
  },

  name: 'Stepper. Мобильная версия.',
};
