import * as React from 'react';
import observeRect from '#src/components/common/observeRect';
import { getScrollbarSize } from '#src/components/common/dom/scrollbarUtil';
import { TableProvider } from './TableContext';

import { HeaderCellComponent } from './HeaderCell';
import {
  Cell,
  CellTextContent,
  Filler,
  HeaderCellsWrapper,
  HeaderWrapper,
  Header,
  ScrollTableBody,
  TableContainer,
  HiddenHeader,
} from './style';

export const DEFAULT_COLUMN_WIDTH = 100;
const COLUMN_MIN_WIDTH_M = 25;
const COLUMN_MIN_WIDTH_L = 33;

export { TableRow } from '../TableRow';

export type Dimension = 'xl' | 'l' | 'm' | 's';

export type Column = {
  /** Уникальное название столбца */
  name: string;
  /** Заголовок столбца */
  title: React.ReactNode;
  /** Ширина столбца. В качестве ширины можно использовать любое валидное css значение (пиксели, проценты, функция calc...).
   * По умолчанию 100px */
  width?: number | string;
  /** Отключение возможности ресайза колонки */
  disableResize?: boolean;
};

export type RowId = string | number;

export interface TableRow extends Record<RowId, React.ReactNode> {
  id: RowId;
  className?: string;
  /** Строка в состоянии disabled  */
  disabled?: boolean;
  /** Строка в состоянии error */
  error?: boolean;
  /** Строка в состоянии success */
  success?: boolean;
}

export interface TableProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Массив столбцов */
  columnList: Column[];
  /** Количество строк */
  rowCount: number;
  /** Размер таблицы */
  dimension?: Dimension;
  /** Рендер функция для отрисовки контента ячейки. Входные параметры - объект строки и название столбца */
  renderRow: (index: number) => React.ReactNode;
  /** Колбек, который срабатывает при изменении ширины столбца.
   * Данный колбек обязателен в случае, если таблица должна поддерживать ресайзинг.
   * При срабатывании колбек сообщает пользователю о попытке ресайзинга столбца,
   * после чего пользователь должен обновить ширину соответствующего столбца.
   * Таким образом контроль за ресайзингом происходит на стороне пользователя.
   */
  onColumnResize?: (colObj: { name: string; width: string }) => void;
  /** Отображение разделителя для последней колонки. По умолчанию разделитель не отображается */
  showDividerForLastColumn?: boolean;
  /** Отключение возможности ресайза колонок. По умолчанию эта возможность включена */
  disableColumnResize?: boolean;
}

export const Table: React.FC<TableProps> = ({
  columnList,
  rowCount,
  renderRow,
  dimension = 'm',
  onColumnResize,
  showDividerForLastColumn = false,
  disableColumnResize = false,
  ...props
}) => {
  const columnMinWidth = dimension === 's' || dimension === 'm' ? COLUMN_MIN_WIDTH_M : COLUMN_MIN_WIDTH_L;

  const [verticalScroll, setVerticalScroll] = React.useState(false);
  const [tableWidth, setTableWidth] = React.useState(0);
  const [scrollbar, setScrollbarSize] = React.useState(0);

  const tableRef = React.useRef<HTMLDivElement>(null);
  const headerRef = React.useRef<HTMLDivElement>(null);
  const hiddenHeaderRef = React.useRef<HTMLDivElement>(null);
  const scrollBodyRef = React.useRef<HTMLDivElement>(null);

  // rowList раньше был в массиве зависимостей, обдумать этот момент
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
  }, [hiddenHeaderRef.current, headerRef.current, scrollBodyRef.current, columnList, rowCount]);

  React.useEffect(() => {
    const size = getScrollbarSize();
    setScrollbarSize(size);
  }, [setScrollbarSize]);

  React.useLayoutEffect(() => {
    const scrollBody = scrollBodyRef.current;

    function scrollHeader(scrollLeft: number) {
      if (headerRef.current) headerRef.current.scrollLeft = scrollLeft;
    }

    function handleScroll(e: any) {
      if (e.target === scrollBodyRef.current) {
        requestAnimationFrame(function () {
          scrollHeader(e.target.scrollLeft);
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
    tableWidth,
    scrollbar,
    verticalScroll,
    setTableWidth,
    setVerticalScroll,
  ]);

  function handleResizeChange({ name, width }: { name: string; width: number }) {
    onColumnResize?.({ name, width: width + 'px' });
  }

  const renderHeaderCell = (column: Column, index: number) => (
    <HeaderCellComponent
      key={`head_${column.name}`}
      column={column}
      index={index}
      columnsAmount={columnList.length}
      showDividerForLastColumn={showDividerForLastColumn}
      disableColumnResize={disableColumnResize}
      handleResizeChange={handleResizeChange}
      dimension={dimension}
      columnMinWidth={columnMinWidth}
    />
  );

  const renderBodyCell = (row: TableRow, col: Column) => {
    const headerCellWidth = hiddenHeaderRef.current
      ?.querySelector<HTMLElement>(`[data-th-column="${col.name}"]`)
      ?.getBoundingClientRect().width;
    return (
      <Cell
        key={`${row.id}_${col.name}`}
        dimension={dimension}
        style={{ width: headerCellWidth || '100px' }}
        className="td"
        data-column={col.name}
        data-row={row.id}
      >
        {<CellTextContent>{row[col.name]}</CellTextContent>}
      </Cell>
    );
  };

  const renderBody = () => {
    return (
      <ScrollTableBody ref={scrollBodyRef} className="tbody">
        {[...Array(rowCount).keys()].map((index) => renderRow(index))}
      </ScrollTableBody>
    );
  };

  const renderHiddenHeader = () => {
    return (
      <HiddenHeader ref={hiddenHeaderRef}>
        <HeaderCellsWrapper dimension={dimension}>
          {columnList.map((col, index) => renderHeaderCell(col as Column, index))}
        </HeaderCellsWrapper>
      </HiddenHeader>
    );
  };

  return (
    <TableProvider renderBodyCell={renderBodyCell} dimension={dimension} columns={columnList}>
      <TableContainer ref={tableRef} data-shadow={false} {...props} className={`table ${props.className || ''}`}>
        {renderHiddenHeader()}
        <HeaderWrapper scrollbar={scrollbar} data-verticalscroll={verticalScroll}>
          <Header dimension={dimension} ref={headerRef} className="tr">
            {columnList.map((col, index) => renderHeaderCell(col as Column, index))}
            <Filler />
          </Header>
        </HeaderWrapper>
        {renderBody()}
      </TableContainer>
    </TableProvider>
  );
};

Table.displayName = 'Table';
