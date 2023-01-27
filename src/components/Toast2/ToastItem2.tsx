import * as React from 'react';
import styled from 'styled-components';
import type { NotificationProps } from '#src/components/Notification';
import { Notification } from '#src/components/Notification';

const StyledNotification = styled(Notification)`
  ${(props) => props.theme.shadow['Shadow 08']}
`;
export const ToastItem2 = ({ children, ...props }: NotificationProps) => {
  return <StyledNotification {...props}>{children}</StyledNotification>;
};

export const InfoToastItem = ({ ...props }: NotificationProps) => {
  return <ToastItem2 {...props} status={'info'} />;
};

export const SuccessToastItem = ({ ...props }: NotificationProps) => {
  return <ToastItem2 {...props} status={'success'} />;
};

export const WarningToastItem = ({ ...props }: NotificationProps) => {
  return <ToastItem2 {...props} status={'warning'} />;
};

export const ErrorToastItem = ({ ...props }: NotificationProps) => {
  return <ToastItem2 {...props} status={'error'} />;
};
