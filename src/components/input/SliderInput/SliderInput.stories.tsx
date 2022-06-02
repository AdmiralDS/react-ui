import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import styled, { ThemeProvider } from 'styled-components';

import { SliderInput } from '.';
import { Theme } from '#src/components/themes';

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
  decorators: [withDesign],
  component: SliderInput,
  parameters: {
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
      type: 'string',
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
  },
} as ComponentMeta<typeof SliderInput>;

const Template0: ComponentStory<typeof SliderInput> = (args) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <SliderInput {...args} onChange={(full, short) => console.log({ full, short })} />
    </ThemeProvider>
  );
};

const Template1: ComponentStory<typeof SliderInput> = (args) => {
  return (
    <>
      <SliderInput
        {...args}
        defaultValue="15 ₽"
        onChange={(full, short) => console.log({ full, short })}
        tickMarks={[5, 10, 15]}
      />
    </>
  );
};

const Template2: ComponentStory<typeof SliderInput> = (args) => {
  return (
    <>
      <SliderInput
        {...args}
        defaultValue="5.000 $"
        onChange={(full, short) => console.log({ full, short })}
        suffix="$"
        thousand=","
        precision={3}
        placeholder="0.000 $"
      />
    </>
  );
};

export const Playground = Template0.bind({});
Playground.args = {};
Playground.storyName = 'SliderInput. Playground.';
Playground.parameters = {
  docs: {
    source: {
      type: 'code',
    },
  },
};

export const WithTickMarks = Template1.bind({});
WithTickMarks.args = {};
WithTickMarks.storyName = 'SliderInput. С промежуточными отметками.';
WithTickMarks.parameters = {
  docs: {
    source: {
      type: 'code',
    },
  },
};

export const Customised = Template2.bind({});
Customised.args = {};
Customised.storyName = 'SliderInput. Пример изменения настроек (suffix, precision, thousand).';
Customised.parameters = {
  docs: {
    source: {
      type: 'code',
    },
  },
};
