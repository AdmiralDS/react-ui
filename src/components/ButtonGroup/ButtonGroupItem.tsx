import styled, { css } from 'styled-components';
import { typography } from '#src/components/Typography';
import { BadgeComponent } from '#src/components/Badge';

export type ButtonGroupItemProps = {
  /** Активная кнопка */
  active?: boolean;
};

const colorMixin = css<{ active?: boolean; disabled?: boolean }>`
  color: ${({ active, disabled, theme }) => {
    if (active) return theme.color.text.primary;
    if (disabled) return theme.color.text.tertiary;
    return theme.color.text.secondary;
  }};
  [data-appearance~='primary'] && {
    color: ${({ active, disabled, theme }) => {
      if (active) return theme.color.text.staticWhite;
      if (disabled) return theme.color.text.tertiary;
      return theme.color.basic.primary;
    }};
  }
`;

const BORDER_RADIUS = 22;

export const ButtonGroupItem = styled.button<ButtonGroupItemProps>`
  border: none;
  border-radius: ${BORDER_RADIUS}px;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  display: flex;
  align-items: center;
  position: relative;
  outline: 0;
  background-color: ${({ theme, disabled, active }) =>
    active && !disabled ? theme.color.background.primary : 'transparent'};

  ${typography['Button/Button 1']};
  white-space: nowrap;

  ${colorMixin};

  &:hover:not(:disabled) {
    background: ${({ active, disabled, theme }) => (!active && !disabled ? theme.color.background.tertiaryHover : '')};
    color: ${(p) => p.theme.color.text.secondary};
  }

  & *[fill^='#'] {
    fill: ${({ disabled, theme }) => {
      if (disabled) return theme.color.text.tertiary;
      return theme.color.text.secondary;
    }};
  }

  [data-appearance~='primary'] && *[fill^='#'] {
    fill: ${({ active, disabled, theme }) => {
      if (active) return theme.color.text.staticWhite;
      if (disabled) return theme.color.text.tertiary;
      return theme.color.basic.primary;
    }};
  }

  & ${BadgeComponent} {
    background-color: ${(p) => (p.active ? p.theme.color.text.secondary : p.theme.color.background.primary)};
    color: ${(p) => (p.active ? p.theme.color.text.staticWhite : p.theme.color.text.secondary)};
  }

  [data-appearance~='primary'] && ${BadgeComponent} {
    background-color: ${({ active, disabled, theme }) => {
      if (active) return theme.color.text.staticWhite;
      if (disabled) return theme.color.text.tertiary;
      return theme.color.basic.primary;
    }};
    color: ${({ theme, disabled, active }) =>
      active && !disabled ? theme.color.basic.primary : theme.color.text.staticWhite};
  }

  [data-appearance~='primary'] && {
    background-color: ${({ theme, disabled, active }) =>
      active && !disabled ? theme.color.basic.primary : 'transparent'};
    &:hover:not(:disabled) {
      background: ${({ active, disabled, theme }) => (!active && !disabled ? theme.color.background.secondary : '')};
      color: ${(p) => (!p.active ? p.theme.color.basic.hover : p.theme.color.text.staticWhite)};
    }
  }
`;

ButtonGroupItem.defaultProps = {
  type: 'button',
};
