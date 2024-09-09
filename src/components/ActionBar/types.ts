import type { HTMLAttributes, ReactNode } from 'react';
import type { MenuItemProps, RenderOptionProps } from '#src/components/Menu/MenuItem';

export type ActionBarDimension = 'xl' | 'l' | 'm' | 's';

export interface ActionBarItemProps {
  /** Уникальный ID элемента */
  itemId: string;
  /** Добавить разделитель после элемента */
  withDivider?: boolean;
}

export interface ActionBarProps extends HTMLAttributes<HTMLDivElement> {
  /** Размер компонента */
  dimension?: ActionBarDimension;
  /** Рендер-функция для отрисовки кнопки */
  renderActionBarItem: (itemId: string) => ReactNode;
  /** Рендер-функция для отрисовки элемента выпадающего списка */
  renderDropMenuItem: (itemId: string) => ((options: RenderOptionProps) => ReactNode) | ReactNode;
  /** Массив элементов */
  items: ActionBarItemProps[];
  /** Коллбэк для определения, является ли элемент disabled */
  itemIsDisabled: (itemId: string) => boolean;
}
export interface ActionBarDividerProps extends HTMLAttributes<HTMLDivElement> {
  /** Размер компонента */
  dimension?: ActionBarDimension;
}

export interface ActionBarDropMenuItemProps extends Omit<MenuItemProps, 'dimension'> {
  /** Размер компонента */
  dimension?: ActionBarDimension;
}
