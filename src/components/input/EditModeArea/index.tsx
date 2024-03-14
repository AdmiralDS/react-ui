import type { ChangeEventHandler, MouseEvent } from 'react';
import { forwardRef, useLayoutEffect, useRef, useState } from 'react';
import type { css } from 'styled-components';

import type { TextAreaProps } from '#src/components/input/TextArea';
import { refSetter } from '#src/components/common/utils/refSetter';
import { changeInputData } from '#src/components/common/dom/changeInputData';

import { Tooltip } from '#src/components/Tooltip';
import { checkOverflow } from '#src/components/common/utils/checkOverflow';
import { CancelIcon, ConfirmIcon, EditArea, EditButton, EditIcon, Text, Wrapper } from '../EditMode/style';

const stopEvent = (e: MouseEvent) => e.preventDefault();

type Dimension = 's' | 'm' | 'xl' | 'xxl';

export interface EditModeAreaProps extends Omit<TextAreaProps, 'dimension' | 'displayClearIcon'> {
  /** Значение компонента */
  value: string | number;
  /** Колбек на изменение значения компонента */
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  /** Размер компонента */
  dimension?: Dimension;
  /** Жирное начертание текста. В размерах xl и xxl текст всегда жирный */
  bold?: boolean;
  /** Позволяет добавлять миксин на контейнер компонента, созданный с помощью styled css. */
  containerCssMixin?: ReturnType<typeof css>;
  /** Функция обработчика события нажатия кнопки начала редактирования
   * @param value - значение поля ввода для редактирования */
  onEdit?: (value: string | number) => void;
  /** Функция обработчика события нажатия кнопки подтверждения введенного значения
   * @param value - отредактированное значение поля ввода */
  onConfirm?: (value: string | number) => void;
  /** Функция обработчика события нажатия кнопки отмены
   * @param value - значение поля ввода до нажатия кнопки редактирования */
  onCancel?: (value: string | number) => void;
  /**
   * @deprecated Используйте onCancel
   * Колбек на нажатие кнопки очистки инпута
   */
  onClear?: () => void;
  /** Отображение тултипа, по умолчанию true */
  showTooltip?: boolean;
}

export const EditModeArea = forwardRef<HTMLTextAreaElement, EditModeAreaProps>(
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
      rows = 1,
      ...props
    },
    ref,
  ) => {
    const [edit, setEdit] = useState(false);
    const [valueBeforeEdit, setValueBeforeEdit] = useState(value);
    const iconSize = dimension === 's' ? 20 : 24;
    const inputRef = useRef<HTMLTextAreaElement>(null);
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
              <EditArea
                ref={refSetter(ref, inputRef)}
                autoFocus
                disabled={disabled}
                dimension={editDimension}
                value={value}
                containerRef={wrapperRef}
                rows={rows}
                {...props}
              />
              <EditButton
                appearance="secondary"
                dimension={editDimension}
                displayAsSquare
                disabled={props.status === 'error'}
                onClick={handleConfirm}
                iconStart={<ConfirmIcon height={iconSize} width={iconSize} />}
                $multiline={true}
              />
              <EditButton
                appearance="secondary"
                dimension={editDimension}
                displayAsSquare
                onClick={handleCancel}
                iconStart={<CancelIcon height={iconSize} width={iconSize} />}
                $multiline={true}
              />
            </>
          )
        ) : (
          <>
            <Text ref={refSetter(textRef, setNode)} $multiline onClick={!props.readOnly ? enableEdit : undefined}>
              {value}
            </Text>
            {showTooltip && tooltipVisible && overflowActive && (
              <Tooltip renderContent={() => value} targetElement={textRef.current} />
            )}
            {!props.readOnly && <EditIcon $multiline height={iconSize} width={iconSize} onClick={enableEdit} />}
          </>
        )}
      </Wrapper>
    );
  },
);

EditModeArea.displayName = 'EditMode';
