import * as React from 'react';
import type { ChangeEvent } from 'react';
import { ThemeProvider } from 'styled-components';

import { PhoneNumberInput } from '@admiral-ds/react-ui';
import type { PhoneNumberInputProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

export const PhoneNumberInputXLTemplate = ({
  defaultCountry = 'RUS',
  value = '+7 123 456 78 90',
  themeBorderKind,
  CSSCustomProps,
  ...props
}: PhoneNumberInputProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [localValue, setValue] = React.useState<string>(value ?? '');

  React.useEffect(() => {
    if (value !== undefined) {
      setValue(String(value));
    }
  }, [value]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
    props.onChange?.(e);
  };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <PhoneNumberInput
        {...props}
        dimension="xl"
        value={localValue}
        defaultCountry={defaultCountry}
        style={{ maxWidth: '320px' }}
        onChange={handleChange}
        dropContainerClassName="dropContainerClass"
      />
    </ThemeProvider>
  );
};
