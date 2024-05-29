import type { HTMLAttributes, ReactNode, RefObject } from 'react';

export interface TabProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'content'> {
  /** Контент вкладки */
  content?: ReactNode;
  /** Отключение вкладки */
  disabled?: boolean;
  /** Выбранная вкладка */
  selected?: boolean;
  ref?: RefObject<HTMLButtonElement>;
}
