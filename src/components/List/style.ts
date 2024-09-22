import styled, { css } from 'styled-components';
import { typography } from '#src/components/Typography';

type Dimension = 's' | 'm';
type OrderedStyleType = 'numbers' | 'letters';
type UnorderedStyleType = 'bullet' | 'virgule' | 'icon';

const cyrillicStyle = css`
  @counter-style cyrillic-lower {
    system: fixed;
    symbols: а б в г д е ж з и к л м н о п р с т у ф х ц ч ш щ ы э ю я;
  }
`;
const numberCounter = css`
  content: counters(marker, '.') '.';
`;
const letterCounter = css`
  ${cyrillicStyle}
  content: counter(marker, cyrillic-lower) ')';
`;

export const OrderedListComponent = styled.ol<{
  $dimension: Dimension;
  $styleType: OrderedStyleType;
  $gap: string | number;
}>`
  padding-inline-start: ${(p) => (p.$dimension == 'm' ? 32 : 28)}px;
  list-style-type: none;
  counter-reset: marker 0;

  & > li {
    counter-increment: marker 1;
    margin-top: ${(p) => p.$gap};
    position: relative;
  }
  &[data-nested='false'] {
    padding: 0;
    & > li:first-child {
      margin: 0;
    }
  }

  & > li::before {
    ${(p) => (p.$styleType == 'numbers' ? numberCounter : letterCounter)}
    display: inline-flex;
    height: ${(p) => (p.$dimension == 'm' ? 24 : 20)}px;
    min-width: ${(p) => (p.$dimension == 'm' ? 24 : 20)}px;
    justify-content: flex-end;
    margin-inline-end: 8px;
  }
`;

const unorderedMarker = css<{ $dimension: Dimension; $styleType: UnorderedStyleType }>`
  & > li::before {
    ${(p) =>
      p.$styleType == 'bullet' &&
      css`
        content: '•';
        color: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
      `}
    ${(p) =>
      p.$styleType == 'virgule' &&
      css`
        content: '—';
      `}
    display: inline-flex;
    justify-content: center;
    height: ${(p) => (p.$dimension == 'm' ? 24 : 20)}px;
    min-width: ${(p) => (p.$dimension == 'm' ? 24 : 20)}px;
    margin-inline-end: 8px;
  }
`;

export const UnorderedListComponent = styled.ul<{
  $dimension: Dimension;
  $styleType: UnorderedStyleType;
  $gap: string | number;
}>`
  padding-inline-start: ${(p) => (p.$dimension == 'm' ? 32 : 28)}px;
  list-style: none;
  & > li {
    margin-top: ${(p) => p.$gap};
  }
  &[data-nested='false'] {
    padding: 0;
    & > li:first-child {
      margin: 0;
    }
  }
  ${(p) => (p.$styleType == 'bullet' || p.$styleType == 'virgule' ? unorderedMarker : '')}
`;

export const ListItemComponent = styled.li<{ $markerColor?: string }>`
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
  ol[data-dimension='m'] &,
  ul[data-dimension='m'] & {
    ${typography['Body/Body 1 Long']}
  }
  ol[data-dimension='s'] &,
  ul[data-dimension='s'] & {
    ${typography['Body/Body 2 Long']}
  }
  ${(p) =>
    p.$markerColor
      ? css`
          &&::before {
            color: ${p.$markerColor};
          }
        `
      : ''}
`;

export const Icon = styled.svg<{ color?: string }>`
  ul[data-dimension='m'] & {
    width: 24px;
    height: 24px;
  }
  ul[data-dimension='s'] & {
    width: 20px;
    height: 20px;
  }
  vertical-align: bottom;
  margin-inline-end: 8px;
  *[fill^='#'] {
    fill: ${(p) =>
      p.color ? p.color : `var(--admiral-color-Neutral_Neutral50, ${p.theme.color['Neutral/Neutral 50']})`};
  }
`;
