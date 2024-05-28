import type { ReactNode } from 'react';

export interface TabProps {
  /** Контент вкладки */
  content: ReactNode;
  /** Отключение вкладки */
  disabled?: boolean;
  /** Выбранная вкладка */
  selected?: boolean;
}
