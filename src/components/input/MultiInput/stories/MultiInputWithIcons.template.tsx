import { useState } from 'react';
import type { ChangeEvent } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';

import { Chips, typography, MultiInput, T } from '@admiral-ds/react-ui';
import type { BorderRadiusType, MultiInputProps } from '@admiral-ds/react-ui';

import { uid } from '#src/components/common/uid';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';
import { ReactComponent as PhoneSolid } from '@admiral-ds/icons/build/communication/PhoneSolid.svg';
import { ReactComponent as Signal } from '@admiral-ds/icons/build/communication/SignalOutline.svg';
import { ReactComponent as Admin } from '@admiral-ds/icons/build/system/AdminSolid.svg';
import { ReactComponent as Cloud } from '@admiral-ds/icons/build/system/CloudDoneOutline.svg';

const Separator = styled.div`
  height: 8px;
`;

const disabledChipStyle = css`
  pointer-events: auto;
  &:hover {
    color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
  }
`;

const hoverChipStyle = css`
  &:hover {
    background-color: var(--admiral-color-Neutral_Neutral10, ${(p) => p.theme.color['Neutral/Neutral 10']});
  }
`;

export const StyledChip = styled(Chips)<{ readOnly?: boolean }>`
  display: flex;
  min-width: 35px;
  max-width: 190px;

  @media (max-width: 768px) {
    max-width: 80px;
  }

  ${({ disabled, readOnly }) => (disabled ? disabledChipStyle : readOnly ? null : hoverChipStyle)}

  ${typography['Caption/Caption 1']};
`;

export const MultiInputWithIconsTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  displayClearIcon = true,
  ...props
}: MultiInputProps & {
  themeBorderKind?: BorderRadiusType;
  CSSCustomProps?: boolean;
}) => {
  const [value, setValue] = useState('');
  const [listValue, setListValue] = useState<React.ComponentProps<typeof StyledChip>[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const currentValue = e.currentTarget.value;

    setValue(currentValue);
  };

  const handleDeleteChip = (id?: string) => {
    setListValue((prevState) => {
      return prevState.filter((elem) => elem.id !== id);
    });
  };

  const handleKeyDown = () => {
    const newValue = value.trim();

    if (newValue) {
      setListValue((prevState) => {
        return [...prevState, { id: uid(), children: newValue }];
      });
      setValue('');
    }
  };

  const handleClearListValue = () => {
    setListValue([]);
  };

  const iconsBefore = [<PhoneSolid key={'Phone'} />, <Signal key={'Signal'} />];
  const iconsAfter = [<Admin key={'Admin'} />, <Cloud key={'Cloud'} />];

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '40px' }}>
        Свойства <strong>iconsBefore</strong> и <strong>iconsAfter</strong> дают возможность добавить иконки в начало
        или в конец поля ввода
        <Separator />
        Иконка «Крестик», очищающая поле ввода, будет стоять первой, все остальные иконки добавятся после нее.
      </T>

      <MultiInput
        {...props}
        value={value}
        onInputComplete={handleKeyDown}
        onClearOptions={handleClearListValue}
        onChange={handleChange}
        displayClearIcon={displayClearIcon && listValue.length !== 0}
        iconsBefore={iconsBefore}
        iconsAfter={iconsAfter}
      >
        {listValue.map((item, index) => (
          <StyledChip
            {...item}
            key={index}
            onClose={props.readOnly || props.disableCopying ? undefined : handleDeleteChip}
            tabIndex={-1}
            dimension="s"
            appearance="filled"
            readOnly={props.readOnly}
            disabled={props.disabled}
          />
        ))}
      </MultiInput>
    </ThemeProvider>
  );
};
