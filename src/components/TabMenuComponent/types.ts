import type { HTMLAttributes } from 'react';

export interface TabProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'content'> {
  /** Отключение вкладки */
  disabled?: boolean;
  /** Выбранная вкладка */
  selected?: boolean;
}
