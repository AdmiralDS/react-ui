import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import styled from 'styled-components';

import { RadioButton } from '@admiral-ds/react-ui';

import {
  RadioButtonExtraTextTemplate,
  RadioButtonInformerTemplate,
  RadioButtonPlaygroundTemplate,
  RadioButtonSizeTemplate,
  RadioButtonStateTemplate,
} from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import RadioButtonPlaygroundRaw from './Templates/RadioButtonPlayground?raw';
import RadioButtonSizeRaw from './Templates/RadioButtonSize?raw';
import RadioButtonStateRaw from './Templates/RadioButtonState?raw';
import RadioButtonExtraTextRaw from './Templates/RadioButtonExtraText?raw';
import RadioButtonInformerRaw from './Templates/RadioButtonInformer?raw';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Радиальные кнопки применяются, когда есть список опций, из которых пользователь может выбрать только один вариант
  </Desc>
);

export default {
  title: 'Admiral-2.1/RadioButton',
  decorators: undefined,
  component: RadioButton,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A21470',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A21629',
      },
    ],
    componentSubtitle: <Description />,
    actions: {
      argTypesRegex: 'onChange',
    },
    layout: 'centered',
  },
  argTypes: {
    dimension: {
      options: ['m', 's'],
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
    error: {
      control: { type: 'boolean' },
    },
    extraText: {
      control: { type: 'text' },
    },
  },
} as Meta<typeof RadioButton>;

//<editor-fold desc="RadioButton. Playground">
const RadioButtonPlaygroundStory: StoryFn<typeof RadioButton> = (props) => (
  <RadioButtonPlaygroundTemplate {...cleanUpProps(props)} />
);

export const RadioButtonPlayground = {
  render: RadioButtonPlaygroundStory,

  parameters: {
    docs: {
      source: {
        code: RadioButtonPlaygroundRaw,
      },
    },
  },
};

//</editor-fold>

//<editor-fold desc="RadioButton. Размеры">
const RadioButtonSizeStory: StoryFn<typeof RadioButton> = () => <RadioButtonSizeTemplate />;

export const RadioButtonSize = {
  render: RadioButtonSizeStory,

  parameters: {
    docs: {
      source: {
        code: RadioButtonSizeRaw,
      },
    },
  },

  name: 'RadioButton. Размеры',
};

//</editor-fold>

//<editor-fold desc="RadioButton. Состояния">
const RadioButtonStateStory: StoryFn<typeof RadioButton> = () => <RadioButtonStateTemplate />;

export const RadioButtonState = {
  render: RadioButtonStateStory,

  parameters: {
    docs: {
      source: {
        code: RadioButtonStateRaw,
      },
    },
  },

  name: 'RadioButton. Состояния',
};

//</editor-fold>

//<editor-fold desc="RadioButton. Дополнительный текст">
const RadioButtonExtraTextStory: StoryFn<typeof RadioButton> = () => <RadioButtonExtraTextTemplate />;

export const RadioButtonExtraText = {
  render: RadioButtonExtraTextStory,

  parameters: {
    docs: {
      source: {
        code: RadioButtonExtraTextRaw,
      },
    },
  },

  name: 'RadioButton. Дополнительный текст',
};

//</editor-fold>

//<editor-fold desc="RadioButton. Информер">
const RadioButtonInformerStory: StoryFn<typeof RadioButton> = () => <RadioButtonInformerTemplate />;

export const RadioButtonInformer = {
  render: RadioButtonInformerStory,

  parameters: {
    docs: {
      source: {
        code: RadioButtonInformerRaw,
      },
    },
  },

  name: 'RadioButton. Информер',
};
