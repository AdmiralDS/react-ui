import { forwardRef } from 'react';
import type { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

import { typography } from '#src/components/Typography';
import { BadgeComponent } from '#src/components/Badge';
import type { Adaptive } from './ContentSwitcherComponent';

export interface ContentSwitcherItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Активная кнопка */
  active?: boolean;
  /** Позволяет добавлять  миксин созданный с помощью styled css  */
  cssMixin?: ReturnType<typeof css>;
  adaptive?: Adaptive;
}

const colorMixin = css<{ $active?: boolean; disabled?: boolean }>`
  color: ${({ $active, disabled, theme }) => {
    if ($active) {
      return `var(--admiral-color-Neutral_Neutral90, ${theme.color['Neutral/Neutral 90']})`;
    }
    if (disabled) {
      return `var(--admiral-color-Neutral_Neutral30, ${theme.color['Neutral/Neutral 30']})`;
    }
    return `var(--admiral-color-Neutral_Neutral50, ${theme.color['Neutral/Neutral 50']})`;
  }};
  [data-appearance~='primary'] && {
    color: ${({ $active, disabled, theme }) => {
      if ($active) {
        return `var(--admiral-color-Special_StaticWhite, ${theme.color['Special/Static White']})`;
      }
      if (disabled) {
        return `var(--admiral-color-Neutral_Neutral30, ${theme.color['Neutral/Neutral 30']})`;
      }
      return `var(--admiral-color-Primary_Primary60Main, ${theme.color['Primary/Primary 60 Main']})`;
    }};
  }
`;

const adaptiveMixin = css`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const BORDER_RADIUS = 22;

export const ContentSwitcherItemButton = styled.button<{
  $active?: boolean;
  $adaptive?: Adaptive;
  $cssMixin?: ReturnType<typeof css>;
}>`
  border: none;
  border-radius: ${BORDER_RADIUS}px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  display: flex;
  align-items: center;
  position: relative;
  outline: 0;
  background-color: ${({ theme, disabled, $active }) =>
    $active && !disabled
      ? `var(--admiral-color-Neutral_Neutral00, ${theme.color['Neutral/Neutral 00']})`
      : 'transparent'};

  ${typography['Button/Button 1']}
  white-space: nowrap;

  ${colorMixin};
  ${({ $adaptive }) => ($adaptive === 'fill' ? adaptiveMixin : '')}

  &:hover:not(:disabled) {
    ${({ $active, disabled, theme }) =>
      !$active && !disabled ? `background: var(--admiral-color-Opacity_Hover, ${theme.color['Opacity/Hover']});` : ''};
  }
  &:active:not(:disabled) {
    ${({ $active, disabled, theme }) =>
      !$active && !disabled ? `background: var(--admiral-color-Opacity_Press, ${theme.color['Opacity/Press']});` : ''};
  }

  & *[fill^='#'] {
    fill: ${({ disabled, theme }) => {
      if (disabled) {
        return `var(--admiral-color-Neutral_Neutral30, ${theme.color['Neutral/Neutral 30']})`;
      }
      return `var(--admiral-color-Neutral_Neutral50, ${theme.color['Neutral/Neutral 50']})`;
    }};
  }

  [data-appearance~='primary'] && *[fill^='#'] {
    fill: ${({ $active, disabled, theme }) => {
      if ($active) {
        return `var(--admiral-color-Special_StaticWhite, ${theme.color['Special/Static White']})`;
      }
      if (disabled) {
        return `var(--admiral-color-Neutral_Neutral30, ${theme.color['Neutral/Neutral 30']})`;
      }
      return `var(--admiral-color-Primary_Primary60Main, ${theme.color['Primary/Primary 60 Main']})`;
    }};
  }

  & ${BadgeComponent} {
    background-color: ${(p) =>
      p.$active
        ? `var(--admiral-color-Neutral_Neutral50, ${p.theme.color['Neutral/Neutral 50']})`
        : `var(--admiral-color-Neutral_Neutral00, ${p.theme.color['Neutral/Neutral 00']})`};
    color: ${({ theme, disabled, $active }) => {
      if ($active) {
        return `var(--admiral-color-Special_StaticWhite, ${theme.color['Special/Static White']})`;
      }
      if (disabled) {
        return `var(--admiral-color-Neutral_Neutral30, ${theme.color['Neutral/Neutral 30']})`;
      }
      return `var(--admiral-color-Neutral_Neutral50, ${theme.color['Neutral/Neutral 50']})`;
    }};
  }

  [data-appearance~='primary'] && ${BadgeComponent} {
    background-color: ${({ $active, disabled, theme }) => {
      if ($active) {
        return `var(--admiral-color-Special_StaticWhite, ${theme.color['Special/Static White']})`;
      }
      if (disabled) {
        return `var(--admiral-color-Neutral_Neutral10, ${theme.color['Neutral/Neutral 10']})`;
      }
      return `var(--admiral-color-Primary_Primary60Main, ${theme.color['Primary/Primary 60 Main']})`;
    }};
    color: ${({ theme, disabled, $active }) => {
      if ($active) {
        return `var(--admiral-color-Primary_Primary60Main, ${theme.color['Primary/Primary 60 Main']})`;
      }
      if (disabled) {
        return `var(--admiral-color-Neutral_Neutral30, ${theme.color['Neutral/Neutral 30']})`;
      }
      return `var(--admiral-color-Special_StaticWhite, ${theme.color['Special/Static White']})`;
    }};
  }

  [data-appearance~='primary'] && {
    background-color: ${({ theme, disabled, $active }) =>
      $active && !disabled
        ? `var(--admiral-color-Primary_Primary60Main, ${theme.color['Primary/Primary 60 Main']})`
        : 'transparent'};
    &:hover:not(:disabled) {
      ${({ $active, disabled, theme }) =>
        !$active && !disabled
          ? `background: var(--admiral-color-Opacity_Hover, ${theme.color['Opacity/Hover']});`
          : ''};
    }
    &:active:not(:disabled) {
      ${({ $active, disabled, theme }) =>
        !$active && !disabled
          ? `background: var(--admiral-color-Opacity_Press, ${theme.color['Opacity/Press']});`
          : ''};
    }
  }

  ${(p) => p.$cssMixin && p.$cssMixin}
`;

export const ContentSwitcherItem = forwardRef<HTMLButtonElement, ContentSwitcherItemProps>(
  ({ active, cssMixin, type = 'button', adaptive, ...props }: ContentSwitcherItemProps, ref) => {
    return (
      <ContentSwitcherItemButton
        ref={ref}
        {...{ type, ...props }}
        $adaptive={adaptive}
        $active={active}
        $cssMixin={cssMixin}
      />
    );
  },
);
