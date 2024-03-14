import type { HTMLAttributes } from 'react';
import * as React from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as InfoIcon } from '@admiral-ds/icons/build/service/InfoSolid.svg';
import { ReactComponent as WarningIcon } from '@admiral-ds/icons/build/service/ErrorSolid.svg';
import { ReactComponent as SuccessIcon } from '@admiral-ds/icons/build/service/CheckSolid.svg';
import { ReactComponent as ErrorIcon } from '@admiral-ds/icons/build/service/CloseSolid.svg';

import { LIGHT_THEME as DEFAULT_THEME } from '#src/components/themes';
import { typography } from '#src/components/Typography';
import { Link } from '#src/components/Link';
import { mediumGroupBorderRadius } from '#src/components/themes/borderRadius';
import { CloseIconPlacementButton } from '#src/components/IconPlacement';

export type NotificationStatus = 'info' | 'error' | 'success' | 'warning';

export interface NotificationProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title' | 'id'> {
  /** Статус notification */
  status?: NotificationStatus;
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
  /** Переключатель видимости статусных иконок */
  displayStatusIcon?: boolean;
}

const getIcon = (status: NotificationStatus) => {
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

const backGroundColorMixin = css<{ $status?: NotificationStatus }>`
  background-color: ${({ theme, $status }) => {
    switch ($status) {
      case 'warning':
        return `var(--admiral-color-Warning_Warning10, ${theme.color['Warning/Warning 10']})`;
      case 'error':
        return `var(--admiral-color-Error_Error10, ${theme.color['Error/Error 10']})`;
      case 'success':
        return `var(--admiral-color-Success_Success10, ${theme.color['Success/Success 10']})`;
      case 'info':
      default:
        return `var(--admiral-color-Primary_Primary10, ${theme.color['Primary/Primary 10']})`;
    }
  }};
`;

const borderColorMixin = css<{ $status?: NotificationStatus }>`
  border-color: ${({ theme, $status }) => {
    switch ($status) {
      case 'warning':
        return `var(--admiral-color-Warning_Warning50Main, ${theme.color['Warning/Warning 50 Main']})`;
      case 'error':
        return `var(--admiral-color-Error_Error60Main, ${theme.color['Error/Error 60 Main']})`;
      case 'success':
        return `var(--admiral-color-Success_Success50Main, ${theme.color['Success/Success 50 Main']})`;
      case 'info':
      default:
        return `var(--admiral-color-Primary_Primary60Main, ${theme.color['Primary/Primary 60 Main']})`;
    }
  }};
`;

const NotificationWrapper = styled.div<{
  $status?: NotificationStatus;
  $displayStatusIcon: boolean;
  $isClosable: boolean;
}>`
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  border-radius: var(--admiral-border-radius-Medium, ${(p) => mediumGroupBorderRadius(p.theme.shape)});
  padding: 12px 44px 12px 52px;
  ${(p) => (p.$displayStatusIcon ? '' : 'padding-left: 16px;')}
  ${(p) => (p.$isClosable ? '' : 'padding-right: 16px;')}
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
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
  margin-bottom: 4px;
`;

const CustomBody = styled.div`
  ${typography['Body/Body 2 Long']}
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
`;

const CloseButton = styled(CloseIconPlacementButton)`
  position: absolute;
  top: 10px;
  right: 8px;
`;

const IconWrapper = styled.div<{ $status?: NotificationStatus }>`
  position: absolute;
  top: 12px;
  left: 16px;
  width: 24px;
  height: 24px;
  & svg {
    width: 24px;
    height: 24px;
    & *[fill^='#'] {
      fill: ${({ theme, $status }) => {
        switch ($status) {
          case 'warning':
            return `var(--admiral-color-Warning_Warning50Main, ${theme.color['Warning/Warning 50 Main']})`;
          case 'error':
            return `var(--admiral-color-Error_Error60Main, ${theme.color['Error/Error 60 Main']})`;
          case 'success':
            return `var(--admiral-color-Success_Success50Main, ${theme.color['Success/Success 50 Main']})`;
          case 'info':
          default:
            return `var(--admiral-color-Primary_Primary60Main, ${theme.color['Primary/Primary 60 Main']})`;
        }
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

/**
 * @deprecated use NotificationItem component instead
 */
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
      $status={status}
      $displayStatusIcon={displayStatusIcon}
      $isClosable={isClosable}
      {...props}
    >
      {displayStatusIcon && (
        <IconWrapper $status={status}>
          <NotificationIcon />
        </IconWrapper>
      )}
      <Content>
        {title && <Title>{title}</Title>}
        <CustomBody>{children}</CustomBody>
        {linkText && <LinkWrapper href={href}>{linkText || href}</LinkWrapper>}
      </Content>

      {isClosable && <CloseButton dimension="mSmall" highlightFocus={false} onClick={onClose} />}
    </NotificationWrapper>
  );
};

Notification.displayName = 'Notification';
