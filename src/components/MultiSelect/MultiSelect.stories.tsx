import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MultiSelect } from './index';
import { withDesign } from 'storybook-addon-designs';
import { DropDownItem } from '#src/components/DropDownItem';
import { CheckboxField } from '#src/components/form/CheckboxField';
import { ReactComponent as CloseOutline } from '@admiral-ds/icons/build/service/CloseOutline.svg';
import { ReactComponent as CardSolid } from '@admiral-ds/icons/build/finance/CardSolid.svg';
import { ReactComponent as StarSolid } from '@admiral-ds/icons/build/system/StarSolid.svg';
import { typography } from '../Typography';

const StyledText = styled.div`
  ${typography['Body/Body 2 Long']}
  color: ${({ theme }) => theme.color.text.primary};
  pointer-events: none;
`;

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;
const Description = () => (
  <Desc>Мульти-селекты нужны для выбора нескольких значений из зараннее заданных в списке опций.</Desc>
);

const WrapperItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > span {
    padding-left: 3px;
  }
`;

export default {
  title: 'Example/ MultiSelect',
  component: MultiSelect,
  decorators: [withDesign],
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
    },
    componentSubtitle: <Description />,
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/CC0WL5u9TPtZpyLbbAGFGt/Admiral-2.0-UI-Kit?node-id=39%3A72815',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/CC0WL5u9TPtZpyLbbAGFGt/Admiral-2.0-UI-Kit?node-id=39%3A72897',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/CC0WL5u9TPtZpyLbbAGFGt/Admiral-2.0-UI-Kit?node-id=39%3A72973',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: ['xl', 'm', 's'],
      control: { type: 'radio' },
      defaultValue: 'xl',
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof MultiSelect>;

const Template: ComponentStory<typeof MultiSelect> = (props) => {
  const [selectValue, setValue] = useState<string[]>([]);

  const options = [
    { id: 1, label: 'Option one', value: '1', disabled: true },
    { id: 2, label: 'Option two', value: '2' },
    { id: 3, label: 'Option three', value: '3' },
    { id: 4, label: 'Option four', value: '4' },
    { id: 5, label: 'Option five', value: '5' },
    { id: 6, label: 'Option six', value: '6' },
    { id: 7, label: 'Option seven', value: '7' },
  ];

  return (
    <MultiSelect {...props} value={selectValue} placeholder="Placeholder" onChange={(value) => setValue(value)}>
      {options.map((item) => (
        <DropDownItem key={item.id} role="option" value={item.label} disabled={item.disabled}>
          <CheckboxField
            dimension={props.dimension === 's' ? 's' : 'm'}
            disabled={item.disabled}
            checked={selectValue.indexOf(item.label) > -1}
            readOnly
          >
            {item.label}
          </CheckboxField>
        </DropDownItem>
      ))}
    </MultiSelect>
  );
};

const Template2: ComponentStory<typeof MultiSelect> = (props) => {
  const [selectValue, setValue] = useState<string[]>([]);
  const iconWidth = props.dimension === 's' ? 20 : 24;
  const options = [
    { id: 1, label: 'Option one', value: '1' },
    { id: 2, label: 'Option two', value: '2' },
    { id: 3, label: 'Option three', value: '3' },
    { id: 4, label: 'Option four', value: '4' },
    { id: 5, label: 'Option five', value: '5' },
    { id: 6, label: 'Option six', value: '6' },
    { id: 7, label: 'Option seven', value: '7' },
  ];

  const handleKey: React.KeyboardEventHandler<HTMLLIElement> = (e) => {
    if (e.keyCode === 32) {
      setValue([]);
    }
  };

  return (
    <MultiSelect {...props} value={selectValue} placeholder="Placeholder" onChange={(value) => setValue(value)}>
      <DropDownItem onClick={() => setValue([])} onKeyDown={handleKey} tabIndex={0}>
        <WrapperItem>
          <CloseOutline width={iconWidth} height={iconWidth} />
          <span> Снять выбор</span>
        </WrapperItem>
      </DropDownItem>
      {options.map((item) => (
        <DropDownItem role="option" value={item.label} key={item.id}>
          <CheckboxField
            onChange={() => ''}
            dimension={props.dimension === 's' ? 's' : 'm'}
            checked={selectValue.indexOf(item.label) > -1}
          >
            {item.label}
          </CheckboxField>
        </DropDownItem>
      ))}
    </MultiSelect>
  );
};

const Template3: ComponentStory<typeof MultiSelect> = (props) => {
  const [selectValue, setValue] = useState<string[]>([]);
  const iconWidth = props.dimension === 's' ? 24 : 30;
  const closeIconWidth = props.dimension === 's' ? 20 : 24;
  const category = [
    {
      name: 'Категория 1',
      id: '1',
      content: [
        {
          id: '2',
          label: 'Option one',
          value: '1',
          icon: <CardSolid width={iconWidth} height={iconWidth} />,
          subText: 'Дополнительный текст',
        },
        {
          id: '3',
          label: 'Option two',
          value: '2',
          icon: <CardSolid width={iconWidth} height={iconWidth} />,
          subText: 'Дополнительный текст',
        },
        {
          id: '4',
          label: 'Option three',
          value: '3',
          icon: <CardSolid width={iconWidth} height={iconWidth} />,
          subText: 'Дополнительный текст',
        },
        {
          id: '5',
          label: 'Option four',
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
          label: 'Option five',
          value: '5',
          icon: <StarSolid width={iconWidth} height={iconWidth} />,
          subText: 'Дополнительный текст',
        },
        {
          id: '11',
          label: 'Option six',
          value: '6',
          icon: <StarSolid width={iconWidth} height={iconWidth} />,
          subText: 'Дополнительный текст',
        },
        {
          id: '12',
          label: 'Option seven',
          value: '7',
          subText: 'Дополнительный текст',
          icon: <StarSolid width={iconWidth} height={iconWidth} />,
        },
        {
          id: '13',
          label: 'Option eight',
          value: '8',
          icon: <StarSolid width={iconWidth} height={iconWidth} />,
          subText: 'Дополнительный текст',
        },
      ],
    },
  ];

  const handleKey: React.KeyboardEventHandler<HTMLLIElement> = (e) => {
    if (e.keyCode === 32) {
      setValue([]);
    }
  };

  return (
    <MultiSelect {...props} value={selectValue} placeholder="Placeholder" onChange={(value) => setValue(value)}>
      <DropDownItem onClick={() => setValue([])} onKeyDown={handleKey} tabIndex={0}>
        <WrapperItem>
          <CloseOutline width={closeIconWidth} height={closeIconWidth} />
          <span> Снять выбор</span>
        </WrapperItem>
      </DropDownItem>
      {category.map((item, index) => (
        <Fragment key={index}>
          <DropDownItem disabled key={item.id}>
            <StyledText> {item.name}</StyledText>
          </DropDownItem>
          {item.content.map((subCategory) => (
            <DropDownItem tabIndex={0} role="option" key={subCategory.id} value={subCategory.label} id={subCategory.id}>
              <CheckboxField
                dimension={props.dimension === 's' ? 's' : 'm'}
                onChange={() => ''}
                checked={selectValue.indexOf(subCategory.label) > -1}
                extraText={subCategory.subText}
              >
                {subCategory.label}
              </CheckboxField>
              {subCategory.icon}
            </DropDownItem>
          ))}
        </Fragment>
      ))}
    </MultiSelect>
  );
};

const Template4: ComponentStory<typeof MultiSelect> = (props) => {
  const [selectValue, setValue] = useState<string[]>([]);
  const options = [
    { id: 1, label: 'Номер карты ********45', value: '1' },
    { id: 2, label: 'Номер карты ********46', value: '2' },
    { id: 3, label: 'Номер карты ********47', value: '3' },
    { id: 4, label: 'Номер карты ********48', value: '4' },
    { id: 5, label: 'Номер карты ********49', value: '5' },
    { id: 6, label: 'Номер карты ********50', value: '6' },
    { id: 7, label: 'Номер карты ********51', value: '7' },
  ];

  const handleDeclension = (value: number) => (value > 4 ? 'карт' : 'карты');
  const handleKey: React.KeyboardEventHandler<HTMLLIElement> = (e) => {
    if (e.keyCode === 32) {
      setValue([]);
    }
  };

  return (
    <MultiSelect
      {...props}
      renderInputValue={() =>
        selectValue.length > 1 ? (
          <div>
            Выбранно {selectValue.length} {handleDeclension(selectValue.length)}
          </div>
        ) : (
          selectValue.map((item, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
              <div>{item}</div>
              <CardSolid width={26} />
            </div>
          ))
        )
      }
      value={selectValue}
      placeholder="Placeholder"
      onChange={(value) => setValue(value)}
    >
      <DropDownItem onClick={() => setValue([])} onKeyDown={handleKey} tabIndex={0}>
        <WrapperItem>
          <CloseOutline width={24} height={24} />
          <span> Снять выбор</span>
        </WrapperItem>
      </DropDownItem>
      {options.map((item) => (
        <DropDownItem role="option" value={item.label} key={item.id}>
          <CheckboxField
            dimension={props.dimension === 's' ? 's' : 'm'}
            onChange={() => ''}
            checked={selectValue.indexOf(item.label) > -1}
          >
            {item.label}
          </CheckboxField>
        </DropDownItem>
      ))}
    </MultiSelect>
  );
};

export const MultiSelectDefault = Template.bind({});
MultiSelectDefault.storyName = 'Дефолтный мультиселект';

export const MultiSelectFilter = Template2.bind({});
MultiSelectFilter.storyName = 'Мультиселект с удалением всех опций';

export const MultiSelectSubGroup = Template3.bind({});
MultiSelectSubGroup.storyName = 'Мультиселект с подгруппами';

export const MultiSelectSelectChips = Template4.bind({});
MultiSelectSelectChips.storyName = 'Кастомный мультиселект';
