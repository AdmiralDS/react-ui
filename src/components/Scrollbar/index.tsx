import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import { useComposedRefs } from '../common/hooks/useComposedRefs';
import observeRect from '../common/observeRect';

const verticalThumbHeghtCSSPropName = '--vertical-thumb-height';

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
  width: 6px;
  border-radius: 6px;
  background-color: ${(p) => p.theme.color['Opacity/Neutral 16']};
  height: var(${verticalThumbHeghtCSSPropName}, 18px);
`;

export type ScrollbarProps = React.ComponentPropsWithoutRef<'div'> & {
  /** Ref на скролируемый контейнер*/
  scrollBoxRef?: React.ForwardedRef<HTMLDivElement>;
  /** Ref на контейнер сожержащий вертикальный скролбар */
  verticalScrollAriaRef?: React.ForwardedRef<HTMLDivElement>;
  /** Минимально допустимы размер скролбара */
  minThumbSize?: number;
};
export const Scrollbar = ({
  children,
  scrollBoxRef,
  verticalScrollAriaRef,
  minThumbSize = 20,
  ...props
}: ScrollbarProps) => {
  const scrollAriaId = useMemo(() => `scroll-aria-${Math.random().toString(36).substring(2, 12)}`, []);

  const contentRef = useRef<HTMLDivElement>(null);
  const [contentNode, setContenetNode] = useState<HTMLDivElement | null>(null);

  const [verticalScrollAreaNode, setVerticalScrollAreaNode] = useState<HTMLDivElement | null>(null);

  const [verticalThumbNode, setVerticalThumbNode] = useState<HTMLDivElement | null>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [scrollStartPosition, setScrollStartPosition] = useState<number>(0);
  const [initialContentScrollTop, setInitialContentScrollTop] = useState<number>(0);
  const [scrollYNedded, setScrollYNeeded] = useState<number>(0);

  const composedContentRef = useComposedRefs(contentRef, (node) => setContenetNode(node), scrollBoxRef);
  const composedVerticalScrollAreaRef = useComposedRefs(verticalScrollAriaRef, (node) =>
    setVerticalScrollAreaNode(node),
  );

  function calcVerticalThumbHeight(node: Element) {
    const { clientHeight: contentVisible, scrollHeight: contentTotalHeight } = node;
    return Math.max(Math.round((contentVisible * contentVisible) / contentTotalHeight), minThumbSize);
  }

  function isVerticalOverflow(node: Element) {
    const { clientHeight: contentVisible, scrollHeight: contentTotalHeight } = node;
    return contentTotalHeight - contentVisible >= 1;
  }

  useLayoutEffect(() => {
    if (contentNode && verticalThumbNode && verticalScrollAreaNode) {
      const { observe, unobserve } = observeRect(contentNode, () => {
        const verticalThumbHeight = calcVerticalThumbHeight(contentNode);
        verticalThumbNode.style.setProperty(verticalThumbHeghtCSSPropName, `${verticalThumbHeight}px`);

        verticalScrollAreaNode.style.setProperty('display', isVerticalOverflow(contentNode) ? null : 'none');

        const { scrollTop, scrollHeight, clientHeight } = contentNode;

        let newTop = Math.round((scrollTop / scrollHeight) * clientHeight);
        newTop = Math.min(newTop, clientHeight - verticalThumbHeight);

        if (verticalThumbNode) verticalThumbNode.style.top = `${newTop}px`;
      });
      observe();
      return unobserve;
    }
  }, [contentNode, verticalThumbNode, verticalScrollAreaNode]);

  function handleVerticalThumbMousedown(e: React.MouseEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    setScrollStartPosition(e.clientY);
    if (contentNode) setInitialContentScrollTop(contentNode.scrollTop);
    setIsDragging(true);
  }

  useEffect(() => {
    function handleThumbMouseup(e: MouseEvent) {
      e.preventDefault();
      e.stopPropagation();
      if (isDragging) {
        setIsDragging(false);
      }
    }
    function handleThumbMousemove(e: MouseEvent) {
      if (contentNode) {
        e.preventDefault();
        e.stopPropagation();
        if (isDragging) {
          const { scrollHeight, clientHeight } = contentNode;

          const deltaY = (e.clientY - scrollStartPosition) * (scrollHeight / clientHeight);

          const newScrollTop = Math.round(Math.min(initialContentScrollTop + deltaY, scrollHeight - clientHeight));

          contentNode.scrollTop = newScrollTop;
        }
      }
    }
    if (isDragging) {
      document.addEventListener('mousemove', handleThumbMousemove);
      document.addEventListener('mouseup', handleThumbMouseup);
      return () => {
        document.removeEventListener('mousemove', handleThumbMousemove);
        document.removeEventListener('mouseup', handleThumbMouseup);
      };
    }
  }, [contentNode, isDragging, initialContentScrollTop, scrollStartPosition]);

  function handleTrackClick(e: React.MouseEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    if (contentNode) {
      const { clientHeight } = contentNode;
      const { top } = contentNode.getBoundingClientRect();
      setScrollYNeeded((e.clientY - top) / clientHeight);
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
    document.body.style.setProperty('cursor', isDragging ? 'grabbing' : null);
  }, [isDragging]);

  return (
    <>
      <HiddenNativeScroll id={scrollAriaId} ref={composedContentRef} {...props}>
        {children}
      </HiddenNativeScroll>
      <VerticalScrollAria ref={composedVerticalScrollAreaRef} role="scrollbar" aria-controls={scrollAriaId}>
        <VerticalTrack onClick={handleTrackClick} />
        <VerticalThumb
          ref={setVerticalThumbNode}
          onMouseDown={handleVerticalThumbMousedown}
          style={{
            cursor: isDragging ? 'grabbing' : 'grab',
          }}
        />
      </VerticalScrollAria>
    </>
  );
};
