import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import styled from 'styled-components';
import { NumberInput, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { NumberInputPlaygroundTemplate } from './NumberInputPlayground.template';
import { NumberInputDisabledTemplate } from './NumberInputDisabled.template';
import { NumberInputMinMaxTemplate } from './NumberInputMinMax.template';
import { NumberInputCustomisedTemplate } from './NumberInputCustomised.template';
import { NumberInputControlledTemplate } from './NumberInputControlled.template';

// Imports of text sources
import NumberInputPlaygroundRaw from './NumberInputPlayground.template?raw';
import NumberInputDisabledRaw from './NumberInputDisabled.template?raw';
import NumberInputMinMaxRaw from './NumberInputMinMax.template?raw';
import NumberInputCustomisedRaw from './NumberInputCustomised.template?raw';
import NumberInputControlledRaw from './NumberInputControlled.template?raw';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => <Desc>Поле ввода с возможностью ввода числовых значений через нажатие с заданным шагом</Desc>;

export default {
  title: 'Admiral-2.1/Input/NumberInput',
  component: NumberInput,
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
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A60588',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A60694',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A60723',
      },
    ],
  },
  argTypes: {
    placeholder: {
      control: { type: 'text' },
    },
    thousand: {
      control: { type: 'text' },
    },
    prefix: {
      control: { type: 'text' },
    },
    suffix: {
      control: { type: 'text' },
    },
    decimal: {
      control: { type: 'text' },
    },
    precision: {
      type: 'number',
    },
    minValue: {
      type: 'number',
    },
    maxValue: {
      type: 'number',
    },
    step: {
      type: 'number',
    },
    displayPlusMinusIcons: {
      control: { type: 'boolean' },
    },
    displayClearIcon: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    readOnly: {
      control: { type: 'boolean' },
    },
    disableCopying: {
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
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
    skeleton: {
      control: { type: 'boolean' },
    },
  },
} as Meta<typeof NumberInput>;

//<editor-fold desc="Playground">
const PlaygroundStory: StoryFn<typeof NumberInput> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <NumberInputPlaygroundTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};
export const Playground = {
  render: PlaygroundStory,
  parameters: {
    docs: {
      source: {
        code: NumberInputPlaygroundRaw,
      },
    },
  },
};
//</editor-fold>

//<editor-fold desc="NumberInput. Задизейбленный.">
const DisabledStory: StoryFn<typeof NumberInput> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <NumberInputDisabledTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};
export const DisabledExample = {
  render: DisabledStory,
  parameters: {
    docs: {
      source: {
        code: NumberInputDisabledRaw,
      },
    },
  },
  name: 'NumberInput. Задизейбленный.',
};
//</editor-fold>

//<editor-fold desc="NumberInput. Пример с minValue, maxValue.">
const MinMaxStory: StoryFn<typeof NumberInput> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <NumberInputMinMaxTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};
export const MinMaxExample = {
  render: MinMaxStory,
  parameters: {
    docs: {
      source: {
        code: NumberInputMinMaxRaw,
      },
      description: {
        story: `Параметры максимальное (maxValue) и минимальное (minValue) значение применяются для того, чтобы обозначить 
      диапазон допустимых чисел для ввода. При достижении лимита, кнопки “+” или “-” принимают состояние Disabled. Если 
      вручную введенное значение больше или меньше указанного диапазона, то автокоррекции значения при выводе фокуса из поля не происходит 
      (в предыдущей реализации, от которой библиотека отказалась, значение автоматически корректировалось, принимая наиболее близкое значение из допустимого диапазона). 
      Предполагается, что необходимая валидация и корректировка значения будут происходить на стороне пользователя. Также, если minValue >= 0, то
      ввод знака минус блокируется.`,
      },
    },
  },
  name: 'NumberInput. Пример с minValue, maxValue.',
};
//</editor-fold>

//<editor-fold desc="NumberInput. Пример изменения настроек (suffix, precision, thousand).">
const CustomStory: StoryFn<typeof NumberInput> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <NumberInputCustomisedTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};
export const CustomExample = {
  render: CustomStory,
  parameters: {
    docs: {
      source: {
        code: NumberInputCustomisedRaw,
      },
      description: {
        story: `Пользователь может указать с помощью параметра precision (по умолчанию равен 2), 
      с какой точностью компонент должен выводить число (сколько разрядов должно быть в дробной части числа). 
      В этом случае при потере фокуса, если число содержит не все разряды в дробной части или дробная 
      часть отсутствует, должна произойти корректировка значения и недостающее количество разрядов должно быть заполнено нулями.`,
      },
    },
  },
  name: 'NumberInput. Пример изменения настроек (suffix, precision, thousand).',
};
//</editor-fold>

//<editor-fold desc="NumberInput. Примеры контролируемого инпута.">
const ControlledStory: StoryFn<typeof NumberInput> = () => <NumberInputControlledTemplate />;
export const ControlledExample = {
  render: ControlledStory,
  parameters: {
    docs: {
      source: {
        code: NumberInputControlledRaw,
      },
      description: {
        story: `В качестве значений параметров value и defaultValue в NumberInput необходимо передавать уже
      отформатированную строку с разделителями тысяч (суффикс/префикс в value/defaultValue вносить не нужно).\n\nЕсли вы используете 
      контролируемый NumberInput, то в качестве значения value вам досточно указывать event.target.value, где event - это нативное событие 
      инпута, передаваемое к качестве параметра в колбек onChange. \n\nКроме того, библиотека предоставляет утилиту fitToCurrency, 
      которая возвращает строку отформатированную в денежном формате. В качестве параметров 
      данная утилита принимает value - значение, которое надо отформатировать, а также параметры precision, decimal, thousand. 
      Также библиотека предоставляет утилиту clearValue, которая возвращает входную строку, из которой удалены все символы кроме 
      цифр, символа decimal и минуса.`,
      },
    },
  },
  name: 'NumberInput. Примеры контролируемого инпута.',
};
//</editor-fold>
