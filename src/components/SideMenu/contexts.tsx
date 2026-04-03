import { createContext, useContext } from 'react';
import type { SideMenuDimension } from './types';

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

export interface SideMenuContextValue {
  selectedItemId: string | null;
  /**
   * Множество открытых groups (by id).
   */
  openGroupIds: Set<string>;

  indentPx: number;

  onSelectItem: (id: string) => void;
  onToggleGroup: (groupId: string) => void;

  /**
   * Включена ли фильтрация и применяется ли активный фильтр.
   * В режиме фильтрации группы отображаются раскрытыми, чтобы показать найденные descendants.
   */
  filterActive: boolean;
  dimension: SideMenuDimension;
  //Есть ли в массиве items иконки в 1 уровне вложенности
  hasIcons: boolean;
}
export const SideMenuContext = createContext<SideMenuContextValue | null>(null);

export function useSideMenuContext(): SideMenuContextValue {
  const value = useContext(SideMenuContext);
  if (!value) {
    throw new Error('SideMenuContext is missing. Wrap components with <SideMenu />');
  }
  return value;
}
