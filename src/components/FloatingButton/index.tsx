import { forwardRef, useContext, useMemo } from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import type { PolymorphicComponentProps, WebTarget } from 'styled-components';
import { FloatingButtonWrapper, FloatingButtonWrapperWithTooltip, FloatingButtonContent, BadgeContent } from './style';

import type { ITooltipProps } from '#src/components/Tooltip';
import { FloatingButtonMenuContext } from '#src/components/FloatingButton/FloatingButtonMenuContext';

type Appearance = 'primary' | 'secondary';
type Dimension = 'm' | 'xl';
type Status = 'info' | 'error' | 'success' | 'warning';

export * from './FloatingButtonMenu';

export interface FloatingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Внешний вид кнопки */
  appearance?: Appearance;
  /** Размер кнопки */
  dimension?: Dimension;
  /** */
  renderBadge?: () => ReactNode;
  /** Мобильная версия компонента */
  mobile?: boolean;
  /** Отключение кнопки */
  disabled?: boolean;
  /** */
  tooltip?: string;
  /** */
  tooltipPosition?: ITooltipProps['tooltipPosition'];
}

// export type FloatingButtonProps = PolymorphicComponentProps<'web', FloatingButtonBaseProps, WebTarget, WebTarget>;
// export const FloatingButton = forwardRef<typeof FloatingButtonWrapper, FloatingButtonProps>(

export const FloatingButton = forwardRef<HTMLButtonElement, FloatingButtonProps>(
  (
    {
      type = 'button',
      appearance: propAppearance = 'primary',
      dimension: propDimension = 'm',
      renderBadge,
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

    const renderContent = () => (
      <>
        <FloatingButtonContent $appearance={appearance}>{children}</FloatingButtonContent>
        {renderBadge && <BadgeContent $dimension={dimension}>{renderBadge()}</BadgeContent>}
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

FloatingButton.displayName = 'FloatingButton';
