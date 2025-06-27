import * as React from 'react';
import { Drawer, DrawerTitle, DrawerContent, DrawerButtonPanel, Button, T } from '@admiral-ds/react-ui';
import type { DrawerProps, BorderRadiusType } from '@admiral-ds/react-ui';
import styled, { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const ContentArea = styled.div`
  display: flex;
  height: 100%;
  background: var(--admiral-color-Success_Success20, ${(p) => p.theme.color['Success/Success 20']});
`;
const Separator = styled.div`
  height: 8px;
`;

export const DrawerMobileTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: DrawerProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [opened, setOpened] = React.useState(false);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Адаптируясь на мобильных устройствах, компонент имеет несколько иную структуру, отступы и размеры. На мобильных
        устройствах компонент всегда появляется с правой стороны экрана. Заполняет весь экран по ширине, кроме
        стандартного отступа для контента с левой стороны.
        <Separator />
        Для того чтобы перевести компонент в адаптивный режим, используйте параметр mobile.
      </T>
      <Button onClick={() => setOpened(true)}>Open mobile drawer</Button>
      <Drawer
        {...props}
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
