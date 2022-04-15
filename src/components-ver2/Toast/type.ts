import { NotificationProps } from '#src/components-ver2/Notification';

export type ID = number | string;

export interface IdentifyToast extends Omit<NotificationProps, 'id'> {
  id?: ID;
}
