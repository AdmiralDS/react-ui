import { NumberInput } from '@admiral-ds/react-ui';
import type { BorderRadiusType, NumberInputProps } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

export const NumberInputSpacesTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: NumberInputProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <NumberInput
        {...props}
        onChange={(event) => {
          console.log(event.target.value);
        }}
        defaultValue="30"
        suffix="%"
        hideSpaceBeforeSuffix
        precision={0}
        placeholder="0%"
      />
      <NumberInput
        {...props}
        onChange={(event) => {
          console.log(event.target.value);
        }}
        defaultValue="1"
        prefix="№"
        hideSpaceAfterPrefix
        precision={0}
        placeholder="№0"
        style={{ marginTop: '40px' }}
      />
    </ThemeProvider>
  );
};
