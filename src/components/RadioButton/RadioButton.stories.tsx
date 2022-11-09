import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import styled from 'styled-components';

import { RadioButton, RadioButtonProps } from '#src/components/RadioButton';
import { Button } from '#src/components/Button';
import { ReactComponent as InfoSolidSVG } from '@admiral-ds/icons/build/service/InfoSolid.svg';
import { Hint } from '#src/components/Hint';

const Separator = styled.div`
  height: 20px;
  width: 100%;
`;

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

type Dimension = 'm' | 's';

const InfoSolid = styled(InfoSolidSVG)<{ dimension: Dimension }>`
  margin-left: 5px;
  width: ${(props) => (props.dimension === 'm' ? '24px' : '20px')};

  & *[fill^='#'] {
    fill: ${(p) => p.theme.color['Neutral/Neutral 50']};
  }
  [data-focus-within] & *[fill^='#'] {
    fill: ${(props) => props.theme.color['Primary/Primary 70']};
  }
  &:hover *[fill^='#'] {
    fill: ${(props) => props.theme.color['Primary/Primary 70']};
  }
`;

const RadioWithInformer = styled.div`
  display: flex;
  align-items: flex-start;
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
      <Separator />
      <RadioButton value={1} checked={false} error readOnly>
        Not checked error
      </RadioButton>
    </>
  );
};

const Template3: ComponentStory<typeof RadioButton> = ({
  dimension,
  disabled,
  checked: argChecked,
  error,
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
        error={error}
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

const Template5: ComponentStory<typeof RadioButton> = () => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const handleHintChange1 = (visible: boolean) => setVisible1(visible);
  const handleHintChange2 = (visible: boolean) => setVisible2(visible);
  return (
    <>
      <RadioWithInformer>
        <RadioButton value={1} extraText="Add text">
          Dimension - m
        </RadioButton>
        <Hint
          visible={visible1}
          onVisibilityChange={handleHintChange1}
          renderContent={() =>
            'At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples of mini units map to fluid grid column widths and row heights.'
          }
        >
          <InfoSolid dimension="m" aria-hidden />
        </Hint>
      </RadioWithInformer>
      <Separator />
      <RadioWithInformer>
        <RadioButton value={1} dimension="s" extraText="Add text">
          Dimension - s
        </RadioButton>
        <Hint
          visible={visible2}
          onVisibilityChange={handleHintChange2}
          renderContent={() =>
            'At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples of mini units map to fluid grid column widths and row heights.'
          }
        >
          <InfoSolid dimension="s" aria-hidden />
        </Hint>
      </RadioWithInformer>
    </>
  );
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

export const RadioInformer = Template5.bind({});
RadioInformer.args = {};
RadioInformer.storyName = 'RadioButton. Информер';
