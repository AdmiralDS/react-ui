import { withDesign } from 'storybook-addon-designs';
import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import styled from 'styled-components';
import type { AvatarGroupProps } from '#src/components/AvatarGroup';
import { AvatarGroup } from '#src/components/AvatarGroup';
import { ReactComponent as PersonSolid } from '@admiral-ds/icons/build/system/PersonSolid.svg';

const imageURL = 'https://github.com/DrUNE.png?size=100';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

export default {
  title: 'Admiral-2.1/AvatarGroup',
  decorators: [withDesign],
  component: AvatarGroup,
  parameters: {
    componentSubtitle: (
      <Desc>
        Avatar - компонент отображающий аватарку пользователя и его статус. При необходимости компоненты Avatar можно
        группировать. В этом случае они выстраиваются по горизонтали с отрицательным отступом -2px и внешней обводкой
        2px в цвет фона страницы. При группировке статусы не отображаются.
      </Desc>
    ),
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A32367',
    },
  },
} as ComponentMeta<typeof AvatarGroup>;

const Template: ComponentStory<typeof AvatarGroup> = ({ onAvatarSelect, ...args }: AvatarGroupProps) => {
  const items: AvatarGroupProps['items'] = [
    { userName: 'Lena Ivanova', icon: <PersonSolid />, id: '1' },
    { userName: 'Petr Lesov', icon: <PersonSolid />, id: '2' },
    { userName: 'Agata Petrova', icon: <PersonSolid />, id: '3' },
    { userName: 'Arina Leskova', appearance: 'grey', id: '4' },
    { userName: 'Rita', appearance: 'dark', id: '5' },
    { userName: 'Drune', icon: <PersonSolid />, href: imageURL, id: '6' },
    { userName: 'Lisa Kotova', icon: <PersonSolid />, id: '7' },
    { userName: 'Ирина Глушко', icon: <PersonSolid />, id: '8' },
    { userName: 'Rosa Farrel', icon: <PersonSolid />, id: '9' },
    { userName: 'Tom Hidlton', appearance: { background: '#3F7DFE', text: '#001157' }, id: '10' },
  ];
  return (
    <>
      <AvatarGroup
        {...args}
        items={items}
        onAvatarSelect={onAvatarSelect || ((e) => console.log('Select item with id: ', e.currentTarget.id))}
      />
    </>
  );
};

const Template2: ComponentStory<typeof AvatarGroup> = () => {
  const items: AvatarGroupProps['items'] = [
    { userName: 'Lena Ivanova', icon: <PersonSolid />, id: '1' },
    { userName: 'Petr Lesov', icon: <PersonSolid />, id: '2' },
    { userName: 'Agata Petrova', icon: <PersonSolid />, id: '3' },
    { userName: 'Arina Leskova', icon: <PersonSolid />, id: '4' },
    { userName: 'Rita', appearance: 'dark', id: '5' },
    { userName: 'Drune', icon: <PersonSolid />, href: imageURL, id: '6' },
    { userName: 'Lisa Kotova', icon: <PersonSolid />, id: '7' },
    { userName: 'Ирина Глушко', icon: <PersonSolid />, id: '8' },
    { userName: 'Rosa Farrel', icon: <PersonSolid />, id: '9' },
    { userName: 'Tom Hidlton', appearance: 'dark', id: '10' },
  ];
  return (
    <>
      <AvatarGroup
        style={{ width: '300px' }}
        items={items}
        onAvatarSelect={(e) => console.log('Select item with id: ', e.currentTarget.id)}
      />
    </>
  );
};

export const Playground = Template.bind({});
Playground.args = {};
Playground.storyName = 'Playground';
Playground.parameters = {
  docs: {
    source: {
      type: 'code',
    },
  },
};

export const Width = Template2.bind({});
Width.args = {};
Width.storyName = 'Пример с ограниченной шириной';
Width.parameters = {
  docs: {
    source: {
      type: 'code',
    },
    description: {
      story: `При достижении условного максимума отображаемых аватаров, последним ставится аватар с отображением количества
      скрытых элементов`,
    },
  },
};
