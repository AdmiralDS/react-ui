import { useRef, useLayoutEffect, forwardRef, useState } from 'react';

import { Container, WrapperOptions, Input, IconPanel } from './styled';
import { InputBorderedDiv } from '../TextInput';
import { InputIconButton } from '#src/components/InputIconButton';
import { ReactComponent as CloseOutlineSvg } from '@admiral-ds/icons/build/service/CloseOutline.svg';

import { refSetter } from '#src/components/common/utils/refSetter';

import type { ComponentDimension, InputStatus } from '../types';

type DataAttributes = { [dataAttibute: `data-${string}`]: string | boolean };

const nothing = () => {};
const preventDefault = (e: React.MouseEvent) => e.preventDefault();

export interface MultiInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Делает размер компонента больше или меньше обычной */
  dimension?: ComponentDimension;

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

  /** Отключает возможность удалять опции через нажатие на клавишу Backspace */
  disableBackspaceClearOption?: boolean;

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
      disableBackspaceClearOption,
      onInputComplete,
      containerPropsConfig = nothing,
      onClearOptions,
      ...props
    },
    ref,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [refWrapperOptions, setRefWrapperOptions] = useState<HTMLDivElement | null>(null);

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
        if (!disableBackspaceClearOption && e.code === 'Backspace') {
          const { selectionStart, selectionEnd } = this;

          if (refWrapperOptions && selectionStart === 0 && selectionEnd === 0) {
            const closeButton = refWrapperOptions.querySelector(
              '.wrapper-options > :has(.close-button):last-of-type .close-button',
            );

            closeButton?.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
          }
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

    return (
      <Container {...containerProps} {...containerPropsConfig(containerProps)}>
        <WrapperOptions className="wrapper-options" ref={(elem) => setRefWrapperOptions(elem)}>
          {children} <Input $dimension={dimension} {...props} ref={refSetter(ref, inputRef)} />
        </WrapperOptions>
        <InputBorderedDiv $status={status} disabled={props.disabled || props.readOnly} />
        {displayClearIcon && !props.readOnly && !disableCopying && (
          <IconPanel>
            <InputIconButton icon={CloseOutlineSvg} onClick={onClearOptions} aria-hidden />
          </IconPanel>
        )}
      </Container>
    );
  },
);

MultiInput.displayName = 'MultiInput';
