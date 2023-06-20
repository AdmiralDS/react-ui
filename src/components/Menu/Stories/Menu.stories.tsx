import type { ChangeEvent, HTMLAttributes } from 'react';
import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import {
  Menu,
  MenuItem,
  typography,
  LIGHT_THEME,
  RadioButton,
  TooltipHoc,
  TextInput,
  TextButton,
  getHighlightedFilteredOptions,
  MenuActionsPanel,
  Button,
  keyboardKey,
  mediumGroupBorderRadius,
  ALL_BORDER_RADIUS_VALUES,
  checkboxTreeToMap,
  MenuItemWithCheckbox,
} from '@admiral-ds/react-ui';
import type { MenuModelItemProps, RenderOptionProps, Theme, CheckboxGroupItemProps } from '@admiral-ds/react-ui';
import styled, { css, useTheme, ThemeProvider } from 'styled-components';
import { ReactComponent as PlusOutline } from '@admiral-ds/icons/build/service/PlusOutline.svg';
import { uid } from '#src/components/common/uid';
import {
  CardGroupsTemplate,
  LargeNumberOfItemsTemplate,
  MenuWithLockCycleScrollTemplate,
  VirtualScrollTemplate,
  IconsAndAdditionalTextTemplate,
  CheckboxMenuTemplate,
} from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import LargeNumberOfItemsRaw from '!!raw-loader!./Templates/LargeNumberOfItems';
import MenuWithLockCycleScrollRaw from '!!raw-loader!./Templates/MenuWithLockCycleScroll';
import VirtualScrollRaw from '!!raw-loader!./Templates/VirtualScroll';
import CardGroupsRaw from '!!raw-loader!./Templates/CardGroups';
import IconsAndAdditionalTextRaw from '!!raw-loader!./Templates/IconsAndAdditionalText';
import CheckboxMenuRaw from '!!raw-loader!./Templates/CheckboxMenu';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Компонент Menu имеет три размера и может быть с иконкой или без. Высота строки : l - 48px, m - 40px, s - 32px
  </Desc>
);
export default {
  title: 'Admiral-2.1/Menu',
  decorators: undefined,
  component: Menu,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    componentSubtitle: <Description />,
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A68931',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A68967',
      },
    ],
  },
  args: {
    dimension: 'l',
  },
  argTypes: {
    dimension: {
      options: ['l', 'm', 's'],
      control: { type: 'radio' },
    },
    active: {
      control: { type: 'text' },
    },
    selected: {
      control: { type: 'text' },
    },
    defaultSelected: {
      control: { type: 'text' },
    },
    maxHeight: {
      control: { type: 'text' },
    },
    multiSelection: {
      control: { type: 'boolean' },
    },
    disableSelectedOptionHighlight: {
      control: { type: 'boolean' },
    },
    rowCount: {
      control: { type: 'number' },
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
  },
} as Meta<typeof Menu>;

const Wrapper = styled.div`
  border-radius: ${(p) => mediumGroupBorderRadius(p.theme.shape)};
  overflow: hidden;
  border-color: transparent;
  ${(p) => p.theme.shadow['Shadow 08']}
`;

type StoryItem = {
  id: string;
  label: string;
  value: number;
  disabled?: boolean;
  readOnly?: boolean;
};

const STORY_ITEMS: Array<StoryItem> = [
  {
    id: '1',
    label: 'Option one',
    value: 1,
  },
  {
    id: '2',
    label: 'Option two',
    value: 2,
  },
  {
    id: '3',
    label: 'Option three',
    value: 3,
  },
  {
    id: '4',
    label: 'Option four',
    value: 4,
  },
  {
    id: '5',
    label: 'Option five',
    value: 5,
  },
  {
    id: '6',
    label: 'Option six',
    value: 7,
  },
  {
    id: '7',
    label: 'Option seven',
    value: 6,
  },
];

const SimpleTemplate: StoryFn<typeof Menu> = (args) => {
  const model = React.useMemo(() => {
    return STORY_ITEMS.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension={args.dimension} {...options} key={item.id}>
          {item.label}
        </MenuItem>
      ),
    }));
  }, [args.dimension]);

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <Wrapper style={{ width: 'fit-content' }}>
        <Menu {...args} model={model} />
      </Wrapper>
    </ThemeProvider>
  );
};

interface MyMenuItemProps extends HTMLAttributes<HTMLDivElement>, RenderOptionProps {
  text: string;
  success?: boolean;
}

//<editor-fold desc="MyMenuItem">
const MyItem = styled.div<{
  selected?: boolean;
  hovered?: boolean;
  width?: number;
  success?: boolean;
}>`
  display: flex;
  align-items: center;
  user-select: none;
  flex-flow: wrap;
  position: relative;
  justify-content: space-between;
  outline: none;
  white-space: pre;
  margin: 0;
  cursor: pointer;
  padding: 12px 16px;

  ${typography['Body/Body 1 Long']}

  background: ${({ theme, selected }) =>
    selected ? theme.color['Opacity/Focus'] : theme.color['Special/Elevated BG']};

  &&[data-disabled='true'] {
    cursor: default;
    background-color: ${({ theme, selected }) =>
      selected ? theme.color['Opacity/Focus'] : theme.color['Special/Elevated BG']};
    color: ${(p) => p.theme.color['Neutral/Neutral 30']};
  }

  &&[data-hovered='true'] {
    background-color: ${(p) => p.theme.color['Opacity/Hover']};
    color: ${({ theme, success }) =>
      success ? theme.color['Success/Success 70'] : theme.color['Magenta/Magenta 60 Main']};
  }

  color: ${({ theme, success }) =>
    success ? theme.color['Success/Success 50 Main'] : theme.color['Purple/Purple 60 Main']};
`;

const MyMenuItem = ({
  text,
  onHover,
  onClickItem,
  disabled,
  hovered,
  selected = false,
  success = false,
  ...props
}: MyMenuItemProps) => {
  const handleMouseMove = () => {
    onHover?.();
  };

  const handleClick = () => {
    if (!disabled) onClickItem?.();
  };

  return (
    <MyItem
      selected={selected}
      data-disabled={disabled}
      data-hovered={hovered}
      success={success}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
      {...props}
    >
      {text}
    </MyItem>
  );
};
//</editor-fold>

const CustomItemTemplate: StoryFn<typeof Menu> = (args) => {
  const model = React.useMemo(() => {
    return STORY_ITEMS.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MyMenuItem success={item.id === '3'} {...options} key={item.id} text={item.label} />
      ),
      disabled: item.value === 4,
    }));
  }, []);

  return (
    <>
      <Wrapper style={{ width: 'fit-content' }}>
        <Menu {...args} model={model} defaultSelected={'4'} />
      </Wrapper>
    </>
  );
};

const MenuRadiobuttonTemplate: StoryFn<typeof Menu> = (args) => {
  const model = React.useMemo(() => {
    return STORY_ITEMS.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension={args.dimension} {...options} key={item.id}>
          <RadioButton dimension={args.dimension !== 's' ? 'm' : args.dimension} name="menuListOption" key={item.id}>
            {item.label}
          </RadioButton>
        </MenuItem>
      ),
    }));
  }, [args.dimension]);

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <Wrapper style={{ width: 'fit-content' }}>
        <Menu {...args} model={model} />
      </Wrapper>
    </ThemeProvider>
  );
};

const itemsLongText = [
  {
    id: '1',
    label: 'Option one',
    value: 1,
  },
  {
    id: '2',
    label: 'Option two',
    value: 2,
  },
  {
    id: '3',
    label: 'Привет, пупсик! Хотел тебе сказать, что ты андроид.',
    value: 3,
  },
  {
    id: '4',
    label: 'Option four',
    value: 4,
  },
  {
    id: '5',
    label: 'Option five',
    value: 5,
  },
  {
    id: '6',
    label: 'Option six',
    value: 7,
  },
  {
    id: '7',
    label: 'Option seven',
    value: 6,
  },
];
const MenuItemWithTooltip = TooltipHoc(MenuItem);

const MenuTooltipTemplate: StoryFn<typeof Menu> = (args) => {
  const model = React.useMemo(() => {
    return itemsLongText.map((item) => {
      const tooltip = item.label.length > 20;

      return {
        id: item.id,
        render: (options: RenderOptionProps) =>
          tooltip ? (
            <MenuItemWithTooltip renderContent={() => item.label} dimension={args.dimension} {...options} key={item.id}>
              {item.label.slice(0, 17) + '...'}
            </MenuItemWithTooltip>
          ) : (
            <MenuItem dimension={args.dimension} {...options} key={item.id}>
              {item.label}
            </MenuItem>
          ),
      };
    });
  }, [args.dimension]);

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <Wrapper style={{ width: 'fit-content' }}>
        <Menu {...args} model={model} />
      </Wrapper>
    </ThemeProvider>
  );
};

const MultiLineMenuItem = styled(MenuItem)`
  white-space: pre-wrap;
`;

const MultiLineMenuTemplate: StoryFn<typeof Menu> = (args) => {
  const model = React.useMemo(() => {
    return itemsLongText.map((item) => {
      return {
        id: item.id,
        render: (options: RenderOptionProps) => (
          <MultiLineMenuItem dimension={args.dimension} {...options} key={item.id}>
            {item.label}
          </MultiLineMenuItem>
        ),
      };
    });
  }, [args.dimension]);

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <Wrapper style={{ maxWidth: '200px' }}>
        <Menu {...args} model={model} />
      </Wrapper>
    </ThemeProvider>
  );
};

const ActionPanelFlex = css`
  display: flex;
  gap: 8px;
`;

const MenuActionsTwoButtonsTemplate: StoryFn<typeof Menu> = (props) => {
  const model = React.useMemo(() => {
    return STORY_ITEMS.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension={props.dimension} {...options} key={item.id}>
          {item.label}
        </MenuItem>
      ),
    }));
  }, [props.dimension, STORY_ITEMS]);

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (props as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <Wrapper style={{ width: 'fit-content' }}>
        <Menu
          {...props}
          model={model}
          renderBottomPanel={({ dimension, menuActionsPanelCssMixin = ActionPanelFlex }) => {
            return (
              <MenuActionsPanel dimension={dimension} menuActionsPanelCssMixin={menuActionsPanelCssMixin}>
                <Button
                  dimension={'s'}
                  onClick={() => {
                    console.log('Button 1 clicked');
                  }}
                >
                  Action 1
                </Button>
                <Button
                  dimension={'s'}
                  appearance="secondary"
                  onClick={() => {
                    console.log('Button 2 clicked');
                  }}
                >
                  Action 2
                </Button>
              </MenuActionsPanel>
            );
          }}
        />
      </Wrapper>
    </ThemeProvider>
  );
};

const MenuActionsAddUserValueTemplate: StoryFn<typeof Menu> = (props) => {
  const initialButtonText = 'Добавить';
  const theme = useTheme() || LIGHT_THEME;

  const [options, setOptions] = React.useState([...STORY_ITEMS]);
  const [inputValue, setInputValue] = React.useState<string>('');
  const [buttonText, setButtonText] = React.useState<string>(initialButtonText);
  const [buttonDisabled, setButtonDisabled] = React.useState<boolean>(true);
  const [active, setActive] = React.useState<string | undefined>(options[0].id);

  const model = React.useMemo(() => {
    return getHighlightedFilteredOptions(
      options,
      inputValue,
      theme.locales[theme.currentLocale].suggestInput.emptyMessage,
      props.dimension,
    );
  }, [props.dimension, options, inputValue]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const code = keyboardKey.getCode(e);

    // prevent selecting option on Space press
    if (code === keyboardKey[' ']) {
      e.stopPropagation();
    }
  };

  const handleTextButtonClick = () => {
    const newId = uid();
    const newValue = Math.floor(Math.random());
    const newOption = { id: newId, label: inputValue, value: newValue };
    const newOptions = [newOption, ...options];
    setOptions(newOptions);
    setActive(newId);
  };

  React.useEffect(() => {
    if (inputValue === '') {
      setButtonText(initialButtonText);
      setButtonDisabled(true);
    } else {
      setButtonText(`${initialButtonText} «${inputValue}»`);
      setButtonDisabled(false);
    }
  }, [inputValue]);

  const menuPanelContentDimension = props.dimension === undefined || props.dimension === 'l' ? 'm' : props.dimension;

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (props as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <Wrapper style={{ width: 'fit-content' }}>
        <Menu
          {...props}
          model={model}
          active={active}
          onActivateItem={setActive}
          onSelectItem={(id) => console.log(`Selected id: ${id}`)}
          renderTopPanel={({ dimension = menuPanelContentDimension }) => {
            return (
              <MenuActionsPanel dimension={dimension}>
                <TextInput
                  dimension={menuPanelContentDimension}
                  value={inputValue}
                  onChange={handleChange}
                  onKeyDown={(...p) => {
                    props.onKeyDown?.(...p);
                    handleKeyDown(...p);
                  }}
                />
              </MenuActionsPanel>
            );
          }}
          renderBottomPanel={({ dimension = menuPanelContentDimension }) => {
            return (
              <MenuActionsPanel dimension={dimension}>
                <TextButton
                  text={buttonText}
                  disabled={buttonDisabled}
                  icon={<PlusOutline />}
                  dimension={menuPanelContentDimension}
                  onClick={handleTextButtonClick}
                />
              </MenuActionsPanel>
            );
          }}
        />
      </Wrapper>
    </ThemeProvider>
  );
};

const itemsCheckboxGroup: Array<CheckboxGroupItemProps> = [
  {
    id: '1',
    label: 'Опция 1',
    checked: false,
    children: [
      {
        id: '1.1',
        label: 'Опция 1.1',
        checked: false,
      },
      {
        id: '1.2',
        label: 'Опция 1.2',
        checked: false,
        children: [
          {
            id: '1.2.1',
            label: 'Опция 1.2.1',
            checked: false,
          },
          {
            id: '1.2.2',
            label: 'Опция 1.2.2',
            checked: false,
          },
          {
            id: '1.2.3',
            label: 'Опция 1.2.3',
            checked: false,
          },
        ],
      },
      {
        id: '1.3',
        label: 'Опция 1.3',
        checked: false,
      },
    ],
  },
  {
    id: '2',
    label: 'Опция 2',
    checked: false,
  },
  {
    id: '3',
    label: 'Опция 3',
    checked: false,
  },
];

const MenuCheckboxGroupTemplate: StoryFn<typeof Menu> = (args) => {
  const [internalModel, setInternalModel] = React.useState<Array<CheckboxGroupItemProps>>([...itemsCheckboxGroup]);
  const [activeOption, setActiveOption] = React.useState<string | undefined>();

  const map = React.useMemo(() => {
    return checkboxTreeToMap(internalModel);
  }, [internalModel]);

  const setChecked = (id: string, value: boolean) => {
    const mapItem = map.get(id);
    if (mapItem?.node.disabled) return;
    if (mapItem) {
      mapItem.node.checked = value;
    }

    if (mapItem?.dependencies?.length) {
      mapItem?.dependencies?.forEach((depId: string) => setChecked(depId, value));
    }
  };

  const toggleCheck = (id: string) => {
    const item = map.get(id);
    const hasChildren = !!item?.node.children;

    const indeterminate =
      item?.dependencies?.some((depId: string) => map.get(depId)?.node.checked) &&
      item?.dependencies?.some((depId: string) => !map.get(depId)?.node.checked);

    const checked = hasChildren
      ? indeterminate
        ? true
        : item?.dependencies?.every((depId: string) => map.get(depId)?.node.checked)
      : item?.node.checked;

    setChecked(id, !checked);

    setInternalModel([...internalModel]);
  };

  const model = React.useMemo(() => {
    const menuModel: MenuModelItemProps[] = [];
    map.forEach((item) => {
      const node = item.node;
      const hasChildren = !!node.children;
      const indeterminate =
        item.dependencies?.some((depId: string) => map.get(depId)?.node.checked) &&
        item.dependencies?.some((depId: string) => !map.get(depId)?.node.checked);
      const checked = hasChildren
        ? item.dependencies?.every((depId: string) => map.get(depId)?.node.checked)
        : !!node.checked;
      menuModel.push({
        id: node.id,
        render: (options: RenderOptionProps) => (
          <MenuItemWithCheckbox
            key={node.id}
            id={node.id}
            dimension={args.dimension}
            disabled={node.disabled}
            checked={checked}
            indeterminate={indeterminate}
            level={item.level}
            {...options}
          >
            {node.label}
          </MenuItemWithCheckbox>
        ),
        disabled: node.disabled,
      });
    });

    return menuModel;
  }, [args.dimension, map, activeOption]);

  const handleSelectItem = (id: string) => {
    console.log(`Option ${id} selected`);
    toggleCheck(id);
  };

  const handleActivateItem = (id: string | undefined) => {
    setActiveOption(id);
  };

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <Wrapper style={{ width: 'fit-content' }}>
        <Menu
          {...args}
          model={model}
          onSelectItem={handleSelectItem}
          active={activeOption}
          onActivateItem={handleActivateItem}
          disableSelectedOptionHighlight={true}
        />
      </Wrapper>
    </ThemeProvider>
  );
};

export const Simple = {
  render: SimpleTemplate,
  name: 'Базовый пример',
};

//<editor-fold desc="Пример с иконками и дополнительным текстом">
const IconsStory: StoryFn<typeof Menu> = (props) => (
  <IconsAndAdditionalTextTemplate model={[]} {...cleanUpProps(props)} />
);

export const IconsExample = {
  render: IconsStory,

  parameters: {
    docs: {
      source: {
        code: IconsAndAdditionalTextRaw,
      },
      description: {
        story: 'Пример меню с иконками и дополнительным текстом',
      },
    },
  },

  name: 'Пример с иконками и дополнительным текстом',
};

//</editor-fold>

//<editor-fold desc="Пример с большим количеством item">
const CardGroupsStory: StoryFn<typeof Menu> = (props) => <CardGroupsTemplate model={[]} {...cleanUpProps(props)} />;

export const CardGroupsExample = {
  render: CardGroupsStory,

  parameters: {
    docs: {
      source: {
        code: CardGroupsRaw,
      },
      description: {
        story: 'Пример построения меню с группированием пунктов',
      },
    },
  },

  name: 'Пример с группами карт',
};

export const CustomItems = {
  render: CustomItemTemplate,
  name: 'Пример с кастомными пунктами меню',
};

//<editor-fold desc="Меню с checkbox">
const CheckboxMenuStory: StoryFn<typeof Menu> = (props) => <CheckboxMenuTemplate model={[]} {...cleanUpProps(props)} />;

export const CheckboxMenuExample = {
  render: CheckboxMenuStory,

  parameters: {
    docs: {
      source: {
        code: CheckboxMenuRaw,
      },
      description: {
        story: 'Пример меню с пунктами, содержащими Checkbox.',
      },
    },
  },

  name: 'Меню с checkbox',
};

export const MenuRadiobutton = {
  render: MenuRadiobuttonTemplate,
  name: 'Пример с Radiobutton',
};

export const MenuTooltip = {
  render: MenuTooltipTemplate,
  name: 'Пример с Tooltip',
};

export const MultiLineMenu = {
  render: MultiLineMenuTemplate,
  name: 'Пример с многострочными пунктами',
};

export const MenuActionsTwoButtons = {
  render: MenuActionsTwoButtonsTemplate,
  name: 'Пример с Actions с двумя кнопками',
};

export const MenuActionsAddUserValue = {
  render: MenuActionsAddUserValueTemplate,
  name: 'Пример с Actions и Search',
};

export const MenuCheckboxGroup = {
  render: MenuCheckboxGroupTemplate,
  name: 'Пример с CheckboxGroup',
};

//<editor-fold desc="Пример с большим количеством item">
const LargeNumberOfItemsStory: StoryFn<typeof Menu> = (props) => (
  <LargeNumberOfItemsTemplate model={[]} {...cleanUpProps(props)} />
);

export const LargeNumberOfItemsExample = {
  render: LargeNumberOfItemsStory,

  parameters: {
    docs: {
      source: {
        code: LargeNumberOfItemsRaw,
      },
      description: {
        story: 'Пример с большим количеством item. Для проверки прокрутки меню при быстрой смене активного элемента.',
      },
    },
  },

  name: 'Пример с большим количеством item',
};

//</editor-fold>

//<editor-fold desc="Пример без цикла обхода пунктов">
const MenuWithLockCycleScrollStory: StoryFn<typeof Menu> = (props) => (
  <MenuWithLockCycleScrollTemplate model={[]} {...cleanUpProps(props)} />
);

export const MenuWithLockCycleScrollExample = {
  render: MenuWithLockCycleScrollStory,

  parameters: {
    docs: {
      source: {
        code: MenuWithLockCycleScrollRaw,
      },
      description: {
        story:
          'Для блокировки цикличного обхода пунктов меню можно использовать onForwardCycleApprove и onBackwardCycleApprove.',
      },
    },
  },

  name: 'Пример без цикла обхода пунктов',
};

//</editor-fold>

//<editor-fold desc="Виртуальный скролл">
const VirtualScrollStory: StoryFn<typeof Menu> = (props) => (
  <VirtualScrollTemplate model={[]} {...cleanUpProps(props)} />
);

export const VirtualScrollExample = {
  render: VirtualScrollStory,

  parameters: {
    docs: {
      source: {
        code: VirtualScrollRaw,
      },
      description: {
        story:
          'Для включения виртуального скролла, необходимо передать в параметр virtualScroll объект, ' +
          'содержаний размер 1 элемента меню, для расчета максимальной высоты контейнера меню. ' +
          'Или установить значение "auto". В этом случае максимальная высота будет рассчитана исходя из свойства "dimension"',
      },
    },
  },

  name: 'Виртуальный скролл',
};
