import { forwardRef } from 'react';
import { UnorderedListComponent } from './style';
import type { css } from 'styled-components';

type Dimension = 's' | 'm';
type UnorderedStyleType = 'bullet' | 'virgule' | 'icon';

export interface UnorderedListProps extends React.HTMLAttributes<HTMLUListElement> {
  /** Размер компонента */
  dimension?: Dimension;
  /** Стиль маркеров в списке */
  styleType?: UnorderedStyleType;
  /** Расстояние между пунктами списка. По умолчанию 8px */
  gap?: React.CSSProperties['gap'];
  /** Css mixin для кастомизации стилей маркера */
  markerCssMixin?: ReturnType<typeof css>;
}
export const UnorderedList = forwardRef<HTMLUListElement, UnorderedListProps>(
  ({ children, dimension = 'm', styleType = 'bullet', gap = '8px', markerCssMixin, ...props }, ref) => {
    return (
      <UnorderedListComponent
        ref={ref}
        data-dimension={dimension}
        $dimension={dimension}
        $styleType={styleType}
        $gap={gap}
        $markerCssMixin={markerCssMixin}
        {...props}
      >
        {children}
      </UnorderedListComponent>
    );
  },
);
UnorderedList.displayName = 'UnorderedList';
