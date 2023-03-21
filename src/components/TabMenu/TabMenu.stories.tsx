import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { ReactComponent as MinusCircleOutline } from '@admiral-ds/icons/build/service/MinusCircleOutline.svg';
import type { TabMenuProps } from '#src/components/TabMenu';
import { TabMenu } from '#src/components/TabMenu';
import type { Theme } from '#src/components/themes';
import styled, { ThemeProvider } from 'styled-components';
import { ALL_BORDER_RADIUS_VALUES } from '#src/components/themes/borderRadius';
import { Button } from '#src/components/Button';

export default {
  title: 'Admiral-2.1/TabMenu',
  decorators: [withDesign],
  component: TabMenu,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
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
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
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

const Wrapper = styled.div`
  width: 100%;
  height: 900px;
`;

const Temp1 = (props: TabMenuProps) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (props as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }
  const [selected, setSelected] = React.useState<string>('3');

  return (
    <ThemeProvider theme={swapBorder}>
      <Wrapper>
        <TabMenu
          {...props}
          activeTab={selected}
          onChange={(id) => {
            onChangeTab(id);
            setSelected(id);
          }}
          tabs={tabs}
        />
      </Wrapper>
    </ThemeProvider>
  );
};
const Template1: ComponentStory<typeof TabMenu> = (args) => {
  return <Temp1 {...args} />;
};

const Temp2 = (props: TabMenuProps) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (props as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }
  const [selected, setSelected] = React.useState<string>('3');
  return (
    <ThemeProvider theme={swapBorder}>
      <TabMenu
        {...props}
        activeTab={selected}
        onChange={(id) => {
          setSelected(id);
        }}
        tabs={tabs}
        underline
      />
    </ThemeProvider>
  );
};
const Template2: ComponentStory<typeof TabMenu> = (args) => {
  return <Temp2 {...args} />;
};

const Temp3 = (props: TabMenuProps) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (props as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }
  const [selected, setSelected] = React.useState<string>('2');
  return (
    <ThemeProvider theme={swapBorder}>
      <TabMenu
        {...props}
        activeTab={selected}
        onChange={(id) => {
          setSelected(id);
        }}
        tabs={disabledTabs}
      />
    </ThemeProvider>
  );
};
const Template3: ComponentStory<typeof TabMenu> = (args) => {
  return <Temp3 {...args} />;
};

const Temp4 = (props: TabMenuProps) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (props as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }
  const [selected, setSelected] = React.useState<string>('3');
  return (
    <ThemeProvider theme={swapBorder}>
      <div style={{ display: 'flex', width: '500px' }}>
        <TabMenu
          {...props}
          activeTab={selected}
          onChange={(id) => {
            setSelected(id);
          }}
          tabs={overflowTabs}
        />
      </div>
    </ThemeProvider>
  );
};
const Template4: ComponentStory<typeof TabMenu> = (args) => {
  return <Temp4 {...args} />;
};

const Temp5 = (props: TabMenuProps) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (props as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }
  const [tabs, setTabs] = React.useState([
    {
      id: '1',
      content: 'Вкладка 1',
    },
    {
      id: '2',
      content: 'Вкладка 2',
    },
    {
      id: '3',
      content: 'Вкладка 3',
    },
  ]);
  const [activeTab, setActiveTav] = React.useState('1');

  return (
    <ThemeProvider theme={swapBorder}>
      <div>
        <TabMenu {...props} activeTab={activeTab} onChange={(id) => setActiveTav(id)} tabs={tabs} underline />
        <div style={{ height: '20px' }} />
        <Button
          onClick={() =>
            setTabs((prev) => {
              const id = (tabs.length + 1).toString();
              return [...prev, { id, content: `Вкладка ${id}` }];
            })
          }
        >
          Добавить вкладку
        </Button>
      </div>
    </ThemeProvider>
  );
};
const Template5: ComponentStory<typeof TabMenu> = (args) => {
  return <Temp5 {...args} />;
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

export const TabMenuDynamicAdd = Template5.bind({});
TabMenuDynamicAdd.args = {};
TabMenuDynamicAdd.storyName = 'TabMenu. Динамическое добавление вкладок';
