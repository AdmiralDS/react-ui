import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { typography, InputLine, T } from '@admiral-ds/react-ui';
import type { BorderRadiusType, InputLineProps } from '@admiral-ds/react-ui';

import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

export const FocusBox = styled.div`
  cursor: text;
  display: inline-flex;
  overflow: hidden;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: stretch;
  width: 280px;
  height: 40px;
  padding: 0;
  padding-inline-start: 16px;
  padding-inline-end: 16px;
  transition: box-shadow 0.3s ease-in-out;
  box-sizing: border-box;
  border-radius: 4px;
  background: transparent;
  /* https://stackoverflow.com/questions/69658462/inset-box-shadow-visual-artifacts-in-google-chrome */
  transform: translate3d(0, 0, 0);
  box-shadow: 0px 0px 0px 1px var(--admiral-color-Neutral_Neutral40, ${(p) => p.theme.color['Neutral/Neutral 40']})
    inset;

  &:hover:not(:focus-within) {
    box-shadow: 0px 0px 0px 1px var(--admiral-color-Neutral_Neutral60, ${(p) => p.theme.color['Neutral/Neutral 60']})
      inset;
  }
  &:focus-within {
    box-shadow: 0px 0px 0px 2px
      var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']}) inset;
  }

  & * {
    ${typography['Body/Body 1 Long']}
    line-height: 40px;
  }
`;

export const InputLinePlaygroundTemplate = ({
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
        Поле ввода с адаптивным placeholder или с временным значением(tmpValue)
      </T>
      <FocusBox>
        <InputLine
          {...props}
          placeholder={placeholder}
          prefix={prefix}
          suffix={suffix}
          dataPlaceholder={dataPlaceholder}
          onInput={(e) => setLocalValue(e.currentTarget.value)}
          value={localValue}
        />
      </FocusBox>
    </ThemeProvider>
  );
};
