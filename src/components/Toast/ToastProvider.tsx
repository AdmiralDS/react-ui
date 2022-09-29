import type { ReactNode } from 'react';
import * as React from 'react';
import type { IdentifyToast } from '#src/components/Toast/type';
import { uid } from '#src/components/common/uid';

export type PositionToasts = 'top-right' | 'bottom-right' | 'bottom-left';

export interface ToastProps {
  /**позиция всплывающей toast */
  position?: PositionToasts;
  /**ширина контейнера toast */
  widthContainer?: number | string;
  /**время через которое удаляются toast */
  autoDeleteTime?: number;
  /**время через которое удаляются toast */
  children?: ReactNode;
}

export interface IContextProps extends ToastProps {
  addToast: (newToast: IdentifyToast) => string;
  removeToast: (removeToast: IdentifyToast) => void;
  removeById: (toastId: string) => void;
  toasts: IdentifyToast[];
}

export const ToastContext = React.createContext({} as IContextProps);

export const ToastProvider = ({ autoDeleteTime, ...props }: ToastProps) => {
  const [toasts, setToast] = React.useState<IdentifyToast[]>([]);

  const removeToast = React.useCallback((removeToast: IdentifyToast) => {
    setToast((prevToasts) => prevToasts.filter(({ id }) => id !== removeToast.id));
  }, []);

  const removeById = React.useCallback((toastId: string) => {
    setToast((prevToasts) => prevToasts.filter(({ id }) => id !== toastId));
  }, []);

  const addToast = React.useCallback((toast: IdentifyToast) => {
    const idToast = uid();
    const newToast = { ...toast, id: idToast };
    setToast((prevToasts) => {
      const isNewToast = prevToasts.every((toast) => toast.id !== newToast.id);
      if (isNewToast) {
        return [newToast, ...prevToasts];
      }
      return prevToasts;
    });
    return idToast;
  }, []);

  React.useEffect(() => {
    if (!autoDeleteTime) return setToast(toasts);
    const interval = setInterval(() => {
      if (toasts.length) {
        removeToast(toasts[toasts?.length - 1]);
      }
    }, autoDeleteTime);
    return () => clearInterval(interval);
  }, [toasts]);

  const providerValue = React.useMemo(
    () => ({ addToast, removeToast, removeById, toasts }),
    [addToast, removeToast, removeById, toasts],
  );

  return <ToastContext.Provider value={providerValue} children={props.children} />;
};
