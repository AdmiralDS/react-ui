import * as React from 'react';
import { withDesign } from 'storybook-addon-designs';
import { ALL_BORDER_RADIUS_VALUES } from '#src/components/themes/borderRadius';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { Toast2Props } from '#src/components/Toast2/ToastContainer2';
import { ToastContainer2 } from '#src/components/Toast2/ToastContainer2';
import type { Theme } from '#src/components/themes';
import styled, { ThemeProvider } from 'styled-components';
import { ErrorToastItem, InfoToastItem, SuccessToastItem, WarningToastItem } from '#src/components/Toast2/ToastItem2';
import { Button } from '#src/components/Button';

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

const Temp1: ComponentStory<typeof ToastContainer2> = (args) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  const [toasts, setToasts] = React.useState<Toast2Props[]>([]);
  const [id, setId] = React.useState<number>(0);

  const renderToast = (id: string) => {
    const type = parseInt(id) % 4;
    switch (type) {
      case 1:
        return (
          <SuccessToastItem key={id} isClosable={true} displayStatusIcon={true} onClose={() => removeToast(id)}>
            {notificationMessages[1].text}
          </SuccessToastItem>
        );
      case 2:
        return (
          <WarningToastItem key={id} isClosable={true} displayStatusIcon={true} onClose={() => removeToast(id)}>
            {notificationMessages[2].text}
          </WarningToastItem>
        );
      case 3:
        return (
          <ErrorToastItem key={id} isClosable={true} displayStatusIcon={true} onClose={() => removeToast(id)}>
            {notificationMessages[3].text}
          </ErrorToastItem>
        );
      case 0:
      default:
        return (
          <InfoToastItem key={id} isClosable={true} displayStatusIcon={true} onClose={() => removeToast(id)}>
            {notificationMessages[0].text}
          </InfoToastItem>
        );
    }
  };

  const addToast = (id: string) => {
    const newToast = { id: id };
    setToasts((prevState) => [newToast, ...prevState]);
  };

  const removeToast = (id: string) => {
    setToasts((prevState) => prevState.filter((item) => item.id !== id));
  };

  const handleAddToast = () => {
    addToast(id.toString());
    setId(id + 1);
  };

  const handleRemoveToast = () => {
    removeToast(toasts[toasts.length - 1].id);
  };

  return (
    <ThemeProvider theme={swapBorder}>
      <Button appearance="success" onClick={handleAddToast}>
        Add
      </Button>
      <Separator />
      <Button appearance="danger" onClick={handleRemoveToast}>
        Delete
      </Button>
      <ToastContainer2 toasts={toasts} renderToast={renderToast} />
    </ThemeProvider>
  );
};

export const Toast2 = Temp1.bind({});
Toast2.storyName = 'Toast2';
