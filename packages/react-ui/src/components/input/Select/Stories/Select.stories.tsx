import { INPUT_DIMENSIONS_VALUES, INPUT_STATUS_VALUES } from '#src/components/input';
import { Modal, ModalButtonPanel, ModalContent, ModalTitle } from '#src/components/Modal';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { ChangeEvent } from 'react';
import * as React from 'react';
import { withDesign } from 'storybook-addon-designs';
import { Option, OptionGroup, Select } from '#src/components/input/Select';
import type { IOnCloseProps } from '../types';
import { Button } from '#src/components/Button';
import { useState } from '@storybook/addons';
import { ThemeProvider } from 'styled-components';
import type { Theme } from '#src/components/themes';
import { MenuActionsPanel } from '#src/components/Menu/MenuActionsPanel';
import { TextButton } from '#src/components/TextButton';
import { Cuba } from '#src/icons/IconComponents-flags';
import { CustomOptionWrapper } from '../styled';
import type { RenderOptionProps } from '#src/components/Menu/MenuItem';
import { createOptions, formDataToObject, wait } from './utils';
import { OPTIONS, OPTIONS_ASYNC, OPTIONS_SIMPLE } from './data';
import { ExtraText, Form, FormValuesWrapper, Icon, StyledGroup, TextWrapper } from './styled';
import { ALL_BORDER_RADIUS_VALUES } from '#src/components/themes/borderRadius';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';
import {
  CustomRenderMultipleValuesTemplate,
  CustomRenderValueTemplate,
  SelectWithTitleTemplate,
} from '#src/components/input/Select/Stories/Templates';
import CustomRenderValueRaw from '!!raw-loader!./Templates/Select/CustomRenderValue';
import CustomRenderMultipleValuesRaw from '!!raw-loader!./Templates/Select/CustomRenderMultipleValues';
import SelectWithTitleRaw from '!!raw-loader!./Templates/Select/SelectWithTitle';

export default {
  title: 'Admiral-2.1/Input/Select/режим "select"',
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

    showCheckbox: {
      control: { type: 'boolean' },
    },

    status: {
      control: { type: 'radio' },
      options: INPUT_STATUS_VALUES,
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
        options: ALL_BORDER_RADIUS_VALUES,
      },
    },
    skeleton: {
      control: { type: 'boolean' },
    },
    forceHideOverflowTooltip: {
      control: { type: 'boolean' },
    },
    alignDropdown: {
      options: [undefined, 'auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
      control: { type: 'select' },
    },
    dropContainerCssMixin: {
      control: false,
    },
    dropContainerClassName: {
      control: false,
    },
    dropContainerStyle: {
      control: false,
    },
  },
} as ComponentMeta<typeof Select>;

const SelectSimpleTemplate: ComponentStory<typeof Select> = (props) => {
  const cleanProps = cleanUpProps(props);

  const [selectValue, setSelectValue] = React.useState('');

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => setSelectValue(e.target.value);

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (cleanProps as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <Select
        {...cleanProps}
        value={selectValue}
        onChange={onChange}
        placeholder="Select option"
        dropContainerClassName="dropContainerClass"
      >
        <Option value="Анигиляторная пушка">Анигиляторная пушка</Option>
        <Option value="Похо Торо Моронго">Похо Торо Моронго</Option>
        <Option value="Саша Даль">Саша Даль</Option>
      </Select>
    </ThemeProvider>
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
              {option.text}
              <ExtraText>{option.extraText}</ExtraText>
            </TextWrapper>
          </Option>
        ))}
      </Select>
    </>
  );
};

interface MyIncredibleOptionProps extends RenderOptionProps {
  shouldAnimate?: boolean;
  text: string;
}

const MyIncredibleOption = ({ text, shouldAnimate, ...props }: MyIncredibleOptionProps) => (
  <CustomOptionWrapper {...props}>
    <Icon shouldAnimate={shouldAnimate} />
    <TextWrapper>{text}</TextWrapper>
  </CustomOptionWrapper>
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
            renderOption={(options) => (
              <MyIncredibleOption text={text} shouldAnimate={options.hovered && value !== selectValue} {...options} />
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
        <StyledGroup label="Сегодня выступают">
          <Option value="Анигиляторная пушка">Анигиляторная пушка</Option>
          <Option value="Похо Торо Моронго">Похо Торо Моронго</Option>
        </StyledGroup>
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
      <Form action="#src/components/input/Select/Stories/Select.stories" onSubmit={onSubmit}>
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

const MULTISELECT_OPTIONS = [
  {
    text: 'Здесь ооооочень большой текст, который может, так сказать, и не поместиться в одну строку',
    value: 'big',
  },
];

const TemplateSimpleMultiSelect: ComponentStory<typeof Select> = (props) => {
  const [selectValue, setSelectValue] = React.useState<string[]>([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [options, setOptions] = React.useState(createOptions(20));

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newValues = Array.from(e.target.selectedOptions).map((option) => option.value);
    setSelectValue(newValues);
    props.onChange?.(e);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const renderOptions = () => {
    return options.map((option, ind) => (
      <Option key={option.value} value={option.value} disabled={[2, 4].includes(ind)}>
        {option.text}
      </Option>
    ));
  };

  const handleAddButtonClick = () => {
    if (searchValue && !options.find((item) => item.text === searchValue)) {
      setOptions([...options, { text: searchValue, value: searchValue }]);
      // setSelectValue([...selectValue, searchValue]);
    }
  };

  const menuPanelContentDimension = props.dimension === undefined || props.dimension === 'xl' ? 'l' : props.dimension;

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
        onInputChange={handleInputChange}
        renderDropDownBottomPanel={({ dimension = menuPanelContentDimension }) => {
          return (
            <MenuActionsPanel dimension={dimension}>
              <TextButton text={'Добавить'} disabled={false} iconStart={<Cuba />} onClick={handleAddButtonClick} />
            </MenuActionsPanel>
          );
        }}
      >
        {renderOptions()}
      </Select>
    </>
  );
};

const TemplateMultiSelect: ComponentStory<typeof Select> = (props) => {
  const cleanProps = cleanUpProps(props);

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
        {...cleanProps}
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
            {`${ind}0000`}
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
              {`${ind}0000`}
              <ExtraText>{`Доп ${ind}`}</ExtraText>
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

const SearchSelectWithBottomPaneTemplate: ComponentStory<typeof Select> = (props) => {
  const [selectValue, setSelectValue] = React.useState('');
  const [searchValue, setSearchValue] = React.useState('');
  const [options, setOptions] = React.useState(OPTIONS_SIMPLE);

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
    props.onChange?.(e);
  };

  const renderOptions = () => {
    return options.map((option, ind) => (
      <Option key={option} value={option} disabled={ind === 4}>
        {option}
      </Option>
    ));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleAddButtonClick = () => {
    if (searchValue && !options.includes(searchValue)) {
      setOptions([...options, searchValue]);
    }
  };

  const menuPanelContentDimension = props.dimension === undefined || props.dimension === 'xl' ? 'l' : props.dimension;

  return (
    <>
      <Select
        {...props}
        onInputChange={handleInputChange}
        placeholder="Placeholder"
        mode="searchSelect"
        value={selectValue}
        onChange={onChange}
        renderDropDownBottomPanel={({ dimension = menuPanelContentDimension }) => {
          return (
            <MenuActionsPanel dimension={dimension}>
              <TextButton text={'Добавить'} disabled={false} iconStart={<Cuba />} onClick={handleAddButtonClick} />
            </MenuActionsPanel>
          );
        }}
      >
        {renderOptions()}
      </Select>
    </>
  );
};

export const SimpleSelectStory = SelectSimpleTemplate.bind({});
SimpleSelectStory.args = {
  placeholder: 'Начните ввод для поиска',
};
SimpleSelectStory.storyName = 'Select. Простой Select';

const SelectWithTitleStory: ComponentStory<typeof Select> = (props) => {
  return <SelectWithTitleTemplate {...cleanUpProps(props)} />;
};
export const SelectWithTitleExample = SelectWithTitleStory.bind({});
SelectWithTitleExample.parameters = {
  docs: {
    source: {
      code: SelectWithTitleRaw,
    },
    description: {
      story:
        'Для того чтобы скрыть tooltip, отображаемый при переполнении, необходимо установить свойство ' +
        'forceHideOverflowTooltip={true}. Title является отображается стандартными средствами браузера, ' +
        'поэтому не кастомизируется.',
    },
  },
};
SelectWithTitleExample.storyName = 'Отображается Title, tooltip скрыт';

const CustomRenderValueStory: ComponentStory<typeof Select> = (props) => {
  return <CustomRenderValueTemplate {...cleanUpProps(props)} />;
};

export const CustomRenderValueExample = CustomRenderValueStory.bind({});
CustomRenderValueExample.args = {
  defaultValue: 'Фидель',
};
CustomRenderValueExample.parameters = {
  docs: {
    source: {
      code: CustomRenderValueRaw,
    },
    description: {
      story:
        'Для кастомного отображения выбранного значения необходимо использовать свойство renderSelectValue.' +
        'Туда передается функция, получающая выбранные значения, и, возвращающая отображаемый ReactNode',
    },
  },
};
CustomRenderValueExample.storyName = 'Кастомное отображение значения';

const CustomRenderMultipleValuesStory: ComponentStory<typeof Select> = (props) => {
  return <CustomRenderMultipleValuesTemplate {...cleanUpProps(props)} />;
};

export const CustomRenderMultipleValuesExample = CustomRenderMultipleValuesStory.bind({});
CustomRenderMultipleValuesExample.args = {
  defaultValue: ['Фидель', 'Саша Даль'],
};
CustomRenderMultipleValuesExample.parameters = {
  docs: {
    source: {
      code: CustomRenderMultipleValuesRaw,
    },
    description: {
      story:
        'Для кастомного отображения выбранного значения необходимо использовать свойство renderSelectValue.' +
        'Туда передается функция, получающая выбранные значения, и, возвращающая массив отображаемых ReactNode',
    },
  },
};
CustomRenderMultipleValuesExample.storyName = 'Кастомное отображение значения с множественным выбором';

export const MultiSelectStory = TemplateMultiSelect.bind({});
MultiSelectStory.storyName = 'Select. Простой MultiSelect';

//
// export const CustomOptionSearchSelectStory = CustomOptionTemplate.bind({});
// CustomOptionSearchSelectStory.storyName = 'SearchSelect. С кастомными опциями';
//
// export const RenderPropsSearchSelectStory = RenderPropsTemplate.bind({});
// RenderPropsSearchSelectStory.storyName = 'SearchSelect. С кастомными опциями через renderProps';
//
// export const OptionGroupSearchSelectStory = OptionGroupTemplate.bind({});
// OptionGroupSearchSelectStory.storyName = 'SearchSelect. С группами';
//
// export const AsyncSearchSelectStory = AsyncTemplate.bind({});
// AsyncSearchSelectStory.storyName = 'SearchSelect. Асинхронный';
//
// export const UncontrolledSearchSelectStory = UncontrolledTemplate.bind({});
// UncontrolledSearchSelectStory.storyName = 'SearchSelect. Некотролируемый';
//
// export const SimpleMultiSearchSelectStory = TemplateSimpleMultiSelect.bind({});
// SimpleMultiSearchSelectStory.storyName = 'SearchSelect. Простой MultiSearchSelect';
//
// export const ExpandedHeightMultiSearchSelectStory = TemplateNotFixedMultiSelect.bind({});
// ExpandedHeightMultiSearchSelectStory.storyName = 'MultiSearchSelect с увеличенной по умолчанию высотой';
//
// export const CustomOptionMultiSearchSelectStory = TemplateMultiSelectCustomOption.bind({});
// CustomOptionMultiSearchSelectStory.storyName = 'MultiSearchSelect с кастомными опциями';
//
// export const CustomChipMultiSearchSelectStory = TemplateMultiSelectCustomChip.bind({});
// CustomChipMultiSearchSelectStory.storyName = 'MultiSearchSelect с кастомным обработчиком удаления чипса';
//
// export const SearchSelectWithBottomPaneStory = SearchSelectWithBottomPaneTemplate.bind({});
// SearchSelectWithBottomPaneStory.storyName = 'С нижней панелью';
