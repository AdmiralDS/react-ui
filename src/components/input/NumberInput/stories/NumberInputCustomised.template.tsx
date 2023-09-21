import { NumberInput } from '@admiral-ds/react-ui';
import type { BorderRadiusType, NumberInputProps } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

export const NumberInputCustomisedTemplate = ({
  themeBorderKind,
  ...props
}: NumberInputProps & { themeBorderKind?: BorderRadiusType }) => {
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind)}>
      <NumberInput
        {...props}
        onChange={(event) => {
          console.log(event.target.value);
        }}
        suffix="$"
        thousand=","
        precision={1}
        placeholder="0.0 $"
      />
    </ThemeProvider>
  );
};
