import * as React from 'react';
import { Modal, ModalTitle, ModalContent, Button } from '@admiral-ds/react-ui';
import type { ModalProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ThemeProvider, css } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const overlayStyles = css`
  background-color: #ffdddd66;
`;

export const ModalCustomOverlayTemplate = ({
  themeBorderKind,
  ...props
}: ModalProps & { themeBorderKind?: BorderRadiusType }) => {
  const [opened, setOpened] = React.useState(false);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind)}>
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
