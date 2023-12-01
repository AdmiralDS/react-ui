import { forwardRef } from 'react';
import type { InputHTMLAttributes, ReactNode } from 'react';
import type { CheckboxComponentDimension } from '#src/components/CheckboxComponent/style';
import {
  Check,
  CheckboxComponentBackground,
  CheckboxComponentHint,
  CheckboxComponentHover,
  CheckboxComponentLabel,
  CheckboxComponentWrapper,
  Indeterminate,
  Input,
  InputContainer,
} from '#src/components/CheckboxComponent/style';
import * as React from 'react';
import { keyboardKey } from '#src/components/common/keyboardKey';

export interface CheckboxComponentProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Текст будет виден ниже компонента */
  extraText?: ReactNode;
  /** Размер компонента */
  dimension?: CheckboxComponentDimension;
  /** Состояние частичного выбора */
  indeterminate?: boolean;
  /** Состояние ошибки */
  error?: boolean;
  /** Состояние hover */
  hovered?: boolean;
}

export const CheckboxComponent = forwardRef<HTMLInputElement, CheckboxComponentProps>(
  (
    {
      children,
      disabled = false,
      readOnly = false,
      hovered,
      dimension = 'm',
      error,
      indeterminate = false,
      extraText,
      ...props
    },
    ref,
  ) => {
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
      <CheckboxComponentWrapper $dimension={dimension} disabled={disabled} readOnly={readOnly}>
        <Input
          ref={ref}
          disabled={disabled}
          readOnly={readOnly}
          {...props}
          type="checkbox"
          $indeterminate={indeterminate}
          onKeyDown={handleKeyDown}
          data-hovered={hovered}
          $hovered={hovered}
          $dimension={dimension}
        />
        <InputContainer $dimension={dimension}>
          <CheckboxComponentHover $dimension={dimension} />
          <CheckboxComponentBackground $dimension={dimension} $error={error} disabled={disabled || readOnly}>
            {indeterminate ? (
              <Indeterminate aria-hidden="true" focusable="false" />
            ) : (
              <Check aria-hidden="true" focusable="false" />
            )}
          </CheckboxComponentBackground>
        </InputContainer>
        {children && (
          <CheckboxComponentLabel $dimension={dimension} disabled={disabled}>
            {children}
            {extraText && (
              <CheckboxComponentHint disabled={disabled} $dimension={dimension}>
                {extraText}
              </CheckboxComponentHint>
            )}
          </CheckboxComponentLabel>
        )}
      </CheckboxComponentWrapper>
    );
  },
);
