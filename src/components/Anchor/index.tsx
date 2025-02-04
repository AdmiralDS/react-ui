import type { HTMLAttributes, RefObject } from 'react';
import { createRef, forwardRef, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { AnchorContainer } from './styled';
import type { AnchorDimension } from './AnchorItem';
import { AnchorItem } from './AnchorItem';
import { ActiveVerticalSelector } from './ActiveVerticalSelector';
import { getInternalCurrentAnchor } from './utils';
import { debounce } from '../common/utils/debounce';
import { refSetter } from '../common/utils/refSetter';

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
type NodesMapItemWithRefProps = NodesMapItem & { ref: RefObject<HTMLAnchorElement> };

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
  ({ dimension = 'm', offsetTop = 0, bounds = 5, multilineView = false, items, getAnchorContainer, ...props }, ref) => {
    const getCurrentContainer = getAnchorContainer ?? getDefaultContainer;
    const itemsMap = useMemo(() => treeToFlat(items), [items]);
    // add refs to links
    const itemsWithRef: Array<NodesMapItemWithRefProps> = useMemo(() => {
      return itemsMap.map((item) => ({ ...item, ref: createRef<HTMLAnchorElement>() }));
    }, [itemsMap]);

    const [activeLink, setActiveLink] = useState<string | null>(itemsMap[0]?.href || null);

    const handleScroll: EventListener = useCallback(() => {
      // TODO: add stop while animating
      // if (animating.current) {
      //   return;
      // }
      const links = itemsMap.map(({ href }) => href);
      const container = getCurrentContainer();
      const activeLink = getInternalCurrentAnchor(container, links, offsetTop, bounds);

      setActiveLink(activeLink);
    }, [getAnchorContainer, itemsMap]);

    //<editor-fold desc="Параметры для корректной отрисовки ActiveVerticalSelector">
    const anchorContainerRef = useRef<HTMLDivElement | null>(null);
    const [selectorTop, setSelectorTop] = useState(0);
    const [selectorHeight, setSelectorHeight] = useState(0);
    const selectorRef = useRef<HTMLDivElement | null>(null);

    const styleSelector = (top: number, height: number) => {
      setSelectorTop(top);
      setSelectorHeight(height);
    };

    useEffect(() => {
      function setSelector() {
        const activeLinkRef = itemsWithRef.filter((item) => item.href === activeLink)?.[0]?.ref.current;
        const top = parseFloat(selectorRef.current?.style.top || '0');
        const selectorHeight = parseFloat(selectorRef.current?.style.height || '0');

        if (activeLinkRef && anchorContainerRef.current) {
          // используем метод getBoundingClientRect, так как он дает точность до сотых пикселя
          const activeLinkHeight = activeLinkRef.getBoundingClientRect().height;
          const activeLinkTop =
            activeLinkRef.getBoundingClientRect().top -
            anchorContainerRef.current.getBoundingClientRect().top +
            anchorContainerRef.current.scrollTop;

          if (activeLinkTop !== top || activeLinkHeight !== selectorHeight) {
            styleSelector(activeLinkTop, activeLinkHeight);
          }
        }
        if (!activeLinkRef) {
          styleSelector(0, 0);
        }
      }

      if (anchorContainerRef.current?.firstElementChild) {
        const resizeObserver = new ResizeObserver(debounce(setSelector, 100));
        resizeObserver.observe(anchorContainerRef.current?.firstElementChild);
        return () => {
          resizeObserver.disconnect();
        };
      }
    }, [itemsWithRef, activeLink, dimension, multilineView, offsetTop, bounds]);
    //</editor-fold>

    useEffect(() => {
      const container = getCurrentContainer();
      container.addEventListener('scroll', handleScroll);
      return () => {
        container.removeEventListener('scroll', handleScroll);
      };
    }, [getAnchorContainer, handleScroll]);

    const renderItems = () => {
      return itemsWithRef.map((item) => (
        <AnchorItem
          ref={item.ref}
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
      <AnchorContainer {...props} ref={refSetter(ref, anchorContainerRef)}>
        {renderItems()}
        <ActiveVerticalSelector $top={selectorTop} $height={selectorHeight} $transition={true} />
      </AnchorContainer>
    );
  },
);
Anchor.displayName = 'Anchor';
