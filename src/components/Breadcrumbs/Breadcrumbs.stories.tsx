import { Breadcrumbs } from '../Breadcrumbs';
import React from 'react';
import styled from 'styled-components';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Link as RouterLink, MemoryRouter as Router } from 'react-router-dom';

const Separator = styled.div`
  height: 20px;
`;
const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Хлебные крошки — это вторичный элемент навигации, который позволяет пользователю понять на каком уровне сайта он
    находится и вернуться на один из предыдущих уровней.
    <Separator />
    Если есть ограничение по ширине, то показываются первая и последние вкладки. Скрытые вкладки можно открыть через
    Overflow Menu. Максимальная ширина компонента 800px
    <Separator />
    Максимальное количество знаков в одной вкладке 40, после чего надпись уходит в многоточие. При ховере над такой
    вкладкой появляется подсказка.
  </Desc>
);

export default {
  title: 'Example/Breadcrumbs',
  decorators: [withDesign],
  component: Breadcrumbs,
  parameters: {
    componentSubtitle: <Description />,
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/CC0WL5u9TPtZpyLbbAGFGt/Admiral-2.0-UI-Kit?node-id=37%3A6627',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/CC0WL5u9TPtZpyLbbAGFGt/Admiral-2.0-UI-Kit?node-id=37%3A6677',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: ['l', 'm', 's'],
      control: { type: 'radio' },
    },
    mobile: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof Breadcrumbs>;

const Template1: ComponentStory<typeof Breadcrumbs> = (args) => {
  const items = [
    { url: '#', text: 'page 1' },
    { url: '#', text: 'page 2222222222222222222222222222222222222222' },
    { url: '#', text: 'page 3' },
    { url: '#', text: 'current page' },
  ];
  return <Breadcrumbs {...args} items={items} />;
};

const Template2: ComponentStory<typeof Breadcrumbs> = (args) => {
  const items = [
    { url: '#', text: 'page 1' },
    { url: '#', text: 'page 2222222222222222222222222222222222222222' },
    { url: '#', text: 'page 3' },
    { url: '#', text: 'page 4' },
    { url: '#', text: 'current page' },
  ];
  return (
    <>
      <Breadcrumbs items={items} />
      <Breadcrumbs items={items} dimension="m" />
      <Breadcrumbs items={items} dimension="s" />
    </>
  );
};

const Template3: ComponentStory<typeof Breadcrumbs> = (args) => {
  const items = [
    { url: '#', text: 'page 1' },
    { url: '#', text: 'page 2' },
    { url: '#', text: 'page 3' },
    { url: '#', text: 'page 4' },
    { url: '#', text: 'page 5' },
    { url: '#', text: 'page 6' },
    { url: '#', text: 'page 7' },
    { url: '#', text: 'page 8' },
    { url: '#', text: 'page 9' },
    { url: '#', text: 'page 10' },
    { url: '#', text: 'page 11' },
    { url: '#', text: 'current page' },
  ];
  return <Breadcrumbs items={items} mobile />;
};

const Template4: ComponentStory<typeof Breadcrumbs> = (args) => {
  // import { Link as RouterLink, MemoryRouter as Router } from 'react-router-dom';
  const items = [
    { linkAs: RouterLink, text: 'page 1', linkProps: { to: '/page1' } },
    { linkAs: RouterLink, text: 'page 2222222222222222222222222222222222222222', linkProps: { to: '/page2' } },
    { linkAs: RouterLink, text: 'page 3', linkProps: { to: '/page3' } },
    { linkAs: RouterLink, text: 'current page', linkProps: { to: '#' } },
  ];
  return (
    <Router>
      <Breadcrumbs {...args} items={items} />
    </Router>
  );
};

export const Playground = Template1.bind({});
Playground.args = {};
Playground.storyName = 'Playground.';

export const Sizes = Template2.bind({});
Sizes.args = {};
Sizes.storyName = 'Breadcrumbs. Размеры.';

export const Mobile = Template3.bind({});
Mobile.args = {};
Mobile.storyName = 'Breadcrumbs. Mobile.';

export const IntrenalLink = Template4.bind({});
IntrenalLink.args = {};
IntrenalLink.storyName = 'Breadcrumbs. Пример с react-router.';
IntrenalLink.parameters = {
  docs: {
    description: {
      story: `С помощью параметров linkAs и linkProps (входят в состав BreadcrumbProps) 
      можно вместо обычного anchor отрендерить внутри хлебной крошки любой другой компонент. 
      Этот компонент можно задать с помощью свойства  linkAs и передать в него необходимые параметры через linkProps.`,
    },
  },
};
