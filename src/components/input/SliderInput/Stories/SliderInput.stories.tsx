import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import styled from 'styled-components';
import { SliderInput, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import {
  SliderInputControlledTemplate,
  SliderInputTickMarksTemplate,
  SliderInputCustomisedTemplate,
  SliderInputCustomMarkTemplate,
} from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import ControlledRaw from './Templates/SliderInputControlled?raw';
import TickMarksRaw from './Templates/SliderInputTickMarks?raw';
import CustomRaw from './Templates/SliderInputCustomised?raw';
import CustomMarkRaw from './Templates/SliderInputCustomMark?raw';

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
    Диапазон может быть сплошным либо фиксированным. В диапозон может быть добавлено значение: рубли, доллары и тп. В
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
    isLoading: {
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
const ControlledStory: StoryFn<typeof SliderInput> = (props) => (
  <SliderInputControlledTemplate {...cleanUpProps(props)} />
);

export const ControlledExample = {
  render: ControlledStory,

  parameters: {
    docs: {
      source: {
        code: ControlledRaw,
      },
    },
    description: {
      story: `В качестве значений параметров value и defaultValue в SliderInput необходимо передавать уже
      отформатированную строку с разделителями тысяч (суффикс/префикс в value/defaultValue вносить не нужно).\n\nЕсли вы используете 
      контролируемый SliderInput, то в качестве значения value вам досточно указывать event.target.value, где event - это нативное событие 
      инпута, передаваемое к качестве параметра в колбек onChange. Также в колбек onChange передаются параметры fullStr и shortStr, 
      однако в будущем планируется убрать их и оставить только event по аналогии с api стандартного html-инпута.\n\nКроме того, библиотека 
      предоставляет утилиту fitToCurrency, которая возвращает строку отформатированную в денежном формате. В качестве параметров 
      данная утилита принимает value - значение, которое надо отформатировать, а также параметры precision, decimal, thousand. 
      Также библиотека предоставляет утилиту clearValue, которая возвращает входную строку, из которой удалены все символы кроме 
      цифр, символа decimal и минуса.`,
    },
  },

  name: 'SliderInput. Пример контролируемого инпута.',
};

//</editor-fold>

//<editor-fold desc="SliderInput. С промежуточными отметками.">
const TickMarksStory: StoryFn<typeof SliderInput> = (props) => (
  <SliderInputTickMarksTemplate {...cleanUpProps(props)} />
);

export const TickmarksExample = {
  render: TickMarksStory,

  parameters: {
    docs: {
      source: {
        code: TickMarksRaw,
      },
    },
  },

  name: 'SliderInput. С промежуточными отметками.',
};

//</editor-fold>

//<editor-fold desc="SliderInput. Пример изменения настроек (suffix, precision, thousand).">
const CustomStory: StoryFn<typeof SliderInput> = (props) => <SliderInputCustomisedTemplate {...cleanUpProps(props)} />;

export const CustomExample = {
  render: CustomStory,

  parameters: {
    docs: {
      source: {
        code: CustomRaw,
      },
    },
  },

  name: 'SliderInput. Пример изменения настроек (suffix, precision, thousand).',
};

//</editor-fold>

//<editor-fold desc="SliderInput. Пример кастомизирования текстовых подписей к отметкам слайдера.">
const CustomMarkStory: StoryFn<typeof SliderInput> = (props) => (
  <SliderInputCustomMarkTemplate {...cleanUpProps(props)} />
);

export const CustomMarkExample = {
  render: CustomMarkStory,

  parameters: {
    docs: {
      source: {
        code: CustomMarkRaw,
      },
    },
  },

  name: 'SliderInput. Пример кастомизирования текстовых подписей к отметкам слайдера.',
};
