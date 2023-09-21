import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { DateField } from '@admiral-ds/react-ui';
import type { DateFieldProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

const FormContainer = styled.form`
  > * {
    margin-bottom: 24px;
  }
`;

export const DateFieldBaseTemplate = ({
  label = 'Label',
  themeBorderKind,
  ...props
}: DateFieldProps & { themeBorderKind?: BorderRadiusType }) => {
  const [localValue, setValue] = React.useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    console.log(`handleChange ${inputValue}`);
    setValue(inputValue);
  };

  const handleFormBlur = (e: React.FocusEvent<HTMLFormElement>) => {
    console.log(`form blur:
    current target: ${e.currentTarget.id}
    target: ${e.target.id}
    related target: ${e.relatedTarget?.id}
    `);
  };

  const handleFormFocus = (e: React.FocusEvent<HTMLFormElement>) => {
    console.log(`form focus:
    current target: ${e.currentTarget.id}
    target: ${e.target.id}
    related target: ${e.relatedTarget?.id}
    `);
  };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind)}>
      <FormContainer id="form 1" onBlur={handleFormBlur} onFocus={handleFormFocus}>
        <DateField
          data-container-id="dateFieldIdOne"
          {...props}
          value={localValue}
          onChange={handleChange}
          id={'date 1'}
          placeholder="Это placeholder"
          dropContainerClassName="dropContainerClass"
          label={label}
        />
        <DateField
          data-container-id="dateFieldIdTwo"
          required
          label="uncontrolled input"
          id={'date 2'}
          dropContainerClassName="dropContainerClass"
        />
        <DateField
          data-container-id="dateFieldIdThree"
          type="date-range"
          id="date range 1"
          label="uncontrolled date range"
          placeholder={'Введите отрезок времени'}
          dropContainerClassName="dropContainerClass"
        />
      </FormContainer>
    </ThemeProvider>
  );
};
