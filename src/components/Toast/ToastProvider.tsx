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
  addToast: (newToast: IdentifyToast) => void;
  removeToast: (removeToast: IdentifyToast) => void;
  clearToasts: () => void;
  toasts: IdentifyToast[];
  removeToastById: (removeId: string) => void;
}

export const ToastContext = React.createContext({} as IContextProps);

export const ToastProvider = ({ autoDeleteTime, ...props }: ToastProps) => {
  const [toasts, setToast] = React.useState<IdentifyToast[]>([]);

  const removeToast = React.useCallback((removeToast: IdentifyToast) => {
    setToast((prevToasts) => prevToasts.filter(({ id }) => id !== removeToast.id));
  }, []);

  const removeToastById = React.useCallback((removeId: string) => {
    setToast((prevToasts) => prevToasts.filter(({ id }) => id !== removeId));
  }, []);

  const addToast = React.useCallback((toast: IdentifyToast) => {
    const idToast = uid();
    const newToast = { ...toast, id: toast?.id || idToast };
    setToast((prevToasts) => {
      const isNewToast = prevToasts.every((toast) => toast.id !== newToast.id);
      if (isNewToast) {
        return [newToast, ...prevToasts];
      }
      return prevToasts;
    });
  }, []);

  const clearToasts = React.useCallback(() => {
    setToast([]);
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
    () => ({ addToast, removeToast, toasts, clearToasts, removeToastById }),
    [addToast, removeToast, toasts],
  );

  return <ToastContext.Provider value={providerValue} children={props.children} />;
};
