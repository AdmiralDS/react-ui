import * as React from 'react';
import { Checkbox } from '#src/components-ver2/Checkbox';
import observeRect from '#src/components/common/observeRect';

import { RowWidthResizer } from './RowWidthResizer';
import { Filter } from './filter/Filter';
import { SCROLLBAR } from './scrollbarUtil';
import {
  ExpandIconWrapper,
  ExpandIcon,
  ExpandCell,
  ExpandedRow,
  ExpandedRowContent,
  Header,
  HeaderCell,
  HeaderCellContent,
  HeaderCellSpacer,
  HeaderCellTitle,
  TableContainer,
  Title,
  ScrollTableBody,
  ScrollbarCompensator,
  SimpleRow,
  SortIcon,
  StickyWrapper,
  Filler,
  Row,
  Cell,
  CellTextContent,
  CheckboxCell,
} from './style';

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
  title: string;
  /** Ширина столбца. По умолчанию 100px */
  width?: number | string;
  /** Выравнивание контента ячеек столбца по левому или правому краю. По умолчанию left */
  cellAlign?: 'left' | 'right';
  /** Является ли столбец сортируемым. По умолчанию false */
  sortable?: boolean;
  /** Дефолтная сортировка столбца (по возрастанию или по убыванию) */
  defaultSort?: 'asc' | 'desc';
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
  /** Строка в состоянии error */
  error?: boolean;
  /** Строка в состоянии success */
  success?: boolean;
  /** Строка в раскрытом состоянии */
  expanded?: boolean;
  /** Функция рендера содержимого раскрытой части строки (детализации строки) */
  expandedRowRender?: (row: any) => React.ReactNode;
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
  onRowSelectionChange?: (idSelectionStatusMap: IdSelectionStatusMap) => void;
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
  /** Отображение разделителя для последней колонки. По умолчанию разделитель не отображается */
  showDividerForLastColumn?: boolean;
  /** Отключение возможности ресайза колонок. По умолчанию эта возможность включена */
  disableColumnResize?: boolean;
  /** Отображение серой линии подчеркивания для последней строки. По умолчанию линия отображается */
  showLastRowUnderline?: boolean;
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
  showDividerForLastColumn = false,
  disableColumnResize = false,
  showLastRowUnderline = true,
  ...props
}) => {
  const checkboxDimension = dimension === 's' || dimension === 'm' ? 's' : 'm';
  const iconSize = dimension === 's' || dimension === 'm' ? 16 : 20;
  const defaultSpacer = dimension === 'l' || dimension === 'xl' ? '16px' : '12px';
  const spacer = spacingBetweenItems || defaultSpacer;

  const [cols, setColumns] = React.useState([...columnList]);
  const [sort, setSort] = React.useState({} as any);
  const [verticalScrollWidth, setVerticalScrollWidth] = React.useState('0px');
  const [resizerState, updateResizerState] = React.useState({} as any);

  const stickyColumns = [...cols].filter((col) => col.sticky);

  const tableRef = React.useRef<HTMLDivElement>(null);
  const headerRef = React.useRef<HTMLDivElement>(null);
  const scrollBodyRef = React.useRef<HTMLDivElement>(null);

  // Счетчик смены сортировки для столбца. При третьем нажатии на столбец сортировка должна отменяться
  const sortedCol = React.useRef<{ name: string; count: number }>({ name: '', count: 0 });

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
      const observer = observeRect(body, () => {
        // есть вертикальный скролл
        if (body.scrollHeight > body.offsetHeight) {
          setVerticalScrollWidth(`${SCROLLBAR}px`);
        } else {
          setVerticalScrollWidth('0px');
        }
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
    const defaultSort = [...columnList].reduce((sortObj, { name, defaultSort }) => {
      if (defaultSort) {
        onSortChange?.({ name, sort: defaultSort });
        sortedCol.current = { name, count: 1 };
      }
      sortObj[name] = defaultSort || 'initial';
      return sortObj;
    }, {} as Record<any, any>);
    setSort(defaultSort);
  }, [columnList]);

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
    onRowSelectionChange?.(idsMap);
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

  const handleSort = (name: string) => {
    let newSort = sort[name] === 'asc' ? 'desc' : 'asc';

    // нажатие на столбец, у которого уже включена сортировка
    if (sortedCol.current.name === name) {
      // если уже дважды нажали, отключаем сортировку
      if (sortedCol.current.count === 2) {
        newSort = 'initial';
        sortedCol.current = { name: '', count: 0 };
      } else {
        sortedCol.current = { name, count: 2 };
      }
    }
    // нажатие на столбец с выключенной сортировкой
    else {
      sortedCol.current = { name, count: 1 };
    }
    const toRemove = cols.reduce((sortObj, col) => {
      sortObj[col.name] = 'initial';
      return sortObj;
    }, {} as Record<any, any>);
    setSort({ ...toRemove, [name]: newSort });

    onSortChange?.({ name, sort: newSort as any });
  };

  const renderHeaderCell = (
    {
      name,
      title,
      width = DEFAULT_COLUMN_WIDTH,
      resizerWidth,
      cellAlign = 'left',
      sortable = false,
      sticky = false,
      renderFilter,
      renderFilterIcon,
      onFilterMenuClickOutside,
      onFilterMenuClose,
      onFilterMenuOpen,
    }: ColumnWithResizerWidth,
    index: number,
  ) => {
    const cellRef = React.useRef(null);
    return (
      <HeaderCell
        key={`head_${name}`}
        style={{ width: width, minWidth: width }}
        data-cellalign={cellAlign}
        data-sort={String(sort[name] || 'initial')}
        data-sticky={sticky}
        className="th"
        ref={cellRef}
      >
        <HeaderCellContent>
          <HeaderCellTitle onClick={sortable ? () => handleSort(name) : undefined}>
            <Title sortable={sortable} lineClamp={headerLineClamp}>
              {title}
            </Title>
            {sortable && <SortIcon width={iconSize} height={iconSize} />}
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
          />
        )}
        {index === cols.length - 1 && showDividerForLastColumn && (
          <RowWidthResizer
            name={name}
            width={width ? resizerWidth : DEFAULT_COLUMN_WIDTH}
            onChange={handleResizeChange}
            disabled={disableColumnResize}
            resizerState={resizerState}
          />
        )}
      </HeaderCell>
    );
  };

  const renderBodyCell = (row: TableRow, col: Column) => {
    return (
      <Cell key={`${row.id}_${col.name}`} style={{ width: col.width || DEFAULT_COLUMN_WIDTH }} className="td">
        {renderCell ? (
          renderCell(row, col.name)
        ) : (
          <CellTextContent cellAlign={col.cellAlign}>{row[col.name]}</CellTextContent>
        )}
      </Cell>
    );
  };

  return (
    <TableContainer ref={tableRef} data-dimension={dimension} data-shadow={false} {...props} className="table">
      <Header greyHeader={greyHeader} ref={headerRef} className="tr" data-underline={true}>
        {(displayRowSelectionColumn || displayRowExpansionColumn || stickyColumns.length > 0) && (
          <StickyWrapper>
            {displayRowExpansionColumn && <ExpandCell />}
            {displayRowSelectionColumn && (
              <CheckboxCell className="th_checkbox">
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
        <ScrollbarCompensator width={verticalScrollWidth} />
      </Header>
      <ScrollTableBody ref={scrollBodyRef} className="tbody">
        {rowList.map((row, index) => (
          <Row
            onClick={() => handleRowClick(row.id)}
            onDoubleClick={() => handleRowDoubleClick(row.id)}
            key={`row_${row.id}`}
            underline={(index === rowList.length - 1 && showLastRowUnderline) || index < rowList.length - 1}
            data-expanded={row.expanded}
            data-selected={!!row.selected}
            data-disabled={!!row.disabled}
            disabled={!!row.disabled}
            data-error={!!row.error}
            data-success={!!row.success}
            className={`tr ${row.className}`}
          >
            <SimpleRow className="tr-simple">
              {(displayRowSelectionColumn || displayRowExpansionColumn || stickyColumns.length > 0) && (
                <StickyWrapper>
                  {displayRowExpansionColumn && (
                    <ExpandCell>
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
                    <CheckboxCell className="td_checkbox">
                      <Checkbox
                        disabled={row.disabled}
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
              <ScrollbarCompensator width={verticalScrollWidth} />
            </SimpleRow>
            {row.expandedRowRender && (
              <ExpandedRow opened={row.expanded} contentMaxHeight="90vh" className="tr-expanded">
                <ExpandedRowContent>{row.expandedRowRender(row)}</ExpandedRowContent>
              </ExpandedRow>
            )}
          </Row>
        ))}
      </ScrollTableBody>
    </TableContainer>
  );
};

Table.displayName = 'Table';
