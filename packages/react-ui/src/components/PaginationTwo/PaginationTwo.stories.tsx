import * as React from 'react';
import styled from 'styled-components';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import { PaginationTwo } from './';

const Separator = styled.div`
  height: 20px;
`;
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
  color: rgba(51, 51, 51, 0.75);
`;

const Description = () => (
  <Desc>
    Компонент используется для навигации по длинным спискам, где информация разбивается на страницы.
    <Separator />
    Старайтесь подбирать размер страницы таким образом, чтобы она была не больше 3-4 экранов пользователя. За базовый
    экран принимается экран с разрешением 1280×720px.
  </Desc>
);

export default {
  title: 'Admiral-2.1/Data Table/PaginationTwo',
  decorators: [withDesign],
  component: PaginationTwo,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    componentSubtitle: <Description />,
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A41441',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A41584',
      },
    ],
  },
  argTypes: {
    count: {
      control: { type: 'number' },
    },
    page: {
      control: { type: 'number' },
    },
    pageSize: {
      control: { type: 'number' },
    },
    totalItems: {
      control: { type: 'number' },
    },
    mobile: {
      control: { type: 'boolean' },
    },
    showNextBtnMobile: {
      control: { type: 'boolean' },
    },
    showInput: {
      control: { type: 'boolean' },
    },
    disabledPages: {
      control: false,
    },
  },
} as ComponentMeta<typeof PaginationTwo>;

const Template0: ComponentStory<typeof PaginationTwo> = ({ page, onChange, count, ...args }) => {
  const [page1, setPage1] = React.useState(1);
  const handleChange = (event: any, page: number) => setPage1(page);
  return (
    <>
      <PaginationTwo count={count || 7} page={page || page1} onChange={onChange || handleChange} {...args} />
    </>
  );
};

const Template1: ComponentStory<typeof PaginationTwo> = (args) => {
  const [page1, setPage1] = React.useState(1);
  const [page2, setPage2] = React.useState(1);
  const [page3, setPage3] = React.useState(1);
  const [page4, setPage4] = React.useState(1);
  const [page5, setPage5] = React.useState(1);
  const [page6, setPage6] = React.useState(1);
  const style = { marginBottom: '60px' };

  return (
    <>
      <Text>Если страниц 7 или меньше, то выводится полный перечень страниц без сокращений:</Text>
      <PaginationTwo {...args} count={7} page={page1} onChange={(_, page) => setPage1(page)} style={style} />
      <Text>
        Если страниц больше, чем 7, то через многоточие указывается ссылка на последнюю страницу в последовательности:
      </Text>
      <PaginationTwo {...args} count={16} page={page2} onChange={(_, page) => setPage2(page)} style={style} />
      <Text>Если страниц больше 21, то можно вводить номер страницы вручную через поле ввода:</Text>
      <PaginationTwo {...args} count={22} page={page3} onChange={(_, page) => setPage3(page)} style={style} />
      <Text>
        Возможны случаи, когда некоторые страницы недоступны. Также блокируются боковые стрелки по достижении
        начала/конца списка
      </Text>
      <PaginationTwo
        {...args}
        count={7}
        page={page4}
        disabledPages={[3]}
        onChange={(_, page) => setPage4(page)}
        style={style}
      />
      <Text>Опционально можно показывать количество записей:</Text>
      <PaginationTwo
        {...args}
        count={7}
        page={page5}
        pageSize={20}
        totalItems={130}
        onChange={(_, page) => setPage5(page)}
        style={style}
      />
      <PaginationTwo
        {...args}
        count={22}
        page={page6}
        pageSize={10}
        totalItems={215}
        onChange={(_, page) => setPage6(page)}
      />
    </>
  );
};

const Template2: ComponentStory<typeof PaginationTwo> = (args) => {
  const [page1, setPage1] = React.useState(1);
  const [page2, setPage2] = React.useState(1);
  const style = { marginBottom: '60px' };

  return (
    <>
      <Text>
        В мобильной версии компонента нет стрелок навигации. Компонент можно растягивать во всю ширину экрана устройства
        (с учетом отступов по бокам экрана).
      </Text>
      <PaginationTwo {...args} count={7} page={page1} onChange={(_, page) => setPage1(page)} mobile style={style} />
      <Text>Можно использовать без кнопки “Дальше”, особенно, если не много страниц.</Text>
      <PaginationTwo
        {...args}
        count={7}
        page={page2}
        onChange={(_, page) => setPage2(page)}
        style={style}
        mobile
        showNextBtnMobile={false}
      />
    </>
  );
};

export const Playground = Template0.bind({});
Playground.args = {};
Playground.storyName = 'Playground.';

export const Examples = Template1.bind({});
Examples.args = {};
Examples.storyName = 'Примеры.';

export const Mobile = Template2.bind({});
Mobile.args = {};
Mobile.storyName = 'Мобильная версия.';
