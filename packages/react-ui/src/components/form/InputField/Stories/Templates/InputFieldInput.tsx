import * as React from 'react';

import { InputField, Theme } from '@admiral-ds/react-ui';
import type { InputFieldProps } from '@admiral-ds/react-ui';
import styled, { ThemeProvider } from 'styled-components';

const DisplayContainer = styled.div`
  > * {
    margin-bottom: 24px;
  }
`;

export const InputFieldInputTemplate = ({ value = 'Привет', label = 'Label', ...props }: InputFieldProps) => {
  const [localValue, setValue] = React.useState<string>(String(value) ?? '');
  const [invalidInputValue, setInvalidInputValue] = React.useState<string>('Hello');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    props.onChange?.(e);
  };

  const handleInvalidInputValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const invalidInputValue = e.target.value;
    setInvalidInputValue(invalidInputValue);
    props.onChange?.(e);
  };

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (props as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <DisplayContainer>
        <InputField
          data-container-id="inputFieldIdOne"
          {...props}
          value={localValue}
          onChange={handleChange}
          label={label}
        />
        <InputField data-container-id="inputFieldIdTwo" required label="Поле необходимо заполнить" />
        <InputField
          data-container-id="inputFieldIdThree"
          readOnly
          aria-readonly
          label="Поле с атрибутом readOnly"
          defaultValue="Этот текст не редактируемый"
        />
        <InputField
          data-container-id="inputFieldIdFour"
          disabled
          aria-disabled
          label="Поле с атрибутом disabled"
          placeholder="Placeholder"
        />
        <InputField
          data-container-id="inputFieldIdFiveInvalid"
          label="Поле с ошибкой (invalid)"
          pattern="[a-z]+"
          value={invalidInputValue}
          onChange={handleInvalidInputValueChange}
        />
        <InputField
          data-container-id="inputFieldIdFive"
          status="error"
          label="Поле с ошибкой (status = error)"
          extraText="Поле не прошло валидацию, необходимо ввести корректное значение"
        />
        <InputField
          data-container-id="inputFieldIdSix"
          status="success"
          label="Поле с индикацией успеха (status = success)"
          extraText="Поле успешно прошло валидацию"
        />
        <InputField
          data-container-id="inputFieldIdSeven"
          displayClearIcon
          placeholder="идет поиск ..."
          label="Поле с иконкой загрузки"
          isLoading
        />
        <InputField
          data-container-id="inputFieldIdEight"
          label="Поле для ввода пароля (type='password')"
          type="password"
        />
      </DisplayContainer>
    </ThemeProvider>
  );
};
