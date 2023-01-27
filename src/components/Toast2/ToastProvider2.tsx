import * as React from 'react';
import type { PositionToasts } from '#src/components/Toast';
import type { Toast2Props } from '#src/components/Toast2/ToastContainer2';
import type { ReactNode } from 'react';

export interface ToastProvider2Props {
  position?: PositionToasts;
  autoDeleteTime2?: number;
  children?: ReactNode;
}

export interface IContext2Props extends ToastProvider2Props {
  addToast2: (toastId: string) => void;
  removeToast2: (toastId: string) => void;
  toasts2: Toast2Props[];
}

export const ToastProvider2Context = React.createContext({} as IContext2Props);

export const ToastProvider2 = ({ autoDeleteTime2, ...props }: ToastProvider2Props) => {
  const [toasts2, setToasts2] = React.useState<Toast2Props[]>([]);

  const addToast2 = React.useCallback((id: string) => {
    setToasts2((prevState) => [{ id: id }, ...prevState]);
  }, []);

  const removeToast2 = React.useCallback((id: string) => {
    setToasts2((prevState) => prevState.filter((item) => item.id !== id));
  }, []);

  const providerValue = React.useMemo(
    () => ({ addToast2, removeToast2, toasts2, autoDeleteTime2 }),
    [addToast2, removeToast2, toasts2, autoDeleteTime2],
  );

  return <ToastProvider2Context.Provider value={providerValue} children={props.children} />;
};

export function useToast2(): IContext2Props {
  const context = React.useContext(ToastProvider2Context);

  return {
    addToast2: context?.addToast2,
    removeToast2: context?.removeToast2,
    toasts2: context?.toasts2,
    autoDeleteTime2: context?.autoDeleteTime2,
  };
}
