import { Children, forwardRef } from 'react';
import type { ButtonHTMLAttributes, InputHTMLAttributes, ReactNode } from 'react';
import type { css } from 'styled-components';

import { SpinnerIcon } from '#src/components/Spinner/SpinnerIcon';
import {
  Wrapper,
  Input,
  Button,
  ButtonContent,
  AdditionalPadding,
  SpinnerContainer,
  ButtonIconContainer,
} from './style';

export interface SegmentedControlItemv2Props extends InputHTMLAttributes<HTMLInputElement> {
  /** Внешний вид кнопки */
  // appearance?: 'outlined' | 'filled';

  // /** Размер кнопки */
  // dimension?: 'xl' | 'l' | 'm' | 's';

  /** Оставаясь активной для нажатия, кнопка отображается в заблокированном стиле */
  // displayAsDisabled?: boolean;

  /** Отображать кнопку квадратной*/
  displayAsSquare?: boolean;

  /** Состояние загрузки */
  loading?: boolean;

  /** Состояние скелетона */
  skeleton?: boolean;

  /** Иконка перед текстом кнопки */
  iconStart?: ReactNode;

  /** Иконка после текста кнопки */
  iconEnd?: ReactNode;

  /** Позволяет добавлять миксин для кнопок, созданный с помощью styled css  */
  buttonCssMixin?: ReturnType<typeof css>;

  checked?: boolean;
  defaultChecked?: boolean;
  type?: 'radio' | 'checkbox';
  value?: any;
  name?: any;
}

export const SegmentedControlItemv2 = forwardRef<HTMLButtonElement, SegmentedControlItemv2Props>(
  (
    {
      // appearance = 'outlined',
      // dimension = 'xl',
      // type = 'button',
      type = 'radio',
      loading = false,
      skeleton = false,
      iconStart,
      iconEnd,
      children,
      buttonCssMixin,
      // displayAsDisabled,
      displayAsSquare,
      checked,
      defaultChecked,
      value,
      name,
      ...props
    },
    ref,
  ) => {
    const hasIconStart = !!iconStart;
    const hasIconEnd = !!iconEnd;
    const additionalPadding = (!displayAsSquare && !hasIconStart ? 2 : 0) + (!displayAsSquare && !hasIconEnd ? 2 : 0);

    return (
      <Wrapper>
        <Input checked={checked} defaultChecked={defaultChecked} type={type} value={value} name={name} {...props} />
        <Button
          // $appearance={appearance}
          // $dimension={dimension}
          // type={type}
          $loading={loading}
          // $skeleton={skeleton}
          $buttonCssMixin={buttonCssMixin}
          $displayAsSquare={displayAsSquare}
          // $displayAsDisabled={displayAsDisabled}
          // {...props}
          tabIndex={-1}
        >
          {loading && (
            <SpinnerContainer>
              <SpinnerIcon />
            </SpinnerContainer>
          )}
          {!displayAsSquare && !hasIconStart && <AdditionalPadding />}
          <ButtonContent $addPadding={additionalPadding}>
            {hasIconStart ? <ButtonIconContainer>{iconStart}</ButtonIconContainer> : null}
            {Children.toArray(children).map((child, index) =>
              typeof child === 'string' ? <div key={child + index}>{child}</div> : child,
            )}
            {hasIconEnd ? <ButtonIconContainer>{iconEnd}</ButtonIconContainer> : null}
          </ButtonContent>
          {!displayAsSquare && !hasIconEnd && <AdditionalPadding />}
        </Button>
      </Wrapper>
    );
  },
);
