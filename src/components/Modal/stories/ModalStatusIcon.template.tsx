import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import {
  Modal,
  ModalTitle,
  ModalContent,
  ModalButtonPanel,
  Button,
  ModalStatusIcon,
  TooltipHoc,
  T,
} from '@admiral-ds/react-ui';
import type { ModalProps, BorderRadiusType, ModalStatusIconType } from '@admiral-ds/react-ui';
import { ReactComponent as InfoOutline } from '@admiral-ds/icons/build/service/InfoOutline.svg';
import { ReactComponent as CheckOutline } from '@admiral-ds/icons/build/service/CheckOutline.svg';
import { ReactComponent as CloseCircleOutline } from '@admiral-ds/icons/build/service/CloseCircleOutline.svg';
import { ReactComponent as ErrorOutline } from '@admiral-ds/icons/build/service/ErrorOutline.svg';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const TooltipedButton = TooltipHoc(Button);

export const ModalStatusIconTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: ModalProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [opened, setOpened] = React.useState(false);
  const [iconStatus, setIconStatus] = React.useState<ModalStatusIconType>('information');

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Используются в простых текстовых модальных окнах для оповещений пользователя о важных событиях. Статус
        модального окна может быть четырех типов: Success, Information, Danger, Warning.
      </T>
      <div style={{ display: 'flex', gap: '5px' }}>
        <TooltipedButton
          onClick={() => {
            setIconStatus('information');
            setOpened(true);
          }}
          iconStart={<InfoOutline />}
          displayAsSquare
          renderContent={() => 'Open modal with information status icon'}
          tooltipPosition={'bottom'}
        />
        <TooltipedButton
          onClick={() => {
            setIconStatus('success');
            setOpened(true);
          }}
          iconStart={<CheckOutline />}
          displayAsSquare
          renderContent={() => 'Open modal with success status icon'}
          tooltipPosition={'bottom'}
        />
        <TooltipedButton
          onClick={() => {
            setIconStatus('warning');
            setOpened(true);
          }}
          iconStart={<ErrorOutline />}
          displayAsSquare
          renderContent={() => 'Open modal with warning status icon'}
          tooltipPosition={'bottom'}
        />
        <TooltipedButton
          onClick={() => {
            setIconStatus('danger');
            setOpened(true);
          }}
          iconStart={<CloseCircleOutline />}
          displayAsSquare
          renderContent={() => 'Open modal with danger status icon'}
          tooltipPosition={'bottom'}
        />
      </div>
      {opened && (
        <Modal
          {...props}
          closeOnEscapeKeyDown
          closeOnOutsideClick
          onClose={() => {
            setOpened(false);
          }}
          aria-labelledby="modal-title"
        >
          <ModalStatusIcon status={iconStatus} />
          <ModalTitle id="modal-title">Modal title</ModalTitle>
          <ModalContent>
            Экстраполяция расширения Вселенной назад во времени приводит к точке космической сингулярности, вблизи
            которой ныне известные законы физики перестают работать. Время же расширения из этой космической
            сингулярности до современного состояния называют возрастом Вселенной; по различным данным, оно составляет
            приблизительно 14 млрд лет.
          </ModalContent>
          <ModalButtonPanel>
            <Button
              appearance="primary"
              dimension="m"
              onClick={() => {
                setOpened(false);
              }}
            >
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
