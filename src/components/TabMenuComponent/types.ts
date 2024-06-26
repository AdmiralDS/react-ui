import type { HTMLAttributes } from 'react';

export type TabDimension = 'l' | 'm';
export type VerticalUnderlinePosition = 'left' | 'right';

export interface TabProps extends HTMLAttributes<HTMLButtonElement> {
  /** Отключение вкладки */
  disabled?: boolean;
  /** Выбранная вкладка */
  selected?: boolean;
  /** Размер вкладки */
  dimension?: TabDimension;
}

export interface IconTabProps extends Omit<TabProps, 'dimension'> {}
export interface HorizontalTabProps extends TabProps {}
export interface VerticalTabProps extends TabProps {
  width?: string | number;
}
