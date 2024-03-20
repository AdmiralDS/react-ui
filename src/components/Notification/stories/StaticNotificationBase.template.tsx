import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { Notification } from '@admiral-ds/react-ui';
import type { NotificationProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const bodyDefault = 'Тут находится текст короткого оповещения';
const titleDefault = 'Заголовок оповещения';
const linkTextDefault = 'Link';
const hrefDefault = 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A26531';

export const StaticNotificationBaseTemplate = ({
  status = 'info',
  title = titleDefault,
  linkText = linkTextDefault,
  href = hrefDefault,
  displayStatusIcon = true,
  isClosable = true,
  themeBorderKind,
  CSSCustomProps,
  ...props
}: NotificationProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <Notification
        {...props}
        status={status}
        title={title}
        linkText={linkText}
        href={href}
        displayStatusIcon={displayStatusIcon}
        isClosable={isClosable}
      >
        {bodyDefault}
      </Notification>
    </ThemeProvider>
  );
};
