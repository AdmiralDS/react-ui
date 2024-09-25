import { forwardRef } from 'react';
import { UnorderedListComponent } from './style';

type Dimension = 's' | 'm';
type UnorderedStyleType = 'bullet' | 'virgule' | 'icon';

export interface UnorderedListProps extends React.HTMLAttributes<HTMLUListElement> {
  /** Размер компонента */
  dimension?: Dimension;
  /** Стиль маркеров в списке */
  styleType?: UnorderedStyleType;
  /** Расстояние между пунктами списка. По умолчанию 8px */
  gap?: React.CSSProperties['gap'];
}
export const UnorderedList = forwardRef<HTMLUListElement, UnorderedListProps>(
  ({ children, dimension = 'm', styleType = 'bullet', gap = '8px', ...props }, ref) => {
    return (
      <UnorderedListComponent
        ref={ref}
        data-dimension={dimension}
        $dimension={dimension}
        $styleType={styleType}
        $gap={gap}
        {...props}
      >
        {children}
      </UnorderedListComponent>
    );
  },
);
UnorderedList.displayName = 'UnorderedList';
