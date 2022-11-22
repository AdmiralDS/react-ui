import * as React from 'react';
import { Checkbox } from '#src/components/Checkbox';
import observeRect from '#src/components/common/observeRect';
import { ThemeContext } from 'styled-components';
import { LIGHT_THEME } from '#src/components/themes';
import { getScrollbarSize } from '#src/components/common/dom/scrollbarUtil';
import { GroupRow } from '#src/components/Table/Row/GroupRow';
import { RegularRow } from '#src/components/Table/Row/RerularRow';
import { RowWrapper } from '#src/components/Table/Row/RowWrapper';

import { RowWidthResizer } from './RowWidthResizer';
import { Filter } from './filter/Filter';
import {
  Cell,
  CellTextContent,
  CheckboxCell,
  EmptyMessage,
  ExpandCell,
  Filler,
  Header,
  HeaderCell,
  HeaderCellContent,
  HeaderCellSpacer,
  HeaderCellTitle,
  HeaderWrapper,
  Row,
  ScrollTableBody,
  SortIcon,
  SortIconWrapper,
  SortOrder,
  StickyWrapper,
  TableContainer,
  TitleContent,
} from './style';
import { TitleText } from './TitleText';
import { VirtualBody } from './VirtualBody';

export * from './RowAction';

export const DEFAULT_COLUMN_WIDTH = 100;

export type Dimension = 'xl' | 'l' | 'm' | 's';

type FilterProps = {
  /** Функция закрытия меню фильтра */
  closeMenu: () => void;
  /** Функция установки состояния фильтра (активный/неактивный).
   * Необходимо для окрашивания иконки фильтра в синий цвет при активном фильтре и в серый при неактивном фильтре.
   */
  setFilterActive: (isActive: boolean) => void;
};

export type Column = {
  /** Уникальное название столбца */
  name: string;
  /** Заголовок столбца */
  title: React.ReactNode;
  /** Дополнительный текст заголовка столбца */
  extraText?: React.ReactNode;
  /** Ширина столбца. По умолчанию 100px */
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
  /** Функция отрисовки содержимого фильтра (выпадающего меню фильтра). Если её не передать, значок фильтра отображаться не будет */
  renderFilter?: (obj: FilterProps) => React.ReactNode;
  /** Функция отрисовки иконки фильтра. По умолчанию в качестве иконки фильтра применяется OverflowIcon (троеточие) */
  renderFilterIcon?: () => React.ReactNode;
  /** Колбек на клик вне меню фильтра */
  onFilterMenuClickOutside?: (obj: FilterProps, event: Event) => void;
  /** Колбек на открытие меню фильтра */
  onFilterMenuOpen?: () => void;
  /** Колбек на закрытие меню фильтра */
  onFilterMenuClose?: () => void;
};

type ColumnWithResizerWidth = Column & { resizerWidth: number };

export type RowId = string | number;
type IdSelectionStatusMap = Record<RowId, boolean>;

export interface TableRow extends Record<RowId, React.ReactNode> {
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
  /** Название группы */
  groupTitle?: string;
  /** Строки таблицы, находящиеся в группе */
  groupRows?: Array<string>;
  /** Функция рендера содержимого раскрытой части строки (детализации строки) */
  expandedRowRender?: (row: any) => React.ReactNode;
  /** Функция рендера OverflowMenu для строки.
   * Входные параметры: сама строка, колбеки onMenuOpen/onMenuClose (устаревшее api, впоследствии будет удалено) и onVisibilityChange (актуальное api).
   * Рекомендуется использовать колбек onVisibilityChange вместо onMenuOpen/onMenuClose.
   * Колбек необходимо вызывать при открытии/закрытии меню для того, чтобы таблица могла управлять видимостью OverflowMenu.
   * OverflowMenu отображается при ховере на строку или при открытом меню
   * и располагается по правому краю строки в видимой области таблицы.
   *
   * В качестве результата функция должна возвращать OverflowMenu.
   * Для таблицы с dimension='s' или dimension='m' используется OverflowMenu c dimension='m'.
   * Для таблицы с dimension='l' или dimension='xl' используется OverflowMenu c dimension='l'.
   */
  overflowMenuRender?: (
    row: any,
    /** @deprecated use onVisibilityChange instead */
    onMenuOpen?: () => void,
    /** @deprecated use onVisibilityChange instead */
    onMenuClose?: () => void,
    onVisibilityChange?: (isVisible: boolean) => void,
  ) => React.ReactNode;
  /** Функция рендера одиночного действия над строкой.
   * Одиночное действие отображается в виде иконки при ховере на строку
   * и располагается по правому краю строки в видимой области таблицы.
   *
   * В качестве результата функция должна возвращать компонент RowAction,
   * внутрь которого нужно передать произвольную иконку для отображения действия.
   */
  actionRender?: (row: any) => React.ReactNode;
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
   * Колбек не срабатывает, когда пользователь тянет ресайзер влево/вправо (onMouseMove).
   * Колбек срабатывает в момент, когда пользователь отпускает ресайзер (onMouseUp) и столбец принимает окончательную ширину.
   */
  onColumnResize?: (colObj: { name: string; width: string }) => void;
  /** Рендер функция для отрисовки контента ячейки. Входные параметры - объект строки и название столбца */
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
  const iconSize = dimension === 's' || dimension === 'm' ? 16 : 20;
  const defaultSpacer = dimension === 'l' || dimension === 'xl' ? '16px' : '12px';
  const spacer = spacingBetweenItems || defaultSpacer;

  const [cols, setColumns] = React.useState([...columnList]);
  const [verticalScroll, setVerticalScroll] = React.useState(false);
  const [resizerState, updateResizerState] = React.useState({} as any);
  const [tableWidth, setTableWidth] = React.useState(0);
  const [bodyHeight, setBodyHeight] = React.useState(0);
  const [headerScrollWidth, setHeaderScrollWidth] = React.useState(0);
  const [scrollbar, setScrollbarSize] = React.useState(0);

  const stickyColumns = [...cols].filter((col) => col.sticky);

  const tableRef = React.useRef<HTMLDivElement>(null);
  const headerRef = React.useRef<HTMLDivElement>(null);
  const scrollBodyRef = React.useRef<HTMLDivElement>(null);
  const expandCellRef = React.useRef<HTMLDivElement>(null);
  const checkboxCellRef = React.useRef<HTMLDivElement>(null);

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

  const updateColumnsWidths = () => {
    const newCols = [...columnList].map((col) => {
      return {
        ...col,
        width: replaceWidthToNumber(col.width),
        resizerWidth: replaceWidthToNumber(col.width),
      };
    });
    setColumns(newCols);
    updateResizerState({});
  };

  React.useLayoutEffect(() => {
    if (tableRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        entries.forEach(() => {
          setHeaderScrollWidth(headerRef.current?.scrollWidth || 0);
          updateColumnsWidths();

          const size = getScrollbarSize();
          setScrollbarSize(size);
        });
      });
      resizeObserver.observe(tableRef.current);
      return () => {
        resizeObserver.disconnect();
      };
    }
  }, [
    tableRef.current,
    columnList,
    displayRowSelectionColumn,
    displayRowExpansionColumn,
    setHeaderScrollWidth,
    setScrollbarSize,
  ]);

  React.useLayoutEffect(() => {
    const body = scrollBodyRef.current;
    if (body) {
      const observer = observeRect(body, (rect: any) => {
        if (body.scrollHeight > body.offsetHeight) {
          setVerticalScroll(true);
        } else {
          setVerticalScroll(false);
        }
        setTableWidth(rect.width);
        setBodyHeight(rect.height);
      });
      observer.observe();
      return () => {
        observer.unobserve();
      };
    }
  }, [scrollBodyRef.current, setVerticalScroll, setTableWidth, setBodyHeight]);

  const replaceWidthToNumber = React.useCallback(
    (width?: string | number): number => {
      const hasNumberWidth = typeof width === 'number';
      const hasPercentWidth = typeof width === 'string' && width.includes('%');
      const hasPixelWidth = typeof width === 'string' && width.includes('px');

      if (hasPercentWidth && tableRef?.current) {
        const checkboxCellWidth = checkboxCellRef?.current?.clientWidth || 0;
        const expandCellWidth = expandCellRef?.current?.clientWidth || 0;
        const maxWidth = tableRef.current.clientWidth - checkboxCellWidth - expandCellWidth;
        return Math.round((parseInt(width) * (maxWidth || 1)) / 100);
      }
      if (hasNumberWidth) return width;
      if (hasPixelWidth) return parseInt(width);
      return DEFAULT_COLUMN_WIDTH;
    },
    [tableRef.current],
  );

  React.useLayoutEffect(() => {
    const scrollBody = scrollBodyRef.current;

    function scrollHeader(scrollLeft: number) {
      if (headerRef.current) headerRef.current.scrollLeft = scrollLeft;
    }

    function moveOverflowMenu(scrollLeft: number) {
      if (scrollBodyRef.current) {
        const menus = scrollBodyRef.current.querySelectorAll<HTMLElement>('[data-overflowmenu]');
        const scrollbarWidth = verticalScroll ? scrollbar : 0;

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
      return () => scrollBody.removeEventListener('scroll', handleScroll);
    }
  }, [
    tableRef.current,
    headerRef.current,
    scrollBodyRef.current,
    stickyColumns,
    displayRowExpansionColumn,
    displayRowSelectionColumn,
    tableWidth,
    headerScrollWidth,
    scrollbar,
    verticalScroll,
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
      ids[row.id] = !someRowsChecked;
      return ids;
    }, {});
    onRowSelectionChange?.(toRemove);
    onHeaderSelectionChange?.(e.target.checked);
  }

  function handleResizeChange({ name, width, mouseUp }: { name: string; width: number; mouseUp: boolean }) {
    if (mouseUp) {
      onColumnResize?.({ name, width: width + 'px' });
    }
    const newColumns = cols.map((column) =>
      column.name === name
        ? {
            ...column,
            width: width > DEFAULT_COLUMN_WIDTH ? width : DEFAULT_COLUMN_WIDTH,
          }
        : column,
    );
    setColumns(newColumns);
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

  const renderHeaderCell = (
    {
      name,
      title,
      extraText,
      width = DEFAULT_COLUMN_WIDTH,
      resizerWidth,
      cellAlign = 'left',
      sortable = false,
      sort,
      sortOrder,
      disableResize = false,
      renderFilter,
      renderFilterIcon,
      onFilterMenuClickOutside,
      onFilterMenuClose,
      onFilterMenuOpen,
    }: ColumnWithResizerWidth,
    index: number,
  ) => {
    const cellRef = React.createRef<HTMLDivElement>();
    return (
      <HeaderCell
        key={`head_${name}`}
        dimension={dimension}
        style={{ width: width, minWidth: width }}
        className="th"
        ref={cellRef}
      >
        <HeaderCellContent cellAlign={cellAlign}>
          <HeaderCellTitle
            sort={sort || 'initial'}
            onClick={sortable ? () => handleSort(name, sort || 'initial') : undefined}
          >
            <TitleContent dimension={dimension} sortable={sortable}>
              <TitleText dimension={dimension} lineClamp={headerLineClamp} title={title} />
              {extraText && (
                <TitleText extraText dimension={dimension} lineClamp={headerExtraLineClamp} title={extraText} />
              )}
            </TitleContent>
            {sortable && (
              <SortIconWrapper>
                <SortIcon sort={sort || 'initial'} width={iconSize} height={iconSize} />
                {multipleSort && sort && sortOrder && <SortOrder>{sortOrder}</SortOrder>}
              </SortIconWrapper>
            )}
          </HeaderCellTitle>
          <HeaderCellSpacer width={renderFilter ? spacer : `${parseInt(spacer) - parseInt(defaultSpacer)}px`} />
          {renderFilter && (
            <Filter
              dimension={dimension}
              renderFilter={renderFilter}
              renderFilterIcon={renderFilterIcon}
              onFilterMenuClickOutside={onFilterMenuClickOutside}
              onFilterMenuOpen={onFilterMenuOpen}
              onFilterMenuClose={onFilterMenuClose}
              cellAlign={cellAlign}
              targetRef={cellRef}
            />
          )}
        </HeaderCellContent>
        {index < cols.length - 1 && (
          <RowWidthResizer
            name={name}
            width={width ? resizerWidth : DEFAULT_COLUMN_WIDTH}
            onChange={handleResizeChange}
            disabled={disableResize || disableColumnResize}
            resizerState={resizerState}
            dimension={dimension}
          />
        )}
        {index === cols.length - 1 && showDividerForLastColumn && (
          <RowWidthResizer
            name={name}
            width={width ? resizerWidth : DEFAULT_COLUMN_WIDTH}
            onChange={handleResizeChange}
            disabled={disableResize || disableColumnResize}
            resizerState={resizerState}
            dimension={dimension}
          />
        )}
      </HeaderCell>
    );
  };

  const renderBodyCell = (row: TableRow, col: Column) => {
    return (
      <Cell
        key={`${row.id}_${col.name}`}
        dimension={dimension}
        style={{ width: col.width || DEFAULT_COLUMN_WIDTH }}
        className="td"
        data-column={col.name}
        data-row={row.id}
      >
        {renderCell ? (
          renderCell(row, col.name)
        ) : (
          <CellTextContent cellAlign={col.cellAlign}>{row[col.name]}</CellTextContent>
        )}
      </Cell>
    );
  };

  const renderGroupRow = (row: TableRow) => {
    const indeterminate =
      row.groupRows?.some((rowId) => rowToGroupMap[rowId].checked) &&
      row.groupRows?.some((rowId) => !rowToGroupMap[rowId].checked);
    const checked = row.groupRows?.every((rowId) => rowToGroupMap[rowId].checked);

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

  const renderRegularRow = (row: TableRow) => (
    <RegularRow
      row={row}
      dimension={dimension}
      checkboxDimension={checkboxDimension}
      columns={cols}
      stickyColumns={stickyColumns}
      displayRowExpansionColumn={displayRowExpansionColumn}
      displayRowSelectionColumn={displayRowSelectionColumn}
      renderBodyCell={renderBodyCell}
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
        rowWidth={isGroupRow ? headerScrollWidth : undefined}
        verticalScroll={verticalScroll}
        scrollbar={scrollbar}
        grey={zebraRows[row.id]?.includes('even')}
        key={`row_${row.id}`}
      >
        {isGroupRow ? renderGroupRow(row) : renderRegularRow(row)}
      </RowWrapper>
    );

    return renderRowWrapper?.(row, index, node) ?? node;
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

  return (
    <TableContainer ref={tableRef} data-shadow={false} {...props} className={`table ${props.className || ''}`}>
      <HeaderWrapper scrollbar={scrollbar} greyHeader={greyHeader} data-verticalscroll={verticalScroll}>
        <Header dimension={dimension} ref={headerRef} className="tr">
          {(displayRowSelectionColumn || displayRowExpansionColumn || stickyColumns.length > 0) && (
            <StickyWrapper greyHeader={greyHeader}>
              {displayRowExpansionColumn && <ExpandCell ref={expandCellRef} dimension={dimension} />}
              {displayRowSelectionColumn && (
                <CheckboxCell ref={checkboxCellRef} dimension={dimension} className="th_checkbox">
                  <Checkbox
                    dimension={checkboxDimension}
                    checked={allRowsChecked || someRowsChecked || headerCheckboxChecked}
                    indeterminate={(someRowsChecked && !allRowsChecked) || headerCheckboxIndeterminate}
                    disabled={tableRows.length === 0 || headerCheckboxDisabled}
                    onChange={handleHeaderCheckboxChange}
                  />
                </CheckboxCell>
              )}
              {stickyColumns.length > 0 &&
                stickyColumns.map((col, index) => renderHeaderCell(col as ColumnWithResizerWidth, index))}
            </StickyWrapper>
          )}
          {cols.map((col, index) => (col.sticky ? null : renderHeaderCell(col as ColumnWithResizerWidth, index)))}
          <Filler />
        </Header>
      </HeaderWrapper>
      {renderBody()}
    </TableContainer>
  );
};

Table.displayName = 'Table';
