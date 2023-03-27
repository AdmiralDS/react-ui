import * as React from 'react';

type Dimension = 'xl' | 'l' | 'm' | 's';

type TableContextProps = {
  dimension: Dimension;
  hiddenHeaderRef: React.RefObject<HTMLElement>;
  columns: any[];
};

const TableContext = React.createContext<TableContextProps>({
  hiddenHeaderRef: { current: null },
  dimension: 'm',
  columns: [],
});

export const useTableContext = () => React.useContext(TableContext);

export const TableProvider = ({ children, ...restProps }: React.PropsWithChildren<TableContextProps>) => (
  <TableContext.Provider value={restProps}>{children}</TableContext.Provider>
);
