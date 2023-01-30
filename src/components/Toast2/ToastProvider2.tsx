import * as React from 'react';
import type { ReactNode } from 'react';
import type { ToastItem2Props } from '#src/components/Toast2/ToastItem2';

export interface ToastProvider2Props {
  /** Время, через которое удаляются уведомления */
  autoDeleteTime2?: number;
  /** Позволяет отображать шкалу времени, через которое закроется уведомление */
  showProgress2?: boolean;
  /** Шаг шкалы времени */
  progressStep2?: number;
  children?: ReactNode;
}

export interface IContext2Props extends ToastProvider2Props {
  /** Добавляет уведомление */
  addToast2: (toastId: string) => void;
  /** Удаляет уведомление */
  removeToast2: (toastId: string) => void;
  /** Список уведомлений */
  toasts2: ToastItem2Props[];
}

export const ToastProvider2Context = React.createContext({} as IContext2Props);

export const ToastProvider2 = ({ autoDeleteTime2, showProgress2, ...props }: ToastProvider2Props) => {
  const [toasts2, setToasts2] = React.useState<ToastItem2Props[]>([]);

  const addToast2 = React.useCallback((id: string) => {
    setToasts2((prevState) => [{ id: id }, ...prevState]);
  }, []);

  const removeToast2 = React.useCallback((id: string) => {
    setToasts2((prevState) => prevState.filter((item) => item.id !== id));
  }, []);

  const providerValue = React.useMemo(
    () => ({ addToast2, removeToast2, toasts2, autoDeleteTime2, showProgress2 }),
    [addToast2, removeToast2, toasts2, autoDeleteTime2, showProgress2],
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
    showProgress2: context?.showProgress2,
    progressStep2: context?.progressStep2,
  };
}
