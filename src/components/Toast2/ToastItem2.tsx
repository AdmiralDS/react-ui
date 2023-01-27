import * as React from 'react';
import styled from 'styled-components';
import type { NotificationProps } from '#src/components/Notification';
import { Notification } from '#src/components/Notification';

const StyledNotification = styled(Notification)`
  ${(props) => props.theme.shadow['Shadow 08']}
`;

export interface ToastItem2Props extends NotificationProps {
  autoDeleteTime?: number;
}

export const ToastItem2 = ({ children, onClose, autoDeleteTime, ...props }: ToastItem2Props) => {
  React.useEffect(() => {
    if (!autoDeleteTime) return;
    const timer = setTimeout(() => {
      onClose?.();
    }, autoDeleteTime);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <StyledNotification {...props} onClose={onClose}>
      {children}
    </StyledNotification>
  );
};

export const InfoToastItem = ({ ...props }: ToastItem2Props) => {
  return <ToastItem2 {...props} status={'info'} />;
};

export const SuccessToastItem = ({ ...props }: ToastItem2Props) => {
  return <ToastItem2 {...props} status={'success'} />;
};

export const WarningToastItem = ({ ...props }: ToastItem2Props) => {
  return <ToastItem2 {...props} status={'warning'} />;
};

export const ErrorToastItem = ({ ...props }: ToastItem2Props) => {
  return <ToastItem2 {...props} status={'error'} />;
};
