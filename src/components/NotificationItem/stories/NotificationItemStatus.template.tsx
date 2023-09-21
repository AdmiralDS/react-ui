import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import {
  NotificationItem,
  NotificationItemButtonPanel,
  NotificationItemContent,
  NotificationItemTitle,
  TextButton,
} from '@admiral-ds/react-ui';
import type { NotificationItemProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const Layout = styled.div`
  margin: 20px;
`;

const title = 'Заголовок оповещения';
const body = 'Тут находится текст короткого оповещения';
const linkText = 'Link';

export const NotificationItemStatusTemplate = ({
  displayStatusIcon = true,
  isClosable = true,
  themeBorderKind,
  ...props
}: NotificationItemProps & { themeBorderKind?: BorderRadiusType }) => {
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind)}>
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
