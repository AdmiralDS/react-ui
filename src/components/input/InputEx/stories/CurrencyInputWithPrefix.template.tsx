import { forwardRef, useState } from 'react';
import type { ChangeEvent, ComponentProps, ReactNode } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { type InputExProps, type BorderRadiusType, InputEx, refSetter } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';
import { maskitoNumberOptionsGenerator } from '@maskito/kit';
import { useMaskito } from '@maskito/react';

const SUFFIX_OPTIONS = ['₽', '$', '€', '¥', '£'];

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

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const CurrencyInputWithPrefixTemplate = ({
  placeholder = 'Placeholder',
  themeBorderKind,
  CSSCustomProps,
  ...props
}: InputExProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [localValueOne, setValueOne] = useState<string>(props.value ? String(props.value) : '');
  const [localValueTwo, setValueTwo] = useState<string>(props.value ? String(props.value) : '');
  const [suffixValue, setSuffixValue] = useState<ReactNode>('₽');

  const handleChangeOne = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValueOne(inputValue);
    props.onChange?.(e);
  };
  const handleChangeTwo = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValueTwo(inputValue);
    props.onChange?.(e);
  };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <Wrapper>
        <CurrencyInput
          {...props}
          value={localValueOne}
          onInput={handleChangeOne}
          prefixValue="От"
          placeholder={placeholder}
          displayClearIcon
          suffixValue={suffixValue}
          suffixValueList={SUFFIX_OPTIONS}
          onSuffixValueChange={setSuffixValue}
          prefixDropContainerStyle={{
            dropContainerClassName: 'prefixDropContainerClass',
          }}
          suffixDropContainerStyle={{
            dropContainerClassName: 'suffixDropContainerClass',
          }}
          style={{ width: '400px' }}
        />
        <CurrencyInput
          {...props}
          value={localValueTwo}
          onInput={handleChangeTwo}
          prefixValue="До"
          placeholder={placeholder}
          displayClearIcon
          suffixValue={suffixValue}
          suffixValueList={SUFFIX_OPTIONS}
          onSuffixValueChange={setSuffixValue}
          prefixDropContainerStyle={{
            dropContainerClassName: 'prefixDropContainerClass',
          }}
          suffixDropContainerStyle={{
            dropContainerClassName: 'suffixDropContainerClass',
          }}
          style={{ width: '400px' }}
        />
      </Wrapper>
    </ThemeProvider>
  );
};
