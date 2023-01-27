import * as React from 'react';
import styled from 'styled-components';
import type { NotificationProps } from '#src/components/Notification';
import { Notification } from '#src/components/Notification';
import { useToast2 } from '#src/components/Toast2/ToastProvider2';

const StyledNotification = styled(Notification)`
  ${(props) => props.theme.shadow['Shadow 08']}
`;

export interface ToastItem2Props extends NotificationProps {
  id: string;
}

export const ToastItem2 = ({ children, ...props }: ToastItem2Props) => {
  const { removeToast2, autoDeleteTime2 } = useToast2();

  React.useEffect(() => {
    if (!autoDeleteTime2) return;
    const timer = setTimeout(() => {
      removeToast2(props.id);
    }, autoDeleteTime2);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <StyledNotification {...props} onClose={() => removeToast2(props.id)}>
      {children}
    </StyledNotification>
  );
};
