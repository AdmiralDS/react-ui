import React from 'react';
import { RowWrapper } from './Row/RowWrapper';
import type { TableRow as Row, RowId, Column } from '.';
import { GroupRow } from './Row/GroupRow';
import { RegularRow } from './Row/RegularRow';

interface TableProps extends React.HTMLAttributes<HTMLDivElement>, Options {
  row: Row;
}

export interface Options {
  dimension: any;
  scrollbar: number;
  tableWidth: number;
  headerScrollWidth?: number;
  verticalScroll: boolean;
  displayRowExpansionColumn: boolean;
  displayRowSelectionColumn: boolean;
  onRowSelectionChange?: (id: RowId, selected: boolean) => void;
  onRowExpansionChange?: (id: RowId, expanded: boolean) => void;
  renderCell?: (row: Row, columnName: string) => React.ReactNode;
  renderBodyCell: (row: Row, col: Column) => React.ReactNode;
  columnList: Column[];
}

export const TableRow: React.FC<TableProps> = ({
  dimension,
  row,
  scrollbar,
  tableWidth,
  headerScrollWidth,
  verticalScroll,
  displayRowExpansionColumn,
  displayRowSelectionColumn,
  onRowExpansionChange,
  onRowSelectionChange,
  renderCell,
  renderBodyCell,
  columnList,
  ...props
}) => {
  const isGroupRow = typeof row.groupRows !== 'undefined' && !!row.groupTitle;
  const checkboxDimension = dimension === 's' || dimension === 'm' ? 's' : 'm';
  const stickyColumns = [...columnList].filter((col) => col.sticky);

  function handleExpansionChange(id: RowId) {
    onRowExpansionChange?.(id, !row.expanded);
  }

  function handleCheckboxChange(id: RowId) {
    // onRowSelectionChange?.(id, !row.selected);
  }

  const renderGroupRow = (row: Row) => {
    let indeterminate, checked;
    // const indeterminate =
    //   row.groupRows?.some((rowId) => rowToGroupMap[rowId].checked) &&
    //   row.groupRows?.some((rowId) => !rowToGroupMap[rowId].checked);

    const hasGroupRows = row.groupRows?.length;
    // const checked = hasGroupRows ? row.groupRows?.every((rowId) => rowToGroupMap[rowId].checked) : row.selected;

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

  const renderRegularRow = (row: Row) => (
    <RegularRow
      row={row}
      dimension={dimension}
      checkboxDimension={checkboxDimension}
      columns={columnList}
      stickyColumns={stickyColumns}
      displayRowExpansionColumn={displayRowExpansionColumn}
      displayRowSelectionColumn={displayRowSelectionColumn}
      renderBodyCell={renderBodyCell}
      onRowExpansionChange={handleExpansionChange}
      onRowSelectionChange={handleCheckboxChange}
    />
  );
  return (
    <RowWrapper
      dimension={dimension}
      row={row}
      //   underline={(isLastRow && showLastRowUnderline) || !isLastRow}
      underline
      tableWidth={tableWidth}
      isGroup={isGroupRow}
      rowWidth={isGroupRow ? headerScrollWidth : undefined}
      verticalScroll={verticalScroll}
      scrollbar={scrollbar}
      //   grey={zebraRows[row.id]?.includes('even')}
      key={`row_${row.id}`}
      {...props}
    >
      {isGroupRow ? renderGroupRow(row) : renderRegularRow(row)}
    </RowWrapper>
  );
};
