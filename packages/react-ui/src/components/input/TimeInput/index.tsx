import * as React from 'react';
import type { CSSProperties, HTMLAttributes } from 'react';
import { useRef, useState } from 'react';
import type { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
import styled from 'styled-components';
import { ReactComponent as TimeSVG } from '@admiral-ds/icons/build/system/TimeOutline.svg';
import type { TextInputProps } from '../TextInput';
import { TextInput } from '../TextInput';
import { refSetter } from '#src/components/common/utils/refSetter';
import { defaultTimeInputHandle } from '#src/components/input/TimeInput/defaultTimeInputHandle';
import { changeInputData } from '#src/components/common/dom/changeInputData';
import { getTimeInMinutes, parseStringToTime } from './utils';
import { typography } from '#src/components/Typography';
import { InputIconButton } from '#src/components/InputIconButton';
import { StyledDropdownContainer } from '#src/components/DropdownContainer';
import type { RenderOptionProps } from '#src/components/Menu/MenuItem';
import { MenuItem } from '#src/components/Menu/MenuItem';
import { Menu } from '#src/components/Menu';

export interface SlotProps extends HTMLAttributes<HTMLDivElement>, RenderOptionProps {
  value: string;
}

const slots: SlotProps[] = [
  { value: '00:00', disabled: false },
  { value: '00:30', disabled: false },
  { value: '01:00', disabled: false },
  { value: '01:30', disabled: false },
  { value: '02:00', disabled: false },
  { value: '02:30', disabled: false },
  { value: '03:00', disabled: false },
  { value: '03:30', disabled: false },
  { value: '04:00', disabled: false },
  { value: '04:30', disabled: false },
  { value: '05:00', disabled: false },
  { value: '05:30', disabled: false },
  { value: '06:00', disabled: false },
  { value: '06:30', disabled: false },
  { value: '07:00', disabled: false },
  { value: '07:30', disabled: false },
  { value: '08:00', disabled: false },
  { value: '08:30', disabled: false },
  { value: '09:00', disabled: false },
  { value: '09:30', disabled: false },
  { value: '10:00', disabled: false },
  { value: '10:30', disabled: false },
  { value: '11:00', disabled: false },
  { value: '11:30', disabled: false },
  { value: '12:00', disabled: false },
  { value: '12:30', disabled: false },
  { value: '13:00', disabled: false },
  { value: '13:30', disabled: false },
  { value: '14:00', disabled: false },
  { value: '14:30', disabled: false },
  { value: '15:00', disabled: false },
  { value: '15:30', disabled: false },
  { value: '16:00', disabled: false },
  { value: '16:30', disabled: false },
  { value: '17:00', disabled: false },
  { value: '17:30', disabled: false },
  { value: '18:00', disabled: false },
  { value: '18:30', disabled: false },
  { value: '19:00', disabled: false },
  { value: '19:30', disabled: false },
  { value: '20:00', disabled: false },
  { value: '20:30', disabled: false },
  { value: '21:00', disabled: false },
  { value: '21:30', disabled: false },
  { value: '22:00', disabled: false },
  { value: '22:30', disabled: false },
  { value: '23:00', disabled: false },
  { value: '23:30', disabled: false },
];

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
export interface TimeInputProps extends Omit<TextInputProps, 'value'> {
  /** Выбранное значение времени */
  value?: string;
  /** Начало временного диапазона */
  startTime?: string;
  /** Конец временного диапазона */
  endTime?: string;
  /** Задизейбленный инпут */
  disabled?: boolean;
  /** Задизейбленное значение временного диапозона */
  disabledSlots?: string[];
  /** Альтернативная иконка компонента */
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  /** Позволяет обрабатывать введенные значения */
  parser?: (time?: string) => string;
  /**
   * Позволяет выравнивать позицию дропдаун контейнера относительно селекта.
   * Принимает стандартные значения css свойства align-self (auto | flex-start | flex-end | center | baseline | stretch)
   */
  alignDropdown?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  /** Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css  */
  dropContainerCssMixin?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  /** Позволяет добавлять класс на контейнер выпадающего меню  */
  dropContainerClassName?: string;
  /** Позволяет добавлять стили на контейнер выпадающего меню  */
  dropContainerStyle?: CSSProperties;
}

export const TimeInput = React.forwardRef<HTMLInputElement, TimeInputProps>(
  (
    {
      startTime,
      endTime,
      dimension = 'm',
      disabled = false,
      disabledSlots = [],
      parser = parseStringToTime,
      icon = TimeSVG,
      icons,
      alignDropdown = 'flex-end',
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

    const iconArray = React.Children.toArray(icons);
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

    return (
      <StyledTextInput
        {...props}
        ref={refSetter(ref, inputRef)}
        handleInput={handleInput}
        icons={iconArray}
        containerRef={inputContainerRef}
        disabled={disabled}
        dimension={dimension}
        skeleton={skeleton}
      >
        {availableSlots && isOpened && !disabled && !skeleton && (
          <StyledDropdownContainer
            targetRef={inputRef}
            alignSelf={alignDropdown}
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
            />
          </StyledDropdownContainer>
        )}
      </StyledTextInput>
    );
  },
);

TimeInput.displayName = 'TimeInput';
