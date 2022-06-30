import React, { Fragment, KeyboardEventHandler, MouseEventHandler, useRef, useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DropDownMenu } from '#src/components/DropDownMenu';
import { DropDownItem } from '#src/components/DropDownItem';
import { Button } from '#src/components/Button';
import styled, { ThemeProvider } from 'styled-components';
import { typography } from '#src/components/Typography';
import { ReactComponent as CardSolid } from '@admiral-ds/icons/build/finance/CardSolid.svg';
import { withDesign } from 'storybook-addon-designs';
import { Theme } from '#src/components/themes';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    DEPRECATED используйте DropMenu. <br />
    Компонент Dropdown Menu имеет три размера и может быть с иконкой или без. Высота строки : xl - 48px, m - 40px, s -
    32px
  </Desc>
);
export default {
  title: 'Deprecated/DropDownMenu (DEPRECATED используйте DropMenu)',
  decorators: [withDesign],
  component: DropDownMenu,
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
} as ComponentMeta<typeof DropDownMenu>;

const StyledText = styled.div`
  ${typography['Body/Body 2 Long']}
  color: ${({ theme }) => theme.color['Neutral/Neutral 90']};
  pointer-events: none;
`;

const Template1: ComponentStory<typeof DropDownMenu> = (args) => {
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

  const [selected, setSelected] = useState<string | number>(category[0].content[0].id);
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);

  const handleKeyDown: KeyboardEventHandler = (e) => {
    if (e.keyCode === 27) {
      setOpen(false);
    }
    if (e.keyCode === 32) {
      setSelected((e.target as HTMLElement).id);
      setOpen(false);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Button ref={buttonRef} onClick={() => setOpen(!open)}>
        Нажми
      </Button>
      {open && (
        <DropDownMenu alignSelf="flex-end" {...args} targetRef={buttonRef} onClickOutside={() => setOpen(!open)}>
          {category.map((item, index) => {
            return (
              <Fragment key={index}>
                <DropDownItem disabled key={item.id}>
                  <StyledText> {item.name}</StyledText>
                </DropDownItem>
                {item.content.map((subCategory) => {
                  return (
                    <DropDownItem
                      dimension={args.dimension}
                      tabIndex={0}
                      onMouseDown={() => setSelected(subCategory.id)}
                      selected={selected === subCategory.id}
                      key={subCategory.id}
                      id={subCategory.id}
                      onKeyDown={handleKeyDown}
                    >
                      <div style={{ width: '100%' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          {subCategory.label} <CardSolid width={24} height={24} />
                        </div>
                        <StyledText>Дополнительный текст</StyledText>
                      </div>
                    </DropDownItem>
                  );
                })}
              </Fragment>
            );
          })}
        </DropDownMenu>
      )}
    </div>
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
  { id: '6', label: 'Option six', value: 7 },
  {
    id: '7',
    label: 'Option seven',
    value: 6,
  },
];

const Temp2: ComponentStory<typeof DropDownMenu> = (args) => {
  const [selected, setSelected] = useState<number | string>('');
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);

  const handleKeyDown: KeyboardEventHandler = (e) => {
    if (e.keyCode === 32) {
      setSelected((e.target as HTMLElement).id);
      setOpen(false);
    } else if (e.keyCode === 27) {
      setOpen(false);
    }
  };

  const handleClick: MouseEventHandler = (e) => {
    e.preventDefault();
    setSelected((e.target as HTMLElement).id);
    setOpen(false);
  };

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <div style={{ width: 'fit-content' }}>
        <Button ref={buttonRef} onClick={() => setOpen(!open)} style={{ margin: 'auto' }}>
          Нажми
        </Button>
        {open && (
          <DropDownMenu {...args} targetRef={buttonRef} alignSelf="flex-start" onClickOutside={() => setOpen(!open)}>
            {items.map((item) => {
              return (
                <DropDownItem
                  dimension={args.dimension}
                  id={item.id}
                  onMouseDown={handleClick}
                  selected={selected === item.id}
                  key={item.id}
                  onKeyDown={handleKeyDown}
                >
                  {item.label}
                </DropDownItem>
              );
            })}
          </DropDownMenu>
        )}
      </div>
    </ThemeProvider>
  );
};

export const BaseDropDown = Temp2.bind({});
export const Category = Template1.bind({});

BaseDropDown.storyName = 'Базовый пример';
Category.storyName = 'Категории';
