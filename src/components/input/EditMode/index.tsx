import * as React from 'react';
import styled, { css, DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
import { Button } from '#/components/Button';
import { typography } from '#/components/Typography';
import { refSetter } from '#/components/common/utils/refSetter';
import { changeInputData } from '#/components/common/dom/changeInputData';

import { ReactComponent as EditSolid } from '@admiral-ds/icons/build/system/EditSolid.svg';
import { ReactComponent as CheckClearOutline } from '@admiral-ds/icons/build/service/CheckClearOutline.svg';
import { ReactComponent as CloseOutline } from '@admiral-ds/icons/build/service/CloseOutline.svg';

import { TextInput, TextInputProps } from '../TextInput';

const EditInput = styled(TextInput)`
  flex: 1 1 auto;
  & input {
    [data-dimension='s'] & {
      ${typography['Additional/S']}
    }
    [data-dimension='s-bold'] & {
      ${typography['Additional/S-bold']}
    }
    [data-dimension='m'] & {
      ${typography['Additional/L']}
    }
    [data-dimension='m-bold'] & {
      ${typography['Additional/L-bold']}
    }
    [data-dimension='xl'] & {
      ${typography['Main/S']}
    }
  }
`;

const EditButton = styled(Button)`
  margin-left: 4px;
  flex-shrink: 0;
`;

const iconStyle = css`
  display: flex;
  flex-shrink: 0;
  cursor: pointer;
`;

const EditIcon = styled(EditSolid)`
  ${iconStyle}
  & *[fill^='#'] {
    fill: ${({ theme }) => theme.color.text.secondary};
  }

  [data-disabled='true'] & {
    cursor: default;
    pointer-events: none;
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color.basic.disable};
    }
  }
  [data-disabled='false'] & {
    &:hover {
      & *[fill^='#'] {
        fill: ${({ theme }) => theme.color.basic.hover};
      }
    }
  }
`;

const CheckIcon = styled(CheckClearOutline)`
  ${iconStyle}
  & *[fill^='#'] {
    fill: ${({ theme }) => theme.color.basic.primary};
  }
`;
const ClearIcon = styled(CloseOutline)`
  ${iconStyle}
  & *[fill^='#'] {
    fill: ${({ theme }) => theme.color.status.danger};
  }
`;

const Wrapper = styled.div<{ cssMixin?: FlattenInterpolation<ThemeProps<DefaultTheme>> }>`
  display: flex;
  align-items: center;
  ${({ cssMixin }) => cssMixin || ''}
`;

const Text = styled.div`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  align-items: center;
  cursor: text;
  margin-right: 12px;
  padding-left: 16px;
  [data-dimension='s'] & {
    ${typography['Additional/S']}
    height: 32px;
    line-height: 32px;
    padding-left: 12px;
  }
  [data-dimension='s-bold'] & {
    ${typography['Additional/S-bold']}
    height: 32px;
    line-height: 32px;
    padding-left: 12px;
  }
  [data-dimension='m'] & {
    ${typography['Additional/L']}
    height: 40px;
    line-height: 40px;
  }
  [data-dimension='m-bold'] & {
    ${typography['Additional/L-bold']}
    height: 40px;
    line-height: 40px;
  }
  [data-dimension='xl'] & {
    ${typography['Main/S']}
    height: 56px;
    line-height: 56px;
  }

  [data-disabled='true'] & {
    cursor: default;
    pointer-events: none;
  }
  [data-disabled='false'] & {
    &:hover {
      & + ${EditIcon} *[fill^='#'] {
        fill: ${({ theme }) => theme.color.basic.hover};
      }
    }
  }
`;

type Dimension = 's' | 'm' | 'xl';

export interface EditModeProps extends Omit<TextInputProps, 'dimension'> {
  /** Значение компонента */
  value: string | number;
  /** Колбек на изменение значения компонента */
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  /** Размер компонента */
  dimension?: Dimension;
  /** Жирное начертание текста. В размере xl оно всегда такое */
  bold?: boolean;
  /** Позволяет добавлять миксин на контейнер компонента, созданный с помощью styled css. */
  containerCssMixin?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  /** Колбек на переход в режим редактирования */
  onEdit?: () => void;
  /** Колбек на нажатие кнопки подтверждения введенного значения и выхода из режима редактирования */
  onConfirm?: (value: string) => void;
  /** Колбек на нажатие кнопки очистки инпута */
  onClear?: () => void;
}

export const EditMode = React.forwardRef<HTMLInputElement, EditModeProps>(
  (
    { dimension = 'm', bold = false, containerCssMixin, disabled = false, onEdit, onConfirm, onClear, ...props },
    ref,
  ) => {
    const [edit, setEdit] = React.useState(false);
    const iconSize = dimension === 's' ? 20 : 24;
    const inputRef = React.useRef<HTMLInputElement>(null);

    const enableEdit = () => {
      setEdit(true);
      onEdit?.();
    };
    const disabledEdit = () => {
      setEdit(false);
      if (inputRef.current) {
        onConfirm?.(inputRef.current.value);
      }
    };
    const handleClear = () => {
      if (inputRef.current) {
        changeInputData(inputRef.current, { value: '' });
        onClear?.();
      }
    };
    return (
      <Wrapper
        data-dimension={`${dimension}${bold && dimension !== 'xl' ? '-bold' : ''}`}
        data-disabled={disabled}
        cssMixin={containerCssMixin}
      >
        {edit ? (
          !disabled && (
            <>
              <EditInput
                ref={refSetter(ref, inputRef)}
                autoFocus
                disabled={disabled}
                dimension={dimension}
                {...props}
              />
              <EditButton
                appearance="secondary"
                dimension={dimension}
                displayAsSquare
                disabled={props.status === 'error'}
                onClick={disabledEdit}
              >
                <CheckIcon height={iconSize} width={iconSize} />
              </EditButton>
              <EditButton appearance="secondary" dimension={dimension} displayAsSquare onClick={handleClear}>
                <ClearIcon height={iconSize} width={iconSize} />
              </EditButton>
            </>
          )
        ) : (
          <>
            <Text onClick={enableEdit}>{props.value}</Text>
            <EditIcon height={iconSize} width={iconSize} onClick={enableEdit} />
          </>
        )}
      </Wrapper>
    );
  },
);
