import React from 'react';
import styled from 'styled-components';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { typography } from '#src/components/Typography';

import { ProgressStepper } from '../ProgressStepper';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Separator = styled.div`
  height: 20px;
  width: 100%;
`;

const Sect = styled.div`
  margin-bottom: 60px;
  ${typography['Body/Body 1 Long']}
  label {
    display: block;
    margin-bottom: 20px;
  }
`;

const H6 = styled.div`
  ${typography['Subtitle/Subtitle 1']}
`;

const Section = ({ title, children }: any) => (
  <Sect>
    <label>{title}</label>
    {children}
  </Sect>
);

const Description = () => (
  <Desc>
    Компонент Progress Stepper — визуальное отображение пользовательского прогресса в виде заполняющейся линии.
    Уведомляет пользователя о текущем положении на пути при выполнении конкретной задачи.
    <Separator />
    Названия шагов должны сопровождать индикатор прогресса, чтобы указать, что пользователь будет выполнять на каждом из
    этапов. Рекомендуется использовать короткие и емкие названия шагов для явного отображения сути.
    <Separator />
    Линия условно делится на количество частей соответствующее количеству шагов. Может изменяться по ширине, минимальная
    ширина 388px.
    <Separator />
    На мобильных устройствах применяется компонент Stepper Progress Mobile. Использование строки названия следующего
    шага — опционально.
  </Desc>
);

export default {
  title: 'Example/ProgressStepper',
  decorators: [withDesign],
  component: ProgressStepper,
  parameters: {
    componentSubtitle: <Description />,
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/CC0WL5u9TPtZpyLbbAGFGt/Admiral-2.0-UI-Kit?node-id=37%3A16832',
    },
  },
  argTypes: {
    mobile: {
      control: { type: 'boolean' },
    },
    displayNextStepName: {
      control: { type: 'boolean' },
    },
    activeStep: {
      control: { type: 'number' },
    },
  },
} as ComponentMeta<typeof ProgressStepper>;

const Template0: ComponentStory<typeof ProgressStepper> = (args) => {
  const steps = [
    'Название первого шага',
    'Название второго шага',
    'Название третьего шага',
    'Название четвертого шага',
    'Название пятого шага',
    'Название шестого шага',
  ];
  return <ProgressStepper {...args} steps={steps} />;
};

const Template1: ComponentStory<typeof ProgressStepper> = (args) => {
  const steps = [
    'название первого шага',
    'название второго шага',
    'название третьего шага',
    'название четвертого шага',
    'название пятого шага',
    'название шестого шага',
  ];
  const steps2 = [
    'название первого этапа',
    'название второго этапа',
    'название третьего этапа',
    'название четвертого этапа',
    'название пятого этапа',
    'название шестого этапа',
  ];
  return (
    <>
      <Section title="Первый шаг">
        <ProgressStepper {...args} steps={steps} activeStep={0} />
      </Section>
      <Section title="Середина прогресса">
        <ProgressStepper {...args} steps={steps} activeStep={2} />
      </Section>
      <Section title="Последний шаг">
        <ProgressStepper {...args} steps={steps} activeStep={5} />
      </Section>
      <Section title="Первый шаг - Adaptive (Mobile)">
        <ProgressStepper {...args} steps={steps} activeStep={0} mobile />
      </Section>
      <Section title="Середина прогресса - Adaptive (Mobile)">
        <ProgressStepper {...args} steps={steps} activeStep={2} mobile />
      </Section>
      <Section title="Последний шаг - Adaptive (Mobile)">
        <ProgressStepper {...args} steps={steps} activeStep={5} mobile />
      </Section>
      <Section title="Кастомная подпись о следующем шаге">
        <ProgressStepper
          {...args}
          steps={steps}
          activeStep={2}
          renderNextStepName={(nextStepName) => `Далее следует шаг: ${nextStepName}`}
        />
      </Section>
      <Section title="Отключение подписи о следующем шаге">
        <ProgressStepper {...args} steps={steps} activeStep={2} displayNextStepName={false} mobile />
      </Section>
      <Section title="Пример настройки названия шага">
        <ProgressStepper {...args} steps={steps2} activeStep={2} stepName={['этап', 'этапа', 'этапов']} />
      </Section>
    </>
  );
};

export const Playground = Template0.bind({});
Playground.args = {};
Playground.storyName = 'StepperProgress. Playground.';

export const StepperProgressExamples = Template1.bind({});
StepperProgressExamples.args = {};
StepperProgressExamples.storyName = 'StepperProgress. Примеры использования.';
