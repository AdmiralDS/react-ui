import React, { ChangeEvent, forwardRef, HTMLAttributes, useContext, useEffect, useMemo, useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Menu } from '#src/components/Menu';
import { ItemProps, MenuItem, RenderOptionProps } from '#src/components/Menu/MenuItem';
import styled, { css, ThemeContext, ThemeProvider } from 'styled-components';
import { typography } from '#src/components/Typography';
import { ReactComponent as CardSolid } from '@admiral-ds/icons/build/finance/CardSolid.svg';
import { withDesign } from 'storybook-addon-designs';
import { LIGHT_THEME, Theme } from '#src/components/themes';
import { CheckboxField } from '#src/components/form';
import { RadioButton } from '#src/components/RadioButton';
import { TooltipHoc } from '#src/components/TooltipHOC';
import { TextInput } from '#src/components/input';
import { TextButton } from '#src/components/TextButton';
import { getHighlightedFilteredOptions, MenuActionsPanel } from '#src/components/Menu/MenuActionsPanel';
import { Button } from '#src/components/Button';
import { ReactComponent as PlusOutline } from '@admiral-ds/icons/build/service/PlusOutline.svg';
import { uid } from '#src/components/common/uid';
import { keyboardKey } from '#src/components/common/keyboardKey';
import { mediumGroupBorderRadius } from '#src/components/themes/borderRadius';
import { ItemDimension } from '#src/components/Menu/menuItemMixins';

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
  docs: {
    source: {
      type: 'code',
    },
  },
  argTypes: {
    dimension: {
      options: ['l', 'm', 's'],
      control: { type: 'radio' },
      defaultValue: 'l',
    },
    themeBorderKind: {
      control: {
        type: 'radio',
        options: ['Border radius 0', 'Border radius 2', 'Border radius 4', 'Border radius 8'],
      },
    },
  },
} as ComponentMeta<typeof Menu>;

const StyledAdditionalText = styled.div`
  ${typography['Body/Body 2 Long']}
  color: ${({ theme }) => theme.color['Neutral/Neutral 50']};
  pointer-events: none;
`;

const StyledMenuItem = styled(MenuItem)`
  padding: 6px 8px;
  margin: 0 8px 0 24px;
  border-bottom: ${({ theme }) => `1px solid ${theme.color['Neutral/Neutral 20']}`};
  flex-direction: column;
  align-items: flex-start;
`;

const Wrapper = styled.div`
  border-radius: ${(p) => mediumGroupBorderRadius(p.theme.shape)};
  overflow: hidden;
  border-color: transparent;
  ${(p) => p.theme.shadow['Shadow 08']}
`;

const TemplateWithCards: ComponentStory<typeof Menu> = (args) => {
  const category = [
    {
      name: 'Категория 1',
      id: '1',
      content: [
        {
          id: '2',
          label: 'Номер Карты /****45',
          value: 1,
        },
        {
          id: '3',
          label: 'Номер Карты /****75',
          value: 2,
        },
        { id: '4', label: 'Номер Карты /****22', value: 3 },
        {
          id: '5',
          label: 'Номер Карты /****33',
          value: 4,
        },
      ],
    },
    {
      name: 'Категория 2',
      id: '9',
      content: [
        {
          id: '10',
          label: 'Номер Карты /****21',
          value: 5,
        },
        {
          id: '11',
          label: 'Номер Карты /****35',
          value: 6,
        },
        { id: '12', label: 'Номер Карты /****39', value: 7 },
        {
          id: '13',
          label: 'Номер Карты /****41',
          value: 8,
        },
      ],
    },
  ];

  const model = useMemo(() => {
    return category.reduce((acc: any, item: any) => {
      acc.push({
        id: item.id,
        render: (options: RenderOptionProps) => (
          <MenuItem dimension={args.dimension} key={item.id} {...options}>
            {item.name}
          </MenuItem>
        ),
        disabled: true,
      });
      return acc.concat(
        item.content.map((subitem: any) => {
          return {
            id: subitem.id,
            render: (options: RenderOptionProps) => (
              <StyledMenuItem dimension={args.dimension} key={subitem.id} {...options}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  {subitem.label} <CardSolid width={24} height={24} />
                </div>
                <StyledAdditionalText>Дополнительный текст</StyledAdditionalText>
              </StyledMenuItem>
            ),
          };
        }),
      );
    }, []);
  }, []);

  const [selected, setSelected] = useState<string | undefined>('');
  const [active, setActive] = useState<string | undefined>('');

  return (
    <>
      <Wrapper style={{ width: 'fit-content' }}>
        <Menu
          {...args}
          model={model}
          selected={selected}
          onSelectItem={setSelected}
          active={active}
          onActivateItem={setActive}
        />
      </Wrapper>
    </>
  );
};

const items = [
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
  const model = useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension={args.dimension || 's'} {...options} key={item.id}>
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
  const model = useMemo(() => {
    return items.map((item) => ({
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

const MenuCheckboxTemplate: ComponentStory<typeof Menu> = (args) => {
  const model = useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension={args.dimension || 's'} {...options} key={item.id}>
          <CheckboxField dimension={args.dimension !== 's' ? 'm' : args.dimension}>{item.label}</CheckboxField>
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

const MenuRadiobuttonTemplate: ComponentStory<typeof Menu> = (args) => {
  const model = useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension={args.dimension || 's'} {...options} key={item.id}>
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
  const model = useMemo(() => {
    return itemsLongText.map((item) => {
      const tooltip = item.label.length > 20;

      return {
        id: item.id,
        render: (options: RenderOptionProps) =>
          tooltip ? (
            <MenuItemWithTooltip
              renderContent={() => item.label}
              dimension={args.dimension || 's'}
              {...options}
              key={item.id}
            >
              {item.label.slice(0, 17) + '...'}
            </MenuItemWithTooltip>
          ) : (
            <MenuItem dimension={args.dimension || 's'} {...options} key={item.id}>
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
  const model = useMemo(() => {
    return itemsLongText.map((item) => {
      return {
        id: item.id,
        render: (options: RenderOptionProps) => (
          <MultiLineMenuItem dimension={args.dimension || 's'} {...options} key={item.id}>
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
  const model = useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension={props.dimension || 's'} {...options} key={item.id}>
          {item.label}
        </MenuItem>
      ),
    }));
  }, [props.dimension, items]);

  const menuPanelContentDimension = props.dimension === 'l' ? 'm' : props.dimension;

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
                  dimension={menuPanelContentDimension}
                  onClick={() => {
                    console.log('Button 1 clicked');
                  }}
                >
                  Action 1
                </Button>
                <Button
                  dimension={menuPanelContentDimension}
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
  const theme = useContext(ThemeContext) || LIGHT_THEME;

  const [options, setOptions] = useState([...items]);
  const [inputValue, setInputValue] = useState<string>('');
  const [buttonText, setButtonText] = useState<string>(initialButtonText);
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const [active, setActive] = useState<string | undefined>(options[0].id);

  const model = useMemo(() => {
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

  useEffect(() => {
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

const paddingLeft = css<{ level?: number; dimension?: ItemDimension }>`
  padding-left: ${({ dimension, level }) => {
    switch (dimension) {
      case 's':
        return 12 + 28 * (level ? level : 0);
      case 'm':
      case 'l':
      default:
        return 16 + 32 * (level ? level : 0);
    }
  }}px;
`;
const CheckboxGroupMenuItem = styled(MenuItem)<{ level?: number; dimension?: ItemDimension }>`
  ${paddingLeft}
`;

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
interface CheckboxGroupItemProps {
  id: string;
  label: React.ReactNode;
  checked: boolean;
  disabled?: boolean;
  children?: Array<CheckboxGroupItemProps>;
}

type CheckboxNodesMapItem = {
  dependencies?: Array<string>;
  level: number;
  node: CheckboxGroupItemProps;
};

const treeToMap = (
  source: Array<CheckboxGroupItemProps>,
  level = 0,
  dependencies?: Array<Array<string>>,
): Map<string, CheckboxNodesMapItem> => {
  return source.reduce((acc: Map<string, CheckboxNodesMapItem>, item) => {
    const key = item.id.toString();
    const currentNode: CheckboxNodesMapItem = { level, node: item };
    acc.set(key, currentNode);

    if (dependencies) {
      dependencies.forEach((dependency) => dependency.push(key));
    }
    if (item.children) {
      const allDependencies = dependencies ? [...dependencies] : [];
      const itemDependencies: Array<string> = [];
      currentNode.dependencies = itemDependencies;
      acc.set(key, currentNode);
      allDependencies.push(itemDependencies);
      const map = treeToMap(item.children, level + 1, allDependencies);
      return new Map([...acc, ...map]);
    }

    return acc;
  }, new Map<string, CheckboxNodesMapItem>());
};
const MenuCheckboxGroupTemplate: ComponentStory<typeof Menu> = (args) => {
  const [internalModel, setInternalModel] = useState<Array<CheckboxGroupItemProps>>([...itemsCheckboxGroup]);

  const map = useMemo(() => {
    return treeToMap(internalModel);
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

  const model = useMemo(() => {
    const model: ItemProps[] = [];
    map.forEach((item) => {
      const node = item.node;
      const hasChildren = !!node.children;
      const indeterminate =
        item.dependencies?.some((depId: string) => map.get(depId)?.node.checked) &&
        item.dependencies?.some((depId: string) => !map.get(depId)?.node.checked);
      const checked = hasChildren
        ? item.dependencies?.every((depId: string) => map.get(depId)?.node.checked)
        : node.checked;
      model.push({
        id: node.id,
        render: (options: RenderOptionProps) => (
          <CheckboxGroupMenuItem dimension={args.dimension || 's'} {...options} level={item.level} key={node.id}>
            <CheckboxField
              dimension={args.dimension !== 's' ? 'm' : args.dimension}
              checked={checked}
              indeterminate={indeterminate}
              onChange={() => toggleCheck(node.id)}
            >
              {node.label}
            </CheckboxField>
          </CheckboxGroupMenuItem>
        ),
        disabled: node.disabled,
      });
    });

    return model;
  }, [args.dimension, map]);

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

export const Simple = SimpleTemplate.bind({});
export const Category = TemplateWithCards.bind({});
export const CustomItems = CustomItemTemplate.bind({});
export const MenuCheckbox = MenuCheckboxTemplate.bind({});
export const MenuRadiobutton = MenuRadiobuttonTemplate.bind({});
export const MenuTooltip = MenuTooltipTemplate.bind({});
export const MultiLineMenu = MultiLineMenuTemplate.bind({});
export const MenuActionsTwoButtons = MenuActionsTwoButtonsTemplate.bind({});
export const MenuActionsAddUserValue = MenuActionsAddUserValueTemplate.bind({});
export const MenuCheckboxGroup = MenuCheckboxGroupTemplate.bind({});

Simple.storyName = 'Базовый пример';
Category.storyName = 'Пример с группами';
CustomItems.storyName = 'Пример с кастомными пунктами меню';
MenuCheckbox.storyName = 'Пример с Checkbox';
MenuRadiobutton.storyName = 'Пример с Radiobutton';
MenuTooltip.storyName = 'Пример с Tooltip';
MultiLineMenu.storyName = 'Пример с многострочными пунктами';
MenuActionsTwoButtons.storyName = 'Пример с Actions с двумя кнопками';
MenuActionsAddUserValue.storyName = 'Пример с Actions и Search';
MenuCheckboxGroup.storyName = 'Пример с CheckboxGroup';
