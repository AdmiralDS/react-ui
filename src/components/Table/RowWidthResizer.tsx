import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const RESIZER_WIDTH = '17px';

export const ResizerWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: ${RESIZER_WIDTH};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  cursor: col-resize;
`;

export const Resizer = styled.div`
  width: 1px;
  height: 16px;
  [data-dimension='s'] & {
    height: 16px;
  }
  [data-dimension='l'] & {
    height: 20px;
  }
  [data-dimension='xl'] & {
    height: 20px;
  }
  background: ${({ theme }) => theme.color.basic.disable};
`;

export function RowWidthResizer(props: {
  id: string;
  width: number;
  onChange: (evt: { key: string; width: number }) => void;
}) {
  const { width: startWidth, id, onChange } = props;
  const node = useRef(null);
  const [width, setWidth] = useState(startWidth);
  const [isTaken, setTaken] = useState(false);
  const [clientX, setClientX] = useState<number | null>(null);

  useEffect(() => {
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
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
      const newWidth = width - (clientX - e.clientX);
      onChange({ key: id, width: newWidth });
    }
  };

  const handleMouseUp = (e: MouseEvent) => {
    if (isTaken && clientX !== null) {
      e.preventDefault();
      const newWidth = width - (clientX - e.clientX);
      setTaken(false);
      onChange({ key: id, width: newWidth });
    }
  };

  return (
    <ResizerWrapper ref={node}>
      <Resizer />
    </ResizerWrapper>
  );
}
