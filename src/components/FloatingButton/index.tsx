import { forwardRef } from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { FloatingButtonWrapper, FloatingButtonContent, BadgeDot, Badge } from './style';

type Appearance = 'primary' | 'secondary';
type Dimension = 'm' | 'xl';

export interface FloatingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Внешний вид кнопки */
  appearance?: Appearance;
  /** Размер кнопки */
  dimension?: Dimension;
  /** Состояние загрузки */
  loading?: boolean;
  /** Состояние skeleton */
  skeleton?: boolean;
  badge?: ReactNode;
  dot?: boolean;
  status?: 'info' | 'error' | 'success' | 'warning';
  mobile?: boolean;
}

// type = 'button' важно указывать, так как иначе по умолчанию будет submit

export const FloatingButton = forwardRef<HTMLButtonElement, FloatingButtonProps>(
  (
    {
      type = 'button',
      appearance = 'primary',
      dimension = 'm',
      status = 'info',
      badge,
      dot = false,
      mobile = false,
      children,
      ...props
    },
    ref,
  ) => {
    const badgeDimension = dimension === 'xl' ? 'm' : 's';
    return (
      <FloatingButtonWrapper $dimension={dimension} $appearance={appearance} $mobile={mobile} ref={ref} type={type}>
        <FloatingButtonContent $appearance={appearance}>{children}</FloatingButtonContent>
        {typeof badge !== 'undefined' && !dot && (
          <Badge dimension={badgeDimension} appearance={status}>
            {badge}
          </Badge>
        )}
        {dot && <BadgeDot $status={status} $dimension={dimension} />}
      </FloatingButtonWrapper>
    );
  },
);
