import * as React from 'react';
import styled from 'styled-components';
import type { TableProps } from '#src/components/Table';

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

export function RowWidthResizer(props: {
  name: string;
  width: number;
  disabled: boolean;
  resizerState: any;
  dimension: TableProps['dimension'];
  columnMinWidth: number;
  onChange: (evt: { name: string; width: number; mouseUp: boolean }) => void;
}) {
  const { width: startWidth, name, disabled, resizerState, dimension, columnMinWidth, onChange } = props;
  const node = React.useRef(null);
  const [width, setWidth] = React.useState(startWidth);
  const [isTaken, setTaken] = React.useState(false);
  const [clientX, setClientX] = React.useState<number | null>(null);

  React.useEffect(() => {
    setWidth(startWidth);
  }, [resizerState]);

  React.useLayoutEffect(() => {
    if (startWidth !== width) setWidth(startWidth);
  }, [startWidth]);

  React.useEffect(() => {
    if (!disabled) {
      document.addEventListener('mousedown', handleMouseDown);
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);

      return () => {
        document.removeEventListener('mousedown', handleMouseDown);
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  });

  const handleMouseDown = (e: MouseEvent) => {
    if (e.target === node.current) {
      e.preventDefault();
      setWidth(width);
      setTaken(true);
      setClientX(e.clientX);
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isTaken && clientX !== null) {
      e.preventDefault();
      let newWidth = width - (clientX - e.clientX);
      newWidth = newWidth >= columnMinWidth ? newWidth : columnMinWidth;
      onChange({ name, width: newWidth, mouseUp: false });
    }
  };

  const handleMouseUp = (e: MouseEvent) => {
    if (isTaken && clientX !== null) {
      e.preventDefault();
      let newWidth = width - (clientX - e.clientX);
      newWidth = newWidth >= columnMinWidth ? newWidth : columnMinWidth;
      setTaken(false);
      onChange({ name, width: newWidth, mouseUp: true });
      setWidth(newWidth);
      setClientX(e.clientX);
    }
  };

  return (
    <ResizerWrapper ref={node} disabled={disabled} dimension={dimension}>
      <Resizer />
    </ResizerWrapper>
  );
}
