import * as React from 'react';
import type { SelectContextProps, IOptionGroupContext } from './types';

const ConstantSelectContext = React.createContext<SelectContextProps | null>(null);

export const useConstantSelectContext = () => React.useContext(ConstantSelectContext);

export const ConstantSelectProvider = ({ children, ...restProps }: React.PropsWithChildren<SelectContextProps>) => (
  <ConstantSelectContext.Provider value={restProps}>{children}</ConstantSelectContext.Provider>
);

const OptionGroupContext = React.createContext<IOptionGroupContext | null>(null);

export const useOptionGroupContext = () => React.useContext(OptionGroupContext);

export const OptionGroupProvider = ({ children, ...restProps }: React.PropsWithChildren<IOptionGroupContext>) => (
  <OptionGroupContext.Provider value={restProps}>{children}</OptionGroupContext.Provider>
);
