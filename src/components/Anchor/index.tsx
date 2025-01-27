import type { HTMLAttributes } from 'react';
import { forwardRef, useCallback, useEffect, useState } from 'react';

import { AnchorContainer } from './styled';
import type { AnchorDimension } from './AnchorItem';
import { AnchorItem } from './AnchorItem';
import { ActiveVerticalSelector, SELECTOR_HEIGHT_M, SELECTOR_HEIGHT_S } from './ActiveVerticalSelector';
import { getInternalCurrentAnchor } from './utils';

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
  getAnchorContainer?: () => HTMLElement | Window;
}

function getDefaultContainer() {
  return window;
}

export const Anchor = forwardRef<HTMLDivElement, AnchorProps>(
  ({ dimension = 'm', items, getAnchorContainer, ...props }, ref) => {
    const getCurrentContainer = getAnchorContainer ?? getDefaultContainer;
    const [activeLink, setActiveLink] = useState<string | null>(null);

    const handleScroll: any = useCallback(() => {
      // if (animating.current) {
      //   return;
      // }
      const links = items.map(({ href }) => href);
      const container = getCurrentContainer();
      const activeLink = getInternalCurrentAnchor(container, links);

      setActiveLink(activeLink);
    }, [getAnchorContainer, items]);

    //<editor-fold desc="Параметры для корректной отрисовки ActiveVerticalSelector">
    const [selectorTop, setSelectorTop] = useState(0);
    const getSelectorPosition = () => {
      const index = items.findIndex((item) => item.href === activeLink);
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
    }, [activeLink, dimension]);
    //</editor-fold>

    useEffect(() => {
      const container = getCurrentContainer();
      container.addEventListener('scroll', handleScroll);
      return () => {
        container.removeEventListener('scroll', handleScroll);
      };
    }, [getAnchorContainer, handleScroll]);

    const renderItems = () => {
      return items.map((item) => (
        <AnchorItem
          key={item.key}
          dimension={dimension}
          href={item.href}
          active={item.href === activeLink}
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
  },
);
Anchor.displayName = 'Anchor';
