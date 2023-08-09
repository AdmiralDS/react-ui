import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import {
  Button,
  NotificationItemButtonPanel,
  NotificationItemContent,
  NotificationItemTitle,
  StyledNotificationItem,
  TextButton,
  TextInput,
  Toast,
  ToastProvider,
  useToast,
} from '@admiral-ds/react-ui';
import type { ID, Theme, ToastItemProps, ToastProps, BorderRadiusType } from '@admiral-ds/react-ui';

import { uid } from '#src/components/common/uid';

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  > * {
    flex: 1 1 auto;
  }
`;

const Separator = styled.div`
  height: 20px;
`;

const handleTextButtonClick = () => {
  console.log('TextButton click');
};

const MessageForm = () => {
  const [toastIdStack, setToastIdStack] = React.useState<Array<ToastItemProps>>([]);
  const [inputValue, setInputValue] = React.useState('Notification message');

  const { addToastItem, removeToastItem } = useToast();

  const onClickHandlerAdd = () => {
    const id = uid();
    const renderFunction = (id: ID) => {
      const handleCloseToast = () => {
        removeToastItem({ id, renderToast: renderFunction });
        console.log('Toast is closed');
        setToastIdStack((prevToastIdStack) => prevToastIdStack.filter((toast) => toast.id !== id));
      };
      return (
        <StyledNotificationItem isClosable={true} displayStatusIcon={true} onClose={handleCloseToast}>
          <NotificationItemTitle>Title</NotificationItemTitle>
          <NotificationItemContent>{inputValue}</NotificationItemContent>
          <NotificationItemButtonPanel>
            <TextButton dimension="s" text="TextButton1" onClick={handleTextButtonClick} />
            <TextButton dimension="s" text="TextButton2" onClick={handleTextButtonClick} />
          </NotificationItemButtonPanel>
        </StyledNotificationItem>
      );
    };
    addToastItem({ id, renderToast: renderFunction });
    setToastIdStack((prev) => [...prev, { id, renderToast: renderFunction }]);
  };
  const onClickHandlerRemove = () => {
    const newToastIdStack = [...toastIdStack];
    const removeToast = newToastIdStack.shift();
    setToastIdStack(newToastIdStack);
    if (removeToast) {
      removeToastItem(removeToast);
    }
  };

  return (
    <div style={{ width: '550px' }}>
      <TextInput value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <Separator />
      <Wrapper>
        <Button onClick={onClickHandlerAdd}>Добавить сообщение</Button>
        <Button disabled={toastIdStack.length === 0} onClick={onClickHandlerRemove}>
          Удалить первое сообщение
        </Button>
      </Wrapper>
    </div>
  );
};

export const ToastCustomComponentTemplate = (props: ToastProps & { themeBorderKind?: BorderRadiusType }) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = props.themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <ToastProvider>
        <MessageForm />
        <Toast position={props.position} />
      </ToastProvider>
    </ThemeProvider>
  );
};
