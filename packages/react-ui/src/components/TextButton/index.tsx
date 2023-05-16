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
  'data-dimension': props.dimension,
  'data-appearance': props.appearance,
}))<StyledButtonProps>`
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  flex-direction: ${(p) => (p.displayRight ? 'row-reverse' : 'row')};
  align-items: center;
  vertical-align: middle;
  appearance: none;
  border: none;
  background: transparent;
  padding: 0;
  gap: 8px;
  white-space: nowrap;
  ${(p) => p.skeleton && skeletonAnimationMixin};

  ${ButtonContainer} {
    visibility: ${(p) => (p.skeleton || p.$loading ? 'hidden' : 'visible')};
  }

  ${IconContainer} {
    visibility: ${(p) => (p.skeleton || p.$loading ? 'hidden' : 'visible')};
  }

  ${appearanceMixin};

  ${dimensionMixin};

  pointer-events: ${(p) => (p.$loading || p.skeleton || p.disabled ? 'none' : 'all')};
`;

export interface TextButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Внешний вид кнопки */
  appearance?: Appearance;
  /** Размер кнопки */
  dimension?: Dimension;
  /** Иконка кнопки */
  icon?: ReactNode;
  /** Текст кнопки */
  text?: string;
  /** Позиционирование иконки. По умолчанию - слева */
  displayRight?: boolean;
  /** Состояние загрузки */
  loading?: boolean;
  /** Состояние skeleton */
  skeleton?: boolean;
}

export interface TextButtonInternalProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Для внутреннего использования! Иконка кнопки выпадающего меню */
  statusIcon?: ReactNode;
}

export const TextButton = React.forwardRef<HTMLButtonElement, TextButtonProps & TextButtonInternalProps>(
  (
    {
      appearance = 'primary',
      dimension = 'm',
      icon,
      type = 'button',
      text,
      displayRight = false,
      loading = false,
      skeleton = false,
      statusIcon,
      ...props
    },
    ref,
  ) => {
    return (
      <StyledButton
        {...props}
        ref={ref}
        appearance={appearance}
        dimension={dimension}
        displayRight={displayRight}
        type={type}
        $loading={loading}
        skeleton={skeleton}
      >
        {loading && <StyledSpinner dimension={dimension === 's' ? 'ms' : 'm'} />}
        {icon && <IconContainer>{icon}</IconContainer>}
        <ButtonContainer>
          <span>{text}</span>
        </ButtonContainer>
        {statusIcon && !displayRight && <IconContainer>{statusIcon}</IconContainer>}
      </StyledButton>
    );
  },
);

TextButton.displayName = 'TextButton';
