import * as React from 'react';
import { uid } from '#src/components/common/uid';
import type { NotificationProps } from '#src/components/Notification';
import type { IdentifyToast, ID } from '#src/components/Toast/type';
import { DefaultToastItem, ToastItemWithAutoDelete } from '#src/components/Toast/ToastItem';

export type PositionToasts = 'top-right' | 'bottom-right' | 'bottom-left';

export interface ToastProps {
  /**позиция всплывающей toast */
  position?: PositionToasts;
  /**ширина контейнера toast */
  widthContainer?: number | string;
  /**время через которое удаляются toast */
  autoDeleteTime?: number;
  /**время через которое удаляются toast */
  children?: React.ReactNode;
}

export interface RenderToastProviderItem {
  // TODO: описать подробнее
  /** @deprecated */
  id: ID;
  /** Render функция всплывающего уведомления */
  renderToast: (id: ID) => React.ReactNode;
}

export interface IdentifyToastProviderItem extends Omit<NotificationProps, 'id'>, IdentifyField {}

export interface IContextProps extends ToastProps {
  /** @deprecated use renderToastList instead */
  addToast: (newToast: IdentifyToast) => string;
  /** @deprecated use renderToastList instead */
  removeToast: (removeToast: IdentifyToast) => void;
  /** @deprecated use renderToastList instead */
  removeById: (toastId: ID) => void;
  // TODO: описать подробнее
  addRenderToast: (toast: RenderToastProviderItem) => void;
  // TODO: описать подробнее
  findRenderToastById: (toastId: ID) => RenderToastProviderItem | undefined;
  // TODO: описать подробнее
  removeRenderToast: (toast: RenderToastProviderItem) => void;
  // TODO: описать подробнее
  /** @deprecated use renderToastList instead */
  toasts: IdentifyToast[];
  renderToastList: RenderToastProviderItem[];
}

export const ToastContext = React.createContext({} as IContextProps);

interface IdentifyField {
  id: ID;
}

function makeToastList<T extends IdentifyField>(prevList: T[], newToast: T) {
  const isNewToast = prevList.every((item) => item.id !== newToast.id);
  if (isNewToast) {
    return [newToast, ...prevList];
  }
  return prevList;
}

export const ToastProvider = ({ autoDeleteTime, ...props }: ToastProps) => {
  const [toasts, setToast] = React.useState<IdentifyToastProviderItem[]>([]);
  const [renderToastList, setRenderToastList] = React.useState<RenderToastProviderItem[]>([]);

  //--------------model IdentifyToast
  const addToast = React.useCallback((toast: IdentifyToast) => {
    const id = uid();
    const newToast = { ...toast, id };
    setToast((prevToasts) => makeToastList(prevToasts, newToast));

    const renderDefaultNotificationItem = () => {
      const handleOnClose = () => {
        removeRenderToast({ id, renderToast: renderDefaultNotificationItem });
      };

      return (
        <>
          {autoDeleteTime ? (
            <ToastItemWithAutoDelete onRemoveNotification={handleOnClose} autoDeleteTime={autoDeleteTime}>
              <DefaultToastItem {...toast} onClose={toast.onClose || handleOnClose} />
            </ToastItemWithAutoDelete>
          ) : (
            <DefaultToastItem {...toast} onClose={toast.onClose || handleOnClose} />
          )}
        </>
      );
    };
    const newRenderToast = { id: id, renderToast: renderDefaultNotificationItem };
    setRenderToastList((prevToasts) => makeToastList(prevToasts, newRenderToast));
    return id;
  }, []);
  const removeToast = React.useCallback((removeToast: IdentifyToast) => {
    setToast((prevToasts) => prevToasts.filter(({ id }) => id !== removeToast.id));
    setRenderToastList((prevToasts) => prevToasts.filter(({ id }) => id !== removeToast.id));
  }, []);

  const removeById = React.useCallback((toastId: ID) => {
    setToast((prevToasts) => prevToasts.filter(({ id }) => id !== toastId));
    setRenderToastList((prevToasts) => prevToasts.filter(({ id }) => id !== toastId));
  }, []);

  //--------------model RenderToastProviderItem
  const addRenderToast = React.useCallback((renderToastItem: RenderToastProviderItem) => {
    setRenderToastList((prevToasts) => makeToastList(prevToasts, renderToastItem));
  }, []);
  const findRenderToastById = (toastId: ID) => {
    return renderToastList.find((item) => item.id === toastId);
  };
  const removeRenderToast = React.useCallback((removeToast: RenderToastProviderItem) => {
    setRenderToastList((prevToasts) => prevToasts.filter((toast) => toast.renderToast !== removeToast.renderToast));
  }, []);

  const providerValue = React.useMemo(
    () => ({
      addToast,
      removeToast,
      removeById,
      addRenderToast,
      findRenderToastById,
      removeRenderToast,
      toasts,
      renderToastList,
      autoDeleteTime,
    }),
    [
      addToast,
      removeToast,
      removeById,
      addRenderToast,
      findRenderToastById,
      removeRenderToast,
      toasts,
      renderToastList,
      autoDeleteTime,
    ],
  );

  return <ToastContext.Provider value={providerValue} children={props.children} />;
};
