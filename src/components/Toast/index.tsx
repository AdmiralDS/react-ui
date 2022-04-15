import * as React from 'react';
import styled from 'styled-components';
import { useToast } from './useToast';
import type { PositionToasts } from './ToastProvider';
import { AnimationToast } from '#src/components/Toast/AnimationToast';

const Container = styled.div<{ position: PositionToasts }>`
  position: fixed;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 488px;
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

export interface ToastTransitionProps extends React.HTMLAttributes<HTMLDivElement> {
  position?: PositionToasts;
}

export const Toast = ({ position = 'top-right', ...props }: ToastTransitionProps) => {
  const { toasts } = useToast();
  return (
    <Container position={position} {...props}>
      {!!toasts?.length &&
        toasts.map((item) => {
          return <AnimationToast key={item.id} position={position} item={item} />;
        })}
    </Container>
  );
};

export * from './useToast';
export * from './ToastProvider';

Toast.displayName = 'Toast';
