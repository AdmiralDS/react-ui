import { css } from 'styled-components';
import type { AppearanceLink, Dimension } from '#src/components/Link/LinkComponent';
import { typography } from '#src/components/Typography';
import { mediumGroupBorderRadius } from '#src/components/themes';

export const styleDisabledMixin = css`
  color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
  }
  user-select: none;
`;

export const styleColorMixin = css<{ $appearance?: AppearanceLink }>`
  color: ${({ theme, $appearance }) =>
    $appearance === 'secondary'
      ? `var(--admiral-color-Neutral_Neutral90, ${theme.color['Neutral/Neutral 90']})`
      : `var(--admiral-color-Primary_Primary60Main, ${theme.color['Primary/Primary 60 Main']})`};
  & *[fill^='#'] {
    fill: ${({ theme, $appearance }) =>
      $appearance === 'secondary'
        ? `var(--admiral-color-Neutral_Neutral90, ${theme.color['Neutral/Neutral 90']})`
        : `var(--admiral-color-Primary_Primary60Main, ${theme.color['Primary/Primary 60 Main']})`};
  }
`;

export const styleMixin = css`
  border-radius: var(--admiral-border-radius-Medium, ${(p) => mediumGroupBorderRadius(p.theme.shape)});
`;

export const styleEventMixin = css`
  &:hover {
    color: var(--admiral-color-Primary_Primary70, ${(p) => p.theme.color['Primary/Primary 70']});
    & *[fill^='#'] {
      fill: var(--admiral-color-Primary_Primary70, ${(p) => p.theme.color['Primary/Primary 70']});
    }
  }
  &:focus {
    color: var(--admiral-color-Primary_Primary70, ${(p) => p.theme.color['Primary/Primary 70']});
    & *[fill^='#'] {
      fill: var(--admiral-color-Primary_Primary70, ${(p) => p.theme.color['Primary/Primary 70']});
    }
    outline-color: var(--admiral-color-Primary_Primary70, ${(p) => p.theme.color['Primary/Primary 70']});
  }
  &:active {
    color: var(--admiral-color-Primary_Primary80, ${(p) => p.theme.color['Primary/Primary 80']});
    & *[fill^='#'] {
      fill: var(--admiral-color-Primary_Primary80, ${(p) => p.theme.color['Primary/Primary 80']});
    }
  }

  &:focus-visible {
    outline-offset: 2px;
    outline: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']}) solid 2px;
  }
`;

export const styleTextMixin = css<{ $dimension?: Dimension }>`
  ${({ $dimension }) => ($dimension === 's' ? typography['Body/Body 2 Long'] : typography['Body/Body 1 Long'])}
`;
