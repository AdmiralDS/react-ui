import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import styled from 'styled-components';
import { NumberInput, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import {
  NumberInputPlaygroundTemplate,
  NumberInputDisabledTemplate,
  NumberInputMinMaxTemplate,
  NumberInputCustomisedTemplate,
  NumberInputControlledTemplate,
} from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import PlaygroundRaw from '!!raw-loader!./Templates/NumberInputPlayground';
import DisabledRaw from '!!raw-loader!./Templates/NumberInputDisabled';
import MinMaxRaw from '!!raw-loader!./Templates/NumberInputMinMax';
import CustomRaw from '!!raw-loader!./Templates/NumberInputCustomised';
import ControlledRaw from '!!raw-loader!./Templates/NumberInputControlled';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => <Desc>Поле ввода с возможностью ввода числовых значений через нажатие с заданным шагом</Desc>;

export default {
  title: 'Admiral-2.1/Input/NumberInput',
  decorators: undefined,
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
const PlaygroundStory: StoryFn<typeof NumberInput> = (props) => (
  <NumberInputPlaygroundTemplate {...cleanUpProps(props)} />
);

export const Playground = {
  render: PlaygroundStory,

  parameters: {
    docs: {
      source: {
        code: PlaygroundRaw,
      },
    },
  },
};

//</editor-fold>

//<editor-fold desc="NumberInput. Задизейбленный.">
const DisabledStory: StoryFn<typeof NumberInput> = (props) => <NumberInputDisabledTemplate {...cleanUpProps(props)} />;

export const DisabledExample = {
  render: DisabledStory,

  parameters: {
    docs: {
      source: {
        code: DisabledRaw,
      },
    },
  },

  name: 'NumberInput. Задизейбленный.',
};

//</editor-fold>

//<editor-fold desc="NumberInput. Пример с minValue, maxValue.">
const MinMaxStory: StoryFn<typeof NumberInput> = (props) => <NumberInputMinMaxTemplate {...cleanUpProps(props)} />;

export const MinMaxExample = {
  render: MinMaxStory,

  parameters: {
    docs: {
      source: {
        code: MinMaxRaw,
      },
      description: {
        story: `Максимальное, минимальное значение. При достижении лимита, кнопки “+” или “-” принимают состояние Disabled.
        Если вручную введенное значение больше-меньше указанного диапазона, то оно принимает наиболее близкое
        значение из возможных при выводе фокуса из поля.`,
      },
    },
  },

  name: 'NumberInput. Пример с minValue, maxValue.',
};

//</editor-fold>

//<editor-fold desc="NumberInput. Пример изменения настроек (suffix, precision, thousand).">
const CustomStory: StoryFn<typeof NumberInput> = (props) => <NumberInputCustomisedTemplate {...cleanUpProps(props)} />;

export const CustomExample = {
  render: CustomStory,

  parameters: {
    docs: {
      source: {
        code: CustomRaw,
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
        code: ControlledRaw,
      },
      description: {
        story: `В случае использования контролируемого инпута в value необходимо передавать уже
        отформатированную строку с разделителями тысяч (суффикс/префикс в value вносить не нужно).\n\nБиблиотека 
        предоставляет утилиту fitToCurrency, котороая возвращает строку отформатированную в денежном формате. В качестве параметров 
        данная утилита принимает value - значение, которое надо отформатировать, а также параметры precision, decimal, thousand. 
        Также библиотека предоставляет утилиту clearValue, которая возвращает входную строку, из которой удалены все символы кроме 
        цифр, символа decimal и минуса`,
      },
    },
  },

  name: 'NumberInput. Примеры контролируемого инпута.',
};
