import { forwardRef } from 'react';
import { OrderedListComponent, UnorderedListComponent, ListItemComponent, Icon } from './style';

type Dimension = 's' | 'm';

export interface UnorderedListProps extends React.HTMLAttributes<HTMLUListElement> {
  dimension?: Dimension;
  nested?: boolean;
  styleType?: 'bullet' | 'virgule' | 'icon';
  gap?: React.CSSProperties['gap'];
}
export const UnorderedList = ({
  children,
  dimension = 'm',
  nested = false,
  styleType = 'bullet',
  gap = '8px',
  ...props
}: UnorderedListProps) => {
  return (
    <UnorderedListComponent
      data-dimension={dimension}
      data-nested={nested}
      $dimension={dimension}
      $styleType={styleType}
      $gap={gap}
      {...props}
    >
      {children}
    </UnorderedListComponent>
  );
};
UnorderedList.displayName = 'UnorderedList';

export interface OrderedListProps extends React.HTMLAttributes<HTMLOListElement> {
  dimension?: Dimension;
  nested?: boolean;
  styleType?: 'numbers' | 'letters';
  gap?: React.CSSProperties['gap'];
}

export const OrderedList = ({
  children,
  dimension = 'm',
  nested = false,
  styleType = 'numbers',
  gap = '8px',
  ...props
}: OrderedListProps) => {
  return (
    <OrderedListComponent
      data-dimension={dimension}
      data-nested={nested}
      $dimension={dimension}
      $styleType={styleType}
      $gap={gap}
      {...props}
    >
      {children}
    </OrderedListComponent>
  );
};
OrderedList.displayName = 'OrderedList';

export interface ListItemProps extends React.HTMLAttributes<HTMLLIElement> {
  /** Кастомный цвет маркера */
  markerColor?: string;
}

export const ListItem = forwardRef<HTMLLIElement, ListItemProps>(({ children, markerColor, ...props }, ref) => {
  return (
    <ListItemComponent ref={ref} $markerColor={markerColor} {...props}>
      {children}
    </ListItemComponent>
  );
});
ListItem.displayName = 'ListItem';

export interface IconProps extends React.SVGAttributes<SVGElement> {
  /** Элемент, который будет отрисован в качестве иконки */
  as: React.ElementType;
  /** Цвет иконки */
  color?: string;
}

export const ListIcon = ({ as, color, ...props }: IconProps) => {
  return <Icon role="presentation" as={as} color={color} {...props} />;
};
ListIcon.displayName = 'ListIcon';
