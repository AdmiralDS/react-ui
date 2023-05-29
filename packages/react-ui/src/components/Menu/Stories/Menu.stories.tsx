import type { ChangeEvent, HTMLAttributes } from 'react';
import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
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
import type {
  ItemProps,
  RenderOptionProps,
  Theme,
  CheckboxGroupItemProps,
  ItemWithCheckbox,
} from '@admiral-ds/react-ui';
import styled, { css, useTheme, ThemeProvider } from 'styled-components';
import { withDesign } from 'storybook-addon-designs';
import { ReactComponent as PlusOutline } from '@admiral-ds/icons/build/service/PlusOutline.svg';
import { uid } from '#src/components/common/uid';
import {
  CardGroupsTemplate,
  LargeNumberOfItemsTemplate,
  MenuWithLockCycleScrollTemplate,
  VirtualScrollTemplate,
  IconsAndAdditionalTextTemplate,
} from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
/* eslint-disable import/default */
import LargeNumberOfItemsRaw from '!!raw-loader!./Templates/LargeNumberOfItems';
import MenuWithLockCycleScrollRaw from '!!raw-loader!./Templates/MenuWithLockCycleScroll';
import VirtualScrollRaw from '!!raw-loader!./Templates/VirtualScroll';
import CardGroupsRaw from '!!raw-loader!./Templates/CardGroups';
import IconsAndAdditionalTextRaw from '!!raw-loader!./Templates/IconsAndAdditionalText';

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
  decorators: [withDesign],
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
} as ComponentMeta<typeof Menu>;

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

const SimpleTemplate: ComponentStory<typeof Menu> = (args) => {
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

const CustomItemTemplate: ComponentStory<typeof Menu> = (args) => {
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

const itemsWithCheckbox: Array<ItemWithCheckbox> = [
  {
    id: '1',
    label: 'Option one',
  },
  {
    id: '2',
    label: 'Option two',
  },
  {
    id: '3',
    label: 'Option three',
  },
  {
    id: '4',
    label: 'Option four',
  },
  {
    id: '5',
    label: 'Option five',
  },
  {
    id: '6',
    label: 'Option six',
  },
  {
    id: '7',
    label: 'Option seven',
  },
];

const MenuCheckboxTemplate: ComponentStory<typeof Menu> = (args) => {
  const [innerState, setInnerState] = React.useState<Array<ItemWithCheckbox>>(itemsWithCheckbox.map((item) => item));
  const [activeOption, setActiveOption] = React.useState<string | undefined>(innerState[0].id);
  const [selectedOption, setSelectedOption] = React.useState<string | undefined>();

  const model = React.useMemo(() => {
    return innerState.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItemWithCheckbox
          key={item.id}
          id={item.id}
          dimension={args.dimension}
          checked={!!item.checked}
          checkboxIsHovered={item.id === activeOption}
          {...options}
        >
          {item.label}
        </MenuItemWithCheckbox>
      ),
    }));
  }, [innerState, activeOption, args.dimension]);

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  const handleActivateItem = (id: string | undefined) => {
    setActiveOption(id);
  };

  const handleSelectItem = (id: string) => {
    console.log(`Option ${id} clicked`);
    const updatedInnerState = [...innerState];
    const itemToUpdate = updatedInnerState.find((item) => item.id === id);
    if (itemToUpdate) {
      itemToUpdate.checked = !itemToUpdate.checked;
    }
    setInnerState(updatedInnerState);
    setSelectedOption(undefined);
  };

  return (
    <ThemeProvider theme={swapBorder}>
      <Wrapper style={{ width: 'fit-content' }}>
        <Menu
          {...args}
          model={model}
          active={activeOption}
          onActivateItem={handleActivateItem}
          selected={selectedOption}
          onSelectItem={handleSelectItem}
          disableSelectedOptionHighlight={true}
        />
      </Wrapper>
    </ThemeProvider>
  );
};

const MenuRadiobuttonTemplate: ComponentStory<typeof Menu> = (args) => {
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

const MenuTooltipTemplate: ComponentStory<typeof Menu> = (args) => {
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

const MultiLineMenuTemplate: ComponentStory<typeof Menu> = (args) => {
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

const MenuActionsTwoButtonsTemplate: ComponentStory<typeof Menu> = (props) => {
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

const MenuActionsAddUserValueTemplate: ComponentStory<typeof Menu> = (props) => {
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

const MenuCheckboxGroupTemplate: ComponentStory<typeof Menu> = (args) => {
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
    const menuModel: ItemProps[] = [];
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
            checkboxIsHovered={node.id === activeOption}
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

export const Simple = SimpleTemplate.bind({});
Simple.storyName = 'Базовый пример';

const IconsStory: ComponentStory<typeof Menu> = (props) => (
  <IconsAndAdditionalTextTemplate model={[]} {...cleanUpProps(props)} />
);
export const IconsExample = IconsStory.bind({});
IconsExample.parameters = {
  docs: {
    source: {
      code: IconsAndAdditionalTextRaw,
    },
    description: {
      story: 'Пример меню с иконками и дополнительным текстом',
    },
  },
};
IconsExample.storyName = 'Пример с иконками и дополнительным текстом';

//<editor-fold desc="Пример с большим количеством item">
const CardGroupsStory: ComponentStory<typeof Menu> = (props) => (
  <CardGroupsTemplate model={[]} {...cleanUpProps(props)} />
);
export const CardGroupsExample = CardGroupsStory.bind({});
CardGroupsExample.parameters = {
  docs: {
    source: {
      code: CardGroupsRaw,
    },
    description: {
      story: 'Пример построения меню с группированием пунктов',
    },
  },
};
CardGroupsExample.storyName = 'Пример с группами карт';
//</editor-fold>

export const CustomItems = CustomItemTemplate.bind({});
export const MenuCheckbox = MenuCheckboxTemplate.bind({});
export const MenuRadiobutton = MenuRadiobuttonTemplate.bind({});
export const MenuTooltip = MenuTooltipTemplate.bind({});
export const MultiLineMenu = MultiLineMenuTemplate.bind({});
export const MenuActionsTwoButtons = MenuActionsTwoButtonsTemplate.bind({});
export const MenuActionsAddUserValue = MenuActionsAddUserValueTemplate.bind({});
export const MenuCheckboxGroup = MenuCheckboxGroupTemplate.bind({});

//<editor-fold desc="Пример с большим количеством item">
const LargeNumberOfItemsStory: ComponentStory<typeof Menu> = (props) => (
  <LargeNumberOfItemsTemplate model={[]} {...cleanUpProps(props)} />
);
export const LargeNumberOfItemsExample = LargeNumberOfItemsStory.bind({});
LargeNumberOfItemsExample.parameters = {
  docs: {
    source: {
      code: LargeNumberOfItemsRaw,
    },
    description: {
      story: 'Пример с большим количеством item. Для проверки прокрутки меню при быстрой смене активного элемента.',
    },
  },
};
LargeNumberOfItemsExample.storyName = 'Пример с большим количеством item';
//</editor-fold>

//<editor-fold desc="Пример без цикла обхода пунктов">
const MenuWithLockCycleScrollStory: ComponentStory<typeof Menu> = (props) => (
  <MenuWithLockCycleScrollTemplate model={[]} {...cleanUpProps(props)} />
);

export const MenuWithLockCycleScrollExample = MenuWithLockCycleScrollStory.bind({});
MenuWithLockCycleScrollExample.parameters = {
  docs: {
    source: {
      code: MenuWithLockCycleScrollRaw,
    },
    description: {
      story:
        'Для блокировки цикличного обхода пунктов меню можно использовать onForwardCycleApprove и onBackwardCycleApprove.',
    },
  },
};
MenuWithLockCycleScrollExample.storyName = 'Пример без цикла обхода пунктов';
//</editor-fold>

//<editor-fold desc="Виртуальный скролл">
const VirtualScrollStory: ComponentStory<typeof Menu> = (props) => (
  <VirtualScrollTemplate model={[]} {...cleanUpProps(props)} />
);
export const VirtualScrollExample = VirtualScrollStory.bind({});
VirtualScrollExample.parameters = {
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
};
VirtualScrollExample.storyName = 'Виртуальный скролл';
//</editor-fold>

CustomItems.storyName = 'Пример с кастомными пунктами меню';
MenuCheckbox.storyName = 'Пример с Checkbox';
MenuRadiobutton.storyName = 'Пример с Radiobutton';
MenuTooltip.storyName = 'Пример с Tooltip';
MultiLineMenu.storyName = 'Пример с многострочными пунктами';
MenuActionsTwoButtons.storyName = 'Пример с Actions с двумя кнопками';
MenuActionsAddUserValue.storyName = 'Пример с Actions и Search';
MenuCheckboxGroup.storyName = 'Пример с CheckboxGroup';
