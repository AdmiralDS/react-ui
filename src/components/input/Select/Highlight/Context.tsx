import * as React from 'react';
import { HighlightContextProps } from '#src/components/input/Select/types';

const HighlightContext = React.createContext<HighlightContextProps | null>(null);

export const useHighlightContext = () => React.useContext(HighlightContext);

export const HighlightProvider = ({ children, ...restProps }: React.PropsWithChildren<HighlightContextProps>) => (
  <HighlightContext.Provider value={restProps}>{children}</HighlightContext.Provider>
);
