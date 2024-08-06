import styled, { css, keyframes } from 'styled-components';
import { ReactComponent as Spinner } from './svgs/Subtract.svg';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const spinnerMixin = css<{ $inverse?: boolean }>`
  animation: ${spin} 1s linear infinite;
  path {
    fill: ${({ $inverse, theme }) =>
      $inverse
        ? `var(--admiral-color-Special_StaticWhite, ${theme.color['Special/Static White']})`
        : `var(--admiral-color-Primary_Primary60Main, ${theme.color['Primary/Primary 60 Main']})`};
  }
`;

export const SpinnerIcon = styled(Spinner)<{
  $inverse?: boolean;
  $svgMixin?: ReturnType<typeof css>;
}>`
  ${spinnerMixin}
  width: 100%;
  height: 100%;
  path {
    visibility: hidden;
  }

  @container (min-width: 64px) {
    path[data-dimension='xl'] {
      visibility: visible;
    }
  }
  @container (max-width: 48px) and (min-width: 25px) {
    path[data-dimension='l'] {
      visibility: visible;
      transform: scale(1.33);
    }
  }
  @container (max-width: 24px) and (min-width: 21px) {
    path[data-dimension='m'] {
      visibility: visible;
      transform: scale(2.66);
    }
  }
  @container (max-width: 20px) and (min-width: 17px) {
    path[data-dimension='ms'] {
      visibility: visible;
      transform: scale(3.2);
    }
  }
  @container (max-width: 16px) {
    path[data-dimension='s'] {
      visibility: visible;
      transform: scale(4);
    }
  }
`;
