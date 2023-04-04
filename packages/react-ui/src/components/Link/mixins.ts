import { css } from 'styled-components';
import type { AppearanceLink, Dimension } from '#src/components/Link/LinkComponent';
import { typography } from '#src/components/Typography';
import { mediumGroupBorderRadius } from '#src/components/themes/borderRadius';

export const styleDisabledMixin = css`
  color: ${({ theme }) => theme.color['Neutral/Neutral 30']};
  & *[fill^='#'] {
    fill: ${({ theme }) => theme.color['Neutral/Neutral 30']};
  }
  user-select: none;
`;

export const styleColorMixin = css<{ appearance?: AppearanceLink }>`
  color: ${({ theme, appearance }) =>
    appearance === 'secondary' ? theme.color['Neutral/Neutral 90'] : theme.color['Primary/Primary 60 Main']};
  & *[fill^='#'] {
    fill: ${({ theme, appearance }) =>
      appearance === 'secondary' ? theme.color['Neutral/Neutral 90'] : theme.color['Primary/Primary 60 Main']};
  }
`;

export const styleMixin = css`
  border-radius: ${(p) => mediumGroupBorderRadius(p.theme.shape)};

  &:hover {
    color: ${({ theme }) => theme.color['Primary/Primary 70']};
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color['Primary/Primary 70']};
    }
  }
  &:focus {
    color: ${({ theme }) => theme.color['Primary/Primary 70']};
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color['Primary/Primary 70']};
    }
    outline-color: ${({ theme }) => theme.color['Primary/Primary 70']};
  }
  &:active {
    color: ${({ theme }) => theme.color['Primary/Primary 80']};
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color['Primary/Primary 80']};
    }
  }

  &:focus-visible {
    outline-offset: 2px;
    outline: ${(p) => p.theme.color['Primary/Primary 60 Main']} solid 2px;
  }
`;

export const styleTextMixin = css<{ dimension?: Dimension }>`
  ${({ dimension }) => (dimension === 's' ? typography['Body/Body 2 Long'] : typography['Body/Body 1 Long'])}
`;
