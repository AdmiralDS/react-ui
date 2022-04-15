import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { useDarkMode } from 'storybook-dark-mode';
import { Notification } from '#src/components-ver2/Notification';
import { DARK_THEME, LIGHT_THEME } from '#src/components-ver2/themes';

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
const href = 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A26531';

export default {
  title: 'Admiral-2.1/Notification',
  decorators: [withDesign],
  component: Notification,
  parameters: {
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
    status: {
      defaultValue: 'info',
    },
    title: {
      type: 'string',
      defaultValue: title,
    },
    linkText: {
      type: 'string',
      defaultValue: linkText,
    },
    href: {
      type: 'string',
      defaultValue: href,
    },
    displayStatusIcon: {
      type: 'boolean',
      defaultValue: true,
    },
    isClosable: {
      type: 'boolean',
      defaultValue: true,
    },
    onClose: {
      action: 'clicked',
    },
  },
} as ComponentMeta<typeof Notification>;

const Template1: ComponentStory<typeof Notification> = (args) => {
  return (
    <ThemeProvider theme={useDarkMode() ? DARK_THEME : LIGHT_THEME}>
      <Notification {...args}>{body}</Notification>
    </ThemeProvider>
  );
};

const Template2: ComponentStory<typeof Notification> = (args) => {
  return (
    <ThemeProvider theme={useDarkMode() ? DARK_THEME : LIGHT_THEME}>
      <Layout>
        <Notification {...args} status="info" title={title}>
          {body}
        </Notification>
      </Layout>
      <Layout>
        <Notification {...args} status="warning" title={title}>
          {body}
        </Notification>
      </Layout>
      <Layout>
        <Notification {...args} status="error" title={title}>
          {body}
        </Notification>
      </Layout>
      <Layout>
        <Notification {...args} status="success" title={title}>
          {body}
        </Notification>
      </Layout>
    </ThemeProvider>
  );
};

export const StaticNotificationBase = Template1.bind({});
StaticNotificationBase.storyName = 'Статическая нотификация. Базовый пример.';

export const StaticNotificationBaseStatus = Template2.bind({});
StaticNotificationBaseStatus.storyName = 'Статусы статических нотификаций';
