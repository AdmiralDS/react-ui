import * as React from 'react';
import type { IContextProps } from '#src/components/Toast/ToastProvider';
import { ToastContext } from '#src/components/Toast/ToastProvider';

export function useToast(): IContextProps {
  const context = React.useContext(ToastContext);

  return {
    addToast: context?.addToast,
    removeToast: context?.removeToast,
    removeById: context?.removeById,
    addRenderToast: context?.addRenderToast,
    findRenderToastById: context?.findRenderToastById,
    removeRenderToast: context?.removeRenderToast,
    toasts: context?.toasts,
    renderToastList: context?.renderToastList,
    autoDeleteTime: context?.autoDeleteTime,
  };
}
