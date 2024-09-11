import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import { refSetter } from '../common/utils/refSetter';

const Content = styled.div`
  overflow: auto;

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

  box-sizing: border-box;
`;
const VerticalThumb = styled.div`
  position: absolute;
  width: 6px;
  border-radius: 6px;
  background-color: ${(p) => p.theme.color['Opacity/Neutral 16']};
`;

export type ScrollbarProps = React.ComponentPropsWithoutRef<'div'> & {
  scrollBoxRef?: React.ForwardedRef<HTMLDivElement>;
  verticalScrollAriaRef?: React.ForwardedRef<HTMLDivElement>;
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
  const scrollTrackRef = useRef<HTMLDivElement>(null);
  const scrollThumbRef = useRef<HTMLDivElement>(null);

  const [thumbHeight, setThumbHeight] = useState(minThumbSize);
  const [isDragging, setIsDragging] = useState(false);
  const [scrollStartPosition, setScrollStartPosition] = useState<number>(0);
  const [initialContentScrollTop, setInitialContentScrollTop] = useState<number>(0);
  const [isVerticalOverflow, setVerticalOverflow] = useState<boolean>(true);

  function handleResize() {
    requestAnimationFrame(() => {
      if (contentRef.current) {
        const { clientHeight: contentVisible, scrollHeight: contentTotalHeight } = contentRef.current;
        setThumbHeight(Math.max(Math.round((contentVisible * contentVisible) / contentTotalHeight), minThumbSize));
        setVerticalOverflow(contentVisible < contentTotalHeight);
      }
    });
  }

  function handleThumbPosition() {
    requestAnimationFrame(() => {
      if (!contentRef.current || !scrollTrackRef.current || !scrollThumbRef.current) {
        return;
      }

      const { scrollTop: contentTop, scrollHeight: contentHeight, clientHeight: trackHeight } = contentRef.current;
      // const { clientHeight: trackHeight } = scrollTrackRef.current;

      let newTop = Math.round((contentTop / contentHeight) * trackHeight);
      newTop = Math.min(newTop, trackHeight - thumbHeight);

      const thumb = scrollThumbRef.current;
      if (thumb) thumb.style.top = `${newTop}px`;
    });
  }

  useLayoutEffect(() => {
    if (contentRef.current) {
      const content = contentRef.current;
      const observer = new ResizeObserver(() => {
        handleResize();
        handleThumbPosition();
      });
      observer.observe(content);
      content.addEventListener('scroll', handleThumbPosition);

      handleResize();
      handleThumbPosition();

      return () => {
        observer.disconnect();
        content.removeEventListener('scroll', handleThumbPosition);
      };
    }
  }, [thumbHeight]);

  function handleThumbMousedown(e: React.MouseEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    setScrollStartPosition(e.clientY);
    if (contentRef.current) setInitialContentScrollTop(contentRef.current.scrollTop);
    setIsDragging(true);
  }

  function handleThumbMouseup(e: MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    if (isDragging) {
      setIsDragging(false);
    }
  }

  function handleThumbMousemove(e: MouseEvent) {
    if (contentRef.current) {
      e.preventDefault();
      e.stopPropagation();
      if (isDragging) {
        const { scrollHeight: contentScrollHeight, clientHeight: contentClientHeight } = contentRef.current;

        const deltaY = (e.clientY - scrollStartPosition) * (contentClientHeight / thumbHeight);

        const newScrollTop = Math.min(initialContentScrollTop + deltaY, contentScrollHeight - contentClientHeight);

        contentRef.current.scrollTop = newScrollTop;
      }
    }
  }

  useEffect(() => {
    document.addEventListener('mousemove', handleThumbMousemove);
    document.addEventListener('mouseup', handleThumbMouseup);
    return () => {
      document.removeEventListener('mousemove', handleThumbMousemove);
      document.removeEventListener('mouseup', handleThumbMouseup);
    };
  }, [handleThumbMousemove, handleThumbMouseup, thumbHeight]);

  function handleTrackClick(e: React.MouseEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    const { current: track } = scrollTrackRef;
    const { current: content } = contentRef;
    if (track && content) {
      const { clientY } = e;
      const target = e.target as HTMLDivElement;
      const rect = target.getBoundingClientRect();
      const trackTop = rect.top;
      const thumbOffset = -(thumbHeight / 2);
      const clickRatio = (clientY - trackTop + thumbOffset) / track.clientHeight;
      const scrollAmount = Math.floor(clickRatio * content.scrollHeight);
      content.scrollTo({
        top: scrollAmount,
        behavior: 'smooth',
      });
    }
  }

  return (
    <>
      <Content id={scrollAriaId} ref={refSetter(contentRef, scrollBoxRef)} {...props}>
        {children}
      </Content>
      <VerticalScrollAria
        ref={verticalScrollAriaRef}
        role="scrollbar"
        aria-controls={scrollAriaId}
        style={{ display: isVerticalOverflow ? undefined : 'none' }}
      >
        <VerticalTrack
          ref={scrollTrackRef}
          onClick={handleTrackClick}
          style={{ cursor: isDragging ? 'grabbing' : undefined }}
        />
        <VerticalThumb
          ref={scrollThumbRef}
          onMouseDown={handleThumbMousedown}
          style={{
            height: `${thumbHeight}px`,
            cursor: isDragging ? 'grabbing' : 'grab',
          }}
        />
      </VerticalScrollAria>
    </>
  );
};
