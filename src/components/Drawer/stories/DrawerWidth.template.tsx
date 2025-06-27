import * as React from 'react';
import { Drawer, DrawerTitle, DrawerContent, Button, T } from '@admiral-ds/react-ui';
import type { DrawerProps, BorderRadiusType } from '@admiral-ds/react-ui';
import styled, { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const ContentArea = styled.div`
  display: flex;
  height: 100%;
  background: var(--admiral-color-Success_Success20, ${(p) => p.theme.color['Success/Success 20']});
`;

export const DrawerWidthTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: DrawerProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [opened, setOpened] = React.useState(false);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Ширина компонента задается пользователем. Drawer подстраивает свою ширину под ширину контента, либо пользователь
        может задать ширину компонента напрямую через параметры style или используя classname.
      </T>
      <Button onClick={() => setOpened(true)}>Open drawer</Button>
      <Drawer
        {...props}
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
