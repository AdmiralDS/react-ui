import * as React from 'react';

import { Hint, Input, InputContainer, Label, RadioButtonComponent, Span } from './style';

type Dimension = 'm' | 's';

export interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Состояние кнопки, выбрана или нет */
  checked?: boolean;
  /** Отключение кнопки */
  disabled?: boolean;
  /** Размер радиокнопки */
  dimension?: Dimension;
  /** Дополнительный текст (подсказка), который выводится нижней строкой */
  extraText?: React.ReactNode;
}

export const RadioButton = React.forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ children, disabled, dimension = 'm', extraText, className, ...props }, ref) => {
    return (
      <RadioButtonComponent disabled={disabled} className={className}>
        <InputContainer dimension={dimension}>
          <Input ref={ref} type="radio" disabled={disabled} {...props} />
          <Span disabled={disabled} dimension={dimension} />
        </InputContainer>
        <Label disabled={disabled} dimension={dimension}>
          {children}
          {extraText && (
            <Hint disabled={disabled} dimension={dimension}>
              {extraText}
            </Hint>
          )}
        </Label>
      </RadioButtonComponent>
    );
  },
);

RadioButton.displayName = 'RadioButton';
