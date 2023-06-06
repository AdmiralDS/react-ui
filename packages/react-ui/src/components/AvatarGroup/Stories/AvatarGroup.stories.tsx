import { withDesign } from 'storybook-addon-designs';
import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import styled from 'styled-components';
import type { AvatarGroupProps } from '@admiral-ds/react-ui';
import { AvatarGroup } from '@admiral-ds/react-ui';
import { ReactComponent as PersonSolid } from '@admiral-ds/icons/build/system/PersonSolid.svg';

import { AvatarGroupWidthTemplate } from './Templates';

import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';
const imageURL = 'https://github.com/DrUNE.png?size=100';

// Imports of text sources
import AvatarGroupWidthRaw from '!!raw-loader!./Templates/AvatarGroupWidth';

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
  argTypes: {
    dimension: {
      options: ['xl', 'l', 'm', 's', 'xs'],
      control: { type: 'radio' },
    },
    items: {
      control: false,
    },
    appearance: {
      options: ['light', 'white', 'grey', 'dark'],
      control: { type: 'radio' },
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
    menuWidth: {
      control: false,
    },
    menuMaxHeight: {
      control: false,
    },
  },
} as ComponentMeta<typeof AvatarGroup>;

const onSelectAvatar = (id: string) => {
  // eslint-disable-next-line no-console
  console.log('Select item with id: ', id);
};

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

const Template: ComponentStory<typeof AvatarGroup> = ({ onAvatarSelect, ...args }: AvatarGroupProps) => {
  const clearProps = cleanUpProps(args);

  return (
    <>
      <AvatarGroup
        {...clearProps}
        items={items}
        onAvatarSelect={onAvatarSelect || onSelectAvatar}
        data-dropdown-container-id="avatar-group-with-dropdown"
        className="avatar-group-class"
      />
    </>
  );
};

export const Playground = Template.bind({});
Playground.args = {};
Playground.storyName = 'Playground';

//<editor-fold desc="Пример с ограниченной шириной">
const AvatarGroupWidthStory: ComponentStory<typeof AvatarGroup> = (props) => (
  <AvatarGroupWidthTemplate items={[]} {...cleanUpProps(props)} />
);

export const AvatarGroupWidth = AvatarGroupWidthStory.bind({});
AvatarGroupWidth.args = {};
AvatarGroupWidth.storyName = 'Пример с ограниченной шириной';
AvatarGroupWidth.parameters = {
  docs: {
    source: {
      code: AvatarGroupWidthRaw,
    },
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
//</editor-fold>
