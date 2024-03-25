import { useState } from 'react';
import { NumberInput, clearValue } from '@admiral-ds/react-ui';

function declOfNum(n: number, text_forms: Array<string>) {
  n = Math.abs(n) % 100;
  const n1 = n % 10;
  if (n > 10 && n < 20) {
    return text_forms[2];
  }
  if (n1 > 1 && n1 < 5) {
    return text_forms[1];
  }
  if (n1 == 1) {
    return text_forms[0];
  }
  return text_forms[2];
}

export const NumberInputControlledTemplate = () => {
  const [value1, setValue1] = useState<string | undefined>('50,00');
  const [value2, setValue2] = useState<string | undefined>('1');
  const [suffix, setSuffix] = useState('минута');

  return (
    <>
      <NumberInput
        value={value1}
        onChange={(event) => {
          console.log(event.target.value);
          setValue1(event.target.value);
        }}
        prefix="From"
        suffix="$"
        placeholder="From 0 $"
        style={{ marginBottom: '40px' }}
      />
      <NumberInput
        value={value2}
        onChange={(event) => {
          console.log(event.target.value);
          setValue2(event.target.value);
          setSuffix(declOfNum(Number(clearValue(event.target.value, 0)), ['минута', 'минуты', 'минут']));
        }}
        suffix={suffix}
        precision={0}
        placeholder="0 минут"
      />
    </>
  );
};
