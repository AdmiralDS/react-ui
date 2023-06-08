import * as React from 'react';
import { Modal, ModalTitle, ModalContent, Button } from '@admiral-ds/react-ui';
import type { ModalProps, Theme } from '@admiral-ds/react-ui';
import { ThemeProvider, css } from 'styled-components';

const overlayStyles = css`
  background-color: ${({ theme }) => `${theme.color['Error/Error 20']}66`};
`;

export const ModalCustomOverlayTemplate = (args: ModalProps) => {
  const [opened, setOpened] = React.useState(false);

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <Button onClick={() => setOpened(true)}>Open modal with custom overlay</Button>
      {opened && (
        <Modal
          {...args}
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
