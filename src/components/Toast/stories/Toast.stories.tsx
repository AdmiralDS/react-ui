import styled from 'styled-components';
import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import LinkTo from '@storybook/addon-links/react';

import { Toast, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';
import type { ToastProps } from '@admiral-ds/react-ui';

import { ToastNotificationTemplate } from './ToastNotification.template';
import { ToastNotificationBaseTemplate } from './ToastNotificationBase.template';
import { ToastLineNotificationTemplate } from './ToastLineNotification.template';
import { ToastCustomComponentTemplate } from './ToastCustomComponent.template';
import { ToastProgressComponentTemplate } from './ToastProgressComponent.template';
import { ToastBackwardCompatibilityTemplate } from './ToastBackwardCompatibility.template';

// Imports of text sources
import ToastNotificationRaw from './ToastNotification.template?raw';
import ToastNotificationBaseRaw from './ToastNotificationBase.template?raw';
import ToastLineNotificationRaw from './ToastLineNotification.template?raw';
import ToastCustomComponentRaw from './ToastCustomComponent.template?raw';
import ToastProgressComponentRaw from './ToastProgressComponent.template?raw';
import ToastBackwardCompatibilityRaw from './ToastBackwardCompatibility.template?raw';

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
    Компонент служит для демонстрации выплывающих сообщений. В качестве таких уведомлений рекомендуется
    использовать&nbsp;
    <LinkTo kind="Admiral-2.1/NotificationItem" story="static-notification-item-base-status">
      NotificationItem
    </LinkTo>
    .
    <Separator />
    Компонент Toast необходимо оборачивать в ToastProvider для управления состоянием всплывающих нотификаций. Через
    значение autoDeleteTime в ToastProvider можно задать в ms время, по истечению которого нотификация скроется. Если
    данный параметр не задан, то следует дать возможность закрывать уведомление по нажатию иконки закрытия (при
    использовании NotificationItem выставить isClosable и передать в onClose removeToastItem).
  </Desc>
);

export default {
  title: 'Admiral-2.1/Toast',
  decorators: undefined,
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
} as Meta<typeof Toast>;

//<editor-fold desc="Toast. Настройка места всплытия через стили.">
const ToastNotificationStory: StoryFn<typeof Toast> = (props: ToastProps) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <ToastNotificationTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const ToastNotification = {
  render: ToastNotificationStory,

  parameters: {
    docs: {
      source: {
        code: ToastNotificationRaw,
      },
    },
  },

  name: 'Toast. Настройка места всплытия через стили.',
};

//</editor-fold>

//<editor-fold desc="Toast. Базовый пример.">
const ToastNotificationBaseStory: StoryFn<typeof Toast> = (props: ToastProps) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <ToastNotificationBaseTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const ToastNotificationBase = {
  render: ToastNotificationBaseStory,

  parameters: {
    docs: {
      source: {
        code: ToastNotificationBaseRaw,
      },
    },
  },

  name: 'Toast. Базовый пример.',
};

//</editor-fold>

//<editor-fold desc="Line Notification.">
const ToastLineNotificationStory: StoryFn<typeof Toast> = (props: ToastProps) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <ToastLineNotificationTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const ToastLineNotification = {
  render: ToastLineNotificationStory,

  parameters: {
    docs: {
      source: {
        code: ToastLineNotificationRaw,
      },
    },
  },

  name: 'Line Notification.',
};

//</editor-fold>

//<editor-fold desc="'Toast. Custom component.">
const ToastCustomComponentStory: StoryFn<typeof Toast> = (props: ToastProps) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <ToastCustomComponentTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const ToastCustomComponent = {
  render: ToastCustomComponentStory,

  parameters: {
    docs: {
      source: {
        code: ToastCustomComponentRaw,
      },
    },
  },

  name: 'Toast. Custom component.',
};

//</editor-fold>

//<editor-fold desc="Toast. Custom component with Progress.">
const ToastProgressComponentStory: StoryFn<typeof Toast> = (props: ToastProps) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <ToastProgressComponentTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const ToastProgressComponent = {
  render: ToastProgressComponentStory,

  parameters: {
    docs: {
      source: {
        code: ToastProgressComponentRaw,
      },
    },
  },

  name: 'Toast. Custom component with Progress.',
};

//</editor-fold>

//<editor-fold desc="Toast. Backward compatibility.">
const ToastBackwardCompatibilityStory: StoryFn<typeof Toast> = (props: ToastProps) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <ToastBackwardCompatibilityTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const ToastBackwardCompatibility = {
  render: ToastBackwardCompatibilityStory,

  parameters: {
    docs: {
      source: {
        code: ToastBackwardCompatibilityRaw,
      },
    },
  },

  name: 'Toast. Backward compatibility.',
};
