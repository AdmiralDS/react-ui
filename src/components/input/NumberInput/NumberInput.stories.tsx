import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import styled, { ThemeProvider } from 'styled-components';
import { clearValue, NumberInput } from '#src/components/input/NumberInput';
import { Theme } from '#src/components/themes';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => <Desc>Поле ввода с возможностью ввода числовых значений через нажатие с заданным шагом</Desc>;

export default {
  title: 'Admiral-2.1/Input/NumberInput',
  decorators: [withDesign],
  component: NumberInput,
  parameters: {
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
      type: 'string',
    },
    thousand: {
      type: 'string',
    },
    prefix: {
      type: 'string',
    },
    suffix: {
      type: 'string',
    },
    decimal: {
      type: 'string',
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
    displayStatusIcon: {
      control: { type: 'boolean' },
    },
    displayClearIcon: {
      control: { type: 'boolean' },
    },
    disableCopying: {
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
      control: {
        type: 'radio',
        options: ['Border radius 0', 'Border radius 2', 'Border radius 4', 'Border radius 8'],
      },
    },
    skeleton: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof NumberInput>;

const Template0: ComponentStory<typeof NumberInput> = (args) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <NumberInput
        {...args}
        prefix="От"
        defaultValue="2.00"
        onChange={(event) => {
          console.log(event.target.value);
        }}
      />
    </ThemeProvider>
  );
};

const Template1: ComponentStory<typeof NumberInput> = (args) => {
  return (
    <>
      <NumberInput {...args} disabled />
    </>
  );
};

const Template2: ComponentStory<typeof NumberInput> = (args) => {
  return (
    <>
      <NumberInput
        {...args}
        onChange={(event) => {
          console.log(event.target.value);
        }}
        minValue={0}
        maxValue={2000}
      />
    </>
  );
};

const Template3: ComponentStory<typeof NumberInput> = (args) => {
  return (
    <>
      <NumberInput
        {...args}
        onChange={(event) => {
          console.log(event.target.value);
        }}
        suffix="$"
        thousand=","
        precision={1}
        placeholder="0.0 $"
      />
    </>
  );
};

const Template4: ComponentStory<typeof NumberInput> = () => {
  const [value1, setValue1] = React.useState<string | undefined>('50.00');
  const [value2, setValue2] = React.useState<string | undefined>('1');
  const [suffix, setSuffix] = React.useState('минута');

  function declOfNum(n: number, text_forms: Array<string>) {
    n = Math.abs(n) % 100;
    const n1 = n % 10;
    if (n > 10 && n < 20) {
      return text_forms[2];
    }
    if (n1 > 1 && n1 < 5) {
      return text_forms[1];
    }
    if (n1 == 1) {
      return text_forms[0];
    }
    return text_forms[2];
  }

  return (
    <>
      <NumberInput
        value={value1}
        onChange={(event) => {
          console.log(event.target.value);
          setValue1(event.target.value);
        }}
        prefix="From"
        suffix="$"
        style={{ marginBottom: '40px' }}
      />
      <NumberInput
        value={value2}
        onChange={(event) => {
          console.log(event.target.value);
          setValue2(event.target.value);
          setSuffix(declOfNum(Number(clearValue(event.target.value, 0)), ['минута', 'минуты', 'минут']));
        }}
        suffix={suffix}
        precision={0}
      />
    </>
  );
};

export const Playground = Template0.bind({});
Playground.args = {};
Playground.parameters = {
  docs: {
    source: {
      type: 'code',
    },
  },
};

export const Disabled = Template1.bind({});
Disabled.args = {};
Disabled.storyName = 'NumberInput. Задизейбленный.';
Disabled.parameters = {
  docs: {
    source: {
      type: 'code',
    },
  },
};

export const MinMax = Template2.bind({});
MinMax.args = {};
MinMax.storyName = 'NumberInput. Пример с minValue, maxValue.';
MinMax.parameters = {
  docs: {
    source: {
      type: 'code',
    },
    description: {
      story: `Максимальное, минимальное значение. При достижении лимита, кнопки “+” или “-” принимают состояние Disabled.
      Если вручную введенное значение больше-меньше указанного диапазона, то оно принимает наиболее близкое
      значение из возможных при выводе фокуса из поля.`,
    },
  },
};

export const Customised = Template3.bind({});
Customised.args = {};
Customised.storyName = 'NumberInput. Пример изменения настроек (suffix, precision, thousand).';
Customised.parameters = {
  docs: {
    source: {
      type: 'code',
    },
    description: {
      story: `Пользователь может указать с помощью параметра precision (по умолчанию равен 2), 
      с какой точностью компонент должен выводить число (сколько разрядов должно быть в дробной части числа). 
      В этом случае при потере фокуса, если число содержит не все разряды в дробной части или дробная 
      часть отсутствует, должна произойти корректировка значения и недостающее количество разрядов должно быть заполнено нулями.`,
    },
  },
};

export const Controlled = Template4.bind({});
Controlled.args = {};
Controlled.storyName = 'NumberInput. Примеры контролируемого инпута.';
Controlled.parameters = {
  docs: {
    source: {
      type: 'code',
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
};
