import type { FC } from 'react';
import React, { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as CloseOutline } from '@admiral-ds/icons/build/service/CloseOutline.svg';
import { ReactComponent as InfoIcon } from '@admiral-ds/icons/build/service/InfoSolid.svg';
import { ReactComponent as WarningIcon } from '@admiral-ds/icons/build/service/ErrorSolid.svg';
import { ReactComponent as SuccessIcon } from '@admiral-ds/icons/build/service/CheckSolid.svg';
import { ReactComponent as ErrorIcon } from '@admiral-ds/icons/build/service/CloseSolid.svg';

import { DEFAULT_THEME } from '../common';
import { typography } from '#/components/Typography';
import { Link } from '#/components/Link';

type Status = 'info' | 'error' | 'success' | 'warning';

export interface NotificationProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title' | 'id'> {
  /** Статус notification */
  status?: Status;
  /** Заголовок notification */
  title?: React.ReactNode;
  /** Название для ссылки */
  linkText?: string;
  /** Url ссылки */
  href?: string;
  /** Переключатель видимости иконки "Close" */
  isClosable?: boolean;
  /** Закрытие notification */
  onClose?: () => void;
  /** Переключатель видимоти статусных иконок */
  displayStatusIcon?: boolean;
}

const getIcon = (status: Status) => {
  switch (status) {
    case 'info':
      return InfoIcon;
    case 'error':
      return ErrorIcon;
    case 'success':
      return SuccessIcon;
    case 'warning':
    default:
      return WarningIcon;
  }
};

const backGroundColorMixin = css<{ status?: Status }>`
  background-color: ${({ theme, status }) => {
    if (status === 'warning') return theme.color.background.surfaceWarn;
    if (status === 'error') return theme.color.background.surfaceDanger;
    if (status === 'success') return theme.color.background.surfaceSuccess;
    return theme.color.background.secondary;
  }};
`;

const borderColorMixin = css<{ status?: Status }>`
  border-color: ${({ theme, status }) => {
    if (status === 'warning') return theme.color.status.warn;
    if (status === 'error') return theme.color.status.danger;
    if (status === 'success') return theme.color.status.success;
    return theme.color.basic.primary;
  }};
`;

const NotificationWrapper = styled.div<{ status?: Status; displayStatusIcon: boolean; isClosable: boolean }>`
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 12px 44px 12px 52px;
  ${(p) => (p.displayStatusIcon ? '' : 'padding-left: 16px;')}
  ${(p) => (p.isClosable ? '' : 'padding-right: 16px;')}
  border-width: 1px;
  border-style: solid;
  ${borderColorMixin};
  ${backGroundColorMixin};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2px 0px;
`;

const Title = styled.div`
  ${typography['Additional/S-bold']}
  color: ${({ theme }) => theme.color.text.primary};
  margin-bottom: 4px;
`;

const CustomBody = styled.div`
  ${typography['Additional/S']}
  color: ${({ theme }) => theme.color.text.primary};
`;

const Close = styled.div`
  position: absolute;
  top: 14px;
  right: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 20px;
  height: 20px;

  & svg {
    width: 20px;
    height: 20px;
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color.text.secondary};
    }
  }
  & svg:hover *[fill^='#'] {
    fill: ${({ theme }) => theme.color.basic.hover};
  }
`;

const IconWrapper = styled.div<{ status?: Status }>`
  position: absolute;
  top: 11px;
  left: 15px;
  width: 24px;
  height: 24px;
  & svg {
    width: 24px;
    height: 24px;
    & *[fill^='#'] {
      fill: ${({ theme, status }) => {
        if (status === 'warning') return theme.color.status.warn;
        if (status === 'error') return theme.color.status.danger;
        if (status === 'success') return theme.color.status.success;
        return theme.color.basic.primary;
      }};
    }
  }
`;

const LinkWrapper = styled(Link)`
  margin-top: 4px;
  ${typography['Button/S']}
`;

NotificationWrapper.defaultProps = {
  theme: DEFAULT_THEME,
};

export const Notification = ({
  status = 'info',
  title,
  linkText = '',
  href = '',
  displayStatusIcon = false,
  isClosable = false,
  onClose,
  children,
  ...props
}: React.PropsWithChildren<NotificationProps>) => {
  const NotificationIcon = getIcon(status);

  const isAlert = status !== 'info';

  return (
    <NotificationWrapper
      role={isAlert ? 'alert' : 'status'}
      aria-live={isAlert ? 'assertive' : 'polite'}
      status={status}
      displayStatusIcon={displayStatusIcon}
      isClosable={isClosable}
      {...props}
    >
      {displayStatusIcon && (
        <IconWrapper status={status}>
          <NotificationIcon />
        </IconWrapper>
      )}
      <Content>
        {title && <Title>{title}</Title>}
        <CustomBody>{children}</CustomBody>
        {linkText && <LinkWrapper href={href}>{linkText || href}</LinkWrapper>}
      </Content>

      {isClosable && (
        <Close onClick={onClose} tabIndex={0}>
          <CloseOutline />
        </Close>
      )}
    </NotificationWrapper>
  );
};
