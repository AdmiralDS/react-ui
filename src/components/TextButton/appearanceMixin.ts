import { css } from 'styled-components';
import { IconContainer, skeletonMixin } from '#src/components/TextButton/commonMixin';
import type { StyledButtonProps } from '#src/components/TextButton/types';
import { mediumGroupBorderRadius } from '#src/components/themes/borderRadius';

const defaultAppearanceMixin = css<StyledButtonProps>`
  ${IconContainer} {
    ${({ $skeleton }) => $skeleton && skeletonMixin};
    border-radius: ${({ $skeleton }) => ($skeleton ? '50%' : '')};
    svg {
      visibility: ${(p) => (p.$skeleton || p.$loading ? 'hidden' : 'visible')};
    }
  }

  border-radius: ${(p) =>
    p.$skeleton ? 0 : `var(--admiral-border-radius-Medium, ${mediumGroupBorderRadius(p.theme.shape)})`};

  &:focus-visible {
    outline-offset: 2px;
    outline: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']}) solid 2px;
  }

  &:hover {
    cursor: pointer;
    color: var(--admiral-color-Primary_Primary70, ${(p) => p.theme.color['Primary/Primary 70']});
    ${IconContainer} {
      svg {
        path {
          fill: var(--admiral-color-Primary_Primary70, ${(p) => p.theme.color['Primary/Primary 70']});
        }
      }
    }
  }

  &:active {
    color: var(--admiral-color-Primary_Primary80, ${(p) => p.theme.color['Primary/Primary 80']});
    ${IconContainer} {
      svg {
        path {
          fill: var(--admiral-color-Primary_Primary80, ${(p) => p.theme.color['Primary/Primary 80']});
        }
      }
    }
  }

  &:disabled {
    cursor: ${({ $skeleton, $loading }) => ($skeleton || $loading ? 'default' : 'not-allowed')};
    color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
    ${IconContainer} {
      svg {
        path {
          fill: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
        }
      }
    }
  }
`;

const primaryAppearanceMixin = css`
  color: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']});

  ${IconContainer} {
    svg {
      path {
        fill: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']});
      }
    }
  }
`;

const secondaryAppearanceMixin = css`
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});

  ${IconContainer} {
    svg {
      path {
        fill: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
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
