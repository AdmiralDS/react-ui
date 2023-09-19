import * as React from 'react';
import type { ChangeEvent } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { TimeField } from '@admiral-ds/react-ui';
import type { Theme, TimeFieldProps, BorderRadiusType } from '@admiral-ds/react-ui';

const DisplayContainer = styled.div`
  max-width: 320px;
  > * {
    margin-bottom: 24px;
  }
`;

export const TimeFieldInputTemplate = ({
  placeholder = 'Наберите несколько символов...',
  label = 'Поле ввода времени',
  themeBorderKind,
  ...props
}: TimeFieldProps & { themeBorderKind?: BorderRadiusType }) => {
  const [localValue, setValue] = React.useState<string>(String(props.value) ?? '');

  React.useEffect(() => {
    if (props.value !== undefined) {
      setValue(String(props.value));
    }
  }, [props.value]);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
    props.onChange?.(e);
  };

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <DisplayContainer>
        <TimeField
          data-container-id="timeFieldIdOne"
          {...props}
          startTime="09:00"
          endTime="18:00"
          value={localValue}
          onChange={handleChange}
          dropContainerClassName="dropContainerClass"
          placeholder={placeholder}
          label={label}
        />
      </DisplayContainer>
    </ThemeProvider>
  );
};
