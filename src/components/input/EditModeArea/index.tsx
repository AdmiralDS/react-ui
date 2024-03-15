import type { ChangeEventHandler, MouseEvent } from 'react';
import { forwardRef, useRef, useState } from 'react';

import type { TextAreaProps } from '#src/components/input/TextArea';
import { refSetter } from '#src/components/common/utils/refSetter';
import { changeInputData } from '#src/components/common/dom/changeInputData';

import {
  CancelIcon,
  ConfirmIcon,
  EditArea,
  EditButton,
  EditIcon,
  Text,
  Wrapper,
} from '#src/components/input/EditMode/style';
import type { EditModeComponentProps } from '#src/components/input/EditMode/types';

const stopEvent = (e: MouseEvent) => e.preventDefault();

export interface EditModeAreaProps
  extends EditModeComponentProps,
    Omit<TextAreaProps, 'dimension' | 'displayClearIcon' | 'value'> {
  /** Колбек на изменение значения компонента */
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
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
      value,
      rows = 1,
      autoHeight = true,
      ...props
    },
    ref,
  ) => {
    const [edit, setEdit] = useState(false);
    const [valueBeforeEdit, setValueBeforeEdit] = useState(value);
    const iconSize = dimension === 's' ? 20 : 24;
    const inputRef = useRef<HTMLTextAreaElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

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
                autoHeight={autoHeight}
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
            <Text $multiline onClick={!props.readOnly ? enableEdit : undefined}>
              {value}
            </Text>
            {!props.readOnly && <EditIcon $multiline height={iconSize} width={iconSize} onClick={enableEdit} />}
          </>
        )}
      </Wrapper>
    );
  },
);

EditModeArea.displayName = 'EditMode';
