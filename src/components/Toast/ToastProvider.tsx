import * as React from 'react';
import { uid } from '#src/components/common/uid';
import type { NotificationProps } from '#src/components/Notification';
import type { IdentifyToast, ID } from '#src/components/Toast/type';
import { DefaultToastItem, ToastItemWithAutoDelete } from '#src/components/Toast/ToastItem';

export type PositionToasts = 'top-right' | 'bottom-right' | 'bottom-left';

export interface ToastProps {
  /** Позиция всплывающего уведомления */
  position?: PositionToasts;
  /** Ширина контейнера уведомлений */
  widthContainer?: number | string;
  /** Время, через которое удаляются уведомления */
  autoDeleteTime?: number;
  /** Элементы, имеющие доступ к контексту */
  children?: React.ReactNode;
}

export interface ToastItemProps {
  /** @deprecated В дальнейшем для идентификации уведомления будет использоваться render функция.
   * Идентификатор уведомления */
  id: ID;
  /** Render функция всплывающего уведомления */
  renderToast: (id: ID) => React.ReactNode;
}

export interface IdentifyToastItemProps extends Omit<NotificationProps, 'id'>, IdentifyField {}

export interface IContextProps extends ToastProps {
  /** @deprecated Не рекомендуется использовать в связи с переходом на новую структуру ToastProvider.
   * Используйте addRenderToast.
   * Добавление всплывающего уведомления через модель для Notification */
  addToast: (newToast: IdentifyToast) => string;
  /** @deprecated Не рекомендуется использовать в связи с переходом на новую структуру ToastProvider.
   * Используйте removeRenderToast.
   * Удаление всплывающего уведомления через модель для Notification */
  removeToast: (removeToast: IdentifyToast) => void;
  /** @deprecated Не рекомендуется использовать в связи с переходом на новую структуру ToastProvider.
   * Используйте removeRenderToast.
   * Удаление всплывающего уведомления по идентификатору */
  removeById: (toastId: ID) => void;
  /** Добавление всплывающего уведомления.
   * Позволяет передавать в качестве уведомления любой необходимый элемент */
  addToastItem: (toast: ToastItemProps) => void;
  /** Получение всплывающего уведомления по идентификатору */
  findToastItemById: (toastId: ID) => ToastItemProps | undefined;
  /** Удаление всплывающего уведомления */
  removeToastItem: (toast: ToastItemProps) => void;
  /** @deprecated Не рекомендуется использовать в связи с переходом на новую структуру ToastProvider.
   * Используйте renderToastList.
   * Список существующих уведомлений */
  toasts: IdentifyToast[];
  /** Список существующих уведомлений */
  toastItemList: ToastItemProps[];
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
  const [toasts, setToast] = React.useState<IdentifyToastItemProps[]>([]);
  const [toastItemList, setToastItemList] = React.useState<ToastItemProps[]>([]);

  //--------------model IdentifyToast
  const addToast = React.useCallback((toast: IdentifyToast) => {
    const id = uid();
    const newToast = { ...toast, id };
    setToast((prevToasts) => makeToastList(prevToasts, newToast));

    const renderDefaultNotificationItem = () => {
      const handleOnClose = () => {
        removeToastItem({ id, renderToast: renderDefaultNotificationItem });
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
    setToastItemList((prevToasts) => makeToastList(prevToasts, newRenderToast));
    return id;
  }, []);
  const removeToast = React.useCallback((removeToast: IdentifyToast) => {
    setToast((prevToasts) => prevToasts.filter(({ id }) => id !== removeToast.id));
    setToastItemList((prevToasts) => prevToasts.filter(({ id }) => id !== removeToast.id));
  }, []);

  const removeById = React.useCallback((toastId: ID) => {
    setToast((prevToasts) => prevToasts.filter(({ id }) => id !== toastId));
    setToastItemList((prevToasts) => prevToasts.filter(({ id }) => id !== toastId));
  }, []);

  //--------------model RenderToastProviderItem
  const addToastItem = React.useCallback((toastItem: ToastItemProps) => {
    setToast((prevToasts) => makeToastList(prevToasts, { id: toastItem.id }));
    setToastItemList((prevToasts) => makeToastList(prevToasts, toastItem));
  }, []);
  const findToastItemById = (toastId: ID) => {
    return toastItemList.find((item) => item.id === toastId);
  };
  const removeToastItem = React.useCallback((removeToast: ToastItemProps) => {
    setToast((prevToasts) => prevToasts.filter(({ id }) => id !== removeToast.id));
    setToastItemList((prevToasts) => prevToasts.filter((toast) => toast.renderToast !== removeToast.renderToast));
  }, []);

  const providerValue = React.useMemo(
    () => ({
      addToast,
      removeToast,
      removeById,
      addToastItem,
      findToastItemById,
      removeToastItem,
      toasts,
      toastItemList,
      autoDeleteTime,
    }),
    [
      addToast,
      removeToast,
      removeById,
      addToastItem,
      findToastItemById,
      removeToastItem,
      toasts,
      toastItemList,
      autoDeleteTime,
    ],
  );

  return <ToastContext.Provider value={providerValue} children={props.children} />;
};
