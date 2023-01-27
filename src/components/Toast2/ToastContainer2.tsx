import * as React from 'react';
import type { PositionToasts } from '#src/components/Toast';
import styled, { css, keyframes } from 'styled-components';

const fadeInRight = keyframes`
  from {
    transform: translateX(100%);

  }
  to {
    transform: translateX(0);
  }
`;

const fadeInLeft = keyframes`
  from {
    transform: translateX(-100%);

  }
  to {
    transform: translateX(0);
  }
`;

const fadeMixin = css<{ position?: PositionToasts }>`
  animation-name: ${({ position }) => {
    if (position === 'bottom-left') return fadeInLeft;
    return fadeInRight;
  }};
`;

const Transition = styled.div<{ position?: PositionToasts }>`
  margin-bottom: 16px;
  animation-duration: 1s;
  animation-timing-function: ease-out;
  ${fadeMixin}
`;

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
  autoDeleteTime?: number;
}

export interface ToastContainer2Props extends React.HTMLAttributes<HTMLDivElement> {
  toasts: Toast2Props[];
  position?: PositionToasts;
  renderToast: (id: string) => React.ReactNode;
}

export const ToastContainer2 = ({ position = 'top-right', toasts, renderToast, ...props }: ToastContainer2Props) => {
  return (
    <Container position={position} {...props}>
      {toasts.map((item) => {
        return (
          <Transition key={item.id} position={position}>
            {renderToast(item.id)}
          </Transition>
        );
      })}
    </Container>
  );
};
