import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import {
  Notification,
  NotificationButtonPanel,
  NotificationContent,
  NotificationTitle,
} from '#src/components/Notification';
import type { Theme } from '#src/components/themes';
import { ALL_BORDER_RADIUS_VALUES } from '#src/components/themes/borderRadius';
import { TextButton } from '#src/components/TextButton';

const Layout = styled.div`
  margin: 20px;
`;
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

const title = 'Заголовок оповещения';
const body = 'Тут находится текст короткого оповещения';
const linkText = 'Link';

export default {
  title: 'Admiral-2.1/Notification',
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
  args: {
    status: 'info',
    displayStatusIcon: true,
    isClosable: true,
  },
  argTypes: {
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

const Template1: ComponentStory<typeof Notification> = (args) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <Notification {...args}>
        <NotificationTitle>{title}</NotificationTitle>
        <NotificationContent>{body}</NotificationContent>
        <NotificationButtonPanel>
          <TextButton dimension="s" text={linkText} />
        </NotificationButtonPanel>
      </Notification>
    </ThemeProvider>
  );
};

const Template2: ComponentStory<typeof Notification> = (args) => {
  return (
    <>
      <Layout>
        <Notification {...args} status="info">
          <NotificationTitle>{title}</NotificationTitle>
          <NotificationContent>{body}</NotificationContent>
          <NotificationButtonPanel>
            <TextButton dimension="s" text={linkText} />
          </NotificationButtonPanel>
        </Notification>
      </Layout>
      <Layout>
        <Notification {...args} status="warning">
          <NotificationTitle>{title}</NotificationTitle>
          <NotificationContent>{body}</NotificationContent>
          <NotificationButtonPanel>
            <TextButton dimension="s" text={linkText} />
          </NotificationButtonPanel>
        </Notification>
      </Layout>
      <Layout>
        <Notification {...args} status="error">
          <NotificationTitle>{title}</NotificationTitle>
          <NotificationContent>{body}</NotificationContent>
          <NotificationButtonPanel>
            <TextButton dimension="s" text={linkText} />
          </NotificationButtonPanel>
        </Notification>
      </Layout>
      <Layout>
        <Notification {...args} status="success">
          <NotificationTitle>{title}</NotificationTitle>
          <NotificationContent>{body}</NotificationContent>
          <NotificationButtonPanel>
            <TextButton dimension="s" text={linkText} />
          </NotificationButtonPanel>
        </Notification>
      </Layout>
    </>
  );
};

export const StaticNotificationBase = Template1.bind({});
StaticNotificationBase.storyName = 'Статическая нотификация. Базовый пример.';

export const StaticNotificationBaseStatus = Template2.bind({});
StaticNotificationBaseStatus.storyName = 'Статусы статических нотификаций';
