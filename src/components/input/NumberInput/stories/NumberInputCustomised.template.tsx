import { NumberInput, T } from '@admiral-ds/react-ui';
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
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Пользователь может указать с помощью параметра precision (по умолчанию равен 2), с какой точностью компонент
        должен выводить число (сколько разрядов должно быть в дробной части числа). В этом случае при потере фокуса,
        если число содержит не все разряды в дробной части или дробная часть отсутствует, должна произойти корректировка
        значения и недостающее количество разрядов должно быть заполнено нулями.
      </T>
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
