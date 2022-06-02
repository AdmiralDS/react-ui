import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Notification } from '#src/components/Notification';
import { Theme } from '#src/components/themes';

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
    themeBorderKind: {
      control: {
        type: 'radio',
        options: ['Border radius 0', 'Border radius 2', 'Border radius 4', 'Border radius 8'],
      },
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
      <Notification {...args}>{body}</Notification>
    </ThemeProvider>
  );
};

const Template2: ComponentStory<typeof Notification> = (args) => {
  return (
    <>
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
    </>
  );
};

export const StaticNotificationBase = Template1.bind({});
StaticNotificationBase.storyName = 'Статическая нотификация. Базовый пример.';

export const StaticNotificationBaseStatus = Template2.bind({});
StaticNotificationBaseStatus.storyName = 'Статусы статических нотификаций';
