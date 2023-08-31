import * as React from 'react';
import { Drawer, Button } from '@admiral-ds/react-ui';
import type { DrawerProps, Theme } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';

export const DrawerCustomContentTemplate = (args: DrawerProps) => {
  const [opened, setOpened] = React.useState(false);

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <Button onClick={() => setOpened(true)}>Open drawer with custom content</Button>
      <Drawer {...args} isOpen={opened} onClose={() => setOpened(false)} aria-labelledby="drawer-title">
        <h1 id="drawer-title" style={{ paddingLeft: '24px' }}>
          <strong>Drawer title</strong>
        </h1>
        <i style={{ padding: '0 24px', height: '100%' }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
          quam quasi quod ut veritatis?
        </i>
        <div
          style={{
            marginTop: '40px',
            width: '80%',
            display: 'flex',
            justifyContent: 'space-around',
            alignSelf: 'flex-end',
            padding: '0 24px',
          }}
        >
          <Button appearance="primary" dimension="m" onClick={() => setOpened(false)}>
            First button
          </Button>
          <Button appearance="primary" dimension="m" onClick={() => setOpened(false)}>
            Second button
          </Button>
          <Button appearance="primary" dimension="m" onClick={() => setOpened(false)}>
            Third button
          </Button>
        </div>
      </Drawer>
    </ThemeProvider>
  );
};
