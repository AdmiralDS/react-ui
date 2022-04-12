import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { ButtonGroupItem } from './ButtonGroupItem';

export type Dimension = 'l' | 'm' | 's';

export const SIZE = {
  l: 40,
  m: 32,
  s: 24,
};

type ButtonGroupComponentProps = HTMLAttributes<HTMLDivElement> & {
  dimension: Dimension;
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

export const ButtonGroupComponent = styled.div<ButtonGroupComponentProps>`
  background: ${({ theme }) => theme.color.background.tertiary};
  border: 2px solid ${(p) => p.theme.color.background.tertiary};
  border-radius: ${({ dimension }) => BORDER_RADIUS[dimension]}px;
  display: inline-flex;
  height: ${({ dimension }) => SIZE[dimension]}px;
  padding: 2px;

  &[data-appearance~='primary'] {
    border: 2px solid ${(p) => p.theme.color.basic.primary};
    background-color: transparent;
  }

  ${ButtonGroupItem} {
    height: 100%;
    padding: ${({ dimension }) => `0 ${padding[dimension]}px`};
    font-size: ${({ dimension }) => (dimension === 'l' ? 16 : 14)}px;
    line-height: ${({ dimension }) => (dimension === 'l' ? 24 : 20)}px;
  }

  > *:not(:first-child) {
    margin-left: 8px;
  }
`;
