import { functionalUpdate, memo, RequiredKeys } from '../utils';

import {
  Updater,
  TableOptionsResolved,
  TableState,
  Table,
  InitialTableState,
  Row,
  Column,
  RowModel,
  ColumnDef,
  RowData,
  TableMeta,
  GroupColumnDef,
  TableFeature,
} from '../types';

import { createColumn } from './column';
import { RowExpanding } from '../features/RowExpanding';

const builtInFeatures = [RowExpanding] as const;

export interface CoreTableState {}

export interface CoreOptions<TData extends RowData> {
  /** An array of extra features that you can add to the table instance. */
  _features?: TableFeature[];
  /** Set this option to override any of the `autoReset...` feature options. */
  autoResetAll?: boolean;
  /** The array of column defs to use for the table. */
  columns: ColumnDef<TData, any>[];
  /** The data for the table to display. This array should match the type you provided to `table.setRowType<...>`. Columns can access this data via string/index or a functional accessor. When the `data` option changes reference, the table will reprocess the data. */
  data: TData[];
  /** Default column options to use for all column defs supplied to the table.*/
  defaultColumn?: Partial<ColumnDef<TData, unknown>>;
  /** This required option is a factory for a function that computes and returns the core row model for the table. */
  getCoreRowModel: (table: Table<any>) => () => RowModel<any>;
  /** This optional function is used to derive a unique ID for any given row. If not provided the rows index is used (nested rows join together with `.` using their grandparents' index eg. `index.index.index`). If you need to identify individual rows that are originating from any server-side operations, it's suggested you use this function to return an ID that makes sense regardless of network IO/ambiguity eg. a userId, taskId, database ID field, etc. */
  getRowId?: (originalRow: TData, index: number, parent?: Row<TData>) => string;
  /** This optional function is used to access the sub rows for any given row. If you are using nested rows, you will need to use this function to return the sub rows object (or undefined) from the row. */
  getSubRows?: (originalRow: TData, index: number) => undefined | TData[];
  /**
   * Use this option to optionally pass initial state to the table. This state will be used when resetting various table states either automatically by the table (eg. `options.autoResetPageIndex`) or via functions like `table.resetRowSelection()`. Most reset function allow you optionally pass a flag to reset to a blank/default state instead of the initial state.
   *
   * Table state will not be reset when this object changes, which also means that the initial state object does not need to be stable.
   */
  initialState?: InitialTableState;
  /** The `onStateChange` option can be used to optionally listen to state changes within the table.*/
  onStateChange: (updater: Updater<TableState>) => void;
  /** Value used when the desired value is not found in the data. */
  renderFallbackValue: any;
  /**
   * The `state` option can be used to optionally _control_ part or all of the table state. The state you pass here will merge with and overwrite the internal automatically-managed state to produce the final state for the table. You can also listen to state changes via the `onStateChange` option.
   * > Note: Any state passed in here will override both the internal state and any other `initialState` you provide.
   */
  state: Partial<TableState>;
}

export interface CoreInstance<TData extends RowData> {
  _features: readonly TableFeature[];
  _getAllColumnsById: () => Record<string, Column<TData, unknown>>;
  _getColumnDefs: () => ColumnDef<TData, unknown>[];
  _getCoreRowModel?: () => RowModel<TData>;
  _getDefaultColumnDef: () => Partial<ColumnDef<TData, unknown>>;
  _getRowId: (_: TData, index: number, parent?: Row<TData>) => string;
  /**
   * Returns all columns in the table in their normalized and nested hierarchy.
   */
  getAllColumns: () => Column<TData, unknown>[];
  /**
   * Returns a single column by its ID.
   */
  getColumn: (columnId: string) => Column<TData, unknown> | undefined;
  /**
   * Returns the core row model before any processing has been applied.
   */
  getCoreRowModel: () => RowModel<TData>;
  /**
   * Returns the row with the given ID.
   */
  getRow: (id: string, searchAll?: boolean) => Row<TData>;
  /**
   * Returns the final model after all processing from other used features has been applied. This is the row model that is most commonly used for rendering.
   */
  getRowModel: () => RowModel<TData>;
  /**
   * Call this function to get the table's current state. It's recommended to use this function and its state, especially when managing the table state manually. It is the exact same state used internally by the table for every feature and function it provides.
   */
  getState: () => TableState;
  /**
   * This is the resolved initial state of the table.
   */
  initialState: TableState;
  /**
   * A read-only reference to the table's current options.
   */
  options: RequiredKeys<TableOptionsResolved<TData>, 'state'>;
  /**
   * Call this function to reset the table state to the initial state.
   */
  reset: () => void;
  /**
   * This function can be used to update the table options.
   */
  setOptions: (newOptions: Updater<TableOptionsResolved<TData>>) => void;
  /**
   * Call this function to update the table state.
   */
  setState: (updater: Updater<TableState>) => void;
}

export function createTable<TData extends RowData>(options: TableOptionsResolved<TData>): Table<TData> {
  const _features = [...builtInFeatures, ...(options._features ?? [])];

  let table = { _features } as unknown as Table<TData>;

  const defaultOptions = table._features.reduce((obj, feature) => {
    return Object.assign(obj, feature.getDefaultOptions?.(table));
  }, {}) as TableOptionsResolved<TData>;

  const mergeOptions = (options: TableOptionsResolved<TData>) => ({
    ...defaultOptions,
    ...options,
  });

  const coreInitialState: CoreTableState = {};

  let initialState = {
    ...coreInitialState,
    ...(options.initialState ?? {}),
  } as TableState;

  table._features.forEach((feature) => {
    initialState = (feature.getInitialState?.(initialState) ?? initialState) as TableState;
  });

  const coreInstance: CoreInstance<TData> = {
    _features,
    options: {
      ...defaultOptions,
      ...options,
    },
    initialState,
    reset: () => {
      table.setState(table.initialState);
    },
    setOptions: (updater) => {
      const newOptions = functionalUpdate(updater, table.options);
      table.options = mergeOptions(newOptions) as RequiredKeys<TableOptionsResolved<TData>, 'state'>;
    },
    getState: () => {
      return table.options.state as TableState;
    },
    setState: (updater: Updater<TableState>) => {
      table.options.onStateChange?.(updater);
    },

    _getRowId: (row: TData, index: number, parent?: Row<TData>) =>
      table.options.getRowId?.(row, index, parent) ?? `${parent ? [parent.id, index].join('.') : index}`,

    getCoreRowModel: () => {
      if (!table._getCoreRowModel) {
        table._getCoreRowModel = table.options.getCoreRowModel(table);
      }

      return table._getCoreRowModel!();
    },
    getRowModel: () => {
      return table.getExpandedRowModel();
    },
    getRow: (id: string) => {
      let row = table.getRowModel().rowsById[id];

      if (!row) {
        row = table.getCoreRowModel().rowsById[id];
        if (!row) {
          if (process.env.NODE_ENV !== 'production') {
            throw new Error(`getRow could not find row with ID: ${id}`);
          }
          throw new Error();
        }
      }

      return row;
    },

    _getDefaultColumnDef: memo(
      () => [table.options.defaultColumn],
      (defaultColumn) => {
        defaultColumn = (defaultColumn ?? {}) as Partial<ColumnDef<TData, unknown>>;

        return {
          cell: (props) => props.renderValue<any>()?.toString?.() ?? null,
          ...table._features.reduce((obj, feature) => {
            return Object.assign(obj, feature.getDefaultColumnDef?.());
          }, {}),
          ...defaultColumn,
        } as Partial<ColumnDef<TData, unknown>>;
      },
    ),

    _getColumnDefs: () => table.options.columns,
    getAllColumns: memo(
      () => [table._getColumnDefs()],
      (columnDefs) => {
        const recurseColumns = (
          columnDefs: ColumnDef<TData, unknown>[],
          parent?: Column<TData, unknown>,
          depth = 0,
        ): Column<TData, unknown>[] => {
          return columnDefs.map((columnDef) => {
            const column = createColumn(table, columnDef, depth, parent);

            const groupingColumnDef = columnDef as GroupColumnDef<TData, unknown>;

            column.columns = groupingColumnDef.columns
              ? recurseColumns(groupingColumnDef.columns, column, depth + 1)
              : [];

            return column;
          });
        };

        return recurseColumns(columnDefs);
      },
    ),
    _getAllColumnsById: memo(
      () => [table.getAllColumns()],
      (flatColumns) => {
        return flatColumns.reduce(
          (acc, column) => {
            acc[column.id] = column;
            return acc;
          },
          {} as Record<string, Column<TData, unknown>>,
        );
      },
    ),

    getColumn: (columnId) => {
      const column = table._getAllColumnsById()[columnId];
      return column;
    },
  };

  Object.assign(table, coreInstance);

  for (let index = 0; index < table._features.length; index++) {
    const feature = table._features[index];
    feature?.createTable?.(table);
  }

  return table;
}
