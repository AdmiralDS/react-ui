import { useRef, useState } from 'react';
import type { ChangeEvent, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { InputEx } from '@admiral-ds/react-ui';
import type { BorderRadiusType, InputExProps } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

const PREFIX_OPTIONS = ['prefix One', 'prefix Two', 'prefix Three'];
const SUFFIX_OPTIONS = ['One', 'Two', 'Three'];

export const InputExPrefixSuffixSelectTemplate = ({
  value = 'Привет!',
  placeholder = 'Placeholder',
  themeBorderKind,
  CSSCustomProps,
  ...props
}: InputExProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [localValue, setValue] = useState<string>(String(value) ?? '');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
    props.onChange?.(e);
  };

  const [prefixValue, setPrefixValue] = useState<ReactNode>('prefix One');
  const [suffixValue, setSuffixValue] = useState<ReactNode>('One');

  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <InputEx
        {...props}
        containerRef={inputRef}
        value={localValue}
        onChange={handleChange}
        prefixValue={prefixValue}
        prefixValueList={PREFIX_OPTIONS}
        onPrefixValueChange={setPrefixValue}
        suffixValue={suffixValue}
        suffixValueList={SUFFIX_OPTIONS}
        onSuffixValueChange={setSuffixValue}
        prefixDropContainerStyle={{ dropContainerClassName: 'prefixDropContainerClass' }}
        suffixDropContainerStyle={{ dropContainerClassName: 'suffixDropContainerClass' }}
        placeholder={placeholder}
      />
    </ThemeProvider>
  );
};
