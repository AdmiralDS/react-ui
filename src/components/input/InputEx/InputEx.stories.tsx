import type { ChangeEvent } from 'react';
import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { RenderProps } from './index';
import { InputEx } from './index';
import { withDesign } from 'storybook-addon-designs';
import { INPUT_DIMENSIONS_VALUES } from '#src/components/input/types';
import type { Theme } from '#src/components/themes';
import styled, { css, ThemeProvider } from 'styled-components';
import type { ValueType } from './ValueType';
import { ALL_BORDER_RADIUS_VALUES } from '#src/components/themes/borderRadius';
import type { RenderPropsType } from '#src/components/input/InputEx/SuffixSelect';
import type { MenuItemProps } from '#src/components/Menu/MenuItem';
import { MenuItem } from '#src/components/Menu/MenuItem';

export default {
  title: 'Admiral-2.1/Input/InputEx',
  component: InputEx,
  decorators: [withDesign],
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A60376',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A60982',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A61046',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: INPUT_DIMENSIONS_VALUES,
      control: { type: 'radio' },
    },

    disabled: {
      control: { type: 'boolean' },
    },
    readOnly: {
      control: { type: 'boolean' },
    },
    disableCopying: {
      control: { type: 'boolean' },
    },
    displayStatusIcon: {
      control: { type: 'boolean' },
    },
    displayClearIcon: {
      control: { type: 'boolean' },
    },
    placeholder: {
      type: 'string',
    },
    prefixValue: {
      type: 'string',
    },
    suffixValue: {
      type: 'string',
    },
    onChange: {
      action: 'onChange',
    },
    icons: {
      control: false,
    },
    containerRef: {
      control: false,
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof InputEx>;

const Separator = styled.div`
  height: 20px;
`;

const Template: ComponentStory<typeof InputEx> = (props) => {
  const cleanProps = (Object.keys(props) as Array<keyof typeof props>).reduce((acc, key) => {
    if (props[key] !== undefined) acc[key] = props[key];

    return acc;
  }, {} as Record<any, any>);

  const [localValueOne, setValueOne] = React.useState<string>(
    props.value ? String(props.value) : 'Вариант с префиксом',
  );
  const [localValueTwo, setValueTwo] = React.useState<string>(
    props.value ? String(props.value) : 'Вариант с суффиксом',
  );
  const [localValueThree, setValueThree] = React.useState<string>(
    props.value ? String(props.value) : 'Вариант с префиксом и суффиксом',
  );

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

  const handleChangeThree = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValueThree(inputValue);
    props.onChange?.(e);
  };

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (props as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <InputEx {...cleanProps} value={localValueOne} onChange={handleChangeOne} prefixValue="Prefix" />
      <Separator />
      <InputEx {...cleanProps} value={localValueTwo} onChange={handleChangeTwo} suffixValue="Suffix" />
      <Separator />
      <InputEx
        {...cleanProps}
        value={localValueThree}
        onChange={handleChangeThree}
        prefixValue="Prefix"
        suffixValue="Suffix"
      />
    </ThemeProvider>
  );
};

const PREFIX_OPTIONS = ['prefix One', 'prefix Two', 'prefix Three'];
const SUFFIX_OPTIONS = ['One', 'Two', 'Three'];

const Template2: ComponentStory<typeof InputEx> = (props) => {
  const cleanProps = (Object.keys(props) as Array<keyof typeof props>).reduce((acc, key) => {
    if (props[key] !== undefined) acc[key] = props[key];

    return acc;
  }, {} as Record<any, any>);

  const [localValue, setValue] = React.useState<string>(String(props.value) ?? '');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
    props.onChange?.(e);
  };

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (props as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  const [prefixValue, setPrefixValue] = React.useState<ValueType>('prefix One');
  const [suffixValue, setSuffixValue] = React.useState<ValueType>('One');

  const inputRef = React.useRef<HTMLInputElement>(null);
  return (
    <ThemeProvider theme={swapBorder}>
      <InputEx
        {...cleanProps}
        containerRef={inputRef}
        value={localValue}
        onChange={handleChange}
        prefixValue={prefixValue}
        prefixValueList={PREFIX_OPTIONS}
        onPrefixValueChange={setPrefixValue}
        suffixValue={suffixValue}
        suffixValueList={SUFFIX_OPTIONS}
        onSuffixValueChange={setSuffixValue}
      />
    </ThemeProvider>
  );
};

const CustomValueStyle = styled.div`
  color: darkblue;
  border: darkblue 1px dashed;
`;

const CustomMenuItem = styled(MenuItem)`
  color: deeppink;
`;

function customValueRender({ value }: RenderProps) {
  return <CustomValueStyle>{value}</CustomValueStyle>;
}
function customOptionRender({ value, ...props }: RenderPropsType<ValueType> & MenuItemProps) {
  return <CustomMenuItem {...props}>{value}</CustomMenuItem>;
}

const containerContrastBorder = css`
  border: dashed 2px ${(p) => p.theme.color['Neutral/Neutral 90']};
`;

const Template3: ComponentStory<typeof InputEx> = (props) => {
  const cleanProps = (Object.keys(props) as Array<keyof typeof props>).reduce((acc, key) => {
    if (props[key] !== undefined) acc[key] = props[key];

    return acc;
  }, {} as Record<any, any>);

  const [localValue, setValue] = React.useState<string>(String(props.value) ?? '');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
    props.onChange?.(e);
  };

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (props as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  const [prefixValue, setPrefixValue] = React.useState<ValueType>('prefix One');
  const [suffixValue, setSuffixValue] = React.useState<ValueType>('One');

  const inputRef = React.useRef<HTMLInputElement>(null);
  return (
    <ThemeProvider theme={swapBorder}>
      <InputEx
        {...cleanProps}
        containerRef={inputRef}
        value={localValue}
        onChange={handleChange}
        prefixValue="Prefix"
        onPrefixValueChange={setPrefixValue}
        renderPrefixValue={customValueRender}
        suffixValue="Suffix"
        onSuffixValueChange={setSuffixValue}
        renderSuffixValue={customValueRender}
      />
      <Separator />
      <InputEx
        {...cleanProps}
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
        dropContainerCssMixin={containerContrastBorder}
      />
    </ThemeProvider>
  );
};

export const InputExStory = Template.bind({});
InputExStory.args = {
  placeholder: 'Placeholder',
};
InputExStory.storyName = 'Базовый InputExtended';

export const InputExStory2 = Template2.bind({});
InputExStory2.args = {
  value: 'Привет!',
  placeholder: 'Placeholder',
};
InputExStory2.storyName = 'InputExtended с выбором префикса и суффикса';

export const InputExStory3 = Template3.bind({});
InputExStory3.args = {
  value: 'Привет!',
  placeholder: 'Placeholder',
};
InputExStory3.storyName = 'InputExtended. Кастомизация';
