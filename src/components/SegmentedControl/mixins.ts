import styled, { css } from 'styled-components';
import { typography } from '#src/components/Typography';

export const ButtonIconContainer = styled.div``;

const defaultDimensionMixin = css<{ $displayAsSquare?: boolean }>`
  padding: 0;
  height: 56px;
  ${(p) => (p.$displayAsSquare ? 'width: 56px;' : 'padding: 0 29px;')}
  ${ButtonIconContainer} {
    width: 24px;
    height: 24px;
  }

  ${typography['Button/Button 1']}
`;

export const dimensionMixin = css<{ $displayAsSquare?: boolean }>`
  ${defaultDimensionMixin}

  fieldset[data-dimension='xl'] & {
    ${defaultDimensionMixin}
  }

  fieldset[data-dimension='l'] & {
    height: 48px;
    ${(p) => (p.$displayAsSquare ? 'width: 48px;' : 'padding: 0 21px;')}
  }

  fieldset[data-dimension='m'] & {
    height: 40px;
    ${(p) => (p.$displayAsSquare ? 'width: 40px;' : 'padding: 0 17px;')}
  }

  fieldset[data-dimension='s'] & {
    height: 32px;
    ${(p) => (p.$displayAsSquare ? 'width: 32px;' : 'padding: 0 13px;')}
    ${ButtonIconContainer} {
      width: 20px;
      height: 20px;
    }
    ${typography['Button/Button 2']}
  }
`;

export const outlinedMixin = css`
  & + div {
    background-color: transparent;
    color: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']});
    border: 1px solid var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']});

    & *[fill^='#'] {
      fill: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']});
    }
  }
  &:hover + div {
    background-color: var(--admiral-color-Opacity_Hover, ${(p) => p.theme.color['Opacity/Hover']});
    color: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']});
    border-color: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']});
    & *[fill^='#'] {
      fill: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']});
    }
  }
  &:active + div {
    background-color: var(--admiral-color-Opacity_Press, ${(p) => p.theme.color['Opacity/Press']});
    color: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']});
    border-color: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']});
    & *[fill^='#'] {
      fill: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']});
    }
  }
`;

export const outlineDisabledMixin = css`
  & + div {
    background-color: transparent;
    color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
    border: 1px solid var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']});
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
    }
  }
`;

export const filledMixin = css`
  & + div {
    background-color: var(--admiral-color-Opacity_Neutral8, ${(p) => p.theme.color['Opacity/Neutral 8']});
    color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
    border: 1px solid transparent;

    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
    }
  }
  &:hover + div {
    background-color: var(--admiral-color-Opacity_Neutral12, ${(p) => p.theme.color['Opacity/Neutral 12']});
    color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
    border-color: transparent;
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
    }
  }
  &:active + div {
    background-color: var(--admiral-color-Opacity_Neutral16, ${(p) => p.theme.color['Opacity/Neutral 16']});
    color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
    border-color: transparent;
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
    }
  }
`;

export const filledDisabledMixin = css`
  & + div {
    background-color: var(--admiral-color-Opacity_Neutral8, ${(p) => p.theme.color['Opacity/Neutral 8']});
    color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
    border: 1px solid transparent;
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
    }
  }
`;

export const checkedMixin = css`
  & + div {
    background-color: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']});
    color: var(--admiral-color-Special_StaticWhite, ${(p) => p.theme.color['Special/Static White']});
    border: 1px solid var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']});
    & *[fill^='#'] {
      fill: var(--admiral-color-Special_StaticWhite, ${(p) => p.theme.color['Special/Static White']});
    }
  }
  &:hover + div {
    background-color: var(--admiral-color-Primary_Primary70, ${(p) => p.theme.color['Primary/Primary 70']});
    border-color: var(--admiral-color-Primary_Primary70, ${(p) => p.theme.color['Primary/Primary 70']});
  }
  &:active + div {
    background-color: var(--admiral-color-Primary_Primary80, ${(p) => p.theme.color['Primary/Primary 80']});
    border-color: var(--admiral-color-Primary_Primary80, ${(p) => p.theme.color['Primary/Primary 80']});
  }
`;
