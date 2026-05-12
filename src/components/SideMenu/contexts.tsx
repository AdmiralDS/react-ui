import { createContext, useContext } from 'react';
import type { css } from 'styled-components';
import type { SearchFormat } from '#src/components/input';

import type { SideMenuDimension } from './types';

/**
 * Путь ids групп от корня до текущего уровня.
 * Используется для вычисления уровня вложенности (level)
 */
export type IdPath = string[];
export const PathContext = createContext<IdPath>([]);
export function useIdPath(): IdPath {
  const value = useContext(PathContext);
  if (!value) {
    throw new Error('PathContext is missing. Wrap components with <SideMenu />');
  }
  return value;
}

export interface SideMenuContextValue {
  /** id выбранного пункта */
  selectedItemId: string | null;
  /** Путь ids групп от корня до выбранного пункта  */
  selectedItemPath: Array<string>;
  /** Массив id открытых групп */
  openGroupIds: Set<string>;
  /** Колбек при изменении выбранного пункта */
  onSelectItem: (id: string, path: Array<string>) => void;
  /** Колбек при изменении состояния группы (открыта/закрыта) */
  onToggleGroup: (groupId: string) => void;
  /** Колбек при открытии нескольких групп */
  onOpenGroups: (groupIds: string[]) => void;
  /** Размер компонента */
  dimension: SideMenuDimension;
  /** Показатель того, отображает ли сейчас меню результаты поиска (фильтрации) */
  searchActive: boolean;
  /** Строка поиска. Значение введеное в инпут, по которому происходит поиск */
  searchQuery: string;
  /** Формат поиска. Данная опция позволяет искать по строке целиком или по отдельным словам */
  searchFormat: SearchFormat;
  /** Расстояние между пунктами меню. По умолчанию 4px */
  gap: React.CSSProperties['gap'];
  /** Есть ли в массиве items иконки на первом уровне вложенности */
  hasIcons: boolean;
  /** Отображение Tooltip для лейблов при переполнении текста, по умолчанию true */
  visibleTooltip: boolean;
  /** CSS миксин, созданный с помощью styled css, для переопределения стилей Tooltip  */
  tooltipCssMixin?: ReturnType<typeof css>;
  /** Многострочное отображение лейблов при переполнении текста, по умолчанию false */
  multilineView?: boolean;
}
export const SideMenuContext = createContext<SideMenuContextValue | null>(null);

export function useSideMenuContext(): SideMenuContextValue {
  const value = useContext(SideMenuContext);
  if (!value) {
    throw new Error('SideMenuContext is missing. Wrap components with <SideMenu />');
  }
  return value;
}
