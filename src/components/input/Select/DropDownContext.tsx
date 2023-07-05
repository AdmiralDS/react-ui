import * as React from 'react';
import type { DropDownContextProps } from '#src/components/input/Select/types';

const DropDownContext = React.createContext<DropDownContextProps | null>(null);

export const useDropDownContext = () => React.useContext(DropDownContext);

export const DropDownProvider = ({ children, ...restProps }: React.PropsWithChildren<DropDownContextProps>) => (
  <DropDownContext.Provider value={restProps}>{children}</DropDownContext.Provider>
);
