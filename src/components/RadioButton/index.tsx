import type { InputHTMLAttributes, ReactNode, KeyboardEvent } from 'react';
import { forwardRef } from 'react';

import {
  Hint,
  Input,
  InputContainer,
  RadioButtonComponent,
  RadioButtonHover,
  RadioButtonLabel,
  Span,
} from '#src/components/RadioButton/style';
import { keyboardKey } from '../common/keyboardKey';

type Dimension = 'm' | 's';

export interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Состояние кнопки, выбрана или нет */
  checked?: boolean;
  /** Отключение кнопки */
  disabled?: boolean;
  /** Только для чтения */
  readOnly?: boolean;
  /** Размер радиокнопки */
  dimension?: Dimension;
  /** Дополнительный текст (подсказка), который выводится нижней строкой */
  extraText?: ReactNode;
  /** Состояние ошибки */
  error?: boolean;
}

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ children, disabled = false, readOnly, error = false, dimension = 'm', extraText, className, ...props }, ref) => {
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (readOnly) {
        const code = keyboardKey.getCode(e);
        if (code === keyboardKey[' ']) {
          e.preventDefault();
        }
      }

      props.onKeyDown?.(e);
    };

    return (
      <RadioButtonComponent disabled={disabled} readOnly={readOnly} className={className}>
        <Input
          ref={ref}
          type="radio"
          disabled={disabled}
          readOnly={readOnly}
          $dimension={dimension}
          {...props}
          onKeyDown={handleKeyDown}
        />
        <InputContainer $dimension={dimension}>
          <RadioButtonHover $dimension={dimension} />
          <Span disabled={disabled || readOnly} $dimension={dimension} $error={error} aria-hidden />
        </InputContainer>
        {children && (
          <RadioButtonLabel $dimension={dimension} disabled={disabled}>
            {children}
            {extraText && <Hint disabled={disabled}>{extraText}</Hint>}
          </RadioButtonLabel>
        )}
      </RadioButtonComponent>
    );
  },
);

RadioButton.displayName = 'RadioButton';
