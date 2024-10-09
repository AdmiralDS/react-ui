import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { TextField } from '@admiral-ds/react-ui';
import type { TextFieldProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

const DisplayContainer = styled.div`
  > * {
    margin-bottom: 24px;
  }
`;

export const TextFieldInputTemplate = ({
  value = 'At breakpoint boundaries, mini units divide the screen into a fixed master ' +
    'grid, and multiples of mini units map to fluid grid column widths and row ' +
    'heights.At breakpoint boundaries, mini units divide the screen into a fixed ' +
    'master grid, and multiples of mini units map to fluid grid column widths and ' +
    'row heights.At breakpoint boundaries, mini units divide the screen into a fixed ' +
    'master grid, and multiples of mini units map to fluid grid column widths and row ' +
    'heights.At breakpoint boundaries, mini units divide the screen into a fixed master ' +
    'grid, and multiples of mini units map to fluid grid column widths and row heights.',
  label = 'Label',
  themeBorderKind,
  CSSCustomProps,
  ...props
}: TextFieldProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [localValue, setValue] = React.useState<string>(String(value) ?? '');
  const fieldRef = React.useRef(null);
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    props.onChange?.(e);
  };
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <DisplayContainer>
        <TextField
          placeholder="Место для ввода текста"
          data-container-id="textFieldIdOne"
          {...props}
          value={localValue}
          autoHeight={true}
          onChange={handleChange}
          label={label}
        />
        <TextField
          data-container-id="textFieldIdOne"
          {...props}
          value={localValue}
          onChange={handleChange}
          label={label}
        />
        <TextField data-container-id="textFieldIdTwo" required label="Поле необходимо заполнить" />
        <TextField data-container-id="textFieldIdThree" ref={fieldRef} label="Напишите сочинение на заданную тему" />
      </DisplayContainer>
    </ThemeProvider>
  );
};
