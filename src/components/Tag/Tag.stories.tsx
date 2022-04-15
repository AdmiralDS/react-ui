import React from 'react';
import styled from 'styled-components';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { ReactComponent as CheckOutline } from '@admiral-ds/icons/build/service/CheckOutline.svg';

import { Tag, TagProps } from '../Tag';
import { Tags } from '../Tags';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Тег — это метка, размечающая и каталогизирующая информацию для облегчения процесса поиска. При нажатии на тэг
    загружаются все элементы имеющие эту метку.
  </Desc>
);

export default {
  title: 'Example/Tag',
  decorators: [withDesign],
  component: Tag,
  parameters: {
    componentSubtitle: <Description />,
    layout: 'centered',
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/CC0WL5u9TPtZpyLbbAGFGt/Admiral-2.0-UI-Kit?node-id=37%3A18530',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/CC0WL5u9TPtZpyLbbAGFGt/Admiral-2.0-UI-Kit?node-id=37%3A18660',
      },
    ],
  },
  argTypes: {
    kind: {
      options: ['neutral', 'blue', 'green', 'red', 'orange'],
      control: { type: 'radio' },
    },
    width: {
      control: { type: 'text' },
    },
    statusViaBackground: {
      control: { type: 'boolean' },
    },
    as: {
      options: ['div', 'span', 'button'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Tag>;

const Template0: ComponentStory<typeof Tag> = (args: TagProps) => {
  return <Tag {...args}>Playground</Tag>;
};

const Template1: ComponentStory<typeof Tag> = (args: TagProps) => {
  return (
    <Tags>
      <Tag>Neutral</Tag>
      <Tag kind="green">Green</Tag>
      <Tag kind="blue">Blue</Tag>
      <Tag as="span" kind="red">
        Red
      </Tag>
      <Tag kind="orange">Orange</Tag>
    </Tags>
  );
};

const Template2: ComponentStory<typeof Tag> = (args: TagProps) => {
  return (
    <Tags>
      <Tag statusViaBackground>Neutral</Tag>
      <Tag statusViaBackground kind="green">
        Green
      </Tag>
      <Tag statusViaBackground kind="blue">
        Blue
      </Tag>
      <Tag statusViaBackground kind="red">
        Red
      </Tag>
      <Tag statusViaBackground kind="orange">
        Orange
      </Tag>
    </Tags>
  );
};

const Template3: ComponentStory<typeof Tag> = (args: TagProps) => {
  return (
    <Tags>
      <Tag kind={{ background: '#E052BD' }}>Green</Tag>
      <Tag statusViaBackground kind={{ background: '#EAFAF9', border: '#4AD2CA' }}>
        Turquoise
      </Tag>
      <Tag statusViaBackground kind={{ background: '#FBE9F7', border: '#E052BD' }}>
        Magenta
      </Tag>
    </Tags>
  );
};

const Template4: ComponentStory<typeof Tag> = (args: TagProps) => {
  return (
    <Tags>
      <Tag onClick={() => console.log('click active tag')}>Active</Tag>
      <Tag>Passive</Tag>
    </Tags>
  );
};

const Template5: ComponentStory<typeof Tag> = (args) => {
  return <Tag width={150}>Если текст длинее ширины тэга, добавляется тултип </Tag>;
};

const Template6: ComponentStory<typeof Tag> = (args: TagProps) => {
  return (
    <Tags>
      <Tag statusViaBackground icon={<CheckOutline />}>
        Neutral
      </Tag>
      <Tag statusViaBackground icon={<CheckOutline />} kind="green">
        Green
      </Tag>
      <Tag statusViaBackground icon={<CheckOutline />} kind="blue">
        Blue
      </Tag>
      <Tag statusViaBackground icon={<CheckOutline />} kind="red">
        Red
      </Tag>
      <Tag statusViaBackground icon={<CheckOutline />} kind="orange">
        Orange
      </Tag>
    </Tags>
  );
};

export const Playground = Template0.bind({});
Playground.args = {};
Playground.storyName = 'Tag. Playground.';

export const TagStatus = Template1.bind({});
TagStatus.args = {};
TagStatus.storyName = 'Tag. Статус через цветную статусную метку.';
TagStatus.parameters = {
  docs: {
    description: {
      story: `Тэг может иметь цветную статусную метку.`,
    },
  },
};

export const TagStatusBackground = Template2.bind({});
TagStatusBackground.args = {};
TagStatusBackground.storyName = 'Tag. Статус через цвет обводки и фона.';
TagStatusBackground.parameters = {
  docs: {
    description: {
      story: `Тэг может отображать статус через цвет обводки и фона, когда нужен выраженный цветовой акцент (опция). 
      В этом случае цвет статусов берется из палитры Special, допускается окрашивание тэга в любой парный цвет 
      (фон, обводка) из этой палитры. \n\nЧтобы отобразить статус через цвет обводки и фона необходимо передать 
      в компонент параметр statusViaBackground, установленный в true.`,
    },
  },
};

export const TagCustomColors = Template3.bind({});
TagCustomColors.args = {};
TagCustomColors.storyName = 'Tag. Кастомные цвета.';
TagCustomColors.parameters = {
  docs: {
    description: {
      story: `Тэг может иметь цветную статусную метку. Помимо предложенных вариантов, метка может быть 
      окрашена в любой цвет на усмотрение пользователя с помощью свойства background. \n\n Либо тэг может отображать 
      статус через цвет обводки и фона, когда нужен выраженный цветовой акцент (опция). 
      В этом случае, помимо предложенных вариантов, цвет фона и обводки можно задать через свойства background и border. 
      Следует учесть, что цвета надо брать из палитры Special, допускается окрашивание тэга в любой парный цвет (фон, обводка) из этой палитры.`,
    },
  },
};

export const TagState = Template4.bind({});
TagState.args = {};
TagState.storyName = 'Tag. Активный и пассивный.';
TagState.parameters = {
  docs: {
    description: {
      story: `Тэги могут быть как активными и служить, например, каталагизаторами, так и пассивными, просто отображая
            принадлежность элемента к некоторой группе элементов имеющих общий признак.`,
    },
  },
};

export const TagTooltip = Template5.bind({});
TagTooltip.args = {};
TagTooltip.storyName = 'Tag. Тултип.';
TagTooltip.parameters = {
  docs: {
    description: {
      story: `В случае ограниченного пространства используется тултип.`,
    },
  },
};

export const TagIcon = Template6.bind({});
TagIcon.args = {};
TagIcon.storyName = 'Tag. С иконкой.';
TagIcon.parameters = {
  docs: {
    description: {
      story: `Тэги могут быть с иконками, но только в том случае, если статус отображается 
      через цвет обводки и фона (параметр statusViaBackground установлен в true)`,
    },
  },
};
