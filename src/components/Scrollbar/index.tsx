import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import { useComposedRefs } from '../common/hooks/useComposedRefs';
import observeRect from '../common/observeRect';

const verticalThumbHeghtCSSPropName = '--vertical-thumb-height';
const horizontalThumbWidthCSSPropName = '--horizontal-thumb-width';

const HiddenNativeScroll = styled.div`
  overflow: scroll;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const VerticalScrollAria = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 10px;
`;

const HorizontalScrollAria = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  height: 10px;
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
  position: absolute;
  top: 0;
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
  position: absolute;
  left: 0;
  width: 6px;
  border-radius: 6px;
  background-color: ${(p) => p.theme.color['Opacity/Neutral 16']};
  height: var(${verticalThumbHeghtCSSPropName}, 20px);
`;

export type ScrollbarProps = React.ComponentPropsWithoutRef<'div'> & {
  /** Ref на скролируемый контейнер*/
  scrollBoxRef?: React.ForwardedRef<HTMLDivElement>;
  /** Ref на контейнер сожержащий вертикальный скролбар */
  verticalScrollAriaRef?: React.ForwardedRef<HTMLDivElement>;
  /** Ref на контейнер сожержащий горизонтальный скролбар */
  horizontalScrollAriaRef?: React.ForwardedRef<HTMLDivElement>;
  /** Минимально допустимы размер скролбара */
  minThumbSize?: number;
};
export const Scrollbar = ({
  children,
  scrollBoxRef,
  verticalScrollAriaRef,
  horizontalScrollAriaRef,

  minThumbSize = 20,
  ...props
}: ScrollbarProps) => {
  const scrollAriaId = useMemo(() => `scroll-aria-${Math.random().toString(36).substring(2, 12)}`, []);

  const contentRef = useRef<HTMLDivElement>(null);
  const [contentNode, setContenetNode] = useState<HTMLDivElement | null>(null);

  const [verticalScrollAreaNode, setVerticalScrollAreaNode] = useState<HTMLDivElement | null>(null);
  const [horizontalScrollAreaNode, setHorizontalScrollAreaNode] = useState<HTMLDivElement | null>(null);

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

  const composedContentRef = useComposedRefs(contentRef, (node) => setContenetNode(node), scrollBoxRef);

  const composedVerticalScrollAreaRef = useComposedRefs(verticalScrollAriaRef, (node) =>
    setVerticalScrollAreaNode(node),
  );

  const composedHorizontalScrollAreaRef = useComposedRefs(horizontalScrollAriaRef, (node) =>
    setHorizontalScrollAreaNode(node),
  );

  function calcVerticalThumbHeight(node: Element) {
    const { clientHeight, scrollHeight } = node;
    return Math.max(Math.round((clientHeight * clientHeight) / scrollHeight), minThumbSize);
  }

  function calcHorizontalThumbWidth(node: Element) {
    const { clientWidth, scrollWidth } = node;
    return Math.max(Math.round((clientWidth * clientWidth) / scrollWidth), minThumbSize);
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
    if (contentNode && verticalThumbNode && horizontalThumbNode && verticalScrollAreaNode && horizontalScrollAreaNode) {
      const { observe, unobserve } = observeRect(contentNode, () => {
        const verticalThumbHeight = calcVerticalThumbHeight(contentNode);
        const horizontalThumbWidth = calcHorizontalThumbWidth(contentNode);

        verticalThumbNode.style.setProperty(verticalThumbHeghtCSSPropName, `${verticalThumbHeight}px`);
        horizontalThumbNode.style.setProperty(horizontalThumbWidthCSSPropName, `${horizontalThumbWidth}px`);

        const isYOverflow = isVerticalOverflow(contentNode);
        const isXOverflow = isHorizontalOverflow(contentNode);
        verticalScrollAreaNode.style.setProperty('display', isYOverflow ? null : 'none');
        verticalScrollAreaNode.style.setProperty('bottom', isXOverflow ? '10px' : null);

        horizontalScrollAreaNode.style.setProperty('display', isXOverflow ? null : 'none');
        horizontalScrollAreaNode.style.setProperty('right', isYOverflow ? '10px' : null);

        const { scrollTop, scrollLeft, scrollHeight, scrollWidth, clientHeight, clientWidth } = contentNode;

        const newTop = Math.round(
          Math.min((scrollTop / scrollHeight) * clientHeight, clientHeight - verticalThumbHeight),
        );
        const newLeft = Math.round(
          Math.min((scrollLeft / scrollWidth) * clientWidth, clientWidth - horizontalThumbWidth),
        );

        verticalThumbNode.style.top = `${newTop}px`;
        horizontalThumbNode.style.left = `${newLeft}px`;
      });
      observe();
      return unobserve;
    }
  }, [contentNode, verticalThumbNode, horizontalThumbNode, verticalScrollAreaNode, horizontalScrollAreaNode]);

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
      <HiddenNativeScroll id={scrollAriaId} ref={composedContentRef} {...props}>
        {children}
      </HiddenNativeScroll>
      <VerticalScrollAria ref={composedVerticalScrollAreaRef} role="scrollbar" aria-controls={scrollAriaId}>
        <VerticalTrack onClick={handleVerticalTrackClick} />
        <VerticalThumb
          ref={setVerticalThumbNode}
          onMouseDown={handleVerticalThumbMousedown}
          style={{
            cursor: isVerticalDragging ? 'grabbing' : 'grab',
          }}
        />
      </VerticalScrollAria>
      <HorizontalScrollAria ref={composedHorizontalScrollAreaRef} role="scrollbar" aria-controls={scrollAriaId}>
        <HorizontalTrack onClick={handleHorizontalTrackClick} />
        <HorizontalThumb
          ref={setHorizontalThumbNode}
          onMouseDown={handleHorizontalThumbMousedown}
          style={{
            cursor: isHorizontalDragging ? 'grabbing' : 'grab',
          }}
        />
      </HorizontalScrollAria>
    </>
  );
};
