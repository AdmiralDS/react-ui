import { forwardRef } from 'react';
import type { ButtonHTMLAttributes } from 'react';

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
}

export const FloatingButton = forwardRef<HTMLButtonElement, FloatingButtonProps>((props, ref) => {
  return <button ref={ref}>FloatingButton</button>;
});
