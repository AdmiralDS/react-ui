import { forwardRef, useState } from 'react';
import type { ChangeEvent, ComponentProps, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { type InputExProps, type BorderRadiusType, T, InputEx, refSetter, clearValue } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';
import { maskitoNumberOptionsGenerator } from '@maskito/kit';
import { useMaskito } from '@maskito/react';

const SUFFIX_OPTIONS = ['₽', '$', '€', '¥', '£'];

const options = maskitoNumberOptionsGenerator({
  decimalSeparator: ',',
  thousandSeparator: ' ',
  precision: 2,
  max: 2000,
  min: -5,
});

/**
 * В компоненте необходимо использовать onInput по причине отсутствия onChange.
 * В документации в разделе Controlled masked input описана проблема.
 * https://maskito.dev/frameworks/react
 */
const CurrencyInput = forwardRef<HTMLInputElement, Omit<ComponentProps<typeof InputEx>, 'onChange'>>((props, ref) => {
  const inputRef = useMaskito({ options });

  return <InputEx {...props} ref={refSetter(ref, inputRef)} />;
});

function convertStrToNum(str: string, precision: number, decimal: string) {
  return Number(clearValue(str, precision, decimal).replace(decimal, '.'));
}

export const CurrencyInputMinMaxValueTemplate = ({
  placeholder = 'Placeholder',
  themeBorderKind,
  CSSCustomProps,
  ...props
}: InputExProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [localValueOne, setValueOne] = useState<string>(props.value ? String(props.value) : '');
  const [suffixValue, setSuffixValue] = useState<ReactNode>('₽');
  const [status, setStatus] = useState<InputExProps['status'] | undefined>(undefined);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;

    const numValue = convertStrToNum(inputValue, 2, ',');

    if (inputValue && numValue > 10 && numValue < 1000) {
      setStatus('success');
    } else {
      setStatus('error');
    }
    setValueOne(inputValue);
    props.onChange?.(e);
  };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Пример с ограничением в маске min = -5, max = 2000, и подсвечивание статуса success если 10 {'<'} value {'<'}{' '}
        1000.
      </T>
      <CurrencyInput
        {...props}
        value={localValueOne}
        onInput={handleChange}
        placeholder={placeholder}
        displayClearIcon
        suffixValue={suffixValue}
        suffixValueList={SUFFIX_OPTIONS}
        onSuffixValueChange={setSuffixValue}
        status={status}
        suffixDropContainerStyle={{
          dropContainerClassName: 'suffixDropContainerClass',
        }}
        style={{ width: '400px' }}
      />
    </ThemeProvider>
  );
};
