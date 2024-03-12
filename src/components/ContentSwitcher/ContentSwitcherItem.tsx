import { forwardRef } from 'react';
import type { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

import { typography } from '#src/components/Typography';
import { BadgeComponent } from '#src/components/Badge';

export interface ContentSwitcherItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Активная кнопка */
  active?: boolean;
  /** Позволяет добавлять  миксин созданный с помощью styled css  */
  cssMixin?: ReturnType<typeof css>;
}

const colorMixin = css<{ $active?: boolean; disabled?: boolean }>`
  color: ${({ $active, disabled, theme }) => {
    if ($active) return `var(--admiral-color-Neutral_Neutral90, ${theme.color['Neutral/Neutral 90']})`;
    if (disabled) return `var(--admiral-color-Neutral_Neutral30, ${theme.color['Neutral/Neutral 30']})`;
    return `var(--admiral-color-Neutral_Neutral50, ${theme.color['Neutral/Neutral 50']})`;
  }};
  [data-appearance~='primary'] && {
    color: ${({ $active, disabled, theme }) => {
      if ($active) return `var(--admiral-color-Special_StaticWhite, ${theme.color['Special/Static White']})`;
      if (disabled) return `var(--admiral-color-Neutral_Neutral30, ${theme.color['Neutral/Neutral 30']})`;
      return `var(--admiral-color-Primary_Primary60Main, ${theme.color['Primary/Primary 60 Main']})`;
    }};
  }
`;

const BORDER_RADIUS = 22;

export const ContentSwitcherItemButton = styled.button<{
  $active?: boolean;
  $cssMixin?: ReturnType<typeof css>;
}>`
  border: none;
  border-radius: ${BORDER_RADIUS}px;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  display: flex;
  align-items: center;
  position: relative;
  outline: 0;
  background-color: ${({ theme, disabled, $active }) =>
    $active && !disabled ? theme.color['Neutral/Neutral 00'] : 'transparent'};

  ${typography['Button/Button 1']};
  white-space: nowrap;

  ${colorMixin};

  &:hover:not(:disabled) {
    ${({ $active, disabled, theme }) => (!$active && !disabled ? `background: ${theme.color['Opacity/Hover']}` : '')};
  }
  &:active:not(:disabled) {
    ${({ $active, disabled, theme }) => (!$active && !disabled ? `background: ${theme.color['Opacity/Press']}` : '')};
  }

  & *[fill^='#'] {
    fill: ${({ disabled, theme }) => {
      if (disabled) return `var(--admiral-color-Neutral_Neutral30, ${theme.color['Neutral/Neutral 30']})`;
      return `var(--admiral-color-Neutral_Neutral50, ${theme.color['Neutral/Neutral 50']})`;
    }};
  }

  [data-appearance~='primary'] && *[fill^='#'] {
    fill: ${({ $active, disabled, theme }) => {
      if ($active) return `var(--admiral-color-Special_StaticWhite, ${theme.color['Special/Static White']})`;
      if (disabled) return `var(--admiral-color-Neutral_Neutral30, ${theme.color['Neutral/Neutral 30']})`;
      return `var(--admiral-color-Primary_Primary60Main, ${theme.color['Primary/Primary 60 Main']})`;
    }};
  }

  & ${BadgeComponent} {
    background-color: ${(p) => (p.$active ? p.theme.color['Neutral/Neutral 50'] : p.theme.color['Neutral/Neutral 00'])};
    color: ${({ theme, disabled, $active }) => {
      if ($active) return `var(--admiral-color-Special_StaticWhite, ${theme.color['Special/Static White']})`;
      if (disabled) return `var(--admiral-color-Neutral_Neutral30, ${theme.color['Neutral/Neutral 30']})`;
      return `var(--admiral-color-Neutral_Neutral50, ${theme.color['Neutral/Neutral 50']})`;
    }};
  }

  [data-appearance~='primary'] && ${BadgeComponent} {
    background-color: ${({ $active, disabled, theme }) => {
      if ($active) return `var(--admiral-color-Special_StaticWhite, ${theme.color['Special/Static White']})`;
      if (disabled) return `var(--admiral-color-Neutral_Neutral10, ${theme.color['Neutral/Neutral 10']})`;
      return `var(--admiral-color-Primary_Primary60Main, ${theme.color['Primary/Primary 60 Main']})`;
    }};
    color: ${({ theme, disabled, $active }) => {
      if ($active) return `var(--admiral-color-Primary_Primary60Main, ${theme.color['Primary/Primary 60 Main']})`;
      if (disabled) return `var(--admiral-color-Neutral_Neutral30, ${theme.color['Neutral/Neutral 30']})`;
      return `var(--admiral-color-Special_StaticWhite, ${theme.color['Special/Static White']})`;
    }};
  }

  [data-appearance~='primary'] && {
    background-color: ${({ theme, disabled, $active }) =>
      $active && !disabled ? theme.color['Primary/Primary 60 Main'] : 'transparent'};
    &:hover:not(:disabled) {
      ${({ $active, disabled, theme }) => (!$active && !disabled ? `background: ${theme.color['Opacity/Hover']}` : '')};
    }
    &:active:not(:disabled) {
      ${({ $active, disabled, theme }) => (!$active && !disabled ? `background: ${theme.color['Opacity/Press']}` : '')};
    }
  }

  ${(p) => p.$cssMixin && p.$cssMixin}
`;

export const ContentSwitcherItem = forwardRef<HTMLButtonElement, ContentSwitcherItemProps>(
  ({ active, cssMixin, ...props }: ContentSwitcherItemProps, ref) => {
    return <ContentSwitcherItemButton ref={ref} {...props} $active={active} $cssMixin={cssMixin} />;
  },
);

ContentSwitcherItem.defaultProps = {
  type: 'button',
};
