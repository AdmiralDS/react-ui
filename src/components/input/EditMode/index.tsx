import * as React from 'react';
import type { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
import styled, { css } from 'styled-components';
import { Button } from '#src/components/Button';
import type { TextInputProps } from '#src/components/input/TextInput';
import { TextInput } from '#src/components/input/TextInput';
import { typography } from '#src/components/Typography';
import { refSetter } from '#src/components/common/utils/refSetter';
import { changeInputData } from '#src/components/common/dom/changeInputData';

import { ReactComponent as EditSolid } from '@admiral-ds/icons/build/system/EditSolid.svg';
import { ReactComponent as CheckClearOutline } from '@admiral-ds/icons/build/service/CheckClearOutline.svg';
import { ReactComponent as CloseOutline } from '@admiral-ds/icons/build/service/CloseOutline.svg';
import { Tooltip } from '#src/components/Tooltip';
import { checkOverflow } from '#src/components/common/utils/checkOverflow';

const TypographyMixin = css`
  [data-dimension='s'] & {
    ${typography['Body/Body 2 Long']}
  }

  [data-dimension='s-bold'] & {
    ${typography['Subtitle/Subtitle 3']}
  }

  [data-dimension='m'] & {
    ${typography['Body/Body 1 Long']}
  }

  [data-dimension='m-bold'] & {
    ${typography['Subtitle/Subtitle 2']}
  }

  [data-dimension='xl'] & {
    ${typography['Header/H5']}
  }

  [data-dimension='xxl'] & {
    ${typography['Header/H4']}
  }
`;

const EditInput = styled(TextInput)`
  flex: 1 1 auto;
  & input {
    ${TypographyMixin}
  }
`;

const EditButton = styled(Button)`
  margin-left: 4px;
  flex-shrink: 0;
`;

const multilineIcon = css`
  align-self: flex-start;

  [data-dimension='s-bold'] &&&,
  [data-dimension='s'] &&& {
    margin-top: 6px;
  }

  [data-dimension='m'] &&&,
  [data-dimension='m-bold'] &&& {
    margin-top: 8px;
  }

  [data-dimension='xl'] &&& {
    margin-top: 14px;
  }

  [data-dimension='xxl'] &&& {
    margin-top: 12px;
  }
`;

const iconStyle = css`
  display: flex;
  flex-shrink: 0;
  cursor: pointer;
`;

const EditIcon = styled(EditSolid)<{ $multiline: boolean }>`
  ${iconStyle}
  & *[fill^='#'] {
    fill: ${({ theme }) => theme.color['Neutral/Neutral 50']};
  }

  [data-disabled='true'] & {
    cursor: default;
    pointer-events: none;
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color['Neutral/Neutral 30']};
    }
  }
  [data-disabled='false'] & {
    &:hover {
      & *[fill^='#'] {
        fill: ${({ theme }) => theme.color['Primary/Primary 70']};
      }
    }
  }

  ${(p) => p.$multiline && multilineIcon}
`;

const CheckIcon = styled(CheckClearOutline)`
  ${iconStyle}
`;

const ClearIcon = styled(CloseOutline)`
  ${iconStyle}
`;

const Wrapper = styled.div<{ cssMixin?: FlattenInterpolation<ThemeProps<DefaultTheme>> }>`
  display: flex;
  align-items: center;
  ${({ cssMixin }) => cssMixin || ''};
`;

const MultilineMixin = css`
  word-wrap: break-word;
  height: auto;
  white-space: normal;

  [data-dimension='s-bold'] &&&,
  [data-dimension='s'] &&& {
    padding-top: 6px;
    padding-bottom: 6px;
    padding-left: 12px;
  }

  [data-dimension='m'] &&&,
  [data-dimension='m-bold'] &&& {
    padding-top: 8px;
    padding-bottom: 8px;
  }

  [data-dimension='xl'] &&& {
    padding-top: 14px;
    padding-bottom: 14px;
  }

  [data-dimension='xxl'] &&& {
    padding-top: 12px;
    padding-bottom: 12px;
  }
`;

const SingleMixin = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  [data-dimension='s'] &&& {
    height: 32px;
    line-height: 32px;
    padding-left: 12px;
  }

  [data-dimension='s-bold'] &&& {
    height: 32px;
    line-height: 32px;
    padding-left: 12px;
  }

  [data-dimension='m'] &&& {
    height: 40px;
    line-height: 40px;
  }

  [data-dimension='m-bold'] &&& {
    height: 40px;
    line-height: 40px;
  }

  [data-dimension='xl'] &&& {
    height: 56px;
    line-height: 56px;
  }

  [data-dimension='xxl'] &&& {
    height: 56px;
    line-height: 56px;
  }
`;

const Text = styled.div<{ $multiline?: boolean }>`
  display: block;

  align-items: center;
  cursor: text;
  margin-right: 12px;
  padding-left: 16px;
  color: ${({ theme }) => theme.color['Neutral/Neutral 90']};

  ${TypographyMixin};
  ${(p) => (p.$multiline ? MultilineMixin : SingleMixin)}

  [data-disabled='true'] & {
    cursor: default;
    pointer-events: none;
  }

  [data-disabled='false'] & {
    &:hover {
      & + ${EditIcon} *[fill^='#'] {
        fill: ${({ theme }) => theme.color['Primary/Primary 70']};
      }
    }
  }

  [data-disable-copying] & {
    user-select: none;
    pointer-events: none;
  }
`;

const stopEvent = (e: React.MouseEvent) => e.preventDefault();

type Dimension = 's' | 'm' | 'xl' | 'xxl';

export interface EditModeProps extends Omit<TextInputProps, 'dimension'> {
  /** Значение компонента */
  value: string | number;
  /** Колбек на изменение значения компонента */
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  /** Размер компонента */
  dimension?: Dimension;
  /** Жирное начертание текста. В размере xl/xxl оно всегда такое */
  bold?: boolean;
  /** Позволяет добавлять миксин на контейнер компонента, созданный с помощью styled css. */
  containerCssMixin?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  /** Колбек на переход в режим редактирования */
  onEdit?: () => void;
  /** Колбек на нажатие кнопки подтверждения введенного значения и выхода из режима редактирования */
  onConfirm?: (value: string) => void;
  /** Колбек на нажатие кнопки очистки инпута */
  onClear?: () => void;
  /** Отображение тултипа, по умолчанию true */
  showTooltip?: boolean;
  /** Отображение тултипа, по умолчанию true */
  multilineView?: boolean;
}

export const EditMode = React.forwardRef<HTMLInputElement, EditModeProps>(
  (
    {
      dimension = 'm',
      bold = false,
      containerCssMixin,
      disabled = false,
      onEdit,
      onConfirm,
      onClear,
      value,
      showTooltip = true,
      multilineView = false,
      ...props
    },
    ref,
  ) => {
    const [edit, setEdit] = React.useState(false);
    const [localVal, setLocalVal] = React.useState(value);
    const iconSize = dimension === 's' ? 20 : 24;
    const inputRef = React.useRef<HTMLInputElement>(null);
    const wrapperRef = React.useRef<HTMLDivElement>(null);

    const [overflowActive, setOverflowActive] = React.useState<boolean>(false);
    const [tooltipVisible, setTooltipVisible] = React.useState<boolean>(false);
    const [node, setNode] = React.useState<HTMLElement | null>(null);
    const textRef = React.useRef<HTMLDivElement>(null);

    React.useLayoutEffect(() => {
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

    React.useLayoutEffect(() => {
      if (textRef.current && checkOverflow(textRef.current) !== overflowActive) {
        setOverflowActive(checkOverflow(textRef.current));
      }
    }, [tooltipVisible, textRef.current, setOverflowActive]);

    React.useEffect(() => {
      if (!localVal && value) {
        setLocalVal(value);
      }
    }, [value, localVal]);

    const enableEdit = () => {
      setEdit(true);
      onEdit?.();
    };
    const disabledEdit = () => {
      setEdit(false);
      if (inputRef.current) {
        onConfirm?.(inputRef.current.value);
        setLocalVal(inputRef.current.value);
      }
    };
    const handleClear = () => {
      setEdit(false);
      if (inputRef.current) {
        changeInputData(inputRef.current, { value: localVal.toString() });
        onClear?.();
      }
    };
    const editDimension = dimension === 'xxl' ? 'xl' : dimension;

    return (
      <Wrapper
        data-dimension={`${dimension}${bold && editDimension !== 'xl' ? '-bold' : ''}`}
        data-disabled={disabled}
        cssMixin={containerCssMixin}
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
                onClick={disabledEdit}
                iconStart={<CheckIcon height={iconSize} width={iconSize} />}
              />
              <EditButton
                appearance="secondary"
                dimension={editDimension}
                displayAsSquare
                onClick={handleClear}
                iconStart={<ClearIcon height={iconSize} width={iconSize} />}
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
              <Tooltip renderContent={() => value} targetRef={textRef} />
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