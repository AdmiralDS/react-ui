import * as React from 'react';
import styled from 'styled-components';
import type { TableProps } from '#src/components/Table';
import { throttle } from '#src/components/common/utils/throttle';

const RESIZER_WIDTH = '17px';

export const ResizerWrapper = styled.div<{ disabled: boolean; dimension: TableProps['dimension'] }>`
  position: absolute;
  right: -8px;
  z-index: 1;
  top: 0;
  width: ${RESIZER_WIDTH};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  cursor: ${({ disabled }) => (disabled ? 'pointer' : 'col-resize')};

  padding: ${({ dimension }) => {
    switch (dimension) {
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
  background: ${({ theme }) => theme.color['Neutral/Neutral 20']};
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

  const handleResize = (e: any) => {
    e.preventDefault();
    const width = node.current?.parentElement?.getBoundingClientRect().width || 100;
    let newWidth = width - (clientXRef.current - e.clientX);
    newWidth = newWidth >= columnMinWidth ? newWidth : columnMinWidth;
    if (width !== newWidth) {
      onChange({ name, width: newWidth });
    }
    clientXRef.current = e.clientX;
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    // for dragging work
    e.stopPropagation();
    setTaken(true);
    clientXRef.current = e.clientX;
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isTaken) {
      handleResize(e);
    }
  };

  const handleMouseUp = (e: MouseEvent) => {
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

      return () => {
        freeResources();
        document.removeEventListener('mousemove', updateOnMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  });

  return (
    <ResizerWrapper ref={node} disabled={disabled} dimension={dimension} onMouseDown={handleMouseDown}>
      <Resizer />
    </ResizerWrapper>
  );
}
