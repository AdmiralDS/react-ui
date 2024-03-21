import * as React from 'react';

import { EditModeAreaField } from '@admiral-ds/react-ui';
import type { EditModeAreaFieldProps } from '@admiral-ds/react-ui';

export const EditModeAreaFieldErrorStateTemplate = ({ value = 'Admin', ...props }: EditModeAreaFieldProps) => {
  const [localValue, setValue] = React.useState<string>(String(value) ?? '');
  const [status, setStatus] = React.useState<any>(undefined);
  const [extraText, setExtraText] = React.useState<any>(undefined);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
      <EditModeAreaField
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
