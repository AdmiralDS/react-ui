import { CoreOptions, CoreTableState, CoreInstance } from './core/table';
// import { CoreHeader, CoreHeaderGroup, HeaderContext, HeadersInstance } from './core/headers';
import { ExpandedInstance, ExpandedOptions, ExpandedTableState, ExpandedRow } from './features/RowExpanding';
import { CoreRow } from './core/row';
import { PartialKeys, UnionToIntersection } from './utils';
import { CellContext, CoreCell } from './core/cell';
import { CoreColumn } from './core/column';

export interface TableFeature<TData extends RowData = any> {
  createCell?: (cell: Cell<TData, unknown>, column: Column<TData>, row: Row<TData>, table: Table<TData>) => void;
  createColumn?: (column: Column<TData, unknown>, table: Table<TData>) => void;
  createHeader?: (header: Header<TData, unknown>, table: Table<TData>) => void;
  createRow?: (row: Row<TData>, table: Table<TData>) => void;
  createTable?: (table: Table<TData>) => void;
  getDefaultColumnDef?: () => Partial<ColumnDef<TData, unknown>>;
  getDefaultOptions?: (table: Table<TData>) => Partial<TableOptionsResolved<TData>>;
  getInitialState?: (initialState?: InitialTableState) => Partial<TableState>;
}

export interface TableMeta<TData extends RowData> {}

export interface ColumnMeta<TData extends RowData, TValue> {}

export interface FilterMeta {}

export interface FilterFns {}

export interface SortingFns {}

export interface AggregationFns {}

export type Updater<T> = T | ((old: T) => T);
export type OnChangeFn<T> = (updaterOrValue: Updater<T>) => void;

export type RowData = unknown | object | any[];

export type AnyRender = (Comp: any, props: any) => any;

export interface Table<TData extends RowData> extends CoreInstance<TData>, ExpandedInstance<TData> {}

interface FeatureOptions<TData extends RowData> extends ExpandedOptions<TData> {}

export interface TableOptionsResolved<TData extends RowData> extends CoreOptions<TData>, FeatureOptions<TData> {}

export interface TableOptions<TData extends RowData>
  extends PartialKeys<TableOptionsResolved<TData>, 'state' | 'onStateChange' | 'renderFallbackValue'> {}

export interface TableState extends CoreTableState, ExpandedTableState {}

interface CompleteInitialTableState extends CoreTableState, ExpandedTableState {}

export interface InitialTableState extends Partial<CompleteInitialTableState> {}

export interface Row<TData extends RowData> extends CoreRow<TData>, ExpandedRow {}

export interface RowModel<TData extends RowData> {
  rows: Row<TData>[];
  flatRows: Row<TData>[];
  rowsById: Record<string, Row<TData>>;
}

export type AccessorFn<TData extends RowData, TValue = unknown> = (originalRow: TData, index: number) => TValue;

export type ColumnDefTemplate<TProps extends object> = string | ((props: TProps) => any);

// export type StringOrTemplateHeader<TData, TValue> = string | ColumnDefTemplate<HeaderContext<TData, TValue>>;

export interface StringHeaderIdentifier {
  header: string;
  id?: string;
}

export interface IdIdentifier<TData extends RowData, TValue> {
  id: string;
  // header?: StringOrTemplateHeader<TData, TValue>;
}

type ColumnIdentifiers<TData extends RowData, TValue> = IdIdentifier<TData, TValue> | StringHeaderIdentifier;

//

interface ColumnDefExtensions<TData extends RowData, TValue = unknown> {}

export interface ColumnDefBase<TData extends RowData, TValue = unknown> extends ColumnDefExtensions<TData, TValue> {
  getUniqueValues?: AccessorFn<TData, unknown[]>;
  cell?: ColumnDefTemplate<CellContext<TData, TValue>>;
  meta?: ColumnMeta<TData, TValue>;
}

//

export interface IdentifiedColumnDef<TData extends RowData, TValue = unknown> extends ColumnDefBase<TData, TValue> {
  id?: string;
  // header?: StringOrTemplateHeader<TData, TValue>;
}

export type DisplayColumnDef<TData extends RowData, TValue = unknown> = ColumnDefBase<TData, TValue> &
  ColumnIdentifiers<TData, TValue>;

interface GroupColumnDefBase<TData extends RowData, TValue = unknown> extends ColumnDefBase<TData, TValue> {
  columns?: ColumnDef<TData, any>[];
}

export type GroupColumnDef<TData extends RowData, TValue = unknown> = GroupColumnDefBase<TData, TValue> &
  ColumnIdentifiers<TData, TValue>;

export interface AccessorFnColumnDefBase<TData extends RowData, TValue = unknown> extends ColumnDefBase<TData, TValue> {
  accessorFn: AccessorFn<TData, TValue>;
}

export type AccessorFnColumnDef<TData extends RowData, TValue = unknown> = AccessorFnColumnDefBase<TData, TValue> &
  ColumnIdentifiers<TData, TValue>;

export interface AccessorKeyColumnDefBase<TData extends RowData, TValue = unknown>
  extends ColumnDefBase<TData, TValue> {
  id?: string;
  accessorKey: (string & {}) | keyof TData;
}

export type AccessorKeyColumnDef<TData extends RowData, TValue = unknown> = AccessorKeyColumnDefBase<TData, TValue> &
  Partial<ColumnIdentifiers<TData, TValue>>;

export type AccessorColumnDef<TData extends RowData, TValue = unknown> =
  | AccessorKeyColumnDef<TData, TValue>
  | AccessorFnColumnDef<TData, TValue>;

//

export type ColumnDef<TData extends RowData, TValue = unknown> =
  | DisplayColumnDef<TData, TValue>
  | GroupColumnDef<TData, TValue>
  | AccessorColumnDef<TData, TValue>;

export type ColumnDefResolved<TData extends RowData, TValue = unknown> = Partial<
  UnionToIntersection<ColumnDef<TData, TValue>>
> & {
  accessorKey?: string;
};

export interface Column<TData extends RowData, TValue = unknown> extends CoreColumn<TData, TValue> {}

export interface Cell<TData extends RowData, TValue> extends CoreCell<TData, TValue> {}

export interface Header<TData extends RowData, TValue> {}

export interface HeaderGroup<TData extends RowData> {}
