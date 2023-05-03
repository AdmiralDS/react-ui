import { defaultFilterItem, INPUT_DIMENSIONS_VALUES, INPUT_STATUS_VALUES } from '#src/components/input';
import { Modal, ModalButtonPanel, ModalContent, ModalTitle } from '#src/components/Modal';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { ChangeEvent } from 'react';
import * as React from 'react';
import { withDesign } from 'storybook-addon-designs';
import { Option, OptionGroup, Select } from '#src/components/input/Select';
import type { IOnCloseProps, SearchFormat } from '../types';
import { Button } from '#src/components/Button';
import { useState } from '@storybook/addons';
import { MenuActionsPanel } from '#src/components/Menu/MenuActionsPanel';
import { TextButton } from '#src/components/TextButton';
import { PlusOutline } from '#src/icons/IconComponents-service';
import { T } from '#src/components/T';
import { createOptions, formDataToObject, wait } from './utils';
import { OPTIONS, OPTIONS_ASYNC, OPTIONS_NAMES, OPTIONS_SIMPLE } from './data';
import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ExtraText, Form, FormValuesWrapper, Icon, Separator, StyledGroup, TextWrapper } from './styled';
import { ALL_BORDER_RADIUS_VALUES } from '#src/components/themes/borderRadius';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';
import styled from 'styled-components';
import { Belarus, Cuba, RussianFederation } from '#src/icons/IconComponents-flags';
import { LoadOnScrollTemplate, RenderPropsTemplate, SelectWithAsyncLoading } from './Templates';
import RenderPropsRaw from '!!raw-loader!./Templates/RenderProps';
import LoadOnScrollRaw from '!!raw-loader!./Templates/LoadingOnScroll';
import SelectWithAsyncLoadingRaw from '!!raw-loader!./Templates/Select/SelectWithAsyncLoading';
// import VirtualScrollRaw from '!!raw-loader!./Templates/VirtualScroll';

const queryClient = new QueryClient();

export default {
  title: 'Admiral-2.1/Input/Select/режим "searchSelect"',
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

const TemplateSearchSelectWithFilter: ComponentStory<typeof Select> = (props) => {
  const cleanProps = cleanUpProps(props);

  const renderOptions = () => {
    return OPTIONS_SIMPLE.map((option, ind) => (
      <Option key={option} value={option} disabled={ind === 4}>
        {option}
      </Option>
    ));
  };

  return (
    <>
      <Select {...cleanProps} placeholder="Placeholder" mode="searchSelect" dropContainerClassName="dropContainerClass">
        {renderOptions()}
      </Select>
    </>
  );
};

const TemplateCustomOption: ComponentStory<typeof Select> = (props) => {
  const cleanProps = cleanUpProps(props);

  const [selectValue, setSelectValue] = React.useState(cleanProps.value ? String(cleanProps.value) : OPTIONS[2].value);

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
    props.onChange?.(e);
  };

  const handleFilterItem = (value: string, searchValue: string, searchFormat: SearchFormat) => {
    const option = OPTIONS.find((item) => item.value === value);
    return (
      !!option &&
      (defaultFilterItem(value, searchValue, searchFormat) ||
        defaultFilterItem(option.text, searchValue, searchFormat) ||
        defaultFilterItem(option.extraText, searchValue, searchFormat))
    );
  };

  return (
    <>
      <T font="Body/Body 2 Long" as="div">
        Фильтрация элементов значению, тексту и дополнительному тексту
      </T>
      <Separator />
      <Select
        {...cleanProps}
        value={selectValue}
        mode="searchSelect"
        onFilterItem={handleFilterItem}
        onChange={onChange}
      >
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

const RenderingValue = styled.div`
  color: ${(p) => p.theme.color['Teal/Teal 80']};
  display: flex;
  flex: 1 1 100%;
  column-gap: 8px;
  padding: 0 3px;
  border-width: 1px;
  border-style: dotted;
  border-radius: 4px;
  border-color: ${(p) => p.theme.color['Teal/Teal 80']};
  background-color: ${(p) => p.theme.color['Teal/Teal 10']};
  box-sizing: border-box;
`;

const getFlag = (value: string) => {
  return value === 'Фидель' ? Cuba : value === 'Константин Колешонок' ? Belarus : RussianFederation;
};

const RenderValueTemplate: ComponentStory<typeof Select> = (props) => {
  const cleanProps = cleanUpProps(props);

  const renderOptions = () => {
    return OPTIONS_NAMES.map((option) => (
      <Option key={option} value={option}>
        {option}
      </Option>
    ));
  };

  const renderValue = (value: string | string[] | undefined) => {
    if (typeof value === 'string' && !!value) {
      const Flag = getFlag(value);

      return (
        <RenderingValue>
          <Flag height={24} />
          {value}
        </RenderingValue>
      );
    }
  };

  return (
    <>
      <Select
        {...cleanProps}
        mode="searchSelect"
        multiple={false}
        placeholder="Placeholder"
        renderSelectValue={renderValue}
      >
        {renderOptions()}
      </Select>
    </>
  );
};

const TemplateOptionGroup: ComponentStory<typeof Select> = (props) => {
  const cleanProps = cleanUpProps(props);

  const [selectValue, setSelectValue] = React.useState('Похо Торо Моронго');

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => setSelectValue(e.target.value);

  return (
    <>
      <Select {...cleanProps} value={selectValue} mode="searchSelect" onChange={onChange} dimension="xl">
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

const UncontrolledTemplate: ComponentStory<typeof Select> = (props) => {
  const cleanProps = cleanUpProps(props);

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
        <Select {...cleanProps} name="myOwesomeField" mode="searchSelect" defaultValue={OPTIONS_SIMPLE[0]}>
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

const TemplateMultipleWithAddOption: ComponentStory<typeof Select> = (props) => {
  const cleanProps = cleanUpProps(props);

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
      setSelectValue([...selectValue, searchValue]);
      setSearchValue('');
    }
  };

  const addButtonProps = React.useMemo(() => {
    return {
      disabled: !!options.find((item) => item.text === searchValue) || !searchValue,
      text: searchValue ? `Добавить «${searchValue}»` : 'Добавить',
    };
  }, [searchValue, options]);

  const menuPanelContentDimension =
    cleanProps.dimension === undefined || cleanProps.dimension === 'xl' ? 'l' : cleanProps.dimension;

  return (
    <>
      <Select
        {...cleanProps}
        value={selectValue}
        inputValue={searchValue}
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
              <TextButton {...addButtonProps} icon={<PlusOutline />} onClick={handleAddButtonClick} />
            </MenuActionsPanel>
          );
        }}
      >
        {renderOptions()}
      </Select>
    </>
  );
};

const MultipleWithApplyOptions = createOptions(10);

const TemplateMultipleWithApply: ComponentStory<typeof Select> = (props) => {
  const cleanProps = cleanUpProps(props);

  const [selectValue, setSelectValue] = React.useState<string[]>(['big', '1', '3']);
  const [forcedOpen, setForcedOpen] = React.useState(false);

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newValues = Array.from(e.target.selectedOptions).map((option) => option.value);
    setSelectValue(newValues);
    props.onChange?.(e);
  };

  const renderOptions = () => {
    return MultipleWithApplyOptions.map((option, ind) => (
      <Option key={option.value} value={option.value} disabled={[0, 2, 4].includes(ind)}>
        {option.text}
      </Option>
    ));
  };

  const handleApplyButtonClick = () => {
    setForcedOpen(false);
    // eslint-disable-next-line no-console
    console.log('selected', selectValue.toString());
  };

  const menuPanelContentDimension =
    cleanProps.dimension === undefined || cleanProps.dimension === 'xl' ? 'l' : cleanProps.dimension;

  return (
    <>
      <Select
        {...cleanProps}
        forcedOpen={forcedOpen}
        value={selectValue}
        multiple={true}
        onChange={onChange}
        displayClearIcon={true}
        placeholder="Placeholder"
        mode="searchSelect"
        onChangeDropDownState={setForcedOpen}
        renderDropDownBottomPanel={({ dimension = menuPanelContentDimension }) => {
          return (
            <MenuActionsPanel dimension={dimension}>
              <Button dimension={'m'} disabled={selectValue.length === 0} onClick={handleApplyButtonClick}>
                Применить
              </Button>
            </MenuActionsPanel>
          );
        }}
      >
        {renderOptions()}
      </Select>
    </>
  );
};

const TemplateNotFixedMultiSelect: ComponentStory<typeof Select> = (props) => {
  const cleanProps = cleanUpProps(props);

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
      <Select
        {...cleanProps}
        value={selectValue}
        mode="searchSelect"
        multiple={true}
        onChange={onChange}
        maxRowCount={3}
      >
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
  const cleanProps = cleanUpProps(props);

  const [selectValue, setSelectValue] = React.useState<string[]>(
    Array.from({ length: 15 }).map((_, ind) => String(ind)),
  );

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(Array.from(e.target.selectedOptions).map((option) => option.value));
  };

  return (
    <>
      <Select {...cleanProps} value={selectValue} multiple={true} onChange={onChange} mode="searchSelect">
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
  const cleanProps = cleanUpProps(props);

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
      <Select {...cleanProps} value={selectValue} multiple={true} onChange={onChange} mode="searchSelect">
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

const TemplateWithAddButton: ComponentStory<typeof Select> = (props) => {
  const cleanProps = cleanUpProps(props);

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

  const addButtonProps = React.useMemo(() => {
    return {
      disabled: options.includes(searchValue) || !searchValue,
      text: searchValue ? `Добавить «${searchValue}»` : 'Добавить',
    };
  }, [searchValue, options]);

  const menuPanelContentDimension = props.dimension === undefined || props.dimension === 'xl' ? 'l' : props.dimension;

  return (
    <>
      <Select
        {...cleanProps}
        onInputChange={handleInputChange}
        placeholder="Placeholder"
        mode="searchSelect"
        value={selectValue}
        onChange={onChange}
        renderDropDownBottomPanel={({ dimension = menuPanelContentDimension }) => {
          return (
            <MenuActionsPanel dimension={dimension}>
              <TextButton {...addButtonProps} icon={<PlusOutline />} onClick={handleAddButtonClick} />
            </MenuActionsPanel>
          );
        }}
      >
        {renderOptions()}
      </Select>
    </>
  );
};

export const SearchSelectWithFilter = TemplateSearchSelectWithFilter.bind({});
SearchSelectWithFilter.args = {
  placeholder: 'Начните ввод для поиска',
};
SearchSelectWithFilter.storyName = 'Фильтрация опций';
SearchSelectWithFilter.parameters = {
  docs: {
    description: {
      story: `Фильтрация списка опций осуществляется вызывающим кодом.\n\n В данном примере показан один из возможных способов`,
    },
  },
};

export const CustomOption = TemplateCustomOption.bind({});
CustomOption.storyName = 'Кастомные опции с кастомной фильтрацией';

const RenderPropsStory: ComponentStory<typeof Select> = (props) => {
  return <RenderPropsTemplate {...cleanUpProps(props)} />;
};
export const RenderPropsExample = RenderPropsStory.bind({});
RenderPropsExample.parameters = {
  docs: {
    source: {
      code: RenderPropsRaw,
    },
    description: {
      story: 'Пример кастомизации select через renderProps',
    },
  },
};
RenderPropsExample.storyName = 'Кастомные опции через renderProps';

const LoadOnScrollStory: ComponentStory<typeof Select> = (props) => {
  return <LoadOnScrollTemplate {...cleanUpProps(props)} />;
};
export const LoadOnScrollExample = LoadOnScrollStory.bind({});
LoadOnScrollExample.parameters = {
  docs: {
    source: {
      code: LoadOnScrollRaw,
    },
    description: {
      story:
        'Последним элементом списка опций select добавляется скрытый MenuItem, ' +
        'который отслеживает прокрутку списка до конца, и сообщает об этом ' +
        'вызывающему коду. По этому событию происходит изменение списка опций',
    },
  },
};
LoadOnScrollExample.storyName = 'Подгрузка данных при scroll';

// const VirtualScrollStory: ComponentStory<typeof Select> = (props) => {
//   return <VirtualScrollTemplate {...cleanUpProps(props)} />;
// };
// export const VirtualScrollExample = VirtualScrollStory.bind({});
// VirtualScrollExample.parameters = {
//   docs: {
//     source: {
//       code: VirtualScrollRaw,
//     },
//     description: {
//       story: 'Пример использования виртуального скролла в select',
//     },
//   },
// };
// VirtualScrollExample.storyName = 'Виртуальный scroll';

export const RenderValueStory = RenderValueTemplate.bind({});
RenderValueStory.args = {
  defaultValue: 'Фидель',
};
RenderValueStory.storyName = 'Кастомное отображение значения';

export const WithAddButton = TemplateWithAddButton.bind({});
WithAddButton.storyName = 'Нижняя панель с кнопкой "Добавить"';

export const OptionGroupStory = TemplateOptionGroup.bind({});
OptionGroupStory.storyName = 'Использование групп';

const AsyncTemplate: ComponentStory<typeof Select> = (props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SelectWithAsyncLoading {...cleanUpProps(props)} />
    </QueryClientProvider>
  );
};
export const AsyncSearchSelectStory = AsyncTemplate.bind({});
AsyncSearchSelectStory.parameters = {
  docs: {
    source: {
      code: SelectWithAsyncLoadingRaw,
      source: { language: 'tsx' },
    },
    description: {
      story: 'Пример демонстрирует подгрузку данных для селекта с фильтром по имени',
    },
  },
};
AsyncSearchSelectStory.storyName = 'SearchSelect. Асинхронный';

export const UncontrolledSearchSelectStory = UncontrolledTemplate.bind({});
UncontrolledSearchSelectStory.storyName = 'SearchSelect. Некотролируемый';

export const MultipleWithAddOption = TemplateMultipleWithAddOption.bind({});
MultipleWithAddOption.storyName = 'Multiple с добавлением опций';

export const MultipleWithApply = TemplateMultipleWithApply.bind({});
MultipleWithApply.storyName = 'Multiple с кнопкой "Применить"';

export const ExpandedHeightMultiSearchSelectStory = TemplateNotFixedMultiSelect.bind({});
ExpandedHeightMultiSearchSelectStory.storyName = 'Multiple с увеличенной по умолчанию высотой';

export const CustomOptionMultiSearchSelectStory = TemplateMultiSelectCustomOption.bind({});
CustomOptionMultiSearchSelectStory.storyName = 'Multiple с кастомными опциями';

export const CustomChipMultiSearchSelectStory = TemplateMultiSelectCustomChip.bind({});
CustomChipMultiSearchSelectStory.storyName = 'Multiple с кастомным обработчиком удаления чипса';
