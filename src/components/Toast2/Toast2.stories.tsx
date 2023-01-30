import * as React from 'react';
import { withDesign } from 'storybook-addon-designs';
import { ALL_BORDER_RADIUS_VALUES } from '#src/components/themes/borderRadius';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { ToastContainer2 } from '#src/components/Toast2/ToastContainer2';
import type { Theme } from '#src/components/themes';
import styled, { ThemeProvider } from 'styled-components';
import type { ToastItem2Props } from '#src/components/Toast2/ToastItem2';
import { ToastItem2 } from '#src/components/Toast2/ToastItem2';
import { Button } from '#src/components/Button';
import { ToastProvider2, useToast2 } from '#src/components/Toast2/ToastProvider2';
import type { NotificationStatus } from '#src/components/Notification';
import type { IdentifyToast } from '#src/components/Toast/type';

export default {
  title: 'Admiral-2.1/Toast2',
  decorators: [withDesign],
  component: ToastContainer2,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
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
  args: {
    autoDeleteTime: 3000,
    position: 'top-right',
  },
  argTypes: {
    autoDeleteTime: {
      type: 'number',
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof ToastContainer2>;

const notificationMessages = [
  {
    id: '1',
    text: 'InfoMessage',
  },
  {
    id: '2',
    text: 'SuccessMessage',
  },
  {
    id: '3',
    text: 'WarningMessage',
  },
  {
    id: '4',
    text: 'ErrorMessage',
  },
];

const Separator = styled.div`
  width: 20px;
  height: 20px;
`;

const NotificationEmitter = () => {
  const { addToast2, removeToast2, toasts2 } = useToast2();

  const [id, setId] = React.useState<number>(0);

  const onClickHandleAdd = () => {
    const toastId = id.toString();
    setId(id + 1);
    addToast2({ id: toastId });
  };

  const onClickHandleRemove = () => {
    removeToast2(toasts2[toasts2.length - 1].id);
  };

  return (
    <>
      <Button appearance="success" onClick={onClickHandleAdd}>
        Add
      </Button>
      <Separator />
      <Button disabled={toasts2.length === 0} appearance="danger" onClick={onClickHandleRemove}>
        Delete
      </Button>
    </>
  );
};

const toastStatus: NotificationStatus[] = ['info', 'error', 'success', 'warning'];

const Temp1: ComponentStory<typeof ToastContainer2> = (args) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  const renderToast = (item: ToastItem2Props) => {
    const type = parseInt(item.id) % 4;
    return (
      <ToastItem2 id={item.id} status={toastStatus[type]} isClosable={true} displayStatusIcon={true}>
        {notificationMessages[type].text}
      </ToastItem2>
    );
  };

  return (
    <ThemeProvider theme={swapBorder}>
      <ToastProvider2 autoDeleteTime2={3000} showProgress2 progressStep2={10}>
        <NotificationEmitter />
        <ToastContainer2 renderToast={renderToast} />
      </ToastProvider2>
    </ThemeProvider>
  );
};

const items: ToastItem2Props[] = [
  {
    id: '0',
    status: 'error',
    children: `Запрос завершился ошибкой`,
    title: 'Заголовок',
    isClosable: true,
    linkText: 'Link',
    displayStatusIcon: true,
  },
  {
    id: '1',
    status: 'warning',
    children: 'Слишком много попыток',
    title: 'Заголовок',
    isClosable: true,
    linkText: 'Link',
    displayStatusIcon: true,
  },
  {
    id: '2',
    status: 'info',
    children: 'Осталось 7 попыток',
    title: 'Заголовок',
    isClosable: true,
    linkText: 'Link',
    displayStatusIcon: true,
  },
  {
    id: '3',
    status: 'success',
    children: 'Запрос выполнен успешно',
    title: 'Заголовок',
    isClosable: true,
    linkText: 'Link',
    displayStatusIcon: true,
  },
];

const NotificationEmitter2 = () => {
  const { addToast2, removeToast2, toasts2 } = useToast2();

  const [id, setId] = React.useState<number>(0);

  const onClickHandleAdd = () => {
    const newToast = items[id % 4];
    addToast2(newToast);
    setId(id + 1);
  };

  const onClickHandleRemove = () => {
    removeToast2(toasts2[toasts2.length - 1].id);
  };

  return (
    <>
      <Button appearance="success" onClick={onClickHandleAdd}>
        Add
      </Button>
      <Separator />
      <Button disabled={toasts2.length === 0} appearance="danger" onClick={onClickHandleRemove}>
        Delete
      </Button>
    </>
  );
};

const Temp2: ComponentStory<typeof ToastContainer2> = (args) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  const renderToast = ({ id, children, ...props }: ToastItem2Props) => {
    return (
      <ToastItem2 id={id} {...props}>
        {children}
      </ToastItem2>
    );
  };

  return (
    <ThemeProvider theme={swapBorder}>
      <ToastProvider2 autoDeleteTime2={3000} showProgress2 progressStep2={10}>
        <NotificationEmitter2 />
        <ToastContainer2 renderToast={renderToast} />
      </ToastProvider2>
    </ThemeProvider>
  );
};

export const Toast2 = Temp1.bind({});
Toast2.storyName = 'Toast2';

export const Toast2_2 = Temp2.bind({});
Toast2_2.storyName = 'Toast2_2';
