import * as React from 'react';
import styled from 'styled-components';
import type { TableProps } from '#src/components/Table';
import { throttle } from '#src/components/common/utils/throttle';

const RESIZER_WIDTH = '17px';

export const ResizerWrapper = styled.div<{ disabled: boolean; $dimension: TableProps['dimension'] }>`
  position: absolute;
  right: -9px;
  z-index: 1;
  top: 0;
  width: ${RESIZER_WIDTH};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'col-resize')};

  padding: ${({ $dimension }) => {
    switch ($dimension) {
      case 's':
        return '8px 0 7px 0';
      case 'l':
        return '14px 0 13px 0';
      case 'xl':
        return '18px 0 17px 0';
      case 'm':
      default:
        return '12px 0 11px 0';
    }
  }};
`;

export const Resizer = styled.div`
  box-sizing: border-box;
  width: 1px;
  height: 100%;
  background: var(--admiral-color-Neutral_Neutral20, ${(p) => p.theme.color['Neutral/Neutral 20']});
`;

type ResizerProps = {
  name: string;
  disabled: boolean;
  dimension: TableProps['dimension'];
  columnMinWidth: number;
  onChange: (evt: { name: string; width: number }) => void;
};

export function RowWidthResizer({ name, disabled, dimension, columnMinWidth, onChange }: ResizerProps) {
  const node = React.useRef<HTMLDivElement | null>(null);
  const clientXRef = React.useRef(0);
  const [isTaken, setTaken] = React.useState(false);

  const getClientX = (event: MouseEvent | TouchEvent): number => {
    if (event instanceof TouchEvent) {
      return event.changedTouches[0]?.clientX ?? 0;
    }
    return event.clientX;
  };

  const handleResize = (e: MouseEvent | TouchEvent) => {
    e.preventDefault();
    const width = node.current?.parentElement?.getBoundingClientRect().width || 100;
    const clientX = getClientX(e);
    let newWidth = width - (clientXRef.current - clientX);
    newWidth = newWidth >= columnMinWidth ? newWidth : columnMinWidth;
    if (width !== newWidth) {
      onChange({ name, width: newWidth });
    }
    clientXRef.current = clientX;
  };

  const handleClick = (e: MouseEvent | TouchEvent) => {
    e.preventDefault();
    // block column drag
    e.stopPropagation();
    setTaken(true);
    clientXRef.current = getClientX(e);
  };

  const handleMouseMove = (e: MouseEvent | TouchEvent) => {
    if (isTaken) {
      handleResize(e);
    }
  };

  const handleMouseUp = (e: MouseEvent | TouchEvent) => {
    if (isTaken) {
      handleResize(e);
      setTaken(false);
    }
  };

  const [updateOnMove, freeResources] = throttle(handleMouseMove, 100);

  React.useEffect(() => {
    if (!disabled) {
      document.addEventListener('mousemove', updateOnMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', updateOnMove);
      document.addEventListener('touchend', handleMouseUp);

      return () => {
        freeResources();
        document.removeEventListener('mousemove', updateOnMove);
        document.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('touchmove', updateOnMove);
        document.removeEventListener('touchend', handleMouseUp);
      };
    }
  });

  React.useEffect(() => {
    const wrapper = node.current;
    if (!disabled && wrapper) {
      wrapper.addEventListener('mousedown', handleClick);
      wrapper.addEventListener('touchstart', handleClick);

      return () => {
        wrapper.removeEventListener('mousedown', handleClick);
        wrapper.removeEventListener('touchstart', handleClick);
      };
    }
  }, [disabled]);

  return (
    <ResizerWrapper ref={node} disabled={disabled} $dimension={dimension}>
      <Resizer />
    </ResizerWrapper>
  );
}
