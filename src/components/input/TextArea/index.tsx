import { changeInputData, CustomInputHandler, InputData } from '#/components/common/dom/changeInputData';
import { refSetter } from '#/components/common/utils/refSetter';
import type { ExtraProps, InputStatus, ComponentDimension } from '#/components/input/types';
import { typography } from '#/components/Typography';
import { ReactComponent as CloseOutlineSvg } from '@admiral-ds/icons/build/service/CloseOutline.svg';
import type { ForwardedRef, TextareaHTMLAttributes } from 'react';
import * as React from 'react';
import styled, { css } from 'styled-components';
import { StatusIcon } from '../StatusIcon';

const ClearIcon = styled(CloseOutlineSvg)`
  & *[fill^='#'] {
    fill: ${(props) => props.theme.color.basic.tertiary};
  }

  &:hover {
    cursor: pointer;
  }

  &:hover *[fill^='#'] {
    fill: ${(props) => props.theme.color.basic.hover};
  }
`;

const iconSizeValue = (props: { dimension?: ComponentDimension }) => {
  switch (props.dimension) {
    case 'xl':
      return 24;
    case 's':
      return 20;
    default:
      return 24;
  }
};
const horizontalPaddingValue = (props: { dimension?: ComponentDimension }) => {
  switch (props.dimension) {
    case 'xl':
      return 16;
    case 's':
      return 12;
    default:
      return 16;
  }
};

const extraPadding = css<ExtraProps>`
  padding-right: ${(props) => (props.iconCount ? iconSizeValue(props) + 8 : horizontalPaddingValue(props))}px;
`;

const disabledColors = css`
  background-color: ${(props) => props.theme.color.background.tertiary};
  border-color: ${(props) => props.theme.color.background.tertiary};
`;

const colorsBorderAndBackground = css<{ disabled?: boolean }>`
  background-color: ${(props) => props.theme.color.background.primary};
  border: 1px solid ${(props) => props.theme.color.basic.tertiary};
  border-radius: 4px;

  ${({ disabled }) => (disabled ? disabledColors : '')}

  &:focus {
    border-color: ${(props) => props.theme.color.basic.press};
  }

  &:hover {
    border-color: ${(props) => props.theme.color.basic.hover};
  }
`;

const ieFixes = css`
  ::-ms-clear,
  ::-ms-reveal {
    display: none;
  }
`;

const Text = styled.textarea<ExtraProps>`
  outline: none;
  appearance: none;
  resize: none;

  box-sizing: border-box;
  flex: 1 1 auto;
  min-width: 10px;
  border: none;
  background: transparent;
  overflow: auto;
  padding: 8px ${horizontalPaddingValue}px;

  color: ${(props) => props.theme.color.text.primary};

  ${(props) => (props.dimension === 's' ? typography['Additional/S'] : typography['Additional/L'])}
  &::placeholder {
    color: ${(props) => props.theme.color.text.secondary};
  }

  &:disabled::placeholder {
    color: ${(props) => props.theme.color.text.tertiary};
  }

  [data-read-only] & {
    user-select: none;
    pointer-events: none;
    ${disabledColors}
  }

  ${colorsBorderAndBackground}
  ${extraPadding}
  ${ieFixes}
  [data-status='error'] &,
  &:invalid {
    border-color: ${(props) => props.theme.color.status.danger};
  }

  [data-status='success'] & {
    border-color: ${(props) => props.theme.color.status.success};
  }
`;

const Container = styled.div<{ disabled?: boolean; dimension?: ComponentDimension }>`
  position: relative;
  display: flex;
  align-items: stretch;
  border: none;

  &[data-read-only] {
    user-select: none;
    pointer-events: none;
  }
`;

const IconPanel = styled.div<{ disabled?: boolean; dimension?: ComponentDimension }>`
  position: absolute;
  top: 8px;
  bottom: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-right: 8px;

  & > * {
    display: block;
    width: ${iconSizeValue}px;
  }
`;

function defaultHandleInput(newInputData: InputData): InputData {
  return newInputData;
}

const stopEvent = (e: React.MouseEvent) => e.preventDefault();

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Максимальное количество символов для ввода */
  maxLength?: number;

  /** Начальная высота компонента в количествах строк */
  rows?: number;

  /** Делает высоту компонента больше или меньше обычной */
  dimension?: ComponentDimension;

  /** Иконки для отображения в правом углу поля */
  icons?: React.ReactNode;

  /** Отображать иконку статуса */
  displayStatusIcon?: boolean;

  /** Отображать иконку очистки поля */
  displayClearIcon?: boolean;

  /** Статус поля */
  status?: InputStatus;

  /** Ref контейнера компонента */
  containerRef?: ForwardedRef<HTMLDivElement>;

  /**
   * Дает возможность изменить значение поля ввода и позицию курсора до момента отображения при следующем цикле рендеринга.
   * Используется для создания масок ввода
   */
  handleInput?: CustomInputHandler;

  /**  Наличие этого атрибута отключает возможность выделения и копирования значения поля */
  disableCopying?: boolean;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      rows = 3,
      value,
      displayStatusIcon,
      displayClearIcon,
      status,
      handleInput = defaultHandleInput,
      containerRef,
      icons,
      children,
      className,
      ...props
    },
    ref,
  ) => {
    const inputRef = React.useRef<HTMLTextAreaElement>(null);

    const iconArray = React.Children.toArray(icons);

    if (displayStatusIcon) {
      iconArray.push(<StatusIcon key="status-icon" status={status} aria-hidden />);
    }

    if (displayClearIcon) {
      iconArray.unshift(
        <ClearIcon
          key="clear-icon"
          onClick={() => {
            if (inputRef.current) {
              changeInputData(inputRef.current, { value: '' });
            }
          }}
          aria-hidden
        />,
      );
    }

    const iconCount = iconArray.length;

    const inputData = value !== undefined && value !== null ? handleInput({ value: String(value) }) : {};

    React.useLayoutEffect(() => {
      function oninput(this: HTMLTextAreaElement) {
        const { value, selectionStart, selectionEnd } = this;
        const currentInputData = { value, selectionStart, selectionEnd };

        const inputData = handleInput(currentInputData);
        changeInputData(this, inputData);
      }

      if (inputRef.current) {
        const node = inputRef.current;
        node.addEventListener('input', oninput);

        const { value, selectionStart, selectionEnd } = node;
        const currentInputData = { value, selectionStart, selectionEnd };
        const inputData = handleInput(currentInputData);
        changeInputData(node, inputData);

        return () => {
          node.removeEventListener('input', oninput);
        };
      }
    }, [inputRef.current, handleInput]);
    return (
      <Container
        className={className}
        disabled={props.disabled}
        dimension={props.dimension}
        ref={containerRef}
        data-read-only={props.readOnly ? true : undefined}
        data-status={status}
        {...(props.disableCopying && {
          onMouseDown: stopEvent,
        })}
      >
        <Text ref={refSetter(ref, inputRef)} {...props} iconCount={iconCount} value={inputData.value} rows={rows} />
        {iconCount > 0 && (
          <IconPanel disabled={props.disabled} dimension={props.dimension}>
            {iconArray}
          </IconPanel>
        )}
        {children}
      </Container>
    );
  },
);

TextArea.defaultProps = {
  dimension: 'm',
} as const;

TextArea.displayName = 'TextArea';
