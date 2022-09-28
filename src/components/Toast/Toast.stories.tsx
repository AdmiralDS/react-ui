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
      control: {
        type: 'radio',
        options: ['Border radius 0', 'Border radius 2', 'Border radius 4', 'Border radius 8'],
      },
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

const NotificationEmitter = () => {
  const { addToast } = useToast();
  const customItem = random(0, 3);
  return <Button onClick={() => addToast(items[customItem])}>Добавить сообщение</Button>;
};

export const ToastNotification = Temp1.bind({});
ToastNotification.storyName = 'Нотификация настройка места всплытия через стили.';

export const ToastNotificationBase = Temp2.bind({});
ToastNotificationBase.storyName = 'Всплывающая нотификация. Базовый пример.';
