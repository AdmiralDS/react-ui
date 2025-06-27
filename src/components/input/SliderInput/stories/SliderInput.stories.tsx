import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import styled from 'styled-components';
import { SliderInput, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { SliderInputControlledTemplate } from './SliderInputControlled.template';
import { SliderInputTickMarksTemplate } from './SliderInputTickMarks.template';
import { SliderInputCustomisedTemplate } from './SliderInputCustomised.template';
import { SliderInputCustomMarkTemplate } from './SliderInputCustomMark.template';

// Imports of text sources
import SliderInputControlledRaw from './SliderInputControlled.template?raw';
import SliderInputTickMarksRaw from './SliderInputTickMarks.template?raw';
import SliderInputCustomisedRaw from './SliderInputCustomised.template?raw';
import SliderInputCustomMarkRaw from './SliderInputCustomMark.template?raw';

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
    Поле ввода со слайдером позволяет выбирать значение из обозначенного диапазона мышкой. Так же возможен ввод вручную.
    <Separator />
    Диапазон может быть сплошным либо фиксированным. В диапозон может быть добавлено значение: рубли, доллары и т.п. В
    таком случае значение подставляется только в поле ввода.
  </Desc>
);

export default {
  title: 'Admiral-2.1/Input/SliderInput',
  decorators: undefined,
  component: SliderInput,
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
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A61110',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A61184',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A61214',
      },
    ],
  },
  argTypes: {
    thousand: {
      control: { type: 'text' },
    },
    decimal: {
      control: { type: 'text' },
    },
    prefix: {
      control: { type: 'text' },
    },
    suffix: {
      control: { type: 'text' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    precision: {
      type: 'number',
    },
    step: {
      type: 'number',
    },
    minValue: {
      type: 'number',
    },
    maxValue: {
      type: 'number',
    },
    displayClearIcon: {
      control: { type: 'boolean' },
    },
    disableCopying: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    readOnly: {
      control: { type: 'boolean' },
    },
    showTooltip: {
      control: { type: 'boolean' },
    },
    icons: {
      control: false,
    },
    containerRef: {
      control: false,
    },
    handleInput: {
      control: false,
    },
    tickMarks: {
      control: false,
    },
    wrapperProps: {
      control: false,
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
    skeleton: {
      control: { type: 'boolean' },
    },
  },
} as Meta<typeof SliderInput>;

//<editor-fold desc="SliderInput. Пример контролируемого инпута.">
const ControlledStory: StoryFn<typeof SliderInput> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <SliderInputControlledTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const ControlledExample = {
  render: ControlledStory,

  parameters: {
    docs: {
      source: {
        code: SliderInputControlledRaw,
      },
    },
  },

  name: 'SliderInput. Пример контролируемого инпута.',
};

//</editor-fold>

//<editor-fold desc="SliderInput. С промежуточными отметками.">
const TickMarksStory: StoryFn<typeof SliderInput> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <SliderInputTickMarksTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const TickmarksExample = {
  render: TickMarksStory,

  parameters: {
    docs: {
      source: {
        code: SliderInputTickMarksRaw,
      },
    },
  },

  name: 'SliderInput. С промежуточными отметками.',
};

//</editor-fold>

//<editor-fold desc="SliderInput. Пример изменения настроек (suffix, precision, thousand).">
const CustomStory: StoryFn<typeof SliderInput> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <SliderInputCustomisedTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const CustomExample = {
  render: CustomStory,

  parameters: {
    docs: {
      source: {
        code: SliderInputCustomisedRaw,
      },
    },
  },

  name: 'SliderInput. Пример изменения настроек (suffix, precision, thousand).',
};

//</editor-fold>

//<editor-fold desc="SliderInput. Пример кастомизирования текстовых подписей к отметкам слайдера.">
const CustomMarkStory: StoryFn<typeof SliderInput> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <SliderInputCustomMarkTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const CustomMarkExample = {
  render: CustomMarkStory,

  parameters: {
    docs: {
      source: {
        code: SliderInputCustomMarkRaw,
      },
    },
  },

  name: 'SliderInput. Пример кастомизирования текстовых подписей к отметкам слайдера.',
};
