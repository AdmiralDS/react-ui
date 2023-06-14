import * as React from 'react';
import styled from 'styled-components';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
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

//<editor-fold desc="Toast. Настройка места всплытия через стили.">
const ToastNotificationStory: ComponentStory<typeof Toast> = (props: ToastProps) => {
  return <ToastNotificationTemplate {...cleanUpProps(props)} />;
};

export const ToastNotification = ToastNotificationStory.bind({});
ToastNotification.parameters = {
  docs: {
    source: {
      code: ToastNotificationRaw,
    },
  },
};
ToastNotification.storyName = 'Toast. Настройка места всплытия через стили.';
//</editor-fold>

//<editor-fold desc="Toast. Базовый пример.">
const ToastNotificationBaseStory: ComponentStory<typeof Toast> = (props: ToastProps) => {
  return <ToastNotificationBaseTemplate {...cleanUpProps(props)} />;
};

export const ToastNotificationBase = ToastNotificationBaseStory.bind({});
ToastNotificationBase.parameters = {
  docs: {
    source: {
      code: ToastNotificationBaseRaw,
    },
  },
};
ToastNotificationBase.storyName = 'Toast. Базовый пример.';
//</editor-fold>

//<editor-fold desc="Line Notification.">
const ToastLineNotificationStory: ComponentStory<typeof Toast> = (props: ToastProps) => {
  return <ToastLineNotificationTemplate {...cleanUpProps(props)} />;
};

export const ToastLineNotification = ToastLineNotificationStory.bind({});
ToastLineNotification.parameters = {
  docs: {
    source: {
      code: ToastLineNotificationRaw,
    },
  },
};
ToastLineNotification.storyName = 'Line Notification.';
//</editor-fold>

//<editor-fold desc="'Toast. Custom component.">
const ToastCustomComponentStory: ComponentStory<typeof Toast> = (props: ToastProps) => {
  return <ToastCustomComponentTemplate {...cleanUpProps(props)} />;
};

export const ToastCustomComponent = ToastCustomComponentStory.bind({});
ToastCustomComponent.parameters = {
  docs: {
    source: {
      code: ToastCustomComponentRaw,
    },
  },
};
ToastCustomComponent.storyName = 'Toast. Custom component.';
//</editor-fold>

//<editor-fold desc="Toast. Custom component with Progress.">
const ToastProgressComponentStory: ComponentStory<typeof Toast> = (props: ToastProps) => {
  return <ToastProgressComponentTemplate {...cleanUpProps(props)} />;
};

export const ToastProgressComponent = ToastProgressComponentStory.bind({});
ToastProgressComponent.parameters = {
  docs: {
    source: {
      code: ToastProgressComponentRaw,
    },
  },
};
ToastProgressComponent.storyName = 'Toast. Custom component with Progress.';
//</editor-fold>

//<editor-fold desc="Toast. Backward compatibility.">
const ToastBackwardCompatibilityStory: ComponentStory<typeof Toast> = (props: ToastProps) => {
  return <ToastBackwardCompatibilityTemplate {...cleanUpProps(props)} />;
};

export const ToastBackwardCompatibility = ToastBackwardCompatibilityStory.bind({});
ToastBackwardCompatibility.parameters = {
  docs: {
    source: {
      code: ToastBackwardCompatibilityRaw,
    },
  },
};
ToastBackwardCompatibility.storyName = 'Toast. Backward compatibility.';
//</editor-fold>
