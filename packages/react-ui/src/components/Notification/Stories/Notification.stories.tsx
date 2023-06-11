import * as React from 'react';
import styled from 'styled-components';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import { Notification, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { StaticNotificationBaseTemplate, StaticNotificationBaseStatusTemplate } from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import StaticNotificationBaseRaw from '!!raw-loader!./Templates/StaticNotificationBase';
import StaticNotificationBaseStatusRaw from '!!raw-loader!./Templates/StaticNotificationBaseStatus';

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
  decorators: [withDesign],
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
      type: 'string',
    },
    linkText: {
      type: 'string',
    },
    href: {
      type: 'string',
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
} as ComponentMeta<typeof Notification>;

//<editor-fold desc="Статическая нотификация. Базовый пример.">
const StaticNotificationBaseStory: ComponentStory<typeof Notification> = (props) => (
  <StaticNotificationBaseTemplate {...cleanUpProps(props)} />
);

export const StaticNotificationBase = StaticNotificationBaseStory.bind({});
StaticNotificationBase.parameters = {
  docs: {
    source: {
      code: StaticNotificationBaseRaw,
    },
  },
};
StaticNotificationBase.storyName = 'Статическая нотификация. Базовый пример.';
//</editor-fold>

//<editor-fold desc="Статусы статических нотификаций.">
const StaticNotificationBaseStatusStory: ComponentStory<typeof Notification> = (props) => (
  <StaticNotificationBaseStatusTemplate {...cleanUpProps(props)} />
);

export const StaticNotificationBaseStatus = StaticNotificationBaseStatusStory.bind({});
StaticNotificationBaseStatus.parameters = {
  docs: {
    source: {
      code: StaticNotificationBaseStatusRaw,
    },
  },
};
StaticNotificationBaseStatus.storyName = 'Статусы статических нотификаций';
//</editor-fold>
