import * as React from 'react';
import { withDesign } from 'storybook-addon-designs';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import styled, { ThemeProvider } from 'styled-components';
import type { Theme } from '#src/components/themes';
import { ALL_BORDER_RADIUS_VALUES } from '#src/components/themes/borderRadius';
import { Button } from '#src/components/Button';
import { TextInput } from '#src/components/input';
import { Notification } from '#src/components/Notification';
import { ToastContainer2 } from '#src/components/Toast2/ToastContainer2';
import { ToastProvider2, useToast2 } from '#src/components/Toast2/ToastProvider2';

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

const Separator = styled.div`
  width: 20px;
  height: 20px;
`;

const StyledNotification = styled(Notification)`
  ${(props) => props.theme.shadow['Shadow 08']}
`;

const MessageForm = () => {
  const { addToast2, removeToast2, toasts2 } = useToast2();

  const [inputValue, setInputValue] = React.useState('');
  const [toastIdList, setToastIdList] = React.useState<string[]>([]);

  const onClickHandleAdd = () => {
    const id = addToast2(() => {
      const handleCloseToast = () => {
        removeToast2(id);
        console.log('Toast is closed');
      };
      return (
        <StyledNotification isClosable={true} displayStatusIcon={true} onClose={handleCloseToast}>
          <span style={{ color: 'red' }}>{inputValue}</span>
        </StyledNotification>
      );
    });
    setToastIdList((prevToastIdList) => [id, ...prevToastIdList]);
  };

  const onClickHandleRemove = () => {
    const newToastIdList = [...toastIdList];
    const lastToast = newToastIdList.pop();
    if (lastToast) {
      removeToast2(lastToast);
    }
    setToastIdList(newToastIdList);
  };

  return (
    <>
      <TextInput value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <Separator />
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

const Temp1: ComponentStory<typeof ToastContainer2> = (args) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <ToastProvider2 autoDeleteTime2={3000} showProgress2 progressStep2={10}>
        <MessageForm />
        <ToastContainer2 />
      </ToastProvider2>
    </ThemeProvider>
  );
};

export const Toast2 = Temp1.bind({});
Toast2.storyName = 'Toast2';
