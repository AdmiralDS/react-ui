import { Children, forwardRef } from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import type { css } from 'styled-components';
import styled from 'styled-components';

import type { ButtonAppearance, Dimension, StyledButtonProps } from './types';
import { SpinnerIcon } from '#src/components/Spinner/SpinnerIcon';
import { appearanceMixin } from './appearanceMixin';
import { ButtonIconContainer, dimensionMixin } from './dimensionMixin';
import { mediumGroupBorderRadius } from '#src/components/themes/borderRadius';
import { skeletonAnimationMixin } from '#src/components/skeleton/animation';

export type { ButtonAppearance } from './types';
export * from './dimensionMixin';

type IconPlace = 'left' | 'right';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Внешний вид кнопки */
  appearance?: ButtonAppearance;

  /** Размер кнопки */
  dimension?: Dimension;

  /** Оставаясь активной для нажатия, кнопка отображается в заблокированном стиле */
  displayAsDisabled?: boolean;

  /** Отображать кнопку квадратной*/
  displayAsSquare?: boolean;

  /** Состояние загрузки */
  loading?: boolean;

  /** Состояние скелетона */
  skeleton?: boolean;

  /**
   * @deprecated Помечено как deprecated в версии 5.2.0, будет удалено в 9.x.x версии.
   * Взамен используйте iconStart или iconEnd
   *
   * Иконка кнопки
   */
  icon?: ReactNode;

  /** Иконка перед текстом кнопки */
  iconStart?: ReactNode;

  /** Иконка после текста кнопки */
  iconEnd?: ReactNode;

  /**
   * @deprecated Помечено как deprecated в версии 5.2.0, будет удалено в 9.x.x версии.
   * Взамен используйте iconStart или iconEnd
   *
   * Расположение иконки кнопки
   */
  iconPlace?: IconPlace;

  /** Позволяет добавлять миксин для кнопок, созданный с помощью styled css  */
  buttonCssMixin?: ReturnType<typeof css>;
}

const ButtonContent = styled.div<{ $addPadding: number }>`
  vertical-align: top;

  display: inline-flex;
  gap: 8px;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  max-width: calc(100% - ${(p) => p.$addPadding}px);

  > * {
    display: inline-block;
    flex: 0 1 auto;
    white-space: nowrap;
  }
  > ${ButtonIconContainer} {
    flex: 0 0 auto;
  }

  height: 24px;
  & > svg {
    width: 24px;
    height: 24px;
  }

  .button-group[data-dimension='m'] &&,
  .button-group[data-dimension='l'] &&,
  .button-group[data-dimension='xl'] && {
    height: 24px;
    & > svg {
      width: 24px;
      height: 24px;
    }
  }
  .button-group[data-dimension='s'] &&,
  [data-dimension='s'] & {
    height: 20px;
    & > svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const SpinnerContainer = styled(ButtonIconContainer)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  container-type: inline-size;
  .button-group[data-appearance='primary'] & {
    & path {
      fill: ${(p) => `var(--admiral-color-Special_StaticWhite, ${p.theme.color['Special/Static White']})`};
    }
  }
  .button-group[data-appearance='secondary'] &,
  .button-group[data-appearance='tertiary'] & {
    & path {
      fill: ${(p) => `var(--admiral-color-Primary_Primary60Main, ${p.theme.color['Primary/Primary 60 Main']})`};
    }
  }
`;

const AdditionalPadding = styled.div`
  display: inline-block;
  width: 2px;
`;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      appearance = 'primary',
      dimension = 'xl',
      type = 'button',
      loading = false,
      skeleton = false,
      iconStart,
      iconEnd,
      icon,
      iconPlace = 'left',
      children,
      buttonCssMixin,
      displayAsDisabled,
      displayAsSquare,
      ...props
    },
    ref,
  ) => {
    const spinnerInverse = appearance !== 'secondary' && appearance !== 'tertiary' && appearance !== 'ghost';
    const hasIconStart = !!iconStart || (!!icon && iconPlace === 'left');
    const hasIconEnd = !!iconEnd || (!!icon && iconPlace === 'right');
    const additionalPadding = (!displayAsSquare && !hasIconStart ? 2 : 0) + (!displayAsSquare && !hasIconEnd ? 2 : 0);

    return (
      <StyledButton
        ref={ref}
        $appearance={appearance}
        $dimension={dimension}
        type={type}
        $loading={loading}
        $skeleton={skeleton}
        $buttonCssMixin={buttonCssMixin}
        $displayAsSquare={displayAsSquare}
        $displayAsDisabled={displayAsDisabled}
        {...props}
      >
        {loading && (
          <SpinnerContainer>
            <SpinnerIcon $inverse={spinnerInverse} />
          </SpinnerContainer>
        )}
        {!displayAsSquare && !hasIconStart && <AdditionalPadding />}
        <ButtonContent $addPadding={additionalPadding}>
          {hasIconStart ? <ButtonIconContainer>{iconStart || icon}</ButtonIconContainer> : null}
          {Children.toArray(children).map((child, index) =>
            typeof child === 'string' ? <div key={child + index}>{child}</div> : child,
          )}
          {hasIconEnd ? <ButtonIconContainer>{iconEnd || icon}</ButtonIconContainer> : null}
        </ButtonContent>
        {!displayAsSquare && !hasIconEnd && <AdditionalPadding />}
      </StyledButton>
    );
  },
);

const StyledButton = styled.button.attrs<
  StyledButtonProps & {
    'data-dimension'?: Dimension;
    'data-appearance'?: string;
  }
>((props) => ({
  'data-dimension': props.$dimension,
  'data-appearance': [props.$appearance, props.$displayAsDisabled ? 'disabled' : undefined]
    .filter((val) => val !== undefined)
    .join(' '),
}))<StyledButtonProps>`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  white-space: nowrap;
  border: none;
  border-radius: ${(p) =>
    p.$skeleton ? 0 : `var(--admiral-border-radius-Medium, ${mediumGroupBorderRadius(p.theme.shape)})`};
  appearance: none;
  vertical-align: middle;
  cursor: ${(p) => (p.disabled ? 'not-allowed' : 'pointer')};
  ${(p) => (p.$loading || p.$skeleton) && 'pointer-events: none'};

  ${appearanceMixin};
  ${dimensionMixin};
  ${(p) => p.$buttonCssMixin};
  ${({ $skeleton }) => $skeleton && skeletonAnimationMixin};

  ${ButtonContent} {
    ${(p) => (p.$loading || p.$skeleton ? 'visibility: hidden;' : '')}
  }
`;

Button.displayName = 'Button';
