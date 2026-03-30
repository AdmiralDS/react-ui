import type { ReactNode } from 'react';

/**
 * - MenuItem: выбираемый пункт
 * - MenuGroup: разворачиваемая группа пунктов
 * - MenuDivider: разделитель
 */
export type SideMenuNode = SideMenuItemNode | SideMenuGroupNode | SideMenuDividerNode;

export interface SideMenuItemRenderProps {
  /** Уникальный идентификатор пункта меню  */
  id: string;
  /** Текстовая подпись пункта */
  label: string;
  /** Состояние disabled  */
  disabled?: boolean;
  /** Состояние selected - признак того, что данный пункт выбран  */
  selected?: boolean;
  /** Уровень вложенности (1 для корневых пунктов, 2 — внутри первой группы и т.д.) */
  level: number;
  icon?: ReactNode;
  badge?: ReactNode;
  tag?: ReactNode;
}

export interface SideMenuItemNode {
  type?: 'item';
  /** Уникальный идентификатор пункта меню  */
  id: string;
  /** Текстовая подпись пункта */
  label: string;
  /** Колбэк для кастомизации рендера пункта меню */
  render?: (props: SideMenuItemRenderProps) => React.ReactNode;
  icon?: ReactNode;
  badge?: ReactNode;
  tag?: ReactNode;
}

export interface SideMenuGroupNode {
  type: 'group';
  /** Уникальный идентификатор группы пунктов меню */
  id: string;
  /** Текстовая подпись группы */
  label: string;
  /** Вложенные пункты (MenuItem/MenuGroup/Divider) */
  children: SideMenuNode[];
  /** Колбэк для кастомизации рендера заголовка группы */
  render?: (props: SideMenuItemRenderProps) => React.ReactNode;
}

export interface SideMenuDividerNode {
  type: 'divider';
  /** Опциональная текстовая подпись */
  label?: string;
}

export type SearchFormat = 'word' | 'wholly';
export interface SideMenuProps {
  /** Массив с описанием дерева элементов меню */
  items: SideMenuNode[];
  /** id выбранного пункта (controlled mode) */
  selectedItem?: string;
  /** id пункта, который будет выбран по умолчанию (uncontrolled mode) */
  defaultSelectedItem?: string;
  /** Колбек при изменении выбранного пункта */
  onSelectItem?: (id: string) => void;
  /** Массив id открытых групп (controlled mode) */
  openMenus?: string[];
  /** Массив id открытых групп по умолчанию (uncontrolled mode) */
  defaultOpenMenus?: string[];
  /** Колбек при изменении openMenus (открытие/закрытие групп) */
  onOpenMenusChange?: (openIds: string[]) => void;
  /** Включает опцию фильтрации */
  search?: boolean;
  /** Данная опция позволяет при фильтрации искать по строке целиком или по отдельным словам */
  searchFormat?: SearchFormat;
  /** Позволяет фильтровать отображаемые пункты */
  onFilterItem?: (value: string, searchValue: string, searchFormat: SearchFormat) => boolean;
  /** Отступ слева между уровнями вложенности в пикселях
   * TODO: переместить внутрь компонента
   */
  indentPx?: number;
}
