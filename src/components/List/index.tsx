import { forwardRef } from 'react';
import { ListItemComponent, ListItemContent, Icon } from './style';

// Компоненты списков вынесены в отдельные файлы для правильной генерации контролов в storybook
export * from './OrderedList';
export * from './UnorderedList';

export const ListItem = forwardRef<HTMLLIElement, React.HTMLAttributes<HTMLLIElement>>(
  ({ children, ...props }, ref) => {
    return (
      <ListItemComponent ref={ref} {...props}>
        <ListItemContent>{children}</ListItemContent>
      </ListItemComponent>
    );
  },
);
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
