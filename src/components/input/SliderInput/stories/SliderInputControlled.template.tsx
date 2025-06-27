import * as React from 'react';
import { SliderInput, T } from '@admiral-ds/react-ui';
import type { SliderInputProps, BorderRadiusType } from '@admiral-ds/react-ui';
import styled, { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

const Separator = styled.div<{ $height?: number }>`
  height: ${(p) => p.$height || 8}px;
`;

export const SliderInputControlledTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: SliderInputProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [slider1, setSlider1] = React.useState(String(props.value ?? ''));

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div">
        В качестве значений параметров value и defaultValue в SliderInput необходимо передавать уже отформатированную
        строку с разделителями тысяч (суффикс/префикс в value/defaultValue вносить не нужно).
        <Separator />
        Если вы используете контролируемый SliderInput, то в качестве значения value вам досточно указывать
        event.target.value, где event - это нативное событие инпута, передаваемое к качестве параметра в колбек
        onChange. Также в колбек onChange передаются параметры fullStr и shortStr, однако в будущем планируется убрать
        их и оставить только event по аналогии с api стандартного html-инпута.
        <Separator />
        Кроме того, библиотека предоставляет утилиту fitToCurrency, которая возвращает строку отформатированную в
        денежном формате. В качестве параметров данная утилита принимает value - значение, которое надо отформатировать,
        а также параметры precision, decimal, thousand. Также библиотека предоставляет утилиту clearValue, которая
        возвращает входную строку, из которой удалены все символы кроме цифр, символа decimal и минуса.
      </T>
      <Separator $height={24} />
      <SliderInput
        {...props}
        value={slider1}
        onChange={(full, short, event) => {
          // eslint-disable-next-line no-console
          console.log({ full, short, event });
          setSlider1(event.target.value);
        }}
      />
    </ThemeProvider>
  );
};
