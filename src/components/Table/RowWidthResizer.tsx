import * as React from 'react';
import styled from 'styled-components';

const RESIZER_WIDTH = '17px';

export const ResizerWrapper = styled.div<{ disabled: boolean }>`
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

  padding: 12px 0 11px 0;
  [data-dimension='s'] & {
    padding: 8px 0 7px 0;
  }
  [data-dimension='l'] & {
    padding: 14px 0 13px 0;
  }
  [data-dimension='xl'] & {
    padding: 18px 0 17px 0;
  }
`;

export const Resizer = styled.div`
  box-sizing: border-box;
  width: 1px;
  height: 100%;
  background: ${({ theme }) => theme.color.basic.disable};
`;

export function RowWidthResizer(props: {
  name: string;
  width: number;
  disabled: boolean;
  resizerState: any;
  onChange: (evt: { name: string; width: number; mouseUp: boolean }) => void;
}) {
  const { width: startWidth, name, disabled, resizerState, onChange } = props;
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
      const newWidth = width - (clientX - e.clientX);
      onChange({ name, width: newWidth, mouseUp: false });
    }
  };

  const handleMouseUp = (e: MouseEvent) => {
    if (isTaken && clientX !== null) {
      e.preventDefault();
      const newWidth = width - (clientX - e.clientX);
      setTaken(false);
      onChange({ name, width: newWidth, mouseUp: true });
      setWidth(newWidth);
      setClientX(e.clientX);
    }
  };

  return (
    <ResizerWrapper ref={node} disabled={disabled}>
      <Resizer />
    </ResizerWrapper>
  );
}
