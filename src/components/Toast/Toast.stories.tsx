import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Button } from '#src/components/Button';
import { Toast, ToastProps, ToastProvider, useToast } from '#src/components/Toast';
import { IdentifyToast } from '#src/components/Toast/type';
import { Theme } from '#src/components/themes';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Separator = styled.div`
  height: 20px;
`;

const Description = () => (
  <Desc>
    Компонент служит для демонстрации выплывающих нотификаций. Существует четыре типа нотификаций: Информационное
    сообщение, предупреждение, ошибка и положительные действия. Применяется как самостоятельный элемент.
    <Separator />
    Компонент Toast необходимо оборачивать в ToastProvider для управления состоянием всплывающих нотификаций. Через
    значение autoDeleteTime в ToastProvider можно задать в ms время, по истечению которого нотификация скроется.
  </Desc>
);

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

const random = (min: number, max: number) => min + Number(Math.round(Math.random() * (max - min)));

export default {
  title: 'Admiral-2.1/Toast',
  decorators: [withDesign],
  component: Toast,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    componentSubtitle: <Description />,
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A27014',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A27525',
      },
    ],
  },
  argTypes: {
    autoDeleteTime: {
      defaultValue: 3000,
      type: 'number',
    },
    position: {
      defaultValue: 'top-right',
    },
    themeBorderKind: {
      options: ['Border radius 0', 'Border radius 2', 'Border radius 4', 'Border radius 8'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Toast>;

const Temp1: ComponentStory<typeof Toast> = (args: ToastProps) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <ToastProvider autoDeleteTime={args.autoDeleteTime}>
        <NotificationEmitter />
        <Toast style={{ top: 128, left: 64 }} />
      </ToastProvider>
    </ThemeProvider>
  );
};

const Temp2: ComponentStory<typeof Toast> = (args: ToastProps) => {
  return (
    <>
      <ToastProvider autoDeleteTime={args.autoDeleteTime}>
        <NotificationEmitter />
        <Toast position={args.position} />
      </ToastProvider>
    </>
  );
};

const Temp3: ComponentStory<typeof Toast> = (args: ToastProps) => {
  return (
    <>
      <ToastProvider autoDeleteTime={args.autoDeleteTime}>
        <NotificationEmitter />
        <Toast style={{ top: 128, left: 64, width: 'initial' }} />
      </ToastProvider>
    </>
  );
};

const NotificationEmitter = () => {
  const [openToasts, setOpenToasts] = React.useState<Record<string, any>>({});
  const [toastIdStack, setToastIdStack] = React.useState<Array<string>>([]);

  const { addToast, removeById } = useToast();

  const onClickHandlerAdd = () => {
    const customItem = random(0, 3);
    const toast = items[customItem];
    const toastId = addToast(toast);
    setOpenToasts((prev) => ({ ...prev, [toastId]: toast }));
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

export const ToastNotification = Temp1.bind({});
ToastNotification.storyName = 'Нотификация настройка места всплытия через стили.';

export const ToastNotificationBase = Temp2.bind({});
ToastNotificationBase.storyName = 'Всплывающая нотификация. Базовый пример.';

export const ToastLineNotification = Temp3.bind({});
ToastLineNotification.storyName = 'Всплывающая нотификация. Line Notification.';
