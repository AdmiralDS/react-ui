import * as React from 'react';
import { CheckboxField } from '#src/components/form';
import observeRect from '#src/components/common/observeRect';
import { useTheme } from 'styled-components';
import { LIGHT_THEME } from '#src/components/themes';
import type { Color } from '#src/components/themes';
import { getScrollbarSize } from '#src/components/common/dom/scrollbarUtil';
import { GroupRow } from '#src/components/Table/Row/GroupRow';
import { RegularRow } from '#src/components/Table/Row/RegularRow';
import { RowWrapper } from '#src/components/Table/Row/RowWrapper';
import { refSetter } from '#src/components/common/utils/refSetter';
import { throttle } from './throttle';

import { HeaderCellComponent } from './HeaderCell';
import { ColumnDrag } from './drag/ColumnDrag';
import { RowDrag } from './drag/RowDrag';
import {
  Cell,
  CellTextContent,
  CheckboxCell,
  EmptyMessage,
  ExpandCell,
  Filler,
  Header,
  HeaderCellsWrapper,
  HeaderWrapper,
  Row,
  ScrollTableBody,
  StickyWrapper,
  NormalWrapper,
  TableContainer,
  HiddenHeader,
  DragCell,
} from './style';
import { VirtualBody } from './VirtualBody';
import type {
  Column,
  TableRow,
  TableProps,
  RowId,
  IdSelectionStatusMap,
  Group,
  GroupRows,
  GroupInfo,
  ZebraRows,
} from './types';

export * from './RowAction';
export type { TableProps, TableRow, Column, RowId, Dimension } from './types';

export const DEFAULT_COLUMN_WIDTH = 100;
const COLUMN_MIN_WIDTH_M = 25;
const COLUMN_MIN_WIDTH_L = 33;
const TABLE_ROW_STATUS_MAP = {
  error: (color: Color) => color['Error/Error 20'],
  success: (color: Color) => color['Success/Success 20'],
};

export const Table = React.forwardRef<HTMLDivElement, TableProps>(
  (
    {
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
      showRowsActions: userShowRowsActions = false,
      virtualScroll,
      locale,
      onColumnDrag,
      rowsDraggable = false,
      onRowDrag,
      rowBackgroundColorByStatusMap: userRowBackgroundColorByStatusMap,
      ...props
    },
    ref,
  ) => {
    const theme = useTheme() || LIGHT_THEME;
    const checkboxDimension = dimension === 's' || dimension === 'm' ? 's' : 'm';
    const columnMinWidth = dimension === 's' || dimension === 'm' ? COLUMN_MIN_WIDTH_M : COLUMN_MIN_WIDTH_L;

    const [verticalScroll, setVerticalScroll] = React.useState(false);
    const [tableWidth, setTableWidth] = React.useState(0);
    const [bodyHeight, setBodyHeight] = React.useState(0);
    const [scrollbar, setScrollbarSize] = React.useState(0);

    const stickyColumns = [...columnList].filter((col) => col.sticky);

    const isAnyColumnDraggable = columnList.filter((col) => !col.sticky && col.draggable).length > 0;
    const isAnyStickyColumnDraggable = columnList.filter((col) => col.sticky && col.draggable).length > 0;

    // show column with backgrounds for row actions only if there are some strokes with
    // overflow menu or single action and userShowRowsActions = true
    const showRowsActions = React.useMemo(
      () => rowList.some((row) => row.actionRender || row.overflowMenuRender) && userShowRowsActions,
      [rowList, userShowRowsActions],
    );

    const rowStatusMap = React.useMemo(
      () => ({ ...TABLE_ROW_STATUS_MAP, ...userRowBackgroundColorByStatusMap }),
      [userRowBackgroundColorByStatusMap],
    );

    const tableRef = React.useRef<HTMLDivElement>(null);
    const headerRef = React.useRef<HTMLDivElement>(null);
    const hiddenHeaderRef = React.useRef<HTMLDivElement>(null);
    const scrollBodyRef = React.useRef<HTMLDivElement>(null);
    const stickyColumnsWrapperRef = React.useRef<HTMLDivElement>(null);
    const normalColumnsWrapperRef = React.useRef<HTMLDivElement>(null);

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
            const indexInGroup = groupToRowsMap[rowToGroupMap[row.id]?.groupId]?.rows.indexOf(String(row.id));
            acc[row.id] = `ingroup ${indexInGroup % 2 === 0 ? 'odd' : 'even'}`;
          } else if (groupToRowsMap[row.id]) {
            acc[row.id] = 'group';
          } else if (index === 0 || acc[tableRows[index - 1]?.id].includes('group')) {
            acc[row.id] = 'odd';
          } else {
            acc[row.id] = acc[tableRows[index - 1]?.id] === 'odd' ? 'even' : 'odd';
          }
          return acc;
        }, {})
      : {};

    React.useLayoutEffect(() => {
      if (hiddenHeaderRef.current) {
        const hiddenColumns = hiddenHeaderRef.current?.querySelectorAll<HTMLElement>('.th');

        function handleResize(entries: any) {
          entries.forEach((entry: any) => {
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
        }

        const listener = throttle((entries: any) => {
          handleResize(entries);
        }, 100);

        const resizeObserver = new ResizeObserver((entries) => {
          console.log('without throttle', entries[0].borderBoxSize[0].inlineSize);
          listener(entries);
        });
        // const resizeObserver = new ResizeObserver((entries) => {
        //   entries.forEach((entry) => {
        //     // find all body cells in the same column as entry column
        //     const bodyCells = scrollBodyRef.current?.querySelectorAll<HTMLElement>(
        //       `[data-column="${(entry.target as HTMLElement).dataset.thColumn}"]`,
        //     );
        //     bodyCells?.forEach((cell) => {
        //       cell.style.width = entry.borderBoxSize[0].inlineSize + 'px';
        //     });

        //     // find all header cells in the same column as entry column
        //     const headerCells = headerRef.current?.querySelectorAll<HTMLElement>(
        //       `[data-th-column="${(entry.target as HTMLElement).dataset.thColumn}"]`,
        //     );
        //     headerCells?.forEach((cell) => {
        //       cell.style.width = entry.borderBoxSize[0].inlineSize + 'px';
        //       cell.style.minWidth = entry.borderBoxSize[0].inlineSize + 'px';
        //     });
        //   });
        // });

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

        function handleObserveRect(rect: any) {
          if (scrollBody) {
            if (scrollBody.scrollHeight > scrollBody.offsetHeight) {
              setVerticalScroll(true);
            } else {
              setVerticalScroll(false);
            }
            setTableWidth(rect.width);
            setBodyHeight(rect.height);
            moveOverflowMenu(scrollBody.scrollLeft);
          }
        }
        const listener = throttle((rect: any) => {
          handleObserveRect(rect);
        }, 150);

        const observer = observeRect(scrollBody, listener);
        // const observer = observeRect(scrollBody, (rect: any) => {
        //   if (scrollBody.scrollHeight > scrollBody.offsetHeight) {
        //     setVerticalScroll(true);
        //   } else {
        //     setVerticalScroll(false);
        //   }
        //   setTableWidth(rect.width);
        //   setBodyHeight(rect.height);
        //   moveOverflowMenu(scrollBody.scrollLeft);
        // });
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
        groupInfo.rows.some((rowId) => rowToGroupMap[rowId]?.checked) &&
        groupInfo.rows.some((rowId) => !rowToGroupMap[rowId]?.checked);
      const checked = groupInfo.rows.every((rowId) => rowToGroupMap[rowId]?.checked);
      return { checked, indeterminate };
    };

    const parentGroupWillBeChecked = (changedDepId: RowId | string) => {
      const groupId = rowToGroupMap[changedDepId]?.groupId;
      const groupInfo = groupId ? groupToRowsMap[groupId] : undefined;

      if (!groupInfo) return;

      const value = groupInfo?.rows.some((rowId) =>
        rowId === changedDepId.toString() ? !rowToGroupMap[rowId]?.checked : rowToGroupMap[rowId]?.checked,
      );
      return { groupId, value };
    };

    function handleCheckboxChange(id: RowId | string) {
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

    function handleExpansionChange(id: RowId | string) {
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

    const renderHeaderCell = (column: Column, index: number, hidden?: boolean) => {
      // const hiddenColWidth = typeof column.width === 'number' ? column.width + 'px' : column.width;
      // const headerCellWidth = hiddenHeaderRef.current
      //   ?.querySelector<HTMLElement>(`[data-th-column="${column.name}"]`)
      //   ?.getBoundingClientRect().width;
      // const normalColWidth = headerCellWidth ? headerCellWidth + 'px' : hiddenColWidth;
      return (
        <HeaderCellComponent
          key={`head_${column.name}`}
          column={column}
          // columnWidth={(hidden ? hiddenColWidth : normalColWidth) || '100px'}
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
    };

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

        return <CellTextContent $cellAlign={col.cellAlign}>{(row as any)[col.name]}</CellTextContent>;
      };

      return (
        <Cell
          key={`${row.id}_${col.name}`}
          $dimension={dimension}
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
        row.groupRows?.some((rowId) => rowToGroupMap[rowId]?.checked) &&
        row.groupRows?.some((rowId) => !rowToGroupMap[rowId]?.checked);

      const hasGroupRows = row.groupRows?.length;
      const checked = hasGroupRows ? row.groupRows?.every((rowId) => rowToGroupMap[rowId]?.checked) : row.selected;

      return (
        <GroupRow
          row={row}
          dimension={dimension}
          checkboxDimension={checkboxDimension}
          displayRowExpansionColumn={displayRowExpansionColumn}
          displayRowSelectionColumn={displayRowSelectionColumn}
          rowsDraggable={rowsDraggable}
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
        rowsDraggable={rowsDraggable}
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
      const visible = rowInGroup ? groupToRowsMap[rowToGroupMap[row.id]?.groupId]?.expanded : true;
      const isLastRow = isLastVisibleRow({ row, isGroupRow, tableRows, index });

      const node = (isGroupRow || visible) && (
        <RowWrapper
          dimension={dimension}
          row={row}
          underline={(isLastRow && showLastRowUnderline) || !isLastRow}
          tableWidth={tableWidth}
          isGroup={isGroupRow}
          groupId={rowToGroupMap[row.id]?.groupId ?? null}
          onRowClick={onRowClick}
          onRowDoubleClick={onRowDoubleClick}
          rowWidth={isGroupRow ? headerRef.current?.scrollWidth : undefined}
          verticalScroll={verticalScroll}
          scrollbar={scrollbar}
          grey={zebraRows[row.id]?.includes('even')}
          showRowsActions={showRowsActions}
          rowStatusMap={rowStatusMap}
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
              $underline={showLastRowUnderline}
              $dimension={dimension}
              className="tr"
              $rowWidth={headerRef.current?.scrollWidth}
            >
              <EmptyMessage $dimension={dimension}>{emptyMessage}</EmptyMessage>
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
        <HiddenHeader ref={hiddenHeaderRef} data-verticalscroll={verticalScroll}>
          {(displayRowSelectionColumn || displayRowExpansionColumn || rowsDraggable) && (
            <StickyWrapper>
              {rowsDraggable && <DragCell $dimension={dimension} />}
              {displayRowExpansionColumn && <ExpandCell $dimension={dimension} />}
              {displayRowSelectionColumn && (
                <CheckboxCell $dimension={dimension}>
                  <CheckboxField dimension={checkboxDimension} />
                </CheckboxCell>
              )}
            </StickyWrapper>
          )}
          <HeaderCellsWrapper
            $expansionColumn={displayRowExpansionColumn}
            $selectionColumn={displayRowSelectionColumn}
            $dimension={dimension}
          >
            {stickyColumns.length > 0 &&
              stickyColumns.map((col, index) => renderHeaderCell(col as Column, index, true))}
            {columnList.map((col, index) => (col.sticky ? null : renderHeaderCell(col as Column, index, true)))}
          </HeaderCellsWrapper>
        </HiddenHeader>
      );
    };

    return (
      <TableContainer
        ref={refSetter(ref, tableRef)}
        data-shadow={false}
        data-dragging={false}
        {...props}
        className={`table ${props.className || ''}`}
      >
        {renderHiddenHeader()}
        <HeaderWrapper
          $scrollbar={scrollbar}
          $greyHeader={greyHeader}
          data-verticalscroll={verticalScroll}
          className="thead"
        >
          <Header $dimension={dimension} ref={headerRef} className="tr">
            {(displayRowSelectionColumn || displayRowExpansionColumn || stickyColumns.length > 0 || rowsDraggable) && (
              <StickyWrapper ref={stickyColumnsWrapperRef} $greyHeader={greyHeader}>
                {rowsDraggable && <DragCell $dimension={dimension} data-draggable={false} data-droppable={false} />}
                {displayRowExpansionColumn && (
                  <ExpandCell $dimension={dimension} data-draggable={false} data-droppable={false} />
                )}
                {displayRowSelectionColumn && (
                  <CheckboxCell
                    $dimension={dimension}
                    className="th_checkbox"
                    data-th-column="checkbox"
                    data-draggable={false}
                    data-droppable={false}
                  >
                    <CheckboxField
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
            <NormalWrapper ref={normalColumnsWrapperRef}>
              {columnList.map((col, index) => (col.sticky ? null : renderHeaderCell(col as Column, index)))}
            </NormalWrapper>
            <Filler />
          </Header>
        </HeaderWrapper>
        {renderBody()}
        <ColumnDrag
          onColumnDrag={onColumnDrag}
          dimension={dimension}
          isAnyColumnDraggable={isAnyColumnDraggable}
          isAnyStickyColumnDraggable={isAnyStickyColumnDraggable}
          tableRef={tableRef}
          scrollBodyRef={scrollBodyRef}
          normalColumnsWrapperRef={normalColumnsWrapperRef}
          stickyColumnsWrapperRef={stickyColumnsWrapperRef}
        />
        <RowDrag
          onRowDrag={onRowDrag}
          dimension={dimension}
          rowsDraggable={rowsDraggable}
          scrollBodyRef={scrollBodyRef}
          rowToGroupMap={rowToGroupMap}
        />
      </TableContainer>
    );
  },
);

Table.displayName = 'Table';
