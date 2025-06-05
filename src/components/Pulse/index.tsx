import styled, { keyframes } from 'styled-components';

const SAnim = keyframes`
 0% {
    width: 6px;
    height: 6px;
    opacity: 100%;
    border-width: 1px;
    filter: blur(0.33px);
  }

  80% {
    width: 20px;
    height: 20px;
    opacity: 0%;
    border-width: 1.5px;
    filter: blur(0.66px);
  }

  100% {
    opacity: 0%;
  }
`;

const MAnim = keyframes`
 0% {
    width: 10px;
    height: 10px;
    opacity: 100%;
    border-width: 1px;
    filter: blur(0.33px);
  }
  80% {
    width: 28px;
    height: 28px;
    opacity: 0%;
    border-width: 2px;
    filter: blur(1px);
  }
  100% {
    opacity: 0%;
  }
`;

const LAnim = keyframes`
 0% {
    width: 14px;
    height: 14px;
    opacity: 100%;
    border-width: 1px;
    filter: blur(0.33px);
  }
  80% {
    width: 36px;
    height: 36px;
    opacity: 0%;
    border-width: 3px;
    filter: blur(1.33px);
  }
  100% {
    opacity: 0%;
  }
`;

const PulseElement = styled.div<{ $dimension: 'l' | 'm' | 's' }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  block-size: ${(p) => (p.$dimension == 'l' ? 16 : p.$dimension == 'm' ? 12 : 8)}px;
  inline-size: ${(p) => (p.$dimension == 'l' ? 16 : p.$dimension == 'm' ? 12 : 8)}px;
  border-radius: 50%;
  background-color: ${(p) => p.theme.color['Primary/Primary 60 Main']};

  &:before {
    position: absolute;
    content: '';
    background-color: transparent;
    border-radius: 50%;
    border-style: solid;
    border-color: ${(p) => p.theme.color['Primary/Primary 60 Main']};
    box-sizing: border-box;
    animation-name: ${(p) => (p.$dimension == 'l' ? LAnim : p.$dimension == 'm' ? MAnim : SAnim)};
    animation-duration: 2500ms;
    animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
    animation-iteration-count: infinite;
  }
`;

export const Pulse = ({ dimension }: { dimension: 'l' | 'm' | 's' }) => {
  return <PulseElement $dimension={dimension} />;
};
