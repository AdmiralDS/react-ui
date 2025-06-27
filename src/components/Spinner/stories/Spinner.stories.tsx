import * as React from 'react';
import styled from 'styled-components';
import type { Meta, StoryFn } from '@storybook/react';
import { Spinner } from '@admiral-ds/react-ui';

import { SpinnerBaseTemplate } from './SpinnerBase.template';
import { SpinnerLightTemplate } from './SpinnerLight.template';
import { SpinnerDarkTemplate } from './SpinnerDark.template';
import { SpinnerOthersTemplate } from './SpinnerOthers.template';

// Imports of text sources
import SpinnerBaseRaw from './SpinnerBase.template?raw';
import SpinnerLightRaw from './SpinnerLight.template?raw';
import SpinnerDarkRaw from './SpinnerDark.template?raw';
import SpinnerOthersRaw from './SpinnerOthers.template?raw';

const Separator = styled.div`
  height: 20px;
`;
const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Компонент служит для демонстрации процесса загрузки, ожидания. Существует в четырех размерах - 16, 24, 48 и 64 px.
    Может применяется как самостоятельный элемент, так и в составе других компонентов, например кнопок.
    <Separator />
    Вращение происходит по часовой стрелке, делая полный оборот за 1 секунду.
  </Desc>
);

export default {
  title: 'Admiral-2.1/Spinner',
  decorators: undefined,
  component: Spinner,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    componentSubtitle: <Description />,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A24955',
    },
  },
  argTypes: {
    dimension: {
      options: ['xl', 'l', 'm', 'ms', 's'],
      control: { type: 'radio' },
    },
    inverse: {
      control: { type: 'boolean' },
    },
    svgMixin: {
      control: false,
    },
  },
} as Meta<typeof Spinner>;

//<editor-fold desc="Spinner. Базовый пример.">
const SpinnerBaseStory: StoryFn<typeof Spinner> = (props) => <SpinnerBaseTemplate {...props} />;

export const SpinnerBase = {
  render: SpinnerBaseStory,

  parameters: {
    docs: {
      source: {
        code: SpinnerBaseRaw,
      },
    },
  },

  name: 'Spinner. Базовый пример.',
};

//</editor-fold>

//<editor-fold desc="Spinner. Светлый фон.">
const SpinnerLightStory: StoryFn<typeof Spinner> = (props) => <SpinnerLightTemplate {...props} />;

export const SpinnerLight = {
  render: SpinnerLightStory,

  parameters: {
    docs: {
      source: {
        code: SpinnerLightRaw,
      },
    },
  },

  name: 'Spinner. Светлый фон.',
};

//</editor-fold>

//<editor-fold desc="Spinner. Темный фон.">
const SpinnerDarkStory: StoryFn<typeof Spinner> = (props) => <SpinnerDarkTemplate {...props} />;

export const SpinnerDark = {
  render: SpinnerDarkStory,

  parameters: {
    docs: {
      source: {
        code: SpinnerDarkRaw,
      },
    },
  },

  name: 'Spinner. Темный фон.',
};

//</editor-fold>

//<editor-fold desc="Spinner. В составе других компонентов.">
const SpinnerOthersStory: StoryFn<typeof Spinner> = () => <SpinnerOthersTemplate />;

export const SpinnerOthers = {
  render: SpinnerOthersStory,

  parameters: {
    docs: {
      source: {
        code: SpinnerOthersRaw,
      },
    },
  },

  name: 'Spinner. В составе других компонентов.',
};
