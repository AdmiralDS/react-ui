import React, { HTMLAttributes, useMemo, useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Menu } from '#src/components/Menu';
import { MenuItem, RenderOptionProps } from '#src/components/Menu/MenuItem';
import styled, { css, ThemeProvider } from 'styled-components';
import { typography } from '#src/components/Typography';
import { ReactComponent as CardSolid } from '@admiral-ds/icons/build/finance/CardSolid.svg';
import { withDesign } from 'storybook-addon-designs';
import { Theme } from '#src/components/themes';
import { CheckboxField, FieldSet } from '#src/components/form';
import { RadioButton } from '#src/components/RadioButton';
import { Tooltip } from '#src/components/Tooltip';
import { TextInput } from '#src/components/input';
import { TextButton } from '#src/components/TextButton';
import { MenuActionsPanel } from '#src/components/Menu/MenuActionsPanel';
import { Button } from '#src/components/Button';
import { ReactComponent as PlusOutline } from '@admiral-ds/icons/build/service/PlusOutline.svg';

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
      <div style={{ width: 'fit-content' }}>
        <Menu
          {...args}
          model={model}
          selected={selected}
          onSelectItem={setSelected}
          active={active}
          onActivateItem={setActive}
        />
      </div>
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
      <div style={{ width: 'fit-content' }}>
        <Menu {...args} model={model} />
      </div>
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
      <div style={{ width: 'fit-content' }}>
        <Menu {...args} model={model} defaultSelected={'4'} />
      </div>
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
      <div style={{ width: 'fit-content' }}>
        <Menu {...args} model={model} />
      </div>
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
      <div style={{ width: 'fit-content' }}>
        <FieldSet>
          <Menu {...args} model={model} />
        </FieldSet>
      </div>
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

const MenuTooltipTemplate: ComponentStory<typeof Menu> = (args) => {
  const model = useMemo(() => {
    return itemsLongText.map((item) => {
      const tooltip = item.label.length > 20;

      return {
        id: item.id,
        render: (options: RenderOptionProps) => {
          const itemRef = React.useRef(null);
          const [tooltipVisible, setTooltipVisible] = React.useState(false);
          return (
            <MenuItem ref={itemRef} dimension={args.dimension || 's'} {...options} key={item.id}>
              {tooltip ? item.label.slice(0, 17) + '...' : item.label}
              {tooltip && (
                <Tooltip
                  targetRef={itemRef}
                  visible={tooltipVisible}
                  onVisibilityChange={setTooltipVisible}
                  renderContent={() => item.label}
                />
              )}
            </MenuItem>
          );
        },
      };
    });
  }, [args.dimension]);

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <div style={{ width: 'fit-content' }}>
        <Menu {...args} model={model} />
      </div>
    </ThemeProvider>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const ActionPanelFlex = css`
  display: flex;
  gap: 8px;
`;

const MenuActionsTemplate: ComponentStory<typeof Menu> = (args) => {
  const modelBottom = useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension={args.dimension || 's'} {...options} key={item.id}>
          {item.label}
        </MenuItem>
      ),
    }));
  }, [args.dimension]);
  const modelTopBottom = useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension={args.dimension || 's'} {...options} key={item.id}>
          {item.label}
        </MenuItem>
      ),
    }));
  }, [args.dimension]);

  const menuPanelContentDimension = args.dimension === 'l' ? 'm' : args.dimension;

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <div style={{ width: 'fit-content' }}>
        <Wrapper>
          <Menu
            {...args}
            model={modelBottom}
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
          <Menu
            {...args}
            model={modelTopBottom}
            renderTopPanel={({ dimension }) => {
              return (
                <MenuActionsPanel dimension={dimension}>
                  <TextInput dimension={menuPanelContentDimension} />
                </MenuActionsPanel>
              );
            }}
            renderBottomPanel={({ dimension }) => {
              return (
                <MenuActionsPanel dimension={dimension}>
                  <TextButton text="Action" icon={<PlusOutline />} dimension={menuPanelContentDimension} />
                </MenuActionsPanel>
              );
            }}
          />
        </Wrapper>
      </div>
    </ThemeProvider>
  );
};

export const Simple = SimpleTemplate.bind({});
export const Category = TemplateWithCards.bind({});
export const CustomItems = CustomItemTemplate.bind({});
export const MenuCheckbox = MenuCheckboxTemplate.bind({});
export const MenuRadiobutton = MenuRadiobuttonTemplate.bind({});
export const MenuTooltip = MenuTooltipTemplate.bind({});
export const MenuActions = MenuActionsTemplate.bind({});

Simple.storyName = 'Базовый пример';
Category.storyName = 'Пример с группами';
CustomItems.storyName = 'Пример с кастомными пунктами меню';
MenuCheckbox.storyName = 'Пример с Checkbox';
MenuRadiobutton.storyName = 'Пример с Radiobutton';
MenuTooltip.storyName = 'Пример с Tooltip';
MenuActions.storyName = 'Пример с Actions';
