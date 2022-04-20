import * as React from 'react';
import { IConstantSelectContext, IDropDownSelectContext, IOptionContext, IOptionGroupContext } from './types';

const ConstantSelectContext = React.createContext<IConstantSelectContext | null>(null);

export const useConstantSelectContext = () => React.useContext(ConstantSelectContext);

export const ConstantSelectProvider = ({ children, ...restProps }: React.PropsWithChildren<IConstantSelectContext>) => (
  <ConstantSelectContext.Provider value={restProps}>{children}</ConstantSelectContext.Provider>
);

const DropDownSelectContext = React.createContext<IDropDownSelectContext | null>(null);

export const useDropDownSelectContext = () => React.useContext(DropDownSelectContext);

export const DropDownSelectProvider = ({ children, ...restProps }: React.PropsWithChildren<IDropDownSelectContext>) => (
  <DropDownSelectContext.Provider value={restProps}>{children}</DropDownSelectContext.Provider>
);

const OptionContext = React.createContext<IOptionContext | null>(null);

export const useOptionContext = () => React.useContext(OptionContext);

export const OptionProvider = ({ children, ...restProps }: React.PropsWithChildren<IOptionContext>) => (
  <OptionContext.Provider value={restProps}>{children}</OptionContext.Provider>
);

const OptionGroupContext = React.createContext<IOptionGroupContext | null>(null);

export const useOptionGroupContext = () => React.useContext(OptionGroupContext);

export const OptionGroupProvider = ({ children, ...restProps }: React.PropsWithChildren<IOptionGroupContext>) => (
  <OptionGroupContext.Provider value={restProps}>{children}</OptionGroupContext.Provider>
);
