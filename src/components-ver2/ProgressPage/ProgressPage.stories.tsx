import React, { useEffect, useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { ProgressPage } from './index';
import { useDarkMode } from 'storybook-dark-mode';
import styled, { ThemeProvider } from 'styled-components';
import { DARK_THEME, LIGHT_THEME } from '#src/components-ver2/themes';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Компонент для отображения прогресса загрузки страницы, либо контента на странице. Компонент может изменяться по
    ширине, минимальный размер 140px. Компонент имеет два сценария применения: Первый, когда мы, например, загружаем
    тяжелую страницу (или контент на ней) и показываем прогресс ее загрузки, при этом блокируется содержимое страницы и
    прогресс отображается оверлеем. Второй сценарий, более редкий, когда компонент используется как часть интерфейсов на
    странице и отображает прогресс какого-либо процесса, например опроса.
  </Desc>
);

export default {
  title: 'Admiral-2.1/ProgressPage',
  decorators: [withDesign],
  component: ProgressPage,
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
    },
    componentSubtitle: <Description />,
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A25008',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A25036',
      },
    ],
  },
  argTypes: {
    appearance: {
      options: ['primary', 'error'],
      control: { type: 'radio' },
      defaultValue: 'primary',
    },
  },
} as ComponentMeta<typeof ProgressPage>;

const Template1: ComponentStory<typeof ProgressPage> = ({ ...args }) => {
  return (
    <ThemeProvider theme={useDarkMode() ? DARK_THEME : LIGHT_THEME}>
      <ProgressPage
        {...args}
        label={
          <>
            <div>{args.appearance === 'error' ? 'Ошибка загрузки' : 'Загрузка данных...'}</div>
            <div> {args.percent}%</div>
          </>
        }
        percent={args.percent}
        role="alert"
        aria-live="assertive"
      />
    </ThemeProvider>
  );
};

const Template2: ComponentStory<typeof ProgressPage> = ({ ...args }) => {
  const [tik, setTick] = useState(0);

  useEffect(() => {
    const counter = () => setTick((prev) => prev + 1);
    const timerId = setTimeout(counter, 1000);
    if (tik >= 20) {
      clearTimeout(timerId);
    }
    return () => {
      clearTimeout(timerId);
    };
  }, [tik]);

  return (
    <ThemeProvider theme={useDarkMode() ? DARK_THEME : LIGHT_THEME}>
      <ProgressPage
        {...args}
        label={
          <>
            <div>{args.appearance === 'error' ? 'Ошибка загрузки' : 'Загрузка данных...'}</div>
            <div> {args.percent || tik}%</div>
          </>
        }
        percent={args.percent || tik}
        role="alert"
        aria-live="assertive"
      />
    </ThemeProvider>
  );
};

export const Progress = Template1.bind({});
export const ProgressAnimation = Template2.bind({});
Progress.storyName = 'Базовый пример';
ProgressAnimation.storyName = 'Прогресс бар с анимацией';
Progress.args = {
  percent: 50,
};
