import { css } from 'styled-components';

export const dangerAppearanceMixin = css`
  background-color: var(--admiral-color-Error_Error60Main, ${(p) => p.theme.color['Error/Error 60 Main']});
  color: var(--admiral-color-Special_StaticWhite, ${(p) => p.theme.color['Special/Static White']});
  border: 1px solid var(--admiral-color-Error_Error60Main, ${(p) => p.theme.color['Error/Error 60 Main']});
  &&& *[fill^='#'] {
    fill: var(--admiral-color-Special_StaticWhite, ${(p) => p.theme.color['Special/Static White']});
  }

  &&&:hover {
    background-color: var(--admiral-color-Error_Error70, ${(p) => p.theme.color['Error/Error 70']});
    border-color: var(--admiral-color-Error_Error70, ${(p) => p.theme.color['Error/Error 70']});
  }

  &&&:active {
    background-color: var(--admiral-color-Error_Error80, ${(p) => p.theme.color['Error/Error 80']});
    border-color: var(--admiral-color-Error_Error80, ${(p) => p.theme.color['Error/Error 80']});
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
