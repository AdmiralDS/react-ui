import styled from 'styled-components';
import * as React from 'react';
import observeRect from '#/components/common/observeRect';
import { createPortal } from 'react-dom';

export const PositionedPortalContainer = styled.div`
  pointer-events: none;
  position: fixed;
  overflow: visible;
  z-index: ${({ theme }) => theme.zIndex.dropdown};
`;

export interface PositionInPortalProps {
  targetRef: React.RefObject<HTMLElement>;
}

export const PositionInPortal = ({ targetRef, ...props }: React.PropsWithChildren<PositionInPortalProps>) => {
  const positionedPortalContainerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const node = positionedPortalContainerRef.current;
    if (node && targetRef.current) {
      const observer = observeRect(targetRef.current, (rect) => {
        if (rect) {
          const { x, y, height, width } = rect;
          const { style } = node;
          style.top = `${y}px`;
          style.left = `${x}px`;
          style.height = `${height}px`;
          style.width = `${width}px`;
        }
      });
      observer.observe();
      return () => {
        observer.unobserve();
      };
    }
  }, [targetRef.current, positionedPortalContainerRef.current]);

  return createPortal(<PositionedPortalContainer ref={positionedPortalContainerRef} {...props} />, document.body);
};
