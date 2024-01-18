import { forwardRef } from 'react';
import type { ButtonHTMLAttributes } from 'react';
import {
  FloatingButtonWrapper,
  FloatingButtonWrapperWithTooltip,
  FloatingButtonContent,
  BadgeDot,
  Badge,
} from './style';

import type { ITooltipProps } from '#src/components/Tooltip';

type Appearance = 'primary' | 'secondary';
type Dimension = 'm' | 'xl';
type Status = 'info' | 'error' | 'success' | 'warning';

export interface FloatingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Внешний вид кнопки */
  appearance?: Appearance;
  /** Размер кнопки */
  dimension?: Dimension;
  /** Отображение компонента вместе с Badge, где badge - это число, которое будет отображено в компоненте Badge */
  badge?: number;
  /** Отображение компонента вместе с Badge Dot */
  badgeDot?: boolean;
  /** Статус компонента */
  status?: Status;
  /** Мобильная версия компонента */
  mobile?: boolean;
  /** Отключение кнопки */
  disabled?: boolean;
  /** */
  tooltip?: string;
  /** */
  tooltipPosition?: ITooltipProps['tooltipPosition'];
}

export const FloatingButton = forwardRef<HTMLButtonElement, FloatingButtonProps>(
  (
    {
      type = 'button',
      appearance = 'primary',
      dimension = 'm',
      status = 'info',
      badge,
      badgeDot,
      mobile = false,
      disabled = false,
      tooltip,
      tooltipPosition = 'left',
      children,
      ...props
    },
    ref,
  ) => {
    const badgeDimension = dimension === 'xl' ? 'm' : 's';

    const renderContent = () => (
      <>
        <FloatingButtonContent $appearance={appearance}>{children}</FloatingButtonContent>
        {typeof badge !== 'undefined' && !badgeDot && (
          <Badge dimension={badgeDimension} appearance={status}>
            {badge}
          </Badge>
        )}
        {badgeDot && <BadgeDot $status={status} $dimension={dimension} />}
      </>
    );

    return tooltip ? (
      <FloatingButtonWrapperWithTooltip
        $dimension={dimension}
        $appearance={appearance}
        $mobile={mobile}
        $disabled={disabled}
        ref={ref}
        type={type}
        renderContent={() => tooltip}
        tooltipPosition={tooltipPosition}
        {...props}
      >
        {renderContent()}
      </FloatingButtonWrapperWithTooltip>
    ) : (
      <FloatingButtonWrapper
        $dimension={dimension}
        $appearance={appearance}
        $mobile={mobile}
        $disabled={disabled}
        ref={ref}
        type={type}
        {...props}
      >
        {renderContent()}
      </FloatingButtonWrapper>
    );
  },
);
