import { css } from 'styled-components';

export const successAppearanceMixin = css`
  background-color: var(--admiral-color-Success_Success50Main, ${(p) => p.theme.color['Success/Success 50 Main']});
  color: var(--admiral-color-Special_StaticWhite, ${(p) => p.theme.color['Special/Static White']});
  border: 1px solid var(--admiral-color-Success_Success50Main, ${(p) => p.theme.color['Success/Success 50 Main']});

  &&& *[fill^='#'] {
    fill: var(--admiral-color-Special_StaticWhite, ${(p) => p.theme.color['Special/Static White']});
  }

  &&&:hover {
    background-color: var(--admiral-color-Success_Success60, ${(p) => p.theme.color['Success/Success 60']});
    border-color: var(--admiral-color-Success_Success60, ${(p) => p.theme.color['Success/Success 60']});
  }

  &&&:active {
    background-color: var(--admiral-color-Success_Success70, ${(p) => p.theme.color['Success/Success 70']});
    border-color: var(--admiral-color-Success_Success70, ${(p) => p.theme.color['Success/Success 70']});
  }

  &&&[data-appearance~='disabled'],
  &&&:disabled {
    background-color: var(--admiral-color-Neutral_Neutral10, ${(p) => p.theme.color['Neutral/Neutral 10']});
    color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
    border-color: var(--admiral-color-Neutral_Neutral10, ${(p) => p.theme.color['Neutral/Neutral 10']});
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
    }
  }
`;
