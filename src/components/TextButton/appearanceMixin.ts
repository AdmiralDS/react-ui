import { css } from 'styled-components';
import { IconContainer, skeletonMixin } from '#src/components/TextButton/commonMixin';
import { StyledButtonProps } from '#src/components/TextButton/types';

const defaultAppearanceMixin = css<StyledButtonProps>`
  ${IconContainer} {
    ${({ skeleton }) => skeleton && skeletonMixin};
    border-radius: ${({ skeleton }) => (skeleton ? '50%' : '')};
    svg {
      visibility: ${(p) => (p.skeleton || p.$loading ? 'hidden' : 'visible')};
    }
  }

  &:focus,
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.color['Primary/Primary 70']};
    ${IconContainer} {
      svg {
        path {
          fill: ${({ theme }) => theme.color['Primary/Primary 70']};
        }
      }
    }
  }

  &:active {
    color: ${({ theme }) => theme.color['Primary/Primary 80']};
    ${IconContainer} {
      svg {
        path {
          fill: ${({ theme }) => theme.color['Primary/Primary 80']};
        }
      }
    }
  }

  &:disabled {
    cursor: not-allowed;
    color: ${({ theme }) => theme.color['Neutral/Neutral 30']};
    ${IconContainer} {
      svg {
        path {
          fill: ${({ theme }) => theme.color['Neutral/Neutral 30']};
        }
      }
    }
  }
`;

const primaryAppearanceMixin = css`
  color: ${({ theme }) => theme.color['Primary/Primary 60 Main']};

  ${IconContainer} {
    svg {
      path {
        fill: ${({ theme }) => theme.color['Primary/Primary 60 Main']};
      }
    }
  }
`;

const secondaryAppearanceMixin = css`
  color: ${({ theme }) => theme.color['Neutral/Neutral 90']};

  ${IconContainer} {
    svg {
      path {
        fill: ${({ theme }) => theme.color['Neutral/Neutral 50']};
      }
    }
  }
`;

export const appearanceMixin = css<StyledButtonProps>`
  &[data-appearance='primary'] {
    ${primaryAppearanceMixin}
  }
  &[data-appearance='secondary'] {
    ${secondaryAppearanceMixin}
  }

  ${defaultAppearanceMixin}
`;
