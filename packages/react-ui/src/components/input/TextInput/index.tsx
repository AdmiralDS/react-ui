import * as React from 'react';
import type { CustomInputHandler, InputData } from '#src/components/common/dom/changeInputData';
import { changeInputData, isInputDataDifferent } from '#src/components/common/dom/changeInputData';
import { refSetter } from '#src/components/common/utils/refSetter';
import { HeightLimitedContainer as Container } from '#src/components/input/Container';
import type { ComponentDimension, ExtraProps, InputStatus } from '#src/components/input/types';
import { typography } from '#src/components/Typography';
import { ReactComponent as CloseOutlineSvg } from '@admiral-ds/icons/build/service/CloseOutline.svg';
import { ReactComponent as EyeCloseOutlineSvg } from '@admiral-ds/icons/build/service/EyeCloseOutline.svg';
import { ReactComponent as EyeOutlineSvg } from '@admiral-ds/icons/build/service/EyeOutline.svg';
import styled, { css } from 'styled-components';
import { mediumGroupBorderRadius } from '#src/components/themes/borderRadius';
import { InputIconButton } from '#src/components/InputIconButton';
import { Spinner } from '#src/components/Spinner';
import { Tooltip } from '#src/components/Tooltip';
import { checkOverflow } from '#src/components/common/utils/checkOverflow';

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
  padding-right: ${(props) => horizontalPaddingValue(props) + (iconSizeValue(props) + 8) * (props.iconCount ?? 0)}px;
`;

const disabledColors = css`
  background-color: ${(props) => props.theme.color['Neutral/Neutral 10']};
  border-color: transparent;
`;

function getBorderColor(status?: InputStatus) {
  if (!status) return 'Neutral/Neutral 40';
  switch (status) {
    case 'error':
      return 'Error/Error 60 Main';
    case 'success':
      return 'Success/Success 50 Main';
  }
}

export const InputBorderedDiv = styled.div<{ disabled?: boolean; status?: InputStatus }>`
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
  border-radius: inherit;

  border: 1px solid ${(p) => p.theme.color[getBorderColor(p.status)]};
  ${(p) => p.disabled && 'border-color: transparent;'};
`;

function getHoverBorderColor(status?: InputStatus) {
  if (!status) return 'Neutral/Neutral 60';
  switch (status) {
    case 'error':
      return 'Error/Error 70';
    case 'success':
      return 'Success/Success 60';
  }
}

function getFocusBorderColor(status?: InputStatus) {
  if (!status) return 'Primary/Primary 60 Main';
  switch (status) {
    case 'error':
      return 'Error/Error 60 Main';
    case 'success':
      return 'Success/Success 50 Main';
  }
}

const BorderedDivStyles = css<{ disabled?: boolean; readOnly?: boolean; status?: InputStatus }>`
  &:focus-within:not(:disabled) > ${InputBorderedDiv} {
    ${(p) =>
      p.disabled || p.readOnly
        ? 'border-color: transparent'
        : `border: 2px solid ${p.theme.color[getFocusBorderColor(p.status)]}`}
  }

  &:hover:not(:focus-within) > ${InputBorderedDiv} {
    border-color: ${(props) =>
      props.disabled || props.readOnly ? 'transparent' : props.theme.color[getHoverBorderColor(props.status)]};
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
  border-radius: inherit;

  box-sizing: border-box;
  flex: 1 1 auto;
  min-width: 10px;
  border: none;
  text-overflow: ellipsis;
  padding: 0 ${horizontalPaddingValue}px;

  ${(props) => (props.dimension === 's' ? typography['Body/Body 2 Long'] : typography['Body/Body 1 Long'])}

  color: ${(props) => props.theme.color['Neutral/Neutral 90']};

  &&&:disabled {
    color: ${(props) => props.theme.color['Neutral/Neutral 30']};
  }

  &::placeholder {
    color: ${(props) => props.theme.color['Neutral/Neutral 50']};
  }

  &:disabled::placeholder {
    color: ${(props) => props.theme.color['Neutral/Neutral 30']};
  }

  [data-disable-copying] & {
    user-select: none;
    pointer-events: none;
  }

  background-color: ${(props) => props.theme.color['Neutral/Neutral 00']};

  &&&:invalid + ${InputBorderedDiv} {
    border: 1px solid ${(props) => props.theme.color['Error/Error 60 Main']};
  }

  &&&:invalid:hover:not(:disabled) + ${InputBorderedDiv} {
    border: 1px solid ${(props) => props.theme.color['Error/Error 70']};
  }

  &&&:invalid:focus:not(:disabled) + ${InputBorderedDiv} {
    border: 2px solid ${(props) => props.theme.color['Error/Error 60 Main']};
  }

  [data-read-only] &&&,
  &&&:disabled {
    ${disabledColors}
  }

  ${extraPadding}
  ${ieFixes}
`;

const IconPanel = styled.div<{ disabled?: boolean; dimension?: ComponentDimension }>`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;

  display: flex;
  align-items: center;

  padding-right: ${horizontalPaddingValue}px;

  & > svg {
    border-radius: ${(p) => mediumGroupBorderRadius(p.theme.shape)};
    display: block;
    width: ${iconSizeValue}px;

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline-offset: 2px;
      outline: ${(p) => p.theme.color['Primary/Primary 60 Main']} solid 2px;
    }
  }

  & > *:not(:first-child) {
    margin-left: 8px;
  }
`;

const StyledContainer = styled(Container)<{ disabled?: boolean; readOnly?: boolean; status?: InputStatus }>`
  ${BorderedDivStyles}
`;

function defaultHandleInput(newInputData: InputData | null): InputData {
  return newInputData || {};
}

const stopEvent = (e: React.MouseEvent) => e.preventDefault();

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Делает высоту компонента больше или меньше обычной */
  dimension?: ComponentDimension;

  /** Иконки для отображения в правом углу поля */
  icons?: React.ReactNode;

  /** Отображать иконку очистки поля */
  displayClearIcon?: boolean;

  /** Статус поля */
  status?: InputStatus;

  /** Отображать статус загрузки данных */
  isLoading?: boolean;

  /** Ref контейнера компонента */
  containerRef?: React.RefObject<HTMLDivElement>;

  /**
   * Дает возможность изменить значение поля ввода и позицию курсора до момента отображения при следующем цикле рендеринга.
   * Используется для создания масок ввода
   */
  handleInput?: CustomInputHandler;

  /**  Наличие этого атрибута отключает возможность выделения и копирования значения поля */
  disableCopying?: boolean;

  /** Состояние skeleton */
  skeleton?: boolean;

  /** Отображение тултипа, по умолчанию true */
  showTooltip?: boolean;
}

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      type,
      displayClearIcon,
      isLoading,
      status,
      handleInput = defaultHandleInput,
      containerRef,
      icons,
      children,
      className,
      style,
      placeholder,
      skeleton = false,
      showTooltip = true,
      ...props
    },
    ref,
  ) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const wrapperRef = containerRef || React.useRef<HTMLDivElement>(null);

    const iconArray = React.Children.toArray(icons);

    const [overflowActive, setOverflowActive] = React.useState<boolean>(false);
    const [tooltipVisible, setTooltipVisible] = React.useState<boolean>(false);

    React.useEffect(() => {
      if (checkOverflow(inputRef.current)) {
        setOverflowActive(true);
        return;
      }
      setOverflowActive(false);
    }, [tooltipVisible, inputRef.current, setOverflowActive]);

    React.useLayoutEffect(() => {
      function show() {
        if (document.activeElement !== inputRef.current) setTooltipVisible(true);
      }
      function hide() {
        setTooltipVisible(false);
      }
      const wrapper = wrapperRef.current;
      if (wrapper) {
        wrapper.addEventListener('mouseenter', show);
        wrapper.addEventListener('mouseleave', hide);
        wrapper.addEventListener('mousedown', hide);
        return () => {
          wrapper.removeEventListener('mouseenter', show);
          wrapper.removeEventListener('mouseleave', hide);
          wrapper.removeEventListener('mousedown', hide);
        };
      }
    }, [setTooltipVisible, wrapperRef.current, inputRef.current]);

    const [isPasswordVisible, setPasswordVisible] = React.useState(false);
    if (!props.readOnly && type === 'password') {
      const Icon = isPasswordVisible ? EyeOutlineSvg : EyeCloseOutlineSvg;
      iconArray.push(
        <InputIconButton
          icon={Icon}
          key="eye-icon"
          onClick={() => {
            setPasswordVisible(!isPasswordVisible);
          }}
          aria-hidden
        />,
      );
    }

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

    if (isLoading) {
      iconArray.unshift(<Spinner key="loading-icon" dimension={props.dimension === 's' ? 'ms' : 'm'} />);
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
      <>
        <StyledContainer
          className={className}
          style={style}
          dimension={props.dimension}
          ref={wrapperRef}
          disabled={props.disabled}
          readOnly={props.readOnly}
          status={status}
          data-disabled={props.disabled ? true : undefined}
          data-read-only={props.readOnly ? true : undefined}
          data-status={status}
          skeleton={skeleton}
          data-disable-copying={props.disableCopying ? true : undefined}
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
          <InputBorderedDiv status={status} disabled={props.disabled || props.readOnly} />
          {iconCount > 0 && (
            <IconPanel disabled={props.disabled} dimension={props.dimension}>
              {iconArray}
            </IconPanel>
          )}
          {children}
        </StyledContainer>
        {showTooltip && tooltipVisible && overflowActive && (
          <Tooltip renderContent={() => inputRef?.current?.value || ''} targetRef={wrapperRef} />
        )}
      </>
    );
  },
);

TextInput.defaultProps = {
  dimension: 'm',
} as const;
TextInput.displayName = 'TextInput';