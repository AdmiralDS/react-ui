import { css } from 'styled-components';

export const secondaryAppearanceMixin = css`
  background-color: transparent;
  color: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']});
  border: 1px solid var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']});

  &&& *[fill^='#'] {
    fill: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']});
  }

  &&&:hover {
    background-color: var(--admiral-color-Opacity_Hover, ${(p) => p.theme.color['Opacity/Hover']});
    color: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']});
    border-color: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']});
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']});
    }
  }

  &&&:active {
    background-color: var(--admiral-color-Opacity_Press, ${(p) => p.theme.color['Opacity/Press']});
    color: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']});
    border-color: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']});
    & *[fill^='#'] {
      fill: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']});
    }
  }

  &&&[data-appearance~='disabled'],
  &&&:disabled {
    background-color: transparent;
    color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
    &:not(.button-group > button) {
      border-color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
    }
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
    }
  }
`;
