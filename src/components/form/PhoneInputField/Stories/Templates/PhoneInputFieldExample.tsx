import * as React from 'react';
import type { ChangeEvent } from 'react';
import { ThemeProvider } from 'styled-components';

import { PhoneInputField } from '@admiral-ds/react-ui';
import type { PhoneInputFieldProps, Theme } from '@admiral-ds/react-ui';

export const PhoneInputFieldExampleTemplate = ({
  label = 'Введите номер телефона',
  ...props
}: PhoneInputFieldProps) => {
  const cleanProps = (Object.keys(props) as Array<keyof typeof props>).reduce(
    (acc, key) => {
      if (props[key] !== undefined) acc[key] = props[key];

      return acc;
    },
    {} as Record<any, any>,
  );

  const [localValue, setValue] = React.useState<string>(props.value ?? '');

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
    theme.shape.borderRadiusKind = (props as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <PhoneInputField
        data-container-id="phoneInputFieldIdOne"
        {...cleanProps}
        value={localValue}
        defaultCountry="RUS"
        onChange={handleChange}
        dropContainerClassName="dropContainerClass"
        label={label}
      />
    </ThemeProvider>
  );
};
