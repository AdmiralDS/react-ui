import type { css, DataAttributes } from 'styled-components';
import type { Tag } from '#src/components/Tag';
import type { Badge } from '#src/components/Badge';
import type { TextInput, SearchFormat } from '#src/components/input';

export type SideMenuDimension = 'm' | 'l';
export type LabelType = 'header' | 'line';
export type SideMenuTag = Omit<React.ComponentProps<typeof Tag>, 'dimension' | 'as'>;
export type SideMenuBadge = Omit<React.ComponentProps<typeof Badge>, 'dimension'>;

/**
 * - MenuItem: выбираемый пункт
 * - MenuGroup: разворачиваемая группа пунктов
 * - MenuDivider: разделитель
 */
export type SideMenuNode = SideMenuItemNode | SideMenuGroupNode | SideMenuDividerNode;

export interface SideMenuItemNode {
  type?: 'item';
  /** Уникальный идентификатор пункта меню  */
  id: string;
  /** Текстовая подпись пункта */
  label: string;
  /** Формат label (стиль начертания), по умолчанию line */
  labelType?: LabelType;
  /** Иконка, отображаемая в пункте меню */
  icon?: React.ReactNode;
  /** Параметры для отображения компонента Badge в пункте меню */
  badge?: SideMenuBadge;
  /** Параметры для отображения компонента Tag в пункте меню */
  tag?: SideMenuTag;
  /** Рендер функция для кастомизации пункта меню */
  render?: (props: SideMenuNodeRenderProps) => React.ReactNode;
}

export interface SideMenuGroupNode {
  type: 'group';
  /** Уникальный идентификатор группы пунктов меню */
  id: string;
  /** Текстовая подпись группы */
  label: string;
  /** Формат label (стиль начертания), по умолчанию line */
  labelType?: LabelType;
  /** Иконка, отображаемая в пункте меню */
  icon?: React.ReactNode;
  /** Параметры для отображения компонента Badge в пункте меню */
  badge?: SideMenuBadge;
  /** Параметры для отображения компонента Tag в пункте меню */
  tag?: SideMenuTag;
  /** Вложенные пункты (MenuItem/MenuGroup/Divider) */
  children: SideMenuNode[];
  /** Рендер функция для кастомизации пункта меню */
  render?: (props: SideMenuNodeRenderProps) => React.ReactNode;
}

export interface SideMenuDividerNode {
  type: 'divider';
  /** Опциональная текстовая подпись */
  label?: string;
  /** Рендер функция для кастомизации пункта меню */
  render?: (props: SideMenuDividerRenderProps) => React.ReactNode;
}

interface SideMenuBaseRenderProps {
  /** Тип пункта меню */
  type: 'item' | 'group' | 'divider';
  /** Размер компонента */
  dimension: SideMenuDimension;
  /** Отображение Tooltip для лейблов при переполнении текста, по умолчанию true */
  visibleTooltip?: boolean;
  /** CSS миксин, созданный с помощью styled css, для переопределения стилей Tooltip  */
  tooltipCssMixin?: ReturnType<typeof css>;
  /** Многострочное отображение лейблов при переполнении текста, по умолчанию false */
  multilineView?: boolean;
}

export interface SideMenuDividerRenderProps extends SideMenuBaseRenderProps {
  /** Опциональная текстовая подпись */
  label?: string;
}

export interface SideMenuNodeRenderProps extends SideMenuBaseRenderProps {
  /** Уникальный идентификатор пункта меню  */
  id: string;
  /** Текстовая подпись пункта */
  label: string;
  /** Формат label (стиль начертания), по умолчанию line */
  labelType?: LabelType;
  /** Состояние selected - признак того, что данный пункт выбран  */
  selected?: boolean;
  /** Уровень вложенности (1 для корневых пунктов, 2 — внутри первой группы и т.д.) */
  level: number;
  /** Иконка, отображаемая в пункте меню */
  icon?: React.ReactNode;
  /** Параметры для отображения компонента Badge в пункте меню */
  badge?: SideMenuBadge;
  /** Параметры для отображения компонента Tag в пункте меню */
  tag?: SideMenuTag;
  /** Обработчик, срабатывающий по клику на пункт меню */
  onClick?: () => void;
  /** Состояние expanded - признак того, что данный группа пунктов развернута */
  expanded?: boolean;
  /** Показатель того, отображает ли сейчас меню результаты поиска */
  seacrhActive?: boolean;
  /** Строка поиска. Значение введеное в инпут, по которому происходит поиск */
  seacrhQuery?: string;
  /** Формат поиска. Данная опция позволяет искать по строке целиком или по отдельным словам */
  searchFormat?: SearchFormat;
}

export interface SideMenuPanelProps {
  /** Размер компонента */
  dimension: SideMenuDimension;
}

export interface SideMenuProps extends React.HTMLAttributes<HTMLElement> {
  /** Массив с описанием дерева пунктов меню */
  items: SideMenuNode[];
  /** Размер компонента */
  dimension?: SideMenuDimension;
  /** id выбранного пункта (controlled mode) */
  selectedItem?: string;
  /** id пункта, который будет выбран по умолчанию (uncontrolled mode) */
  defaultSelectedItem?: string;
  /** Колбек при изменении выбранного пункта */
  onSelectItem?: (id: string) => void;
  /** Массив id открытых групп (controlled mode) */
  openGroups?: string[];
  /** Массив id открытых групп по умолчанию (uncontrolled mode) */
  defaultOpenGroups?: string[];
  /** Колбек при изменении openGroups (открытие/закрытие групп) */
  onOpenGroupsChange?: (openGroupsIds: string[]) => void;
  /** Включение поиска по пунктам меню */
  search?: boolean;
  /** Формат поиска. Данная опция позволяет искать по строке целиком или по отдельным словам */
  searchFormat?: SearchFormat;
  /** Функция, которая фильтрует пункты по результатам поиска. Использовать для реализации кастомной фильтрации */
  onFilterItem?: (value: string, searchValue: string, searchFormat: SearchFormat) => boolean;
  /** Конфиг функция пропсов для инпута. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  inputPropsConfig?: (
    props: React.ComponentProps<typeof TextInput>,
  ) => Partial<React.ComponentProps<typeof TextInput> & DataAttributes>;
  /** Позволяет добавить панель сверху над списком пунктов меню */
  renderTopPanel?: (props: SideMenuPanelProps) => React.ReactNode;
  /** Позволяет добавить панель внизу под списком пунктов меню */
  renderBottomPanel?: (props: SideMenuPanelProps) => React.ReactNode;
  /** Расстояние между пунктами меню. По умолчанию 4px */
  gap?: React.CSSProperties['gap'];
  /** Отображение Tooltip для лейблов при переполнении текста, по умолчанию true */
  visibleTooltip?: boolean;
  /** CSS миксин, созданный с помощью styled css, для переопределения стилей Tooltip  */
  tooltipCssMixin?: ReturnType<typeof css>;
  /** Многострочное отображение лейблов при переполнении текста, по умолчанию false */
  multilineView?: boolean;
}
