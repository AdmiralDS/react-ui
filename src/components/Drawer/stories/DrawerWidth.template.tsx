import * as React from 'react';
import { Drawer, DrawerTitle, DrawerContent, Button } from '@admiral-ds/react-ui';
import type { DrawerProps, Theme } from '@admiral-ds/react-ui';
import styled, { ThemeProvider } from 'styled-components';

const ContentArea = styled.div`
  display: flex;
  height: 100%;
  background: ${({ theme }) => theme.color['Success/Success 20']};
`;

export const DrawerWidthTemplate = (args: DrawerProps) => {
  const [opened, setOpened] = React.useState(false);

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <Button onClick={() => setOpened(true)}>Open drawer</Button>
      <Drawer
        {...args}
        isOpen={opened}
        onClose={() => setOpened(false)}
        closeOnBackdropClick
        closeOnEscapeKeyDown
        aria-labelledby="drawer-title"
      >
        <DrawerTitle id="drawer-title">Drawer title</DrawerTitle>
        <DrawerContent style={{ width: '500px' }}>
          <ContentArea />
        </DrawerContent>
      </Drawer>
    </ThemeProvider>
  );
};
