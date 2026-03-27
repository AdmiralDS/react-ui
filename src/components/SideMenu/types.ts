import type { ReactNode } from 'react';

export type SideMenuAppearance = 'primary' | 'secondary';
export type SideMenuDimension = 'm' | 'l';

/**
 * - MenuItem: выбираемый пункт
 * - MenuGroup: разворачиваемая группа (по id)
 * - MenuDivider: разделитель
 */
export type SideMenuNode = SideMenuItemNode | SideMenuGroupNode | SideMenuDividerNode;

export interface SideMenuItemRenderProps {
  id: string;
  label: string;
  icon?: ReactNode;
  badge?: ReactNode;
  tag?: ReactNode;
  disabled?: boolean;
  selected?: boolean;
  dimension?: SideMenuDimension;
  /**
   * Уровень вложенности (1 для корневых пунктов, 2 — внутри первой группы и т.д.).
   * Используется для вычисления отступа слева и для кастомного рендера.
   */
  level: number;
}

export interface SideMenuItemNode {
  type?: 'item';
  /** Уникальный id пункта меню  */
  id: string;
  /** Текстовая подпись пункта */
  label: string;
  icon?: ReactNode;
  badge?: ReactNode;
  tag?: ReactNode;
  disabled?: boolean;
  dimension?: SideMenuDimension;
  /** Колбэк кастомизации рендера контента пункта */
  renderItem?: (props: SideMenuItemRenderProps) => React.ReactNode;
}

export interface SideMenuGroupNode {
  type: 'group';
  /** Уникальный id группы. Используется для openMenus/defaultOpenMenus */
  id: string;
  /** Заголовок группы (отображается рядом с шевроном и участвует в фильтрации) */
  title: string;
  disabled?: boolean;
  /** Вложенные пункты (MenuItem/MenuGroup/Divider) */
  children: SideMenuNode[];
}

export interface SideMenuDividerNode {
  type: 'divider';
}

export interface SideMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Дерево элементов меню */
  items: SideMenuNode[];
  /** Id выбранного пункта (controlled) */
  selectedItem?: string;
  /** Id пункта, который будет выбран по умолчанию (uncontrolled) */
  defaultSelectedItem?: string;
  /** Колбек при изменении выбранного пункта */
  onSelectItem?: (id: string) => void;
  /**
   * Массив id открытых групп (controlled).
   */
  openMenus?: string[];
  /**
   * Массив id открытых групп по умолчанию (uncontrolled).
   */
  defaultOpenMenus?: string[];

  /**
   * callback при изменении openMenus (открытие/закрытие групп).
   * Вызывается и в controlled, и в uncontrolled режиме.
   */
  onOpenMenusChange?: (openIds: string[]) => void;
  /** Включает опцию фильтрации */
  search?: boolean;
  /** Отступ слева между уровнями вложенности в пикселях
   * TODO: переместить внутрь компонента
   */
  indentPx?: number;

  /** Состояние компонента: открыт/закрыт */
  isOpen: boolean;
  /** Состояние видимости border-right */
  visibleBorder?: boolean;
  /** Внешний вид компонента */
  appearance?: SideMenuAppearance;
  /** Параметр максимального размера окна при достижении которого будет вызвана функция onToggle */
  closeMediaQuery?: string;
  /** Функция которая будет выполняться при достижении closeMediaQuery */
  onClose?: () => void;
  /** Наличие затемненного фона, блокирующего контент страницы */
  backdrop?: boolean;
  /** Размер компонента */
  dimension?: SideMenuDimension;
  /** Позволяет добавить панель внизу */
  renderBottomPanel?: () => React.ReactNode;
  /** Позволяет добавить панель вверху */
  renderTopPanel?: () => React.ReactNode;
  /** Рассотояние между пунктами контента */
  gap?: number;
}
