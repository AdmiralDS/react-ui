import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import styled from 'styled-components';

import { Toggle } from '@admiral-ds/react-ui';

import { ToggleHintTemplate } from './ToggleHint.template';
import { ToggleDimensionTemplate } from './ToggleDimension.template';
import { ToggleMobileTemplate } from './ToggleMobile.template';
import { TogglePlaygroundTemplate } from './TogglePlayground.template';
import { ToggleLabelTemplate } from './ToggleLabel.template';
import { ToggleStateTemplate } from './ToggleState.template';

// Imports of text sources
import ToggleHintRaw from './ToggleHint.template?raw';
import ToggleDimensionRaw from './ToggleDimension.template?raw';
import ToggleMobileRaw from './ToggleMobile.template?raw';
import TogglePlaygroundRaw from './TogglePlayground.template?raw';
import ToggleLabelRaw from './ToggleLabel.template?raw';
import ToggleStateRaw from './ToggleState.template?raw';

const Separator = styled.div`
  height: 20px;
  width: 100%;
`;

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Переключатель используется в ситуации, когда нужно переключиться между двумя равнозначными состояними интерфейса.
    <Separator />
    Размер вариации компонента с текстом слева изменяется вручную, может применяться как адаптив на мобильных
    устройствах.
  </Desc>
);

export default {
  title: 'Admiral-2.1/Toggle',
  decorators: undefined,
  component: Toggle,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A21193',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A21376',
      },
    ],
    componentSubtitle: <Description />,
    actions: {
      argTypesRegex: '^on[A-Z].*',
    },
    layout: 'centered',
  },
  argTypes: {
    dimension: {
      options: ['m', 's'],
      control: { type: 'radio' },
    },
    labelPosition: {
      options: ['left', 'right'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    readOnly: {
      control: { type: 'boolean' },
    },
    checked: {
      control: { type: 'boolean' },
    },
    width: {
      control: { type: 'text' },
    },
    extraText: {
      control: { type: 'text' },
    },
  },
} as Meta<typeof Toggle>;

//<editor-fold desc="Toggle. Playground">
const TogglePlaygroundStory: StoryFn<typeof Toggle> = (props) => <TogglePlaygroundTemplate {...props} />;

export const TogglePlayground = {
  render: TogglePlaygroundStory,

  parameters: {
    docs: {
      source: {
        code: TogglePlaygroundRaw,
      },
    },
  },

  name: 'Toggle. Playground',
};

//</editor-fold>

//<editor-fold desc="Toggle. Размеры">
const ToggleDimensionStory: StoryFn<typeof Toggle> = () => <ToggleDimensionTemplate />;

export const ToggleDimension = {
  render: ToggleDimensionStory,

  parameters: {
    docs: {
      source: {
        code: ToggleDimensionRaw,
      },
    },
  },

  name: 'Toggle. Размеры',
};

//</editor-fold>

//<editor-fold desc="Toggle. Состояния">
const ToggleStateStory: StoryFn<typeof Toggle> = () => <ToggleStateTemplate />;

export const ToggleState = {
  render: ToggleStateStory,

  parameters: {
    docs: {
      source: {
        code: ToggleStateRaw,
      },
    },
  },

  name: 'Toggle. Состояния',
};

//</editor-fold>

//<editor-fold desc="Toggle. Расположение подписи">
const ToggleLabelStory: StoryFn<typeof Toggle> = () => <ToggleLabelTemplate />;

export const ToggleLabel = {
  render: ToggleLabelStory,
  name: 'Toggle. Расположение подписи',

  parameters: {
    docs: {
      source: {
        code: ToggleLabelRaw,
      },
    },
  },
};

//</editor-fold>

//<editor-fold desc="Toggle. Дополнительный текст">
const ToggleHintStory: StoryFn<typeof Toggle> = () => <ToggleHintTemplate />;

export const ToggleHint = {
  render: ToggleHintStory,
  name: 'Toggle. Дополнительный текст',

  parameters: {
    docs: {
      source: {
        code: ToggleHintRaw,
      },
    },
  },
};

//</editor-fold>

//<editor-fold desc="Toggle. Адаптив">
const ToggleMobileStory: StoryFn<typeof Toggle> = () => <ToggleMobileTemplate />;

export const ToggleMobile = {
  render: ToggleMobileStory,
  name: 'Toggle. Адаптив',

  parameters: {
    docs: {
      source: {
        code: ToggleMobileRaw,
      },
    },
  },
};
