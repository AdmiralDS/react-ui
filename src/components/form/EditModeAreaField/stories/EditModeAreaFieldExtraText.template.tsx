import * as React from 'react';

import { EditModeAreaField } from '@admiral-ds/react-ui';
import type { EditModeAreaFieldProps } from '@admiral-ds/react-ui';

export const EditModeAreaFieldExtraTextTemplate = ({ value = 'Admin', ...props }: EditModeAreaFieldProps) => {
  const [localValue, setValue] = React.useState<string>(String(value) ?? '');
  const [extraText, setExtraText] = React.useState<any>(undefined);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    props.onChange?.(e);
  };

  return (
    <>
      <EditModeAreaField
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
