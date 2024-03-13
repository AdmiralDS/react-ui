import { css } from 'styled-components';

export const whiteAppearanceMixin = css`
  background-color: transparent;
  color: var(--admiral-color-Special_StaticWhite, ${(p) => p.theme.color['Special/Static White']});
  border: 1px solid var(--admiral-color-Special_StaticWhite, ${(p) => p.theme.color['Special/Static White']});
  &&& *[fill^='#'] {
    fill: var(--admiral-color-Special_StaticWhite, ${(p) => p.theme.color['Special/Static White']});
  }

  &&&:hover {
    background-color: var(
      --admiral-color-Opacity_DarkStaticHover,
      ${(p) => p.theme.color['Opacity/Dark Static Hover']}
    );
    color: var(--admiral-color-Special_StaticWhite, ${(p) => p.theme.color['Special/Static White']});
    border-color: var(--admiral-color-Special_StaticWhite, ${(p) => p.theme.color['Special/Static White']});
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Special_StaticWhite, ${(p) => p.theme.color['Special/Static White']});
    }
  }

  &&&:active {
    background-color: var(
      --admiral-color-Opacity_DarkStaticPress,
      ${(p) => p.theme.color['Opacity/Dark Static Press']}
    );
    color: var(--admiral-color-Special_StaticWhite, ${(p) => p.theme.color['Special/Static White']});
    border-color: var(--admiral-color-Special_StaticWhite, ${(p) => p.theme.color['Special/Static White']});
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Special_StaticWhite, ${(p) => p.theme.color['Special/Static White']});
    }
  }

  &&&[data-appearance~='disabled'],
  &&&:disabled {
    border-color: var(
      --admiral-color-Special_DarkStaticNeutral30,
      ${(p) => p.theme.color['Special/Dark Static Neutral 30']}
    );
    color: var(--admiral-color-Special_DarkStaticNeutral30, ${(p) => p.theme.color['Special/Dark Static Neutral 30']});
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Special_DarkStaticNeutral30, ${(p) => p.theme.color['Special/Dark Static Neutral 30']});
    }
  }
`;
