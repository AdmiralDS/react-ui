import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { ReactComponent as MinusCircleOutline } from '@admiral-ds/icons/build/service/MinusCircleOutline.svg';
import { TabMenu } from '#src/components/TabMenu';
import { Theme } from '#src/components/themes';
import { ThemeProvider } from 'styled-components';

export default {
  title: 'Admiral-2.1/TabMenu',
  decorators: [withDesign],
  component: TabMenu,
  parameters: {
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A31118',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A31257',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: ['l', 'm'],
      control: { type: 'radio' },
    },
    underline: {
      control: { type: 'boolean' },
    },
    mobile: {
      control: { type: 'boolean' },
    },
    themeBorderKind: {
      control: {
        type: 'radio',
        options: ['Border radius 0', 'Border radius 2', 'Border radius 4', 'Border radius 8'],
      },
    },
  },
} as ComponentMeta<typeof TabMenu>;

const tabs = [
  {
    id: '1',
    content: 'Option 1',
    icon: <MinusCircleOutline />,
  },
  {
    id: '2',
    content: 'Option 22',
  },
  {
    id: '3',
    content: 'Option 333',
    badge: 5,
  },
  {
    id: '4',
    content: 'Option 4444',
  },
  {
    id: '5',
    content: 'Option 55555',
    badge: 4,
    icon: <MinusCircleOutline />,
  },
  {
    id: '6',
    content: 'Option 666666',
  },
  {
    id: '7',
    content: 'Option 7777777',
  },
  {
    id: '8',
    content: 'Option 88888888',
  },
  {
    id: '9',
    content: 'Option 999999999',
  },
];

const disabledTabs = [
  {
    id: '1',
    content: 'Option 1',
  },
  {
    id: '2',
    content: 'Option 22',
  },
  {
    id: '3',
    content: 'Option 333',
    disabled: true,
  },
  {
    id: '4',
    content: 'Option 4444',
  },
  {
    id: '5',
    content: 'Option 55555',
    icon: <MinusCircleOutline />,
    disabled: true,
  },
  {
    id: '6',
    content: 'Option 666666',
  },
  {
    id: '7',
    content: 'Option 77',
    badge: 5,
    disabled: true,
  },
];

const overflowTabs = [
  {
    id: '1',
    content: 'Option 1',
    icon: <MinusCircleOutline />,
  },
  {
    id: '2',
    content: 'Option 22',
  },
  {
    id: '3',
    content: 'Option 333',
    badge: 5,
  },
  {
    id: '4',
    content: 'Option 4444',
  },
  {
    id: '5',
    content: 'Option 55555',
    badge: 4,
    icon: <MinusCircleOutline />,
  },
  {
    id: '6',
    content: 'Option 666666',
  },
  {
    id: '7',
    content: 'Option 7777777',
  },
  {
    id: '8',
    content: 'Option 88888888',
  },
  {
    id: '9',
    content: 'Option 999999999',
  },
];

const onChangeTab = (id: string) => {
  console.log(`selected: ${id}`);
};

const Template1: ComponentStory<typeof TabMenu> = (args) => {
  const [selected, setSelected] = React.useState<string>('3');

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <TabMenu
        {...args}
        activeTab={selected}
        onChange={(id) => {
          onChangeTab(id);
          setSelected(id);
        }}
        tabs={tabs}
      />
    </ThemeProvider>
  );
};

const Template2: ComponentStory<typeof TabMenu> = (args) => {
  const [selected, setSelected] = React.useState<string>('3');
  return (
    <>
      <TabMenu
        {...args}
        activeTab={selected}
        onChange={(id) => {
          setSelected(id);
        }}
        tabs={tabs}
        underline
      />
    </>
  );
};

const Template3: ComponentStory<typeof TabMenu> = (args) => {
  const [selected, setSelected] = React.useState<string>('2');
  return (
    <>
      <TabMenu
        {...args}
        activeTab={selected}
        onChange={(id) => {
          setSelected(id);
        }}
        tabs={disabledTabs}
      />
    </>
  );
};

const Template4: ComponentStory<typeof TabMenu> = (args) => {
  const [selected, setSelected] = React.useState<string>('3');
  return (
    <>
      <div style={{ display: 'flex', width: '500px' }}>
        <TabMenu
          {...args}
          activeTab={selected}
          onChange={(id) => {
            setSelected(id);
          }}
          tabs={overflowTabs}
        />
      </div>
    </>
  );
};

export const TabMenuBase = Template1.bind({});
TabMenuBase.args = {};
TabMenuBase.storyName = 'TabMenu. Базовый пример.';

export const TabMenuUnderline = Template2.bind({});
TabMenuUnderline.args = {};
TabMenuUnderline.storyName = 'TabMenu. Пример с нижней серой полосой.';

export const TabMenuDisabled = Template3.bind({});
TabMenuDisabled.args = {};
TabMenuDisabled.storyName = 'TabMenu. Пример с задизейбленными табами.';

export const TabMenuTooltip = Template4.bind({});
TabMenuTooltip.args = {};
TabMenuTooltip.storyName = 'TabMenu. Пример с OverflowMenu.';
