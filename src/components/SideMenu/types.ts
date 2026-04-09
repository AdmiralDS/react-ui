import type { ReactNode } from 'react';
import type { Tag } from '../Tag';
import type { Badge } from '../Badge';
import type { css } from 'styled-components';

export type SideMenuDimension = 'm' | 'l';
export type SearchFormat = 'word' | 'wholly';
export type TypeLabel = 'header' | 'line';
type SideMenuTag = Omit<React.ComponentProps<typeof Tag>, 'dimension' | 'as'>;
type SideMenuBadge = Omit<React.ComponentProps<typeof Badge>, 'dimension'>;

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
  /** Состояние selected - признак того, что данный пункт выбран  */
  selected?: boolean;
  /** Уровень вложенности (1 для корневых пунктов, 2 — внутри первой группы и т.д.) */
  level: number;
  icon?: ReactNode;
  badge?: SideMenuBadge;
  tag?: SideMenuTag;
  /** Размер компонента */
  dimension?: SideMenuDimension;
  /** Формат label, по умолчанию line */
  typeLabel?: TypeLabel;
}

export interface SideMenuItemNode {
  type?: 'item';
  /** Уникальный идентификатор пункта меню  */
  id: string;
  /** Текстовая подпись пункта */
  label: string;
  icon?: ReactNode;
  badge?: SideMenuBadge;
  tag?: SideMenuTag;
  /** Колбэк кастомизации рендера контента пункта */
  renderItem?: (props: SideMenuItemRenderProps) => React.ReactNode;
  /** Формат label, по умолчанию line */
  typeLabel?: TypeLabel;
}

export interface SideMenuGroupNode {
  type: 'group';
  /** Уникальный идентификатор группы пунктов меню */
  id: string;
  icon?: ReactNode;
  badge?: SideMenuBadge;
  tag?: SideMenuTag;
  /** Текстовая подпись группы */
  label: string;
  /** Вложенные пункты (MenuItem/MenuGroup/Divider) */
  children: SideMenuNode[];
  /** Формат label, по умолчанию line */
  typeLabel?: TypeLabel;
  /** Колбэк кастомизации рендера контента пункта */
  renderItem?: (props: SideMenuItemRenderProps) => React.ReactNode;
}

export interface SideMenuDividerNode {
  type: 'divider';
  /** Опциональная текстовая подпись */
  label?: string;
}

export interface SideMenuProps extends React.HTMLAttributes<HTMLDivElement> {
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
  /** Размер компонента */
  dimension?: SideMenuDimension;
  /** Позволяет добавить панель внизу */
  renderBottomPanel?: () => React.ReactNode;
  /** Позволяет добавить панель вверху */
  renderTopPanel?: () => React.ReactNode;
  /** Рассотояние между пунктами контента */
  gap?: number;
  /** Позволяет отключить/включить отображение Tooltip при переполнении текста, по умолчанию true  */
  showTooltip?: boolean;
  /** Позволяет добавлять миксин для тултипа, созданный с помощью styled css  */
  tooltipCssMixin?: ReturnType<typeof css>;
  /** Позволяет пунктам меню при переполнении переходить на следующую строку,
   * по умолчанию переполнение уходит в троеточие и при наведении отображается Tooltip */
  multiline?: boolean;
}
