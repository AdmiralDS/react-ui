import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Notification } from '#src/components/Notification';
import type { Theme } from '#src/components/themes';
import { ALL_BORDER_RADIUS_VALUES } from '#src/components/themes/borderRadius';

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
    title: title,
    linkText: linkText,
    href: href,
    displayStatusIcon: true,
    isClosable: true,
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

const Template3: ComponentStory<typeof Notification> = (args) => {
  const [tik, setTick] = React.useState(100);

  React.useEffect(() => {
    const counter = () => setTick((prev) => prev - 3);
    const timerId = setTimeout(counter, 300);
    if (tik == 0) {
      clearTimeout(timerId);
    }
    return () => {
      clearTimeout(timerId);
    };
  }, [tik]);

  return (
    <>
      <Layout>
        <Notification {...args} percent={args.percent || tik} status="info" title={title}>
          {body}
        </Notification>
      </Layout>
      <Layout>
        <Notification {...args} percent={args.percent || tik} status="warning" title={title}>
          {body}
        </Notification>
      </Layout>
      <Layout>
        <Notification {...args} percent={args.percent || tik} status="error" title={title}>
          {body}
        </Notification>
      </Layout>
      <Layout>
        <Notification {...args} percent={args.percent || tik} status="success" title={title}>
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

export const StaticNotificationBaseProgress = Template3.bind({});
StaticNotificationBaseProgress.storyName = 'Статические нотификации с прогрессом';
