import styled, { css } from 'styled-components';
import { typography } from '#src/components-ver2/Typography';
import { BadgeComponent } from '#src/components-ver2/Badge';

export type ContentSwitcherItemProps = {
  /** Активная кнопка */
  active?: boolean;
};

const colorMixin = css<{ active?: boolean; disabled?: boolean }>`
  color: ${({ active, disabled, theme }) => {
    if (active) return theme.color['Neutral/Neutral 90'];
    if (disabled) return theme.color['Neutral/Neutral 30'];
    return theme.color['Neutral/Neutral 50'];
  }};
  [data-appearance~='primary'] && {
    color: ${({ active, disabled, theme }) => {
      if (active) return theme.color['Special/Static White'];
      if (disabled) return theme.color['Neutral/Neutral 30'];
      return theme.color['Primary/Primary 60 Main'];
    }};
  }
`;

const BORDER_RADIUS = 22;

export const ContentSwitcherItem = styled.button<ContentSwitcherItemProps>`
  border: none;
  border-radius: ${BORDER_RADIUS}px;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  display: flex;
  align-items: center;
  position: relative;
  outline: 0;
  background-color: ${({ theme, disabled, active }) =>
    active && !disabled ? theme.color['Neutral/Neutral 00'] : 'transparent'};

  ${typography['Button/Button 1']};
  white-space: nowrap;

  ${colorMixin};

  &:hover:not(:disabled) {
    background: ${({ active, disabled, theme }) => (!active && !disabled ? theme.color['Opacity/Hover'] : '')};
  }

  & *[fill^='#'] {
    fill: ${({ disabled, theme }) => {
      if (disabled) return theme.color['Neutral/Neutral 30'];
      return theme.color['Neutral/Neutral 50'];
    }};
  }

  [data-appearance~='primary'] && *[fill^='#'] {
    fill: ${({ active, disabled, theme }) => {
      if (active) return theme.color['Special/Static White'];
      if (disabled) return theme.color['Neutral/Neutral 30'];
      return theme.color['Primary/Primary 60 Main'];
    }};
  }

  & ${BadgeComponent} {
    background-color: ${(p) => (p.active ? p.theme.color['Neutral/Neutral 50'] : p.theme.color['Neutral/Neutral 00'])};
    color: ${({ theme, disabled, active }) => {
      if (active) return theme.color['Special/Static White'];
      if (disabled) return theme.color['Neutral/Neutral 30'];
      return theme.color['Neutral/Neutral 50'];
    }};
  }

  [data-appearance~='primary'] && ${BadgeComponent} {
    background-color: ${({ active, disabled, theme }) => {
      if (active) return theme.color['Special/Static White'];
      if (disabled) return theme.color['Neutral/Neutral 10'];
      return theme.color['Primary/Primary 60 Main'];
    }};
    color: ${({ theme, disabled, active }) => {
      if (active) return theme.color['Primary/Primary 60 Main'];
      if (disabled) return theme.color['Neutral/Neutral 30'];
      return theme.color['Special/Static White'];
    }};
  }

  [data-appearance~='primary'] && {
    background-color: ${({ theme, disabled, active }) =>
      active && !disabled ? theme.color['Primary/Primary 60 Main'] : 'transparent'};
    &:hover:not(:disabled) {
      background: ${({ active, disabled, theme }) => (!active && !disabled ? theme.color['Opacity/Hover'] : '')};
    }
  }
`;

ContentSwitcherItem.defaultProps = {
  type: 'button',
};
