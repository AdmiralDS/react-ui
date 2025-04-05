import { useRef, useLayoutEffect, forwardRef, useState, Children } from 'react';
import type { ReactNode } from 'react';

import { Container, WrapperOptions, Input, IconPanelBefore, IconPanelAfter } from './styled';
import { InputBorderedDiv } from '../TextInput';
import { InputIconButton } from '#src/components/InputIconButton';
import { ReactComponent as CloseOutlineSvg } from '@admiral-ds/icons/build/service/CloseOutline.svg';

import { refSetter } from '#src/components/common/utils/refSetter';

import type { ComponentDimension, InputStatus } from '../types';

type DataAttributes = { [dataAttibute: `data-${string}`]: string | boolean };

const nothing = () => {};
const preventDefault = (e: React.MouseEvent) => e.preventDefault();

function pressDeleteButtonOnLastChip(
  input: HTMLInputElement | null,
  optionsWrapper: HTMLDivElement | null,
  lastChipCloseButtonSelector: string,
) {
  if (input && optionsWrapper && input.selectionStart === 0 && input.selectionEnd === 0) {
    const closeButton = optionsWrapper.querySelector(lastChipCloseButtonSelector);
    closeButton?.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
  }
}

export interface MultiInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Делает размер компонента больше или меньше обычной */
  dimension?: ComponentDimension;

  /** Иконки для отображения в начале поля */
  iconsBefore?: ReactNode;

  /** Иконки для отображения в конце поля */
  iconsAfter?: ReactNode;

  /** Отображать иконку очистки поля */
  displayClearIcon?: boolean;

  /** Статус поля */
  status?: InputStatus;

  /** Ref контейнера компонента */
  containerRef?: React.RefObject<HTMLDivElement>;

  /**  Наличие этого атрибута отключает возможность выделения и копирования значения поля */
  disableCopying?: boolean;

  /** Состояние skeleton */
  skeleton?: boolean;

  //* Список кнопок, при нажатии на которые добавляются значения, по умолчанию Enter */
  createActivateButtonList?: string[];

  //* Функция которая выполняется при нажатии на одну из кнопок из createActivateButtonList */
  onInputComplete?: () => void;

  //* Функция которая выполняется при нажатии на кнопку очистки поля при активном displayClearIcon */
  onClearOptions?: () => void;

  /** Конфиг функция пропсов для контейнера. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедрятся после оригинальных пропсов. */
  containerPropsConfig?: (
    props: React.ComponentProps<typeof Container>,
  ) => Partial<React.ComponentProps<typeof Container> & DataAttributes>;

  /** Селектор позволяющий найти кнопку закрытия последней опции. Необходимо для срабатывания
   * удаления последней опции при нажатии Backspace в пустом поле ввода. Значение по умолчанию:
   * '.wrapper-options > :has(.close-button):last-of-type .close-button' */
  lastChipCloseButtonSelector?: string;

  /**  Функция которая выполняется при нажатии на кнопку Backspace в поле ввода, по умолчанию произодет
   * поиск последнего чипа и нажатие на кнопку удалить */
  onBackspaceKeyDown?: typeof pressDeleteButtonOnLastChip;

  children: React.ReactNode;
}

export const MultiInput = forwardRef<HTMLInputElement, MultiInputProps>(
  (
    {
      style,
      status,
      children,
      className,
      skeleton = false,
      displayClearIcon,
      containerRef,
      disableCopying,
      dimension = 'm',
      createActivateButtonList = ['Enter'],
      onInputComplete,
      containerPropsConfig = nothing,
      onClearOptions,
      iconsBefore,
      iconsAfter,
      lastChipCloseButtonSelector = '.wrapper-options > :has(.close-button):last-of-type .close-button',
      onBackspaceKeyDown: onLastChipDelete = pressDeleteButtonOnLastChip,
      ...props
    },
    ref,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [refWrapperOptions, setRefWrapperOptions] = useState<HTMLDivElement | null>(null);

    const iconAfterArray = Children.toArray(iconsAfter);
    const iconBeforeArray = Children.toArray(iconsBefore);

    if (displayClearIcon && !props.readOnly && !disableCopying) {
      iconAfterArray.unshift(
        <InputIconButton icon={CloseOutlineSvg} onClick={onClearOptions} aria-hidden key={'close'} />,
      );
    }

    const handleContainerFocus: React.FocusEventHandler<HTMLDivElement> = (e) => {
      if (e.target.tagName.toLowerCase() !== 'input') {
        if (inputRef.current) inputRef.current.focus();
      }
    };

    const containerProps = {
      ref: containerRef,
      className,
      style,
      $skeleton: skeleton,
      $status: status,
      disabled: props.disabled,
      readOnly: props.readOnly,
      $dimension: dimension,
      tabIndex: -1,
      'data-disabled': props.disabled ? true : undefined,
      'data-read-only': props.readOnly ? true : undefined,
      'data-status': status,
      'data-disable-copying': disableCopying ? true : undefined,
      onMouseDown: disableCopying ? preventDefault : undefined,
      onFocus: handleContainerFocus,
    } satisfies Partial<React.ComponentProps<typeof Container> & DataAttributes>;

    useLayoutEffect(() => {
      function handleKeyDown(this: HTMLInputElement, e: globalThis.KeyboardEvent) {
        if (createActivateButtonList.includes(e.code) && onInputComplete) {
          onInputComplete();
        }
        if (e.code === 'Backspace') {
          onLastChipDelete(this, refWrapperOptions, lastChipCloseButtonSelector);
        }
      }

      if (!props.disabled && !props.readOnly && !disableCopying) {
        const inputElem = inputRef.current;

        if (inputElem) {
          inputElem.addEventListener('keydown', handleKeyDown);
          return () => {
            inputElem.removeEventListener('keydown', handleKeyDown);
          };
        }
      }
    }, [props.disabled, props.readOnly, disableCopying, refWrapperOptions, onInputComplete, inputRef]);

    const iconsBeforeCount = iconBeforeArray.length;
    const iconsAfterCount = iconAfterArray.length;

    return (
      <Container {...containerProps} {...containerPropsConfig(containerProps)}>
        {iconsBeforeCount > 0 && <IconPanelBefore $dimension={dimension}>{iconBeforeArray}</IconPanelBefore>}

        <WrapperOptions className="wrapper-options" ref={(elem) => setRefWrapperOptions(elem)}>
          {children} <Input $dimension={dimension} {...props} ref={refSetter(ref, inputRef)} />
        </WrapperOptions>
        <InputBorderedDiv $status={status} disabled={props.disabled || props.readOnly} />

        {iconsAfterCount > 0 && <IconPanelAfter $dimension={dimension}>{iconAfterArray}</IconPanelAfter>}
      </Container>
    );
  },
);

MultiInput.displayName = 'MultiInput';
