import type { ReactNode } from 'react';
import { createContext, useCallback, useMemo, useState } from 'react';

import { uid } from '#src/components/common/uid';
import type { NotificationProps } from '#src/components/Notification';
import type { IdentifyToast, ID } from './type';
import { DefaultToastItem, ToastItemWithAutoDelete } from './ToastItem';

export type PositionToasts = 'top-right' | 'bottom-right' | 'bottom-left';

export interface ToastProps {
  /** Позиция всплывающего уведомления */
  position?: PositionToasts;
  /** Ширина контейнера уведомлений */
  widthContainer?: number | string;
  /** Время, через которое удаляются уведомления */
  autoDeleteTime?: number;
  /** Элементы, имеющие доступ к контексту */
  children?: ReactNode;
}

export interface ToastItemProps {
  /**
   * @deprecated Помечено как deprecated в версии 4.4.0, будет удалено в версии 9.х.х.
   * Взамен для идентификации уведомления используйте render функцию.
   *
   * Идентификатор уведомления */
  id: ID;
  /** Render функция всплывающего уведомления */
  renderToast: (id: ID) => ReactNode;
}

export interface IdentifyToastItemProps extends Omit<NotificationProps, 'id'>, IdentifyField {}

export interface IContextProps extends ToastProps {
  /**
   * @deprecated Помечено как deprecated в версии 4.4.0, будет удалено в версии 9.х.х.
   * Не рекомендуется использовать в связи с переходом на новую структуру ToastProvider.
   * Взамен используйте параметр addToastItem.
   *
   * Добавление всплывающего уведомления через модель для Notification */
  addToast: (newToast: IdentifyToast) => string;
  /**
   * @deprecated Помечено как deprecated в версии 4.4.0, будет удалено в версии 9.х.х.
   * Не рекомендуется использовать в связи с переходом на новую структуру ToastProvider.
   * Взамен используйте параметр removeToastItem.
   *
   * Удаление всплывающего уведомления через модель для Notification */
  removeToast: (removeToast: IdentifyToast) => void;
  /**
   * @deprecated Помечено как deprecated в версии 4.4.0, будет удалено в версии 9.х.х.
   * Не рекомендуется использовать в связи с переходом на новую структуру ToastProvider.
   * Взамен используйте removeToastItem.
   *
   * Удаление всплывающего уведомления по идентификатору */
  removeById: (toastId: ID) => void;
  /** Добавление всплывающего уведомления.
   * Позволяет передавать в качестве уведомления любой необходимый элемент */
  addToastItem: (toast: ToastItemProps) => void;
  /** Получение всплывающего уведомления по идентификатору */
  findToastItemById: (toastId: ID) => ToastItemProps | undefined;
  /** Удаление всплывающего уведомления */
  removeToastItem: (toast: ToastItemProps) => void;
  /**
   * @deprecated Помечено как deprecated в версии 4.4.0, будет удалено в версии 9.х.х.
   * Не рекомендуется использовать в связи с переходом на новую структуру ToastProvider.
   * Взамен используйте параметр toastItemList.
   *
   * Список существующих уведомлений
   **/
  toasts: IdentifyToast[];
  /** Список существующих уведомлений */
  toastItemList: ToastItemProps[];
}

export const ToastContext = createContext({} as IContextProps);

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
  const [toasts, setToast] = useState<IdentifyToastItemProps[]>([]);
  const [toastItemList, setToastItemList] = useState<ToastItemProps[]>([]);

  //--------------model IdentifyToast
  const addToast = useCallback((toast: IdentifyToast) => {
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
  const removeToast = useCallback((removeToast: IdentifyToast) => {
    setToast((prevToasts) => prevToasts.filter(({ id }) => id !== removeToast.id));
    setToastItemList((prevToasts) => prevToasts.filter(({ id }) => id !== removeToast.id));
  }, []);

  const removeById = useCallback((toastId: ID) => {
    setToast((prevToasts) => prevToasts.filter(({ id }) => id !== toastId));
    setToastItemList((prevToasts) => prevToasts.filter(({ id }) => id !== toastId));
  }, []);

  //--------------model RenderToastProviderItem
  const addToastItem = useCallback((toastItem: ToastItemProps) => {
    setToast((prevToasts) => makeToastList(prevToasts, { id: toastItem.id }));
    setToastItemList((prevToasts) => makeToastList(prevToasts, toastItem));
  }, []);
  const findToastItemById = (toastId: ID) => {
    return toastItemList.find((item) => item.id === toastId);
  };
  const removeToastItem = useCallback((removeToast: ToastItemProps) => {
    setToast((prevToasts) => prevToasts.filter(({ id }) => id !== removeToast.id));
    setToastItemList((prevToasts) => prevToasts.filter((toast) => toast.renderToast !== removeToast.renderToast));
  }, []);

  const providerValue = useMemo(
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
