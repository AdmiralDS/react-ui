import styled from 'styled-components';
import { typography } from '#src/components/Typography';

const ListComponent = styled.ul<{ $dimension: Dimension; $nested: boolean }>`
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
  padding-inline-start: ${(p) => (p.$nested ? (p.$dimension == 'm' ? 32 : 28) : 0)}px;
  ${(p) => (p.$dimension == 'm' ? typography['Body/Body 1 Long'] : typography['Body/Body 2 Long'])}
  list-style-position: inside;
  list-style-type: disc;
`;

const OrderedListComponent = styled.ol<{ $dimension: Dimension; $nested: boolean }>`
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
  padding-inline-start: ${(p) => (p.$nested ? (p.$dimension == 'm' ? 32 : 28) : 0)}px;
  ${(p) => (p.$dimension == 'm' ? typography['Body/Body 1 Long'] : typography['Body/Body 2 Long'])}

  &, ol {
    list-style-type: none;
    counter-reset: item 0;
  }

  li {
    counter-increment: item 1;
  }
  li::before {
    content: counters(item, '.');
  }
`;

type Dimension = 's' | 'm';
type ListStyleType = 'bullet' | 'virgule' | 'icon' | 'numbers' | 'letters';

export interface ListProps extends React.HTMLAttributes<HTMLUListElement> {
  dimension?: Dimension;
  nested?: boolean;
  listStyle?: ListStyleType;
}

export const List = ({ children, dimension = 'm', nested = false, listStyle = 'bullet', ...props }: ListProps) => {
  return (
    <ListComponent data-dimension={dimension} $dimension={dimension} $nested={nested}>
      {children}
    </ListComponent>
  );
};

const Icon = styled.svg<{ color?: string }>`
  ul[data-dimension='m'] & {
    width: 24px;
    height: 24px;
  }
  ul[data-dimension='s'] & {
    width: 20px;
    height: 20px;
  }
  margin-inline-end: 8px;
  *[fill^='#'] {
    fill: ${(p) =>
      p.color ? p.color : `var(--admiral-color-Neutral_Neutral50, ${p.theme.color['Neutral/Neutral 50']})`};
  }
`;

// forwardRef ?
export interface IconProps extends React.SVGAttributes<SVGElement> {
  /**
   * Позволяет рендерить компонент, используя другой тег HTML (https://styled-components.com/docs/api#as-polymorphic-prop).
   */
  as: React.ElementType;
  /** Цвет иконки */
  color?: string;
}

export const ListIcon = ({ as, color }: IconProps) => {
  return <Icon role="presentation" as={as} color={color} />;
};

ListIcon.displayName = 'ListIcon';
