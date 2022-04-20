import * as React from 'react';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import { Spinner } from '#src/components/Spinner';
import { Appearance, Dimension, StyledButtonProps } from './types';
import { appearanceMixin } from './appearanceMixin';
import { ButtonContainer, IconContainer, skeletonMixin } from '#src/components/TextButton/commonMixin';
import { dimensionMixin } from '#src/components/TextButton/dimensionMixin';

const StyledSpinner = styled(Spinner)<{ dimension?: Dimension }>`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: ${(p) => (p.dimension === 'm' ? '20px' : '16px')};
  height: ${(p) => (p.dimension === 'm' ? '20px' : '16px')};
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
  vertical-align: center;
  appearance: none;
  border: none;
  background: transparent;

  ${ButtonContainer} {
    ${(p) => p.skeleton && skeletonMixin};
    border-radius: ${(p) => (p.skeleton ? '4px' : '')};
    span {
      visibility: ${(p) => (p.skeleton || p.$loading ? 'hidden' : 'visible')};
    }
  }

  ${appearanceMixin};

  ${dimensionMixin};
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

export const TextButton = React.forwardRef<HTMLButtonElement, TextButtonProps>(
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
        {loading && <StyledSpinner dimension={dimension} />}
        {icon && <IconContainer>{icon}</IconContainer>}
        <ButtonContainer>
          <span>{text}</span>
        </ButtonContainer>
      </StyledButton>
    );
  },
);

TextButton.displayName = 'TextButton';
