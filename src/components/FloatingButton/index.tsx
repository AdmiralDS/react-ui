import { forwardRef } from 'react';
import type { ButtonHTMLAttributes } from 'react';
import type { ITooltipProps } from '#src/components/Tooltip';

import {
  FloatingButtonWrapper,
  FloatingButtonWrapperWithTooltip,
  FloatingButtonContent,
  Badge,
  BadgeDot,
} from './style';

type Appearance = 'primary' | 'secondary';
type Dimension = 'm' | 'xl';
type BadgeProps = {
  /** Число, которое будет прописано в компоненте Badge */
  count?: number;
  /** Отображение компонента в виде BadgeDot */
  dot?: boolean;
  /** Внешний вид компонента Badge. По умолчанию info */
  appearance?: 'info' | 'error' | 'success' | 'warning';
};

export interface FloatingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Внешний вид компонента */
  appearance?: Appearance;
  /** Размер компонента */
  dimension?: Dimension;
  /** Использование компонента вместе с Badge, где параметр badge - это объект с настройками для отображения бейджа */
  badge?: BadgeProps;
  /** Мобильная версия компонента */
  mobile?: boolean;
  /** Отключение компонента */
  disabled?: boolean;
  /** Текст тултипа. Если параметр tooltip не задан, то тултип не отображается */
  tooltip?: string;
  /** Расположение тултипа */
  tooltipPosition?: ITooltipProps['tooltipPosition'];
}

export const FloatingButton = forwardRef<HTMLButtonElement, FloatingButtonProps>(
  (
    {
      type = 'button',
      appearance = 'primary',
      dimension = 'm',
      badge = {},
      mobile = false,
      disabled = false,
      tooltip,
      tooltipPosition = 'left',
      children,
      ...props
    },
    ref,
  ) => {
    const displayBadge = typeof badge.count !== 'undefined' && !badge.dot && !disabled;
    const displayDot = badge.dot && !disabled;

    const renderContent = () => (
      <>
        <FloatingButtonContent $dimension={dimension} $appearance={appearance} $disabled={disabled}>
          {children}
        </FloatingButtonContent>
        {displayBadge && (
          <Badge dimension={dimension == 'xl' ? 'm' : 's'} appearance={badge.appearance ?? 'info'}>
            {badge.count}
          </Badge>
        )}
        {displayDot && <BadgeDot dimension={dimension == 'xl' ? 'l' : 'm'} appearance={badge.appearance ?? 'info'} />}
      </>
    );

    return tooltip ? (
      <FloatingButtonWrapperWithTooltip
        ref={ref}
        type={type}
        disabled={disabled}
        $dimension={dimension}
        $mobile={mobile}
        renderContent={() => tooltip}
        tooltipPosition={tooltipPosition}
        {...props}
      >
        {renderContent()}
      </FloatingButtonWrapperWithTooltip>
    ) : (
      <FloatingButtonWrapper
        ref={ref}
        type={type}
        disabled={disabled}
        $dimension={dimension}
        $mobile={mobile}
        {...props}
      >
        {renderContent()}
      </FloatingButtonWrapper>
    );
  },
);

FloatingButton.displayName = 'FloatingButton';
