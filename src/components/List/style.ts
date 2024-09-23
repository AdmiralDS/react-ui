import styled, { css } from 'styled-components';
import { typography } from '#src/components/Typography';

type Dimension = 's' | 'm';
type OrderedStyleType =
  | 'numbers'
  | 'lower-letters'
  | 'upper-letters'
  | Omit<React.CSSProperties['listStyleType'], 'decimal'>;
type UnorderedStyleType = 'bullet' | 'virgule' | 'icon' | Omit<React.CSSProperties['listStyleType'], 'disc'>;

const cyrillicStyle = css`
  @counter-style cyrillic-lower {
    system: fixed;
    symbols: а б в г д е ж з и к л м н о п р с т у ф х ц ч ш щ ы э ю я;
  }
  @counter-style cyrillic-upper {
    system: fixed;
    symbols: А Б В Г Д Е Ж З И К Л М Н О П Р С Т У Ф Х Ц Ч Ш Щ Ы Э Ю Я;
  }
`;

function getContent($styleType: OrderedStyleType & UnorderedStyleType) {
  switch ($styleType) {
    case 'numbers':
      return css`
        content: counters(marker, '.') '.';
      `;
    case 'lower-letters':
      return css`
        ${cyrillicStyle}
        content: counter(marker, cyrillic-lower) ')';
      `;
    case 'upper-letters':
      return css`
        ${cyrillicStyle}
        content: counter(marker, cyrillic-upper) ')';
      `;
    case 'bullet':
      return css`
        content: '•';
        color: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
      `;
    case 'virgule':
      return css`
        content: '—';
      `;
    default:
      return css`
        content: counter(marker, ${$styleType ?? 'disc'});
      `;
  }
}

const unorderedMarker = css<{ $dimension: Dimension; $styleType: UnorderedStyleType }>`
  & > li::before {
    ${(p) => getContent(p.$styleType)}
    display: inline-flex;
    justify-content: center;
    height: ${(p) => (p.$dimension == 'm' ? 24 : 20)}px;
    min-width: ${(p) => (p.$dimension == 'm' ? 24 : 20)}px;
    margin-inline-end: 8px;
  }
`;

const listMixin = css<{
  $dimension: Dimension;
  $gap: string | number;
}>`
  padding-inline-start: ${(p) => (p.$dimension == 'm' ? 32 : 28)}px;
  list-style: none;
  counter-reset: marker 0;

  & > li {
    margin-top: ${(p) => p.$gap};
  }
  &[data-nested='false'] {
    padding: 0;
    & > li:first-child {
      margin: 0;
    }
  }
`;

export const OrderedListComponent = styled.ol<{
  $dimension: Dimension;
  $styleType: OrderedStyleType;
  $gap: string | number;
}>`
  ${listMixin}
  & > li::before {
    ${(p) => getContent(p.$styleType)}
    display: inline-flex;
    height: ${(p) => (p.$dimension == 'm' ? 24 : 20)}px;
    ${(p) =>
      p.$styleType == 'letters' &&
      css`
        width: ${p.$dimension == 'm' ? 24 : 20}px;
      `}
    justify-content: flex-start;
    margin-inline-end: 8px;
  }
`;

export const UnorderedListComponent = styled.ul<{
  $dimension: Dimension;
  $styleType: UnorderedStyleType;
  $gap: string | number;
}>`
  ${listMixin}
  ${(p) => p.$styleType !== 'icon' && unorderedMarker}
`;

export const ListItemComponent = styled.li<{ $markerColor?: string }>`
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
  counter-increment: marker 1;
  display: inline-flex;
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
