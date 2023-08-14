import * as React from 'react';
import type { ChangeEvent } from 'react';

import { PhoneNumberInput } from '@admiral-ds/react-ui';
import type { PhoneNumberInputProps } from '@admiral-ds/react-ui';

export const PhoneNumberInputMTemplate = (props: PhoneNumberInputProps) => {
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

  return (
    <>
      <PhoneNumberInput
        {...props}
        dimension="m"
        value={localValue}
        onlyCountries={['RUS', 'BLR', 'TJK', 'UZB']}
        style={{ maxWidth: '320px' }}
        onChange={handleChange}
      />
    </>
  );
};
