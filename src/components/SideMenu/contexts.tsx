import { createContext, useContext } from 'react';
import type { SideMenuDimension } from './types';
import type { css } from 'styled-components';

/**
 * Путь keys групп от корня до текущего уровня.
 * Используется для вычисления уровня вложенности (level).
 *
 * Важно: мы храним keys именно групп, чтобы для root-пункта MenuItem level был 1.
 */
export type KeyPath = string[];
export const PathContext = createContext<KeyPath>([]);

export function useKeyPath(): KeyPath {
  return useContext(PathContext);
}

export type SearchFormat = 'word' | 'wholly';
export interface SideMenuContextValue {
  selectedItemId: string | null;
  /** Множество открытых groups (by id) */
  openGroupIds: Set<string>;

  onSelectItem: (id: string) => void;
  onToggleGroup: (groupId: string) => void;
  onOpenGroups: (groupIds: string[]) => void;

  /**
   * Включена ли фильтрация и применяется ли активный фильтр.
   * В режиме фильтрации группы отображаются раскрытыми, чтобы показать найденные descendants.
   */
  filterActive: boolean;
  dimension: SideMenuDimension;
  //Есть ли в массиве items иконки в 1 уровне вложенности
  hasIcons: boolean;
  searchQuery: string;
  searchFormat: SearchFormat;
  /** Позволяет добавлять миксин для тултипа, созданный с помощью styled css  */
  tooltipCssMixin?: ReturnType<typeof css>;
  /** Позволяет пунктам меню при переполнении переходить на следующую строку,
   * по умолчанию переполнение уходит в троеточие и при наведении отображается Tooltip */
  multiline?: boolean;
  visibleTooltip?: boolean;
}
export const SideMenuContext = createContext<SideMenuContextValue | null>(null);

export function useSideMenuContext(): SideMenuContextValue {
  const value = useContext(SideMenuContext);
  if (!value) {
    throw new Error('SideMenuContext is missing. Wrap components with <SideMenu />');
  }
  return value;
}
