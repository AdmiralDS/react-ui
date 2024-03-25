import { useRef, useState } from 'react';
import type { ChangeEvent, ReactNode } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';

import { InputEx, MenuItem } from '@admiral-ds/react-ui';
import type { InputExProps, MenuItemProps, RenderProps, RenderPropsType, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

const Separator = styled.div`
  height: 20px;
`;

const PREFIX_OPTIONS = ['prefix One', 'prefix Two', 'prefix Three'];
const SUFFIX_OPTIONS = ['One', 'Two', 'Three'];

const CustomValueStyle = styled.div`
  color: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']});
  border: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']}) 1px dashed;
`;

const CustomMenuItem = styled(MenuItem)`
  color: deeppink;
`;

function customValueRender({ value }: RenderProps) {
  return <CustomValueStyle>{String(value)}</CustomValueStyle>;
}
function customOptionRender({ value, ...props }: RenderPropsType<ReactNode> & MenuItemProps) {
  return <CustomMenuItem {...props}>{String(value)}</CustomMenuItem>;
}

const containerContrastBorder = css`
  border: dashed 2px var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
`;

export const InputExCustomTemplate = ({
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
        prefixValue="Prefix"
        onPrefixValueChange={setPrefixValue}
        renderPrefixValue={customValueRender}
        suffixValue="Suffix"
        onSuffixValueChange={setSuffixValue}
        renderSuffixValue={customValueRender}
        placeholder={placeholder}
      />
      <Separator />
      <InputEx
        {...props}
        containerRef={inputRef}
        value={localValue}
        onChange={handleChange}
        prefixValue={prefixValue}
        prefixValueList={PREFIX_OPTIONS}
        onPrefixValueChange={setPrefixValue}
        renderPrefixValue={customValueRender}
        renderPrefixOption={customOptionRender}
        suffixValue={suffixValue}
        suffixValueList={SUFFIX_OPTIONS}
        onSuffixValueChange={setSuffixValue}
        renderSuffixValue={customValueRender}
        renderSuffixOption={customOptionRender}
        prefixDropContainerStyle={{
          dropContainerCssMixin: containerContrastBorder,
          dropContainerClassName: 'prefixDropContainerClass',
        }}
        suffixDropContainerStyle={{
          dropContainerClassName: 'suffixDropContainerClass',
          dropContainerStyle: { border: 'dashed 2px red' },
        }}
        placeholder={placeholder}
      />
    </ThemeProvider>
  );
};
