import type { ChangeEventHandler, MouseEvent } from 'react';
import { forwardRef, useLayoutEffect, useRef, useState } from 'react';
import type { css } from 'styled-components';

import type { TextInputProps } from '#src/components/input/TextInput';
import { refSetter } from '#src/components/common/utils/refSetter';
import { changeInputData } from '#src/components/common/dom/changeInputData';
import { Tooltip } from '#src/components/Tooltip';
import { checkOverflow } from '#src/components/common/utils/checkOverflow';
import {
  CancelIcon,
  ConfirmIcon,
  EditButton,
  EditIcon,
  EditInput,
  Text,
  Wrapper,
} from '#src/components/input/EditMode/style';
import type { EditModeComponentProps } from '#src/components/input/EditMode/types';

const stopEvent = (e: MouseEvent) => e.preventDefault();

export interface EditModeProps
  extends EditModeComponentProps,
    Omit<TextInputProps, 'dimension' | 'displayClearIcon' | 'value'> {
  /** Колбек на изменение значения компонента */
  onChange: ChangeEventHandler<HTMLInputElement>;
  /**
   * @deprecated Используйте onCancel
   * Колбек на нажатие кнопки очистки инпута
   */
  onClear?: () => void;
  /** Отображение тултипа, по умолчанию true */
  showTooltip?: boolean;
  /** Многострочное отображение текста в режиме просмотра значения, по умолчанию false */
  multilineView?: boolean;
}

export const EditMode = forwardRef<HTMLInputElement, EditModeProps>(
  (
    {
      dimension = 'm',
      bold = false,
      containerCssMixin,
      disabled = false,
      onEdit,
      onConfirm,
      onCancel,
      onClear,
      value,
      showTooltip = true,
      multilineView = false,
      ...props
    },
    ref,
  ) => {
    const [edit, setEdit] = useState(false);
    const [valueBeforeEdit, setValueBeforeEdit] = useState(value);
    const iconSize = dimension === 's' ? 20 : 24;
    const inputRef = useRef<HTMLInputElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    const [overflowActive, setOverflowActive] = useState<boolean>(false);
    const [tooltipVisible, setTooltipVisible] = useState<boolean>(false);
    const [node, setNode] = useState<HTMLElement | null>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
      function show() {
        setTooltipVisible(true);
      }
      function hide() {
        setTooltipVisible(false);
      }
      if (node) {
        node.addEventListener('mouseenter', show);
        node.addEventListener('mouseleave', hide);
        return () => {
          node.removeEventListener('mouseenter', show);
          node.removeEventListener('mouseleave', hide);
        };
      }
    }, [setTooltipVisible, node]);

    useLayoutEffect(() => {
      if (textRef.current && checkOverflow(textRef.current) !== overflowActive) {
        setOverflowActive(checkOverflow(textRef.current));
      }
    }, [tooltipVisible, textRef.current, setOverflowActive]);

    const enableEdit = () => {
      setEdit(true);
      setValueBeforeEdit(value);
      onEdit?.(value);
    };
    const handleConfirm = () => {
      setEdit(false);
      if (inputRef.current) {
        const inputValue = inputRef.current.value;
        onConfirm?.(inputValue);
      }
    };
    const handleCancel = () => {
      setEdit(false);
      if (inputRef.current) {
        changeInputData(inputRef.current, { value: valueBeforeEdit.toString() });
        onCancel?.(valueBeforeEdit);
        onClear?.();
      }
    };
    const editDimension = dimension === 'xxl' ? 'xl' : dimension;

    return (
      <Wrapper
        data-dimension={`${dimension}${bold && editDimension !== 'xl' ? '-bold' : ''}`}
        data-disabled={disabled}
        $cssMixin={containerCssMixin}
        ref={wrapperRef}
        data-disable-copying={props.disableCopying ? true : undefined}
        {...(props.disableCopying && {
          onMouseDown: stopEvent,
        })}
      >
        {edit ? (
          !disabled &&
          !props.readOnly && (
            <>
              <EditInput
                ref={refSetter(ref, inputRef)}
                autoFocus
                disabled={disabled}
                dimension={editDimension}
                value={value}
                containerRef={wrapperRef}
                {...props}
              />
              <EditButton
                appearance="secondary"
                dimension={editDimension}
                displayAsSquare
                disabled={props.status === 'error'}
                onClick={handleConfirm}
                iconStart={<ConfirmIcon height={iconSize} width={iconSize} />}
                $multiline={false}
              />
              <EditButton
                appearance="secondary"
                dimension={editDimension}
                displayAsSquare
                onClick={handleCancel}
                iconStart={<CancelIcon height={iconSize} width={iconSize} />}
                $multiline={false}
              />
            </>
          )
        ) : (
          <>
            <Text
              ref={refSetter(textRef, setNode)}
              $multiline={multilineView}
              onClick={!props.readOnly ? enableEdit : undefined}
            >
              {value}
            </Text>
            {showTooltip && tooltipVisible && overflowActive && (
              <Tooltip renderContent={() => value} targetElement={textRef.current} />
            )}
            {!props.readOnly && (
              <EditIcon $multiline={multilineView} height={iconSize} width={iconSize} onClick={enableEdit} />
            )}
          </>
        )}
      </Wrapper>
    );
  },
);

EditMode.displayName = 'EditMode';
