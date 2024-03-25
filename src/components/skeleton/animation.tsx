import type { ExecutionContext } from 'styled-components';
import { css, keyframes } from 'styled-components';

export const skeletonAnimation = (props: ExecutionContext & object) => keyframes`
  0% {
    background-color: var(--admiral-color-Neutral_Neutral10, ${props.theme.color['Neutral/Neutral 10']});
    border-color: var(--admiral-color-Neutral_Neutral10, ${props.theme.color['Neutral/Neutral 10']});
  }
  50% {
    background-color: var(--admiral-color-Neutral_Neutral20, ${props.theme.color['Neutral/Neutral 20']});
    border-color: var(--admiral-color-Neutral_Neutral20, ${props.theme.color['Neutral/Neutral 20']});
  }
  100% {
    background-color: var(--admiral-color-Neutral_Neutral10, ${props.theme.color['Neutral/Neutral 10']});
    border-color: var(--admiral-color-Neutral_Neutral10, ${props.theme.color['Neutral/Neutral 10']});
  }
`;

export const skeletonAnimationMixin = css`
  animation: ${(props) => skeletonAnimation(props)} 2s ease infinite;
`;
