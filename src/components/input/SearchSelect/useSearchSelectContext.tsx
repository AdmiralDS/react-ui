import * as React from 'react';
import {
  IOptionContext,
  IOptionGroupContext,
  IConstantSearchSelectContext,
  IDropDownSearchSelectContext,
} from './types';

const ConstantSearchSelectContext = React.createContext<IConstantSearchSelectContext | null>(null);

export const useConstantSearchSelectContext = () => React.useContext(ConstantSearchSelectContext);

export const ConstantSearchSelectProvider = ({
  children,
  ...restProps
}: React.PropsWithChildren<IConstantSearchSelectContext>) => (
  <ConstantSearchSelectContext.Provider value={restProps}>{children}</ConstantSearchSelectContext.Provider>
);

const DropDownSearchSelectContext = React.createContext<IDropDownSearchSelectContext | null>(null);

export const useDropDownSearchSelectContext = () => React.useContext(DropDownSearchSelectContext);

export const DropDownSearchSelectProvider = ({
  children,
  ...restProps
}: React.PropsWithChildren<IDropDownSearchSelectContext>) => (
  <DropDownSearchSelectContext.Provider value={restProps}>{children}</DropDownSearchSelectContext.Provider>
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
