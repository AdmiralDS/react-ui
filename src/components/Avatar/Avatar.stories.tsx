import { withDesign } from 'storybook-addon-designs';
import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import styled from 'styled-components';
import { Avatar } from '#src/components/Avatar';
import type { AvatarProps } from '#src/components/Avatar';
import { ReactComponent as PersonSolid } from '@admiral-ds/icons/build/system/PersonSolid.svg';

const imageURL = 'https://github.com/DrUNE.png?size=100';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  & > * {
    margin-right: 20px;
  }
  margin-bottom: 40px;
`;

const Text = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 8px;
  color: rgba(51, 51, 51, 0.75);
`;

export default {
  title: 'Example/Avatar',
  decorators: [withDesign],
  component: Avatar,
  parameters: {
    componentSubtitle: (
      <Desc>Компонент используется для отображения фотографии пользователя, его инициалов или иконки.</Desc>
    ),
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/CC0WL5u9TPtZpyLbbAGFGt/Admiral-2.0-UI-Kit?node-id=37%3A32367',
    },
  },
  argTypes: {
    dimension: {
      options: ['xl', 'l', 'm', 's', 'xs'],
      control: { type: 'radio' },
    },
    group: {
      control: false,
    },
    icon: {
      control: false,
    },
  },
} as ComponentMeta<typeof Avatar>;

const Template1: ComponentStory<typeof Avatar> = ({ userName, ...args }: AvatarProps) => {
  return <Avatar userName={userName || 'Just Example'} {...args} />;
};

const Template2: ComponentStory<typeof Avatar> = () => (
  <>
    <Text>Размеры компонента</Text>
    <Container>
      <Avatar dimension="xs" userName="Dimension xs" />
      <Avatar dimension="s" userName="Dimension s" />
      <Avatar dimension="m" userName="Dimension m" />
      <Avatar dimension="l" userName="Dimension l" />
      <Avatar userName="Dimension xl" />
    </Container>
    <Text>
      Внешний вид компонента (цвет фона и текста). Возможен выбор из четырех вариантов: light, white, grey, dark или
      самостоятельная настройка цвета фона и текста
    </Text>
    <Container style={{ background: '#F1F2F4' }}>
      <Avatar userName="Light Appearance" />
      <Avatar userName="White Appearance" appearance="white" />
      <Avatar userName="Grey Appearance" appearance="grey" />
      <Avatar userName="Dark Appearance" appearance="dark" />
      <Avatar userName="Custom Appearance" appearance={{ background: '#3F7DFE', text: '#001157' }} />
    </Container>
    <Text>Варианты контента (инициалы, иконка, фото)</Text>
    <Container>
      <Avatar userName="Letter Avatar" />
      <Avatar userName="Icon Avatar" icon={<PersonSolid />} />
      <Avatar userName="Icon Avatar with customized styles" icon={<PersonSolid style={{ fill: 'green' }} />} />
      <Avatar userName="Image Avatar" href={imageURL} />
    </Container>
    <Text>Статусы компонента</Text>
    <Container>
      <Avatar userName="Status Danger" icon={<PersonSolid />} status="danger" />
      <Avatar userName="Status Warning" icon={<PersonSolid />} status="warn" />
      <Avatar userName="Status Success" icon={<PersonSolid />} status="success" />
      <Avatar userName="Status Inactive" icon={<PersonSolid />} status="inactive" />
      <Avatar userName="Example Name" status="success" />
      <Avatar userName="Example Name" href={imageURL} status="success" />
    </Container>
  </>
);

export const Playground = Template1.bind({});
Playground.args = {};
//Playground.parameters = { controls: { exclude: ['icon', 'group'] } };
Playground.storyName = 'Playground';

export const Single = Template2.bind({});
Single.args = {};
Single.storyName = 'Avatar';
