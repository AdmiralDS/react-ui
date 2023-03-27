import * as React from 'react';
import type { TableProps } from '#src/components/TableRefactor';

type TableContextProps = {
  dimension: TableProps['dimension'];
  hiddenHeaderRef: React.RefObject<HTMLElement>;
  columns: TableProps['columnList'];
  displayRowSelectionColumn?: boolean;
};

const TableContext = React.createContext<TableContextProps>({
  hiddenHeaderRef: { current: null },
  dimension: 'm',
  columns: [],
  displayRowSelectionColumn: false,
});

export const useTableContext = () => React.useContext(TableContext);

export const TableProvider = ({ children, ...restProps }: React.PropsWithChildren<TableContextProps>) => (
  <TableContext.Provider value={restProps}>{children}</TableContext.Provider>
);
