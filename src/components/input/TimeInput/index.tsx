import * as React from 'react';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as TimeSVG } from '@admiral-ds/icons/build/system/TimeOutline.svg';
import { TextInput, TextInputProps } from '../TextInput';
import { refSetter } from '#src/components/common/utils/refSetter';
import { defaultTimeInputHandle } from '#src/components/input/TimeInput/defaultTimeInputHandle';
import { changeInputData } from '#src/components/common/dom/changeInputData';
import { Dropdown } from '#src/components/Dropdown';
import { Slot, SlotProps } from './Slot';
import { getTimeInMinutes, parseStringToTime } from './utils';
import { typography } from '#src/components/Typography';

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

const Icon = styled(TimeSVG)`
  & *[fill^='#'] {
    fill: ${(p) => p.theme.color['Neutral/Neutral 50']};
  }

  [disabled] & {
    pointer-events: none;
  }

  &:hover {
    cursor: pointer;
  }

  &:hover *[fill^='#'] {
    fill: ${(p) => p.theme.color['Primary/Primary 70']};
  }
`;

const SlotContainer = styled.ul`
  pointer-events: initial;
  padding: 8px 0;
  margin: 0;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: ${(p) => p.theme.color['Special/Elevated BG']};
  border-radius: 4px;
  ${(p) => p.theme.shadow['Shadow 08']}
  flex: 0 0 auto;
  ${typography['Body/Body 1 Long']};
  &[data-dimension='xl'] {
    width: 84px;
    height: 288px;
  }
  &[data-dimension='m'] {
    width: 84px;
    height: 240px;
  }
  &[data-dimension='s'] {
    ${typography['Body/Body 2 Long']};
    width: 68px;
    height: 192px;
  }
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

  parser?: (time?: string) => string;
}

export const TimeInput = React.forwardRef<HTMLInputElement, TimeInputProps>(
  (
    {
      startTime,
      endTime,
      value = '',
      dimension = 'm',
      disabled = false,
      disabledSlots = [],
      parser = parseStringToTime,
      icon,
      icons,
      ...props
    },
    ref,
  ) => {
    const handleInput = props.handleInput || defaultTimeInputHandle;
    const [timeValue, setTimeValue] = useState<string | null>(null);
    const [activeIndex, setActiveIndex] = React.useState(0);
    const inputContainerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const [isOpened, setIsOpened] = useState<boolean>(false);

    const handleButtonClick = () => {
      const timeValue = parser(inputRef.current?.value);
      setTimeValue(timeValue);
      setIsOpened(!isOpened);
    };

    const iconArray = React.Children.toArray(icons);
    const TimeIcon = icon || Icon;
    iconArray.push(<TimeIcon onClick={handleButtonClick} tabIndex={0} />);

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

    const handleClick = () => {
      if (inputRef.current) {
        if (availableSlots && !availableSlots[activeIndex].disabled && isOpened) {
          const slotValue = availableSlots[activeIndex].value;
          setTimeValue(slotValue);
          if (!slotValue) {
            changeInputData(inputRef.current, { value: '' });
            return;
          }
          changeInputData(inputRef.current, { value: slotValue });
          setIsOpened(false);
        } else {
          changeInputData(inputRef.current, { value });
        }
      }
    };

    const handleKeyUp = (e: React.KeyboardEvent) => {
      if (!availableSlots) return;
      const activeOption = document.querySelector('[aria-selected="true"]');
      switch (e.key) {
        case 'Enter':
          handleClick();
          break;
        case 'ArrowUp':
          if (!isOpened) {
            setIsOpened(true);
          }
          activeOption?.scrollIntoView(false);
          if (activeIndex <= 0) {
            setActiveIndex(availableSlots.length - 1);
          } else {
            setActiveIndex(activeIndex - 1);
          }
          break;
        case 'ArrowDown':
          if (!isOpened) {
            setIsOpened(true);
          }
          activeOption?.scrollIntoView(true);
          if (activeIndex >= availableSlots.length - 1) {
            setActiveIndex(0);
          } else {
            setActiveIndex(activeIndex + 1);
          }
          break;
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' && isOpened) {
        e.preventDefault();
      }
    };

    const clickOutside = () => {
      setIsOpened(false);
    };

    return (
      <TextInput
        {...props}
        ref={refSetter(ref, inputRef)}
        handleInput={handleInput}
        icons={iconArray}
        containerRef={inputContainerRef}
        value={value}
        disabled={disabled}
        dimension={dimension}
        onKeyUp={(...p) => {
          props.onKeyUp?.(...p);
          handleKeyUp(...p);
        }}
        onKeyDown={(...p) => {
          props.onKeyDown?.(...p);
          handleKeyDown(...p);
        }}
      >
        {availableSlots && isOpened && !disabled && (
          <Dropdown targetRef={inputRef} alignSelf="flex-end" onClickOutside={clickOutside}>
            <SlotContainer data-dimension={dimension}>
              {availableSlots.map((slot, index) => (
                <Slot
                  key={index}
                  active={index === activeIndex}
                  value={slot.value}
                  data-dimension={dimension}
                  selected={timeValue === slot.value}
                  aria-selected={index === activeIndex}
                  disabled={slot.disabled}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={handleClick}
                  onKeyUp={handleKeyUp}
                >
                  {slot.value}
                </Slot>
              ))}
            </SlotContainer>
          </Dropdown>
        )}
      </TextInput>
    );
  },
);

TimeInput.displayName = 'TimeInput';
