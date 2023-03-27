import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { withDesign } from 'storybook-addon-designs';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { DropMenu } from '#src/components/DropMenu';
import type { RenderOptionProps } from '#src/components/Menu/MenuItem';
import { MenuItem } from '#src/components/Menu/MenuItem';
import type { Theme } from '#src/components/themes';
import { Button } from '#src/components/Button';
import { typography } from '#src/components/Typography';
import { ReactComponent as CardSolid } from '@admiral-ds/icons/build/finance/CardSolid.svg';
import { TooltipHoc } from '#src/components/TooltipHOC';
import { RadioButton } from '#src/components/RadioButton';
import type { ItemWithCheckbox } from '#src/components/Menu/MenuItemWithCheckbox';
import { MenuItemWithCheckbox } from '#src/components/Menu/MenuItemWithCheckbox';
import { ALL_BORDER_RADIUS_VALUES } from '#src/components/themes/borderRadius';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Компонент Dropdown Menu имеет три размера и может быть с иконкой или без. Высота строки : l - 48px, m - 40px, s -
    32px
  </Desc>
);
const WrapperVertical = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

export default {
  title: 'Admiral-2.1/DropMenu',
  decorators: [withDesign],
  component: DropMenu,
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
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    multiSelection: {
      control: { type: 'boolean' },
    },
    disableSelectedOptionHighlight: {
      control: { type: 'boolean' },
    },
    isVisible: {
      control: { type: 'boolean' },
    },
    menuWidth: {
      control: { type: 'text' },
    },
    menuMaxHeight: {
      control: { type: 'text' },
    },
    selected: {
      control: { type: 'text' },
    },
    active: {
      control: { type: 'text' },
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
    items: {
      control: false,
    },
    alignMenuRef: {
      control: false,
    },
  },
} as ComponentMeta<typeof DropMenu>;

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
    disabled: true,
  },
  {
    id: '5',
    label: 'Option five',
    value: 5,
  },
  {
    id: '6',
    label: 'Option six',
    value: 6,
  },
  {
    id: '7',
    label: 'Option seven',
    value: 7,
  },
];
const handleVisibilityChangeControlledState = (isVisible: boolean) => {
  console.log('onVisibilityChange with controlled state');
  if (isVisible) {
    console.log('Menu opened');
  } else {
    console.log('Menu closed');
  }
};
const handleVisibilityChangeUnControlledState = (isVisible: boolean) => {
  console.log('onVisibilityChange with uncontrolled state');
  if (isVisible) {
    console.log('Menu opened');
  } else {
    console.log('Menu closed');
  }
};

const SimpleTemplate: ComponentStory<typeof DropMenu> = (args) => {
  const [selected, setSelected] = React.useState<string | undefined>(undefined);

  const model = React.useMemo(() => {
    return items.map((item) => ({
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
      <WrapperVertical>
        <Desc>
          Неконтроллируемое состояние видимости меню:
          <br />
          - isVisible не передается в DropMenu, <br />- обработчик onVisibilityChange выполняется из DropMenu
          <br />- для открытия/закрытия меню при клике на кнопке используется обработчик handleClick из DropMenu
          <br />
          По умолчанию DropMenu открывает/закрывает выпадающий список при нажатии на переданный компонент, а также
          закрывает выпадающий список при выборе опции
        </Desc>
        <DropMenu
          {...args}
          items={model}
          onSelectItem={(id) => {
            console.log(`selected: ${id}`);
            setSelected(id);
          }}
          onVisibilityChange={handleVisibilityChangeUnControlledState}
          dimension={args.dimension}
          disabled={args.disabled}
          selected={selected}
          dropContainerClassName="dropContainerClass"
          renderContentProp={({ buttonRef, handleKeyDown, handleClick, statusIcon, disabled }) => {
            return (
              <Button
                ref={buttonRef as React.Ref<HTMLButtonElement>}
                loading={args.loading}
                disabled={disabled}
                onKeyDown={handleKeyDown}
                onClick={handleClick}
                dimension={args.dimension}
              >
                Нажми
                {statusIcon}
              </Button>
            );
          }}
        />
      </WrapperVertical>
    </ThemeProvider>
  );
};

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

const StyledDropMenu = styled(DropMenu)`
  min-width: 400px;
`;

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

const TemplateWithCards: ComponentStory<typeof DropMenu> = (args) => {
  const model = React.useMemo(() => {
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
  }, [args.dimension]);

  const [selected, setSelected] = React.useState<string | undefined>('');
  const [active, setActive] = React.useState<string | undefined>('');

  return (
    <>
      <WrapperVertical>
        <Desc>
          Неконтроллируемое состояние видимости меню:
          <br />
          - isVisible не передается в DropMenu; <br />- обработчик onVisibilityChange выполняется из DropMenu;
          <br />- для открытия/закрытия меню при клике на кнопке используется обработчик handleClick из DropMenu.
          <br />
          По умолчанию DropMenu открывает/закрывает выпадающий список при нажатии на переданный компонент, а также
          закрывает выпадающий список при выборе опции.
        </Desc>
        <StyledDropMenu
          {...args}
          items={model}
          onSelectItem={(id) => {
            console.log(`selected: ${id}`);
            setSelected(id);
          }}
          onVisibilityChange={handleVisibilityChangeUnControlledState}
          dimension={args.dimension}
          disabled={args.disabled}
          selected={selected}
          active={active}
          onActivateItem={setActive}
          renderContentProp={({ buttonRef, handleKeyDown, handleClick, statusIcon, disabled }) => {
            return (
              <Button
                ref={buttonRef as React.Ref<HTMLButtonElement>}
                loading={args.loading}
                disabled={disabled}
                onKeyDown={handleKeyDown}
                onClick={handleClick}
                dimension={args.dimension}
              >
                Нажми
                {statusIcon}
              </Button>
            );
          }}
        />
      </WrapperVertical>
    </>
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

const DropMenuTooltipTemplate: ComponentStory<typeof DropMenu> = (args) => {
  const [selected, setSelected] = React.useState<string | undefined>(undefined);
  const [isVisible, setIsVisible] = React.useState<boolean>(false);

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

  const handleVisibilityChange = (isVisible: boolean) => {
    handleVisibilityChangeControlledState(isVisible);
    setIsVisible(isVisible);
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLElement>) => {
    handleVisibilityChange(!isVisible);
    args.onClick?.(e);
  };

  const handleSelectItem = (id: string) => {
    console.log(`Option ${id} clicked`);
    setSelected(id);
    handleVisibilityChange(false);
  };

  const handleClickOutside = (e: Event) => {
    console.log('handleClickOutside from stories');
    handleVisibilityChange(false);
  };

  return (
    <WrapperVertical>
      <Desc>
        Состояние видимости меню полностью контроллируется вне DropMenu:
        <br />
        - используется кастомный обработчик клика по кнопке (handleButtonClick) для открытия/закрытия выпадающего
        списка;
        <br />- после выбора опции из выпадающего списка (handleSelectItem) происходит закрытие меню;
        <br />- используется кастомный обработчик при клике вне области выпадающего списка (handleClickOutside).
      </Desc>
      <DropMenu
        {...args}
        items={model}
        isVisible={isVisible}
        onVisibilityChange={handleVisibilityChange}
        onSelectItem={handleSelectItem}
        onClickOutside={handleClickOutside}
        dimension={args.dimension}
        disabled={args.disabled}
        selected={selected}
        renderContentProp={({ buttonRef, handleKeyDown, statusIcon, disabled }) => {
          return (
            <Button
              ref={buttonRef as React.Ref<HTMLButtonElement>}
              loading={args.loading}
              disabled={disabled}
              onKeyDown={handleKeyDown}
              onClick={handleButtonClick}
              dimension={args.dimension}
            >
              Нажми
              {statusIcon}
            </Button>
          );
        }}
      />
    </WrapperVertical>
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

const TemplateWithCheckbox: ComponentStory<typeof DropMenu> = (args) => {
  const [innerState, setInnerState] = React.useState<Array<ItemWithCheckbox>>(itemsWithCheckbox.map((item) => item));
  const [activeOption, setActiveOption] = React.useState<string | undefined>(innerState[0].id);
  const [selectedOption, setSelectedOption] = React.useState<string | undefined>();
  const [isVisible, setIsVisible] = React.useState<boolean>(false);

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

  const handleActivateItem = (id: string | undefined) => {
    setActiveOption(id);
  };

  const handleVisibilityChange = (isVisible: boolean) => {
    handleVisibilityChangeControlledState(isVisible);
    setIsVisible(isVisible);
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

  const handleButtonClick = (e: React.MouseEvent<HTMLElement>) => {
    handleVisibilityChange(!isVisible);
    args.onClick?.(e);
  };

  const handleClickOutside = (e: Event) => {
    console.log('handleClickOutside from stories');
    handleVisibilityChange(false);
  };

  return (
    <WrapperVertical>
      <Desc>
        Состояние видимости меню полностью контроллируется вне DropMenu:
        <br />
        - используется кастомный обработчик клика по кнопке (handleButtonClick) для открытия/закрытия выпадающего
        списка;
        <br />- после выбора опции из выпадающего списка (handleSelectItem) происходит закрытие меню;
        <br />- используется кастомный обработчик при клике вне области выпадающего списка (handleClickOutside).
      </Desc>
      <DropMenu
        {...args}
        items={model}
        active={activeOption}
        onActivateItem={handleActivateItem}
        selected={selectedOption}
        onSelectItem={handleSelectItem}
        isVisible={isVisible}
        onVisibilityChange={handleVisibilityChange}
        onClickOutside={handleClickOutside}
        disableSelectedOptionHighlight={true}
        dimension={args.dimension}
        disabled={args.disabled}
        renderContentProp={({ buttonRef, handleKeyDown, statusIcon, disabled }) => {
          return (
            <Button
              ref={buttonRef as React.Ref<HTMLButtonElement>}
              loading={args.loading}
              disabled={disabled}
              onKeyDown={handleKeyDown}
              onClick={handleButtonClick}
              dimension={args.dimension}
            >
              Нажми
              {statusIcon}
            </Button>
          );
        }}
      />
    </WrapperVertical>
  );
};

const TemplateWithRadiobutton: ComponentStory<typeof DropMenu> = (args) => {
  const [selected, setSelected] = React.useState<string | undefined>(undefined);
  const [checkedState, setCheckedState] = React.useState(items.map((item) => ({ id: item.id, checked: false })));
  const model = React.useMemo(() => {
    return items.map((item, index) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension={args.dimension} {...options} key={item.id}>
          <RadioButton
            dimension={args.dimension !== 's' ? 'm' : args.dimension}
            disabled={item.disabled}
            key={item.id}
            readOnly={true}
            checked={checkedState[index].checked}
          >
            {item.label}
          </RadioButton>
        </MenuItem>
      ),
      disabled: item.disabled,
    }));
  }, [args.dimension, checkedState]);

  return (
    <WrapperVertical>
      <Desc>
        Неконтроллируемое состояние видимости меню:
        <br />
        - isVisible не передается в DropMenu; <br />- обработчик onVisibilityChange выполняется из DropMenu;
        <br />- для открытия/закрытия меню при клике на кнопке используется обработчик handleClick из DropMenu.
        <br />
        По умолчанию DropMenu открывает/закрывает выпадающий список при нажатии на переданный компонент, а также
        закрывает выпадающий список при выборе опции.
      </Desc>
      <DropMenu
        {...args}
        items={model}
        onSelectItem={(id) => {
          console.log(`selected: ${id}`);
          const newCheckedState = checkedState.map((item) => ({
            ...item,
            checked: item.id === id || item.id === selected ? !item.checked : item.checked,
          }));
          setCheckedState(newCheckedState);
          setSelected(id);
        }}
        onVisibilityChange={handleVisibilityChangeUnControlledState}
        dimension={args.dimension}
        disabled={args.disabled}
        selected={selected}
        renderContentProp={({ buttonRef, handleKeyDown, handleClick, statusIcon, disabled }) => {
          return (
            <Button
              ref={buttonRef as React.Ref<HTMLButtonElement>}
              loading={args.loading}
              disabled={disabled}
              onKeyDown={handleKeyDown}
              onClick={handleClick}
              dimension={args.dimension}
            >
              Нажми
              {statusIcon}
            </Button>
          );
        }}
      />
    </WrapperVertical>
  );
};

export const Simple = SimpleTemplate.bind({});
export const Category = TemplateWithCards.bind({});
export const DropMenuTooltip = DropMenuTooltipTemplate.bind({});
export const DropMenuCheckbox = TemplateWithCheckbox.bind({});
export const DropMenuRadiobutton = TemplateWithRadiobutton.bind({});

Simple.storyName = 'Базовый пример';
Category.storyName = 'Пример с группами';
DropMenuTooltip.storyName = 'Пример с Tooltip';
DropMenuCheckbox.storyName = 'Пример с Checkbox';
DropMenuRadiobutton.storyName = 'Пример с Radiobutton';
