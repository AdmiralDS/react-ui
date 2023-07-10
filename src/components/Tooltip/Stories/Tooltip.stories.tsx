import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import styled from 'styled-components';

import { Tooltip, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import type { TooltipHocStory } from './TooltipHOCStory';
import {
  TooltipBaseTemplate,
  TooltipDelayTemplate,
  TooltipRefTemplate,
  TooltipMenuButtonTemplate,
  TooltipHocBaseTemplate,
  TooltipHocClassTemplate,
  TooltipHocFCTemplate,
  TooltipHocRefSetterTemplate,
  TooltipHocRefTemplate,
} from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import TooltipBaseRaw from './Templates/TooltipBase?raw';
import TooltipDelayRaw from './Templates/TooltipDelay?raw';
import TooltipRefRaw from './Templates/TooltipRef?raw';
import TooltipMenuButtonRaw from './Templates/TooltipMenuButton?raw';
import TooltipHocBaseRaw from './Templates/TooltipHocBase?raw';
import TooltipHocClassRaw from './Templates/TooltipHocClass?raw';
import TooltipHocFCRaw from './Templates/TooltipHocFC?raw';
import TooltipHocRefSetterRaw from './Templates/TooltipHocRefSetter?raw';
import TooltipHocRefRaw from './Templates/TooltipHocRef?raw';

const Separator = styled.div<{ height?: number }>`
  height: ${({ height }) => (height ? height : 20)}px;
`;

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Тултип — компонент, отвечающий за подсказки, детализацию информации или пояснения. Появляется при наведении на
    элемент, к которому он привязан, сразу, либо с задержкой в 1.5 секунды (опционально). Позиционируется по центру
    объекта, сверху, снизу, слева или справа с отступом 8px.
    <Separator />
    Рекомендуется максимальная ширина 488px. При большем объеме используйте компонент Hint.
    <Separator />
    Приоритетным является расположение тултипа снизу объекта. Далее по приоритетности идут расположения сверху, слева и
    справа.
    <Separator />
    Задать для компонента тултип можно двумя способами:
    <Separator />
    1) Использовать компонент Tooltip. Данный компонент является полностью контролируемым пользователем, то есть
    пользователь определяет в какой момент и при каких событиях отображать тултип, отображать его с задержкой в
    появлении или нет. Кроме того компоненту Tooltip требуются обязательные параметры: targetRef - для указания
    элемента, относительно которого тултип будет позиционироваться, renderContent - рендер-функция для рендеринга
    содержимого тултипа.
    <Separator />
    2) Использовать компонент высшего порядка TooltipHoc. Компонент TooltipHoc в качестве агрумента принимает
    функциональный или классовый компонент и возвращает его вместе с позиционируемым относительно него тултипом.
    TooltipHoc реализует функционал появления тултипа (тултип отображается при mouseenter/focus событии на target
    элементе, скрывается - при moseleave/blur событии на target элементе). Как следствие TooltipHoc стоит использовать в
    том случае, если пользователю нужен неконтролируемый тултип (тултип с внутренним state и механизмом
    отображения/скрытия). Компонент TooltipHoc передает в оборачиваемый компонент атрибут ref, поэтому компонент,
    который будет передан в TooltipHoc должен уметь резолвить ref и назначать его на свой корневой элемент (как правило
    это достигается с помощью React.forwardRef).
    <Separator />
    Далее приведены таблицы с описанием пропсов как для Tooltip, так и для TooltipHoc, а также примеры использования
    данных компонентов.
  </Desc>
);

export default {
  title: 'Admiral-2.1/Tooltip',
  decorators: undefined,
  component: Tooltip,
  // TODO: refactor because subcomponents are deprecated in Storybook7
  // subcomponents: {
  //   TooltipHoc: TooltipHocStory,
  // },
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A31354',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A31490',
      },
    ],
    componentSubtitle: <Description />,
    layout: 'centered',
  },
  argTypes: {
    tooltipPosition: {
      options: ['bottom', 'top', 'left', 'right'],
      control: { type: 'radio' },
    },
    targetRef: {
      control: false,
    },
    targetElement: {
      control: false,
    },
    container: {
      control: false,
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
  },
} as Meta<typeof Tooltip>;

//<editor-fold desc="Базовый пример">
const TooltipBaseStory: StoryFn<typeof Tooltip> = ({ renderContent, targetRef, ...props }) => (
  <TooltipBaseTemplate renderContent={renderContent} targetRef={targetRef} {...cleanUpProps(props)} />
);

export const TooltipBaseExample = {
  render: TooltipBaseStory,

  parameters: {
    docs: {
      source: {
        code: TooltipBaseRaw,
      },
    },
  },

  name: 'Tooltip. Базовый пример.',
};

//</editor-fold>

//<editor-fold desc="Пример с MenuButton">
const TooltipMenuButtonStory: StoryFn<typeof Tooltip> = ({ renderContent, targetRef, ...props }) => (
  <TooltipMenuButtonTemplate renderContent={renderContent} targetRef={targetRef} {...cleanUpProps(props)} />
);

export const TooltipMenuButtonExample = {
  render: TooltipMenuButtonStory,

  parameters: {
    docs: {
      source: {
        code: TooltipMenuButtonRaw,
      },
    },
  },

  name: 'Tooltip. Базовый пример с MenuButton.',
};

//</editor-fold>

//<editor-fold desc="Пример с задержкой в появлении">
const TooltipDelayStory: StoryFn<typeof Tooltip> = () => <TooltipDelayTemplate />;

export const TooltipDelayExample = {
  render: TooltipDelayStory,

  parameters: {
    docs: {
      source: {
        code: TooltipDelayRaw,
      },
    },
  },

  name: 'Tooltip. Пример с задержкой в появлении.',
};

//</editor-fold>

//<editor-fold desc="Пример с получением ref тултипа">
const TooltipRefStory: StoryFn<typeof Tooltip> = () => <TooltipRefTemplate />;

export const TooltipRefExample = {
  render: TooltipRefStory,

  parameters: {
    docs: {
      source: {
        code: TooltipRefRaw,
      },
    },
  },

  name: 'Tooltip. Пример с получением ref тултипа.',
};

//</editor-fold>

//<editor-fold desc="TooltipHoc. Базовый пример.">
const TooltipHocBaseStory: StoryFn<typeof TooltipHocStory> = () => <TooltipHocBaseTemplate />;

export const TooltipHocBaseExample = {
  render: TooltipHocBaseStory,

  parameters: {
    docs: {
      source: {
        code: TooltipHocBaseRaw,
      },
    },
  },

  name: 'TooltipHoc. Базовый пример.',
};

//</editor-fold>

//<editor-fold desc="TooltipHoc. Пример использования с классовым компонентом.">
const TooltipHocClassStory: StoryFn<typeof TooltipHocStory> = () => <TooltipHocClassTemplate />;

export const TooltipHocClassExample = {
  render: TooltipHocClassStory,

  parameters: {
    docs: {
      source: {
        code: TooltipHocClassRaw,
      },
    },
  },

  name: 'TooltipHoc. Пример использования с классовым компонентом.',
};

//</editor-fold>

//<editor-fold desc="TooltipHoc. Пример использования с функциональным компонентом.">
const TooltipHocFCStory: StoryFn<typeof TooltipHocStory> = () => <TooltipHocFCTemplate />;

export const TooltipHocFCExample = {
  render: TooltipHocFCStory,

  parameters: {
    docs: {
      source: {
        code: TooltipHocFCRaw,
      },
    },
  },

  name: 'TooltipHoc. Пример использования с функциональным компонентом.',
};

//</editor-fold>

//<editor-fold desc="TooltipHoc. Утилита refSetter для мерджа рефов.">
const TooltipHocRefSetterStory: StoryFn<typeof TooltipHocStory> = () => <TooltipHocRefSetterTemplate />;

export const TooltipHocRefSetterExample = {
  render: TooltipHocRefSetterStory,

  parameters: {
    docs: {
      source: {
        code: TooltipHocRefSetterRaw,
      },
      description: {
        story: `Если в ваш компонент извне передан параметр ref и у вас есть внутренний
        ref в компоненте, для синхронной работы данных рефов и их мерджа вы можете воспользоваться утилитой refSetter.`,
      },
    },
  },

  name: 'TooltipHoc. Утилита refSetter для мерджа рефов.',
};

//</editor-fold>

//<editor-fold desc="TooltipHoc. Прокидывание ref на результат вызова TooltipHoc.">
const TooltipHocRefStory: StoryFn<typeof TooltipHocStory> = () => <TooltipHocRefTemplate />;

export const TooltipHocRefExample = {
  render: TooltipHocRefStory,

  parameters: {
    docs: {
      source: {
        code: TooltipHocRefRaw,
      },
    },
  },

  name: 'TooltipHoc. Прокидывание ref на результат вызова TooltipHoc.',
};
