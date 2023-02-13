import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Button } from '#src/components/Button';
import type { ToastProps, ToastItemProps } from '#src/components/Toast';
import { Toast, ToastProvider, useToast } from '#src/components/Toast';
import type { IdentifyToast, ID } from '#src/components/Toast/type';
import type { Theme } from '#src/components/themes';
import { ALL_BORDER_RADIUS_VALUES } from '#src/components/themes/borderRadius';
import { TextInput } from '#src/components/input';
import { TextButton } from '#src/components/TextButton';
import type { NotificationItemStatus } from '#src/components/NotificationItem';
import {
  StyledNotificationItem,
  NotificationItemButtonPanel,
  NotificationItemContent,
  NotificationItemTitle,
} from '#src/components/NotificationItem';
import { uid } from '#src/components/common/uid';
import { DefaultToastItem, ToastItemWithAutoDelete, ToastItemWithProgress } from '#src/components/Toast/ToastItem';

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
  args: {
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
} as ComponentMeta<typeof Toast>;

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  > * {
    flex: 1 1 auto;
  }
`;

const NotificationEmitter = () => {
  const [toastStack, setToastStack] = React.useState<Array<ToastItemProps>>([]);

  const { addToastItem, removeToastItem, autoDeleteTime } = useToast();

  const onClickHandlerAdd = () => {
    const customItem = random(0, 3);
    const toast = items[customItem];
    const id = uid();
    const renderToast = (id: ID) => {
      const handleOnClose = () => {
        removeToastItem({ id, renderToast });
        console.log('Toast is closed');
        setToastStack((prevToastIdStack) => prevToastIdStack.filter((toast) => toast.renderToast !== renderToast));
      };

      return (
        <>
          {autoDeleteTime ? (
            <ToastItemWithAutoDelete onRemoveNotification={handleOnClose} autoDeleteTime={autoDeleteTime}>
              <DefaultToastItem {...toast} onClose={toast.onClose || handleOnClose} />
            </ToastItemWithAutoDelete>
          ) : (
            <DefaultToastItem {...toast} onClose={toast.onClose || handleOnClose} />
          )}
        </>
      );
    };
    addToastItem({ id, renderToast });
    setToastStack((prev) => [...prev, { id, renderToast }]);
  };
  const onClickHandlerRemove = () => {
    const newToastIdStack = [...toastStack];
    const toastToRemove = newToastIdStack.shift();
    setToastStack(newToastIdStack);
    if (toastToRemove) {
      removeToastItem(toastToRemove);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
      <Button onClick={onClickHandlerAdd}>Добавить сообщение</Button>
      <div style={{ width: 20 }} />
      <Button disabled={toastStack.length === 0} onClick={onClickHandlerRemove}>
        Удалить первое сообщение
      </Button>
    </div>
  );
};

const Template1 = (props: ToastProps) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (props as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <ToastProvider autoDeleteTime={props.autoDeleteTime}>
        <NotificationEmitter />
        <Toast style={{ top: 128, left: 64 }} />
      </ToastProvider>
    </ThemeProvider>
  );
};

const Temp1: ComponentStory<typeof Toast> = (args: ToastProps) => {
  return <Template1 {...args} />;
};

const Template2 = (props: ToastProps) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (props as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <ToastProvider autoDeleteTime={props.autoDeleteTime}>
        <NotificationEmitter />
        <Toast position={props.position} />
      </ToastProvider>
    </ThemeProvider>
  );
};

const Temp2: ComponentStory<typeof Toast> = (args: ToastProps) => {
  return <Template2 {...args} />;
};

const Template3 = (props: ToastProps) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (props as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <ToastProvider autoDeleteTime={props.autoDeleteTime}>
        <NotificationEmitter />
        <Toast style={{ top: 128, left: 64, width: 'initial' }} />
      </ToastProvider>
    </ThemeProvider>
  );
};

const Temp3: ComponentStory<typeof Toast> = (args: ToastProps) => {
  return <Template3 {...args} />;
};

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

const Template4 = (props: ToastProps) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (props as any).themeBorderKind || theme.shape.borderRadiusKind;
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

const Temp4: ComponentStory<typeof Toast> = (args: ToastProps) => {
  return <Template4 {...args} />;
};

const toastStatuses: NotificationItemStatus[] = ['info', 'error', 'success', 'warning'];

const MessageForm2 = () => {
  const [toastIdStack, setToastIdStack] = React.useState<Array<ToastItemProps>>([]);
  const [titleValue, setTitleValue] = React.useState('Toast title');
  const [contentValue, setContentValue] = React.useState('Toast content');
  const [textButton1Value, setTextButton1Value] = React.useState('TextButton1');
  const [textButton2Value, setTextButton2Value] = React.useState('TextButton2');
  const [toastStatus, setToastStatus] = React.useState(0);

  const { addToastItem, removeToastItem, autoDeleteTime } = useToast();

  const onClickHandlerAdd = () => {
    const id = uid();
    const renderFunction = (id: ID) => {
      const handleCloseToast = () => {
        removeToastItem({ id, renderToast: renderFunction });
        console.log('Toast is closed');
        setToastIdStack((prevToastIdStack) => prevToastIdStack.filter((toast) => toast.renderToast !== renderFunction));
      };

      return (
        <ToastItemWithProgress
          status={toastStatuses[toastStatus]}
          autoDeleteTime={autoDeleteTime}
          onRemoveNotification={handleCloseToast}
        >
          <StyledNotificationItem
            status={toastStatuses[toastStatus]}
            isClosable={true}
            displayStatusIcon={true}
            onClose={handleCloseToast}
          >
            <NotificationItemTitle>{titleValue}</NotificationItemTitle>
            <NotificationItemContent>{contentValue}</NotificationItemContent>
            <NotificationItemButtonPanel>
              <TextButton dimension="s" text={textButton1Value} onClick={handleTextButtonClick} />
              <TextButton dimension="s" text={textButton2Value} onClick={handleTextButtonClick} />
            </NotificationItemButtonPanel>
          </StyledNotificationItem>
        </ToastItemWithProgress>
      );
    };
    addToastItem({ id, renderToast: renderFunction });
    setToastIdStack((prev) => [...prev, { id, renderToast: renderFunction }]);
    setToastStatus((prevStatus) => (prevStatus + 1) % 4);
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
      <TextInput value={titleValue} onChange={(e) => setTitleValue(e.target.value)} />
      <Separator />
      <TextInput value={contentValue} onChange={(e) => setContentValue(e.target.value)} />
      <Separator />
      <Wrapper>
        <TextInput value={textButton1Value} onChange={(e) => setTextButton1Value(e.target.value)} />
        <TextInput value={textButton2Value} onChange={(e) => setTextButton2Value(e.target.value)} />
      </Wrapper>
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

const Template5 = (props: ToastProps) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (props as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <ToastProvider autoDeleteTime={5000}>
        <MessageForm2 />
        <Toast position={props.position} />
      </ToastProvider>
    </ThemeProvider>
  );
};

const Temp5: ComponentStory<typeof Toast> = (args: ToastProps) => {
  return <Template5 {...args} />;
};

export const ToastNotification = Temp1.bind({});
ToastNotification.storyName = 'Toast. Настройка места всплытия через стили.';

export const ToastNotificationBase = Temp2.bind({});
ToastNotificationBase.storyName = 'Toast. Базовый пример.';

export const ToastLineNotification = Temp3.bind({});
ToastLineNotification.storyName = 'Line Notification.';

export const ToastCustomComponent = Temp4.bind({});
ToastCustomComponent.storyName = 'Toast. Custom component.';

export const ToastProgressComponent = Temp5.bind({});
ToastProgressComponent.storyName = 'Toast. Custom component with Progress.';
