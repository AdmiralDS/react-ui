import * as React from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import { Spinner } from '#src/components/Spinner';
import { appearanceMixin } from './appearanceMixin';
import { ButtonContainer, IconContainer } from '#src/components/TextButton/commonMixin';
import { dimensionMixin } from '#src/components/TextButton/dimensionMixin';
import { skeletonAnimationMixin } from '#src/components/skeleton/animation';
import { TextContainer } from './textContainer';
import type { TextContainerProps } from './textContainer';
import type { Appearance, Dimension, StyledButtonProps } from './types';

const StyledSpinner = styled(Spinner)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const StyledButton = styled.button<StyledButtonProps>`
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
`;

export interface TextButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Внешний вид кнопки */
  appearance?: Appearance;
  /** Размер кнопки */
  dimension?: Dimension;
  /**
   * @deprecated Помечено как deprecated в версии 4.16.0, будет удалено в версии 9.х.х.
   * Взамен используйте параметр iconStart или iconEnd
   *
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
   * @deprecated Помечено как deprecated в версии 4.16.0, будет удалено в версии 9.х.х.
   * Взамен используйте параметр iconStart или iconEnd
   *
   * Позиционирование иконки. По умолчанию - слева
   */
  displayRight?: boolean;
  /** Состояние загрузки */
  loading?: boolean;
  /** Состояние skeleton */
  skeleton?: boolean;
  /** Конфиг функция пропсов для контейнера, в котором находится текст. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  textContainerPropsConfig?: TextContainerProps['containerPropsConfig'];
  /** CSS миксин для переопределения стилей текста */
  textCssMixin?: TextContainerProps['textCssMixin'];
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
      textContainerPropsConfig,
      textCssMixin,
      ...props
    },
    ref,
  ) => {
    const disabled = props.disabled || loading || skeleton;

    return (
      <StyledButton
        {...props}
        data-dimension={dimension}
        data-appearance={appearance}
        ref={ref}
        $appearance={appearance}
        $dimension={dimension}
        type={type}
        disabled={disabled}
        $loading={loading}
        $skeleton={skeleton}
      >
        {loading && <StyledSpinner dimension={dimension === 's' ? 'ms' : 'm'} />}
        {iconStart ? (
          <IconContainer>{iconStart}</IconContainer>
        ) : icon && !displayRight ? (
          <IconContainer>{icon}</IconContainer>
        ) : null}
        <TextContainer text={text} containerPropsConfig={textContainerPropsConfig} textCssMixin={textCssMixin} />
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
