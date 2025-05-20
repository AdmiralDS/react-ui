import * as React from 'react';
import type { HTMLAttributes } from 'react';
import { useRef, useState } from 'react';
import styled from 'styled-components';

import { ReactComponent as TimeSVG } from '@admiral-ds/icons/build/system/TimeOutline.svg';
import type { TextInputProps } from '../TextInput';
import { TextInput } from '../TextInput';
import { refSetter } from '#src/components/common/utils/refSetter';
import { defaultTimeInputHandle } from '#src/components/input/TimeInput/defaultTimeInputHandle';
import { changeInputData } from '#src/components/common/dom/changeInputData';
import { getTimeInMinutes, parseStringToTime, generateTimeArray } from './utils';
import { typography } from '#src/components/Typography';
import { InputIconButton } from '#src/components/InputIconButton';
import type { DropContainerStyles } from '#src/components/DropdownContainer';
import { StyledDropdownContainer } from '#src/components/DropdownContainer';
import type { RenderOptionProps } from '#src/components/Menu/MenuItem';
import { MenuItem } from '#src/components/Menu/MenuItem';
import { Menu } from '#src/components/Menu';

export interface SlotProps extends HTMLAttributes<HTMLElement>, RenderOptionProps {
  value: string;
}

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
const StyledTextInput = styled(TextInput)`
  min-width: 136px;
`;
export interface TimeInputProps extends Omit<TextInputProps, 'value' | 'iconsBefore'>, DropContainerStyles {
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
  /** Позволяет обрабатывать введенные значения */
  parser?: (time?: string) => string;
  /**
   * @deprecated Помечено как deprecated в версии 8.10.0, будет удалено в 10.x.x версии.
   * Взамен используйте alignSelf
   *
   * Позволяет выравнивать позицию дропдаун контейнера относительно селекта.
   * Принимает стандартные значения css свойства align-self (auto | flex-start | flex-end | center | baseline | stretch)
   **/
  alignDropdown?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
}

export const TimeInput = React.forwardRef<HTMLInputElement, TimeInputProps>(
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
      icons,
      iconsAfter,
      alignDropdown = 'flex-end',
      alignSelf = 'flex-end',
      skeleton = false,
      dropContainerCssMixin,
      dropContainerClassName,
      dropContainerStyle,
      ...props
    },
    ref,
  ) => {
    const handleInput = props.handleInput || defaultTimeInputHandle;
    const [timeValue, setTimeValue] = useState<string>('');
    const [activeOption, setActiveOption] = React.useState<string | undefined>('');
    const inputContainerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const [isOpened, setIsOpened] = useState<boolean>(false);

    const menuDimension = dimension === 'xl' ? 'l' : dimension;

    const handleButtonClick = (e: React.MouseEvent) => {
      e.preventDefault();
      if (inputRef.current !== document.activeElement) {
        inputRef.current?.focus();
      }
      if (!isOpened) {
        const inputTimeValue = parser(inputRef.current?.value);
        setTimeValue(inputTimeValue);
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

    const iconArray = React.Children.toArray(iconsAfter || icons);
    if (!props.readOnly) {
      iconArray.push(<InputIconButton icon={icon} onMouseDown={handleButtonClick} tabIndex={0} />);
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
        setTimeValue(option);
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

    React.useEffect(() => {
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

    return (
      <StyledTextInput
        {...props}
        ref={refSetter(ref, inputRef)}
        handleInput={handleInput}
        iconsAfter={iconArray}
        containerRef={inputContainerRef}
        disabled={disabled}
        dimension={dimension}
        skeleton={skeleton}
      >
        {availableSlots && isOpened && !disabled && !skeleton && (
          <StyledDropdownContainer
            targetElement={inputRef.current}
            alignSelf={alignDropdown || alignSelf}
            onClickOutside={clickOutside}
            dropContainerCssMixin={dropContainerCssMixin}
            className={dropContainerClassName}
            style={dropContainerStyle}
          >
            <StyledMenu
              selected={timeValue}
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
      </StyledTextInput>
    );
  },
);

TimeInput.displayName = 'TimeInput';
