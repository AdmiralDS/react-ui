import * as React from 'react';
import { Drawer, DrawerTitle, DrawerContent, DrawerButtonPanel, Button } from '@admiral-ds/react-ui';
import type { DrawerProps, Theme } from '@admiral-ds/react-ui';
import styled, { ThemeProvider } from 'styled-components';

const ContentArea = styled.div`
  display: flex;
  height: 100%;
  background: ${({ theme }) => theme.color['Success/Success 20']};
`;

export const DrawerMobileTemplate = (args: DrawerProps) => {
  const [opened, setOpened] = React.useState(false);

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <Button onClick={() => setOpened(true)}>Open mobile drawer</Button>
      <Drawer
        {...args}
        isOpen={opened}
        onClose={() => setOpened(false)}
        mobile
        closeOnEscapeKeyDown
        aria-labelledby="drawer-title"
      >
        <DrawerTitle id="drawer-title">Drawer title</DrawerTitle>
        <DrawerContent>
          <ContentArea />
        </DrawerContent>
        <DrawerButtonPanel>
          <Button appearance="primary" dimension="m" onClick={() => setOpened(false)}>
            Yes button
          </Button>
          <Button appearance="secondary" dimension="m" onClick={() => setOpened(false)}>
            No button
          </Button>
        </DrawerButtonPanel>
      </Drawer>
    </ThemeProvider>
  );
};
