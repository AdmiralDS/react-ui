import * as React from 'react';
import styled, { css, DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
import { Button } from '#src/components/Button';
import { TextInput, TextInputProps } from '#src/components/input/TextInput';
import { typography } from '#src/components/Typography';
import { refSetter } from '#src/components/common/utils/refSetter';
import { changeInputData } from '#src/components/common/dom/changeInputData';

import { ReactComponent as EditSolid } from '@admiral-ds/icons/build/system/EditSolid.svg';
import { ReactComponent as CheckClearOutline } from '@admiral-ds/icons/build/service/CheckClearOutline.svg';
import { ReactComponent as CloseOutline } from '@admiral-ds/icons/build/service/CloseOutline.svg';

const EditInput = styled(TextInput)`
  flex: 1 1 auto;
  & input {
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
  color: ${({ theme }) => theme.color['Neutral/Neutral 90']};
  [data-dimension='s'] & {
    ${typography['Body/Body 2 Long']}
    height: 32px;
    line-height: 32px;
    padding-left: 12px;
  }
  [data-dimension='s-bold'] & {
    ${typography['Subtitle/Subtitle 3']}
    height: 32px;
    line-height: 32px;
    padding-left: 12px;
  }
  [data-dimension='m'] & {
    ${typography['Body/Body 1 Long']}
    height: 40px;
    line-height: 40px;
  }
  [data-dimension='m-bold'] & {
    ${typography['Subtitle/Subtitle 2']}
    height: 40px;
    line-height: 40px;
  }
  [data-dimension='xl'] & {
    ${typography['Header/H5']}
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
        fill: ${({ theme }) => theme.color['Primary/Primary 70']};
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
    { dimension = 'm', bold = false, containerCssMixin, disabled = false, onEdit, onConfirm, onClear, value, ...props },
    ref,
  ) => {
    const [edit, setEdit] = React.useState(false);
    const [localVal, setLocalVal] = React.useState(value);
    const iconSize = dimension === 's' ? 20 : 24;
    const inputRef = React.useRef<HTMLInputElement>(null);

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
                value={value}
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
            <Text onClick={enableEdit}>{value}</Text>
            <EditIcon height={iconSize} width={iconSize} onClick={enableEdit} />
          </>
        )}
      </Wrapper>
    );
  },
);

EditMode.displayName = 'EditMode';
