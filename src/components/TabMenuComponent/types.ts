import type { HTMLAttributes } from 'react';

export type TabDimension = 'l' | 'm';
export type VerticalUnderlinePosition = 'left' | 'right';

export interface TabProps extends HTMLAttributes<HTMLButtonElement> {
  /** ID вкладки */
  tabId?: string;
  /** Отключение вкладки */
  disabled?: boolean;
  /** Выбранная вкладка */
  selected?: boolean;
  /** Коллбэк при выборе вкладки */
  onSelectTab?: (tabId: string) => void;
  /** Размер вкладки */
  dimension?: TabDimension;
}

export interface IconTabProps extends Omit<TabProps, 'dimension'> {}
export interface HorizontalTabProps extends TabProps {}
export interface VerticalTabProps extends TabProps {
  width?: string | number;
}
