import styled from 'styled-components';
import { typography } from '#src/components/Typography';
import type { ComponentDimension, InputStatus } from '#src/components/input/types';

export type SizeProps = {
  $dimension?: ComponentDimension;
};

const dimensionFocusBoxStyles = {
  xl: `
    height: 56px;
    & * {
      line-height: 56px;
    }
  `,
  s: `
    height: 32px;
    padding-inline-start: 12px;
    padding-inline-end: 12px;
    & * {
      ${typography['Body/Body 2 Long']}
      line-height: 32px;
    }
  `,
  m: ``,
};

export const InputBox = styled.div<SizeProps & { disabled?: boolean; $status?: InputStatus }>`
  cursor: text;
  display: inline-flex;
  overflow: hidden;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: stretch;
  width: 280px;

  height: 40px;
  padding: 0;
  padding-inline-start: 16px;
  padding-inline-end: 16px;

  & * {
    ${typography['Body/Body 1 Long']}
    line-height: 40px;
  }
  &[data-size='xl'] {
    height: 56px;
    & * {
      line-height: 56px;
    }
  }
  &[data-size='s'] {
    height: 32px;
    padding-inline-start: 12px;
    padding-inline-end: 12px;
    & * {
      ${typography['Body/Body 2 Long']}
      line-height: 32px;
    }
  }

  box-sizing: border-box;
  border-radius: 4px;

  background: transparent;
  /* https://stackoverflow.com/questions/69658462/inset-box-shadow-visual-artifacts-in-google-chrome */
  transform: translate3d(0, 0, 0);
  box-shadow: 0px 0px 0px 1px var(--admiral-color-Neutral_Neutral40, ${(p) => p.theme.color['Neutral/Neutral 40']})
    inset;

  &:hover:not(:focus-within) {
    box-shadow: 0px 0px 0px 1px var(--admiral-color-Neutral_Neutral60, ${(p) => p.theme.color['Neutral/Neutral 60']})
      inset;
  }
  &:focus-within {
    box-shadow: 0px 0px 0px 2px
      var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']}) inset;
  }

  transition: box-shadow 0.3s ease-in-out;

  ${(p) => p.disabled && 'border-color: transparent;'};

  &&&:disabled {
    color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
  }
  &:disabled::placeholder {
    color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
  }
  ${(p) => (p.disabled ? 'cursor: not-allowed;' : '')}

  ${({ $dimension }) => $dimension && dimensionFocusBoxStyles[$dimension]}
`;
