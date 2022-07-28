import { css, DefaultTheme, keyframes, ThemeProps } from 'styled-components';

export const skeletonAnimation = (props: ThemeProps<DefaultTheme>) => keyframes`
  0% {
    background-color: ${props.theme.color['Neutral/Neutral 10']};
    border-color: ${props.theme.color['Neutral/Neutral 10']};
  }
  50% {
    background-color: ${props.theme.color['Neutral/Neutral 20']};
    border-color: ${props.theme.color['Neutral/Neutral 20']};
  }
  100% {
    background-color: ${props.theme.color['Neutral/Neutral 10']};
    border-color: ${props.theme.color['Neutral/Neutral 10']};
  }
`;

export const skeletonAnimationMixin = css`
  animation: ${(props) => skeletonAnimation(props)} 2s ease infinite;
`;
