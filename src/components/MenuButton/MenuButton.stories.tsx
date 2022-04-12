import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { ReactComponent as MinusCircleOutline } from '@admiral-ds/icons/build/service/MinusCircleOutline.svg';

import { MenuButton, MenuButtonItem, MenuButtonProps } from '../MenuButton';

export default {
  title: 'Example/MenuButton',
  decorators: [withDesign],
  component: MenuButton,
  parameters: {
    layout: 'centered',
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/HCiO63zg2hPSXTHuEdpRtG/Admiral-2.0-UI-Kit?node-id=39%3A24517',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/HCiO63zg2hPSXTHuEdpRtG/Admiral-2.0-UI-Kit?node-id=39%3A24698',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/HCiO63zg2hPSXTHuEdpRtG/Admiral-2.0-UI-Kit?node-id=39%3A24648',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/HCiO63zg2hPSXTHuEdpRtG/Admiral-2.0-UI-Kit?node-id=39%3A24734',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/HCiO63zg2hPSXTHuEdpRtG/Admiral-2.0-UI-Kit?node-id=39%3A24784',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/HCiO63zg2hPSXTHuEdpRtG/Admiral-2.0-UI-Kit?node-id=39%3A24834',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/HCiO63zg2hPSXTHuEdpRtG/Admiral-2.0-UI-Kit?node-id=39%3A24673',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/HCiO63zg2hPSXTHuEdpRtG/Admiral-2.0-UI-Kit?node-id=39%3A24759',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/HCiO63zg2hPSXTHuEdpRtG/Admiral-2.0-UI-Kit?node-id=39%3A24809',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/HCiO63zg2hPSXTHuEdpRtG/Admiral-2.0-UI-Kit?node-id=39%3A24859',
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
    loading: {
      control: { type: 'boolean' },
    },
    skeleton: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof MenuButton>;

const items = [
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
] as MenuButtonItem[];

const Template1: ComponentStory<typeof MenuButton> = (args) => {
  const [selected, setSelected] = React.useState<string | null>(null);
  return (
    <MenuButton
      {...args}
      selected={selected}
      onChange={(id) => {
        console.log(`selected: ${id}`);
        setSelected(id);
      }}
      options={items}
      onOpen={() => console.log('open menu')}
      onClose={() => console.log('close menu')}
    >
      test
    </MenuButton>
  );
};

const Template2: ComponentStory<typeof MenuButton> = (args) => {
  const items: Array<MenuButtonItem> = [
    {
      id: '1',
      display: 'Option one',
    },
    {
      id: '2',
      display: (
        <div style={{ display: 'flex', width: '115px', justifyContent: 'space-between', alignItems: 'center' }}>
          <MinusCircleOutline width={20} height={20} />
          Option two
        </div>
      ),
      disabled: true,
    },
    {
      id: '3',
      display: 'Option three',
    },
    {
      id: '4',
      display: 'Option four',
    },
  ];

  const [selected, setSelected] = React.useState<string | null>(null);
  return (
    <MenuButton
      {...args}
      selected={selected}
      onChange={(id) => {
        console.log(`selected: ${id}`);
        setSelected(id);
      }}
      options={items}
      onOpen={() => console.log('open menu')}
      onClose={() => console.log('close menu')}
    >
      test
    </MenuButton>
  );
};

export const MenuButtonBase = Template1.bind({});
MenuButtonBase.args = {};
MenuButtonBase.storyName = 'MenuButton. Базовый пример.';
MenuButtonBase.parameters = {
  docs: {
    source: {
      type: 'code',
    },
  },
};

export const MenuButtonOptions = Template2.bind({});
MenuButtonOptions.args = {};
MenuButtonOptions.storyName = 'MenuButton. Задизейбленные и кастомизированные опции.';
MenuButtonOptions.parameters = {
  docs: {
    source: {
      type: 'code',
    },
  },
};
