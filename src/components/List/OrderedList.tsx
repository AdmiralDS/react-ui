import { forwardRef } from 'react';
import { OrderedListComponent } from './style';
import type { css } from 'styled-components';

type Dimension = 's' | 'm';
type OrderedStyleType = 'numbers' | 'lower-letters' | 'upper-letters';

export interface OrderedListProps extends React.HTMLAttributes<HTMLOListElement> {
  /** Размер компонента */
  dimension?: Dimension;
  /** Стиль маркеров в списке */
  styleType?: OrderedStyleType;
  /** Расстояние между пунктами списка. По умолчанию 8px */
  gap?: React.CSSProperties['gap'];
  /** Css mixin для кастомизации стилей маркера */
  markerCssMixin?: ReturnType<typeof css>;
}

export const OrderedList = forwardRef<HTMLOListElement, OrderedListProps>(
  ({ children, dimension = 'm', styleType = 'numbers', gap = '8px', markerCssMixin, ...props }, ref) => {
    return (
      <OrderedListComponent
        ref={ref}
        data-dimension={dimension}
        $dimension={dimension}
        $styleType={styleType}
        $gap={gap}
        $markerCssMixin={markerCssMixin}
        {...props}
      >
        {children}
      </OrderedListComponent>
    );
  },
);
OrderedList.displayName = 'OrderedList';
