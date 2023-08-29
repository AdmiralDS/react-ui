import * as React from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import { Spinner } from '#src/components/Spinner';
import type { Appearance, Dimension, StyledButtonProps } from './types';
import { appearanceMixin } from './appearanceMixin';
import { ButtonContainer, IconContainer } from '#src/components/TextButton/commonMixin';
import { dimensionMixin } from '#src/components/TextButton/dimensionMixin';
import { skeletonAnimationMixin } from '#src/components/skeleton/animation';

const StyledSpinner = styled(Spinner)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const StyledButton = styled.button.attrs<StyledButtonProps>((props) => ({
  'data-dimension': props.$dimension,
  'data-appearance': props.$appearance,
}))<StyledButtonProps>`
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  vertical-align: middle;
  appearance: none;
  border: none;
  background: transparent;
  padding: 0;
  white-space: nowrap;
  ${(p) => p.$skeleton && skeletonAnimationMixin};

  ${ButtonContainer} {
    visibility: ${(p) => (p.$skeleton || p.$loading ? 'hidden' : 'visible')};
  }

  ${IconContainer} {
    visibility: ${(p) => (p.$skeleton || p.$loading ? 'hidden' : 'visible')};
  }

  ${appearanceMixin};

  ${dimensionMixin};

  pointer-events: ${(p) => (p.$loading || p.$skeleton || p.disabled ? 'none' : 'all')};
`;

export interface TextButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Внешний вид кнопки */
  appearance?: Appearance;
  /** Размер кнопки */
  dimension?: Dimension;
  /**
   * @deprecated Используйте iconStart или iconEnd
   * Иконка кнопки
   */
  icon?: ReactNode;
  /** Иконка перед текстом кнопки */
  iconStart?: ReactNode;
  /** Иконка после текста кнопки */
  iconEnd?: ReactNode;
  /** Текст кнопки */
  text?: string;
  /**
   * @deprecated Используйте iconStart или iconEnd
   * Позиционирование иконки. По умолчанию - слева
   */
  displayRight?: boolean;
  /** Состояние загрузки */
  loading?: boolean;
  /** Состояние skeleton */
  skeleton?: boolean;
}

export const TextButton = React.forwardRef<HTMLButtonElement, TextButtonProps>(
  (
    {
      appearance = 'primary',
      dimension = 'm',
      icon,
      iconStart,
      iconEnd,
      type = 'button',
      text,
      displayRight = false,
      loading = false,
      skeleton = false,
      ...props
    },
    ref,
  ) => {
    return (
      <StyledButton
        {...props}
        ref={ref}
        $appearance={appearance}
        $dimension={dimension}
        type={type}
        $loading={loading}
        $skeleton={skeleton}
      >
        {loading && <StyledSpinner dimension={dimension === 's' ? 'ms' : 'm'} />}
        {iconStart ? (
          <IconContainer>{iconStart}</IconContainer>
        ) : icon && !displayRight ? (
          <IconContainer>{icon}</IconContainer>
        ) : null}
        <ButtonContainer>
          <span>{text}</span>
        </ButtonContainer>
        {iconEnd ? (
          <IconContainer>{iconEnd}</IconContainer>
        ) : icon && displayRight ? (
          <IconContainer>{icon}</IconContainer>
        ) : null}
      </StyledButton>
    );
  },
);

TextButton.displayName = 'TextButton';
