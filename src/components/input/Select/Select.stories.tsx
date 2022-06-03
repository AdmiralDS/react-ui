import { INPUT_DIMENSIONS_VALUES } from '#src/components/input';
import { Modal, ModalButtonPanel, ModalContent, ModalTitle } from '#src/components/Modal';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import type { ChangeEvent } from 'react';
import * as React from 'react';
import { withDesign } from 'storybook-addon-designs';
import { Highlight, Option, OptionGroup, Select } from './index';
import { IOnCloseProps } from './types';
import { Button } from '#src/components/Button';
import { useState } from '@storybook/addons';
import styled, { css, keyframes, ThemeProvider } from 'styled-components';
import { Theme } from '#src/components/themes';
import { mediumGroupBorderRadius } from '#src/components/common/utils/borderRadius';

export default {
  title: 'Admiral-2.1/Input/Select',
  component: Select,
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

    defaultHighlighted: {
      control: { type: 'boolean' },
    },

    showCheckbox: {
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

    onChange: {
      action: 'onChange',
    },

    themeBorderKind: {
      control: {
        type: 'radio',
        options: ['Border radius 0', 'Border radius 2', 'Border radius 4', 'Border radius 8'],
      },
    },
  },
} as ComponentMeta<typeof Select>;

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

const FormValuesWrapper = styled.div`
  font-family: 'VTB Group UI', serif;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid black;
  border-radius: ${(p) => mediumGroupBorderRadius(p.theme.shape)};
  min-height: 100px;
  padding: 12px;
`;

const ExtraText = styled.div`
  color: #626f84;
`;

const OPTIONS_SIMPLE = [
  'teeext 1',
  'Гигантский текст, который настолько большой, что, когда он проходил мимо телевизора, ты пропустил 2 серии любимого сериала',
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

const OPTIONS_ASYNC = [
  {
    value: 'val1',
    text: 'Текст 1',
  },
  {
    value: 'val2',
    text: 'Текст 2',
  },
  {
    value: 'val3',
    text: 'Текст 3',
  },
  {
    value: 'val4',
    text: 'Текст 444',
  },
];

async function wait(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const SelectSimpleTemplate: ComponentStory<typeof Select> = (props) => {
  const [selectValue, setSelectValue] = React.useState('');

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => setSelectValue(e.target.value);

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (props as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <Select {...props} value={selectValue} onChange={onChange} placeholder="Select option">
        <Option value="Анигиляторная пушка">Анигиляторная пушка</Option>
        <Option value="Похо Торо Моронго">Похо Торо Моронго</Option>
        <Option value="Саша Даль">Саша Даль</Option>
      </Select>
    </ThemeProvider>
  );
};

const SearchSelectSimpleTemplate: ComponentStory<typeof Select> = (props) => {
  const [selectValue, setSelectValue] = React.useState('');

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
    props.onChange?.(e);
  };

  return (
    <>
      <Select {...props} placeholder="Placeholder" mode="searchSelect" value={selectValue} onChange={onChange}>
        {OPTIONS_SIMPLE.map((option, ind) => (
          <Option key={option} value={option} disabled={ind === 4}>
            {option}
          </Option>
        ))}
      </Select>
    </>
  );
};

const CustomOptionTemplate: ComponentStory<typeof Select> = (props) => {
  const [selectValue, setSelectValue] = React.useState(props.value ? String(props.value) : OPTIONS[2].value);

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
    props.onChange?.(e);
  };

  return (
    <>
      <Select {...props} value={selectValue} mode="searchSelect" onChange={onChange}>
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
      </Select>
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

const RenderPropsTemplate: ComponentStory<typeof Select> = (props) => {
  const [selectValue, setSelectValue] = React.useState(props.value ? String(props.value) : OPTIONS[2].value);

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
    props.onChange?.(e);
  };

  return (
    <>
      <Select {...props} value={selectValue} mode="searchSelect" onChange={onChange}>
        {OPTIONS.map(({ text, value }) => (
          <Option
            key={value}
            value={value}
            renderOption={({ isHovered }) => (
              <MyIncredibleOption text={text} shouldAnimate={isHovered && value !== selectValue} />
            )}
          />
        ))}
      </Select>
    </>
  );
};

const OptionGroupTemplate: ComponentStory<typeof Select> = (props) => {
  const [selectValue, setSelectValue] = React.useState('Похо Торо Моронго');

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => setSelectValue(e.target.value);

  return (
    <>
      <Select {...props} value={selectValue} mode="searchSelect" onChange={onChange} dimension="xl">
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
      </Select>
    </>
  );
};

const AsyncTemplate: ComponentStory<typeof Select> = (props) => {
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
      await wait(1500);
      if (searchValue.length === 0) setOptions([...OPTIONS_ASYNC]);
      if (searchValue.length === 1) setOptions([...OPTIONS_ASYNC.slice(0, 2), { value: 'new', text: 'neeeew' }]);
      if (searchValue.length === 2)
        setOptions([
          { value: 'new', text: 'neeeew' },
          ...OPTIONS_ASYNC.slice(2, 3),
          { value: 'new2', text: 'neeeew2' },
          { value: 'new3', text: '33neeeew' },
        ]);
      if (searchValue.length >= 3) setOptions([]);
      setIsLoading(false);
    })();
  }, [searchValue]);

  return (
    <>
      <Select
        {...props}
        value={selectValue}
        isLoading={isLoading}
        onChange={onChange}
        onInputChange={onInputChange}
        defaultHighlighted={false}
        mode="searchSelect"
      >
        {options.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.text}
          </Option>
        ))}
      </Select>
    </>
  );
};

const Form = styled.form`
  > * {
    margin-bottom: 12px;
  }
`;

const formDataToObject = (data: FormData) => {
  const obj = {} as Record<string, any>;
  data.forEach((value, key) => (obj[key] = value));
  return obj;
};

const UncontrolledTemplate: ComponentStory<typeof Select> = (props) => {
  const [submitValues, setSubmitValues] = useState<null | Record<string, any>>(null);

  const onSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const formElem = evt.target as HTMLFormElement;

    if (formElem) {
      setSubmitValues(formDataToObject(new FormData(formElem)));
    }
  };

  return (
    <>
      <Form action="" onSubmit={onSubmit}>
        <Select {...props} name="myOwesomeField" mode="searchSelect" defaultValue={OPTIONS_SIMPLE[0]}>
          {OPTIONS_SIMPLE.map((option, ind) => (
            <Option key={option} value={option} disabled={ind === 4}>
              {option}
            </Option>
          ))}
        </Select>
        <Button type="submit" dimension="m">
          Cабмить меня, чего ты медлишь?!
        </Button>
        <FormValuesWrapper>
          {submitValues === null
            ? 'Здесь будут выводится значения, которые ты засабмитишь...'
            : JSON.stringify(submitValues)}
        </FormValuesWrapper>
      </Form>
    </>
  );
};

const TemplateSimpleMultiSelect: ComponentStory<typeof Select> = (props) => {
  const [selectValue, setSelectValue] = React.useState<string[]>([]);

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newValues = Array.from(e.target.selectedOptions).map((option) => option.value);
    setSelectValue(newValues);
    props.onChange?.(e);
  };

  return (
    <>
      <Select
        {...props}
        value={selectValue}
        multiple={true}
        onChange={onChange}
        dimension="xl"
        displayClearIcon={true}
        placeholder="Placeholder"
        mode="searchSelect"
      >
        <Option value="big">
          Здесь ооооочень большой текст, который может, так сказать, и не поместиться в одну строку
        </Option>
        {Array.from({ length: 20 }).map((_option, ind) => (
          <Option key={ind} value={String(ind)} disabled={[1, 3].includes(ind)}>
            {`${ind}0000`}
          </Option>
        ))}
      </Select>
    </>
  );
};

const TemplateMultiSelect: ComponentStory<typeof Select> = (props) => {
  const [selectValue, setSelectValue] = React.useState<string[]>(
    Array.from({ length: 20 })
      .map((_, ind) => String(ind))
      .slice(0, 10),
  );

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newValues = Array.from(e.target.selectedOptions).map((option) => option.value);
    setSelectValue(newValues);
    props.onChange?.(e);
  };

  return (
    <>
      <Select
        {...props}
        value={selectValue}
        multiple={true}
        onChange={onChange}
        dimension="xl"
        displayClearIcon={true}
        placeholder="Placeholder"
      >
        <Option value="big">
          Здесь ооооочень большой текст, который может, так сказать, и не поместиться в одну строку
        </Option>
        {Array.from({ length: 20 }).map((_option, ind) => (
          <Option key={ind} value={String(ind)} disabled={[1, 3].includes(ind)}>
            {`${ind}0000`}
          </Option>
        ))}
      </Select>
    </>
  );
};

const TemplateNotFixedMultiSelect: ComponentStory<typeof Select> = (props) => {
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
      <Select {...props} value={selectValue} mode="searchSelect" multiple={true} onChange={onChange} idleHeight="full">
        {Array.from({ length: 20 }).map((_option, ind) => (
          <Option key={ind} value={String(ind)}>
            <Highlight>{`${ind}0000`}</Highlight>
          </Option>
        ))}
      </Select>
    </>
  );
};

const TemplateMultiSelectCustomOption: ComponentStory<typeof Select> = (props) => {
  const [selectValue, setSelectValue] = React.useState<string[]>(
    Array.from({ length: 15 }).map((_, ind) => String(ind)),
  );

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(Array.from(e.target.selectedOptions).map((option) => option.value));
  };

  return (
    <>
      <Select {...props} value={selectValue} multiple={true} onChange={onChange} mode="searchSelect">
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
      </Select>
    </>
  );
};

const TemplateMultiSelectCustomChip: ComponentStory<typeof Select> = (props) => {
  const [selectValue, setSelectValue] = React.useState<string[]>(
    Array.from({ length: 5 }).map((_, ind) => String(ind)),
  );
  const [modalOpened, setModalOpened] = React.useState(false);
  const [valueToDelete, setValueToDelete] = React.useState<string | null>(null);

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(Array.from(e.target.selectedOptions).map((option) => option.value));
  };
  const deleteValue = (value: string) => setSelectValue((prev) => prev.filter((prevValue) => prevValue !== value));

  const onCloseModal = () => {
    setValueToDelete(null);
    setModalOpened(false);
  };
  const onOpenModal = () => setModalOpened(true);

  const onChipClose = ({ value }: IOnCloseProps) => {
    setValueToDelete(value);
    onOpenModal();
  };
  const renderChip = (ind: number) => () => ({ children: `${ind} $`, onClose: onChipClose });

  const onYes = () => {
    if (valueToDelete) deleteValue(valueToDelete);
    onCloseModal();
  };

  return (
    <>
      <Select {...props} value={selectValue} multiple={true} onChange={onChange} mode="searchSelect">
        {Array.from({ length: 20 }).map((_option, ind) => (
          <Option key={ind} value={String(ind)} renderChip={renderChip(ind)} disabled={[0, 2].includes(ind)}>
            {ind}
          </Option>
        ))}
      </Select>
      {modalOpened && (
        <Modal onClose={onCloseModal}>
          <ModalTitle>Попап неуверенности</ModalTitle>
          <ModalContent>Уверены, что хотите удалить опцию?</ModalContent>
          <ModalButtonPanel>
            <Button appearance="primary" dimension="m" onClick={onYes}>
              О да
            </Button>
            <Button appearance="secondary" dimension="m" onClick={onCloseModal}>
              Нет, был не прав
            </Button>
          </ModalButtonPanel>
        </Modal>
      )}
    </>
  );
};

export const SimpleSelectStory = SelectSimpleTemplate.bind({});
SimpleSelectStory.args = {
  placeholder: 'Начните ввод для поиска',
};
SimpleSelectStory.storyName = 'Select. Простой Select';

// export const SelectStory = SelectTemplate.bind({});
// SelectStory.storyName = 'Select на основе SearchSelect';

export const MultiSelectStory = TemplateMultiSelect.bind({});
MultiSelectStory.storyName = 'Select. Простой MultiSelect';

export const SimpleSearchSelectStory = SearchSelectSimpleTemplate.bind({});
SimpleSearchSelectStory.args = {
  placeholder: 'Начните ввод для поиска',
};
SimpleSearchSelectStory.storyName = 'SearchSelect. Простой SearchSelect';

export const CustomOptionSearchSelectStory = CustomOptionTemplate.bind({});
CustomOptionSearchSelectStory.storyName = 'SearchSelect. С кастомными опциями';

export const RenderPropsSearchSelectStory = RenderPropsTemplate.bind({});
RenderPropsSearchSelectStory.storyName = 'SearchSelect. С кастомными опциями через renderProps';

export const OptionGroupSearchSelectStory = OptionGroupTemplate.bind({});
OptionGroupSearchSelectStory.storyName = 'SearchSelect. С группами';

export const AsyncSearchSelectStory = AsyncTemplate.bind({});
AsyncSearchSelectStory.storyName = 'SearchSelect. Асинхронный';

export const UncontrolledSearchSelectStory = UncontrolledTemplate.bind({});
UncontrolledSearchSelectStory.storyName = 'SearchSelect. Некотролируемый';

export const SimpleMultiSearchSelectStory = TemplateSimpleMultiSelect.bind({});
SimpleMultiSearchSelectStory.storyName = 'SearchSelect. Простой MultiSearchSelect';

export const ExpandedHeightMultiSearchSelectStory = TemplateNotFixedMultiSelect.bind({});
ExpandedHeightMultiSearchSelectStory.storyName = 'MultiSearchSelect с увеличенной по умолчанию высотой';

export const CustomOptionMultiSearchSelectStory = TemplateMultiSelectCustomOption.bind({});
CustomOptionMultiSearchSelectStory.storyName = 'MultiSearchSelect с кастомными опциями';

export const CustomChipMultiSearchSelectStory = TemplateMultiSelectCustomChip.bind({});
CustomChipMultiSearchSelectStory.storyName = 'MultiSearchSelect с кастомным обработчиком удаления чипса';
