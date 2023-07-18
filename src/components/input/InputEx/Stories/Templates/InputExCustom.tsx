import * as React from 'react';
import type { ChangeEvent } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';

import { InputEx, MenuItem } from '@admiral-ds/react-ui';
import type {
  InputExProps,
  Theme,
  ValueType,
  MenuItemProps,
  RenderProps,
  RenderPropsType,
  BorderRadiusType,
} from '@admiral-ds/react-ui';

const Separator = styled.div`
  height: 20px;
`;

const PREFIX_OPTIONS = ['prefix One', 'prefix Two', 'prefix Three'];
const SUFFIX_OPTIONS = ['One', 'Two', 'Three'];

const CustomValueStyle = styled.div`
  color: darkblue;
  border: darkblue 1px dashed;
`;

const CustomMenuItem = styled(MenuItem)`
  color: deeppink;
`;

function customValueRender({ value }: RenderProps) {
  return <CustomValueStyle>{String(value)}</CustomValueStyle>;
}
function customOptionRender({ value, ...props }: RenderPropsType<ValueType> & MenuItemProps) {
  return <CustomMenuItem {...props}>{String(value)}</CustomMenuItem>;
}

const containerContrastBorder = css`
  border: dashed 2px ${(p) => p.theme.color['Neutral/Neutral 90']};
`;

export const InputExCustomTemplate = ({
  value = 'Привет!',
  placeholder = 'Placeholder',
  ...props
}: InputExProps & { themeBorderKind: BorderRadiusType }) => {
  const [localValue, setValue] = React.useState<string>(String(value) ?? '');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
    props.onChange?.(e);
  };

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = props.themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  const [prefixValue, setPrefixValue] = React.useState<ValueType>('prefix One');
  const [suffixValue, setSuffixValue] = React.useState<ValueType>('One');

  const inputRef = React.useRef<HTMLInputElement>(null);
  return (
    <ThemeProvider theme={swapBorder}>
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
