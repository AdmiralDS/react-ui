import { Children, forwardRef } from 'react';
import type { LabelHTMLAttributes, ReactNode, ChangeEventHandler } from 'react';
import type { css } from 'styled-components';
import { SpinnerIcon } from '#src/components/Spinner/SpinnerIcon';

import { Label, Input, Button, ButtonContent, AdditionalPadding, SpinnerContainer, ButtonIconContainer } from './style';

export interface SegmentedControlItemProps extends Omit<LabelHTMLAttributes<HTMLLabelElement>, 'onChange'> {
  /** Тип кнопки */
  type?: 'radio' | 'checkbox';

  /** Состояние кнопки, выбрана или нет */
  checked?: boolean;

  /** Состояние кнопки, выбрана или нет по умолчанию */
  defaultChecked?: boolean;

  /** Значение кнопки */
  value?: string | readonly string[] | number;

  /** Атрибут name кнопки */
  name?: string;

  /** Колбек на изменение состояния кнопки (выбрана или нет) */
  onChange?: ChangeEventHandler<HTMLInputElement>;

  /** Кнопка в состоянии disabled */
  disabled?: boolean;

  /** Отображать кнопку квадратной */
  displayAsSquare?: boolean;

  /** Состояние загрузки */
  loading?: boolean;

  /** Иконка перед текстом кнопки */
  iconStart?: ReactNode;

  /** Иконка после текста кнопки */
  iconEnd?: ReactNode;

  /** Позволяет добавлять миксин для кнопок, созданный с помощью styled css  */
  buttonCssMixin?: ReturnType<typeof css>;
}

export const SegmentedControlItem = forwardRef<HTMLInputElement, SegmentedControlItemProps>(
  (
    {
      type = 'radio',
      checked,
      defaultChecked,
      value,
      name,
      onChange,
      disabled,
      displayAsSquare = false,
      loading = false,
      iconStart,
      iconEnd,
      buttonCssMixin,
      children,
      ...props
    },
    ref,
  ) => {
    const hasIconStart = !!iconStart;
    const hasIconEnd = !!iconEnd;
    const additionalPadding = (!displayAsSquare && !hasIconStart ? 2 : 0) + (!displayAsSquare && !hasIconEnd ? 2 : 0);

    return (
      <Label {...props}>
        <Input
          ref={ref}
          type={type}
          checked={checked}
          defaultChecked={defaultChecked}
          value={value}
          name={name}
          onChange={onChange}
          disabled={disabled || loading}
        />
        <Button $loading={loading} $displayAsSquare={displayAsSquare} $buttonCssMixin={buttonCssMixin}>
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
      </Label>
    );
  },
);

SegmentedControlItem.displayName = 'SegmentedControlItem';
