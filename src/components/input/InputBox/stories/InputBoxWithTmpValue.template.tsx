import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { InputBox, InputLine, T, Button } from '@admiral-ds/react-ui';
import type { BorderRadiusType, InputLineProps } from '@admiral-ds/react-ui';

import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

export const Wrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
`;

export const InputBoxWithTmpValueTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  value = '',
  placeholder = 'prefix value suffix',
  prefix = 'prefix',
  suffix = 'suffix',
  ...props
}: InputLineProps & {
  themeBorderKind?: BorderRadiusType;
  CSSCustomProps?: boolean;
}) => {
  const [localValue, setLocalValue] = useState(String(value) ?? '');
  const [tmpValue, setTmpValue] = useState<string | undefined>();

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '40px' }}>
        Поле ввода с адаптивным placeholder
      </T>

      <InputBox>
        <InputLine
          {...props}
          placeholder={placeholder}
          prefix={prefix}
          suffix={suffix}
          onInput={(e) => setLocalValue(e.currentTarget.value)}
          value={localValue}
          tmpValue={tmpValue}
        />
      </InputBox>
      <Wrapper>
        <Button
          dimension="m"
          onMouseEnter={() => setTmpValue('Hello')}
          onMouseLeave={() => setTmpValue(undefined)}
          onClick={() => {
            if (tmpValue) setLocalValue(tmpValue);
          }}
        >
          Set "Hello"
        </Button>
        <Button
          dimension="m"
          onMouseEnter={() => setTmpValue('Goodbay')}
          onMouseLeave={() => setTmpValue(undefined)}
          onClick={() => {
            if (tmpValue) setLocalValue(tmpValue);
          }}
        >
          Set "Goodbay"
        </Button>
      </Wrapper>
    </ThemeProvider>
  );
};
