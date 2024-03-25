import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import styled from 'styled-components';

import { Tooltip, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { TooltipBaseTemplate } from './TooltipBase.template';
import { TooltipDelayTemplate } from './TooltipDelay.template';
import { TooltipRefTemplate } from './TooltipRef.template';
import { TooltipMenuButtonTemplate } from './TooltipMenuButton.template';
import { TooltipCustomTemplate } from './TooltipCustom.template';

// Imports of text sources
import TooltipBaseRaw from './TooltipBase.template?raw';
import TooltipDelayRaw from './TooltipDelay.template?raw';
import TooltipRefRaw from './TooltipRef.template?raw';
import TooltipMenuButtonRaw from './TooltipMenuButton.template?raw';
import TooltipCustomRaw from './TooltipCustom.template?raw';

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
    Существует в двух размерах: S 20px и M 24px по высоте. Рекомендуется максимальная ширина 488px. При большем объеме
    используйте компонент Hint.
    <Separator />
    Приоритетным является расположение тултипа снизу объекта. Далее по приоритетности идут расположения сверху, слева и
    справа.
    <Separator />
    Задать для компонента тултип можно двумя способами:
    <Separator />
    1) Использовать компонент Tooltip. Данный компонент является полностью контролируемым пользователем, то есть
    пользователь определяет в какой момент и при каких событиях отображать тултип, отображать его с задержкой в
    появлении или нет. Кроме того, компоненту Tooltip требуются обязательные параметры: targetElement - для указания
    элемента, относительно которого тултип будет позиционироваться, renderContent - рендер-функция для рендеринга
    содержимого тултипа.
    <Separator />
    2) Использовать компонент высшего порядка TooltipHoc. TooltipHoc стоит использовать в том случае, если пользователю
    нужен неконтролируемый тултип (тултип с внутренним state и механизмом отображения/скрытия). Подробное описание и
    примеры использования данного компонента можно найти в соответствующем разделе документации.
    <Separator />
    Далее приведены примеры использования компонента Tooltip.
  </Desc>
);

export default {
  title: 'Admiral-2.1/Tooltip',
  decorators: undefined,
  component: Tooltip,
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
const TooltipBaseStory: StoryFn<typeof Tooltip> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <TooltipBaseTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

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
const TooltipMenuButtonStory: StoryFn<typeof Tooltip> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <TooltipMenuButtonTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

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
const TooltipDelayStory: StoryFn<typeof Tooltip> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <TooltipDelayTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

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
const TooltipRefStory: StoryFn<typeof Tooltip> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <TooltipRefTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

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

//<editor-fold desc="Пример с получением ref тултипа">
const TooltipCustomStory: StoryFn<typeof Tooltip> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <TooltipCustomTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const TooltipCustomExample = {
  render: TooltipCustomStory,

  parameters: {
    docs: {
      source: {
        code: TooltipCustomRaw,
      },
    },
  },

  name: 'Tooltip. Пример с кастомным наполнением тултипа.',
};

//</editor-fold>
