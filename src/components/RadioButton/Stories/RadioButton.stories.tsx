import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
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
import RadioButtonPlaygroundRaw from '!!raw-loader!./Templates/RadioButtonPlayground';
import RadioButtonSizeRaw from '!!raw-loader!./Templates/RadioButtonSize';
import RadioButtonStateRaw from '!!raw-loader!./Templates/RadioButtonState';
import RadioButtonExtraTextRaw from '!!raw-loader!./Templates/RadioButtonExtraText';
import RadioButtonInformerRaw from '!!raw-loader!./Templates/RadioButtonInformer';

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
  decorators: [withDesign],
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
} as ComponentMeta<typeof RadioButton>;

//<editor-fold desc="RadioButton. Playground">
const RadioButtonPlaygroundStory: ComponentStory<typeof RadioButton> = (props) => (
  <RadioButtonPlaygroundTemplate {...cleanUpProps(props)} />
);

export const RadioButtonPlayground = RadioButtonPlaygroundStory.bind({});
RadioButtonPlayground.parameters = {
  docs: {
    source: {
      code: RadioButtonPlaygroundRaw,
    },
  },
};
//</editor-fold>

//<editor-fold desc="RadioButton. Размеры">
const RadioButtonSizeStory: ComponentStory<typeof RadioButton> = () => <RadioButtonSizeTemplate />;

export const RadioButtonSize = RadioButtonSizeStory.bind({});
RadioButtonSize.parameters = {
  docs: {
    source: {
      code: RadioButtonSizeRaw,
    },
  },
};
RadioButtonSize.storyName = 'RadioButton. Размеры';
//</editor-fold>

//<editor-fold desc="RadioButton. Состояния">
const RadioButtonStateStory: ComponentStory<typeof RadioButton> = () => <RadioButtonStateTemplate />;

export const RadioButtonState = RadioButtonStateStory.bind({});
RadioButtonState.parameters = {
  docs: {
    source: {
      code: RadioButtonStateRaw,
    },
  },
};
RadioButtonState.storyName = 'RadioButton. Состояния';
//</editor-fold>

//<editor-fold desc="RadioButton. Дополнительный текст">
const RadioButtonExtraTextStory: ComponentStory<typeof RadioButton> = () => <RadioButtonExtraTextTemplate />;

export const RadioButtonExtraText = RadioButtonExtraTextStory.bind({});
RadioButtonExtraText.parameters = {
  docs: {
    source: {
      code: RadioButtonExtraTextRaw,
    },
  },
};
RadioButtonExtraText.storyName = 'RadioButton. Дополнительный текст';
//</editor-fold>

//<editor-fold desc="RadioButton. Информер">
const RadioButtonInformerStory: ComponentStory<typeof RadioButton> = () => <RadioButtonInformerTemplate />;

export const RadioButtonInformer = RadioButtonInformerStory.bind({});
RadioButtonInformer.parameters = {
  docs: {
    source: {
      code: RadioButtonInformerRaw,
    },
  },
};
RadioButtonInformer.storyName = 'RadioButton. Информер';
//</editor-fold>
