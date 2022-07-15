import { INPUT_DIMENSIONS_VALUES } from '#src/components/input';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import type { ChangeEvent } from 'react';
import * as React from 'react';
import { withDesign } from 'storybook-addon-designs';
import styled, { css, keyframes, ThemeProvider } from 'styled-components';
import { SelectField } from './index';
import { Highlight, Option, OptionGroup } from '#src/components/input/Select';
import { Theme } from '#src/components/themes';

export default {
  title: 'Admiral-2.1/Form Field/SelectField',
  component: SelectField,
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A72429',
    },
  },
  argTypes: {
    dimension: {
      options: INPUT_DIMENSIONS_VALUES,
      control: { type: 'radio' },
    },

    disabled: {
      control: { type: 'boolean' },
    },

    isLoading: {
      control: { type: 'boolean' },
    },

    multiple: {
      control: { type: 'boolean' },
    },

    readOnly: {
      control: { type: 'boolean' },
    },

    disableCopying: {
      control: { type: 'boolean' },
    },

    placeholder: {
      type: 'string',
    },

    onChange: {
      action: 'onChange',
    },

    defaultHighlighted: {
      control: { type: 'boolean' },
    },

    showCheckbox: {
      control: { type: 'boolean' },
    },

    displayClearIcon: {
      control: { type: 'boolean' },
    },

    displayInline: {
      control: { type: 'boolean' },
    },
    themeBorderKind: {
      control: {
        type: 'radio',
        options: ['Border radius 0', 'Border radius 2', 'Border radius 4', 'Border radius 8'],
      },
    },
  },
} as ComponentMeta<typeof SelectField>;

const jump = keyframes`
  50% {
    transform: translate3d(0, -7px, 0);
  }
`;

const animation = css`
  animation: ${jump} 0.35s ease-in-out;
`;

const Icon = styled.div<{ shouldAnimate?: boolean }>`
  width: 20px;
  height: 20px;
  border: 1px solid #8a96a8;
  border-radius: 50%;
  box-sizing: border-box;
  margin-right: 10px;
  transform-origin: bottom center;
  ${({ shouldAnimate }) => (shouldAnimate ? animation : '')}
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ExtraText = styled.div`
  color: #626f84;
`;

const OPTIONS_SIMPLE = [
  'teeext 1',
  'text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text ',
  'text 3',
  'text 4',
  'text 5',
  'texttt 6',
];

const OPTIONS = [
  {
    value: 'val1',
    text: 'Текст 1',
    extraText: 'Доооп Текст 1',
  },
  {
    value: 'val2',
    text: 'Текст 2',
    extraText: 'Доп Теttкст 2',
  },
  {
    value: 'val3',
    text: 'Текст 3',
    extraText: 'дддопТекст 3',
  },
  {
    value: 'val4',
    text: 'Текст 444',
    extraText: 'Доооп Тексттт 41232',
  },
];

async function wait(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const SimpleTemplate: ComponentStory<typeof SelectField> = (props) => {
  const [selectValue, setSelectValue] = React.useState('');

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
    props.onChange?.(e);
  };

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (props as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <SelectField
        mode="searchSelect"
        label="label"
        className="Search"
        value={selectValue}
        onChange={onChange}
        placeholder="Placeholder"
      >
        {OPTIONS_SIMPLE.map((option, ind) => (
          <Option key={option} value={option} disabled={ind === 4}>
            {option}
          </Option>
        ))}
      </SelectField>
    </ThemeProvider>
  );
};

const CustomOptionTemplate: ComponentStory<typeof SelectField> = (props) => {
  const [selectValue, setSelectValue] = React.useState(props.value ? String(props.value) : OPTIONS[2].value);

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
    props.onChange?.(e);
  };

  return (
    <>
      <SelectField mode="searchSelect" label="label" value={selectValue} onChange={onChange}>
        {OPTIONS.map((option) => (
          <Option key={option.value} value={option.value}>
            <Icon />
            <TextWrapper>
              <Highlight>{option.text}</Highlight>
              <ExtraText>
                <Highlight>{option.extraText}</Highlight>
              </ExtraText>
            </TextWrapper>
          </Option>
        ))}
      </SelectField>
    </>
  );
};

interface IMyIncredibleOptionProps {
  shouldAnimate?: boolean;
  text: string;
}

const MyIncredibleOption = ({ text, shouldAnimate }: IMyIncredibleOptionProps) => (
  <>
    <Icon shouldAnimate={shouldAnimate} />
    <TextWrapper>
      <Highlight>{text}</Highlight>
    </TextWrapper>
  </>
);

const RenderPropsTemplate: ComponentStory<typeof SelectField> = (props) => {
  const [selectValue, setSelectValue] = React.useState(props.value ? String(props.value) : OPTIONS[2].value);

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
    props.onChange?.(e);
  };

  return (
    <>
      <SelectField mode="searchSelect" label="label" value={selectValue} onChange={onChange}>
        {OPTIONS.map(({ text, value }) => (
          <Option
            key={value}
            value={value}
            renderOption={({ isHovered }) => (
              <MyIncredibleOption text={text} shouldAnimate={isHovered && value !== selectValue} />
            )}
          />
        ))}
      </SelectField>
    </>
  );
};

const OptionGroupTemplate: ComponentStory<typeof SelectField> = () => {
  const [selectValue, setSelectValue] = React.useState('Похо Торо Моронго');

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => setSelectValue(e.target.value);

  return (
    <>
      <SelectField mode="searchSelect" label="label" value={selectValue} onChange={onChange} dimension="xl">
        <OptionGroup label="Сегодня выступают">
          <Option value="Анигиляторная пушка">Анигиляторная пушка</Option>
          <Option value="Похо Торо Моронго">Похо Торо Моронго</Option>
        </OptionGroup>
        <OptionGroup label="Группа фрукты" disabled>
          <Option value="Саша Даль">Саша Даль</Option>
          <Option value="Алексей Елесин">Алексей Елесин</Option>
          <Option value="Константин Ионочкин">Константин Ионочкин</Option>
          <Option value="Анна Корженко">Анна Корженко</Option>
          <Option value="Фидель">Фидель</Option>
          <Option value="Константин Колешонок">Константин Колешонок</Option>
          <Option value="Алексей Орлов">Алексей Орлов</Option>
        </OptionGroup>
      </SelectField>
    </>
  );
};

const AsyncTemplate: ComponentStory<typeof SelectField> = (props) => {
  const [selectValue, setSelectValue] = React.useState(props.value ? String(props.value) : OPTIONS[2].value);
  const [options, setOptions] = React.useState<Array<{ value: string; text: string }>>([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true);

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
    props.onChange?.(e);
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  React.useEffect(() => {
    (async () => {
      setIsLoading(true);
      await wait(2000);
      setOptions(OPTIONS.map(({ value, text }) => ({ value, text })));
      setIsLoading(false);
    })();
  }, [searchValue]);

  return (
    <>
      <SelectField
        mode="searchSelect"
        label="label"
        value={selectValue}
        isLoading={isLoading}
        onChange={onChange}
        onInputChange={onInputChange}
        defaultHighlighted={false}
      >
        {options.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.text}
          </Option>
        ))}
      </SelectField>
    </>
  );
};

const TemplateSimpleMultiSelect: ComponentStory<typeof SelectField> = (props) => {
  const [selectValue, setSelectValue] = React.useState<string[]>(
    Array.from({ length: 10 }).map((_, ind) => String(ind)),
  );

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newValues = Array.from(e.target.selectedOptions).map((option) => option.value);
    setSelectValue(newValues);
    props.onChange?.(e);
  };

  return (
    <>
      <SelectField
        mode="searchSelect"
        label="label"
        value={selectValue}
        multiple={true}
        onChange={onChange}
        dimension="xl"
        displayClearIcon={true}
      >
        {Array.from({ length: 20 }).map((_option, ind) => (
          <Option key={ind} value={String(ind)}>
            <Highlight>{`${ind}0000`}</Highlight>
          </Option>
        ))}
      </SelectField>
    </>
  );
};

const TemplateNotFixedMultiSelect: ComponentStory<typeof SelectField> = (props) => {
  const [selectValue, setSelectValue] = React.useState<string[]>(
    Array.from({ length: 20 }).map((_, ind) => String(ind)),
  );

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newValues = Array.from(e.target.selectedOptions).map((option) => option.value);
    setSelectValue(newValues);
    props.onChange?.(e);
  };

  return (
    <>
      <SelectField
        mode="searchSelect"
        label="label"
        value={selectValue}
        multiple={true}
        onChange={onChange}
        idleHeight="full"
      >
        {Array.from({ length: 20 }).map((_option, ind) => (
          <Option key={ind} value={String(ind)}>
            <Highlight>{`${ind}0000`}</Highlight>
          </Option>
        ))}
      </SelectField>
    </>
  );
};

const TemplateMultiSelectCustomOption: ComponentStory<typeof SelectField> = () => {
  const [selectValue, setSelectValue] = React.useState<string[]>(
    Array.from({ length: 15 }).map((_, ind) => String(ind)),
  );

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(Array.from(e.target.selectedOptions).map((option) => option.value));
  };

  return (
    <>
      <SelectField mode="searchSelect" label="label" value={selectValue} multiple={true} onChange={onChange}>
        {Array.from({ length: 20 }).map((_option, ind) => (
          <Option key={ind} value={String(ind)} renderChip={() => String(ind)}>
            <TextWrapper>
              <Highlight>{`${ind}0000`}</Highlight>
              <ExtraText>
                <Highlight>{`Доп ${ind}`}</Highlight>
              </ExtraText>
            </TextWrapper>
          </Option>
        ))}
      </SelectField>
    </>
  );
};

export const SimpleSearchSelectStory = SimpleTemplate.bind({});
SimpleSearchSelectStory.args = {
  placeholder: 'Начните ввод для поиска',
};
SimpleSearchSelectStory.storyName = 'Простой SearchSelect';

export const CustomOptionSearchSelectStory = CustomOptionTemplate.bind({});
CustomOptionSearchSelectStory.args = {
  placeholder: 'Начните ввод для поиска',
};
CustomOptionSearchSelectStory.storyName = 'SearchSelect с кастомными опциями';

export const RenderPropsSearchSelectStory = RenderPropsTemplate.bind({});
RenderPropsSearchSelectStory.args = {
  placeholder: 'Начните ввод для поиска',
};
RenderPropsSearchSelectStory.storyName = 'SearchSelect с кастомными опциями через renderProps';

export const OptionGroupSearchSelectStory = OptionGroupTemplate.bind({});
OptionGroupSearchSelectStory.args = {
  placeholder: 'Начните ввод для поиска',
};
OptionGroupSearchSelectStory.storyName = 'SearchSelect с группами';

export const AsyncSearchSelectStory = AsyncTemplate.bind({});
AsyncSearchSelectStory.args = {
  placeholder: 'Начните ввод для поиска',
};
AsyncSearchSelectStory.storyName = 'Асинхронный SearchSelect';

export const SimpleMultiSearchSelectStory = TemplateSimpleMultiSelect.bind({});
SimpleMultiSearchSelectStory.args = {
  placeholder: 'Начните ввод для поиска',
};
SimpleMultiSearchSelectStory.storyName = 'Простой MultiSearchSelect';

export const ExpandedHeightMultiSearchSelectStory = TemplateNotFixedMultiSelect.bind({});
ExpandedHeightMultiSearchSelectStory.args = {
  placeholder: 'Начните ввод для поиска',
};
ExpandedHeightMultiSearchSelectStory.storyName = 'MultiSearchSelect с увеличенной по умолчанию высотой';

export const CustomOptionMultiSearchSelectStory = TemplateMultiSelectCustomOption.bind({});
CustomOptionMultiSearchSelectStory.args = {
  placeholder: 'Начните ввод для поиска',
};
CustomOptionMultiSearchSelectStory.storyName = 'MultiSearchSelect с кастомными опциями';
