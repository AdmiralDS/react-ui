import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Select, SELECT_DIMENSIONS } from './index';
import { withDesign } from 'storybook-addon-designs';
import { ReactComponent as CardSolid } from '@admiral-ds/icons/build/finance/CardSolid.svg';
import { ReactComponent as StarSolid } from '@admiral-ds/icons/build/system/StarSolid.svg';
import { DropDownItem } from '#src/components/DropDownItem';
import { typography } from '../Typography';
import { Tooltip } from '#src/components/Tooltip';

const StyledText = styled.div`
  ${typography['Body/Body 2 Long']}
  color: ${({ theme }) => theme.color.text.primary};
  pointer-events: none;
`;

const StyledDropDownItem = styled(DropDownItem)`
  & > * {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const StyledSelect = styled(Select)`
  width: 50%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0 auto;
`;

const WrapperInputValue = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const WrapperContent = styled.div`
  display: flex;
  overflow: hidden;
  align-items: center;
  & svg {
    margin-right: 10px;
  }
`;

const StyledLabel = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default {
  title: 'Example/Select',
  component: Select,
  decorators: [withDesign],
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
    },
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/CC0WL5u9TPtZpyLbbAGFGt/Admiral-2.0-UI-Kit?node-id=39%3A72270',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/CC0WL5u9TPtZpyLbbAGFGt/Admiral-2.0-UI-Kit?node-id=39%3A72636',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: SELECT_DIMENSIONS,
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    alignDropdown: {
      control: { type: 'radio' },
    },
    displayStatusIcon: {
      control: { type: 'boolean' },
    },
    readOnly: {
      control: { type: 'boolean' },
    },
    icons: {
      control: false,
    },
  },
} as ComponentMeta<typeof Select>;

const options = [
  { id: 1, label: 'Option one', value: 1 },
  { id: 2, label: 'Option two', value: 2 },
  { id: 3, label: 'Option three', value: 3 },
  { id: 4, label: 'Option four', value: 4 },
  { id: 5, label: 'Option five', value: 5 },
  { id: 6, label: 'Option six', value: 6 },
  { id: 7, label: 'Option seven', value: 7 },
];

const Template: ComponentStory<typeof Select> = (props) => {
  const [selectValue, setValue] = useState<number | string | null>('');

  const handleChange = (value: number | string | null) => {
    console.log(`typeof ${value} = ${typeof value}`);
    setValue(value);
  };

  return (
    <Select
      {...props}
      value={selectValue}
      placeholder={'Placeholder'}
      onChange={handleChange}
      renderInputValue={(value) => options.find((option) => option.value == value)?.label}
    >
      {options.map((item) => {
        return (
          <DropDownItem role="option" value={item.value} key={item.id}>
            {item.label}
          </DropDownItem>
        );
      })}
    </Select>
  );
};

export const SelectDefault = Template.bind({});
SelectDefault.storyName = 'Стандартный селект';

const template1options = [
  { id: 1, label: 'Option one', value: '1', content: <StarSolid width={24} /> },
  { id: 2, label: 'Option two', value: '2', content: <CardSolid width={24} /> },
  { id: 3, label: 'Option three', value: '3', content: <CardSolid width={24} /> },
  { id: 4, label: 'Option four', value: '4', content: <CardSolid width={24} /> },
  { id: 5, label: 'Option five', value: '5', content: <CardSolid width={24} /> },
  { id: 6, label: 'Option six', value: '6', content: <StarSolid width={24} /> },
  { id: 7, label: 'Disabled Option seven', value: '7', content: <StarSolid width={24} />, disabled: true },
  { id: 11, label: 'Option one', value: '1', content: <StarSolid width={24} /> },
  { id: 21, label: 'Option two', value: '2', content: <CardSolid width={24} /> },
  { id: 31, label: 'Option three', value: '3', content: <CardSolid width={24} /> },
  { id: 41, label: 'Option four', value: '4', content: <CardSolid width={24} /> },
  { id: 51, label: 'Option five', value: '5', content: <CardSolid width={24} /> },
  { id: 61, label: 'Option six', value: '6', content: <StarSolid width={24} /> },
  { id: 71, label: 'Option seven', value: '7', content: <StarSolid width={24} /> },
] as Array<Record<string, any>>;

const Template1: ComponentStory<typeof Select> = (props) => {
  const [selectValue, setValue] = useState<string | number | null>('1');
  return (
    <Select
      {...props}
      value={selectValue}
      onChange={(value) => setValue(value)}
      renderInputValue={(currentValue) => (
        <WrapperContent>
          {template1options.filter((d) => d.value === currentValue)[0]?.content}
          <StyledLabel>{template1options.filter((d) => d.value === currentValue)[0]?.label}</StyledLabel>
        </WrapperContent>
      )}
    >
      {template1options.map((item) => {
        return (
          <DropDownItem
            aria-selected={selectValue === item.value}
            key={item.id}
            role="option"
            value={item.value}
            disabled={item.disabled}
          >
            <WrapperContent>
              {item.content} {item.label}
            </WrapperContent>
          </DropDownItem>
        );
      })}
    </Select>
  );
};

export const SelectCustomRender = Template1.bind({});
SelectCustomRender.storyName = 'Селект с иконкой';

const Template2: ComponentStory<typeof Select> = (props) => {
  const iconWidth = props.dimension === 's' ? 24 : 30;
  const category = [
    {
      name: 'Категория 1',
      id: '1',
      content: [
        {
          id: '2',
          label: 'Номер Карты /****45',
          value: '1',
          icon: <CardSolid width={iconWidth} height={iconWidth} />,
          subText: 'Дополнительный текст',
        },
        {
          id: '3',
          label: 'Номер Карты /****75',
          value: '2',
          icon: <CardSolid width={iconWidth} height={iconWidth} />,
          subText: 'Дополнительный текст',
        },
        {
          id: '4',
          label: 'Номер Карты /****22',
          value: '3',
          icon: <CardSolid width={iconWidth} height={iconWidth} />,
          subText: 'Дополнительный текст',
        },
        {
          id: '5',
          label: 'Номер Карты /****33',
          value: '4',
          icon: <CardSolid width={iconWidth} height={iconWidth} />,
          subText: 'Дополнительный текст',
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
          value: '5',
          icon: <StarSolid width={iconWidth} height={iconWidth} />,
          subText: 'Дополнительный текст',
        },
        {
          id: '11',
          label: 'Номер Карты /****35',
          value: '6',
          icon: <StarSolid width={iconWidth} height={iconWidth} />,
          subText: 'Дополнительный текст',
        },
        {
          id: '12',
          label: 'Номер Карты /****39',
          value: '7',
          subText: 'Дополнительный текст',
          icon: <StarSolid width={iconWidth} height={iconWidth} />,
        },
        {
          id: '13',
          label: 'Номер Карты /****41',
          value: '8',
          icon: <StarSolid width={iconWidth} height={iconWidth} />,
          subText: 'Дополнительный текст',
        },
      ],
    },
  ];

  const [selectValue, setValue] = useState<number | string | null>('1');

  const renderValue = (value: string | null | number) => {
    const content = [...category[0].content, ...category[1].content].filter((d) => d.value?.toString() === value)[0];
    return (
      <WrapperInputValue>
        <StyledLabel>{content.label}</StyledLabel>
        {content.icon}
      </WrapperInputValue>
    );
  };

  return (
    <Select {...props} value={selectValue} renderInputValue={renderValue} onChange={(value) => setValue(value)}>
      {category.map((item, index) => {
        return (
          <Fragment key={index}>
            <DropDownItem disabled key={item.id}>
              <StyledText> {item.name}</StyledText>
            </DropDownItem>
            {item.content.map((subCategory) => {
              return (
                <DropDownItem
                  tabIndex={0}
                  role="option"
                  key={subCategory.id}
                  value={subCategory.value}
                  id={subCategory.id}
                >
                  <div style={{ width: '100%' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      {subCategory.label} {subCategory.icon}
                    </div>
                    <StyledText>{subCategory.subText}</StyledText>
                  </div>
                </DropDownItem>
              );
            })}
          </Fragment>
        );
      })}
    </Select>
  );
};

export const SelectGroup = Template2.bind({});
SelectGroup.storyName = 'Продуктовый селект';

const Template3: ComponentStory<typeof Select> = (props) => {
  const [selectValue, setValue] = useState<number | string | null>('');
  const options = [
    { id: 1, label: 'Option one long text long text', value: '1' },
    { id: 2, label: 'Option two long text long text ', value: '2' },
    { id: 3, label: 'Option three long text long text', value: '3' },
    { id: 4, label: 'Option four long text long text', value: '4' },
    { id: 5, label: 'Option five long text long text', value: '5' },
    { id: 6, label: 'Option six long text long text', value: '6' },
    { id: 7, label: 'Option seven long text long text', value: '7' },
  ];
  return (
    <StyledSelect
      {...props}
      renderInputValue={(selectValue) => {
        return (
          <Tooltip renderContent={() => selectValue}>
            <div>{selectValue}</div>
          </Tooltip>
        );
      }}
      value={selectValue}
      onChange={(value) => setValue(value)}
    >
      {options.map((item) => {
        return (
          <StyledDropDownItem role="option" value={item.label} key={item.id}>
            <Tooltip renderContent={() => item.label}>{item.label}</Tooltip>
          </StyledDropDownItem>
        );
      })}
    </StyledSelect>
  );
};

export const SelectWithTooltip = Template3.bind({});
SelectWithTooltip.storyName = 'Селект с тултипом';
