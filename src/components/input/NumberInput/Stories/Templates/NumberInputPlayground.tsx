import { NumberInput } from '@admiral-ds/react-ui';
import type { BorderRadiusType, NumberInputProps, Theme } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';

export const NumberInputPlaygroundTemplate = (args: NumberInputProps & { themeBorderKind?: BorderRadiusType }) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = args.themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <NumberInput
        prefix="От"
        defaultValue="2.00"
        onChange={(event) => {
          console.log(event.target.value);
        }}
        {...args}
      />
    </ThemeProvider>
  );
};
