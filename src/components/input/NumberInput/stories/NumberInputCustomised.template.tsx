import { NumberInput } from '@admiral-ds/react-ui';
import type { BorderRadiusType, NumberInputProps } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

export const NumberInputCustomisedTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: NumberInputProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <NumberInput
        {...props}
        onChange={(event) => {
          // eslint-disable-next-line no-console
          console.log(event.target.value);
        }}
        suffix="$"
        thousand=","
        decimal="."
        precision={1}
        placeholder="0.0 $"
      />
    </ThemeProvider>
  );
};
