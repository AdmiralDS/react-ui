import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { Button, Toast, ToastProvider, useToast } from '@admiral-ds/react-ui';
import type { IdentifyToast, ToastProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const random = (min: number, max: number) => min + Number(Math.round(Math.random() * (max - min)));

const items: IdentifyToast[] = [
  {
    status: 'error',
    children: `Запрос завершился ошибкой`,
    title: 'Заголовок',
    isClosable: true,
    linkText: 'Link',
    displayStatusIcon: true,
  },
  {
    status: 'warning',
    children: 'Слишком много попыток',
    title: 'Заголовок',
    isClosable: true,
    linkText: 'Link',
    displayStatusIcon: true,
  },
  {
    status: 'info',
    children: 'Осталось 7 попыток',
    title: 'Заголовок',
    isClosable: true,
    linkText: 'Link',
    displayStatusIcon: true,
  },
  {
    status: 'success',
    children: 'Запрос выполнен успешно',
    title: 'Заголовок',
    isClosable: true,
    linkText: 'Link',
    displayStatusIcon: true,
  },
];

const NotificationEmitter = () => {
  const [toastIdStack, setToastIdStack] = useState<Array<string>>([]);

  const { addToast, removeById } = useToast();

  const onClickHandlerAdd = () => {
    const customItem = random(0, 3);
    const toast = items[customItem];
    const toastId = addToast(toast);
    setToastIdStack((prev) => [...prev, toastId]);
  };
  const onClickHandlerRemove = () => {
    const newToastIdStack = [...toastIdStack];
    const toastId = newToastIdStack.shift();
    setToastIdStack(newToastIdStack);
    if (toastId) {
      removeById(toastId);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
      <Button onClick={onClickHandlerAdd}>Добавить сообщение</Button>
      <div style={{ width: 20 }} />
      <Button disabled={toastIdStack.length === 0} onClick={onClickHandlerRemove}>
        Удалить первое сообщение
      </Button>
    </div>
  );
};

export const ToastBackwardCompatibilityTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: ToastProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <ToastProvider autoDeleteTime={props.autoDeleteTime}>
        <NotificationEmitter />
        <Toast position={props.position} />
      </ToastProvider>
    </ThemeProvider>
  );
};
