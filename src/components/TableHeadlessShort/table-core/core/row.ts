import { RowData, Cell, Row, Table } from '../types';
import { flattenBy, memo } from '../utils';
import { createCell } from './cell';

export interface CoreRow<TData extends RowData> {
  _getAllCellsByColumnId: () => Record<string, Cell<TData, unknown>>;
  _uniqueValuesCache: Record<string, unknown>;
  _valuesCache: Record<string, unknown>;
  /** The depth of the row (if nested or grouped) relative to the root row array. */
  depth: number;
  /** Returns all of the cells for the row. */
  getAllCells: () => Cell<TData, unknown>[];
  /** Returns the leaf rows for the row, not including any parent rows. */
  getLeafRows: () => Row<TData>[];
  /** Returns the parent row for the row, if it exists. */
  getParentRow: () => Row<TData> | undefined;
  /** Returns the parent rows for the row, all the way up to a root row. */
  getParentRows: () => Row<TData>[];
  /** Returns a unique array of values from the row for a given columnId. */
  getUniqueValues: <TValue>(columnId: string) => TValue[];
  /** Returns the value from the row for a given columnId. */
  getValue: <TValue>(columnId: string) => TValue;
  /** The resolved unique identifier for the row resolved via the `options.getRowId` option. Defaults to the row's index (or relative index if it is a subRow) */
  id: string;
  /** The index of the row within its parent array (or the root data array). */
  index: number;
  /** The original row object provided to the table. If the row is a grouped row, the original row object will be the first original in the group. */
  original: TData;
  /** An array of the original subRows as returned by the `options.getSubRows` option. */
  originalSubRows?: TData[];
  /** If nested, this row's parent row id. */
  parentId?: string;
  /** Renders the value for the row in a given columnId the same as `getValue`, but will return the `renderFallbackValue` if no value is found. */
  renderValue: <TValue>(columnId: string) => TValue;
  /** An array of subRows for the row as returned and created by the `options.getSubRows` option. */
  subRows: Row<TData>[];
}

export const createRow = <TData extends RowData>(
  table: Table<TData>,
  id: string,
  original: TData,
  rowIndex: number,
  depth: number,
  subRows?: Row<TData>[],
  parentId?: string,
): Row<TData> => {
  let row: CoreRow<TData> = {
    id,
    index: rowIndex,
    original,
    depth,
    parentId,
    _valuesCache: {},
    _uniqueValuesCache: {},
    getValue: (columnId) => {
      if (row._valuesCache.hasOwnProperty(columnId)) {
        return row._valuesCache[columnId];
      }

      const column = table.getColumn(columnId);

      if (!column?.accessorFn) {
        return undefined;
      }

      row._valuesCache[columnId] = column.accessorFn(row.original as TData, rowIndex);

      return row._valuesCache[columnId] as any;
    },
    getUniqueValues: (columnId) => {
      if (row._uniqueValuesCache.hasOwnProperty(columnId)) {
        return row._uniqueValuesCache[columnId];
      }

      const column = table.getColumn(columnId);

      if (!column?.accessorFn) {
        return undefined;
      }

      if (!column.columnDef.getUniqueValues) {
        row._uniqueValuesCache[columnId] = [row.getValue(columnId)];
        return row._uniqueValuesCache[columnId];
      }

      row._uniqueValuesCache[columnId] = column.columnDef.getUniqueValues(row.original as TData, rowIndex);

      return row._uniqueValuesCache[columnId] as any;
    },
    renderValue: (columnId) => row.getValue(columnId) ?? table.options.renderFallbackValue,
    subRows: subRows ?? [],
    getLeafRows: () => flattenBy(row.subRows, (d) => d.subRows),
    getParentRow: () => (row.parentId ? table.getRow(row.parentId, true) : undefined),
    getParentRows: () => {
      let parentRows: Row<TData>[] = [];
      let currentRow = row;
      while (true) {
        const parentRow = currentRow.getParentRow();
        if (!parentRow) break;
        parentRows.push(parentRow);
        currentRow = parentRow;
      }
      return parentRows.reverse();
    },
    getAllCells: memo(
      () => [table.getAllColumns()],
      (columns) => {
        return columns.map((column) => {
          return createCell(table, row as Row<TData>, column, column.id);
        });
      },
    ),

    _getAllCellsByColumnId: memo(
      () => [row.getAllCells()],
      (allCells) => {
        return allCells.reduce(
          (acc, cell) => {
            acc[cell.column.id] = cell;
            return acc;
          },
          {} as Record<string, Cell<TData, unknown>>,
        );
      },
    ),
  };

  for (let i = 0; i < table._features.length; i++) {
    const feature = table._features[i];
    feature?.createRow?.(row as Row<TData>, table);
  }

  return row as Row<TData>;
};
