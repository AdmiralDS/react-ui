import type { HTMLAttributes } from 'react';
import { forwardRef, useCallback, useEffect, useState } from 'react';

import { AnchorContainer } from './styled';
import type { AnchorDimension } from './AnchorItem';
import { ANCHOR_ITEM_HEIGHT_M, ANCHOR_ITEM_HEIGHT_S, AnchorItem } from './AnchorItem';
import { ActiveVerticalSelector } from './ActiveVerticalSelector';
import { getInternalCurrentAnchor } from './utils';

export { AnchorDimension };

export interface AnchorLinkItemProps {
  key: string;
  href: string;
  title: string;
  children?: Array<AnchorLinkItemProps>;
}

export interface AnchorProps extends HTMLAttributes<HTMLDivElement> {
  /** Размер компонента */
  dimension?: AnchorDimension;
  /** Сдвиг сверху при расчете положения прокрутки, в пикселях */
  offsetTop?: number;
  /** Границы зоны якоря, в пикселях */
  bounds?: number;
  /** Многострочное отображение текста, по умолчанию false */
  multilineView?: boolean;
  /** Элементы для отображения */
  items: Array<AnchorLinkItemProps>;
  /** Элемент для отслеживания скролла */
  getAnchorContainer?: () => HTMLElement | Window;
}

function getDefaultContainer() {
  return window;
}

interface NodesMapItem extends Omit<AnchorLinkItemProps, 'children'> {
  parent?: string;
  level: number;
}

const itemHasChildren = (item: AnchorLinkItemProps) =>
  !!item.children && Array.isArray(item.children) && item.children.length > 0;

const treeToFlat = (tree: Array<AnchorLinkItemProps>, level = 0, parent?: string): Array<NodesMapItem> => {
  return tree.reduce((acc: Array<NodesMapItem>, item) => {
    const key = item.key.toString();
    const { href, title } = item;
    acc.push({ key, href, title, parent, level });
    if (item.children && itemHasChildren(item)) {
      const map = treeToFlat(item.children, level + 1, key);
      return [...acc, ...map];
    }

    return acc;
  }, []);
};

export const Anchor = forwardRef<HTMLDivElement, AnchorProps>(
  ({ dimension = 'm', multilineView = false, items, getAnchorContainer, ...props }, ref) => {
    const getCurrentContainer = getAnchorContainer ?? getDefaultContainer;
    const itemsMap = treeToFlat(items);

    const [activeLink, setActiveLink] = useState<string | null>(null);

    const handleScroll: any = useCallback(() => {
      // TODO: add stop while animating
      // if (animating.current) {
      //   return;
      // }
      const links = itemsMap.map(({ href }) => href);
      const container = getCurrentContainer();
      const activeLink = getInternalCurrentAnchor(container, links);

      setActiveLink(activeLink);
    }, [getAnchorContainer, itemsMap]);

    //<editor-fold desc="Параметры для корректной отрисовки ActiveVerticalSelector">
    const [selectorTop, setSelectorTop] = useState(0);
    const getSelectorPosition = () => {
      const index = itemsMap.findIndex((item) => item.href === activeLink);
      if (index < 0) return 0;
      const height = dimension === 'm' ? ANCHOR_ITEM_HEIGHT_M : ANCHOR_ITEM_HEIGHT_S;
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
      return itemsMap.map((item) => (
        <AnchorItem
          key={item.key}
          dimension={dimension}
          multilineView={multilineView}
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
