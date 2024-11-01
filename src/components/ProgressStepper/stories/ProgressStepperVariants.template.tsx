import { ProgressStepper, typography } from '@admiral-ds/react-ui';
import type { ProgressStepperProps } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Sect = styled.div`
  margin-bottom: 60px;
  ${typography['Body/Body 1 Long']}
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
  label {
    display: block;
    margin-bottom: 20px;
  }
`;

interface SectionProps {
  title: string;
  children: React.ReactNode;
}
const Section = ({ title, children }: SectionProps) => (
  <Sect>
    <label>
      <i>{title}</i>
    </label>
    {children}
  </Sect>
);

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

export const ProgressStepperVariantsTemplate = (args: ProgressStepperProps) => {
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
          locale={{ renderNextStepName: (nextStepName) => `Далее следует шаг: ${nextStepName}` }}
        />
      </Section>
      <Section title="Отключение подписи о следующем шаге">
        <ProgressStepper {...args} steps={steps} activeStep={2} displayNextStepName={false} mobile />
      </Section>
      <Section title="Пример настройки названия шага">
        <ProgressStepper {...args} steps={steps2} activeStep={2} locale={{ stepName: ['этап', 'этапов'] }} />
      </Section>
    </>
  );
};
