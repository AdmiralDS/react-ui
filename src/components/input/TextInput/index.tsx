import {
  changeInputData,
  CustomInputHandler,
  InputData,
  isInputDataDifferent,
} from '#src/components/common/dom/changeInputData';
import { refSetter } from '#src/components/common/utils/refSetter';
import { Container } from '../Container';
import type { ExtraProps, InputStatus, ComponentDimension } from '#src/components/input/types';
import { typography } from '#src/components/Typography';
import { ReactComponent as CloseOutlineSvg } from '@admiral-ds/icons/build/service/CloseOutline.svg';
import { ReactComponent as EyeCloseOutlineSvg } from '@admiral-ds/icons/build/service/EyeCloseOutline.svg';
import { ReactComponent as EyeOutlineSvg } from '@admiral-ds/icons/build/service/EyeOutline.svg';
import type { ForwardedRef, InputHTMLAttributes } from 'react';
import * as React from 'react';
import styled, { css } from 'styled-components';
import { StatusIcon } from '../StatusIcon';

const EyeCloseIcon = styled(EyeCloseOutlineSvg)`
  & *[fill^='#'] {
    fill: ${(props) => props.theme.color.text.secondary};
  }

  &:hover {
    cursor: pointer;
  }

  &:hover *[fill^='#'] {
    fill: ${(props) => props.theme.color.basic.hover};
  }
`;

const EyeIcon = styled(EyeOutlineSvg)`
  & *[fill^='#'] {
    fill: ${(props) => props.theme.color.text.secondary};
  }

  &:hover {
    cursor: pointer;
  }

  &:hover *[fill^='#'] {
    fill: ${(props) => props.theme.color.basic.hover};
  }
`;

const ClearIcon = styled(CloseOutlineSvg)`
  & *[fill^='#'] {
    fill: ${(props) => props.theme.color.text.secondary};
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
  padding-right: ${(props) =>
    horizontalPaddingValue(props) +
    (iconSizeValue(props) + 8) * (props.iconCount ?? 0) -
    8 * (props.iconCount ? 1 : 0)}px;
`;

const disabledColors = css`
  background-color: ${(props) => props.theme.color.background.tertiary};
  border-color: ${(props) => props.theme.color.background.tertiary};
`;

const colorsBorderAndBackground = css<{ disabled?: boolean }>`
  background-color: ${(props) => props.theme.color.background.primary};
  border: 1px solid ${(props) => props.theme.color.basic.tertiary};
  border-radius: 4px;

  &:focus {
    border: 1px solid ${(props) => props.theme.color.basic.press};
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

const Input = styled.input<ExtraProps>`
  outline: none;
  appearance: none;

  box-sizing: border-box;
  flex: 1 1 auto;
  min-width: 10px;
  border: none;
  background: transparent;
  text-overflow: ellipsis;
  padding: 0 ${horizontalPaddingValue}px;

  ${(props) => (props.dimension === 's' ? typography['Body/Body 2 Long'] : typography['Body/Body 1 Long'])}
  color: ${(props) => props.theme.color.text.primary};

  &::placeholder {
    color: ${(props) => props.theme.color.text.secondary};
  }

  ${colorsBorderAndBackground}

  &:disabled,
  &:disabled::placeholder {
    color: ${(props) => props.theme.color.text.tertiary};
    ${disabledColors}
  }

  [data-read-only] & {
    user-select: none;
    pointer-events: none;
    ${disabledColors}
  }

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

const IconPanel = styled.div<{ disabled?: boolean; dimension?: ComponentDimension }>`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;

  display: flex;
  align-items: center;

  padding-right: ${horizontalPaddingValue}px;

  & > * {
    display: block;
    width: ${iconSizeValue}px;
  }

  & > *:not(:first-child) {
    margin-left: 8px;
  }
`;

function defaultHandleInput(newInputData: InputData | null): InputData {
  return newInputData || {};
}

const stopEvent = (e: React.MouseEvent) => e.preventDefault();

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
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

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      type,

      displayStatusIcon,
      displayClearIcon,
      status,
      handleInput = defaultHandleInput,
      containerRef,
      icons,
      children,
      className,
      style,
      placeholder,
      ...props
    },
    ref,
  ) => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    const iconArray = React.Children.toArray(icons);

    const [isPasswordVisible, setPasswordVisible] = React.useState(false);
    if (type === 'password') {
      const Icon = isPasswordVisible ? EyeIcon : EyeCloseIcon;
      iconArray.push(
        <Icon
          key="eye-icon"
          aria-hidden
          onClick={() => {
            setPasswordVisible(!isPasswordVisible);
          }}
        />,
      );
    }

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

    // const inputData = value !== undefined && value !== null ? handleInput({ value: String(value) }) : {};

    React.useLayoutEffect(() => {
      const nullHandledValue = handleInput(null);
      function oninput(this: HTMLInputElement) {
        const { value, selectionStart, selectionEnd } = this;
        const currentInputData = { value, selectionStart, selectionEnd };

        const inputData = handleInput(currentInputData);

        if (placeholder && !isInputDataDifferent(nullHandledValue, inputData)) {
          changeInputData(this, { ...inputData, value: '' });
        } else {
          changeInputData(this, inputData);
        }
      }

      // Чтение selectionStart в Safari при type='date' вызывает ошибку
      if (type !== 'date' && inputRef.current) {
        const node = inputRef.current;
        node.addEventListener('input', oninput);

        const { value, selectionStart, selectionEnd } = node;
        const currentInputData = { value, selectionStart, selectionEnd };
        const inputData = handleInput(currentInputData);

        if (placeholder && !isInputDataDifferent(nullHandledValue, inputData)) {
          changeInputData(node, { ...inputData, value: '' });
        } else {
          changeInputData(node, inputData);
        }

        return () => {
          node.removeEventListener('input', oninput);
        };
      }
    }, [inputRef.current, handleInput, placeholder]);
    return (
      <Container
        className={className}
        style={style}
        disabled={props.disabled}
        dimension={props.dimension}
        ref={containerRef}
        data-read-only={props.readOnly ? true : undefined}
        data-status={status}
        {...(props.disableCopying && {
          onMouseDown: stopEvent,
        })}
      >
        <Input
          ref={refSetter(ref, inputRef)}
          {...props}
          placeholder={placeholder}
          iconCount={iconCount}
          type={type === 'password' && isPasswordVisible ? 'text' : type}
        />
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

TextInput.defaultProps = {
  dimension: 'm',
} as const;
TextInput.displayName = 'TextInput';
