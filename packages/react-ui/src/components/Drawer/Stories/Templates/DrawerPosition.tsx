import * as React from 'react';
import { Drawer, DrawerTitle, DrawerContent, Button } from '@admiral-ds/react-ui';
import type { DrawerProps, Theme } from '@admiral-ds/react-ui';
import { ReactComponent as ArrowLeftOutline } from '@admiral-ds/icons/build/system/ArrowLeftOutline.svg';
import { ReactComponent as ArrowRightOutline } from '@admiral-ds/icons/build/system/ArrowRightOutline.svg';
import styled, { ThemeProvider } from 'styled-components';

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ContentArea = styled.div`
  display: flex;
  height: 100%;
  background: ${({ theme }) => theme.color['Success/Success 20']};
`;

export const DrawerPositionTemplate = (args: DrawerProps) => {
  const [opened, setOpened] = React.useState(false);
  const [position, setPosition] = React.useState<DrawerProps['position']>('right');

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <ButtonWrapper>
        <Button
          onClick={() => {
            setPosition('left');
            setOpened(true);
          }}
        >
          <ArrowLeftOutline />
          Open drawer with 'left' position
        </Button>
        <Button
          onClick={() => {
            setPosition('right');
            setOpened(true);
          }}
        >
          Open drawer with 'right' position
          <ArrowRightOutline />
        </Button>
      </ButtonWrapper>
      <Drawer
        {...args}
        isOpen={opened}
        onClose={() => {
          setOpened(false);
        }}
        position={position}
        closeOnBackdropClick
        closeOnEscapeKeyDown
        style={{ width: '480px' }}
        aria-labelledby="drawer-title"
      >
        <DrawerTitle id="drawer-title">Drawer title</DrawerTitle>
        <DrawerContent>
          <ContentArea />
        </DrawerContent>
      </Drawer>
    </ThemeProvider>
  );
};
