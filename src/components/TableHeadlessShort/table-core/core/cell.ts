import { RowData, Cell, Column, Row, Table } from '../types';
import { Getter, memo } from '../utils';

export interface CellContext<TData extends RowData, TValue> {
  cell: Cell<TData, TValue>;
  column: Column<TData, TValue>;
  getValue: Getter<TValue>;
  renderValue: Getter<TValue | null>;
  row: Row<TData>;
  table: Table<TData>;
}

export interface CoreCell<TData extends RowData, TValue> {
  /** The associated Column object for the cell. */
  column: Column<TData, TValue>;
  /** Returns the rendering context (or props) for cell-based components like cells and aggregated cells. Use these props with your framework's `flexRender` utility to render these using the template of your choice: */
  getContext: () => CellContext<TData, TValue>;
  /** Returns the value for the cell, accessed via the associated column's accessor key or accessor function. */
  getValue: CellContext<TData, TValue>['getValue'];
  /** The unique ID for the cell across the entire table. */
  id: string;
  /** Renders the value for a cell the same as `getValue`, but will return the `renderFallbackValue` if no value is found. */
  renderValue: CellContext<TData, TValue>['renderValue'];
  /** The associated Row object for the cell. */
  row: Row<TData>;
}

export function createCell<TData extends RowData, TValue>(
  table: Table<TData>,
  row: Row<TData>,
  column: Column<TData, TValue>,
  columnId: string,
): Cell<TData, TValue> {
  const getRenderValue = () => cell.getValue() ?? table.options.renderFallbackValue;

  const cell: CoreCell<TData, TValue> = {
    id: `${row.id}_${column.id}`,
    row,
    column,
    getValue: () => row.getValue(columnId),
    renderValue: getRenderValue,
    getContext: memo(
      () => [table, column, row, cell],
      (table, column, row, cell) => ({
        table,
        column,
        row,
        cell: cell as Cell<TData, TValue>,
        getValue: cell.getValue,
        renderValue: cell.renderValue,
      }),
    ),
  };

  table._features.forEach((feature) => {
    feature.createCell?.(cell as Cell<TData, TValue>, column, row as Row<TData>, table);
  }, {});

  return cell as Cell<TData, TValue>;
}
