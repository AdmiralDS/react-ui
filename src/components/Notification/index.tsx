import React, { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as CloseOutline } from '@admiral-ds/icons/build/service/CloseOutline.svg';
import { ReactComponent as InfoIcon } from '@admiral-ds/icons/build/service/InfoSolid.svg';
import { ReactComponent as WarningIcon } from '@admiral-ds/icons/build/service/ErrorSolid.svg';
import { ReactComponent as SuccessIcon } from '@admiral-ds/icons/build/service/CheckSolid.svg';
import { ReactComponent as ErrorIcon } from '@admiral-ds/icons/build/service/CloseSolid.svg';

import { LIGHT_THEME as DEFAULT_THEME } from '#src/components/themes';
import { typography } from '#src/components/Typography';
import { Link } from '#src/components/Link';

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
    if (status === 'warning') return theme.color['Warning/Warning 10'];
    if (status === 'error') return theme.color['Error/Error 10'];
    if (status === 'success') return theme.color['Success/Success 10'];
    return theme.color['Primary/Primary 10'];
  }};
`;

const borderColorMixin = css<{ status?: Status }>`
  border-color: ${({ theme, status }) => {
    if (status === 'warning') return theme.color['Warning/Warning 50 Main'];
    if (status === 'error') return theme.color['Error/Error 60 Main'];
    if (status === 'success') return theme.color['Success/Success 50 Main'];
    return theme.color['Primary/Primary 60 Main'];
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
  padding: 2px 0;
`;

const Title = styled.div`
  ${typography['Subtitle/Subtitle 3']}
  color: ${({ theme }) => theme.color['Neutral/Neutral 90']};
  margin-bottom: 4px;
`;

const CustomBody = styled.div`
  ${typography['Body/Body 2 Long']}
  color: ${({ theme }) => theme.color['Neutral/Neutral 90']};
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
      fill: ${({ theme }) => theme.color['Neutral/Neutral 50']};
    }
  }
  & svg:hover *[fill^='#'] {
    fill: ${({ theme }) => theme.color['Neutral/Neutral 50']};
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
        if (status === 'warning') return theme.color['Warning/Warning 50 Main'];
        if (status === 'error') return theme.color['Error/Error 60 Main'];
        if (status === 'success') return theme.color['Success/Success 50 Main'];
        return theme.color['Primary/Primary 60 Main'];
      }};
    }
  }
`;

const LinkWrapper = styled(Link)`
  margin-top: 4px;
  ${typography['Button/Button 2']}
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

Notification.displayName = 'Notification';
