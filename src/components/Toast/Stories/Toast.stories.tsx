import * as React from 'react';
import styled from 'styled-components';
import type { Meta, StoryFn } from '@storybook/react';
import LinkTo from '@storybook/addon-links/react';

import { Toast, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';
import type { ToastProps } from '@admiral-ds/react-ui';

import {
  ToastBackwardCompatibilityTemplate,
  ToastCustomComponentTemplate,
  ToastLineNotificationTemplate,
  ToastNotificationBaseTemplate,
  ToastNotificationTemplate,
  ToastProgressComponentTemplate,
} from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import ToastNotificationRaw from '!!raw-loader!./Templates/ToastNotification';
import ToastNotificationBaseRaw from '!!raw-loader!./Templates/ToastNotificationBase';
import ToastLineNotificationRaw from '!!raw-loader!./Templates/ToastLineNotification';
import ToastCustomComponentRaw from '!!raw-loader!./Templates/ToastCustomComponent';
import ToastProgressComponentRaw from '!!raw-loader!./Templates/ToastProgressComponent';
import ToastBackwardCompatibilityRaw from '!!raw-loader!./Templates/ToastBackwardCompatibility';

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
  return <ToastNotificationTemplate {...cleanUpProps(props)} />;
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
  return <ToastNotificationBaseTemplate {...cleanUpProps(props)} />;
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
  return <ToastLineNotificationTemplate {...cleanUpProps(props)} />;
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
  return <ToastCustomComponentTemplate {...cleanUpProps(props)} />;
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
  return <ToastProgressComponentTemplate {...cleanUpProps(props)} />;
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
  return <ToastBackwardCompatibilityTemplate {...cleanUpProps(props)} />;
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
