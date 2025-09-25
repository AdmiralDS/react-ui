import { useId, useState } from 'react';
import type { ChangeEvent } from 'react';
import { ThemeProvider } from 'styled-components';

import { TextArea } from '@admiral-ds/react-ui';
import type { TextAreaProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

export const TextAreaPlaygroundTemplate = ({
  value = 'Привет!',
  placeholder = 'Placeholder',
  themeBorderKind,
  CSSCustomProps,
  ...props
}: TextAreaProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [localValue, setValue] = useState<string>(String(value) ?? '');
  const clearIconProps = { 'data-testid': useId() };
  const copyIconProps = { 'data-testid': useId() };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
    props.onChange?.(e);
  };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <TextArea
        {...props}
        id={'TextAreaPlayground'}
        value={localValue}
        onChange={handleChange}
        placeholder={placeholder}
        clearIconPropsConfig={() => clearIconProps}
        copyIconPropsConfig={() => copyIconProps}
        data-testid="textAreaPlayground"
      />
    </ThemeProvider>
  );
};
