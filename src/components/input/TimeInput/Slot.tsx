import * as React from 'react';
import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { RenderOptionProps } from '#src/components/MenuItem';

export interface SlotProps extends HTMLAttributes<HTMLDivElement>, RenderOptionProps {
  selected?: boolean;
  value: string;
  disabled: boolean;
  active?: boolean;
}

const activeSlot = css`
  background-color: ${(p) => p.theme.color['Opacity/Focus']};
`;

const SlotStyle = styled.div<{ disabled?: boolean; selected?: boolean; active?: boolean }>`
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

export const Slot = ({ value, onHover, onClickItem, ...props }: SlotProps) => {
  const handleMouseMove = () => {
    onHover?.();
  };

  const handleClick = () => {
    onClickItem?.();
  };
  return (
    <SlotStyle {...props} onMouseMove={handleMouseMove} onClick={handleClick}>
      {value}
    </SlotStyle>
  );
};
