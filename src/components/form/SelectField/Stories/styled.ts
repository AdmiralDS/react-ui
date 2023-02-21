import styled, { css, keyframes } from 'styled-components';

const jump = keyframes`
  50% {
    transform: translate3d(0, -7px, 0);
  }
`;

const animation = css`
  animation: ${jump} 0.35s ease-in-out;
`;

export const Icon = styled.div<{ shouldAnimate?: boolean }>`
  width: 20px;
  height: 20px;
  border: 1px solid #8a96a8;
  border-radius: 50%;
  box-sizing: border-box;
  margin-right: 10px;
  transform-origin: bottom center;
  ${({ shouldAnimate }) => (shouldAnimate ? animation : '')}
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ExtraText = styled.div`
  color: #626f84;
`;

export const Separator = styled.div`
  height: 20px;
`;
