import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import {
  NotificationItem,
  NotificationItemButtonPanel,
  NotificationItemContent,
  NotificationItemTitle,
  TextButton,
} from '@admiral-ds/react-ui';
import type { NotificationItemProps, Theme, BorderRadiusType } from '@admiral-ds/react-ui';

const title = 'Заголовок оповещения';
const body = 'Тут находится текст короткого оповещения';
const linkText = 'Link';

export const NotificationItemBaseTemplate = ({
  status = 'info',
  displayStatusIcon = true,
  isClosable = true,
  themeBorderKind,
  ...props
}: NotificationItemProps & { themeBorderKind?: BorderRadiusType }) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <NotificationItem {...props} status={status} displayStatusIcon={displayStatusIcon} isClosable={isClosable}>
        <NotificationItemTitle>{title}</NotificationItemTitle>
        <NotificationItemContent>{body}</NotificationItemContent>
        <NotificationItemButtonPanel>
          <TextButton dimension="s" text={linkText} />
        </NotificationItemButtonPanel>
      </NotificationItem>
    </ThemeProvider>
  );
};
