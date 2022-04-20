import * as React from 'react';
import type { IContextProps } from '#src/components/Toast/ToastProvider';
import { ToastContext } from '#src/components/Toast/ToastProvider';

export function useToast(): IContextProps {
  const context = React.useContext(ToastContext);

  return {
    addToast: context?.addToast,
    removeToast: context?.removeToast,
    toasts: context?.toasts,
    autoDeleteTime: context?.autoDeleteTime,
  };
}
