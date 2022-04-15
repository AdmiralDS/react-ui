import { MultiButton, MultiButtonItem } from '#src/components-ver2/MultiButton';
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { useDarkMode } from 'storybook-dark-mode';
import styled, { ThemeProvider } from 'styled-components';
import { DARK_THEME, LIGHT_THEME } from '#src/components-ver2/themes';

const Separator = styled.div`
  height: 20px;
`;

export default {
  title: 'Admiral-2.1/MultiButton',
  decorators: [withDesign],
  component: MultiButton,
  parameters: {
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A17173',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A19496',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A19544',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A19592',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A19640',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A19520',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A19568',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A19616',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A19664',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A19900',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: ['xl', 'l', 'm', 's'],
      control: { type: 'radio' },
    },
    appearance: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof MultiButton>;

const Template1: ComponentStory<typeof MultiButton> = (args) => {
  const items: Array<MultiButtonItem> = [
    {
      id: '1',
      display: 'Option one',
    },
    {
      id: '2',
      display: 'Option two',
    },
    {
      id: '3',
      display: 'Option three',
    },
    {
      id: '4',
      display: 'Option four',
    },
    {
      id: '5',
      display: 'Option five',
    },
    {
      id: '6',
      display: 'Option six',
    },
    {
      id: '7',
      display: 'Option seven',
    },
  ];

  const [selected, setSelected] = React.useState<string | null>(null);
  const [selected2, setSelected2] = React.useState<string | null>(null);
  return (
    <ThemeProvider theme={useDarkMode() ? DARK_THEME : LIGHT_THEME}>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <MultiButton
          {...args}
          appearance="primary"
          selected={selected}
          onChange={(id) => {
            console.log('select item with id: ', id);
            setSelected(id);
          }}
          options={items}
          onOpen={() => console.log('open menu')}
          onClose={() => console.log('close menu')}
        />
        <Separator />
        <MultiButton
          {...args}
          appearance="secondary"
          selected={selected2}
          onChange={(id) => {
            console.log('select item with id: ', id);
            setSelected2(id);
          }}
          options={items}
          onOpen={() => console.log('open menu')}
          onClose={() => console.log('close menu')}
        />
      </div>
    </ThemeProvider>
  );
};

const items: Array<MultiButtonItem> = [
  {
    id: '1',
    display: 'Option one',
  },
  {
    id: '2',
    display: 'Option two',
  },
  {
    id: '3',
    display: 'Option three',
    disabled: true,
  },
  {
    id: '4',
    display: 'Option four',
  },
  {
    id: '5',
    display: 'Option five',
    disabled: true,
  },
  {
    id: '6',
    display: 'Option six',
  },
  {
    id: '7',
    display: 'Option seven',
  },
];

const Template2: ComponentStory<typeof MultiButton> = (args) => {
  const [selected, setSelected] = React.useState<string | null>(null);
  const [selected2, setSelected2] = React.useState<string | null>(null);
  return (
    <ThemeProvider theme={useDarkMode() ? DARK_THEME : LIGHT_THEME}>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <MultiButton
          {...args}
          appearance="primary"
          selected={selected}
          onChange={(id) => {
            console.log('select item with id: ', id);
            setSelected(id);
          }}
          options={items}
          onOpen={() => console.log('open menu')}
          onClose={() => console.log('close menu')}
        />
        <Separator />
        <MultiButton
          {...args}
          selected={selected2}
          disabled
          onChange={(id) => {
            console.log('select item with id: ', id);
            setSelected2(id);
          }}
          options={items}
          onOpen={() => console.log('open menu')}
          onClose={() => console.log('close menu')}
        />
      </div>
    </ThemeProvider>
  );
};

export const MultiButtonAppearance = Template1.bind({});
MultiButtonAppearance.args = {};
MultiButtonAppearance.storyName = 'MultiButton. Внешний вид.';

export const MultiButtonDisabled = Template2.bind({});
MultiButtonDisabled.args = {};
MultiButtonDisabled.storyName = 'MultiButton. Задизейбленность.';
