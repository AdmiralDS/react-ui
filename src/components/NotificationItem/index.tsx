import { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import type { DataAttributes } from 'styled-components';

import { ReactComponent as InfoIcon } from '@admiral-ds/icons/build/service/InfoSolid.svg';
import { ReactComponent as WarningIcon } from '@admiral-ds/icons/build/service/ErrorSolid.svg';
import { ReactComponent as SuccessIcon } from '@admiral-ds/icons/build/service/CheckSolid.svg';
import { ReactComponent as ErrorIcon } from '@admiral-ds/icons/build/service/CloseSolid.svg';

import { LIGHT_THEME as DEFAULT_THEME } from '#src/components/themes';
import { typography } from '#src/components/Typography';
import { mediumGroupBorderRadius } from '#src/components/themes/borderRadius';
import { CloseIconPlacementButton } from '#src/components/IconPlacement';
import { parseShadow } from '#src/components/common/utils/parseShadowFromTheme';

export type NotificationItemStatus = 'info' | 'error' | 'success' | 'warning';

const getIcon = (status: NotificationItemStatus) => {
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

const backGroundColorMixin = css<{ $status?: NotificationItemStatus }>`
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

const borderColorMixin = css<{ $status?: NotificationItemStatus; $hideBorder?: boolean }>`
  border-color: ${({ theme, $status, $hideBorder }) => {
    if ($hideBorder) {
      return 'transparent';
    }
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

const NotificationItemWrapper = styled.div<{
  $status?: NotificationItemStatus;
  $hideBorder?: boolean;
  $displayStatusIcon: boolean;
  $isClosable: boolean;
}>`
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  border-radius: var(--admiral-border-radius-Medium, ${(p) => mediumGroupBorderRadius(p.theme.shape)});
  padding: 13px 47px 13px 51px;
  ${(p) => (p.$displayStatusIcon ? '' : 'padding-left: 15px;')}
  ${(p) => (p.$isClosable ? '' : 'padding-right: 15px;')}
  border-width: 1px;
  border-style: solid;
  ${borderColorMixin};
  ${backGroundColorMixin};
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

const ButtonPanel = styled.div`
  display: flex;
  margin-top: 4px;
  gap: 16px;
`;

const CloseButton = styled(CloseIconPlacementButton)`
  position: absolute;
  top: 10px;
  right: 12px;
`;

const IconWrapper = styled.div<{ $status?: NotificationItemStatus }>`
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

const nothing = () => {};
export interface NotificationItemProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title' | 'id'> {
  /** Статус notification */
  status?: NotificationItemStatus;
  /** Скрыть обводку notification */
  hideBorder?: boolean;
  /** Переключатель видимости иконки "Close" */
  isClosable?: boolean;
  /** Закрытие notification */
  onClose?: () => void;
  /** Переключатель видимости статусных иконок */
  displayStatusIcon?: boolean;
  /** Конфиг функция пропсов для кнопки закрытия уведомления. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  closeButtonPropsConfig?: (
    props: React.ComponentProps<typeof CloseButton>,
  ) => Partial<React.ComponentProps<typeof CloseButton> & DataAttributes>;
}

NotificationItemWrapper.defaultProps = {
  theme: DEFAULT_THEME,
};

export const NotificationItem = forwardRef<HTMLDivElement, NotificationItemProps>(
  (
    {
      status = 'info',
      hideBorder = false,
      displayStatusIcon = false,
      isClosable = false,
      onClose,
      closeButtonPropsConfig = nothing,
      children,
      ...props
    },
    ref,
  ) => {
    const NotificationIcon = getIcon(status);

    const isAlert = status !== 'info';

    const closeButtonProps = {
      dimension: 'mSmall',
      highlightFocus: false,
      onClick: onClose,
    } satisfies React.ComponentProps<typeof CloseButton>;

    return (
      <NotificationItemWrapper
        {...props}
        ref={ref}
        role={isAlert ? 'alert' : 'status'}
        aria-live={isAlert ? 'assertive' : 'polite'}
        $status={status}
        $hideBorder={hideBorder}
        $displayStatusIcon={displayStatusIcon}
        $isClosable={isClosable}
      >
        {displayStatusIcon && (
          <IconWrapper $status={status}>
            <NotificationIcon />
          </IconWrapper>
        )}
        {children}
        {isClosable && <CloseButton {...closeButtonProps} {...closeButtonPropsConfig(closeButtonProps)} />}
      </NotificationItemWrapper>
    );
  },
);

export const NotificationItemTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ children, ...props }) => {
  return <Title {...props}>{children}</Title>;
};

export const NotificationItemContent: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ children, ...props }) => {
  return <CustomBody {...props}>{children}</CustomBody>;
};

export const NotificationItemButtonPanel: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  ...props
}) => {
  return <ButtonPanel {...props}>{children}</ButtonPanel>;
};

NotificationItem.displayName = 'NotificationItem';

export const StyledNotificationItem = styled(NotificationItem)`
  box-shadow: var(--admiral-box-shadow-Shadow08, ${(p) => parseShadow(p.theme.shadow['Shadow 08'])});
`;
