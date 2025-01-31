import type { HTMLAttributes, ReactNode } from 'react';
import type { DropMenuComponentProps, DropMenuStyleProps } from '#src/components/DropMenu';
import type { RenderOptionProps } from '#src/components/Menu/MenuItem';

export type TabDimension = 'l' | 'm';
export type VerticalUnderlinePosition = 'left' | 'right';

export type TabWidthMapProps = {
  tabId: string;
  width: number;
};

export interface BaseTabProps extends HTMLAttributes<HTMLButtonElement> {
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

export interface IconTabProps extends Omit<BaseTabProps, 'dimension'> {}
export interface HorizontalTabProps extends BaseTabProps {
  /** Скрыть обводку выбранной вкладки */
  hideBorder?: boolean;
}
export interface VerticalTabProps extends BaseTabProps {
  /** Ширина вкладки */
  width?: string | number;
}

interface TabMenuBaseProps extends HTMLAttributes<HTMLDivElement> {
  /** Показывать серую полосу снизу */
  showUnderline?: boolean;
  /** Скрыть обводку выбранной вкладки */
  hideBorder?: boolean;
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
interface TabMenuWithOverflowProps
  extends Omit<DropMenuComponentProps, 'onSelectItem' | 'targetElement'>,
    DropMenuStyleProps {
  /** Размер компонента */
  dimension?: TabDimension;
  /** Рендер-функция для отрисовки элемента выпадающего списка */
  renderDropMenuItem: (tabId: string) => ((options: RenderOptionProps) => ReactNode) | ReactNode;
}
interface TabMenuWithAddTabButtonProps {
  onAddTab?: () => void;
}

export interface TabMenuIconProps extends TabMenuBaseProps {
  /** Шаг прокрутки при нажатии кнопок вправо/влево */
  scrollStep?: number;
}

export interface HorizontalTabsProps extends TabMenuBaseProps {
  /** Размер компонента */
  dimension?: TabDimension;
}

export interface TabMenuHorizontalProps
  extends TabMenuBaseProps,
    TabMenuWithOverflowProps,
    TabMenuWithAddTabButtonProps {}

export interface TabMenuVerticalProps extends TabMenuBaseProps, TabMenuWithOverflowProps, TabMenuWithAddTabButtonProps {
  /** Позиция серой полосы - справа/слева */
  underlinePosition?: VerticalUnderlinePosition;
}

export interface CardTabMenuHorizontalProps extends TabMenuHorizontalProps {}
