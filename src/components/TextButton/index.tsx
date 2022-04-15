import { ButtonHTMLAttributes, ReactNode } from 'react';
import * as React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { typography } from '#src/components/Typography';
import { Spinner } from '#src/components/Spinner';

type Dimension = 'm' | 's';
type Appearance = 'primary' | 'secondary';

const IconContainer = styled.div``;

const ButtonContainer = styled.div``;

const StyledSpinner = styled(Spinner)<{ dimension?: Dimension }>`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: ${(p) => (p.dimension === 'm' ? '20px' : '16px')};
  height: ${(p) => (p.dimension === 'm' ? '20px' : '16px')};
`;

const loadingKeyframes = keyframes`
  to {
    background-position: 315px 0, 0 0, 0 190px, 50px 195px;
  }
`;

export const skeletonMixin = css`
  cursor: progress;
  background-image: linear-gradient(0.25turn, transparent, #fff, transparent), linear-gradient(#eee, #eee),
    radial-gradient(38px circle at 19px 19px, #eee 50%, transparent 51%), linear-gradient(#eee, #eee);
  background-repeat: no-repeat;
  background-size: 315px 250px, 315px 180px, 100px 100px, 225px 30px;
  background-position: -315px 0, 0 0, 0 190px, 50px 195px;
  animation: ${loadingKeyframes} 1.5s infinite;
`;

const StyledButton = styled.button<{
  dimension?: Dimension;
  appearance?: Appearance;
  displayRight?: boolean;
  $loading?: boolean;
  skeleton?: boolean;
}>`
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  flex-direction: ${(p) => (p.displayRight ? 'row-reverse' : 'row')};
  align-items: center;
  vertical-align: center;
  appearance: none;
  border: none;
  background: transparent;

  > ${IconContainer} {
    ${(p) => p.skeleton && skeletonMixin};
    border-radius: ${(p) => (p.skeleton ? '50%' : '')};
    svg {
      visibility: ${(p) => (p.skeleton || p.$loading ? 'hidden' : 'visible')};
      path {
        fill: ${(p) => (p.appearance === 'secondary' ? p.theme.color.text.primary : p.theme.color.basic.primary)};
      }
    }
  }
  > ${ButtonContainer} {
    ${(p) => p.skeleton && skeletonMixin};
    border-radius: ${(p) => (p.skeleton ? '4px' : '')};
    span {
      visibility: ${(p) => (p.skeleton || p.$loading ? 'hidden' : 'visible')};
    }
  }
  ${(p) => (p.dimension === 'm' ? typography['Button/Button 1'] : typography['Button/Button 2'])}

  color: ${(p) => (p.appearance === 'secondary' ? p.theme.color.text.primary : p.theme.color.basic.primary)};

  &:focus,
  &:hover {
    cursor: pointer;
    color: ${(p) => p.theme.color.basic.hover};
    > ${IconContainer} {
      svg {
        path {
          fill: ${(p) => p.theme.color.basic.hover};
        }
      }
    }
  }

  &:active {
    color: ${(p) => p.theme.color.basic.press};
    > ${IconContainer} {
      svg {
        path {
          fill: ${(p) => p.theme.color.basic.press};
        }
      }
    }
  }

  &:disabled {
    cursor: not-allowed;
    color: ${(p) => p.theme.color.text.tertiary};
  }
  > ${IconContainer} {
    width: ${(p) => (p.dimension === 'm' ? (p.skeleton ? '24px' : '20px') : p.skeleton ? '20px' : '16px')};
    height: ${(p) => (p.dimension === 'm' ? (p.skeleton ? '24px' : '20px') : p.skeleton ? '20px' : '16px')};
    margin: ${(p) => (p.displayRight ? '0 0 0 10px' : '0 10px 0 0')};
  }
`;

export interface TextButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Размер кнопки */
  dimension?: Dimension;
  /** Внешний вид кнопки */
  appearance?: Appearance;
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
      dimension = 'm',
      appearance = 'primary',
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
        dimension={dimension}
        appearance={appearance}
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
