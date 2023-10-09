import * as React from 'react';
import { LIGHT_THEME, Label, Calendar } from '@admiral-ds/react-ui';
import type { Theme } from '@admiral-ds/react-ui';
import styled, { ThemeProvider } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > div {
    margin-bottom: 20px;
  }
`;

export const LocaleThemeCurrentLocaleTemplate = () => {
  function setUSALocale(theme?: Theme): Theme {
    if (theme) {
      return { ...theme, currentLocale: 'en-US' };
    }
    LIGHT_THEME.currentLocale = 'en-US';
    return LIGHT_THEME;
  }
  const [selected, setSelected] = React.useState<Date | null>(null);
  const [selected2, setSelected2] = React.useState<Date | null>(null);

  return (
    <Wrapper>
      <Label>Calendar in 'ru' locale</Label>
      <Calendar
        selected={selected}
        onChange={(value: any) => {
          setSelected(value);
        }}
      />
      <ThemeProvider theme={setUSALocale}>
        <Label>Calendar in 'en-US' locale</Label>
        <Calendar
          selected={selected2}
          onChange={(value: any) => {
            setSelected2(value);
          }}
        />
      </ThemeProvider>
    </Wrapper>
  );
};
