import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import styled, { ThemeProvider } from 'styled-components';
import { useDarkMode } from 'storybook-dark-mode';
import { DARK_THEME, LIGHT_THEME } from '#src/components-ver2/themes';

import { NumberInput } from '.';

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
  },
} as ComponentMeta<typeof NumberInput>;

const Template0: ComponentStory<typeof NumberInput> = (args) => {
  return (
    <ThemeProvider theme={useDarkMode() ? DARK_THEME : LIGHT_THEME}>
      <NumberInput
        {...args}
        defaultValue="2 ₽"
        onChange={(event, fullStr, shortStr) => {
          console.log({ event, fullStr, shortStr });
        }}
      />
    </ThemeProvider>
  );
};

const Template1: ComponentStory<typeof NumberInput> = (args) => {
  return (
    <ThemeProvider theme={useDarkMode() ? DARK_THEME : LIGHT_THEME}>
      <NumberInput {...args} disabled />
    </ThemeProvider>
  );
};

const Template2: ComponentStory<typeof NumberInput> = (args) => {
  return (
    <ThemeProvider theme={useDarkMode() ? DARK_THEME : LIGHT_THEME}>
      <NumberInput
        {...args}
        onChange={(event, fullStr, shortStr) => {
          console.log({ event, fullStr, shortStr });
        }}
        minValue={0}
        maxValue={2000}
      />
    </ThemeProvider>
  );
};

const Template3: ComponentStory<typeof NumberInput> = (args) => {
  return (
    <ThemeProvider theme={useDarkMode() ? DARK_THEME : LIGHT_THEME}>
      <NumberInput
        {...args}
        onChange={(event, fullStr, shortStr) => {
          console.log({ event, fullStr, shortStr });
        }}
        suffix="$"
        thousand=","
        precision={0}
        placeholder="0 $"
      />
    </ThemeProvider>
  );
};

const Template4: ComponentStory<typeof NumberInput> = () => {
  const [value1, setValue1] = React.useState<string | undefined>('From 50 $');
  const [value2, setValue2] = React.useState<string | undefined>('1 минута');
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
    <ThemeProvider theme={useDarkMode() ? DARK_THEME : LIGHT_THEME}>
      <NumberInput
        value={value1}
        onChange={(event, fullStr, shortStr) => {
          console.log({ event, fullStr, shortStr });
          setValue1(fullStr);
        }}
        prefix="From"
        suffix="$"
        style={{ marginBottom: '40px' }}
      />
      <NumberInput
        value={value2}
        onChange={(event, fullStr, shortStr) => {
          console.log({ event, fullStr, shortStr });
          setValue2(fullStr);
          setSuffix(declOfNum(Number(shortStr), ['минута', 'минуты', 'минут']));
        }}
        suffix={suffix}
      />
    </ThemeProvider>
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
  },
  description: {
    story: `В случае использования контролируемого инпута в value необходимо передавать уже
    отформатированную строку с префиксом/суффиксом/разделителем (данная строка возвращается в
    колбеке onChange в виде параметра fullStr).\n\nБиблиотека предоставляет также утилиту fitToCurrency,
    котороая возвращает строку отформатированную в денежном формате. В качестве параметров данная утилита принимает value -
    значение, которое надо отформатировать, а также параметры precision, decimal, thousand, prefix, suffix.`,
  },
};
