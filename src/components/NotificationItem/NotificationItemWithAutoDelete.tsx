import * as React from 'react';

export interface NotificationItemWithAutoDeleteProps {
  onRemoveNotification: () => void;
  autoDeleteTime?: number;
}

export const NotificationItemWithAutoDelete = ({
  children,
  onRemoveNotification,
  autoDeleteTime,
}: React.PropsWithChildren<NotificationItemWithAutoDeleteProps>) => {
  React.useEffect(() => {
    if (!autoDeleteTime) return;

    const timerId = setTimeout(() => onRemoveNotification(), autoDeleteTime);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return <>{children}</>;
};
