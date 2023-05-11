import * as React from 'react';

import { Hint, Input, InputContainer, RadioButtonComponent, Span } from '#src/components/RadioButton/style';

type Dimension = 'm' | 's';

export interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Состояние кнопки, выбрана или нет */
  checked?: boolean;
  /** Отключение кнопки */
  disabled?: boolean;
  /** Только для чтения */
  readOnly?: boolean;
  /** Размер радиокнопки */
  dimension?: Dimension;
  /** Дополнительный текст (подсказка), который выводится нижней строкой */
  extraText?: React.ReactNode;
  /** Состояние ошибки */
  error?: boolean;
}

export const RadioButton = React.forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ children, disabled, readOnly = false, error = false, dimension = 'm', extraText, className, ...props }, ref) => {
    return (
      <RadioButtonComponent disabled={disabled} readOnly={readOnly} className={className} dimension={dimension}>
        <InputContainer dimension={dimension}>
          <Input ref={ref} type="radio" disabled={disabled || readOnly} dimension={dimension} {...props} />
          <Span disabled={disabled || readOnly} dimension={dimension} error={error} />
        </InputContainer>
        {children}
        {extraText && (
          <Hint disabled={disabled} dimension={dimension}>
            {extraText}
          </Hint>
        )}
      </RadioButtonComponent>
    );
  },
);

RadioButton.displayName = 'RadioButton';
