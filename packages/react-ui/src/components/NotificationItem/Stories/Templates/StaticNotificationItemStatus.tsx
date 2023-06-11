import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import {
  NotificationItem,
  NotificationItemButtonPanel,
  NotificationItemContent,
  NotificationItemTitle,
  TextButton,
} from '@admiral-ds/react-ui';
import type { NotificationItemProps, Theme } from '@admiral-ds/react-ui';

const Layout = styled.div`
  margin: 20px;
`;

const title = 'Заголовок оповещения';
const body = 'Тут находится текст короткого оповещения';
const linkText = 'Link';

export const StaticNotificationItemStatusTemplate = ({
  displayStatusIcon = true,
  isClosable = true,
  ...props
}: NotificationItemProps) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (props as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <Layout>
        <NotificationItem {...props} status="info" displayStatusIcon={displayStatusIcon} isClosable={isClosable}>
          <NotificationItemTitle>{title}</NotificationItemTitle>
          <NotificationItemContent>{body}</NotificationItemContent>
          <NotificationItemButtonPanel>
            <TextButton dimension="s" text={linkText} />
          </NotificationItemButtonPanel>
        </NotificationItem>
      </Layout>
      <Layout>
        <NotificationItem {...props} status="warning" displayStatusIcon={displayStatusIcon} isClosable={isClosable}>
          <NotificationItemTitle>{title}</NotificationItemTitle>
          <NotificationItemContent>{body}</NotificationItemContent>
          <NotificationItemButtonPanel>
            <TextButton dimension="s" text={linkText} />
          </NotificationItemButtonPanel>
        </NotificationItem>
      </Layout>
      <Layout>
        <NotificationItem {...props} status="error" displayStatusIcon={displayStatusIcon} isClosable={isClosable}>
          <NotificationItemTitle>{title}</NotificationItemTitle>
          <NotificationItemContent>{body}</NotificationItemContent>
          <NotificationItemButtonPanel>
            <TextButton dimension="s" text={linkText} />
          </NotificationItemButtonPanel>
        </NotificationItem>
      </Layout>
      <Layout>
        <NotificationItem {...props} status="success" displayStatusIcon={displayStatusIcon} isClosable={isClosable}>
          <NotificationItemTitle>{title}</NotificationItemTitle>
          <NotificationItemContent>{body}</NotificationItemContent>
          <NotificationItemButtonPanel>
            <TextButton dimension="s" text={linkText} />
          </NotificationItemButtonPanel>
        </NotificationItem>
      </Layout>
    </ThemeProvider>
  );
};
