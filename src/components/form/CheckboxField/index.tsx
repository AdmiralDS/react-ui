import { forwardRef, useMemo } from 'react';
import styled from 'styled-components';
import { passFormFieldContainerDataAttributes } from '#src/components/common/utils/splitDataAttributes';
import { uid } from '#src/components/common/uid';
import { keyboardKey } from '../../common/keyboardKey';
import type { CheckboxComponentDimension } from '#src/components/form/CheckboxField/style';
import {
  CheckboxComponentHint,
  CheckboxComponentLabel,
  CheckboxComponentWrapper,
} from '#src/components/form/CheckboxField/style';
import { Checkbox } from '#src/components/Checkbox';

export interface CheckboxFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Текст будет виден ниже компонента */
  extraText?: React.ReactNode;
  /** Размер компонента */
  dimension?: CheckboxComponentDimension;
  /** Состояние частичного выбора */
  indeterminate?: boolean;
  /** Состояние ошибки */
  error?: boolean;
  /** Состояние hover */
  hovered?: boolean;
}

const StyledChekbox = styled(Checkbox)`
  margin-top: 2px;
`;

export const CheckboxField = forwardRef<HTMLInputElement, CheckboxFieldProps>(
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
      className,
      id: passedId,
      name,
      style,
      ...props
    },
    ref,
  ) => {
    //id не должно меняться на каждый ререндер если его не назначили
    const id = useMemo(() => passedId || uid(), [passedId]);

    const fieldContainerProps = {
      'data-field-id': id,
      'data-field-name': name,
    } as Record<string, string | number>;

    passFormFieldContainerDataAttributes(props, fieldContainerProps);

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
      <CheckboxComponentWrapper
        className={className}
        $dimension={dimension}
        disabled={disabled}
        readOnly={readOnly}
        style={style}
        {...fieldContainerProps}
        onClick={(e) => {
          // запрещает всплытие двойного клика
          // https://css-tricks.com/when-a-click-is-not-just-a-click/#aa-checking-checkboxes
          if ((e.target as HTMLElement).tagName !== 'INPUT') {
            e.stopPropagation();
          }
        }}
      >
        <StyledChekbox
          {...props}
          ref={ref}
          disabled={disabled}
          readOnly={readOnly}
          type="checkbox"
          indeterminate={indeterminate}
          onKeyDown={handleKeyDown}
          data-hovered={hovered}
          hovered={hovered}
          dimension={dimension}
          id={id}
          name={name}
          error={error}
        />
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

CheckboxField.displayName = 'CheckboxField';
