import { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import styled, { css } from 'styled-components';
import { useComposedRefs } from '../common/hooks/useComposedRefs';
import observeRect from '../common/observeRect';
import { fixedForwardRef } from '../common/fixedForwardRef';

const verticalThumbHeghtCSSPropName = '--vertical-thumb-height';
const verticalContentScrollCSSPropName = '--vertical-content-scroll';
const horizontalThumbWidthCSSPropName = '--horizontal-thumb-width';
const horizontalContentScrollCSSPropName = '--horizontal-content-scroll';
export const hideNativeScrollbars = css`
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const HiddenNativeScroll = styled.div`
  position: relative;
  ${hideNativeScrollbars}
`;

const VerticalContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 10px;
  transform: translate(var(${horizontalContentScrollCSSPropName}, 0), var(${verticalContentScrollCSSPropName}, 0));
`;

const HorizontalContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 10px;
  transform: translate(var(${horizontalContentScrollCSSPropName}, 0), var(${verticalContentScrollCSSPropName}, 0));
`;

const VerticalScrollThumbZone = styled.div`
  pointer-events: none;
  position: absolute;
  top: 0;
  bottom: 0;
  border-block: 4px solid transparent;
`;

const HorizontalScrollThumbZone = styled.div`
  pointer-events: none;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  border-inline: 4px solid transparent;
`;

const HorizontalTrack = styled.div`
  box-sizing: border-box;
  height: 100%;
  cursor: pointer;
  &:hover {
    background-color: ${(p) => p.theme.color['Opacity/Hover']};
  }
  box-sizing: border-box;
`;

const HorizontalThumb = styled.div`
  pointer-events: all;
  position: relative;
  height: 6px;
  border-radius: 6px;
  background-color: ${(p) => p.theme.color['Opacity/Neutral 16']};
  width: var(${horizontalThumbWidthCSSPropName}, 20px);
`;

const VerticalTrack = styled.div`
  box-sizing: border-box;
  height: 100%;
  cursor: pointer;
  &:hover {
    background-color: ${(p) => p.theme.color['Opacity/Hover']};
  }
  box-sizing: border-box;
`;

const VerticalThumb = styled.div`
  pointer-events: all;
  position: relative;
  width: 6px;
  border-radius: 6px;
  background-color: ${(p) => p.theme.color['Opacity/Neutral 16']};
  height: var(${verticalThumbHeghtCSSPropName}, 20px);
`;

export type ScrollenabledProps<T extends React.ElementType = 'div'> = React.ComponentPropsWithoutRef<T> &
  ScrollbarProps & {
    as?: T;
  };

export type ScrollbarProps = {
  /** Ref на контейнер сожержащий вертикальный скролбар */
  verticalScrollAriaRef?: React.ForwardedRef<HTMLDivElement>;
  /** Ref на контейнер сожержащий горизонтальный скролбар */
  horizontalScrollAriaRef?: React.ForwardedRef<HTMLDivElement>;
  /** Минимально допустимы размер скролбара */
  minThumbSize?: number;
};

export const Scrollenabled = fixedForwardRef<HTMLDivElement, ScrollenabledProps>(
  ({ as = 'div', children, verticalScrollAriaRef, horizontalScrollAriaRef, id, minThumbSize = 20, ...props }, ref) => {
    const scrollAriaId = useMemo(() => (id ? id : `scroll-aria-${Math.random().toString(36).substring(2, 12)}`), [id]);

    const [contentNode, setContenetNode] = useState<HTMLDivElement | null>(null);

    const composedContentRef = useComposedRefs(ref, (node) => setContenetNode(node));

    return (
      <HiddenNativeScroll as={as} id={scrollAriaId} ref={composedContentRef} {...props}>
        {children}
        <Scrollbars
          {...{
            contentNode,
            verticalScrollAriaRef,
            horizontalScrollAriaRef,
            minThumbSize,
          }}
        />
      </HiddenNativeScroll>
    );
  },
);

export const Scrollbars = ({
  verticalScrollAriaRef,
  horizontalScrollAriaRef,
  contentNode,
  minThumbSize = 20,
}: ScrollbarProps & { contentNode?: HTMLElement | null }) => {
  const scrollAriaId = useMemo(
    () => (contentNode?.id ? contentNode?.id : `scroll-aria-${Math.random().toString(36).substring(2, 12)}`),
    [contentNode?.id],
  );

  const [verticalScrollAreaNode, setVerticalScrollAreaNode] = useState<HTMLDivElement | null>(null);
  const [verticalScrollThumbZoneNode, setVerticalScrollThumbZoneNode] = useState<HTMLDivElement | null>(null);
  const [horizontalScrollAreaNode, setHorizontalScrollAreaNode] = useState<HTMLDivElement | null>(null);
  const [horizontalScrollThumbZoneNode, setHorizontalScrollThumbZoneNode] = useState<HTMLDivElement | null>(null);

  const [verticalThumbNode, setVerticalThumbNode] = useState<HTMLDivElement | null>(null);
  const [horizontalThumbNode, setHorizontalThumbNode] = useState<HTMLDivElement | null>(null);

  const [isVerticalDragging, setIsVerticalDragging] = useState(false);
  const [isHorizontalDragging, setIsHorizontalDragging] = useState(false);

  const [scrollTopStartPosition, setScrollTopStartPosition] = useState<number>(0);
  const [scrollLeftStartPosition, setScrollLeftStartPosition] = useState<number>(0);
  const [initialContentScrollTop, setInitialContentScrollTop] = useState<number>(0);
  const [initialContentScrollLeft, setInitialContentScrollLeft] = useState<number>(0);

  const [scrollYNedded, setScrollYNeeded] = useState<number>(0);
  const [scrollXNedded, setScrollXNeeded] = useState<number>(0);

  const composedVerticalScrollAreaRef = useComposedRefs(verticalScrollAriaRef, (node) =>
    setVerticalScrollAreaNode(node),
  );

  const composedHorizontalScrollAreaRef = useComposedRefs(horizontalScrollAriaRef, (node) =>
    setHorizontalScrollAreaNode(node),
  );

  function calcVerticalThumbHeight(node: Element, verticalScrollThumbZoneNode: Element) {
    const { clientHeight, scrollHeight } = node;
    const { clientHeight: verticalThumbScrollHeight } = verticalScrollThumbZoneNode;
    return Math.max(Math.round((clientHeight * verticalThumbScrollHeight) / scrollHeight), minThumbSize);
  }

  function calcHorizontalThumbWidth(node: Element, horizontalScrollThumbZoneNode: Element) {
    const { clientWidth, scrollWidth } = node;
    const { clientWidth: horizontalThumbScrollWidth } = horizontalScrollThumbZoneNode;
    return Math.max(Math.round((clientWidth * horizontalThumbScrollWidth) / scrollWidth), minThumbSize);
  }

  function isVerticalOverflow(node: Element) {
    const { clientHeight: contentVisible, scrollHeight: contentTotalHeight } = node;
    return contentTotalHeight - contentVisible >= 1;
  }

  function isHorizontalOverflow(node: Element) {
    const { clientWidth, scrollWidth } = node;
    return scrollWidth - clientWidth >= 1;
  }

  useLayoutEffect(() => {
    if (
      contentNode &&
      verticalThumbNode &&
      horizontalThumbNode &&
      verticalScrollAreaNode &&
      horizontalScrollAreaNode &&
      verticalScrollThumbZoneNode &&
      horizontalScrollThumbZoneNode
    ) {
      const { observe, unobserve } = observeRect(contentNode, (rect) => {
        if (rect) {
          const isYOverflow = isVerticalOverflow(contentNode);
          const isXOverflow = isHorizontalOverflow(contentNode);
          const verticalScroll = Math.min(Math.max(0, rect.scrollTop), rect.scrollHeight - rect.height);
          const horizontalSroll = Math.min(Math.max(0, rect.scrollLeft), rect.scrollWidth - rect.width);

          contentNode.style.setProperty(verticalContentScrollCSSPropName, `${verticalScroll}px`);
          contentNode.style.setProperty(horizontalContentScrollCSSPropName, `${horizontalSroll}px`);

          verticalScrollAreaNode.style.setProperty('display', isYOverflow ? null : 'none');
          verticalScrollAreaNode.style.setProperty('bottom', isXOverflow ? '10px' : null);

          horizontalScrollAreaNode.style.setProperty('display', isXOverflow ? null : 'none');
          horizontalScrollAreaNode.style.setProperty('right', isYOverflow ? '10px' : null);

          const verticalThumbHeight = calcVerticalThumbHeight(contentNode, verticalScrollThumbZoneNode);
          const horizontalThumbWidth = calcHorizontalThumbWidth(contentNode, horizontalScrollThumbZoneNode);
          verticalThumbNode.style.setProperty(verticalThumbHeghtCSSPropName, `${verticalThumbHeight}px`);
          horizontalThumbNode.style.setProperty(horizontalThumbWidthCSSPropName, `${horizontalThumbWidth}px`);
          const { scrollTop, scrollLeft, scrollHeight, scrollWidth } = contentNode;
          const { clientHeight } = verticalScrollThumbZoneNode;
          const { clientWidth } = horizontalScrollThumbZoneNode;
          const newTop = Math.round(
            Math.min((scrollTop / scrollHeight) * clientHeight, clientHeight - verticalThumbHeight),
          );
          const newLeft = Math.round(
            Math.min((scrollLeft / scrollWidth) * clientWidth, clientWidth - horizontalThumbWidth),
          );

          verticalThumbNode.style.top = `${newTop}px`;
          horizontalThumbNode.style.left = `${newLeft}px`;
        }
      });
      observe();
      return unobserve;
    }
  }, [
    contentNode,
    verticalThumbNode,
    horizontalThumbNode,
    verticalScrollAreaNode,
    horizontalScrollAreaNode,
    verticalScrollThumbZoneNode,
    horizontalScrollThumbZoneNode,
  ]);

  function handleVerticalThumbMousedown(e: React.MouseEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    setScrollTopStartPosition(e.clientY);
    if (contentNode) setInitialContentScrollTop(contentNode.scrollTop);
    setIsVerticalDragging(true);
  }

  function handleHorizontalThumbMousedown(e: React.MouseEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    setScrollLeftStartPosition(e.clientX);
    if (contentNode) setInitialContentScrollLeft(contentNode.scrollLeft);
    setIsHorizontalDragging(true);
  }

  useEffect(() => {
    function handleThumbMouseup(e: MouseEvent) {
      e.preventDefault();
      e.stopPropagation();
      if (isVerticalDragging) {
        setIsVerticalDragging(false);
      }
      if (isHorizontalDragging) {
        setIsHorizontalDragging(false);
      }
    }
    function handleThumbMousemove(e: MouseEvent) {
      if (contentNode) {
        e.preventDefault();
        e.stopPropagation();
        if (isVerticalDragging) {
          const { scrollHeight, clientHeight } = contentNode;
          const deltaY = (e.clientY - scrollTopStartPosition) * (scrollHeight / clientHeight);
          const newScrollTop = Math.round(Math.min(initialContentScrollTop + deltaY, scrollHeight - clientHeight));
          contentNode.scrollTop = newScrollTop;
        }
        if (isHorizontalDragging) {
          const { scrollWidth, clientWidth } = contentNode;
          const deltaX = (e.clientX - scrollLeftStartPosition) * (scrollWidth / clientWidth);
          const newScrollLeft = Math.round(Math.min(initialContentScrollLeft + deltaX, scrollWidth - clientWidth));
          contentNode.scrollLeft = newScrollLeft;
        }
      }
    }
    if (isVerticalDragging || isHorizontalDragging) {
      document.addEventListener('mousemove', handleThumbMousemove);
      document.addEventListener('mouseup', handleThumbMouseup);
      return () => {
        document.removeEventListener('mousemove', handleThumbMousemove);
        document.removeEventListener('mouseup', handleThumbMouseup);
      };
    }
  }, [
    contentNode,
    isVerticalDragging,
    isHorizontalDragging,
    initialContentScrollTop,
    initialContentScrollLeft,
    scrollTopStartPosition,
    scrollLeftStartPosition,
  ]);

  function handleVerticalTrackClick(e: React.MouseEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    if (contentNode) {
      const { clientHeight } = contentNode;
      const { top } = contentNode.getBoundingClientRect();
      setScrollYNeeded((e.clientY - top) / clientHeight);
    }
  }

  function handleHorizontalTrackClick(e: React.MouseEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    if (contentNode) {
      const { clientWidth } = contentNode;
      const { left } = contentNode.getBoundingClientRect();
      setScrollXNeeded((e.clientX - left) / clientWidth);
    }
  }

  useEffect(() => {
    if (contentNode) {
      const { scrollHeight, clientHeight } = contentNode;
      const top = Math.round(scrollYNedded * scrollHeight - clientHeight / 2);
      contentNode.scrollTo({
        top,
        behavior: 'smooth',
      });
    }
  }, [scrollYNedded]);

  useEffect(() => {
    if (contentNode) {
      const { scrollWidth, clientWidth } = contentNode;
      const left = Math.round(scrollXNedded * scrollWidth - clientWidth / 2);
      contentNode.scrollTo({
        left,
        behavior: 'smooth',
      });
    }
  }, [scrollXNedded]);

  useEffect(() => {
    document.body.style.setProperty('cursor', isVerticalDragging || isHorizontalDragging ? 'grabbing' : null);
  }, [isVerticalDragging, isHorizontalDragging]);

  return (
    <>
      <VerticalContainer ref={composedVerticalScrollAreaRef} role="scrollbar" aria-controls={scrollAriaId}>
        <VerticalTrack onClick={handleVerticalTrackClick} />
        <VerticalScrollThumbZone ref={(node) => setVerticalScrollThumbZoneNode(node)}>
          <VerticalThumb
            ref={setVerticalThumbNode}
            onMouseDown={handleVerticalThumbMousedown}
            style={{
              cursor: isVerticalDragging ? 'grabbing' : 'grab',
            }}
          />
        </VerticalScrollThumbZone>
      </VerticalContainer>
      <HorizontalContainer ref={composedHorizontalScrollAreaRef} role="scrollbar" aria-controls={scrollAriaId}>
        <HorizontalTrack onClick={handleHorizontalTrackClick} />
        <HorizontalScrollThumbZone ref={(node) => setHorizontalScrollThumbZoneNode(node)}>
          <HorizontalThumb
            ref={setHorizontalThumbNode}
            onMouseDown={handleHorizontalThumbMousedown}
            style={{
              cursor: isHorizontalDragging ? 'grabbing' : 'grab',
            }}
          />
        </HorizontalScrollThumbZone>
      </HorizontalContainer>
    </>
  );
};
