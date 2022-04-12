import React from 'react';
import styled from 'styled-components';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import { NumberInput } from '.';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => <Desc>Поле ввода с возможностью ввода числовых значений через нажатие с заданным шагом</Desc>;

export default {
  title: 'Input/NumberInput',
  decorators: [withDesign],
  component: NumberInput,
  parameters: {
    componentSubtitle: <Description />,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/HCiO63zg2hPSXTHuEdpRtG/Admiral-2.0-UI-Kit?node-id=39%3A60588',
    },
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
  },
} as ComponentMeta<typeof NumberInput>;

const Template0: ComponentStory<typeof NumberInput> = (args) => {
  return (
    <NumberInput
      {...args}
      defaultValue="2"
      onChange={(fullStr, shortStr) => {
        console.log({ fullStr, shortStr });
      }}
    />
  );
};

const Template1: ComponentStory<typeof NumberInput> = (args) => {
  return <NumberInput {...args} disabled />;
};

const Template2: ComponentStory<typeof NumberInput> = (args) => {
  return (
    <NumberInput
      {...args}
      onChange={(fullStr, shortStr) => {
        console.log({ fullStr, shortStr });
      }}
      minValue={0}
      maxValue={2000}
    />
  );
};

const Template3: ComponentStory<typeof NumberInput> = (args) => {
  return (
    <NumberInput
      {...args}
      onChange={(fullStr, shortStr) => {
        console.log({ fullStr, shortStr });
      }}
      suffix="$"
      thousand=","
      precision={0}
      placeholder="0 $"
    />
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
