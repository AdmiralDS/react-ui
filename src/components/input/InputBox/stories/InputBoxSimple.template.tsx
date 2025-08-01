import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { InputLine, InputBox, T } from '@admiral-ds/react-ui';
import type { BorderRadiusType, InputLineProps } from '@admiral-ds/react-ui';

import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

export const InputBoxSimpleTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  value = '',
  placeholder = 'prefix value suffix',
  prefix = 'prefix',
  suffix = 'suffix',
  dataPlaceholder = 'value',
  ...props
}: InputLineProps & {
  themeBorderKind?: BorderRadiusType;
  CSSCustomProps?: boolean;
}) => {
  const [localValue, setLocalValue] = useState(String(value) ?? '');

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '40px' }}>
        Поле ввода с адаптивным placeholder или с примером значения tmpValue
      </T>
      <InputBox>
        <InputLine
          {...props}
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
