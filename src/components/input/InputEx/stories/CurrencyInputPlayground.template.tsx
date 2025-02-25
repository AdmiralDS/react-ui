import { forwardRef, useState } from 'react';
import type { ChangeEvent, ComponentProps, ReactNode } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { type InputExProps, type BorderRadiusType, T, InputEx, refSetter } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';
import { maskitoNumberOptionsGenerator } from '@maskito/kit';
import { useMaskito } from '@maskito/react';

const SUFFIX_OPTIONS = ['₽', '$', '€', '¥', '£'];

const Separator = styled.div`
  height: 8px;
`;

const options = maskitoNumberOptionsGenerator({
  decimalSeparator: ',',
  thousandSeparator: ' ',
  precision: 2,
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

export const CurrencyInputPlaygroundTemplate = ({
  placeholder = 'Placeholder',
  themeBorderKind,
  CSSCustomProps,
  ...props
}: InputExProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [localValueOne, setValueOne] = useState<string>(props.value ? String(props.value) : '152,00');
  const [suffixValue, setSuffixValue] = useState<ReactNode>('₽');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValueOne(inputValue);
    props.onChange?.(e);
  };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Компонент для ввода числовых значений валюты с точностью до двух знаков после запятой. Строится на основе
        компонента Input Extended. Особенности:
        <li>Возможен ввод как целых чисел, так и с двумя знаками после запятой.</li>
        <li>Если при вводе цифр нажать «,» (запятая), то включается маска ввода сотых значений.</li>
        <li>Введенная «.» (точка) автоматически конвертируется в «,» (запятая).</li>
        <li>
          Валюта ввода может быть как фиксированной (только рубли, например), так и изменяемой через суффикс поля.
        </li>
        <li>Автопробел каждые три знака в целой части суммы.</li>
        <li>Можно указывать минимальные и максимальные значения для вводимой суммы.</li>
        <Separator />
        Для реализации маски была использована библиотека Maskito.
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
        suffixDropContainerStyle={{
          dropContainerClassName: 'suffixDropContainerClass',
        }}
        style={{ width: '400px' }}
      />
    </ThemeProvider>
  );
};
