import type { ReactElement, ReactNode } from 'react';
import type { Tag } from '../Tag';
import type { Badge } from '../Badge';
import type { css, DataAttributes } from 'styled-components';
import type { TextInput } from '#src/components/input';

export type SideMenuDimension = 'm' | 'l';
export type SearchFormat = 'word' | 'wholly';
export type LabelType = 'header' | 'line';
type SideMenuTag = Omit<React.ComponentProps<typeof Tag>, 'dimension' | 'as'>;
type SideMenuBadge = Omit<React.ComponentProps<typeof Badge>, 'dimension'>;

/**
 * - MenuItem: выбираемый пункт
 * - MenuGroup: разворачиваемая группа пунктов
 * - MenuDivider: разделитель
 */
export type SideMenuNode = SideMenuItemNode | SideMenuGroupNode | SideMenuDividerNode;

export interface SideMenuItemRenderProps {
  type: 'item' | 'group';
  /** Уникальный идентификатор пункта меню  */
  id: string;
  /** Текстовая подпись пункта */
  label: string;
  /** Состояние selected - признак того, что данный пункт выбран  */
  selected?: boolean;
  /** Уровень вложенности (1 для корневых пунктов, 2 — внутри первой группы и т.д.) */
  level: number;
  icon?: ReactNode;
  badge?: ReactElement;
  tag?: ReactElement;
  /** Размер компонента */
  dimension?: SideMenuDimension;
  /** Формат label, по умолчанию line */
  labelType?: LabelType;
  onClick?: () => void;
  expanded?: boolean;
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
  render?: (props: SideMenuItemRenderProps) => React.ReactNode;
  /** Формат label, по умолчанию line */
  labelType?: LabelType;
  onClick?: () => void;
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
  labelType?: LabelType;
  /** Колбэк кастомизации рендера контента пункта */
  render?: (props: SideMenuItemRenderProps) => React.ReactNode;
}

export interface SideMenuDividerNode {
  type: 'divider';
  /** Опциональная текстовая подпись */
  label?: string;
}

export interface SideMenuPanelProps {
  /** Размер компонента */
  dimension: SideMenuDimension;
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
  /** Позволяет добавить панель сверху над списком опций */
  renderTopPanel?: (props: SideMenuPanelProps) => ReactNode;
  /** Позволяет добавить панель внизу под списком опций */
  renderBottomPanel?: (props: SideMenuPanelProps) => ReactNode;
  /** Расстояние между пунктами списка. По умолчанию 4px */
  gap?: React.CSSProperties['gap'];
  /** Позволяет отключить/включить отображение Tooltip при переполнении текста, по умолчанию true  */
  visibleTooltip?: boolean;
  /** Позволяет добавлять миксин для тултипа, созданный с помощью styled css  */
  tooltipCssMixin?: ReturnType<typeof css>;
  /** Позволяет пунктам меню при переполнении переходить на следующую строку,
   * по умолчанию переполнение уходит в троеточие и при наведении отображается Tooltip */
  multiline?: boolean;
  /** Конфиг функция пропсов для левой кнопки. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  inputPropsConfig?: (
    props: React.ComponentProps<typeof TextInput>,
  ) => Partial<React.ComponentProps<typeof TextInput> & DataAttributes>;
}
