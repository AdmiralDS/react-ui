import * as React from 'react';
import { Drawer, DrawerTitle, DrawerContent, DrawerButtonPanel, Button, InputField, T } from '@admiral-ds/react-ui';
import type { DrawerProps, BorderRadiusType } from '@admiral-ds/react-ui';
import styled, { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const Separator = styled.div`
  height: 20px;
`;

type Props = {
  onYesClick: (p: { inputValue: string }) => void;
  onNoClick: () => void;
};

const DrawerForm = ({ onYesClick, onNoClick }: Props) => {
  const [inputValue, setInputValue] = React.useState('');

  return (
    <>
      <DrawerContent>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
        quam quasi quod ut veritatis?
        <Separator />
        <InputField
          label="Введите значение"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
      </DrawerContent>
      <DrawerButtonPanel>
        <Button appearance="primary" dimension="m" onClick={() => onYesClick({ inputValue })}>
          Yes button
        </Button>
        <Button appearance="secondary" dimension="m" onClick={onNoClick}>
          No button
        </Button>
      </DrawerButtonPanel>
    </>
  );
};

export const DrawerWithoutBackdropTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: DrawerProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [opened, setOpened] = React.useState(false);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Если необходим Drawer без блокировки контента страницы, то необходимо использовать параметр backdrop равный
        false. В этом случае пользователь сможет одновременно взаимодействовать и с Drawer, и с содержимым страницы.
        Закрытие Drawer может происходить по клику на крестик, по клику на кнопке в футере панели, по нажатию на клавишу
        Escape (при closeOnEscapeKeyDown = true).
      </T>
      <Button onClick={() => setOpened(true)}>Open drawer without backdrop</Button>
      <Drawer
        {...props}
        isOpen={opened}
        onClose={() => {
          setOpened(false);
        }}
        backdrop={false}
        closeOnEscapeKeyDown
        style={{ width: '480px' }}
        aria-labelledby="drawer-title"
      >
        <DrawerTitle id="drawer-title">Drawer title</DrawerTitle>
        <DrawerForm
          onYesClick={(p) => {
            // eslint-disable-next-line no-console
            console.log(`value ${p.inputValue}`);
            setOpened(false);
          }}
          onNoClick={() => setOpened(false)}
        />
      </Drawer>
    </ThemeProvider>
  );
};
