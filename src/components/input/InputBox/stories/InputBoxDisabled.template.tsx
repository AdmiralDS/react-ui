import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { InputLine, InputBox, T } from '@admiral-ds/react-ui';
import type { BorderRadiusType, InputLineProps } from '@admiral-ds/react-ui';

import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

export const InputBoxDisabledTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  value = '123',
  placeholder = 'prefix value suffix',
  prefix = 'prefix',
  suffix = 'suffix',
  dataPlaceholder = 'value',
  disabled = true,
  ...props
}: InputLineProps & {
  themeBorderKind?: BorderRadiusType;
  CSSCustomProps?: boolean;
}) => {
  const [localValue, setLocalValue] = useState(String(value) ?? '');

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '40px' }}>
        Поле ввода с параметром disabled
      </T>
      <InputBox disabled={disabled} data-disabled={disabled}>
        <InputLine
          {...props}
          disabled={disabled}
          placeholder={placeholder}
          prefix={prefix}
          suffix={suffix}
          dataPlaceholder={dataPlaceholder}
          onInput={(e) => setLocalValue(e.currentTarget.value)}
          value={localValue}
        />
      </InputBox>
    </ThemeProvider>
  );
};
