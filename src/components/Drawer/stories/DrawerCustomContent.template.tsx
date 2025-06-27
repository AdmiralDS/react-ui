import * as React from 'react';
import { Drawer, Button, CheckboxField, DrawerContent, T } from '@admiral-ds/react-ui';
import type { DrawerProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

export const DrawerCustomContentTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: DrawerProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [opened, setOpened] = React.useState(false);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Наполнение Drawer контентом полностью контролируется пользователем. Пользователь может разместить внутри Drawer
        любые свои компоненты, а также может воспользоваться вспомогательными компонентами DrawerTitle, DrawerContent,
        DrawerButtonPanel, экспортируемыми из библиотеки @admiral-ds/react-ui.
      </T>
      <Button onClick={() => setOpened(true)}>Open drawer with custom content</Button>
      <Drawer {...props} isOpen={opened} onClose={() => setOpened(false)} aria-labelledby="drawer-title">
        <h1 id="drawer-title" style={{ paddingLeft: '24px' }}>
          <strong>Drawer title</strong>
        </h1>
        <DrawerContent style={{ maxWidth: 550 }}>
          <CheckboxField>Lorem ipsum dolor</CheckboxField>
          <i style={{ padding: '0 24px', height: '100%' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis?
          </i>
          <i style={{ padding: '0 24px', height: '100%' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis?
          </i>
          <i style={{ padding: '0 24px', height: '100%' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis?
          </i>
          <i style={{ padding: '0 24px', height: '100%' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis?
          </i>
          <i style={{ padding: '0 24px', height: '100%' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis?
          </i>
          <i style={{ padding: '0 24px', height: '100%' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis?
          </i>
          <i style={{ padding: '0 24px', height: '100%' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis?
          </i>
          <i style={{ padding: '0 24px', height: '100%' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis?
          </i>
          <i style={{ padding: '0 24px', height: '100%' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis?
          </i>
          <i style={{ padding: '0 24px', height: '100%' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis?
          </i>
          <i style={{ padding: '0 24px', height: '100%' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis?
          </i>
          <i style={{ padding: '0 24px', height: '100%' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis?
          </i>
          <i style={{ padding: '0 24px', height: '100%' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis?
          </i>
          <i style={{ padding: '0 24px', height: '100%' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis?
          </i>
          <i style={{ padding: '0 24px', height: '100%' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis?
          </i>
          <i style={{ padding: '0 24px', height: '100%' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis?
          </i>
          <i style={{ padding: '0 24px', height: '100%' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis?
          </i>
        </DrawerContent>
        <div
          style={{
            marginTop: '8px',
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            gap: 24,
            alignSelf: 'flex-end',
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
