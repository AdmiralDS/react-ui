import * as React from 'react';
import type { HTMLAttributes } from 'react';
import { Row, SimpleRow, Filler } from '#src/components/TableRefactor/style';
import type { TableRow as TableRowType } from '#src/components/TableRefactor';
import { useTableContext } from '#src/components/TableRefactor/TableContext';

export interface RowWrapperProps extends HTMLAttributes<HTMLDivElement> {
  row: TableRowType;
}

export const TableRow = ({ row, ...props }: RowWrapperProps) => {
  const context = useTableContext();

  return (
    <Row
      {...props}
      underline
      disabled={!!row.disabled}
      dimension={context.dimension}
      className={`tr ${row.className || ''}`}
    >
      <SimpleRow
        className="tr-simple"
        selected={!!row.selected}
        disabled={!!row.disabled}
        error={!!row.error}
        success={!!row.success}
        hover={!!row.hover}
      >
        {context.columns.map((col) => (col.sticky ? null : context.renderBodyCell(row, col)))}
        <Filler />
      </SimpleRow>
    </Row>
  );
};
