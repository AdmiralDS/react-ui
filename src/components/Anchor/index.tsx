import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';
import { AnchorContainer } from './styled';
import type { AnchorDimension } from './Item';
import { AnchorItem } from './Item';

export { AnchorDimension };

export interface AnchorItem {
  key: string;
  href: string;
  title: string;
  children?: Array<AnchorItem>;
}

export interface AnchorProps extends HTMLAttributes<HTMLDivElement> {
  dimension?: AnchorDimension;
  items: Array<AnchorItem>;
}

export const Anchor = forwardRef<HTMLDivElement, AnchorProps>(({ dimension = 'm', items, ...props }, ref) => {
  const renderItems = () => {
    return items.map((item) => (
      <AnchorItem key={item.key} dimension={dimension} href={item.href}>
        {item.title}
      </AnchorItem>
    ));
  };

  return (
    <AnchorContainer {...props} ref={ref}>
      {renderItems()}
    </AnchorContainer>
  );
});
Anchor.displayName = 'Anchor';
