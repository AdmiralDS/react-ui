import type { HTMLAttributes, ReactNode } from 'react';
import type { RenderOptionProps } from "@admiral-ds/react-ui";

export type TabDimension = 'l' | 'm';
export type VerticalUnderlinePosition = 'left' | 'right';

export type TabWidthMapProps = {
  tabId: string;
  width: number;
};

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

export interface TabMenuBaseProps {
  /** Показывать серую полосу снизу */
  showUnderline?: boolean;
  /** ID выбранной вкладки */
  selectedTabId?: string;
  /** ID выбранной по умолчанию вкладки */
  defaultSelectedTabId?: string;
  /** Коллбэк на изменение выбранной вкладки */
  onSelectTab?: (tabId: string) => void;
  /** Массив из уникальных ID вкладок */
  tabsId: string[];
  /** Рендер-функция для отрисовки вкладки */
  renderTab: (tabId: string, selected: boolean, onSelectTab?: (tabId: string) => void) => ReactNode;
  /** Коллбэк для определения, является ли вкладка disabled */
  tabIsDisabled: (tabId: string) => boolean;
}

export interface TabMenuIconProps extends TabMenuBaseProps {
  /** Шаг прокрутки при нажатии кнопок вправо/влево */
  scrollStep?: number;
}

export interface TabMenuHorizontalMobileProps extends TabMenuBaseProps {}

export interface TabMenuHorizontalProps extends TabMenuBaseProps {
  /** Размер компонента */
  dimension?: TabDimension;
  /** Рендер-функция для отрисовки элемента выпадающего списка */
  renderDropMenuItem: (tabId: string) => ((options: RenderOptionProps) => ReactNode) | ReactNode;
}

export interface TabMenuVerticalProps extends TabMenuBaseProps {
  /** Размер компонента */
  dimension?: TabDimension;
  /** Позиция серой полосы */
  underlinePosition?: VerticalUnderlinePosition;
  /** Рендер-функция для отрисовки элемента выпадающего списка */
  renderDropMenuItem: (tabId: string) => ((options: RenderOptionProps) => ReactNode) | ReactNode;
}
