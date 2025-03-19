import * as React from 'react';
import {
  Modal,
  ModalTitle,
  ModalContent,
  ModalButtonPanel,
  Button,
  CheckboxField,
  TextArea,
} from '@admiral-ds/react-ui';
import type { ModalProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

export const ModalScrollTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: ModalProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [opened, setOpened] = React.useState(false);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <Button onClick={() => setOpened(true)}>Open modal with scrollable content</Button>
      {opened && (
        <Modal
          {...props}
          onClose={() => {
            setOpened(false);
          }}
          aria-labelledby="modal-title"
          style={{ maxHeight: '90vh' }} // IE bug https://github.com/philipwalton/flexbugs#flexbug-3
        >
          <ModalTitle id="modal-title">Modal title</ModalTitle>
          <ModalContent>
            <CheckboxField>Lorem ipsum dolor</CheckboxField>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate
            ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam
            quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus
            nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam
            quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus
            nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam
            quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus
            nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur
            <TextArea defaultValue={TEXT} />
            adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam
            quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus
            nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam
            quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus
            nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam
            quasi quod ut veritatis?
          </ModalContent>
          <ModalButtonPanel>
            <Button appearance="primary" dimension="m" onClick={() => setOpened(false)}>
              Yes button
            </Button>
            <Button appearance="secondary" dimension="m" onClick={() => setOpened(false)}>
              No button
            </Button>
          </ModalButtonPanel>
        </Modal>
      )}
    </ThemeProvider>
  );
};

const TEXT = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate
ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur
adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem
ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam
quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus
nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur
adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem
ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam
quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus
nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur
adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem
ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam
quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus
nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur
<TextArea></TextArea>
adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem
ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam
quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus
nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur
adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem
ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam
quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus
nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur
adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem
ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam
quasi quod ut veritatis?`;
