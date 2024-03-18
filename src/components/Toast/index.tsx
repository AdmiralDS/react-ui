import type { HTMLAttributes } from 'react';
import styled, { css, keyframes } from 'styled-components';

import { useToast } from '#src/components/Toast/useToast';
import type { PositionToasts } from '#src/components/Toast/ToastProvider';

const Container = styled.div<{ $position: PositionToasts }>`
  position: fixed;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 384px;
  z-index: var(--admiral-z-index-notification, ${({ theme }) => theme.zIndex.notification});
  ${(p) => p.$position === 'top-right' && 'top: 16px'};
  ${(p) => (p.$position === 'bottom-right' || p.$position === 'bottom-left') && 'bottom: 16px'};
  ${(p) => (p.$position === 'top-right' || p.$position === 'bottom-right') && 'right: 16px'};
  ${(p) => p.$position === 'bottom-left' && 'left: 16px'};
  pointer-events: none;
  > * {
    pointer-events: initial;
  }
`;
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

const fadeMixin = css<{ $position?: PositionToasts }>`
  animation-name: ${({ $position }) => {
    if ($position === 'bottom-left') return fadeInLeft;
    return fadeInRight;
  }};
`;

const Transition = styled.div<{ $position?: PositionToasts }>`
  margin-bottom: 16px;
  animation-duration: 1s;
  animation-timing-function: ease-out;
  ${fadeMixin}
`;

export interface ToastTransitionProps extends HTMLAttributes<HTMLDivElement> {
  position?: PositionToasts;
}

export const Toast = ({ position = 'top-right', ...props }: ToastTransitionProps) => {
  const { toastItemList } = useToast();
  return (
    <Container $position={position} {...props}>
      {!!toastItemList?.length &&
        toastItemList.map(({ renderToast, id }) => {
          return (
            <Transition key={id} $position={position}>
              {renderToast(id)}
            </Transition>
          );
        })}
    </Container>
  );
};

export * from './useToast';
export * from './ToastProvider';
export * from './ToastItem';
export * from './type';

Toast.displayName = 'Toast';
