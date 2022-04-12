import * as React from 'react';
import styled, { css } from 'styled-components';
import { refSetter } from '#/components/common/utils/refSetter';
import { InputStatus } from '#/components/input';
import { CharacterCounter } from '#/components/input/TextArea/CharacterCounter';
import { Label } from '#/components/Label';
import { uid } from '#/components/common/uid';
import { typography } from '#/components/Typography';

const inlineMixin = css`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  > * {
    flex: 1 1 auto;
  }

  ${Label} {
    margin: 0 8px 0 0;
  }
`;

const Container = styled.div<{ displayInline?: boolean }>`
  display: flex;
  ${(props) => (props.displayInline ? inlineMixin : 'flex-direction: column;')}
`;

export const ExtrasContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ExtraTextContainer = styled.div`
  flex: 1 1 auto;

  padding-top: 8px;

  text-align: left;

  ${typography['Additional/S']}

  color: ${(props) => props.theme.color.text.secondary};

  [data-disabled] & {
    color: ${(props) => props.theme.color.text.tertiary};
  }

  [data-status='error'] & {
    color: ${(props) => props.theme.color.status.danger};
  }

  [data-status='success'] & {
    color: ${(props) => props.theme.color.status.success};
  }
`;

export interface FieldOwnProps {
  /** Текст будет виден ниже компонента */
  extraText?: React.ReactNode;

  /** Установка статуса поля */
  status?: InputStatus;

  /** Установка статуса поле обязательно для заполнения */
  required?: boolean;

  /** Установка статуса disabled */
  disabled?: boolean;

  /**  Имя поля формы */
  label?: React.ReactNode;

  /** Отображать лейбл в одну строчку с инпутом */
  displayInline?: boolean;

  /** Максимальное количество символов для ввода */
  maxLength?: number;

  inputRef?: React.RefObject<HTMLInputElement | HTMLTextAreaElement>;

  /**
   * Позволяет отключать появление счетчика символов при задании maxLength
   */
  displayCharacterCounter?: boolean;
}

const PositionedCharacterCounter = styled(CharacterCounter)`
  flex: 0 0 auto;
  padding: 8px 0 0 8px;
`;

export interface FieldProps extends FieldOwnProps, React.HTMLAttributes<HTMLDivElement> {}

export const Field = React.forwardRef<HTMLDivElement, FieldProps>(
  ({ children, maxLength, inputRef, displayCharacterCounter = true, ...props }: FieldProps, ref) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [hasFocus, setFocus] = React.useState(false);

    const { className, style, displayInline, status, extraText, label, required, disabled } = props;
    const { id = uid() } = props;
    const fieldContainerProps = { className, style, displayInline };
    const labelProps = { htmlFor: id, children: label, required };

    React.useEffect(() => {
      const onFocusIn = (ev: FocusEvent) => {
        setFocus(true);
      };
      const onFocusOut = (ev: FocusEvent) => {
        setFocus(false);
      };

      const containerNode = containerRef.current;
      if (containerNode) {
        containerNode.addEventListener('focusin', onFocusIn);
        containerNode.addEventListener('focusout', onFocusOut);
      }
      return () => {
        if (containerNode) {
          containerNode.removeEventListener('focusin', onFocusIn);
          containerNode.removeEventListener('focusout', onFocusOut);
        }
      };
    }, [containerRef.current]);

    return (
      <Container
        {...fieldContainerProps}
        data-status={status}
        data-focus-within={hasFocus ? '' : undefined}
        data-required-within={required ? '' : undefined}
        data-disabled={disabled ? '' : undefined}
        ref={refSetter(containerRef, ref)}
      >
        {labelProps.children && <Label {...labelProps} />}
        <div>
          {children}
          <ExtrasContainer>
            {extraText && <ExtraTextContainer>{extraText}</ExtraTextContainer>}

            {displayCharacterCounter && inputRef && maxLength !== undefined && (
              <>
                {/* div необходим чтобы сдвигать счетчик вправо при отсутствии текста */}
                <div></div>
                <PositionedCharacterCounter maxLength={maxLength} inputRef={inputRef} />
              </>
            )}
          </ExtrasContainer>
        </div>
      </Container>
    );
  },
);
