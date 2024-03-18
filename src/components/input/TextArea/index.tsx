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

const iconSizeValue = (props: { $dimension?: ComponentDimension }) => {
  switch (props.$dimension) {
    case 'xl':
      return 24;
    case 's':
      return 20;
    default:
      return 24;
  }
};
const verticalPaddingValue = (props: { $dimension?: ComponentDimension }) => {
  switch (props.$dimension) {
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
const horizontalPaddingValue = (props: { $dimension?: ComponentDimension }) => {
  switch (props.$dimension) {
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
  padding-right: ${(props) => horizontalPaddingValue(props) + (props.$iconCount ? iconSizeValue(props) + 8 : 0)}px;
`;

const disabledColors = css`
  background-color: var(--admiral-color-Neutral_Neutral10, ${(p) => p.theme.color['Neutral/Neutral 10']});
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
  border: 1px solid var(--admiral-color-Neutral_Neutral40, ${(p) => p.theme.color['Neutral/Neutral 40']});
  border-radius: inherit;

  [data-status='error'] &&& {
    border: 1px solid var(--admiral-color-Error_Error60Main, ${(p) => p.theme.color['Error/Error 60 Main']});
  }

  [data-status='success'] &&& {
    border: 1px solid var(--admiral-color-Success_Success50Main, ${(p) => p.theme.color['Success/Success 50 Main']});
  }

  [data-read-only] &&& {
    border-color: transparent;
  }
`;

const colorsBorderAndBackground = css<{ disabled?: boolean }>`
  background-color: var(--admiral-color-Neutral_Neutral00, ${(p) => p.theme.color['Neutral/Neutral 00']});

  &:focus + ${BorderedDiv} {
    border: 2px solid var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']});
  }

  &&&:disabled + ${BorderedDiv}, [data-read-only] &&& + ${BorderedDiv} {
    border-color: transparent;
  }

  &:hover:not(:focus) + ${BorderedDiv} {
    border-color: ${(p) =>
      p.disabled ? 'transparent' : `var(--admiral-color-Neutral_Neutral60, ${p.theme.color['Neutral/Neutral 60']})`};
  }

  &:invalid + ${BorderedDiv}, &:invalid:hover + ${BorderedDiv} {
    border: 1px solid var(--admiral-color-Error_Error60Main, ${(p) => p.theme.color['Error/Error 60 Main']});
  }

  [data-status='error'] &&&:hover:not(:disabled) + ${BorderedDiv}, &:invalid:hover:not(:disabled) + ${BorderedDiv} {
    border: 1px solid var(--admiral-color-Error_Error70, ${(p) => p.theme.color['Error/Error 70']});
  }

  [data-status='success'] &&&:hover:not(:disabled) + ${BorderedDiv} {
    border: 1px solid var(--admiral-color-Success_Success60, ${(p) => p.theme.color['Success/Success 60']});
  }

  [data-status='error'] &&&:focus:not(:disabled) + ${BorderedDiv}, &:invalid:focus:not(:disabled) + ${BorderedDiv} {
    border: 2px solid var(--admiral-color-Error_Error60Main, ${(p) => p.theme.color['Error/Error 60 Main']});
  }

  [data-status='success'] &&&:focus:not(:disabled) + ${BorderedDiv} {
    border: 2px solid var(--admiral-color-Success_Success50Main, ${(p) => p.theme.color['Success/Success 50 Main']});
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

  ${(props) => (props.$dimension === 's' ? typography['Body/Body 2 Long'] : typography['Body/Body 1 Long'])}
  ${colorsBorderAndBackground}
  ${extraPadding}
`;

const HiddenSpanContainer = styled.div<TextBlockProps>`
  overflow-x: hidden;
  overflow-y: auto;
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
  overflow-y: auto;
  overflow-x: hidden;

  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});

  ${(props) => (props.$dimension === 's' ? typography['Body/Body 2 Long'] : typography['Body/Body 1 Long'])}
  &::placeholder {
    color: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  }

  &:disabled::placeholder,
  &:disabled {
    color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
  }

  [data-disable-copying] & {
    user-select: none;
    pointer-events: none;
  }

  ${textBlockStyleMixin}
  ${ieFixes}
`;

const IconPanel = styled.div<{ disabled?: boolean; $dimension?: ComponentDimension }>`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-right: ${horizontalPaddingValue}px;
  padding-top: ${verticalPaddingValue}px;

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

const textAreaHeight = (rows: number, $dimension?: ComponentDimension) => {
  const textAreaLineHeight = $dimension === 's' ? 20 : 24;
  return rows * textAreaLineHeight + 2 * verticalPaddingValue({ $dimension });
};

const StyledContainer = styled(Container)<{
  $autoHeight: boolean;
  $rows: number;
  $maxRows?: number;
  $dimension: ComponentDimension;
}>`
  min-height: ${(p) => textAreaHeight(p.$rows, p.$dimension)}px;
  ${(p) => (p.$maxRows ? `max-height: ${textAreaHeight(p.$maxRows, p.$dimension)}px;` : '')}
  ${(p) => (p.$autoHeight ? '' : `height: ${textAreaHeight(p.$rows, p.$dimension)}px;`)}
`;

function toHtmlString(value?: string) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/(\r?\n)$/g, '<br /><br />')
    .replace(/\r?\n/g, '<br /> ');
}
export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Максимальное количество символов для ввода */
  maxLength?: number;

  /** Начальная высота компонента в количествах строк */
  rows?: number;

  /** Максимальная высота компонента в количествах строк  */
  maxRows?: number;

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
      maxRows,
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
    const hiddenDivRef = React.useRef<HTMLDivElement>(null);
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
    }, [handleInput]);

    React.useEffect(() => {
      function oninput(this: HTMLTextAreaElement) {
        const { value } = this;
        const hiddenDiv = hiddenDivRef.current;
        if (hiddenDiv) {
          hiddenDiv.innerHTML = toHtmlString(value);
          this.style.overflowY = hiddenDiv.clientHeight < hiddenDiv.scrollHeight ? '' : 'hidden';
        }
      }

      if (autoHeight && inputRef.current && hiddenDivRef.current) {
        const node = inputRef.current;
        hiddenDivRef.current.innerHTML = toHtmlString(node.value);
        node.addEventListener('input', oninput);
        node.style.overflowY = hiddenDivRef.current.clientHeight < hiddenDivRef.current.scrollHeight ? '' : 'hidden';
        return () => {
          node.removeEventListener('input', oninput);
          node.style.overflowY = '';
        };
      }
    }, [autoHeight, inputData.value, props.defaultValue]);
    return (
      <StyledContainer
        className={className}
        ref={containerRef}
        data-read-only={props.readOnly ? true : undefined}
        data-status={status}
        $skeleton={skeleton}
        data-disable-copying={props.disableCopying ? true : undefined}
        $autoHeight={!!autoHeight}
        $rows={rows}
        $maxRows={maxRows}
        $dimension={dimension}
        {...(props.disableCopying && {
          onMouseDown: stopEvent,
        })}
      >
        <HiddenSpanContainer
          ref={hiddenDivRef}
          $dimension={dimension}
          disabled={props.disabled}
          $iconCount={iconCount}
        />
        <Text
          ref={refSetter(ref, inputRef)}
          {...props}
          $dimension={dimension}
          $iconCount={iconCount}
          $autoHeight={autoHeight}
          value={inputData.value}
        />
        <BorderedDiv />
        {iconCount > 0 && (
          <IconPanel disabled={props.disabled} $dimension={dimension}>
            {iconArray}
          </IconPanel>
        )}
        {children}
      </StyledContainer>
    );
  },
);

TextArea.displayName = 'TextArea';
