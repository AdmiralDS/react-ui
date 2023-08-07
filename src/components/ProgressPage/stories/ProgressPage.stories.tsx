import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import styled from 'styled-components';

import { ProgressPage } from '@admiral-ds/react-ui';

import { ProgressPageBaseTemplate } from './ProgressPageBase.template';
import { ProgressPageAnimationTemplate } from './ProgressPageAnimation.template';

// Imports of text sources
import ProgressPageBaseRaw from './ProgressPageBase.template?raw';
import ProgressPageAnimationRaw from './ProgressPageAnimation.template?raw';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Компонент для отображения прогресса загрузки страницы, либо контента на странице. Компонент может изменяться по
    ширине, минимальный размер 140px. Компонент имеет два сценария применения: Первый, когда мы, например, загружаем
    тяжелую страницу (или контент на ней) и показываем прогресс ее загрузки, при этом блокируется содержимое страницы и
    прогресс отображается оверлеем. Второй сценарий, более редкий, когда компонент используется как часть интерфейсов на
    странице и отображает прогресс какого-либо процесса, например опроса.
  </Desc>
);

export default {
  title: 'Admiral-2.1/ProgressPage',
  decorators: undefined,
  component: ProgressPage,
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
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A25008',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A25036',
      },
    ],
  },
  args: {
    appearance: 'primary',
  },
  argTypes: {
    appearance: {
      options: ['primary', 'error'],
      control: { type: 'radio' },
    },
    label: {
      control: { type: 'text' },
    },
    percent: {
      control: { type: 'number' },
    },
  },
} as Meta<typeof ProgressPage>;

//<editor-fold desc="Базовый пример">
const ProgressPageBaseStory: StoryFn<typeof ProgressPage> = (props) => <ProgressPageBaseTemplate {...props} />;

export const ProgressPageBase = {
  render: ProgressPageBaseStory,

  parameters: {
    docs: {
      source: {
        code: ProgressPageBaseRaw,
      },
    },
  },

  name: 'Базовый пример',
};

//</editor-fold>

//<editor-fold desc="Прогресс бар с анимацией">
const ProgressPageAnimationStory: StoryFn<typeof ProgressPage> = (props) => (
  <ProgressPageAnimationTemplate {...props} />
);

export const ProgressPageAnimation = {
  render: ProgressPageAnimationStory,

  parameters: {
    docs: {
      source: {
        code: ProgressPageAnimationRaw,
      },
    },
  },

  name: 'Прогресс бар с анимацией',
};
