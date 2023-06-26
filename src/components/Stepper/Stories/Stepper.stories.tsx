import * as React from 'react';
import styled from 'styled-components';
import type { Meta, StoryFn } from '@storybook/react';
import { Stepper } from '@admiral-ds/react-ui';

import {
  StepperPlaygroundTemplate,
  StepperStepKindsTemplate,
  StepperAddaptiveTemplate,
  StepperClickableLinksTemplate,
  StepperCustomStepContentTemplate,
  StepperClickPropTemplate,
  StepperPreviousStepsTemplate,
  StepperMobileTemplate,
} from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import PlaygroundRaw from './Templates/StepperPlayground?raw';
import StepKindsRaw from './Templates/StepperStepKinds?raw';
import AdaptiveRaw from './Templates/StepperAdaptive?raw';
import ClickableLinksRaw from './Templates/StepperClickableLinks?raw';
import CustomStepContentRaw from './Templates/StepperCustomStepContent?raw';
import ClickPropRaw from './Templates/StepperClickProp?raw';
import PreviousStepsRaw from './Templates/StepperPreviousSteps?raw';
import MobileRaw from './Templates/StepperMobile?raw';

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
const PlaygroundStory: StoryFn<typeof Stepper> = ({ activeStep, ...props }) => (
  <StepperPlaygroundTemplate activeStep={activeStep} {...cleanUpProps(props)} />
);

export const Playground = {
  render: PlaygroundStory,

  parameters: {
    docs: {
      source: {
        code: PlaygroundRaw,
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
        code: StepKindsRaw,
      },
      description: {
        story: `Для обозначения активного шага в компонент Stepper нужно передать параметр activeStep, равный индексу активного шага.
        Либо для самого Step можно задать параметр active (перезаписывает собой параметр activeStep). \n\n Чтобы обозначить завершенные 
        (пройденные) шаги, для соответствующих шагов необходимо задать параметр completed. Также компонент Step имеет параметры disabled, 
        error, warning.\n\nПройденные шаги могут быть кликабельными, для этого у них 
        должен быть задан колбек onClick или параметр link.`,
      },
    },
  },

  name: 'Stepper. Виды шагов.',
};

//</editor-fold>

//<editor-fold desc="Адаптив">
const AdaptiveStory: StoryFn<typeof Stepper> = () => <StepperAddaptiveTemplate />;

export const AdaptiveExample = {
  render: AdaptiveStory,

  parameters: {
    docs: {
      source: {
        code: AdaptiveRaw,
      },
      description: {
        story: `С помощью параметра stepWidth можно задать ширину шага. Если данный параметр не задан, 
        то ширина шага будет рассчитываться следующим образом:\n\n- при горизонтальной ориентации все 
        шаги будут в равной степени делить между собой свободное пространство;\n\n- при вертикальной 
        ориентации каждый шаг займет 100% ширины степпера.\n\nТаким образом шаги будут пропорционально 
        увеличиваться/уменьшаться при изменении ширины степпера.`,
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
        code: CustomStepContentRaw,
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
        code: ClickableLinksRaw,
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
        code: ClickPropRaw,
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
        code: PreviousStepsRaw,
      },
      description: {
        story: `В случаях необходимости и когда это позволяет логика шагов, например, результаты предыдущих 
        шагов не влияют на последующие, допускается возможность возврата к предыдущим шагам.`,
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
        code: MobileRaw,
      },
      description: {
        story: `В мобильной версии применяется только горизонтальный вариант компонента
        с автоматическим скроллом по горизонтали по мере прохождения шагов.\n\nКомпонент можно скроллить пальцем,
        если нужно посмотреть пройденные или будущие шаги.\n\nПри переходе на следующий шаг, который становится
        текущим, он выравнивается относительно левого края на расстоянии 16px (боковой падинг). Шаг перед текущим
        уходит за границы экрана.\n\nДля перевода компонента в мобильный вид используйте параметр mobile.`,
      },
    },
  },

  name: 'Stepper. Мобильная версия.',
};
