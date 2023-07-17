import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import styled from 'styled-components';

import { Tooltip, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { TooltipBaseTemplate, TooltipDelayTemplate, TooltipRefTemplate, TooltipMenuButtonTemplate } from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import TooltipBaseRaw from './Templates/TooltipBase?raw';
import TooltipDelayRaw from './Templates/TooltipDelay?raw';
import TooltipRefRaw from './Templates/TooltipRef?raw';
import TooltipMenuButtonRaw from './Templates/TooltipMenuButton?raw';

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
    появлении или нет. Кроме того, компоненту Tooltip требуются обязательные параметры: targetRef - для указания
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
const TooltipDelayStory: StoryFn<typeof Tooltip> = ({ renderContent, targetRef, ...props }) => (
  <TooltipDelayTemplate renderContent={renderContent} targetRef={targetRef} {...cleanUpProps(props)} />
);

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
const TooltipRefStory: StoryFn<typeof Tooltip> = ({ renderContent, targetRef, ...props }) => (
  <TooltipRefTemplate renderContent={renderContent} targetRef={targetRef} {...cleanUpProps(props)} />
);

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
