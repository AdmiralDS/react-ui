import type { HTMLAttributes } from 'react';
import { forwardRef, useEffect, useState } from 'react';
import { AnchorContainer } from './styled';

import type { AnchorDimension } from './AnchorItem';
import { AnchorItem } from './AnchorItem';
import { ActiveVerticalSelector, SELECTOR_HEIGHT_M, SELECTOR_HEIGHT_S } from './ActiveVerticalSelector';

export { AnchorDimension };

export interface AnchorItem {
  key: string;
  href: string;
  title: string;
  level?: number;
  children?: Array<AnchorItem>;
}

export interface AnchorProps extends HTMLAttributes<HTMLDivElement> {
  dimension?: AnchorDimension;
  items: Array<AnchorItem>;
}

export const Anchor = forwardRef<HTMLDivElement, AnchorProps>(({ dimension = 'm', items, ...props }, ref) => {
  const [currentItem, setCurrentItem] = useState(0);
  // TODO: get index
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentItem((prev) => (prev + 1) % items.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [currentItem]);
  //<editor-fold desc="Параметры для корректной отрисовки ActiveVerticalSelector">
  const [selectorTop, setSelectorTop] = useState(0);
  const getSelectorPosition = () => {
    // TODO: get index
    const index = currentItem;
    if (index < 0) return 0;
    const height = dimension === 'm' ? SELECTOR_HEIGHT_M : SELECTOR_HEIGHT_S;
    return index * height;
  };
  const styleSelector = () => {
    const top = getSelectorPosition();
    setSelectorTop(top);
  };
  useEffect(() => {
    styleSelector();
  }, [currentItem, dimension]);
  //</editor-fold>

  const renderItems = () => {
    return items.map((item, index) => (
      <AnchorItem
        key={item.key}
        dimension={dimension}
        href={item.href}
        active={index === currentItem}
        level={item.level}
      >
        {item.title}
      </AnchorItem>
    ));
  };

  return (
    <AnchorContainer {...props} ref={ref}>
      {renderItems()}
      <ActiveVerticalSelector $top={selectorTop} $dimension={dimension} $transition={true} />
    </AnchorContainer>
  );
});
Anchor.displayName = 'Anchor';
