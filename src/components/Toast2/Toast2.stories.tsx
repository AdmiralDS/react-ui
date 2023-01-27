import * as React from 'react';
import { withDesign } from 'storybook-addon-designs';
import { ALL_BORDER_RADIUS_VALUES } from '#src/components/themes/borderRadius';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { Toast2Props } from '#src/components/Toast2/ToastContainer2';
import { ToastContainer2 } from '#src/components/Toast2/ToastContainer2';
import type { Theme } from '#src/components/themes';
import styled, { ThemeProvider } from 'styled-components';
import { ToastItem2 } from '#src/components/Toast2/ToastItem2';
import { Button } from '#src/components/Button';
import { ToastProvider2, useToast2 } from '#src/components/Toast2/ToastProvider2';
import type { NotificationStatus } from '#src/components/Notification';

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
    addToast2(toastId);
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

  const renderToast = (id: string) => {
    const type = parseInt(id) % 4;
    return (
      <ToastItem2 id={id} status={toastStatus[type]} isClosable={true} displayStatusIcon={true}>
        {notificationMessages[type].text}
      </ToastItem2>
    );
  };

  return (
    <ThemeProvider theme={swapBorder}>
      <ToastProvider2 showProgress2={true} autoDeleteTime2={5000}>
        <NotificationEmitter />
        <ToastContainer2 renderToast={renderToast} />
      </ToastProvider2>
    </ThemeProvider>
  );
};

export const Toast2 = Temp1.bind({});
Toast2.storyName = 'Toast2';
