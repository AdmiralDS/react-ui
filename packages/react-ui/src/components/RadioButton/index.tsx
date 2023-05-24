import * as React from 'react';

import { Hint, Input, InputContainer, RadioButtonComponent, Span } from '#src/components/RadioButton/style';
import { keyboardKey } from '#src/components/common/keyboardKey';

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
  ({ children, disabled, readOnly, error = false, dimension = 'm', extraText, className, ...props }, ref) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (readOnly) {
        const code = keyboardKey.getCode(e);
        if (code === keyboardKey[' ']) {
          e.preventDefault();
        }
      }

      props.onKeyDown?.(e);
    };

    return (
      <RadioButtonComponent disabled={disabled} readOnly={readOnly} className={className} dimension={dimension}>
        <InputContainer dimension={dimension}>
          <Input
            ref={ref}
            type="radio"
            disabled={disabled}
            readOnly={readOnly}
            dimension={dimension}
            {...props}
            onKeyDown={handleKeyDown}
          />
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
