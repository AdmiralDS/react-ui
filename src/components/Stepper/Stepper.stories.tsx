import React from 'react';
import styled from 'styled-components';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import { Button } from '#src/components/Button';
import { Step, StepContent, Stepper } from '#src/components/Stepper';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Separator = styled.div`
  height: 20px;
  width: 100%;
`;

const Description = () => (
  <Desc>
    Компонент Stepper — визуальное отображение пользовательского прогресса через набор шагов. Уведомляет пользователя о
    текущем положении на пути при выполнении конкретной задачи.
    <Separator />
    Названия шагов должны сопровождать индикатор прогресса, чтобы указать, что пользователь будет выполнять на каждом из
    этапов. Рекомендуется использовать короткие и емкие названия шагов для явного отображения сути.
    <Separator />
    Компонент представлен в двух вариантах — горизонтальном и вертикальном.
  </Desc>
);

export default {
  title: 'Admiral-2.1/Stepper',
  decorators: [withDesign],
  component: Stepper,
  parameters: {
    componentSubtitle: <Description />,
    layout: 'centered',
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A16671',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A16789',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A16767',
      },
    ],
  },
  argTypes: {
    orientation: {
      options: ['horizontal', 'vertical'],
      control: { type: 'radio' },
    },
    lineClamp: {
      options: [1, 2, 3],
      control: { type: 'radio' },
    },
    hideLastStepLine: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof Stepper>;

const Template0: ComponentStory<typeof Stepper> = ({ lineClamp, activeStep, orientation, ...args }) => {
  const steps = [
    {
      key: 0,
      content: 'Завершенный шаг, текст занимает максимум три строки, далее идет сокращение',
      completed: true,
    },
    { key: 1, content: 'Завершенный шаг, текст занимает максимум три строки, далее идет сокращение', completed: true },
    { key: 2, content: 'Активный шаг, текст занимает максимум три строки' },
    { key: 3, content: 'Неактивный шаг, текст занимает максимум три строки' },
  ];
  return (
    <>
      <Stepper lineClamp={lineClamp} activeStep={activeStep || 2} orientation={orientation} {...args}>
        {steps.map(({ content, ...step }) => {
          return (
            <Step {...step} onClick={(step: any) => console.log(step.index)}>
              <StepContent tooltipProps={{ style: { maxWidth: '300px' } }}>{content}</StepContent>
            </Step>
          );
        })}
      </Stepper>
    </>
  );
};

const Template1: ComponentStory<typeof Stepper> = (args) => {
  const steps = [
    {
      key: 0,
      content: 'Завершенный шаг, текст занимает максимум три строки, далее идет сокращение',
      completed: true,
    },
    { key: 1, content: 'Завершенный шаг, текст занимает максимум три строки, далее идет сокращение', completed: true },
    { key: 2, content: 'Активный шаг, текст занимает максимум три строки' },
    { key: 3, content: 'Неактивный шаг, текст занимает максимум три строки' },
  ];
  return (
    <>
      <Stepper lineClamp={2} activeStep={2}>
        {steps.map(({ content, ...step }) => {
          return (
            <Step {...step}>
              <i>{content}</i>
            </Step>
          );
        })}
      </Stepper>
    </>
  );
};

const Template2: ComponentStory<typeof Stepper> = (args) => {
  const steps = [
    { key: 0, content: 'Шаг с предупреждением', warning: true },
    { key: 1, content: 'Disabled шаг', disabled: true },
    { key: 2, content: 'Шаг с ошибкой', error: true },
    { key: 3, content: 'Завершенный шаг', completed: true },
    { key: 4, content: 'Активный шаг' },
    { key: 5, content: 'Неактивный шаг' },
  ];
  return (
    <>
      <div style={{ maxWidth: '800px', overflow: 'hidden' }}>
        <Stepper activeStep={4}>
          {steps.map(({ content, ...step }) => {
            return (
              <Step {...step}>
                <StepContent tooltipProps={{ style: { maxWidth: '300px' } }}>{content}</StepContent>
              </Step>
            );
          })}
        </Stepper>
      </div>
    </>
  );
};

const Template3: ComponentStory<typeof Stepper> = (args) => {
  const steps = [
    {
      key: 0,
      content: 'Завершенный шаг, текст занимает максимум три строки, далее идет сокращение',
      link: '#',
      completed: true,
    },
    {
      key: 1,
      content: 'Завершенный шаг, текст занимает максимум три строки, далее идет сокращение',
      link: '#',
      completed: true,
    },
    { key: 2, content: 'Активный шаг, текст занимает максимум три строки', link: '#' },
    { key: 3, content: 'Неактивный шаг, текст занимает максимум три строки', link: '#' },
  ];
  return (
    <>
      <Stepper activeStep={2}>
        {steps.map(({ content, ...step }) => {
          return (
            <Step {...step}>
              <StepContent tooltipProps={{ style: { maxWidth: '300px' } }}>{content}</StepContent>
            </Step>
          );
        })}
      </Stepper>
      <Separator />
      <Stepper activeStep={2} orientation="vertical" style={{ width: '25%' }}>
        {steps.map(({ content, ...step }) => {
          return (
            <Step {...step}>
              <StepContent tooltipProps={{ style: { maxWidth: '300px' } }}>{content}</StepContent>
            </Step>
          );
        })}
      </Stepper>
    </>
  );
};

const Template4: ComponentStory<typeof Stepper> = (args) => {
  const steps = [
    {
      key: 0,
      content: 'Завершенный шаг, текст занимает максимум три строки, далее идет сокращение',
      completed: true,
    },
    { key: 1, content: 'Завершенный шаг, текст занимает максимум три строки, далее идет сокращение', completed: true },
    { key: 2, content: 'Активный шаг, текст занимает максимум три строки' },
    { key: 3, content: 'Неактивный шаг, текст занимает максимум три строки' },
  ];
  return (
    <>
      <Stepper activeStep={2}>
        {steps.map(({ content, ...step }) => {
          return (
            <Step {...step} onClick={(step: any) => console.log(step.index)}>
              <StepContent tooltipProps={{ style: { maxWidth: '300px' } }}>{content}</StepContent>
            </Step>
          );
        })}
      </Stepper>
      <Separator />
      <Stepper activeStep={2} orientation="vertical" style={{ width: '225px' }}>
        {steps.map(({ content, ...step }) => {
          return (
            <Step {...step} onClick={(step: any) => console.log(step.index)}>
              <StepContent tooltipProps={{ style: { maxWidth: '300px' } }}>{content}</StepContent>
            </Step>
          );
        })}
      </Stepper>
    </>
  );
};

const Template5: ComponentStory<typeof Stepper> = (args) => {
  const initialSteps = [
    {
      key: 0,
      content: '1. Пройденный шаг',
      completed: true,
    },
    { key: 1, content: '2. Ранее пройденный шаг, на котрый мы вернулись с 4го шага' },
    { key: 2, content: '3. Пройденный шаг', completed: true },
    { key: 3, content: '4. Отсюда мы вернулись на 2 шаг.', completed: true },
    { key: 4, content: '5. Неактивный шаг, еще не пройденный' },
  ];

  const [activeStep, setActiveStep] = React.useState(1);
  const [steps, setSteps] = React.useState(initialSteps);
  const handleStepClick = ({ index }: any) => {
    const newSteps = [...steps].map((step, i) => (i < 4 ? { ...step, completed: i !== index } : step));
    setSteps(newSteps);
    setActiveStep(index);
  };
  return (
    <>
      <div style={{ maxWidth: '800px', overflow: 'hidden' }}>
        <Stepper lineClamp={2} activeStep={activeStep}>
          {steps.map(({ content, ...step }) => {
            return (
              <Step {...step} onClick={handleStepClick}>
                <StepContent tooltipProps={{ style: { maxWidth: '300px' } }}>{content}</StepContent>
              </Step>
            );
          })}
        </Stepper>
      </div>
    </>
  );
};

const Template6: ComponentStory<typeof Stepper> = (args) => {
  const initialSteps = [
    {
      key: 0,
      content: 'Текст занимает максимум три строки, далее идет сокращение',
    },
    { key: 1, content: 'Текст занимает максимум три строки, далее идет сокращение' },
    { key: 2, content: 'Текст занимает максимум три строки, далее идет сокращение' },
    { key: 3, content: 'Текст занимает максимум три строки, далее идет сокращение' },
  ];
  const [activeStep, setActiveStep] = React.useState(0);
  const [steps, setSteps] = React.useState(initialSteps);

  return (
    <>
      <div style={{ width: '400px', overflow: 'hidden' }}>
        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', marginBottom: '40px' }}>
          <Button
            onClick={() => {
              const newSteps = [...steps].map((step, i) =>
                i === activeStep - 1 ? { ...step, completed: false } : step,
              );
              setSteps(newSteps);
              setActiveStep(activeStep - 1);
            }}
            disabled={activeStep === 0}
            dimension="s"
          >
            Шаг назад
          </Button>
          <Button
            onClick={() => {
              const newSteps = [...steps].map((step, i) => (i === activeStep ? { ...step, completed: true } : step));
              setSteps(newSteps);
              setActiveStep(activeStep + 1);
            }}
            disabled={activeStep === 3}
            dimension="s"
          >
            Шаг вперёд
          </Button>
        </div>
        <Stepper activeStep={activeStep} mobile>
          {steps.map(({ content, ...step }) => {
            return (
              <Step {...step}>
                <StepContent tooltipProps={{ style: { maxWidth: '300px' } }}>{content}</StepContent>
              </Step>
            );
          })}
        </Stepper>
      </div>
    </>
  );
};

export const Playground = Template0.bind({});
Playground.args = {};
Playground.storyName = 'Stepper. Playground.';

export const StepKinds = Template2.bind({});
StepKinds.args = {};
StepKinds.storyName = 'Stepper. Виды шагов.';
StepKinds.parameters = {
  docs: {
    description: {
      story: `Для обозначения активного шага в компонент Stepper нужно передать параметр activeStep, равный индексу активного шага.
      Либо для самого Step можно задать параметр active (перезаписывает собой параметр activeStep). \n\n Чтобы обозначить завершенные 
      (пройденные) шаги, для соответствующих шагов необходимо задать параметр completed. Также компонент Step имеет параметры disabled, 
      error, warning.\n\nПройденные шаги могут быть кликабельными, для этого у них 
      должен быть задан колбек onClick или параметр link.`,
    },
  },
};

export const StepAdaptive = Template3.bind({});
StepAdaptive.args = {};
StepAdaptive.storyName = 'Stepper. Адаптив.';
StepAdaptive.parameters = {
  docs: {
    description: {
      story: `С помощью параметра stepWidth можно задать ширину шага. Если данный параметр не задан, 
      то ширина шага будет рассчитываться следующим образом:\n\n- при горизонтальной ориентации все 
      шаги будут в равной степени делить между собой свободное пространство;\n\n- при вертикальной 
      ориентации каждый шаг займет 100% ширины степпера.\n\nТаким образом шаги будут пропорционально 
      увеличиваться/уменьшаться при изменении ширины степпера.`,
    },
  },
};

export const CutomStepContent = Template1.bind({});
CutomStepContent.args = {};
CutomStepContent.storyName = 'Stepper. Кастомный StepContent.';

export const ClickableLinks = Template3.bind({});
ClickableLinks.args = {};
ClickableLinks.storyName = 'Stepper. Шаги в виде ссылок.';

export const ClickProp = Template4.bind({});
ClickProp.args = {};
ClickProp.storyName = 'Stepper. Кликабельные шаги.';

export const Previous = Template5.bind({});
Previous.args = {};
Previous.storyName = 'Stepper. Возврат к предыдущим шагам.';
Previous.parameters = {
  docs: {
    description: {
      story: `В случаях необходимости и когда это позволяет логика шагов, например, результаты предыдущих 
      шагов не влияют на последующие, допускается возможность возврата к предыдущим шагам.`,
    },
  },
};

export const Mobile = Template6.bind({});
Mobile.args = {};
Mobile.storyName = 'Stepper. Мобильная версия.';
Mobile.parameters = {
  docs: {
    description: {
      story: `В мобильной версии применяется только горизонтальный вариант компонента
      с автоматическим скроллом по горизонтали по мере прохождения шагов.\n\nКомпонент можно скроллить пальцем,
      если нужно посмотреть пройденные или будущие шаги.\n\nПри переходе на следующий шаг, который становится
      текущим, он выравнивается относительно левого края на расстоянии 16px (боковой падинг). Шаг перед текущим
      уходит за границы экрана.\n\nДля перевода компонента в мобильный вид используйте параметр mobile.`,
    },
  },
};
