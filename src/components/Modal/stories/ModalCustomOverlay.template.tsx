import * as React from 'react';
import { Modal, ModalTitle, ModalContent, Button, T } from '@admiral-ds/react-ui';
import type { ModalProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ThemeProvider, css } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const overlayStyles = css`
  background-color: #ffdddd66;
`;

export const ModalCustomOverlayTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: ModalProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [opened, setOpened] = React.useState(false);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        У пользователя есть возможность кастомизировать внешний вид подложки модального окна. Для этого можно
        воспользоваться параметром overlayStyledCss, чтобы задать миксин со стилями для подложки. Либо можно
        воспользоваться параметрами overlayClassName, overlayStyle.
      </T>
      <Button onClick={() => setOpened(true)}>Open modal with custom overlay</Button>
      {opened && (
        <Modal
          {...props}
          onClose={() => {
            setOpened(false);
          }}
          aria-labelledby="modal-title"
          overlayStyledCss={overlayStyles}
        >
          <ModalTitle id="modal-title">Modal title</ModalTitle>
          <ModalContent>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis?
          </ModalContent>
        </Modal>
      )}
    </ThemeProvider>
  );
};
