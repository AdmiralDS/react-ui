import React, { useState } from 'react';
import styled from 'styled-components';
import { withDesign } from 'storybook-addon-designs';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Chips } from '#src/components/Chips';

import { ReactComponent as VacationIcon } from '@admiral-ds/icons/build/category/VacationSolid.svg';
import { ReactComponent as AlertSolid } from '@admiral-ds/icons/build/category/AlertSolid.svg';
import { ReactComponent as DiamondSolid } from '@admiral-ds/icons/build/category/DiamondSolid.svg';
import { ReactComponent as TrophyIcon } from '@admiral-ds/icons/build/category/TrophySolid.svg';
import { ReactComponent as BurnIcon } from '@admiral-ds/icons/build/category/BurnSolid.svg';

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
  { id: '5', label: 'Вильнус', disabled: false, iconAfter: <BurnIcon />, onClose: () => undefined, selected: false },
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
    есть два типа чипсов — Filled и Outlined. Chips можно использовать при множественном выборе из списка опций для
    большей доступности отображения выбранных опций и возможности их быстрого редактирования (добавление, удаление).
    Примером может служить компонент Multi Select или выбор участников встречи, когда имена выбранных людей выводятся
    списком в виде чипсов. При нажатии на чипс элемент удаляется из списка выбранных.
    <Separator />В зависимости от ситуации используются большие — 32 px, либо маленькие — 24 px чипсы.
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

const ChipsTagsDemo: ComponentStory<typeof Chips> = (props) => {
  return (
    <>
      <WrapperChip dimension={props.dimension}>
        {listData.map((item) => (
          <Chips {...props} key={item.id}>
            {item.label}
          </Chips>
        ))}
      </WrapperChip>
    </>
  );
};

const ChipsTagsCloseDemo: ComponentStory<typeof Chips> = (props) => {
  const [dataListM, setDataM] = useState(listData);
  const [dataListS, setDataS] = useState(listData);
  return (
    <>
      <WrapperChip dimension={props.dimension}>
        {dataListM.map((item) => (
          <Chips key={item.id} {...props} onClose={() => setDataM((prev) => prev.filter((d) => d.id !== item.id))}>
            {item.label}
          </Chips>
        ))}
      </WrapperChip>
      <Separator />
      <WrapperChip dimension="s">
        {dataListS.map((item) => (
          <Chips
            key={item.id}
            {...props}
            dimension="s"
            onClose={() => setDataS((prev) => prev.filter((d) => d.id !== item.id))}
          >
            {item.label}
          </Chips>
        ))}
      </WrapperChip>
    </>
  );
};

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
            // Если onClose указан, вместо iconAfter отобразится closeIcon
            onClose={d?.onClose}
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
            // Если onClose указан, вместо iconAfter отобразится closeIcon
            onClose={d?.onClose}
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
            badge={3}
            dimension="m"
            selected={selectedM === item.id}
            onClick={() => (props.disabled ? null : setSelectedM(item.id))}
            iconBefore={item?.iconBefore}
            iconAfter={item?.iconAfter}
            // Если onClose указан, вместо iconAfter отобразится closeIcon
            onClose={item?.onClose}
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
            badge={3}
            dimension="s"
            appearance="filled"
            selected={selectedS === item.id}
            onClick={() => (props.disabled ? null : setSelectedS(item.id))}
            iconBefore={item?.iconBefore}
            iconAfter={item?.iconAfter}
            // Если onClose указан, вместо iconAfter отобразится closeIcon
            onClose={item?.onClose}
          >
            {item.label}
          </Chips>
        ))}
      </WrapperChip>
    </>
  );
};

export const ChipsTags = ChipsTagsDemo.bind({});
export const ChipsTagsClose = ChipsTagsCloseDemo.bind({});
export const ChipsIcon = ChipsIconDemo.bind({});
export const ChipsSelect = ChipsSelectDemo.bind({});
export const ChipsMultiSelectIcon = ChipsMultiSelectIconDemo.bind({});
export const ChipsTooltip = ChipsTagsCloseTooltipDemo.bind({});
export const ChipsBadges = ChipsBadgesDemo.bind({});

ChipsTags.storyName = 'Chips базовый пример';
ChipsTagsClose.storyName = 'Chips с текстом и иконкой закрыть';
ChipsIcon.storyName = 'Chips с иконкой';
ChipsSelect.storyName = 'Chips с текстом и выбором';
ChipsMultiSelectIcon.storyName = 'Chips для множественного выбора';
ChipsTooltip.storyName = 'Chips с Tooltip';
ChipsBadges.storyName = 'Chips с Badge';
