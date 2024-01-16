import { forwardRef } from 'react';
import type { ButtonHTMLAttributes } from 'react';
import { FloatingButtonWrapper, FloatingButtonContent, BadgeDot, Badge } from './style';

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
  /** Состояние загрузки */
  // loading?: boolean;
  /** Состояние skeleton */
  // skeleton?: boolean;
}

export interface FloatingButtonProps2 extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Внешний вид кнопки */
  appearance?: Appearance;
  /** Размер кнопки */
  dimension?: Dimension;
  /** Отображение компонента вместе с Badge, где badge - это число, которое будет отображено в компоненте Badge
   * Если status не задан, то компонент Badge по умолчанию окрасится в цвет info
   */
  badge?: number;
  /** Статус компонента, если параметр задан, то статус будет отображен через Badge Dot */
  status?: Status;
  /** Мобильная версия компонента */
  mobile?: boolean;
  /** Состояние загрузки */
  // loading?: boolean;
  /** Состояние skeleton */
  // skeleton?: boolean;
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
      children,
      ...props
    },
    ref,
  ) => {
    const badgeDimension = dimension === 'xl' ? 'm' : 's';
    return (
      <FloatingButtonWrapper
        $dimension={dimension}
        $appearance={appearance}
        $mobile={mobile}
        ref={ref}
        type={type}
        {...props}
      >
        <FloatingButtonContent $appearance={appearance}>{children}</FloatingButtonContent>
        {typeof badge !== 'undefined' && !badgeDot && (
          <Badge dimension={badgeDimension} appearance={status}>
            {badge}
          </Badge>
        )}
        {badgeDot && <BadgeDot $status={status} $dimension={dimension} />}
      </FloatingButtonWrapper>
    );
  },
);
