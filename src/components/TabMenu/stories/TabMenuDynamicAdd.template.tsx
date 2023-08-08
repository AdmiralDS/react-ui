import * as React from 'react';
import { TabMenu, Button } from '@admiral-ds/react-ui';
import type { TabMenuProps, Theme } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';

export const TabMenuDynamicAddTemplate = (args: TabMenuProps) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
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
        <TabMenu {...args} activeTab={activeTab} onChange={(id) => setActiveTav(id)} tabs={tabs} underline />
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
