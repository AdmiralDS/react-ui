import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { ReactComponent as CheckOutline } from '@admiral-ds/icons/build/service/CheckOutline.svg';
import { Tag, Tags, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';
import type { TagProps, Theme } from '@admiral-ds/react-ui';

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
  title: 'Admiral-2.1/Tag',
  decorators: [withDesign],
  component: Tag,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    componentSubtitle: <Description />,
    layout: 'centered',
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A18375',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A18530',
      },
    ],
  },
  argTypes: {
    kind: {
      options: ['neutral', 'primary', 'success', 'danger', 'warning'],
      control: { type: 'radio' },
    },
    dimension: {
      options: ['m', 's'],
      control: { type: 'radio' },
    },
    width: {
      control: { type: 'text' },
    },
    statusViaBackground: {
      control: { type: 'boolean' },
    },
    statusIcon: {
      control: false,
    },
    as: {
      options: ['div', 'span', 'button'],
      control: { type: 'radio' },
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Tag>;

const Template0: ComponentStory<typeof Tag> = (args: TagProps) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <>
      <ThemeProvider theme={swapBorder}>
        <Tag {...args}>Playground</Tag>
      </ThemeProvider>
    </>
  );
};

const Template1: ComponentStory<typeof Tag> = (args: TagProps) => {
  return (
    <>
      <Tags>
        <Tag onClick={clickHandler}>Neutral</Tag>
        <Tag onClick={clickHandler} kind="success">
          Success
        </Tag>
        <Tag onClick={clickHandler} kind="primary">
          Primary
        </Tag>
        <Tag onClick={clickHandler} as="span" kind="danger">
          Danger
        </Tag>
        <Tag onClick={clickHandler} kind="warning">
          Warning
        </Tag>
      </Tags>
      <Tags dimension="s" style={{ marginTop: 24 }}>
        <Tag>Neutral</Tag>
        <Tag kind="success">Success</Tag>
        <Tag kind="primary">Primary</Tag>
        <Tag as="span" kind="danger">
          Danger
        </Tag>
        <Tag kind="warning">Warning</Tag>
      </Tags>
    </>
  );
};

const Template2: ComponentStory<typeof Tag> = (args: TagProps) => {
  return (
    <>
      <Tags>
        <Tag onClick={clickHandler} statusViaBackground>
          Neutral
        </Tag>
        <Tag onClick={clickHandler} statusViaBackground kind="success">
          Success
        </Tag>
        <Tag onClick={clickHandler} statusViaBackground kind="primary">
          Primary
        </Tag>
        <Tag onClick={clickHandler} statusViaBackground kind="danger">
          Danger
        </Tag>
        <Tag onClick={clickHandler} statusViaBackground kind="warning">
          Warning
        </Tag>
      </Tags>
      <Tags dimension="s" style={{ marginTop: 24 }}>
        <Tag statusViaBackground>Neutral</Tag>
        <Tag statusViaBackground kind="success">
          Success
        </Tag>
        <Tag statusViaBackground kind="primary">
          Primary
        </Tag>
        <Tag statusViaBackground kind="danger">
          Danger
        </Tag>
        <Tag statusViaBackground kind="warning">
          Warning
        </Tag>
      </Tags>
    </>
  );
};

const Template3: ComponentStory<typeof Tag> = (args: TagProps) => {
  return (
    <>
      <Tags>
        <Tag onClick={clickHandler} kind={{ background: '#E052BD' }}>
          Magenta
        </Tag>
        <Tag
          onClick={clickHandler}
          statusViaBackground
          kind={{ background: '#EAFAF9', border: '#4AD2CA', backgroundHover: '#7EFFDB' }}
        >
          Turquoise
        </Tag>
        <Tag
          onClick={clickHandler}
          statusViaBackground
          kind={{ background: '#FBE9F7', border: '#E052BD', backgroundHover: '#D59BF6' }}
        >
          Magenta
        </Tag>
      </Tags>
      <Tags dimension="s" style={{ marginTop: 24 }}>
        <Tag kind={{ background: '#E052BD' }}>Magenta</Tag>
        <Tag statusViaBackground kind={{ background: '#EAFAF9', border: '#4AD2CA' }}>
          Turquoise
        </Tag>
        <Tag statusViaBackground kind={{ background: '#FBE9F7', border: '#E052BD' }}>
          Magenta
        </Tag>
      </Tags>
    </>
  );
};

const clickHandler = () => console.log('click active tag');

const Template4: ComponentStory<typeof Tag> = (args: TagProps) => {
  return (
    <>
      <Tags>
        <Tag {...args} onClick={clickHandler}>
          Active
        </Tag>
        <Tag {...args}>Passive</Tag>
      </Tags>
    </>
  );
};

const Template5: ComponentStory<typeof Tag> = (args) => {
  return (
    <>
      <Tags>
        <Tag width={150} onClick={clickHandler}>
          Если текст длинее ширины тэга, добавляется тултип{' '}
        </Tag>
        <Tag width={150}>Если текст длинее ширины тэга, добавляется тултип </Tag>
      </Tags>
    </>
  );
};

const Template6: ComponentStory<typeof Tag> = (args: TagProps) => {
  return (
    <>
      <Tags>
        <Tag statusViaBackground onClick={clickHandler} icon={<CheckOutline />}>
          Neutral
        </Tag>
        <Tag statusViaBackground onClick={clickHandler} icon={<CheckOutline />} kind="success">
          Success
        </Tag>
        <Tag statusViaBackground onClick={clickHandler} icon={<CheckOutline />} kind="primary">
          Primary
        </Tag>
        <Tag statusViaBackground onClick={clickHandler} icon={<CheckOutline />} kind="danger">
          Danger
        </Tag>
        <Tag statusViaBackground onClick={clickHandler} icon={<CheckOutline />} kind="warning">
          Warning
        </Tag>
      </Tags>
      <Tags dimension="s" style={{ marginTop: 24 }}>
        <Tag statusViaBackground onClick={clickHandler} icon={<CheckOutline />}>
          Neutral
        </Tag>
        <Tag statusViaBackground onClick={clickHandler} icon={<CheckOutline />} kind="success">
          Success
        </Tag>
        <Tag statusViaBackground onClick={clickHandler} icon={<CheckOutline />} kind="primary">
          Primary
        </Tag>
        <Tag statusViaBackground onClick={clickHandler} icon={<CheckOutline />} kind="danger">
          Danger
        </Tag>
        <Tag statusViaBackground onClick={clickHandler} icon={<CheckOutline />} kind="warning">
          Warning
        </Tag>
      </Tags>
    </>
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
