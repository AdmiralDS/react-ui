import styled, { css } from 'styled-components';
import type { RangeProps } from '#src/components/Range';
import { skeletonAnimationMixin } from '#src/components/skeleton/animation';

const TRANSITION_ANIMATION = 'ease-in 0.3s';

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

export const TrackWrapper = styled.div<{ dimension: RangeProps['dimension']; skeleton?: boolean }>`
  position: relative;
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: ${({ dimension }) => (dimension === 's' ? 20 : 24)}px;
  [data-disabled='true'] && {
    cursor: auto;
    pointer-events: none;
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
  background-color: ${({ theme }) => theme.color['Primary/Primary 60 Main']};
  transition:
    left ${({ animation }) => (animation ? TRANSITION_ANIMATION : 'none')},
    right ${({ animation }) => (animation ? TRANSITION_ANIMATION : 'none')};
`;

export const Thumb = styled.div<{ dimension: RangeProps['dimension']; animation?: boolean }>`
  position: absolute;
  width: ${({ dimension }) => (dimension === 's' ? 16 : 20)}px;
  height: ${({ dimension }) => (dimension === 's' ? 16 : 20)}px;
  align-items: center;
  justify-content: center;
  transform: translateX(-50%) translateY(-50%);
  border-radius: 50%;
  top: 2px;
  transition: left ${({ animation }) => (animation ? TRANSITION_ANIMATION : 'none')};
`;

export const ThumbCircle = styled.div<{ dimension: RangeProps['dimension']; active?: boolean }>`
  position: relative;
  width: ${({ dimension }) => (dimension === 's' ? 16 : 20)}px;
  height: ${({ dimension }) => (dimension === 's' ? 16 : 20)}px;
  background: ${({ theme }) => theme.color['Primary/Primary 60 Main']};
  border-radius: 50%;
  &:before {
    position: absolute;
    content: '';
    width: ${({ dimension }) => (dimension === 's' ? 6 : 8)}px;
    height: ${({ dimension }) => (dimension === 's' ? 6 : 8)}px;
    background: ${({ theme }) => theme.color['Special/Static White']};
    top: ${({ dimension }) => (dimension === 's' ? 5 : 6)}px;
    bottom: ${({ dimension }) => (dimension === 's' ? 5 : 6)}px;
    right: ${({ dimension }) => (dimension === 's' ? 5 : 6)}px;
    left: ${({ dimension }) => (dimension === 's' ? 5 : 6)}px;
    border-radius: 50%;
  }
  &:hover {
    background: ${({ theme }) => theme.color['Primary/Primary 70']};
  }

  ${({ active, theme }) => active && `background: ${theme.color['Primary/Primary 70']};`}

  [data-disabled='true'] && {
    background: ${({ theme }) => theme.color['Neutral/Neutral 30']};
    pointer-events: none;
  }
`;
