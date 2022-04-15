import { Button } from '#src/components/Button';
import { Toast, ToastProps, ToastProvider, useToast } from '#src/components/Toast';
import { IdentifyToast } from '#src/components/Toast/type';
import * as React from 'react';
import styled from 'styled-components';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

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
    id: '1234',
    status: 'error',
    children: `Запрос завершился ошибкой`,
    title: 'Заголовок 1234',
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
  title: 'Example/Toast',
  decorators: [withDesign],
  component: Toast,
  parameters: {
    componentSubtitle: <Description />,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/CC0WL5u9TPtZpyLbbAGFGt/Admiral-2.0-UI-Kit?node-id=37%3A27525',
    },
  },
  argTypes: {
    autoDeleteTime: {
      defaultValue: 3000,
    },
    position: {
      defaultValue: 'top-right',
    },
  },
} as ComponentMeta<typeof Toast>;

const Temp1: ComponentStory<typeof Toast> = (args: ToastProps) => {
  return (
    <ToastProvider autoDeleteTime={args.autoDeleteTime}>
      <NotificationEmitter />

      <Toast style={{ top: 128, left: 164 }} />
    </ToastProvider>
  );
};

const Temp2: ComponentStory<typeof Toast> = (args: ToastProps) => {
  return (
    <ToastProvider>
      <NotificationEmitter />

      <Toast position={args.position} />
    </ToastProvider>
  );
};

const NotificationEmitter = () => {
  const { addToast, clearToasts, removeToastById } = useToast();
  const customItem = random(0, 3);
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ marginRight: 15 }}>
        <Button onClick={() => addToast(items[customItem])}>Добавить сообщение</Button>
      </div>
      <div style={{ marginRight: 15 }}>
        <Button onClick={() => clearToasts()}>Удалить все нотификации</Button>
      </div>
      <div style={{ marginRight: 15 }}>
        <Button onClick={() => removeToastById('1234')}>Удалить нотификацию по id '1234'</Button>
      </div>
    </div>
  );
};

export const ToastNotification = Temp1.bind({});
ToastNotification.storyName = 'Нотификация настройка места всплытия через стили.';

export const ToastNotificationBase = Temp2.bind({});
ToastNotificationBase.storyName = 'Всплывающая нотификация. Базовый пример.';
