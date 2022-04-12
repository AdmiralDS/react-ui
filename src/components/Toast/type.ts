import { NotificationProps } from '#/components/Notification';

export type ID = number | string;

export interface IdentifyToast extends Omit<NotificationProps, 'id'> {
  id?: ID;
}
