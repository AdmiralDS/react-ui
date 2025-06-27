import { useState } from 'react';

import { EditModeField, T } from '@admiral-ds/react-ui';
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
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        В режиме редактирования допускается использование поясняющего текста для инпута.
      </T>
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
