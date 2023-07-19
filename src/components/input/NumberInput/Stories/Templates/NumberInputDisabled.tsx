import { NumberInput } from '@admiral-ds/react-ui';
import type { BorderRadiusType, NumberInputProps, Theme } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';

export const NumberInputDisabledTemplate = (args: NumberInputProps & { themeBorderKind?: BorderRadiusType }) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = args.themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <NumberInput {...args} disabled />
    </ThemeProvider>
  );
};
