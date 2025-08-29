import * as React from 'react';
import type { HTMLAttributes, ComponentProps } from 'react';
import { useRef, useState, useEffect, useLayoutEffect } from 'react';
import styled, { css } from 'styled-components';

import { ReactComponent as TimeSVG } from '@admiral-ds/icons/build/system/TimeOutline.svg';
import { ReactComponent as CloseOutlineSvg } from '@admiral-ds/icons/build/service/CloseOutline.svg';
import type { TextInputProps } from '../TextInput';
import { InputLine } from '../InputLine';
import { refSetter } from '#src/components/common/utils/refSetter';
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
import type { ComponentDimension, ExtraProps, InputStatus } from '#src/components/input/types';

interface SlotProps extends HTMLAttributes<HTMLElement>, RenderOptionProps {
  value: string;
}

type SizeProps = {
  $dimension?: ComponentDimension;
};

export type InputBoxProps = ComponentProps<'div'> & SizeProps;

const defaultSlots: SlotProps[] = generateTimeArray();

const iconSizeValue = (props: SizeProps) => {
  switch (props.$dimension) {
    case 'xl':
      return 24;
    case 's':
      return 20;
    default:
      return 24;
  }
};
const horizontalPaddingValue = (props: SizeProps) => {
  switch (props.$dimension) {
    case 'xl':
      return 16;
    case 's':
      return 12;
    default:
      return 16;
  }
};

const extraPadding = css<Omit<ExtraProps, '$iconsBeforeCount'>>`
  padding-right: ${(props) =>
    horizontalPaddingValue(props) + (iconSizeValue(props) + 8) * (props.$iconsAfterCount ?? 0)}px;
`;

const dimensionFocusBoxStyles = {
  xl: `
    height: 56px;
    & * {
      line-height: 56px;
    }
  `,
  s: `
    height: 32px;
    padding-inline-start: 12px;
    padding-inline-end: 12px;
    & * {
      ${typography['Body/Body 2 Long']}
      line-height: 32px;
    }
  `,
  m: ``,
};

export const FocusBox = styled.div<
  Omit<ExtraProps, '$iconsBeforeCount'> &
    SizeProps & { disabled?: boolean; $status?: InputStatus; readOnly?: boolean; $isLoading?: boolean }
>`
  cursor: text;
  display: inline-flex;
  overflow: hidden;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: stretch;
  width: 280px;
  min-width: 136px;
  height: 40px;
  padding: 0;
  padding-inline-start: 16px;
  padding-inline-end: 16px;
  transition: box-shadow 0.3s ease-in-out;
  box-sizing: border-box;
  border-radius: 4px;
  background: transparent;
  /* https://stackoverflow.com/questions/69658462/inset-box-shadow-visual-artifacts-in-google-chrome */
  transform: translate3d(0, 0, 0);
  box-shadow: 0px 0px 0px 1px var(--admiral-color-Neutral_Neutral40, ${(p) => p.theme.color['Neutral/Neutral 40']})
    inset;

  &:hover:not(:focus-within) {
    box-shadow: 0px 0px 0px 1px var(--admiral-color-Neutral_Neutral60, ${(p) => p.theme.color['Neutral/Neutral 60']})
      inset;
  }
  &:focus-within {
    box-shadow: 0px 0px 0px 2px
      var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']}) inset;
  }
  ${(p) => p.disabled && 'border-color: transparent;'};

  & * {
    ${typography['Body/Body 1 Long']}
    line-height: 40px;
  }

  ${({ $dimension }) => $dimension && dimensionFocusBoxStyles[$dimension]}
  ${extraPadding}
`;

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
  /** Позволяет обрабатывать введенные значения */
  parser?: (time?: string) => string;
  /** Позволяет выравнивать позицию дропдаун контейнера относительно селекта */
  alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
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
      alignSelf = 'flex-end',
      skeleton = false,
      dropContainerCssMixin,
      dropContainerClassName,
      dropContainerStyle,
      ...props
    },
    ref,
  ) => {
    const handleInput = props.handleInput || defaultTimePickerHandle;
    const [timeValue, setTimeValue] = useState<string>('');
    const [activeOption, setActiveOption] = React.useState<string | undefined>('');
    const inputContainerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const [isOpened, setIsOpened] = useState<boolean>(false);

    const menuDimension = dimension === 'xl' ? 'l' : dimension;

    useLayoutEffect(() => {
      const nullHandledValue = handleInput(null);

      function oninput(this: HTMLInputElement, e: Event) {
        const { value, selectionStart, selectionEnd } = this;
        const currentInputData = { value, selectionStart, selectionEnd };

        const inputData = handleInput(currentInputData, e as InputEvent);

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

    const iconArray = React.Children.toArray(iconsAfter);

    if (!props.readOnly && displayClearIcon && !!timeValue) {
      iconArray.unshift(
        <InputIconButton
          icon={CloseOutlineSvg}
          key="clear-icon"
          onMouseDown={(e) => {
            // запрет на перемещение фокуса при клике по иконке
            e.preventDefault();
          }}
          onClick={() => {
            if (inputRef.current) {
              changeInputData(inputRef.current, { value: '' });
            }
          }}
          aria-hidden
        />,
      );
    }

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

    return (
      <>
        <FocusBox
          $dimension={dimension}
          $iconsAfterCount={iconArray.length}
          $status={status}
          disabled={disabled}
          readOnly={props.readOnly}
          $isLoading={isLoading}
        >
          <InputLine
            {...props}
            ref={refSetter(ref, inputRef)}
            placeholder="чч:мм"
            dataPlaceholder="чч:мм"
            onInput={(e) => setTimeValue(e.currentTarget.value)}
            value={timeValue}
            disabled={disabled}
            readOnly={props.readOnly}
          />
          {iconArray.length > 0 && (
            <IconPanelAfter disabled={disabled} $dimension={dimension}>
              {iconArray}
            </IconPanelAfter>
          )}
        </FocusBox>
        {availableSlots && isOpened && !disabled && !skeleton && (
          <StyledDropdownContainer
            targetElement={inputRef.current}
            alignSelf={alignSelf}
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
      </>
    );
  },
);

TimePicker.displayName = 'TimePicker';
