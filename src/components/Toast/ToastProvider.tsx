import type { ReactNode } from 'react';
import * as React from 'react';
import type { IdentifyToast, ID } from '#src/components/Toast/type';
import { uid } from '#src/components/common/uid';
import styled from 'styled-components';
import {
  NotificationItem,
  NotificationItemButtonPanel,
  NotificationItemContent,
  NotificationItemTitle,
} from '#src/components/NotificationItem';
import { Link } from '#src/components/Link';
import { typography } from '#src/components/Typography';
import type { NotificationProps } from '#src/components/Notification';

const StyledNotificationItem = styled(NotificationItem)`
  ${(props) => props.theme.shadow['Shadow 08']}
`;

const StyledLink = styled(Link)`
  ${typography['Button/Button 2']}
`;

const DefaultNotificationItem = ({
  title,
  linkText = '',
  href = '',
  onClose,
  children,
  ...props
}: React.PropsWithChildren<NotificationProps>) => {
  return (
    <StyledNotificationItem {...props} onClose={onClose}>
      {title && <NotificationItemTitle>{title}</NotificationItemTitle>}
      <NotificationItemContent>{children}</NotificationItemContent>
      {linkText && (
        <NotificationItemButtonPanel>
          <StyledLink href={href}>{linkText || href}</StyledLink>
        </NotificationItemButtonPanel>
      )}
    </StyledNotificationItem>
  );
};

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

export interface RenderToastProviderItem {
  /** @deprecated */
  id: ID;
  /** Render функция всплывающего уведомления */
  renderToast: (id: ID) => React.ReactNode;
}

export interface IdentifyToastProviderItem extends Omit<NotificationProps, 'id'>, IdentifyField {}

export interface IContextProps extends ToastProps {
  addToast: (newToast: IdentifyToast) => string;
  addRenderToast: (toast: RenderToastProviderItem) => void;
  removeToast: (removeToast: IdentifyToast) => void;
  removeById: (toastId: ID) => void;
  findRenderToastById: (toastId: ID) => RenderToastProviderItem | undefined;
  removeRenderToast: (toast: RenderToastProviderItem) => void;
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
        removeById(id);
      };

      return <DefaultNotificationItem {...toast} onClose={toast.onClose || handleOnClose} />;
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
    () => ({
      addToast,
      removeToast,
      removeById,
      addRenderToast,
      findRenderToastById,
      removeRenderToast,
      toasts,
      renderToastList,
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
    ],
  );

  return <ToastContext.Provider value={providerValue} children={props.children} />;
};
