import type { FC } from 'react';
import * as React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Notification } from '#src/components-ver2/Notification';
import { useToast } from '#src/components-ver2/Toast/useToast';
import type { PositionToasts } from '#src/components-ver2/Toast/ToastProvider';
import type { IdentifyToast } from '#src/components-ver2/Toast/type';

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

export interface ToastTransitionProps {
  position: PositionToasts;
  preventExitTransition: boolean;
  nodeRef: React.RefObject<HTMLElement>;
  children?: React.ReactNode;
}

const Transition = styled.div<{ position?: PositionToasts }>`
  margin-bottom: 16px;
  animation-duration: 1s;
  animation-timing-function: ease-out;
  ${fadeMixin}
`;

interface AnimationToast {
  position: PositionToasts;
  item: IdentifyToast;
}

const StyledNotification = styled(Notification)`
  ${(props) => props.theme.shadow['Shadow 08']}
`;

export const AnimationToast: FC<AnimationToast> = ({ position, item }) => {
  const { removeToast } = useToast();

  const handleOnClose = () => {
    removeToast(item);
  };

  return (
    <Transition key={item.id} position={position}>
      <StyledNotification {...item} onClose={item.onClose || handleOnClose}>
        {item.children}
      </StyledNotification>
    </Transition>
  );
};
