import styled, { css } from 'styled-components';
import type { SliderProps } from '#src/components/Slider';
import { skeletonAnimationMixin } from '#src/components/skeleton/animation';

const TRANSITION_ANIMATION = 'all  ease-in 0.3s';

export const Wrapper = styled.div`
  position: relative;
  -webkit-tap-highlight-color: transparent;
`;

const skeletonMixin = css`
  ${skeletonAnimationMixin};
  pointer-events: none;
  & > * {
    visibility: hidden;
  }
`;

export const TrackWrapper = styled.div<{ dimension: SliderProps['dimension']; skeleton?: boolean }>`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: ${({ dimension }) => (dimension === 'm' ? 36 : 40)}px;
  padding-bottom: 20px;
  [data-disabled='true'] && {
    pointer-events: none;
    cursor: auto;
  }

  ${({ skeleton }) => skeleton && skeletonMixin}};
`;

export const Track = styled.div`
  height: 2px;
  background: ${({ theme }) => theme.color['Neutral/Neutral 20']};
  [data-disabled='true'] && {
    background: ${({ theme }) => theme.color['Neutral/Neutral 20']};
  }
  width: 100%;
`;

export const DefaultTrack = styled.div`
  height: 2px;
  transform: translateY(-50%);
`;

export const FilledTrack = styled.div<{ animation?: boolean }>`
  display: block;
  [data-disabled='true'] && {
    background: ${({ theme }) => theme.color['Neutral/Neutral 30']};
  }
  position: absolute;
  height: 2px;
  // width: 100%;
  width: 0%;
  background-color: ${({ theme }) => theme.color['Primary/Primary 60 Main']};
  transition: ${({ animation }) => (animation ? TRANSITION_ANIMATION : 'none')};
`;

export const Thumb = styled.div<{ dimension: SliderProps['dimension']; animation?: boolean }>`
  position: absolute;
  width: ${({ dimension }) => (dimension === 'm' ? 16 : 20)}px;
  height: ${({ dimension }) => (dimension === 'm' ? 16 : 20)}px;
  align-items: center;
  justify-content: center;
  transform: translateX(-50%) translateY(-50%);
  border-radius: 50%;
  top: 2px;
  transition: ${({ animation }) => (animation ? TRANSITION_ANIMATION : 'none')};
`;

export const ThumbCircle = styled.div<{ dimension: SliderProps['dimension'] }>`
  position: relative;
  height: ${({ dimension }) => (dimension === 'm' ? 16 : 20)}px;
  width: ${({ dimension }) => (dimension === 'm' ? 16 : 20)}px;
  background: ${({ theme }) => theme.color['Primary/Primary 60 Main']};
  border-radius: 50%;
  &:before {
    position: absolute;
    content: '';
    height: ${({ dimension }) => (dimension === 'm' ? 6 : 8)}px;
    width: ${({ dimension }) => (dimension === 'm' ? 6 : 8)}px;
    background: ${({ theme }) => theme.color['Special/Static White']};
    top: ${({ dimension }) => (dimension === 'm' ? 5 : 6)}px;
    bottom: ${({ dimension }) => (dimension === 'm' ? 5 : 6)}px;
    left: ${({ dimension }) => (dimension === 'm' ? 5 : 6)}px;
    right: ${({ dimension }) => (dimension === 'm' ? 5 : 6)}px;
    border-radius: 50%;
  }
  &:hover {
    background: ${({ theme }) => theme.color['Primary/Primary 70']};
  }
  &:active {
    background: ${({ theme }) => theme.color['Primary/Primary 70']};
  }

  [data-disabled='true'] && {
    background: ${({ theme }) => theme.color['Neutral/Neutral 30']};
    pointer-events: none;
    &:hover,
    &:active {
      background: ${({ theme }) => theme.color['Neutral/Neutral 30']};
    }
  }
`;
