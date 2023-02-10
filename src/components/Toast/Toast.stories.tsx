import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Button } from '#src/components/Button';
import type { ToastProps, RenderToastProviderItem } from '#src/components/Toast';
import { Toast, ToastProvider, useToast } from '#src/components/Toast';
import type { IdentifyToast, ID } from '#src/components/Toast/type';
import type { Theme } from '#src/components/themes';
import { ALL_BORDER_RADIUS_VALUES } from '#src/components/themes/borderRadius';
import { TextInput } from '#src/components/input';
import { TextButton } from '#src/components/TextButton';
import {
  NotificationItem,
  NotificationItemButtonPanel,
  NotificationItemContent,
  NotificationItemTitle,
} from '#src/components/NotificationItem';
import { uid } from '#src/components/common/uid';
import type { NotificationStatus } from '#src/components/Notification';
import { mediumGroupBorderRadius } from '#src/components/themes';
import { NotificationItemWithProgress } from '#src/components/NotificationItem/NotificationItemWithProgress';

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
} as ComponentMeta<typeof Toast>;

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

const StyledNotificationItem = styled(NotificationItem)`
  ${(props) => props.theme.shadow['Shadow 08']}
`;

const handleTextButtonClick = () => {
  console.log('TextButton click');
};

const MessageForm = () => {
  const [toastIdStack, setToastIdStack] = React.useState<Array<RenderToastProviderItem>>([]);
  const [inputValue, setInputValue] = React.useState('Notification message');

  const { addRenderToast, removeRenderToast } = useToast();

  const onClickHandlerAdd = () => {
    const id = uid();
    const renderFunction = (id: ID) => {
      const handleCloseToast = () => {
        removeRenderToast({ id, renderToast: renderFunction });
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
    addRenderToast({ id, renderToast: renderFunction });
    setToastIdStack((prev) => [...prev, { id, renderToast: renderFunction }]);
  };
  const onClickHandlerRemove = () => {
    const newToastIdStack = [...toastIdStack];
    const removeToast = newToastIdStack.shift();
    setToastIdStack(newToastIdStack);
    if (removeToast) {
      removeRenderToast(removeToast);
    }
  };

  return (
    <>
      <TextInput value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <Separator />
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <Button onClick={onClickHandlerAdd}>Добавить сообщение</Button>
        <div style={{ width: 20 }} />
        <Button disabled={toastIdStack.length === 0} onClick={onClickHandlerRemove}>
          Удалить первое сообщение
        </Button>
      </div>
    </>
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

const Progress = styled.div.attrs((props: { percent: number }) => ({
  style: { width: `${props.percent}%` },
}))<{ percent: number; status?: NotificationStatus; duration: number }>`
  position: absolute;
  bottom: 0;
  left: 0;
  background: ${({ theme, status }) => {
    if (status === 'warning') return theme.color['Warning/Warning 50 Main'];
    if (status === 'error') return theme.color['Error/Error 60 Main'];
    if (status === 'success') return theme.color['Success/Success 50 Main'];
    return theme.color['Primary/Primary 60 Main'];
  }};
  height: 4px;
  transition: ${({ duration }) => `all ${duration}ms linear`};
`;

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: ${(p) => mediumGroupBorderRadius(p.theme.shape)};
`;

const MessageForm2 = () => {
  const [toastIdStack, setToastIdStack] = React.useState<Array<RenderToastProviderItem>>([]);
  const [inputValue, setInputValue] = React.useState('Notification message');

  const { addRenderToast, removeRenderToast, autoDeleteTime } = useToast();

  const onClickHandlerAdd = () => {
    const id = uid();
    const renderFunction = (id: ID) => {
      const handleCloseToast = () => {
        removeRenderToast({ id, renderToast: renderFunction });
        console.log('Toast is closed');
        setToastIdStack((prevToastIdStack) => prevToastIdStack.filter((toast) => toast.id !== id));
      };

      return (
        <NotificationItemWithProgress autoDeleteTime={autoDeleteTime} onRemoveNotification={handleCloseToast}>
          <StyledNotificationItem isClosable={true} displayStatusIcon={true} onClose={handleCloseToast}>
            <NotificationItemTitle>Title</NotificationItemTitle>
            <NotificationItemContent>{inputValue}</NotificationItemContent>
            <NotificationItemButtonPanel>
              <TextButton dimension="s" text="TextButton1" onClick={handleTextButtonClick} />
              <TextButton dimension="s" text="TextButton2" onClick={handleTextButtonClick} />
            </NotificationItemButtonPanel>
          </StyledNotificationItem>
        </NotificationItemWithProgress>
      );
    };
    addRenderToast({ id, renderToast: renderFunction });
    setToastIdStack((prev) => [...prev, { id, renderToast: renderFunction }]);
  };
  const onClickHandlerRemove = () => {
    const newToastIdStack = [...toastIdStack];
    const removeToast = newToastIdStack.shift();
    setToastIdStack(newToastIdStack);
    if (removeToast) {
      removeRenderToast(removeToast);
    }
  };

  return (
    <>
      <TextInput value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <Separator />
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <Button onClick={onClickHandlerAdd}>Добавить сообщение</Button>
        <div style={{ width: 20 }} />
        <Button disabled={toastIdStack.length === 0} onClick={onClickHandlerRemove}>
          Удалить первое сообщение
        </Button>
      </div>
    </>
  );
};

const Template5 = (props: ToastProps) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (props as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <ToastProvider autoDeleteTime={3000}>
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
ToastNotification.storyName = 'Нотификация настройка места всплытия через стили.';

export const ToastNotificationBase = Temp2.bind({});
ToastNotificationBase.storyName = 'Всплывающая нотификация. Базовый пример.';

export const ToastLineNotification = Temp3.bind({});
ToastLineNotification.storyName = 'Всплывающая нотификация. Line Notification.';

export const ToastCustomComponent = Temp4.bind({});
ToastCustomComponent.storyName = 'Всплывающая нотификация. Custom component.';

export const ToastProgressComponent = Temp5.bind({});
ToastProgressComponent.storyName = 'Всплывающая нотификация. Custom component with Progress.';
