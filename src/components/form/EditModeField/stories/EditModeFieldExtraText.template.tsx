import { useState } from 'react';

import { EditModeField } from '@admiral-ds/react-ui';
import type { EditModeFieldProps } from '@admiral-ds/react-ui';

export const EditModeFieldExtraTextTemplate = ({ value = 'Admin', ...props }: EditModeFieldProps) => {
  const [localValue, setValue] = useState<string>(String(value) ?? '');
  const [extraText, setExtraText] = useState<string | undefined>(undefined);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    props.onChange?.(e);
  };

  return (
    <>
      <EditModeField
        value={localValue}
        onChange={handleChange}
        onEdit={() => setExtraText('Additional text')}
        onConfirm={() => setExtraText(undefined)}
        label="Поле для ввода логина (не более 6 символов)"
        extraText={extraText}
      />
    </>
  );
};
