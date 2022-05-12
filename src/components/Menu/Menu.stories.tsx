import React, { Fragment, useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Menu } from '#src/components/Menu';
import { MenuItem } from '#src/components/MenuItem';
import styled from 'styled-components';
import { typography } from '#src/components/Typography';
import { ReactComponent as CardSolid } from '@admiral-ds/icons/build/finance/CardSolid.svg';
import { withDesign } from 'storybook-addon-designs';
import { keyboardKey } from '#src/components/common/keyboardKey';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Компонент Dropdown Menu имеет три размера и может быть с иконкой или без. Высота строки : xl - 48px, m - 40px, s -
    32px
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
  },
} as ComponentMeta<typeof Menu>;

const StyledText = styled.div<{ disabled?: boolean }>`
  ${typography['Body/Body 1 Long']}
  pointer-events: none;
`;

const StyledAdditionalText = styled.div`
  ${typography['Body/Body 2 Long']}
  color: ${({ theme }) => theme.color['Neutral/Neutral 50']};
  pointer-events: none;
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

  const selectableItems = category.reduce((acc: any, item: any) => {
    return acc.concat(item.content);
  }, []);

  const [selected, setSelected] = useState<string | number>('');
  const [active, setActive] = useState<string | number>('');

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const activeOption = e.currentTarget.id;
    const code = keyboardKey.getCode(e);
    switch (code) {
      case keyboardKey[' ']:
      case keyboardKey.Enter: {
        if (selected !== activeOption) {
          setSelected(activeOption);
        }
        e.preventDefault();
        break;
      }
      case keyboardKey.ArrowDown: {
        const currentIndex = selectableItems.findIndex((item: any) => item.id === active);
        const nextIndex = currentIndex < selectableItems.length - 1 ? currentIndex + 1 : 0;
        setActive(selectableItems[nextIndex].id);
        e.preventDefault();
        break;
      }
      case keyboardKey.ArrowUp: {
        const currentIndex = selectableItems.findIndex((item: any) => item.id === active);
        const prevIndex = currentIndex > 0 ? currentIndex - 1 : selectableItems.length - 1;
        setActive(selectableItems[prevIndex].id);
        e.preventDefault();
        break;
      }
    }
  };

  return (
    <>
      <div style={{ width: 'fit-content' }}>
        <Menu
          {...args}
          selected={selected.toString()}
          onSelectItem={setSelected}
          active={active}
          onActivateItem={setActive}
          onKeyDown={handleKeyDown}
        >
          {category.map((item, index) => {
            return (
              <Fragment key={index}>
                <MenuItem disabled key={item.id} dimension={args.dimension}>
                  <StyledText>{item.name}</StyledText>
                </MenuItem>
                {item.content.map((subCategory) => {
                  return (
                    <div style={{ width: '100%' }} key={subCategory.id} id={subCategory.id}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        {subCategory.label} <CardSolid width={24} height={24} />
                      </div>
                      <StyledAdditionalText>Дополнительный текст</StyledAdditionalText>
                    </div>
                  );
                })}
              </Fragment>
            );
          })}
        </Menu>
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
  { id: '6', label: 'Option six', value: 7 },
  {
    id: '7',
    label: 'Option seven',
    value: 6,
  },
];

const SimpleTemplate: ComponentStory<typeof Menu> = (args) => {
  return (
    <>
      <div style={{ width: 'fit-content' }}>
        <Menu {...args} maxLines={4} selected={'6'} active={'2'}>
          {items.map((item) => {
            return (
              <MenuItem dimension={args.dimension} id={item.id} key={item.id}>
                {item.label}
              </MenuItem>
            );
          })}
        </Menu>
      </div>
    </>
  );
};

export const Simple = SimpleTemplate.bind({});
export const Category = TemplateWithCards.bind({});

Simple.storyName = 'Базовый пример';
Category.storyName = 'Пример с группами';
