import styled from 'styled-components';

const TRANSITION_ANIMATION = 'all  ease-in 0.3s';

export const Wrapper = styled.div`
  position: relative;
  -webkit-tap-highlight-color: transparent;
`;

export const TrackWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 40px;
  padding-bottom: 20px;
  [data-dimension='m'] & {
    height: 36px;
  }
  [data-disabled='true'] && {
    pointer-events: none;
    cursor: auto;
  }
`;

export const Track = styled.div`
  height: 2px;
  background: ${({ theme }) => theme.color.background.tertiary};
  [data-disabled='true'] && {
    background: ${({ theme }) => theme.color.background.tertiary};
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
    background: ${({ theme }) => theme.color.basic.disable};
  }
  position: absolute;
  height: 2px;
  width: 100%;
  background-color: ${({ theme }) => theme.color.basic.primary};
  transition: ${({ animation }) => (animation ? TRANSITION_ANIMATION : 'none')};
`;

export const Thumb = styled.div<{ animation?: boolean }>`
  position: absolute;
  width: 20px;
  height: 20px;
  [data-dimension='m'] && {
    height: 16px;
    width: 16px;
  }
  align-items: center;
  justify-content: center;
  transform: translateX(-50%) translateY(-50%);
  border-radius: 50%;
  top: 2px;
  transition: ${({ animation }) => (animation ? TRANSITION_ANIMATION : 'none')};
`;

export const ThumbCircle = styled.div`
  position: relative;
  height: 20px;
  width: 20px;
  background: ${({ theme }) => theme.color.basic.primary};
  border-radius: 50%;
  &:before {
    position: absolute;
    content: '';
    height: 8px;
    width: 8px;
    background: ${({ theme }) => theme.color.background.primary};
    top: 6px;
    bottom: 6px;
    left: 6px;
    right: 6px;
    border-radius: 50%;
  }
  [data-dimension='m'] && {
    height: 16px;
    width: 16px;
    &:before {
      height: 6px;
      width: 6px;
      top: 5px;
      bottom: 5px;
      left: 5px;
      right: 5px;
    }
  }
  &:hover {
    background: ${({ theme }) => theme.color.basic.hover};
  }
  &:active {
    background: ${({ theme }) => theme.color.basic.press};
  }

  [data-disabled='true'] && {
    background: ${({ theme }) => theme.color.basic.disable};
    pointer-events: none;
    &:hover,
    &:active {
      background: ${({ theme }) => theme.color.basic.disable};
    }
  }
`;
