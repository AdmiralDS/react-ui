import type { ChangeEvent, ReactNode, RefObject, InputHTMLAttributes } from 'react';
import { Children, forwardRef, useEffect, useLayoutEffect, useRef, useState } from 'react';
import styled, { css, type DataAttributes } from 'styled-components';

import type { CustomInputHandler, InputData } from '#src/components/common/dom/changeInputData';
import { changeInputData, isInputDataDifferent } from '#src/components/common/dom/changeInputData';
import { refSetter } from '#src/components/common/utils/refSetter';
import { HeightLimitedContainer } from '#src/components/input/Container';
import type { ComponentDimension, ExtraProps, InputStatus } from '#src/components/input/types';
import { typography } from '#src/components/Typography';
import { ReactComponent as CloseOutlineSvg } from '@admiral-ds/icons/build/service/CloseOutline.svg';
import { ReactComponent as EyeCloseOutlineSvg } from '@admiral-ds/icons/build/service/EyeCloseOutline.svg';
import { ReactComponent as EyeOutlineSvg } from '@admiral-ds/icons/build/service/EyeOutline.svg';
import { mediumGroupBorderRadius } from '#src/components/themes/borderRadius';
import { InputIconButton } from '#src/components/InputIconButton';
import { Spinner } from '#src/components/Spinner';
import { Tooltip } from '#src/components/Tooltip';
import { checkOverflow } from '#src/components/common/utils/checkOverflow';

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
const horizontalPaddingValue = (props: { $dimension?: ComponentDimension }) => {
  switch (props.$dimension) {
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
    horizontalPaddingValue(props) + (iconSizeValue(props) + 8) * (props.$iconsAfterCount ?? 0)}px;
  padding-left: ${(props) =>
    horizontalPaddingValue(props) + (iconSizeValue(props) + 8) * (props.$iconsBeforeCount ?? 0)}px;
`;

const disabledColors = css`
  background-color: var(--admiral-color-Neutral_Neutral10, ${(p) => p.theme.color['Neutral/Neutral 10']});
  border-color: transparent;
`;

const getBorderColor = css<{ $status?: InputStatus }>`
  ${({ $status, theme }) => {
    if (!$status) {
      return `var(--admiral-color-Neutral_Neutral40, ${theme.color['Neutral/Neutral 40']})`;
    }
    switch ($status) {
      case 'error':
        return `var(--admiral-color-Error_Error60Main, ${theme.color['Error/Error 60 Main']})`;
      case 'success':
        return `var(--admiral-color-Success_Success50Main, ${theme.color['Success/Success 50 Main']})`;
    }
  }}
`;

export const InputBorderedDiv = styled.div<{ disabled?: boolean; $status?: InputStatus }>`
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

  border: 1px solid ${getBorderColor};
  ${(p) => p.disabled && 'border-color: transparent;'};
`;

const getHoverBorderColor = css<{ $status?: InputStatus }>`
  border-color: ${({ $status, theme }) => {
    if (!$status) {
      return `var(--admiral-color-Neutral_Neutral60, ${theme.color['Neutral/Neutral 60']})`;
    }
    switch ($status) {
      case 'error':
        return `var(--admiral-color-Error_Error70, ${theme.color['Error/Error 70']})`;
      case 'success':
        return `var(--admiral-color-Success_Success60, ${theme.color['Success/Success 60']})`;
    }
  }};
`;

const getFocusBorder = css<{ $status?: InputStatus }>`
  border: 2px solid
    ${({ $status, theme }) => {
      if (!$status) {
        return `var(--admiral-color-Primary_Primary60Main, ${theme.color['Primary/Primary 60 Main']})`;
      }
      switch ($status) {
        case 'error':
          return `var(--admiral-color-Error_Error60Main, ${theme.color['Error/Error 60 Main']})`;
        case 'success':
          return `var(--admiral-color-Success_Success50Main, ${theme.color['Success/Success 50 Main']})`;
      }
    }};
`;

export const BorderedDivStyles = css<{
  disabled?: boolean;
  readOnly?: boolean;
  $isLoading?: boolean;
  $status?: InputStatus;
}>`
  &:focus-within:not(:disabled) > ${InputBorderedDiv} {
    ${(p) => (p.disabled || p.readOnly ? 'border-color: transparent' : !p.$isLoading ? getFocusBorder : '')}
  }

  &:hover:not(:focus-within) > ${InputBorderedDiv} {
    ${(p) => (!p.$isLoading ? (p.disabled || p.readOnly ? 'transparent' : getHoverBorderColor) : '')};
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

  ${(props) => (props.$dimension === 's' ? typography['Body/Body 2 Long'] : typography['Body/Body 1 Long'])}

  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});

  &&&:disabled {
    color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
  }

  &::placeholder {
    color: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  }

  &:disabled::placeholder {
    color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
  }

  [data-disable-copying] & {
    user-select: none;
    &::selection {
      background-color: transparent;
    }
  }

  background-color: var(--admiral-color-Neutral_Neutral00, ${(p) => p.theme.color['Neutral/Neutral 00']});

  &&&:user-invalid + ${InputBorderedDiv} {
    border: 1px solid var(--admiral-color-Error_Error60Main, ${(p) => p.theme.color['Error/Error 60 Main']});
  }

  &&&:user-invalid:hover:not(:disabled) + ${InputBorderedDiv} {
    border: 1px solid var(--admiral-color-Error_Error70, ${(p) => p.theme.color['Error/Error 70']});
  }

  &&&:user-invalid:focus:not(:disabled) + ${InputBorderedDiv} {
    border: 2px solid var(--admiral-color-Error_Error60Main, ${(p) => p.theme.color['Error/Error 60 Main']});
  }

  [data-read-only] &&&,
  &&&:disabled {
    ${disabledColors}
  }

  [data-loading] &&&,
  &&&:disabled {
    cursor: not-allowed;
    pointer-events: none;
  }

  ${extraPadding}
  ${ieFixes}
`;

const IconPanel = styled.div<{ disabled?: boolean; $dimension?: ComponentDimension }>`
  position: absolute;
  top: 0;
  bottom: 0;

  display: flex;
  align-items: center;

  & svg {
    border-radius: var(--admiral-border-radius-Medium, ${(p) => mediumGroupBorderRadius(p.theme.shape)});
    display: block;
    width: ${iconSizeValue}px;

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline-offset: 2px;
      outline: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']}) solid 2px;
    }
  }
`;
const IconPanelBefore = styled(IconPanel)`
  left: 0;

  padding-left: ${horizontalPaddingValue}px;

  & > *:not(:first-child) {
    margin-right: 8px;
  }
`;
const IconPanelAfter = styled(IconPanel)`
  right: 0;

  padding-right: ${horizontalPaddingValue}px;

  & > *:not(:first-child) {
    margin-left: 8px;
  }
`;

const StyledContainer = styled(HeightLimitedContainer)<{
  disabled?: boolean;
  readOnly?: boolean;
  $isLoading?: boolean;
  $status?: InputStatus;
  $dimension?: ComponentDimension;
}>`
  ${BorderedDivStyles}
  ${(p) => (p.disabled ? 'cursor: not-allowed;' : p.$isLoading ? 'cursor: default;' : '')}
`;

function defaultHandleInput(newInputData: InputData | null): InputData {
  return newInputData || {};
}

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Делает высоту компонента больше или меньше обычной */
  dimension?: ComponentDimension;

  /**
   * @deprecated Помечено как deprecated в версии 8.13.0, будет удалено в 10.x.x версии.
   * Взамен используйте iconsAfter
   *
   * Иконки для отображения в правом углу поля
   **/
  icons?: ReactNode;

  /** Иконки для отображения в начале поля */
  iconsBefore?: ReactNode;

  /** Иконки для отображения в конце поля */
  iconsAfter?: ReactNode;

  /** Отображать иконку очистки поля */
  displayClearIcon?: boolean;

  /** Статус поля */
  status?: InputStatus;

  /** Отображать статус загрузки данных */
  isLoading?: boolean;

  /** Ref контейнера компонента */
  containerRef?: RefObject<HTMLDivElement>;

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

  /** Конфиг функция пропсов для контейнера в котором находится input. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  containerPropsConfig?: (
    props: React.ComponentProps<typeof StyledContainer> & DataAttributes,
  ) => Partial<React.ComponentProps<typeof StyledContainer>> & DataAttributes;

  /** Конфиг функция пропсов для кнопки очистки поля. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  clearInputIconButtonPropsConfig?: (
    props: React.ComponentProps<typeof InputIconButton>,
  ) => Partial<React.ComponentProps<typeof InputIconButton>> & DataAttributes;

  /** Конфиг функция пропсов для кнопки показать/скрыть значение при type="password". На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  visiblePasswordInputIconButtonPropsConfig?: (
    props: React.ComponentProps<typeof InputIconButton>,
  ) => Partial<React.ComponentProps<typeof InputIconButton>> & DataAttributes;
}

const nothing = () => {};

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      dimension = 'm',
      type,
      displayClearIcon,
      isLoading,
      status,
      handleInput = defaultHandleInput,
      containerRef,
      icons,
      iconsBefore,
      iconsAfter,
      children,
      className,
      style,
      placeholder,
      skeleton = false,
      showTooltip = true,
      disableCopying,
      containerPropsConfig = nothing,
      clearInputIconButtonPropsConfig = nothing,
      visiblePasswordInputIconButtonPropsConfig = nothing,
      ...props
    },
    ref,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const wrapperRef = containerRef || useRef<HTMLDivElement>(null);

    const iconAfterArray = Children.toArray(iconsAfter || icons);
    const iconBeforeArray = Children.toArray(iconsBefore);

    const [overflowActive, setOverflowActive] = useState<boolean>(false);
    const [tooltipVisible, setTooltipVisible] = useState<boolean>(false);
    const [innerValueState, setInnerValueState] = useState(props.defaultValue ?? undefined);
    const innerValue = props.value ?? innerValueState;

    useEffect(() => {
      if (checkOverflow(inputRef.current)) {
        setOverflowActive(true);
        return;
      }
      setOverflowActive(false);
    }, [tooltipVisible, setOverflowActive]);

    useLayoutEffect(() => {
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
    }, [setTooltipVisible]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setInnerValueState(e.currentTarget.value);
      props.onChange?.(e);
    };

    const [isPasswordVisible, setPasswordVisible] = useState(false);
    if (!props.readOnly && type === 'password') {
      const Icon = isPasswordVisible ? EyeOutlineSvg : EyeCloseOutlineSvg;

      const visiblePasswordInputIconButtonProps = {
        key: 'eye-icon',
        icon: Icon,
        onClick: () => {
          setPasswordVisible(!isPasswordVisible);
        },
        'aria-hidden': true,
      };

      iconAfterArray.push(
        <InputIconButton
          {...visiblePasswordInputIconButtonProps}
          {...visiblePasswordInputIconButtonPropsConfig(visiblePasswordInputIconButtonProps)}
        />,
      );
    }

    if (!props.readOnly && displayClearIcon && !!innerValue) {
      const clearInputIconButtonProps = {
        key: 'clear-icon',
        icon: CloseOutlineSvg,
        onMouseDown: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
          // запрет на перемещение фокуса при клике по иконке
          e.preventDefault();
        },
        onClick: () => {
          if (inputRef.current) {
            changeInputData(inputRef.current, { value: '' });
          }
        },
        'aria-hidden': true,
      };

      iconAfterArray.unshift(
        <InputIconButton
          {...clearInputIconButtonProps}
          {...clearInputIconButtonPropsConfig(clearInputIconButtonProps)}
        />,
      );
    }

    if (isLoading) {
      iconAfterArray.unshift(<Spinner key="loading-icon" dimension={dimension === 's' ? 'ms' : 'm'} />);
    }

    const iconsBeforeCount = iconBeforeArray.length;
    const iconsAfterCount = iconAfterArray.length;

    // const inputData = value !== undefined && value !== null ? handleInput({ value: String(value) }) : {};

    useLayoutEffect(() => {
      const nullHandledValue = handleInput(null);

      function oninput(this: HTMLInputElement, e: Event) {
        const { value, selectionStart, selectionEnd } = this;
        const currentInputData = { value, selectionStart, selectionEnd };

        const inputData = handleInput(currentInputData, e as InputEvent);

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
    }, [handleInput, placeholder]);

    // Эффект запрещающий выделение контента инпута с целью копирования
    useEffect(() => {
      function select(this: HTMLInputElement) {
        this.selectionEnd = this.selectionStart;
      }

      if (disableCopying && inputRef.current) {
        const node = inputRef.current;
        node.addEventListener('select', select, true);
        return () => node.removeEventListener('select', select, true);
      }
    }, [disableCopying]);

    const containerProps = {
      className: className,
      style: style,
      $dimension: dimension,
      ref: wrapperRef,
      disabled: props.disabled,
      readOnly: props.readOnly,
      $isLoading: isLoading,
      $status: status,
      'data-disabled': props.disabled ? true : undefined,
      'data-read-only': props.readOnly ? true : undefined,
      'data-loading': isLoading ? true : undefined,
      'data-status': status,
      $skeleton: skeleton,
      'data-disable-copying': disableCopying ? true : undefined,
    };
    return (
      <>
        <StyledContainer {...containerProps} {...containerPropsConfig(containerProps)}>
          <Input
            ref={refSetter(ref, inputRef)}
            {...props}
            className={'text-input-native-input'}
            onChange={handleChange}
            placeholder={placeholder}
            $dimension={dimension}
            $iconsAfterCount={iconsAfterCount}
            $iconsBeforeCount={iconsBeforeCount}
            type={type === 'password' && isPasswordVisible ? 'text' : type}
          />
          <InputBorderedDiv $status={status} disabled={props.disabled || props.readOnly} />
          {iconsBeforeCount > 0 && (
            <IconPanelBefore disabled={props.disabled} $dimension={dimension}>
              {iconBeforeArray}
            </IconPanelBefore>
          )}
          {iconsAfterCount > 0 && (
            <IconPanelAfter disabled={props.disabled} $dimension={dimension}>
              {iconAfterArray}
            </IconPanelAfter>
          )}
          {children}
        </StyledContainer>
        {showTooltip && tooltipVisible && overflowActive && (
          <Tooltip renderContent={() => inputRef?.current?.value || ''} targetElement={wrapperRef.current} />
        )}
      </>
    );
  },
);

TextInput.displayName = 'TextInput';
