import { ThemeProvider } from 'styled-components';

import {
  NotificationItem,
  NotificationItemButtonPanel,
  NotificationItemContent,
  NotificationItemTitle,
  TextButton,
} from '@admiral-ds/react-ui';
import type { NotificationItemProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const title = 'Заголовок оповещения';
const body = 'Тут находится текст короткого оповещения';
const linkText = 'Text Button';

export const NotificationItemBaseTemplate = ({
  status,
  displayStatusIcon,
  isClosable,
  themeBorderKind,
  CSSCustomProps,
  ...props
}: NotificationItemProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
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
