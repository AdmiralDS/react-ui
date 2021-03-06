import * as React from 'react';
import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

export interface SlotProps extends HTMLAttributes<HTMLLIElement> {
  selected?: boolean;
  value: string;
  disabled: boolean;
  active?: boolean;
}

const activeSlot = css`
  background-color: ${(p) => p.theme.color['Opacity/Focus']};
`;

const SlotStyle = styled.li<{ disabled?: boolean; selected?: boolean; active?: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  color: ${(p) => (p.disabled ? p.theme.color['Neutral/Neutral 30'] : p.theme.color['Neutral/Neutral 90'])};
  cursor: ${(p) => (p.disabled ? 'not-allowed' : 'pointer')};
  &[data-dimension='xl'] {
    padding: 12px 16px;
  }
  &[data-dimension='m'] {
    padding: 8px 16px;
  }
  &[data-dimension='s'] {
    padding: 6px 12px;
  }

  &:hover {
    background: ${(p) => (p.disabled ? '' : p.theme.color['Opacity/Hover'])};
  }

  ${(p) => ((p.selected && !p.active && !p.disabled) || (p.active && !p.disabled) ? activeSlot : '')}
`;

export const Slot = ({ value, ...props }: SlotProps) => {
  return <SlotStyle {...props}>{value}</SlotStyle>;
};
