import * as React from 'react';
import type { IContextProps } from '#src/components/Toast/ToastProvider';
import { ToastContext } from '#src/components/Toast/ToastProvider';

export function useToast(): IContextProps {
  const context = React.useContext(ToastContext);

  return {
    addToast: context?.addToast,
    removeToast: context?.removeToast,
    removeById: context?.removeById,
    addToastItem: context?.addToastItem,
    findToastItemById: context?.findToastItemById,
    removeToastItem: context?.removeToastItem,
    toasts: context?.toasts,
    toastItemList: context?.toastItemList,
    autoDeleteTime: context?.autoDeleteTime,
  };
}
