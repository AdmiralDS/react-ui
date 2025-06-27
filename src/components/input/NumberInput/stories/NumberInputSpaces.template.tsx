import { NumberInput, T } from '@admiral-ds/react-ui';
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
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Пользователь может с помощью параметров hideSpaceAfterPrefix и hideSpaceBeforeSuffix управлять видимостью
        пробелов после префикса и перед суффиксом соответственно. По умолчанию после префикса перед значением инпута и
        перед суффиксом после значения инпута пробелы проставляются.
      </T>
      <NumberInput
        {...props}
        onChange={(event) => {
          // eslint-disable-next-line no-console
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
          // eslint-disable-next-line no-console
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
