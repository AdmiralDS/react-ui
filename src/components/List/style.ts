import styled, { css } from 'styled-components';
import { typography } from '#src/components/Typography';

type Dimension = 's' | 'm';
type OrderedStyleType = 'numbers' | 'lower-letters' | 'upper-letters';
type UnorderedStyleType = 'bullet' | 'virgule' | 'icon';

const cyrillicStyle = css`
  @counter-style lower-cyrillic {
    system: fixed;
    symbols: а б в г д е ж з и к л м н о п р с т у ф х ц ч ш щ ы э ю я;
  }
  @counter-style upper-cyrillic {
    system: fixed;
    symbols: А Б В Г Д Е Ж З И К Л М Н О П Р С Т У Ф Х Ц Ч Ш Щ Ы Э Ю Я;
  }
`;

function getContent($styleType: OrderedStyleType | UnorderedStyleType) {
  switch ($styleType) {
    case 'lower-letters':
      return css`
        ${cyrillicStyle}
        content: counter(admiral-list-counter, lower-cyrillic) ')';
      `;
    case 'upper-letters':
      return css`
        ${cyrillicStyle}
        content: counter(admiral-list-counter, upper-cyrillic) ')';
      `;
    case 'virgule':
      return css`
        content: '—';
      `;
    case 'numbers':
      return css`
        content: counters(admiral-list-counter, '.') '.';
      `;
    case 'bullet':
      return css`
        content: '•';
        /** Размер шрифта, при котором достигается необходимый размер точки */
        font-size: 18px;
        color: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
      `;
    case 'icon':
    default:
      return 'content: none;';
  }
}

const listMixin = css<{
  $dimension: Dimension;
  $gap: React.CSSProperties['gap'];
}>`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.$gap};
  padding: 0;
  margin: 0;
  list-style: none;
  counter-reset: admiral-list-counter 0;

  & > li ul,
  & > li ol {
    margin-top: ${(p) => p.$gap};
  }
`;

const listMarkerMixin = css<{ $styleType: OrderedStyleType | UnorderedStyleType; $dimension: Dimension }>`
  display: inline-flex;
  flex-shrink: 0;
  margin-inline-end: 8px;
  ${(p) => getContent(p.$styleType)}
  height: ${(p) => (p.$dimension == 'm' ? 24 : 20)}px;
`;

export const OrderedListComponent = styled.ol<{
  $dimension: Dimension;
  $styleType: OrderedStyleType;
  $gap: React.CSSProperties['gap'];
  $markerCssMixin?: ReturnType<typeof css>;
}>`
  ${listMixin}
  & > li::before {
    ${listMarkerMixin}
    justify-content: flex-start;
    min-width: ${(p) => (p.$styleType == 'numbers' ? 'auto' : `${p.$dimension == 'm' ? 24 : 20}px`)};
    ${(p) => p.$markerCssMixin}
  }
`;

export const UnorderedListComponent = styled.ul<{
  $dimension: Dimension;
  $styleType: UnorderedStyleType;
  $gap: React.CSSProperties['gap'];
  $markerCssMixin?: ReturnType<typeof css>;
}>`
  ${listMixin}
  & > li::before {
    ${listMarkerMixin}
    justify-content: center;
    width: ${(p) => (p.$dimension == 'm' ? 24 : 20)}px;
    ${(p) => p.$markerCssMixin}
  }
`;

export const ListItemComponent = styled.li`
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
  counter-increment: admiral-list-counter 1;
  display: inline-flex;

  ol[data-dimension='m'] &,
  ul[data-dimension='m'] & {
    ${typography['Body/Body 1 Long']}
  }
  ol[data-dimension='s'] &,
  ul[data-dimension='s'] & {
    ${typography['Body/Body 2 Long']}
  }
`;

export const ListItemContent = styled.div`
  display: block;
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
