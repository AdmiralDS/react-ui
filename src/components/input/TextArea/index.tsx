import type { CustomInputHandler, InputData } from '#src/components/common/dom/changeInputData';
import { changeInputData } from '#src/components/common/dom/changeInputData';
import { refSetter } from '#src/components/common/utils/refSetter';
import type { ComponentDimension, ExtraProps, InputStatus } from '#src/components/input/types';
import { typography } from '#src/components/Typography';
import { ReactComponent as CloseOutlineSvg } from '@admiral-ds/icons/build/service/CloseOutline.svg';
import type { ForwardedRef, TextareaHTMLAttributes } from 'react';
import * as React from 'react';
import styled, { css } from 'styled-components';
import { InputIconButton } from '#src/components/InputIconButton';
import { Container } from '../Container';
import { Fragment } from 'react';

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
const verticalPaddingValue = (props: { dimension?: ComponentDimension }) => {
  switch (props.dimension) {
    case 'xl':
      return 16;
    case 'm':
      return 8;
    case 's':
      return 6;
    default:
      return 8;
  }
};
const horizontalPaddingValue = (props: { dimension?: ComponentDimension }) => {
  switch (props.dimension) {
    case 'xl':
    case 'm':
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
  background-color: ${(props) => props.theme.color['Neutral/Neutral 10']};
  border-color: transparent;
`;

const BorderedDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  pointer-events: none;
  overflow: hidden;
  min-width: 0;

  background: none;
  border: 1px solid ${(props) => props.theme.color['Neutral/Neutral 40']};
  border-radius: inherit;

  [data-status='error'] &&& {
    border: 1px solid ${(props) => props.theme.color['Error/Error 60 Main']};
  }

  [data-status='success'] &&& {
    border: 1px solid ${(props) => props.theme.color['Success/Success 50 Main']};
  }

  [data-read-only] &&& {
    border-color: transparent;
  }
`;

const colorsBorderAndBackground = css<{ disabled?: boolean }>`
  background-color: ${(props) => props.theme.color['Neutral/Neutral 00']};

  &:focus + ${BorderedDiv} {
    border: 2px solid ${(props) => props.theme.color['Primary/Primary 60 Main']};
  }

  &&&:disabled + ${BorderedDiv}, [data-read-only] &&& + ${BorderedDiv} {
    border-color: transparent;
  }

  &:hover:not(:focus) + ${BorderedDiv} {
    border-color: ${(props) => (props.disabled ? 'transparent' : props.theme.color['Neutral/Neutral 60'])};
  }

  &:invalid + ${BorderedDiv}, &:invalid:hover + ${BorderedDiv} {
    border: 1px solid ${(props) => props.theme.color['Error/Error 60 Main']};
  }

  [data-status='error'] &&&:hover:not(:disabled) + ${BorderedDiv}, &:invalid:hover:not(:disabled) + ${BorderedDiv} {
    border: 1px solid ${(props) => props.theme.color['Error/Error 70']};
  }

  [data-status='success'] &&&:hover:not(:disabled) + ${BorderedDiv} {
    border: 1px solid ${(props) => props.theme.color['Success/Success 60']};
  }

  [data-status='error'] &&&:focus:not(:disabled) + ${BorderedDiv}, &:invalid:focus:not(:disabled) + ${BorderedDiv} {
    border: 2px solid ${(props) => props.theme.color['Error/Error 60 Main']};
  }

  [data-status='success'] &&&:focus:not(:disabled) + ${BorderedDiv} {
    border: 2px solid ${(props) => props.theme.color['Success/Success 50 Main']};
  }

  [data-read-only] &&&,
  &&&:disabled {
    ${disabledColors}
  }

  [data-read-only] &&&:hover + ${BorderedDiv}, [data-read-only] &&&:focus + ${BorderedDiv} {
    border-color: transparent;
  }
`;

const ieFixes = css`
  ::-ms-clear,
  ::-ms-reveal {
    display: none;
  }
`;

const textBlockStyleMixin = css<TextBlockProps>`
  outline: none;
  appearance: none;
  border-radius: inherit;
  border: none;
  box-sizing: border-box;
  margin: 0;
  padding: ${verticalPaddingValue}px ${horizontalPaddingValue}px;
  overflow-wrap: break-word;

  ${(props) => (props.dimension === 's' ? typography['Body/Body 2 Long'] : typography['Body/Body 1 Long'])}
  ${colorsBorderAndBackground}
  ${extraPadding}
`;

const HiddenSpanContainer = styled.div<TextBlockProps>`
  overflow: hidden;
  visibility: hidden;
  ${textBlockStyleMixin}
`;

const Text = styled.textarea<ExtraProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  resize: none;

  flex: 1 1 auto;
  min-width: 10px;
  background: transparent;
  overflow: auto;
  color: ${(props) => props.theme.color['Neutral/Neutral 90']};

  ${(props) => (props.dimension === 's' ? typography['Body/Body 2 Long'] : typography['Body/Body 1 Long'])}
  &::placeholder {
    color: ${(props) => props.theme.color['Neutral/Neutral 50']};
  }

  &:disabled::placeholder,
  &:disabled {
    color: ${(props) => props.theme.color['Neutral/Neutral 30']};
  }

  [data-disable-copying] & {
    user-select: none;
    pointer-events: none;
  }

  ${textBlockStyleMixin}
  ${ieFixes}
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

interface TextBlockProps extends ExtraProps {
  disabled?: boolean;
}

const StyledSpan = styled.span<TextBlockProps>`
  ${textBlockStyleMixin}
`;

const textAreaHeight = (rows: number, dimension?: ComponentDimension) => {
  const textAreaLineHeight = dimension === 's' ? 20 : 24;
  return rows * textAreaLineHeight + 2 * verticalPaddingValue({ dimension });
};

const StyledContainer = styled(Container)<{
  autoHeight: boolean;
  rows: number;
  dimension: ComponentDimension;
}>`
  ${(p) =>
    p.autoHeight
      ? `min-height: ${textAreaHeight(p.rows, p.dimension)}px`
      : `height: ${textAreaHeight(p.rows, p.dimension)}px`}
`;

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Максимальное количество символов для ввода */
  maxLength?: number;

  /** Начальная высота компонента в количествах строк */
  rows?: number;

  /** Делает высоту компонента больше или меньше обычной */
  dimension?: ComponentDimension;

  /** Иконки для отображения в правом углу поля */
  icons?: React.ReactNode;

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

  /**  Включает автоматическое изменение высоты компонента в зависимости от количества текста */
  autoHeight?: boolean;

  /** Состояние skeleton */
  skeleton?: boolean;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      rows = 3,
      value,
      displayClearIcon,
      status,
      handleInput = defaultHandleInput,
      containerRef,
      icons,
      children,
      className,
      autoHeight,
      skeleton = false,
      dimension = 'm',
      ...props
    },
    ref,
  ) => {
    const inputRef = React.useRef<HTMLTextAreaElement>(null);

    const iconArray = React.Children.toArray(icons);

    if (!props.readOnly && displayClearIcon) {
      iconArray.unshift(
        <InputIconButton
          icon={CloseOutlineSvg}
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

    const HiddenDivLines = (value?: string) => {
      const lines = value?.split(/\r?\n/g) || [''];

      return (
        <>
          {lines.map((line, index) => (
            <Fragment key={index}>
              {line}
              <br />
            </Fragment>
          ))}
        </>
      );
    };

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
      <StyledContainer
        className={className}
        ref={containerRef}
        data-read-only={props.readOnly ? true : undefined}
        data-status={status}
        skeleton={skeleton}
        data-disable-copying={props.disableCopying ? true : undefined}
        autoHeight={!!autoHeight}
        rows={rows}
        dimension={dimension}
        {...(props.disableCopying && {
          onMouseDown: stopEvent,
        })}
      >
        <HiddenSpanContainer dimension={dimension} disabled={props.disabled} iconCount={iconCount}>
          <StyledSpan dimension={dimension} disabled={props.disabled} iconCount={iconCount}>
            {HiddenDivLines(inputData.value)}
          </StyledSpan>
        </HiddenSpanContainer>
        <Text
          ref={refSetter(ref, inputRef)}
          {...props}
          dimension={dimension}
          iconCount={iconCount}
          value={inputData.value}
        />
        <BorderedDiv />
        {iconCount > 0 && (
          <IconPanel disabled={props.disabled} dimension={dimension}>
            {iconArray}
          </IconPanel>
        )}
        {children}
      </StyledContainer>
    );
  },
);

TextArea.displayName = 'TextArea';
