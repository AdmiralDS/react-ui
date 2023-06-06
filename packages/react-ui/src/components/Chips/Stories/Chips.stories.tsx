import React, { useState } from 'react';
import styled from 'styled-components';
import { withDesign } from 'storybook-addon-designs';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Chips } from '@admiral-ds/react-ui';

import { ReactComponent as VacationIcon } from '@admiral-ds/icons/build/category/VacationSolid.svg';
import { ReactComponent as AlertSolid } from '@admiral-ds/icons/build/category/AlertSolid.svg';
import { ReactComponent as DiamondSolid } from '@admiral-ds/icons/build/category/DiamondSolid.svg';
import { ReactComponent as TrophyIcon } from '@admiral-ds/icons/build/category/TrophySolid.svg';
import { ReactComponent as BurnIcon } from '@admiral-ds/icons/build/category/BurnSolid.svg';

import { ChipsTagsCloseTemplate, ChipsTagsTemplate } from './Templates';

// Imports of text sources
import ChipsTagsRaw from '!!raw-loader!./Templates/ChipsTags';
import ChipsTagsCloseRaw from '!!raw-loader!./Templates/ChipsTagsClose';

const Separator = styled.div`
  height: 20px;
`;

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const listData = [
  { id: '1', label: 'Москва', disabled: false, selected: false },
  { id: '2', label: 'Тверь', disabled: false, selected: false },
  { id: '3', label: 'Самара', disabled: false, selected: false },
];

const listDataIcon = [
  {
    id: '1',
    label: 'Москва',
    disabled: false,
    iconBefore: <VacationIcon />,
    iconAfter: <AlertSolid />,
    selected: false,
  },
  { id: '2', label: 'Тверь', disabled: false, iconBefore: <TrophyIcon />, selected: false },
  { id: '3', label: 'Самара', disabled: false, iconAfter: <BurnIcon />, selected: false },
  { id: '4', label: 'Омск', disabled: false, iconAfter: <DiamondSolid />, selected: false },
  { id: '5', label: 'Вильнус', disabled: false, iconBefore: <BurnIcon />, selected: false, badge: 3 },
];

const listDataIconTooltip = [
  { id: '1', label: 'Ограниченное пространство', disabled: false },
  { id: '2', label: 'Ограниченное пространство', disabled: false },
  { id: '3', label: 'Ограниченное пространство', disabled: false },
];

const WrapperChip = styled.div<{ dimension?: 'm' | 's' }>`
  display: flex;
  & > div {
    margin-right: ${({ dimension }) => (dimension === 's' ? 8 : 12)}px;
  }
`;

const WrapperContent = styled.div`
  display: flex;
  align-items: center;
`;

const StyledChipsTooltip = styled(Chips)`
  width: 160px;
`;

const Description = () => (
  <Desc>
    Чипсы представляют собой перечень выбранных нами фильтров, опций или каких-либо элементов из списка. В библиотеке
    есть два типа чипсов — Filled и Outlined. В зависимости от ситуации используются большие — 28 px, либо маленькие —
    24 px чипсы. Примером может служить компонент Multi Select или выбор участников встречи, когда имена выбранных людей
    выводятся списком в виде чипсов.
  </Desc>
);

export default {
  title: 'Admiral-2.1/Chips',
  component: Chips,
  decorators: [withDesign],
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A17861',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A18081',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A18222',
      },
    ],
    componentSubtitle: <Description />,
    layout: 'centered',
  },
  args: {
    dimension: 'm',
    appearance: 'outlined',
  },
  argTypes: {
    dimension: {
      options: ['m', 's'],
      control: { type: 'radio' },
    },
    appearance: {
      options: ['outlined', 'filled'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    selected: {
      control: { type: 'boolean' },
    },
    iconBefore: {
      control: false,
    },
    iconAfter: {
      control: false,
    },
    badge: {
      control: { type: 'number' },
    },
  },
} as ComponentMeta<typeof Chips>;

const ChipsIconDemo: ComponentStory<typeof Chips> = (props) => {
  const [selectedM, setSelectedM] = useState('');
  const [selectedS, setSelectedS] = useState('');
  return (
    <>
      <WrapperChip dimension={props.dimension}>
        {listDataIcon.map((d) => (
          <Chips
            {...props}
            key={d.id}
            selected={selectedM === d.id}
            onClick={() => (props.disabled ? null : setSelectedM(d.id))}
            iconBefore={d?.iconBefore}
            iconAfter={d?.iconAfter}
          >
            {d.label}
          </Chips>
        ))}
      </WrapperChip>
      <Separator />
      <WrapperChip dimension="s">
        {listDataIcon.map((d) => (
          <Chips
            {...props}
            dimension="s"
            key={d.id}
            selected={selectedS === d.id}
            onClick={() => (props.disabled ? null : setSelectedS(d.id))}
            iconBefore={d?.iconBefore}
            iconAfter={d?.iconAfter}
          >
            {d.label}
          </Chips>
        ))}
      </WrapperChip>
    </>
  );
};

const ChipsSelectDemo: ComponentStory<typeof Chips> = (props) => {
  const [selectedM, setSelectedM] = useState('');
  const [selectedS, setSelectedS] = useState('');
  return (
    <>
      <WrapperChip dimension={props.dimension}>
        {listData.map((item) => (
          <Chips
            {...props}
            key={item.id}
            selected={selectedM === item.id}
            onClick={() => (props.disabled ? null : setSelectedM(item.id))}
          >
            {item.label}
          </Chips>
        ))}
      </WrapperChip>
      <Separator />
      <WrapperChip dimension="s">
        {listData.map((item) => (
          <Chips
            {...props}
            dimension="s"
            key={item.id}
            selected={selectedS === item.id}
            onClick={() => (props.disabled ? null : setSelectedS(item.id))}
          >
            {item.label}
          </Chips>
        ))}
      </WrapperChip>
    </>
  );
};

const ChipsMultiSelectIconDemo: ComponentStory<typeof Chips> = (props) => {
  const [listM, setListM] = useState(listDataIcon);
  const handleKeyM = (id: string) => {
    setListM((prev) => prev.map((item) => (item.id === id ? { ...item, selected: !item.selected } : { ...item })));
  };
  const [listS, setListS] = useState(listDataIcon);
  const handleKeyS = (id: string) => {
    setListS((prev) => prev.map((item) => (item.id === id ? { ...item, selected: !item.selected } : { ...item })));
  };

  return (
    <>
      <WrapperChip dimension={props.dimension}>
        {listM.map((item) => (
          <Chips
            {...props}
            key={item.id}
            onClick={props.disabled ? void 0 : handleKeyM.bind(null, item.id)}
            selected={item.selected}
          >
            <WrapperContent>{item.label}</WrapperContent>
          </Chips>
        ))}
      </WrapperChip>
      <Separator />
      <WrapperChip dimension="s">
        {listS.map((item) => (
          <Chips
            {...props}
            dimension="s"
            key={item.id}
            onClick={props.disabled ? void 0 : handleKeyS.bind(null, item.id)}
            selected={item.selected}
          >
            <WrapperContent>{item.label}</WrapperContent>
          </Chips>
        ))}
      </WrapperChip>
    </>
  );
};

const ChipsTagsCloseTooltipDemo: ComponentStory<typeof Chips> = (props) => {
  return (
    <>
      <WrapperChip>
        {listDataIconTooltip.map((item) => (
          <StyledChipsTooltip {...props} renderContentTooltip={() => item.label} key={item.id}>
            {item.label}
          </StyledChipsTooltip>
        ))}
      </WrapperChip>
    </>
  );
};

const ChipsBadgesDemo: ComponentStory<typeof Chips> = (props) => {
  const [selectedM, setSelectedM] = useState('');
  const [selectedS, setSelectedS] = useState('');

  return (
    <>
      <WrapperChip dimension="m">
        {listDataIcon.map((item) => (
          <Chips
            {...props}
            key={item.id}
            badge={props.badge}
            dimension="m"
            selected={selectedM === item.id}
            onClick={() => (props.disabled ? null : setSelectedM(item.id))}
            iconBefore={item?.iconBefore}
            iconAfter={item?.iconAfter}
          >
            {item.label}
          </Chips>
        ))}
      </WrapperChip>
      <Separator />
      <WrapperChip dimension="s">
        {listDataIcon.map((item) => (
          <Chips
            {...props}
            key={item.id}
            badge={props.badge}
            dimension="s"
            appearance="filled"
            selected={selectedS === item.id}
            onClick={() => (props.disabled ? null : setSelectedS(item.id))}
            iconBefore={item?.iconBefore}
            iconAfter={item?.iconAfter}
          >
            {item.label}
          </Chips>
        ))}
      </WrapperChip>
    </>
  );
};
export const ChipsIcon = ChipsIconDemo.bind({});
export const ChipsSelect = ChipsSelectDemo.bind({});
export const ChipsMultiSelectIcon = ChipsMultiSelectIconDemo.bind({});
export const ChipsTooltip = ChipsTagsCloseTooltipDemo.bind({});
export const ChipsBadges = ChipsBadgesDemo.bind({});

//<editor-fold desc="Chips базовый пример">
const ChipsTagsStory: ComponentStory<typeof Chips> = (props) => <ChipsTagsTemplate {...props} />;

export const ChipsTags = ChipsTagsStory.bind({});
ChipsTags.parameters = {
  docs: {
    source: {
      code: ChipsTagsRaw,
    },
  },
};
ChipsTags.storyName = 'Chips базовый пример';
//</editor-fold>

//<editor-fold desc="Chips с текстом и иконкой закрыть">
const ChipsTagsCloseStory: ComponentStory<typeof Chips> = (props) => <ChipsTagsCloseTemplate {...props} />;

export const ChipsTagsClose = ChipsTagsCloseStory.bind({});
ChipsTagsClose.storyName = 'Chips с текстом и иконкой закрыть';
ChipsTagsClose.parameters = {
  docs: {
    source: {
      code: ChipsTagsCloseRaw,
    },
    description: {
      story: `Взаимодействовать можно только с чипсами имеющими иконку закрытия “Close”. При 
      нажатии на иконку закрытия элемент удаляется из списка выбранных.`,
    },
  },
};
//</editor-fold>

ChipsIcon.storyName = 'Chips с иконкой';
ChipsIcon.parameters = {
  docs: {
    description: {
      story: `В компоненте можно включать иконки справа и/или слева от текста.`,
    },
  },
};

ChipsSelect.storyName = 'Chips с текстом и выбором';
ChipsSelect.parameters = {
  docs: {
    description: {
      story: `Набор из двух и более чипсов, которые могут быть в активном (выбранном) состоянии 
      или пассивном (выключенном) состоянии. Chips в режиме радио кнопок, когда можно выбрать 
      только одно значение из списка. `,
    },
  },
};

ChipsMultiSelectIcon.storyName = 'Chips для множественного выбора';
ChipsMultiSelectIcon.parameters = {
  docs: {
    description: {
      story: `Chips в режиме чекбоксов, когда можно выбрать любое количество значений`,
    },
  },
};

ChipsTooltip.storyName = 'Chips с Tooltip';
ChipsTooltip.parameters = {
  docs: {
    description: {
      story: `По дефолту в компоненте (в коде) задано граничение ширины в 190 px, после которой 
      происходит уход в троеточие. Но можно изменять этот параметр стилизуя компонент через styled 
      components. В случае сокращения, над компонентом при ховере появляется Тултип с расшифровкой.`,
    },
  },
};

ChipsBadges.storyName = 'Chips с Badge';
ChipsBadges.parameters = {
  docs: {
    description: {
      story: `В компоненте можно включать бейджи.`,
    },
  },
};
ChipsBadges.args = {
  badge: 5,
};
