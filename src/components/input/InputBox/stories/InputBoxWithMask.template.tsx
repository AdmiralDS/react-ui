import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { InputLine, InputBox, T } from '@admiral-ds/react-ui';
import type { BorderRadiusType, InputLineProps } from '@admiral-ds/react-ui';
import { maskitoNumberOptionsGenerator } from '@maskito/kit';
import { useMaskito } from '@maskito/react';

import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

const options = maskitoNumberOptionsGenerator({
  decimalSeparator: ',',
  thousandSeparator: ' ',
  precision: 2,
});

export const InputBoxWithMaskTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  value = '',
  placeholder = 'От 0 ₽',
  prefix = 'От',
  suffix = '₽',
  dataPlaceholder = '12,20',
  ...props
}: InputLineProps & {
  themeBorderKind?: BorderRadiusType;
  CSSCustomProps?: boolean;
}) => {
  const [localValue, setLocalValue] = useState(String(value) ?? '');

  const inputRef = useMaskito({ options });

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '40px' }}>
        Пример реализации NumberInput c использованием маски библиотеки Maskito
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
          ref={inputRef}
        />
      </InputBox>
    </ThemeProvider>
  );
};
