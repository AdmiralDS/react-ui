import styled from 'styled-components';
import { Notification } from '@admiral-ds/react-ui';
import type { NotificationProps } from '@admiral-ds/react-ui';

const Layout = styled.div`
  margin: 20px;
`;

const bodyDefault = 'Тут находится текст короткого оповещения';
const titleDefault = 'Заголовок оповещения';
const linkTextDefault = 'Link';
const hrefDefault = 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A26531';

export const StaticNotificationBaseStatusTemplate = ({
  title = titleDefault,
  linkText = linkTextDefault,
  href = hrefDefault,
  displayStatusIcon = true,
  isClosable = true,
  ...props
}: NotificationProps) => {
  return (
    <>
      <Layout>
        <Notification
          {...props}
          status="info"
          title={title}
          linkText={linkText}
          href={href}
          displayStatusIcon={displayStatusIcon}
          isClosable={isClosable}
        >
          {bodyDefault}
        </Notification>
      </Layout>
      <Layout>
        <Notification
          {...props}
          status="warning"
          title={title}
          linkText={linkText}
          href={href}
          displayStatusIcon={displayStatusIcon}
          isClosable={isClosable}
        >
          {bodyDefault}
        </Notification>
      </Layout>
      <Layout>
        <Notification
          {...props}
          status="error"
          title={title}
          linkText={linkText}
          href={href}
          displayStatusIcon={displayStatusIcon}
          isClosable={isClosable}
        >
          {bodyDefault}
        </Notification>
      </Layout>
      <Layout>
        <Notification
          {...props}
          status="success"
          title={title}
          linkText={linkText}
          href={href}
          displayStatusIcon={displayStatusIcon}
          isClosable={isClosable}
        >
          {bodyDefault}
        </Notification>
      </Layout>
    </>
  );
};
