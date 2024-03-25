import * as React from 'react';
import styled from 'styled-components';
import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import { Notification, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { StaticNotificationBaseTemplate } from './StaticNotificationBase.template';
import { StaticNotificationBaseStatusTemplate } from './StaticNotificationBaseStatus.template';

// Imports of text sources
import StaticNotificationBaseRaw from './StaticNotificationBase.template?raw';
import StaticNotificationBaseStatusRaw from './StaticNotificationBaseStatus.template?raw';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Компонент служит для демонстрации статических нотификаций. Существует в четырех типа нотификаций: Информационное
    сообщение, предупреждение, ошибка и положительные действия. Применяется как самостоятельный элемент.
  </Desc>
);

export default {
  title: 'Deprecated/Notification (Deprecated используйте NotificationItem компонент)',
  decorators: undefined,
  component: Notification,
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
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A26531',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A27484',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A27651',
      },
    ],
  },
  argTypes: {
    title: {
      control: { type: 'text' },
    },
    linkText: {
      control: { type: 'text' },
    },
    href: {
      control: { type: 'text' },
    },
    displayStatusIcon: {
      type: 'boolean',
    },
    isClosable: {
      type: 'boolean',
    },
    onClose: {
      action: 'clicked',
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
  },
} as Meta<typeof Notification>;

//<editor-fold desc="Статическая нотификация. Базовый пример.">
const StaticNotificationBaseStory: StoryFn<typeof Notification> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <StaticNotificationBaseTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const StaticNotificationBase = {
  render: StaticNotificationBaseStory,

  parameters: {
    docs: {
      source: {
        code: StaticNotificationBaseRaw,
      },
    },
  },

  name: 'Статическая нотификация. Базовый пример.',
};

//</editor-fold>

//<editor-fold desc="Статусы статических нотификаций.">
const StaticNotificationBaseStatusStory: StoryFn<typeof Notification> = (props) => (
  <StaticNotificationBaseStatusTemplate {...props} />
);

export const StaticNotificationBaseStatus = {
  render: StaticNotificationBaseStatusStory,

  parameters: {
    docs: {
      source: {
        code: StaticNotificationBaseStatusRaw,
      },
    },
  },

  name: 'Статусы статических нотификаций',
};
