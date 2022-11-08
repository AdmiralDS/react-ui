import { withDesign } from 'storybook-addon-designs';
import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import styled from 'styled-components';
import type { AvatarGroupProps } from '#src/components/AvatarGroup';
import { AvatarGroup } from '#src/components/AvatarGroup';
import { ReactComponent as PersonSolid } from '@admiral-ds/icons/build/system/PersonSolid.svg';
import { DefaultFontColorName } from '#src/components/themes';

const imageURL = 'https://github.com/DrUNE.png?size=100';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Text = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.color[DefaultFontColorName]};
`;

export default {
  title: 'Admiral-2.1/AvatarGroup',
  decorators: [withDesign],
  component: AvatarGroup,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
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

const onSelectAvatar = (id: string) => {
  console.log('Select item with id: ', id);
};

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
        onAvatarSelect={onAvatarSelect || onSelectAvatar}
        data-dropdown-container-id="avatar-group-with-dropdown"
        className="avatar-group-class"
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
  const items2: AvatarGroupProps['items'] = [
    {
      userName: 'Lena Ivanova',
      icon: <PersonSolid />,
      id: '1',
      appearance: { background: '#3F7DFE', icon: '#001157' },
    },
    { userName: 'Petr Lesov', icon: <PersonSolid />, id: '2' },
    { userName: 'Agata Petrova', id: '3', appearance: { background: '#D92020', text: '#FFFFFF' } },
    { userName: 'Arina Leskova', icon: <PersonSolid />, id: '4' },
    { userName: 'Rita', appearance: 'light', id: '5' },
    { userName: 'Drune', icon: <PersonSolid />, href: imageURL, id: '6' },
    { userName: 'Lisa Kotova', icon: <PersonSolid />, id: '7' },
    { userName: 'Ирина Глушко', icon: <PersonSolid />, id: '8' },
    { userName: 'Rosa Farrel', icon: <PersonSolid />, id: '9' },
    { userName: 'Tom Hidlton', appearance: 'light', id: '10' },
  ];
  return (
    <>
      <Text>Пример AvatarGroup с единым для всех аватаров внешним видом (appearance)</Text>
      <AvatarGroup style={{ width: '300px' }} items={items} onAvatarSelect={onSelectAvatar} />
      <div style={{ height: '40px' }} />
      <Text>Пример AvatarGroup с различными по внешнему виду (appearance) аватарами</Text>
      <AvatarGroup style={{ width: '300px' }} items={items2} onAvatarSelect={onSelectAvatar} appearance="dark" />
    </>
  );
};

export const Playground = Template.bind({});
Playground.args = {};
Playground.storyName = 'Playground';

export const Width = Template2.bind({});
Width.args = {};
Width.storyName = 'Пример с ограниченной шириной';
Width.parameters = {
  docs: {
    description: {
      story: `При достижении условного максимума отображаемых аватаров, последним ставится аватар с отображением количества
      скрытых элементов. Внешний вид такого аватара (цвет заливки и текста) контролируется с помощью параметра appearance, переданного в 
      компонент AvatarGroup.\n\nЧтобы задать для всех аватаров, входящих в группу, единый внешний вид, достаточно задать 
      для компонента AvatarGroup соответствующее значение параметра appearance. Если для каких-то аватаров 
      нужно задать отличный от остальных внешний вид, необходимо задать параметр appearance непосредственно для компонента Avatar. Параметр
      appearance, заданный для Avatar, имеет больший приоритет, чем параметр appearance, заданный для AvatarGroup.`,
    },
  },
};
