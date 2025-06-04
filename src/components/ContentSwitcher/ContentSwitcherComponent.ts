import type { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { ContentSwitcherItemButton } from '#src/components/ContentSwitcher/ContentSwitcherItem';

export type Dimension = 'l' | 'm' | 's';
export type Adaptive = 'fill';

export const SIZE = {
  l: 40,
  m: 32,
  s: 24,
};

type ContentSwitcherComponentProps = HTMLAttributes<HTMLDivElement> & {
  $dimension: Dimension;
  $adaptive?: Adaptive;
};

const BORDER_RADIUS = {
  l: 24,
  m: 20,
  s: 16,
};

const padding = {
  l: 20,
  m: 16,
  s: 12,
};

const adaptiveMixin = css`
  width: 100%;
  overflow: hidden;
  min-width: fit-content;
`;

export const ContentSwitcherComponent = styled.div<ContentSwitcherComponentProps>`
  background: var(--admiral-color-Opacity_Neutral8, ${(p) => p.theme.color['Opacity/Neutral 8']});
  border: 2px solid transparent;
  border-radius: ${({ $dimension }) => BORDER_RADIUS[$dimension]}px;
  display: inline-flex;
  height: ${({ $dimension }) => SIZE[$dimension]}px;
  padding: 2px;

  ${({ $adaptive }) => ($adaptive === 'fill' ? adaptiveMixin : '')}

  &[data-appearance~='primary'] {
    border: 2px solid var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']});
    background-color: transparent;
  }

  ${ContentSwitcherItemButton} {
    height: 100%;
    padding: ${({ $dimension }) => `0 ${padding[$dimension]}px`};
    font-size: ${({ $dimension }) => ($dimension === 'l' ? 16 : 14)}px;
    line-height: ${({ $dimension }) => ($dimension === 'l' ? 24 : 20)}px;
  }

  > *:not(:first-child) {
    margin-left: 8px;
  }
`;
