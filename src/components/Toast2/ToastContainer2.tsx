import * as React from 'react';
import type { PositionToasts } from '#src/components/Toast';
import styled from 'styled-components';

const Container = styled.div<{ position: PositionToasts }>`
  position: fixed;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 384px;
  z-index: ${({ theme }) => theme.zIndex.notification};
  ${(p) => p.position === 'top-right' && 'top: 16px'};
  ${(p) => (p.position === 'bottom-right' || p.position === 'bottom-left') && 'bottom: 16px'};
  ${(p) => (p.position === 'top-right' || p.position === 'bottom-right') && 'right: 16px'};
  ${(p) => p.position === 'bottom-left' && 'left: 16px'};
  pointer-events: none;
  > * {
    pointer-events: initial;
  }
`;

export interface Toast2Props {
  id: string;
  renderToast: (id: string) => React.ReactNode;
}

export interface ToastContainer2Props extends React.HTMLAttributes<HTMLDivElement> {
  toasts: Toast2Props[];
  position?: PositionToasts;
}

export const ToastContainer2 = ({ position = 'top-right', toasts, ...props }: ToastContainer2Props) => {
  return (
    <Container position={position} {...props}>
      {toasts.map((item) => item.renderToast(item.id))}
    </Container>
  );
};
