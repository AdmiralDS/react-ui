import { forwardRef, useContext, useMemo } from 'react';
import type { ButtonHTMLAttributes } from 'react';
import {
  FloatingButtonWrapper,
  FloatingButtonWrapperWithTooltip,
  FloatingButtonContent,
  Badge,
  BadgeDot,
} from './style';

import type { ITooltipProps } from '#src/components/Tooltip';
import { FloatingButtonMenuContext } from '#src/components/FloatingButton/FloatingButtonMenuContext';

type Appearance = 'primary' | 'secondary';
type Dimension = 'm' | 'xl';
type BadgeProps = {
  count?: number;
  dot?: boolean;
  appearance?: 'info' | 'error' | 'success' | 'warning';
};

export * from './FloatingButtonMenu';

export interface FloatingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Внешний вид кнопки */
  appearance?: Appearance;
  /** Размер кнопки */
  dimension?: Dimension;
  /** */
  badge?: BadgeProps;
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
      appearance: propAppearance = 'primary',
      dimension: propDimension = 'm',
      badge,
      mobile = false,
      disabled: propDisabled = false,
      tooltip,
      tooltipPosition = 'left',
      children,
      ...props
    },
    ref,
  ) => {
    const {
      dimension: contextDimension,
      appearance: contextAppearance,
      disabled: contextDisabled,
    } = useContext(FloatingButtonMenuContext);
    const appearance = useMemo(() => contextAppearance ?? propAppearance, [contextAppearance, propAppearance]);
    const dimension = useMemo(() => contextDimension ?? propDimension, [contextDimension, propDimension]);
    const disabled = useMemo(() => contextDisabled ?? propDisabled, [contextDisabled, propDisabled]);

    const displayBadge = badge && badge.count && !badge.dot;
    const displayDot = badge && badge.dot;

    const renderContent = () => (
      <>
        <FloatingButtonContent $appearance={appearance}>{children}</FloatingButtonContent>
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
        $dimension={dimension}
        $appearance={appearance}
        $mobile={mobile}
        disabled={disabled}
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
        disabled={disabled}
        ref={ref}
        type={type}
        {...props}
      >
        {renderContent()}
      </FloatingButtonWrapper>
    );
  },
);

FloatingButton.displayName = 'FloatingButton';
