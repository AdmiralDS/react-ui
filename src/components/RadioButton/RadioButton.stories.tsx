import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import styled from 'styled-components';

import { RadioButton, RadioButtonProps } from '../RadioButton';
import { Button } from '../Button';

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
    Радиальные кнопки применяются, когда есть список опций, из которых пользователь может выбрать только один вариант
  </Desc>
);

export default {
  title: 'Example/RadioButton',
  decorators: [withDesign],
  component: RadioButton,
  parameters: {
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/HCiO63zg2hPSXTHuEdpRtG/Admiral-2.0-UI-Kit?node-id=37%3A21629',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/HCiO63zg2hPSXTHuEdpRtG/Admiral-2.0-UI-Kit?node-id=37%3A21739',
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
    checked: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof RadioButton>;

const Template1: ComponentStory<typeof RadioButton> = () => {
  return (
    <>
      <RadioButton value={1}>Dimension - m</RadioButton>
      <Separator />
      <RadioButton value={1} dimension="s">
        Dimension - s
      </RadioButton>
    </>
  );
};

const Template2: ComponentStory<typeof RadioButton> = () => {
  return (
    <>
      <RadioButton value={1} checked readOnly>
        Checked
      </RadioButton>
      <Separator />
      <RadioButton value={1} checked={false} readOnly>
        Not checked
      </RadioButton>
      <Separator />
      <RadioButton value={1} checked disabled readOnly>
        Checked disabled
      </RadioButton>
      <Separator />
      <RadioButton value={1} checked={false} disabled readOnly>
        Not checked disabled
      </RadioButton>
    </>
  );
};

const Template3: ComponentStory<typeof RadioButton> = ({
  dimension,
  disabled,
  checked: argChecked,
}: RadioButtonProps) => {
  const [checked, setChecked] = useState(argChecked || false);
  return (
    <>
      <RadioButton
        value={1}
        checked={checked}
        onChange={(event) => setChecked(event.currentTarget.checked)}
        dimension={dimension}
        disabled={disabled}
      >
        Some text
      </RadioButton>
      <Separator />
      <Button onClick={() => setChecked(false)}>Сбросить состояние радиокнопки</Button>
    </>
  );
};

const Template4: ComponentStory<typeof RadioButton> = () => {
  return (
    <>
      <RadioButton value={1} extraText="Add text">
        Dimension - m
      </RadioButton>
      <Separator />
      <RadioButton value={1} dimension="s" extraText="Add text">
        Dimension - s
      </RadioButton>
    </>
  );
};

export const Playground = Template3.bind({});
Playground.args = {};
Playground.parameters = {
  docs: {
    source: {
      type: 'code',
    },
  },
};

export const RadioSize = Template1.bind({});
RadioSize.args = {};
RadioSize.storyName = 'RadioButton. Размеры';

export const RadioState = Template2.bind({});
RadioState.args = {};
RadioState.storyName = 'RadioButton. Состояния';

export const RadioExtraText = Template4.bind({});
RadioExtraText.args = {};
RadioExtraText.storyName = 'RadioButton. Дополнительный текст';
