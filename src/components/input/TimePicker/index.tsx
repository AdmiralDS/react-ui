import * as React from 'react';
import type { HTMLAttributes, ComponentProps } from 'react';
import { useRef, useState } from 'react';
const { useEffect, useLayoutEffect } = React;
import styled, { type DataAttributes } from 'styled-components';

import { ReactComponent as TimeSVG } from '@admiral-ds/icons/build/system/TimeOutline.svg';
import { ReactComponent as CloseOutlineSvg } from '@admiral-ds/icons/build/service/CloseOutline.svg';
import type { TextInputProps } from '../TextInput';
import { InputLine } from '../InputLine';
import { InputBox } from '../InputBox';
import { refSetter } from '#src/components/common/utils/refSetter';
import { keyboardKey } from '../../common/keyboardKey';
import { defaultTimePickerHandle } from '#src/components/input/TimePicker/defaultTimePickerHandle';
import { changeInputData, isInputDataDifferent } from '#src/components/common/dom/changeInputData';
import { getTimeInMinutes, parseStringToTime, generateTimeArray } from './utils';
import { typography } from '#src/components/Typography';
import { InputIconButton } from '#src/components/InputIconButton';
import type { DropContainerStyles } from '#src/components/DropdownContainer';
import { StyledDropdownContainer } from '#src/components/DropdownContainer';
import type { RenderOptionProps } from '#src/components/Menu/MenuItem';
import { MenuItem } from '#src/components/Menu/MenuItem';
import { Menu } from '#src/components/Menu';
import { mediumGroupBorderRadius } from '#src/components/themes/borderRadius';
import type { ComponentDimension, InputStatus } from '#src/components/input/types';
import { iconSizeValue, horizontalPaddingValue } from '../TimePickerIcons';
import { Spinner } from '#src/components/Spinner';
import { Tooltip } from '#src/components/Tooltip';
import { checkOverflow } from '#src/components/common/utils/checkOverflow';

interface SlotProps extends HTMLAttributes<HTMLElement>, RenderOptionProps {
  value: string;
}

type SizeProps = { $dimension?: ComponentDimension };

export type InputBoxProps = ComponentProps<'div'> & SizeProps;

const defaultSlots: SlotProps[] = generateTimeArray();

const StyledMenu = styled(Menu)`
  &[data-dimension='xl'] {
    ${typography['Body/Body 1 Long']};
    height: 288px;
  }
  &[data-dimension='m'] {
    ${typography['Body/Body 1 Long']};
    height: 240px;
  }
  &[data-dimension='s'] {
    ${typography['Body/Body 2 Long']};
    height: 192px;
  }
`;

const StyledMenuItem = styled(MenuItem)`
  justify-content: center;
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
const IconPanelAfter = styled(IconPanel)`
  right: 0;
  padding-right: ${horizontalPaddingValue}px;
  gap: 8px;
`;

export interface TimePickerProps
  extends Omit<
      TextInputProps,
      | 'value'
      | 'iconsBefore'
      | 'icons'
      | 'containerPropsConfig'
      | 'clearInputIconButtonPropsConfig'
      | 'visiblePasswordInputIconButtonPropsConfig'
    >,
    DropContainerStyles {
  /** Выбранное значение времени */
  value?: string;
  /** Начало временного диапазона */
  startTime?: string;
  /** Конец временного диапазона */
  endTime?: string;
  /** Задизейбленный инпут */
  disabled?: boolean;
  /** Возможные значения временного диапозона */
  slots?: SlotProps[];
  /** Задизейбленное значение временного диапозона */
  disabledSlots?: string[];
  /** Альтернативная иконка компонента */
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  /** Отображать иконку очистки поля */
  displayClearIcon?: boolean;
  /** Статус поля */
  status?: InputStatus;
  /** Отображать статус загрузки данных */
  isLoading?: boolean;
  /** Отображать заглушку */
  skeleton?: boolean;
  /** Позволяет обрабатывать введенные значения */
  parser?: (time?: string) => string;
  /** Наличие этого атрибута отключает возможность выделения и копирования значения поля */
  disableCopying?: boolean;
  /** Отображение тултипа, по умолчанию true */
  showTooltip?: boolean;
  /** Ref контейнера компонента */
  containerRef?: React.RefObject<HTMLDivElement>;
  /** Позволяет выравнивать позицию дропдаун контейнера относительно селекта */
  alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';

  /** Конфиг функция пропсов для контейнера InputBox. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  containerPropsConfig?: (
    props: React.ComponentProps<typeof InputBox> & DataAttributes,
  ) => Partial<React.ComponentProps<typeof InputBox>> & DataAttributes;

  /** Конфиг функция пропсов для InputLine. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  inputLinePropsConfig?: (
    props: React.ComponentProps<typeof InputLine> & DataAttributes,
  ) => Partial<React.ComponentProps<typeof InputLine>> & DataAttributes;

  /** Конфиг функция пропсов для кнопки очистки поля. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  clearInputIconButtonPropsConfig?: (
    props: React.ComponentProps<typeof InputIconButton>,
  ) => Partial<React.ComponentProps<typeof InputIconButton>> & DataAttributes;

  /** Конфиг функция пропсов для кнопки с иконкой времени. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  timeInputIconButtonPropsConfig?: (
    props: React.ComponentProps<typeof InputIconButton>,
  ) => Partial<React.ComponentProps<typeof InputIconButton>> & DataAttributes;
}

export const TimePicker = React.forwardRef<HTMLInputElement, TimePickerProps>(
  (
    {
      startTime,
      endTime,
      dimension = 'm',
      disabled = false,
      slots = defaultSlots,
      disabledSlots = [],
      parser = parseStringToTime,
      icon = TimeSVG,
      iconsAfter,
      displayClearIcon,
      isLoading,
      status,
      disableCopying,
      showTooltip = true,
      containerRef,
      alignSelf = 'flex-end',
      skeleton = false,
      dropContainerCssMixin,
      dropContainerClassName,
      dropContainerStyle,
      className,
      containerPropsConfig = () => ({}),
      inputLinePropsConfig = () => ({}),
      clearInputIconButtonPropsConfig = () => ({}),
      timeInputIconButtonPropsConfig = () => ({}),
      ...props
    },
    ref,
  ) => {
    const handleInput = props.handleInput || defaultTimePickerHandle;
    const [innerValueState, setInnerValueState] = useState(String(props.defaultValue ?? ''));
    const innerValue = String(props.value ?? innerValueState);
    const [activeOption, setActiveOption] = React.useState<string | undefined>('');
    const inputContainerRef = containerRef || useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const [overflowActive, setOverflowActive] = useState<boolean>(false);
    const [tooltipVisible, setTooltipVisible] = useState<boolean>(false);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      const code = keyboardKey.getCode(event);
      if ((event.ctrlKey || event.metaKey) && (code === keyboardKey.z || code === keyboardKey.Z)) {
        event.preventDefault();
      }
      if (code === keyboardKey.Escape && isOpened) {
        setIsOpened(false);
        event.preventDefault();
        event.stopPropagation();
      }
      props.onKeyDown?.(event);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.currentTarget.value;
      setInnerValueState(inputValue);
      props.onChange?.(e);
    };

    // Валидация disabledSlots: проверяем, является ли введенное значение в списке disabledSlots
    const isValidValue = React.useMemo(() => {
      if (!innerValue || !disabledSlots?.length) return true;
      const parsedValue = parser(innerValue);
      // Если значение невалидно (не парсится) или пустое, считаем валидным
      if (!parsedValue) return true;
      return !disabledSlots.includes(parsedValue);
    }, [innerValue, disabledSlots, parser]);

    // Вычисляем финальный status: приоритет у явно переданного status, иначе error если значение в disabledSlots
    const computedStatus = React.useMemo(() => {
      if (status) return status; // Приоритет у явно переданного status
      if (!isValidValue && innerValue) return 'error';
      return undefined;
    }, [status, isValidValue, innerValue]);

    const menuDimension = dimension === 'xl' ? 'l' : dimension;

    useLayoutEffect(() => {
      const nullHandledValue = handleInput(null);

      function oninput(this: HTMLInputElement, e: Event) {
        const { value, selectionStart, selectionEnd } = this;
        const currentInputData = { value, selectionStart, selectionEnd };

        const inputData = handleInput(currentInputData, e as InputEvent);

        /*
        сравнение текущего состояния ввода с уже обработанным,
        если существенных изменений нет — пропуск changeInputData,
        чтобы не уйти в бесконечный цикл
        */
        if (!isInputDataDifferent(currentInputData, inputData)) {
          return;
        }

        if (!inputData || inputData.value === value) {
          return;
        }

        if (!isInputDataDifferent(nullHandledValue, inputData)) {
          changeInputData(this, { ...inputData, value: '' });
        } else {
          changeInputData(this, inputData);
        }
      }

      // Чтение selectionStart в Safari при type='date' вызывает ошибку
      if (inputRef.current) {
        const node = inputRef.current;
        node.addEventListener('input', oninput);

        const { value, selectionStart, selectionEnd } = node;
        const currentInputData = { value, selectionStart, selectionEnd };
        const inputData = handleInput(currentInputData);

        /*
        сравнение текущего состояния ввода с уже обработанным,
        если существенных изменений нет — пропуск changeInputData,
        чтобы не уйти в бесконечный цикл
        */
        if (!isInputDataDifferent(currentInputData, inputData)) {
          return;
        }

        if (!inputData || inputData.value === value) {
          return;
        }

        if (!isInputDataDifferent(nullHandledValue, inputData)) {
          changeInputData(node, { ...inputData, value: '' });
        } else {
          changeInputData(node, inputData);
        }

        return () => {
          node.removeEventListener('input', oninput);
        };
      }
    }, [handleInput]);

    const handleButtonClick = (e: React.MouseEvent) => {
      e.preventDefault();
      if (inputRef.current !== document.activeElement) {
        inputRef.current?.focus();
      }
      if (!isOpened) {
        const inputTimeValue = parser(inputRef.current?.value);
        if (availableSlots) {
          if (availableSlots.find((slot) => slot.value === inputTimeValue)) {
            setActiveOption(inputTimeValue);
          } else {
            setActiveOption(availableSlots[0].value);
          }
        } else {
          setActiveOption('');
        }
      }
      setIsOpened(!isOpened);
    };

    const iconArray = React.Children.toArray(iconsAfter);

    if (!props.readOnly && displayClearIcon && !!innerValue) {
      const clearInputIconButtonProps = {
        icon: CloseOutlineSvg,
        key: 'clear-icon',
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

      iconArray.unshift(
        <InputIconButton
          {...clearInputIconButtonProps}
          {...clearInputIconButtonPropsConfig(clearInputIconButtonProps)}
        />,
      );
    }

    if (!props.readOnly) {
      const timeInputIconButtonProps = {
        icon,
        onMouseDown: handleButtonClick,
        tabIndex: 0,
      };

      iconArray.push(
        <InputIconButton
          {...timeInputIconButtonProps}
          {...timeInputIconButtonPropsConfig(timeInputIconButtonProps)}
          key="time-icon"
        />,
      );
    }

    if (isLoading) {
      iconArray.unshift(<Spinner key="loading-icon" dimension={dimension === 's' ? 'ms' : 'm'} />);
    }

    const disableSlots = (defaultArray: SlotProps[], disabledArr: string[]) => {
      if (disabledArr.length === 1) {
        const disabledTime = defaultArray.find((slot) => slot.value === disabledArr[0]);
        if (disabledTime) {
          disabledTime.disabled = true;
          return [...defaultArray, disabledTime];
        }
      } else {
        return defaultArray.map((slot) => ({ ...slot, disabled: disabledArr.includes(slot.value) }));
      }
    };

    const filterTime = (t: string, start?: string | null, end?: string | null) => {
      if (start && !end) {
        if (getTimeInMinutes(start) <= getTimeInMinutes(t)) {
          return t;
        }
      } else if (!start && end) {
        if (getTimeInMinutes(t) <= getTimeInMinutes(end)) {
          return t;
        }
      } else if (start && end) {
        if (getTimeInMinutes(start) <= getTimeInMinutes(t) && getTimeInMinutes(t) <= getTimeInMinutes(end)) {
          return t;
        }
      }
    };

    const availableSlots =
      !disabledSlots?.length && (startTime || endTime || (startTime && endTime))
        ? slots.filter((slot) => filterTime(slot.value, startTime, endTime))
        : disabledSlots?.length > 0 && !(startTime || endTime || (startTime && endTime))
          ? disableSlots(slots, disabledSlots)
          : disabledSlots?.length > 0 && (startTime || endTime || (startTime && endTime))
            ? disableSlots(slots, disabledSlots)?.filter((slot) => filterTime(slot.value, startTime, endTime))
            : slots;

    const handleSelectOption = (option: string) => {
      if (inputRef.current) {
        setInnerValueState(option);
        changeInputData(inputRef.current, { value: option });
        setIsOpened(false);
      }
    };

    const clickOutside = (e: Event) => {
      if (e.target && inputContainerRef.current?.contains(e.target as Node)) {
        return;
      }
      setIsOpened(false);
    };

    const model = React.useMemo(() => {
      if (availableSlots) {
        return availableSlots.map((slot, index) => ({
          id: slot.value,
          render: (options: RenderOptionProps) => (
            <StyledMenuItem
              key={index}
              dimension={menuDimension}
              data-dimension={dimension}
              disabled={slot.disabled}
              {...options}
            >
              {slot.value}
            </StyledMenuItem>
          ),
          disabled: slot.disabled,
        }));
      } else {
        return [];
      }
    }, [availableSlots, dimension]);

    const selectedPos = React.useRef<number | undefined>();

    useEffect(() => {
      let focused = false;

      function handleClick() {
        if (focused) return;

        const input = inputRef.current;

        focused = true;

        if (input && input.selectionStart !== null && input.selectionStart === input.selectionEnd) {
          const result = /[^:|\d]/gm.exec(input.value);
          if (result) {
            const notDigitalPos = result.index;
            const position = notDigitalPos < input.selectionStart ? notDigitalPos : input.selectionStart;
            selectedPos.current = undefined;
            if (position >= 0) {
              input.selectionStart = position;
              input.selectionEnd = position;
            }
          }
        }
      }

      function handleBlur() {
        focused = false;
      }

      inputRef.current?.parentNode?.addEventListener('click', handleClick);
      inputRef.current?.addEventListener('blur', handleBlur);

      return () => {
        inputRef.current?.parentNode?.removeEventListener('click', handleClick);
        inputRef.current?.removeEventListener('blur', handleBlur);
      };
    }, []);

    useEffect(() => {
      if (checkOverflow(inputRef.current)) {
        setOverflowActive(true);
        return;
      }
      setOverflowActive(false);
    }, [tooltipVisible, setOverflowActive]);

    useLayoutEffect(() => {
      function show() {
        if (inputRef.current && !disabled && !props.readOnly) {
          setTooltipVisible(true);
        }
      }

      function hide() {
        setTooltipVisible(false);
      }

      const element = inputRef.current;
      if (element) {
        element.addEventListener('mouseenter', show);
        element.addEventListener('focus', show);
        element.addEventListener('mouseleave', hide);
        element.addEventListener('blur', hide);
        return () => {
          element.removeEventListener('mouseenter', show);
          element.removeEventListener('focus', show);
          element.removeEventListener('mouseleave', hide);
          element.removeEventListener('blur', hide);
        };
      }
    }, [disabled, props.readOnly]);

    useEffect(() => {
      if (disableCopying) {
        const element = inputRef.current;
        if (element) {
          const handleSelectStart = (e: Event) => e.preventDefault();
          const handleDragStart = (e: Event) => e.preventDefault();
          const handleDrop = (e: Event) => e.preventDefault();
          const handleDragOver = (e: Event) => e.preventDefault();

          element.addEventListener('selectstart', handleSelectStart);
          element.addEventListener('dragstart', handleDragStart);
          element.addEventListener('drop', handleDrop);
          element.addEventListener('dragover', handleDragOver);

          return () => {
            element.removeEventListener('selectstart', handleSelectStart);
            element.removeEventListener('dragstart', handleDragStart);
            element.removeEventListener('drop', handleDrop);
            element.removeEventListener('dragover', handleDragOver);
          };
        }
      }
    }, [disableCopying]);

    const containerProps = {
      $dimension: dimension,
      $status: computedStatus,
      disabled: disabled,
      readOnly: props.readOnly,
      $isLoading: isLoading,
      $skeleton: skeleton,
      $iconsAfterCount: iconArray.length,
      'data-disabled': disabled ? true : undefined,
      'data-read-only': props.readOnly ? true : undefined,
      'data-loading': isLoading ? true : undefined,
      'data-skeleton': skeleton ? true : undefined,
      'data-status': computedStatus,
      'data-disable-copying': disableCopying ? true : undefined,
      className: 'time-picker-container',
      ref: inputContainerRef,
    };

    const inputLineProps = {
      ...props,
      className: className + ' time-picker-native-input',
      ref: refSetter(ref, inputRef),
      placeholder: 'чч:мм',
      dataPlaceholder: 'чч:мм',
      onChange: handleChange,
      onKeyDown: handleKeyDown,
      value: innerValue,
      disabled: disabled,
      readOnly: props.readOnly,
    };

    return (
      <>
        <InputBox {...containerProps} {...containerPropsConfig(containerProps)}>
          <InputLine {...inputLineProps} {...inputLinePropsConfig(inputLineProps)} />
          {iconArray.length > 0 && (
            <IconPanelAfter disabled={disabled} $dimension={dimension} className="time-picker-icon-panel">
              {iconArray}
            </IconPanelAfter>
          )}
        </InputBox>
        {availableSlots && isOpened && !disabled && !props.readOnly && !skeleton && (
          <StyledDropdownContainer
            targetElement={inputContainerRef.current}
            alignSelf={alignSelf}
            onClickOutside={clickOutside}
            dropContainerCssMixin={dropContainerCssMixin}
            className={dropContainerClassName}
            style={dropContainerStyle}
          >
            <StyledMenu
              selected={innerValue}
              active={activeOption}
              model={model}
              dimension={menuDimension}
              data-dimension={dimension}
              onSelectItem={handleSelectOption}
              onActivateItem={setActiveOption}
              preventFocusSteal
            />
          </StyledDropdownContainer>
        )}
        {showTooltip && tooltipVisible && overflowActive && (
          <Tooltip renderContent={() => inputRef?.current?.value || ''} targetElement={inputContainerRef.current} />
        )}
      </>
    );
  },
);

TimePicker.displayName = 'TimePicker';
