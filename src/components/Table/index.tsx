import * as React from 'react';
import { Checkbox } from '#src/components/Checkbox';
import observeRect from '#src/components/common/observeRect';
import { ThemeContext } from 'styled-components';
import { LIGHT_THEME } from '#src/components/themes';

import { RowWidthResizer } from './RowWidthResizer';
import { Filter } from './filter/Filter';
import {
  Cell,
  CellTextContent,
  CheckboxCell,
  ExpandCell,
  ExpandedRow,
  ExpandedRowContent,
  ExpandIcon,
  ExpandIconWrapper,
  Filler,
  Header,
  HeaderCell,
  HeaderCellContent,
  HeaderCellSpacer,
  HeaderCellTitle,
  HeaderWrapperContainer,
  Row,
  ScrollTableBody,
  SimpleRow,
  SortIcon,
  StickyWrapper,
  TableContainer,
  TitleContent,
  EmptyMessage,
  SortOrder,
  SortIconWrapper,
} from './style';
import { TitleText } from './TitleText';
import { VirtualBody } from './VirtualBody';
import { OverflowMenu } from './OverflowMenu';
import { getScrollbarSize } from '#src/components/common/dom/scrollbarUtil';

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

export const HeaderWrapper = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { greyHeader?: boolean }
>((props, ref) => {
  const [scrollbar, setScrollbarSize] = React.useState(16);
  React.useEffect(() => {
    const size = getScrollbarSize();
    setScrollbarSize(size);
  }, []);
  return <HeaderWrapperContainer ref={ref} {...props} scrollbar={scrollbar} />;
});

export type Column = {
  /** Уникальное название столбца */
  name: string;
  /** Заголовок столбца */
  title: string;
  /** Дополнительный текст заголовка столбца */
  extraText?: string;
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

type RowId = string | number;
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
  /** Функция рендера содержимого раскрытой части строки (детализации строки) */
  expandedRowRender?: (row: any) => React.ReactNode;
  /** Функция рендера OverflowMenu для строки.
   * Входные параметры: сама строка, колбеки onMenuOpen и onMenuClose.
   * Колбеки необходимо вызывать при открытии/закрытии меню для того, чтобы таблица могла управлять видимостью OverflowMenu.
   * OverflowMenu отображается при ховере на строку или при открытом меню
   * и располагается по правому краю строки в видимой области таблицы.
   *
   * В качестве результата функция должна возвращать OverflowMenu.
   * Для таблицы с dimension='s' или dimension='m' используется OverflowMenu c dimension='m'.
   * Для таблицы с dimension='l' или dimension='xl' используется OverflowMenu c dimension='l'.
   */
  overflowMenuRender?: (row: any, onMenuOpen: () => void, onMenuClose: () => void) => React.ReactNode;
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
  /** @deprecated Используйте locale.emptyMessage */
  emptyMessage?: React.ReactNode;
  /** Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
   * по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме
   **/
  locale?: {
    /** Сообщение, отображаемое при отсутствии совпадений в строках после применения фильтра */
    emptyMessage?: React.ReactNode;
  };
}

export const Table: React.FC<TableProps> = ({
  columnList,
  rowList,
  displayRowSelectionColumn = false,
  displayRowExpansionColumn = false,
  headerCheckboxChecked = false,
  headerCheckboxIndeterminate = false,
  onHeaderSelectionChange,
  onRowSelectionChange,
  onRowExpansionChange,
  onRowClick,
  onRowDoubleClick,
  onSortChange,
  onColumnResize,
  renderCell,
  dimension = 'm',
  greyHeader = false,
  spacingBetweenItems,
  headerLineClamp = 1,
  headerExtraLineClamp = 1,
  showDividerForLastColumn = false,
  disableColumnResize = false,
  showLastRowUnderline = true,
  virtualScroll,
  emptyMessage: userEmptyMessage,
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

  const stickyColumns = [...cols].filter((col) => col.sticky);

  const tableRef = React.useRef<HTMLDivElement>(null);
  const headerRef = React.useRef<HTMLDivElement>(null);
  const scrollBodyRef = React.useRef<HTMLDivElement>(null);

  const scrollHeader = (scrollLeft: number) => {
    if (headerRef.current) headerRef.current.scrollLeft = scrollLeft;
  };

  const setShadow = (scrollLeft: number) => {
    if (tableRef.current) {
      const initial = tableRef.current.getAttribute('data-shadow');
      if (scrollLeft === 0) {
        if (initial !== 'false') tableRef.current.setAttribute('data-shadow', 'false');
      } else {
        if (initial !== 'true') tableRef.current.setAttribute('data-shadow', 'true');
      }
    }
  };

  const handleScroll = (e: any) => {
    if (e.target === scrollBodyRef.current) {
      requestAnimationFrame(function () {
        scrollHeader(e.target.scrollLeft);
      });
    }
    if (stickyColumns.length > 0 || displayRowSelectionColumn || displayRowExpansionColumn) {
      requestAnimationFrame(function () {
        setShadow(e.target.scrollLeft);
      });
    }
  };

  React.useLayoutEffect(() => {
    if (tableRef.current) {
      const newCols = [...columnList].map((col) => {
        return {
          ...col,
          width: replaceWidthToNumber(col.width),
          resizerWidth: replaceWidthToNumber(col.width),
        };
      });
      setColumns(newCols);
      updateResizerState({});
    }
  }, [tableRef.current, columnList]);

  React.useLayoutEffect(() => {
    const body = scrollBodyRef.current;
    if (body) {
      const observer = observeRect(body, (rect: any) => {
        // есть вертикальный скролл
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
  }, [scrollBodyRef.current]);

  const replaceWidthToNumber = React.useCallback(
    (width?: string | number): number => {
      const hasNumberWidth = typeof width === 'number';
      const hasPercentWidth = typeof width === 'string' && width.includes('%');
      const hasPixelWidth = typeof width === 'string' && width.includes('px');

      if (hasPercentWidth && tableRef?.current) {
        const maxWidth = tableRef?.current?.clientWidth;
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
    if (scrollBody) {
      scrollBody.addEventListener('scroll', handleScroll);
      return () => scrollBody.removeEventListener('scroll', handleScroll);
    }
  }, [scrollBodyRef.current]);

  function handleRowClick(rowId: RowId) {
    onRowClick?.(rowId);
  }

  function handleRowDoubleClick(rowId: RowId) {
    onRowDoubleClick?.(rowId);
  }

  function handleCheckboxChange(id: RowId) {
    const idsMap = rowList.reduce((ids: IdSelectionStatusMap, row) => {
      const value = row.id === id ? !row.selected : !!row.selected;
      ids[row.id] = value;
      return ids;
    }, {});
    onRowSelectionChange?.(idsMap, id);
  }

  function handleCheckboxClick(e: React.MouseEvent<HTMLElement>) {
    // клик по чекбоксу не должен вызывать событие клика по строке
    e.stopPropagation();
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
  const allRowsChecked = rowList.every(isSelected);
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
              <TitleText width={width} dimension={dimension} lineClamp={headerLineClamp}>
                {title}
              </TitleText>
              {extraText && (
                <TitleText extraText width={width} dimension={dimension} lineClamp={headerExtraLineClamp}>
                  {extraText}
                </TitleText>
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
            disabled={disableColumnResize}
            resizerState={resizerState}
            dimension={dimension}
          />
        )}
        {index === cols.length - 1 && showDividerForLastColumn && (
          <RowWidthResizer
            name={name}
            width={width ? resizerWidth : DEFAULT_COLUMN_WIDTH}
            onChange={handleResizeChange}
            disabled={disableColumnResize}
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
      >
        {renderCell ? (
          renderCell(row, col.name)
        ) : (
          <CellTextContent cellAlign={col.cellAlign}>{row[col.name]}</CellTextContent>
        )}
      </Cell>
    );
  };

  const renderRow = (row: TableRow, index: number) => {
    return (
      <Row
        onClick={() => handleRowClick(row.id)}
        onDoubleClick={() => handleRowDoubleClick(row.id)}
        key={`row_${row.id}`}
        underline={(index === rowList.length - 1 && showLastRowUnderline) || index < rowList.length - 1}
        disabled={!!row.disabled}
        dimension={dimension}
        className={`tr ${row.className}`}
      >
        <SimpleRow
          className="tr-simple"
          selected={!!row.selected}
          disabled={!!row.disabled}
          error={!!row.error}
          success={!!row.success}
        >
          {(displayRowSelectionColumn || displayRowExpansionColumn || stickyColumns.length > 0) && (
            <StickyWrapper>
              {displayRowExpansionColumn && (
                <ExpandCell dimension={dimension}>
                  {row.expandedRowRender && (
                    <ExpandIconWrapper>
                      <ExpandIcon
                        $isOpen={row.expanded}
                        data-disabled={row.disabled ? true : undefined}
                        onClick={() => handleExpansionChange(row.id)}
                        aria-hidden
                      />
                    </ExpandIconWrapper>
                  )}
                </ExpandCell>
              )}
              {displayRowSelectionColumn && (
                <CheckboxCell dimension={dimension} className="td_checkbox">
                  <Checkbox
                    disabled={row.disabled || row.checkboxDisabled}
                    dimension={checkboxDimension}
                    checked={!!row.selected}
                    onChange={() => handleCheckboxChange(row.id)}
                    onClick={handleCheckboxClick}
                  />
                </CheckboxCell>
              )}
              {stickyColumns.length > 0 && stickyColumns.map((col) => renderBodyCell(row, col))}
            </StickyWrapper>
          )}
          {cols.map((col) => (col.sticky ? null : renderBodyCell(row, col)))}
          <Filler />
        </SimpleRow>
        {(row.overflowMenuRender || row.actionRender) && (
          <OverflowMenu dimension={dimension} tableWidth={tableWidth} row={row} />
        )}
        {row.expandedRowRender && (
          <ExpandedRow opened={row.expanded} contentMaxHeight="90vh" className="tr-expanded">
            <ExpandedRowContent>{row.expandedRowRender(row)}</ExpandedRowContent>
          </ExpandedRow>
        )}
      </Row>
    );
  };

  const renderBody = () => {
    const emptyMessage =
      userEmptyMessage || locale?.emptyMessage || theme.locales[theme.currentLocale].table.emptyMessage;
    if (rowList.length === 0) {
      return (
        <ScrollTableBody ref={scrollBodyRef} className="tbody">
          <Row underline={showLastRowUnderline} dimension={dimension} className="tr">
            <EmptyMessage dimension={dimension}>{emptyMessage}</EmptyMessage>
          </Row>
        </ScrollTableBody>
      );
    }
    return virtualScroll ? (
      <VirtualBody
        height={bodyHeight}
        rowList={rowList}
        childHeight={virtualScroll.fixedRowHeight}
        renderRow={renderRow}
        ref={scrollBodyRef}
        className="tbody"
      />
    ) : (
      <ScrollTableBody ref={scrollBodyRef} className="tbody">
        {rowList.map((row, index) => renderRow(row, index))}
      </ScrollTableBody>
    );
  };

  return (
    <TableContainer ref={tableRef} data-shadow={false} {...props} className={`table ${props.className}`}>
      <HeaderWrapper greyHeader={greyHeader} data-verticalscroll={verticalScroll}>
        <Header dimension={dimension} ref={headerRef} className="tr">
          {(displayRowSelectionColumn || displayRowExpansionColumn || stickyColumns.length > 0) && (
            <StickyWrapper greyHeader={greyHeader}>
              {displayRowExpansionColumn && <ExpandCell dimension={dimension} />}
              {displayRowSelectionColumn && (
                <CheckboxCell dimension={dimension} className="th_checkbox">
                  <Checkbox
                    dimension={checkboxDimension}
                    checked={allRowsChecked || someRowsChecked || headerCheckboxChecked}
                    indeterminate={(someRowsChecked && !allRowsChecked) || headerCheckboxIndeterminate}
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
