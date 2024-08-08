import styled, { keyframes } from 'styled-components';
import { ReactComponent as Spinner } from './Subtract.svg';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const SpinnerIcon = styled(Spinner)<{
  $inverse?: boolean;
}>`
  animation: ${spin} 1s linear infinite;
  path {
    fill: ${({ $inverse, theme }) =>
      $inverse
        ? `var(--admiral-color-Special_StaticWhite, ${theme.color['Special/Static White']})`
        : `var(--admiral-color-Primary_Primary60Main, ${theme.color['Primary/Primary 60 Main']})`};
  }
  width: 100%;
  height: 100%;

  @container (min-width: 64px) {
    :not(path[data-dimension='xl']) {
      display: none;
    }
  }
  @container (max-width: 48px) and (min-width: 25px) {
    :not(path[data-dimension='l']) {
      display: none;
    }
  }
  @container (max-width: 24px) and (min-width: 21px) {
    :not(path[data-dimension='m']) {
      display: none;
    }
  }
  @container (max-width: 20px) and (min-width: 17px) {
    :not(path[data-dimension='ms']) {
      display: none;
    }
  }
  @container (max-width: 16px) {
    :not(path[data-dimension='s']) {
      display: none;
    }
  }
`;
