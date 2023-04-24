import * as React from 'react';
import { Checkbox } from '#src/components/Checkbox';
import observeRect from '#src/components/common/observeRect';
import { ThemeContext } from 'styled-components';
import { LIGHT_THEME } from '#src/components/themes';
import { getScrollbarSize } from '#src/components/common/dom/scrollbarUtil';
import { GroupRow } from '#src/components/Table/Row/GroupRow';
import { RegularRow } from '#src/components/Table/Row/RegularRow';
import { RowWrapper } from '#src/components/Table/Row/RowWrapper';
import type { FlattenInterpolation, ThemeProps, DefaultTheme } from 'styled-components';
import { Header } from './Header';

import { HeaderCellComponent } from './HeaderCell';
import {
  Cell,
  CellTextContent,
  CheckboxCell,
  EmptyMessage,
  ExpandCell,
  Filler,
  // Header,
  HeaderCellsWrapper,
  HeaderWrapper,
  Row,
  ScrollTableBody,
  StickyWrapper,
  TableContainer,
  HiddenHeader,
} from './style';
import { VirtualBody } from './VirtualBody';
import type { CSSProperties } from 'react';

export * from './RowAction';

export const DEFAULT_COLUMN_WIDTH = 100;
const COLUMN_MIN_WIDTH_M = 25;
const COLUMN_MIN_WIDTH_L = 33;

export type Dimension = 'xl' | 'l' | 'm' | 's';

type FilterProps = {
  /** Функция закрытия меню фильтра */
  closeMenu: () => void;
  /** @deprecated - взамен используйте параметр isFilterActive, задаваемый для столбца
   * Функция установки состояния фильтра (активный/неактивный).
   * Необходимо для окрашивания иконки фильтра в синий цвет при активном фильтре и в серый при неактивном фильтре.
   */
  setFilterActive?: (isActive: boolean) => void;
};

export type Column = {
  /** Уникальное название столбца */
  name: string;
  /** Заголовок столбца */
  title: React.ReactNode;
  /** Дополнительный текст заголовка столбца */
  extraText?: React.ReactNode;
  /** Ширина столбца. В качестве ширины можно использовать любое валидное css значение (пиксели, проценты, функция calc...).
   * По умолчанию 100px */
  width?: number | string;
  /** Выравнивание контента ячеек столбца по левому или правому краю. По умолчанию left */
  cellAlign?: 'left' | 'right';
  /** Является ли столбец сортируемым. По умолчанию false */
  sortable?: boolean;
  /** Сортировка столбца (по возрастанию или по убыванию) */
  sort?: 'asc' | 'desc';
  /** Порядковый номер в многоуровневой сортировке */
  sortOrder?: number;
  /** Отображение столбца как фиксированного (которые остаются при скролле на месте).
   * Столбец с чекбоксами по умолчанию фиксированный.
   * Фиксированные столбцы располагаются по левому краю таблицы и идут друг за другом
   * (в columnList фиксированные столбцы должны быть в начале массива и идти друг за другом).
   */
  sticky?: boolean;
  /** Отключение возможности ресайза колонки */
  disableResize?: boolean;
  /** Состояние фильтра.
   * Необходимо для окрашивания иконки фильтра в синий цвет при активном фильтре и в серый при неактивном фильтре.
   */
  isFilterActive?: boolean;
  /** Функция отрисовки содержимого фильтра (выпадающего меню фильтра). Если её не передать, значок фильтра отображаться не будет */
  renderFilter?: (obj: FilterProps, column: Column) => React.ReactNode;
  /** Функция отрисовки иконки фильтра. По умолчанию в качестве иконки фильтра применяется OverflowIcon (троеточие) */
  renderFilterIcon?: () => React.ReactNode;
  /** Колбек на клик вне меню фильтра */
  onFilterMenuClickOutside?: (obj: FilterProps, event: Event) => void;
  /** Колбек на открытие меню фильтра */
  onFilterMenuOpen?: () => void;
  /** Колбек на закрытие меню фильтра */
  onFilterMenuClose?: () => void;
  /**
   *  Позволяет выравнивать меню фильтра относительно столбца
   *  https://developer.mozilla.org/en-US/docs/Web/CSS/align-self
   */
  filterMenuAlignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';

  /** Позволяет добавлять миксин для меню фильтра, созданный с помощью styled css  */
  filterMenuCssMixin?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  /** Позволяет добавлять класс на контейнер выпадающего меню  */
  filterMenuClassName?: string;
  /** Позволяет добавлять стили на контейнер выпадающего меню  */
  filterMenuStyle?: CSSProperties;
  /**
   * Метод для переопределения стандартного вида ячейки
   * @param data - контент ячейки
   * @param row - объект строки
   * @param rowIdx - индекс строки
   */
  renderCell?(data: any, row: TableRow, rowIdx: number): React.ReactNode;
};

export type RowId = string | number;
type IdSelectionStatusMap = Record<RowId, boolean>;

export interface TableRow {
  id: RowId;
  className?: string;
  /** Строка в состоянии selected */
  selected?: boolean;
  /** Строка в состоянии disabled  */
  disabled?: boolean;
  /** Чекбокс строки в состоянии disabled */
  checkboxDisabled?: boolean;
  /** Строка в состоянии error */
  error?: boolean;
  /** Строка в состоянии success */
  success?: boolean;
  /** Строка в раскрытом состоянии */
  expanded?: boolean;
  /** Окраска строки по Hover. Данная окраска должна применяться, если строка кликабельна и ведет к каким-либо действиям */
  hover?: boolean;
  /** Название группы */
  groupTitle?: string;
  /** Строки таблицы, находящиеся в группе */
  groupRows?: Array<string>;
  /** Функция рендера содержимого раскрытой части строки (детализации строки) */
  expandedRowRender?: (row: any) => React.ReactNode;
  /** Функция рендера OverflowMenu для строки.
   * Входные параметры: сама строка, колбек onVisibilityChange.
   * Колбек необходимо вызывать при открытии/закрытии меню для того, чтобы таблица могла управлять видимостью OverflowMenu.
   * OverflowMenu отображается при ховере на строку или при открытом меню
   * и располагается по правому краю строки в видимой области таблицы.
   *
   * В качестве результата функция должна возвращать OverflowMenu.
   * Для таблицы с dimension='s' или dimension='m' используется OverflowMenu c dimension='m'.
   * Для таблицы с dimension='l' или dimension='xl' используется OverflowMenu c dimension='l'.
   */
  overflowMenuRender?: (row: any, onVisibilityChange?: (isVisible: boolean) => void) => React.ReactNode;
  /** Функция рендера одиночного действия над строкой.
   * Одиночное действие отображается в виде иконки при ховере на строку
   * и располагается по правому краю строки в видимой области таблицы.
   *
   * В качестве результата функция должна возвращать компонент RowAction,
   * внутрь которого нужно передать произвольную иконку для отображения действия.
   */
  actionRender?: (row: any) => React.ReactNode;
  /**
   * Метод для переопределения стандартного вида заголовка группы
   * @param row - объект строки
   */
  renderGroupTitle?(row: TableRow): React.ReactNode;
}

export interface TableProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Массив столбцов */
  columnList: Column[];
  /** Массив строк */
  rowList: TableRow[];
  /** Установка чекбокса в шапке таблицы в состояние checked.
   * По умолчанию состояние checked вычисляется на основе анализа параметра selected у строк таблицы
   */
  headerCheckboxChecked?: boolean;
  /** Установка чекбокса в шапке таблицы в состояние indeterminate (состояние, при котором выбрана только часть строк).
   * По умолчанию состояние checked вычисляется на основе анализа параметра selected у строк таблицы
   */
  headerCheckboxIndeterminate?: boolean;
  /** Установка чекбокса в шапке таблицы в состояние disabled.
   * По умолчанию состояние disabled устанавливается при отсутствии строк в таблице
   */
  headerCheckboxDisabled?: boolean;
  /** Колбек на изменение состояния чекбокса, находящегося в хедере
   * Возвращает параметр selectAll (если true - выбраны все строки в таблице, false - выбор снят со всех строк таблицы)
   */
  onHeaderSelectionChange?: (selectAll: boolean) => void;
  /** Колбек на выбор/снятие выбора со строки (на нажатие по чекбоксу строки).
   * idSelectionStatusMap - это объект, ключами которого являются id строк, чье состояние checked было изменено,
   * а значениями ключей - значение checked
   */
  onRowSelectionChange?: (idSelectionStatusMap: IdSelectionStatusMap, id?: RowId) => void;
  /** Колбек на раскрытие/свертывание строки (на нажатие по стрелке слева).
   * idSelectionStatusMap - это объект, ключами которого являются id строк, чье состояние expanded было изменено,
   * а значениями ключей - значение expanded
   */
  onRowExpansionChange?: (idSelectionStatusMap: IdSelectionStatusMap) => void;
  /** Колбек для клика по строке таблицы */
  onRowClick?: (rowId: RowId) => void;
  /** Колбек для двойного клика по строке таблицы */
  onRowDoubleClick?: (rowId: RowId) => void;
  /** Размер таблицы */
  dimension?: Dimension;
  /** Отображение столбца с чекбоксами, позволяющими выбрать необходимые строки */
  displayRowSelectionColumn?: boolean;
  /** Отображение столбца со стрелками для детализации (раскрытия) строк */
  displayRowExpansionColumn?: boolean;
  /** Окрашивание шапки таблицы в серый цвет */
  greyHeader?: boolean;
  /** Окрашивание строк таблицы через одну в цвет вторичного фона (зебра) */
  greyZebraRows?: boolean;

  /** Ширина колонки (заголовка) регулируется через параметр Spacing Between Items в настройках
   * Auto Layout, при выбранном заголовке. Минимальное значение 12px, для таблиц S и M, и 16px для таблиц L и XL.
   * При выборе расстояния следует учитывать размеры пространства под иконки сортировки и меню, если они есть
   * в функционале заголовка.
   */
  spacingBetweenItems?: string;
  /** Колбек на изменение сортировки. Возвращает уникальное имя столбца, к которому применили сортировку,
   * и порядок сортировки (возрастающий/убывающий или сброс сортировки до первоначального состояния (initial))
   */
  onSortChange?: (sortObj: { name: string; sort: 'asc' | 'desc' | 'initial' }) => void;
  /** Колбек, который срабатывает при изменении ширины столбца.
   * Данный колбек обязателен в случае, если таблица должна поддерживать ресайзинг.
   * При срабатывании колбек сообщает пользователю о попытке ресайзинга столбца,
   * после чего пользователь должен обновить ширину соответствующего столбца.
   * Таким образом контроль за ресайзингом происходит на стороне пользователя.
   */
  onColumnResize?: (colObj: { name: string; width: string }) => void;
  /**
   * @deprecated use renderCell prop in Column type
   * Рендер функция для отрисовки контента ячейки. Входные параметры - объект строки и название столбца
   */
  renderCell?: (row: TableRow, columnName: string) => React.ReactNode;
  /** Рендер функция для отрисовки обертки вокруг строки.
   * Входные параметры - объект строки, её порядковый номер и элемент который должен быть отрисован внутри создаваемой обертки
   * */
  renderRowWrapper?: (row: TableRow, index: number, rowNode: React.ReactNode) => React.ReactNode;
  /** Параметр, определяющий максимальное количество строк, которое может занимать заголовок столбца таблицы.
   * По умолчанию заголовок занимает не более одной строки
   */
  headerLineClamp?: number;
  /** Параметр, определяющий максимальное количество строк, которое может занимать дополнительный текст заголовка столбца таблицы.
   * По умолчанию дополнительный текст занимает не более одной строки
   */
  headerExtraLineClamp?: number;
  /** Отображение разделителя для последней колонки. По умолчанию разделитель не отображается */
  showDividerForLastColumn?: boolean;
  /** Отключение возможности ресайза колонок. По умолчанию эта возможность включена */
  disableColumnResize?: boolean;
  /** Отображение серой линии подчеркивания для последней строки. По умолчанию линия отображается */
  showLastRowUnderline?: boolean;
  /** Включение виртуального скролла для тела таблицы.
   * У таблицы обязательно должна быть задана высота, тогда тело таблицы растянется по высоте и подстроится под высоту таблицы.
   */
  virtualScroll?: {
    /** Фиксированная высота строки, для правильного функционирования виртуального скролла
     * все строки должны быть одной фиксированной высоты
     */
    fixedRowHeight: number;
  };
  /** Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
   * по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме
   **/
  locale?: {
    /** Сообщение, отображаемое при отсутствии совпадений в строках после применения фильтра */
    emptyMessage?: React.ReactNode;
  };
}

type GroupInfo = {
  rows: Array<string>;
  expanded: boolean;
};

type RowInfo = {
  groupId: string;
  checked: boolean;
};

type Group = Record<string, GroupInfo>;
type GroupRows = Record<string, RowInfo>;
type ZebraRows = Record<string, 'odd' | 'even' | 'ingroup odd' | 'ingroup even' | 'group'>;

export const Table: React.FC<TableProps> = ({
  columnList,
  rowList,
  displayRowSelectionColumn = false,
  displayRowExpansionColumn = false,
  headerCheckboxChecked = false,
  headerCheckboxIndeterminate = false,
  headerCheckboxDisabled = false,
  onHeaderSelectionChange,
  onRowSelectionChange,
  onRowExpansionChange,
  onRowClick,
  onRowDoubleClick,
  onSortChange,
  onColumnResize,
  renderCell,
  renderRowWrapper,
  dimension = 'm',
  greyHeader = false,
  greyZebraRows = false,
  spacingBetweenItems,
  headerLineClamp = 1,
  headerExtraLineClamp = 1,
  showDividerForLastColumn = false,
  disableColumnResize = false,
  showLastRowUnderline = true,
  virtualScroll,
  locale,
  ...props
}) => {
  const theme = React.useContext(ThemeContext) || LIGHT_THEME;
  const checkboxDimension = dimension === 's' || dimension === 'm' ? 's' : 'm';
  const columnMinWidth = dimension === 's' || dimension === 'm' ? COLUMN_MIN_WIDTH_M : COLUMN_MIN_WIDTH_L;

  const [verticalScroll, setVerticalScroll] = React.useState(false);
  const [tableWidth, setTableWidth] = React.useState(0);
  const [bodyHeight, setBodyHeight] = React.useState(0);
  const [scrollbar, setScrollbarSize] = React.useState(0);

  const stickyColumns = [...columnList].filter((col) => col.sticky);

  const tableRef = React.useRef<HTMLDivElement>(null);
  const headerRef = React.useRef<HTMLDivElement>(null);
  const hiddenHeaderRef = React.useRef<HTMLDivElement>(null);
  const scrollBodyRef = React.useRef<HTMLDivElement>(null);

  const groupToRowsMap = rowList.reduce<Group>((acc: Group, row) => {
    if (typeof row.groupRows !== 'undefined') {
      acc[row.id] = {
        rows: [...row.groupRows],
        expanded: !!row.expanded,
      };
    }
    return acc;
  }, {});

  const rowToGroupMap = Object.entries(groupToRowsMap).reduce<GroupRows>((acc, [groupId, info]) => {
    info.rows.forEach((id) => {
      const row = rowList.find((item) => item.id.toString() === id);
      if (row && !groupToRowsMap[id]) {
        acc[id] = { groupId, checked: !!row.selected };
      }
    });
    return acc;
  }, {});

  const reorderRowsToGroup = () => {
    const tableRows: Array<TableRow> = [];
    rowList.forEach((row) => {
      const isGroupRow = !!groupToRowsMap[row.id];
      const rowInGroup = !!rowToGroupMap[row.id];
      if (!rowInGroup) {
        tableRows.push(row);
      }

      if (isGroupRow) {
        groupToRowsMap[row.id].rows.forEach((rowId) => {
          const row = rowList.find((item) => item.id.toString() === rowId);
          if (row) tableRows.push(row);
        });
      }
    });

    return tableRows;
  };

  const tableRows = React.useMemo(() => reorderRowsToGroup(), [rowList]);

  const zebraRows = greyZebraRows
    ? tableRows.reduce<ZebraRows>((acc: ZebraRows, row: TableRow, index: number) => {
        if (rowToGroupMap[row.id]) {
          const indexInGroup = groupToRowsMap[rowToGroupMap[row.id].groupId].rows.indexOf(String(row.id));
          acc[row.id] = `ingroup ${indexInGroup % 2 === 0 ? 'odd' : 'even'}`;
        } else if (groupToRowsMap[row.id]) {
          acc[row.id] = 'group';
        } else if (index === 0 || acc[tableRows[index - 1].id].includes('group')) {
          acc[row.id] = 'odd';
        } else {
          acc[row.id] = acc[tableRows[index - 1].id] === 'odd' ? 'even' : 'odd';
        }
        return acc;
      }, {})
    : {};

  React.useLayoutEffect(() => {
    if (hiddenHeaderRef.current) {
      const hiddenColumns = hiddenHeaderRef.current?.querySelectorAll<HTMLElement>('.th');

      const resizeObserver = new ResizeObserver((entries) => {
        entries.forEach((entry) => {
          // find all body cells in the same column as entry column
          const bodyCells = scrollBodyRef.current?.querySelectorAll<HTMLElement>(
            `[data-column="${(entry.target as HTMLElement).dataset.thColumn}"]`,
          );
          bodyCells?.forEach((cell) => {
            cell.style.width = entry.borderBoxSize[0].inlineSize + 'px';
          });

          // find all header cells in the same column as entry column
          const headerCells = headerRef.current?.querySelectorAll<HTMLElement>(
            `[data-th-column="${(entry.target as HTMLElement).dataset.thColumn}"]`,
          );
          headerCells?.forEach((cell) => {
            cell.style.width = entry.borderBoxSize[0].inlineSize + 'px';
            cell.style.minWidth = entry.borderBoxSize[0].inlineSize + 'px';
          });
        });
      });

      hiddenColumns?.forEach((col) => resizeObserver.observe(col));
      return () => {
        resizeObserver.disconnect();
      };
    }
  }, [hiddenHeaderRef.current, headerRef.current, scrollBodyRef.current, columnList, rowList]);

  React.useEffect(() => {
    const size = getScrollbarSize();
    setScrollbarSize(size);
  }, [setScrollbarSize]);

  React.useLayoutEffect(() => {
    const scrollBody = scrollBodyRef.current;

    function scrollHeader(scrollLeft: number) {
      if (headerRef.current) headerRef.current.scrollLeft = scrollLeft;
    }

    function moveOverflowMenu(scrollLeft: number) {
      if (scrollBodyRef.current) {
        const menus = scrollBodyRef.current.querySelectorAll<HTMLElement>('[data-overflowmenu]');
        const scrollbarWidth = verticalScroll ? scrollbar : 0;
        const headerScrollWidth = headerRef.current?.scrollWidth || tableWidth;

        menus.forEach((menu) => {
          if (scrollLeft <= headerScrollWidth - tableWidth + scrollbarWidth) {
            menu.style.marginLeft = `${scrollLeft}px`;
          } else {
            menu.style.marginLeft = `${headerScrollWidth - tableWidth + scrollbarWidth}px`;
          }
        });
      }
    }

    function setShadow(scrollLeft: number) {
      if (tableRef.current) {
        const initial = tableRef.current.getAttribute('data-shadow');
        if (scrollLeft === 0) {
          if (initial !== 'false') tableRef.current.setAttribute('data-shadow', 'false');
        } else {
          if (initial !== 'true') tableRef.current.setAttribute('data-shadow', 'true');
        }
      }
    }

    function handleScroll(e: any) {
      if (e.target === scrollBodyRef.current) {
        requestAnimationFrame(function () {
          scrollHeader(e.target.scrollLeft);
          moveOverflowMenu(e.target.scrollLeft);
        });
      }
      if (stickyColumns.length > 0 || displayRowSelectionColumn || displayRowExpansionColumn) {
        requestAnimationFrame(function () {
          setShadow(e.target.scrollLeft);
        });
      }
    }

    if (scrollBody) {
      scrollBody.addEventListener('scroll', handleScroll);

      const observer = observeRect(scrollBody, (rect: any) => {
        if (scrollBody.scrollHeight > scrollBody.offsetHeight) {
          setVerticalScroll(true);
        } else {
          setVerticalScroll(false);
        }
        setTableWidth(rect.width);
        setBodyHeight(rect.height);
        moveOverflowMenu(scrollBody.scrollLeft);
      });
      observer.observe();

      return () => {
        scrollBody.removeEventListener('scroll', handleScroll);
        observer.unobserve();
      };
    }
  }, [
    tableRef.current,
    headerRef.current,
    scrollBodyRef.current,
    stickyColumns,
    displayRowExpansionColumn,
    displayRowSelectionColumn,
    tableWidth,
    scrollbar,
    verticalScroll,
    setTableWidth,
    setVerticalScroll,
    setBodyHeight,
  ]);

  const calcGroupCheckStatus = (groupInfo: GroupInfo) => {
    const indeterminate =
      groupInfo.rows.some((rowId) => rowToGroupMap[rowId].checked) &&
      groupInfo.rows.some((rowId) => !rowToGroupMap[rowId].checked);
    const checked = groupInfo.rows.every((rowId) => rowToGroupMap[rowId].checked);
    return { checked, indeterminate };
  };

  const parentGroupWillBeChecked = (changedDepId: RowId) => {
    const groupId = rowToGroupMap[changedDepId]?.groupId;
    const groupInfo = groupId ? groupToRowsMap[groupId] : undefined;

    if (!groupInfo) return;

    const value = groupInfo?.rows.some((rowId) =>
      rowId === changedDepId.toString() ? !rowToGroupMap[rowId].checked : rowToGroupMap[rowId].checked,
    );
    return { groupId, value };
  };

  function handleCheckboxChange(id: RowId) {
    const groupInfo = groupToRowsMap[id];
    const rowHasGroup = rowToGroupMap[id];

    const groupCheckStatus = groupInfo && calcGroupCheckStatus(groupInfo);
    const parentGroupNewValue = rowHasGroup && parentGroupWillBeChecked(id);

    const idsMap = rowList.reduce((ids: IdSelectionStatusMap, row) => {
      if (groupInfo) {
        const rowInCurrentGroup = groupInfo.rows.includes(row.id.toString());

        if (row.id === id || rowInCurrentGroup) {
          ids[row.id] = !(groupCheckStatus?.indeterminate || groupCheckStatus?.checked);
        } else {
          ids[row.id] = row.id === id ? !row.selected : !!row.selected;
        }
      } else {
        ids[row.id] = row.id === id ? !row.selected : !!row.selected;
        if (rowHasGroup && row.id === parentGroupNewValue?.groupId) {
          ids[row.id] = parentGroupNewValue?.value;
        }
      }
      return ids;
    }, {});
    onRowSelectionChange?.(idsMap, id);
  }

  function handleExpansionChange(id: RowId) {
    const idsMap = rowList.reduce((ids: IdSelectionStatusMap, row) => {
      const value = row.id === id ? !row.expanded : !!row.expanded;
      ids[row.id] = value;
      return ids;
    }, {});
    onRowExpansionChange?.(idsMap);
  }

  const isSelected = (row: { selected?: boolean }) => row.selected;
  // When invoked on an empty array, every() always returns true. So we need to check rowList.length.
  const allRowsChecked = rowList.length > 0 && rowList.every(isSelected);
  const someRowsChecked = rowList.some(isSelected);

  function handleHeaderCheckboxChange(e: React.ChangeEvent<HTMLInputElement>) {
    const toRemove = rowList.reduce((ids: IdSelectionStatusMap, row) => {
      ids[row.id] = row.checkboxDisabled ? !!row.selected : !someRowsChecked;
      return ids;
    }, {});
    onRowSelectionChange?.(toRemove);
    onHeaderSelectionChange?.(e.target.checked);
  }

  function handleResizeChange({ name, width }: { name: string; width: number }) {
    onColumnResize?.({ name, width: width + 'px' });
  }

  const handleSort = (name: string, colSort: 'asc' | 'desc' | 'initial') => {
    let newSort: 'asc' | 'desc' | 'initial' = 'initial';
    if (colSort === 'asc') newSort = 'desc';
    if (colSort === 'desc') newSort = 'initial';
    if (colSort === 'initial') newSort = 'asc';

    onSortChange?.({ name, sort: newSort });
  };

  const multipleSort = React.useMemo<boolean>(() => {
    return columnList.filter((col) => !!col.sort).length > 1;
  }, [columnList]);

  const renderHeaderCell = (column: Column, index: number) => (
    <HeaderCellComponent
      key={`head_${column.name}`}
      column={column}
      index={index}
      columnsAmount={columnList.length}
      showDividerForLastColumn={showDividerForLastColumn}
      disableColumnResize={disableColumnResize}
      headerLineClamp={headerLineClamp}
      headerExtraLineClamp={headerExtraLineClamp}
      handleResizeChange={handleResizeChange}
      handleSort={handleSort}
      dimension={dimension}
      spacingBetweenItems={spacingBetweenItems}
      multipleSort={multipleSort}
      columnMinWidth={columnMinWidth}
    />
  );

  const renderBodyCell = (idx: number) => (row: TableRow, col: Column) => {
    const headerCellWidth = hiddenHeaderRef.current
      ?.querySelector<HTMLElement>(`[data-th-column="${col.name}"]`)
      ?.getBoundingClientRect().width;

    const render = () => {
      if (col.renderCell) {
        return col.renderCell((row as any)[col.name], row, idx);
      }
      if (renderCell) {
        return renderCell(row, col.name);
      }

      return <CellTextContent cellAlign={col.cellAlign}>{(row as any)[col.name]}</CellTextContent>;
    };

    return (
      <Cell
        key={`${row.id}_${col.name}`}
        dimension={dimension}
        style={{ width: headerCellWidth || '100px' }}
        className="td"
        data-column={col.name}
        data-row={row.id}
      >
        {render()}
      </Cell>
    );
  };

  const renderGroupRow = (row: TableRow) => {
    const indeterminate =
      row.groupRows?.some((rowId) => rowToGroupMap[rowId].checked) &&
      row.groupRows?.some((rowId) => !rowToGroupMap[rowId].checked);

    const hasGroupRows = row.groupRows?.length;
    const checked = hasGroupRows ? row.groupRows?.every((rowId) => rowToGroupMap[rowId].checked) : row.selected;

    return (
      <GroupRow
        row={row}
        dimension={dimension}
        checkboxDimension={checkboxDimension}
        displayRowExpansionColumn={displayRowExpansionColumn}
        displayRowSelectionColumn={displayRowSelectionColumn}
        onRowExpansionChange={handleExpansionChange}
        onRowSelectionChange={handleCheckboxChange}
        renderCell={renderCell}
        indeterminate={indeterminate}
        checked={checked}
      />
    );
  };

  const renderRegularRow = (row: TableRow, idx: number) => (
    <RegularRow
      row={row}
      dimension={dimension}
      checkboxDimension={checkboxDimension}
      columns={columnList}
      stickyColumns={stickyColumns}
      displayRowExpansionColumn={displayRowExpansionColumn}
      displayRowSelectionColumn={displayRowSelectionColumn}
      renderBodyCell={renderBodyCell(idx)}
      onRowExpansionChange={handleExpansionChange}
      onRowSelectionChange={handleCheckboxChange}
    />
  );

  const isLastVisibleRow = ({
    row,
    isGroupRow,
    index,
    tableRows,
  }: {
    row: TableRow;
    isGroupRow: boolean;
    index: number;
    tableRows: Array<TableRow>;
  }) => {
    return isGroupRow
      ? !row.expanded && row.groupRows && index >= tableRows.length - (row.groupRows.length + 1)
      : index === tableRows.length - 1;
  };

  const renderRow = (row: TableRow, index: number) => {
    const isGroupRow = !!groupToRowsMap[row.id];
    const rowInGroup = !!rowToGroupMap[row.id];
    const visible = rowInGroup ? groupToRowsMap[rowToGroupMap[row.id].groupId].expanded : true;
    const isLastRow = isLastVisibleRow({ row, isGroupRow, tableRows, index });

    const node = (isGroupRow || visible) && (
      <RowWrapper
        dimension={dimension}
        row={row}
        underline={(isLastRow && showLastRowUnderline) || !isLastRow}
        tableWidth={tableWidth}
        isGroup={isGroupRow}
        onRowClick={onRowClick}
        onRowDoubleClick={onRowDoubleClick}
        rowWidth={isGroupRow ? headerRef.current?.scrollWidth : undefined}
        verticalScroll={verticalScroll}
        scrollbar={scrollbar}
        grey={zebraRows[row.id]?.includes('even')}
        key={`row_${row.id}`}
      >
        {isGroupRow ? renderGroupRow(row) : renderRegularRow(row, index)}
      </RowWrapper>
    );

    return node ? renderRowWrapper?.(row, index, node) ?? node : node;
  };

  const renderBody = () => {
    const emptyMessage = locale?.emptyMessage || theme.locales[theme.currentLocale].table.emptyMessage;
    if (tableRows.length === 0) {
      return (
        <ScrollTableBody ref={scrollBodyRef} className="tbody">
          <Row
            underline={showLastRowUnderline}
            dimension={dimension}
            className="tr"
            rowWidth={headerRef.current?.scrollWidth}
          >
            <EmptyMessage dimension={dimension}>{emptyMessage}</EmptyMessage>
          </Row>
        </ScrollTableBody>
      );
    }
    return virtualScroll ? (
      <VirtualBody
        height={bodyHeight}
        rowList={tableRows}
        childHeight={virtualScroll.fixedRowHeight}
        renderRow={renderRow}
        ref={scrollBodyRef}
        className="tbody"
      />
    ) : (
      <ScrollTableBody ref={scrollBodyRef} className="tbody">
        {tableRows.map((row, index) => renderRow(row, index))}
      </ScrollTableBody>
    );
  };

  const renderHiddenHeader = () => {
    return (
      <HiddenHeader ref={hiddenHeaderRef}>
        {(displayRowSelectionColumn || displayRowExpansionColumn) && (
          <StickyWrapper>
            {displayRowExpansionColumn && <ExpandCell dimension={dimension} />}
            {displayRowSelectionColumn && (
              <CheckboxCell dimension={dimension}>
                <Checkbox dimension={checkboxDimension} />
              </CheckboxCell>
            )}
          </StickyWrapper>
        )}
        <HeaderCellsWrapper
          expansionColumn={displayRowExpansionColumn}
          selectionColumn={displayRowSelectionColumn}
          dimension={dimension}
        >
          {stickyColumns.length > 0 && stickyColumns.map((col, index) => renderHeaderCell(col as Column, index))}
          {columnList.map((col, index) => (col.sticky ? null : renderHeaderCell(col as Column, index)))}
        </HeaderCellsWrapper>
      </HiddenHeader>
    );
  };

  return (
    <TableContainer ref={tableRef} data-shadow={false} {...props} className={`table ${props.className || ''}`}>
      {renderHiddenHeader()}
      <HeaderWrapper scrollbar={scrollbar} greyHeader={greyHeader} data-verticalscroll={verticalScroll}>
        <Header dimension={dimension} ref={headerRef} className="tr">
          {(displayRowSelectionColumn || displayRowExpansionColumn || stickyColumns.length > 0) && (
            <StickyWrapper greyHeader={greyHeader} data-draggable={false} data-droppable={false}>
              {displayRowExpansionColumn && <ExpandCell dimension={dimension} />}
              {displayRowSelectionColumn && (
                <CheckboxCell dimension={dimension} className="th_checkbox">
                  <Checkbox
                    dimension={checkboxDimension}
                    checked={allRowsChecked || someRowsChecked || headerCheckboxChecked}
                    indeterminate={(someRowsChecked && !allRowsChecked) || headerCheckboxIndeterminate}
                    disabled={tableRows.length === 0 || headerCheckboxDisabled}
                    onChange={handleHeaderCheckboxChange}
                  />
                </CheckboxCell>
              )}
              {stickyColumns.length > 0 && stickyColumns.map((col, index) => renderHeaderCell(col as Column, index))}
            </StickyWrapper>
          )}
          {columnList.map((col, index) => (col.sticky ? null : renderHeaderCell(col as Column, index)))}
          <Filler data-draggable={false} />
        </Header>
      </HeaderWrapper>
      {renderBody()}
    </TableContainer>
  );
};

Table.displayName = 'Table';
