import * as React from 'react';

import { EditModeField } from '@admiral-ds/react-ui';
import type { EditModeFieldProps, InputStatus } from '@admiral-ds/react-ui';

export const EditModeFieldErrorStateTemplate = ({ value = 'Admin', ...props }: EditModeFieldProps) => {
  const [localValue, setValue] = React.useState<string>(String(value) ?? '');
  const [status, setStatus] = React.useState<InputStatus | undefined>(undefined);
  const [extraText, setExtraText] = React.useState<React.ReactNode>(undefined);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (inputValue.length > 6) {
      setStatus('error');
      setExtraText('Поле не прошло валидацию, необходимо ввести корректное значение');
    } else {
      setStatus(undefined);
      setExtraText(undefined);
    }
    setValue(inputValue);
    props.onChange?.(e);
  };

  return (
    <>
      <EditModeField
        value={localValue}
        onChange={handleChange}
        onSubmit={() => setExtraText(undefined)}
        status={status}
        label="Поле для ввода логина (не более 6 символов)"
        extraText={extraText}
      />
    </>
  );
};
