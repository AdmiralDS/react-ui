import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import styled, { ThemeProvider } from 'styled-components';
import { Calendar } from '#src/components/Calendar';
import { Label } from '#src/components/Label';
import { ProgressStepper } from '#src/components/ProgressStepper';
import { Button } from '#src/components/Button';
import { Theme } from '#src/components/themes';
import type { Locale } from '#src/components/themes';

const Separator = styled.div`
  height: 20px;
  width: 100%;
`;

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Компоненты Admiral 2.1 поддерживают локализацию, и все текстовые константы в компонентах меняют своё значение при
    смене локали.
    <Separator />
    Текущая локаль задается в теме в свойстве currentLocale (значение по умолчанию - ru). В качестве значения
    currentLocale выступает строковый код локали, совместимый с методами Intl, и перечисленный в качестве ключа в другом
    свойстве темы - в объекте locales.
    <Separator />
    Объект theme.locales предтавляет собой перечисление локалей, поддерживаемых библиотекой: где ключами объекта
    выступают строковые коды локалей, а значениями объекты типа Locale с набором текстовых констант, соответствующих
    определенной локали.
    <Separator />
    Библиотека поддерживает три локали: ru, en, en-US. Чтобы переключить дефолтную русскую локаль на иную достаточно с
    помощью ThemeProvider изменить значение theme.currentLocale и убедиться, что данное значение содержится в
    theme.locales. Также пользователь всегда может добавить свою локаль, добавив соответствующий объект в theme.locales.
  </Desc>
);

export default {
  title: 'Locales',
  decorators: [withDesign],
  parameters: {
    componentSubtitle: <Description />,
  },
} as ComponentMeta<any>;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > div {
    margin-bottom: 20px;
  }
`;

const Template1: ComponentStory<any> = (args) => {
  function setUSALocale(theme: Theme): Theme {
    const newTheme = { ...theme, currentLocale: 'en-US' };
    return newTheme;
  }
  const [selected, setSelected] = React.useState<Date | null>(null);
  const [selected2, setSelected2] = React.useState<Date | null>(null);

  return (
    <Wrapper>
      <Label>Calendar in 'ru' locale</Label>
      <Calendar
        selected={selected}
        onChange={(value: any) => {
          setSelected(value);
        }}
      />
      <ThemeProvider theme={setUSALocale}>
        <Label>Calendar in 'en-US' locale</Label>
        <Calendar
          selected={selected2}
          onChange={(value: any) => {
            setSelected2(value);
          }}
        />
      </ThemeProvider>
    </Wrapper>
  );
};

const Template2: ComponentStory<any> = () => {
  function setDeLocale(theme: Theme): Theme {
    const deLocale: Locale = {
      /** Число от 0 до 6, где 0 - это воскресенье */
      firstDayOfWeek: 1,
      badge: {
        amountAriaLabel: 'Anzahl',
      },
      calendar: {
        backwardText: 'Zurück',
        forwardText: 'Vorwärts',
        nextMonthText: 'Nächster Monat',
        previousMonthText: 'Vorheriger Monat',
        returnText: 'Zurück sein',
        selectYearText: 'Wahl des Jahres',
        selectMonthText: 'Monatsauswahl',
      },
      groupActionsPane: {
        inputPlaceholder: 'In der Tabelle suchen',
      },
      hint: {
        closeButtonAriaLabel: 'Tipp schließen',
      },
      modal: {
        closeButtonAriaLabel: 'Modales Fenster schließen',
      },
      paginationOne: {
        itemsPerPageText: 'Einträge pro Seite:',
        pageSelectLabel: (page: number, totalPages: number) => `Seite ${page} von ${totalPages}`,
        pageSizeSelectLabel: (pageSize: number, total: number) => `Einträge ${pageSize} von ${total}`,
        itemRangeText: (min: number, max: number, total: number) => `${min}–${max} einträge von ${total}`,
        pageRangeText: (total: number) => `von ${total} ${total === 1 ? 'Seite' : 'Seiten'}`,
        backwardText: 'Vorherige Seite, auswählen',
        forwardText: 'Nächste Seite, auswählen',
      },
      paginationTwo: {
        inputPlaceholder: '№ Seiten',
        itemRangeText: (min: number, max: number, total: number) => `${min}–${max} einträge von ${total}`,
      },
      progressStepper: {
        renderNextStepName: (stepName: string) => `Weiter - ${stepName}`,
        stepName: ['schritt', 'schritte'],
        progressText: (activeStepNumber: number, stepsAmount: number, stepNamePlural: string) =>
          `${activeStepNumber} von ${stepsAmount} ${stepNamePlural}`,
      },
      select: {
        emptyMessage: 'Keine Zufälle',
      },
      suggestInput: {
        emptyMessage: 'Keine Zufälle',
      },
      table: {
        emptyMessage: 'Keine Zufälle',
      },
    };
    const newTheme = { ...theme, currentLocale: 'de', locales: { ...theme.locales, de: deLocale } };
    return newTheme;
  }
  const [selected, setSelected] = React.useState<Date | null>(null);

  return (
    <Wrapper>
      <ThemeProvider theme={setDeLocale}>
        <Label>Calendar in 'de' locale</Label>
        <Calendar
          selected={selected}
          onChange={(value: any) => {
            setSelected(value);
          }}
        />
      </ThemeProvider>
    </Wrapper>
  );
};

const Template3: ComponentStory<any> = () => {
  const steps = [
    'Определение стратегии',
    'Анализ',
    'Проектирование',
    'Реализация',
    'Тестирование',
    'Внедрение',
    'Техническая поддержка',
  ];
  const [activeStep, setActiveStep] = React.useState(0);
  return (
    <Wrapper>
      <ProgressStepper
        steps={steps}
        activeStep={activeStep}
        locale={{
          stepName: ['этап', 'этапов'],
          renderNextStepName: (stepName: string) => `Далее следует этап - ${stepName}`,
        }}
      />
      <div>
        <Button
          dimension="s"
          disabled={activeStep <= 0}
          onClick={() => setActiveStep(activeStep - 1)}
          style={{ marginRight: '40px' }}
        >
          Назад
        </Button>
        <Button dimension="s" disabled={activeStep >= 6} onClick={() => setActiveStep(activeStep + 1)}>
          Вперёд
        </Button>
      </div>
    </Wrapper>
  );
};

export const ThemeCurrentLocale = Template1.bind({});
ThemeCurrentLocale.args = {};
ThemeCurrentLocale.storyName = 'Пример использования календаря в русской и американской локалях';

export const ThemeNewLocale = Template2.bind({});
ThemeNewLocale.args = {};
ThemeNewLocale.storyName = 'Пример определения новой локали (немецкой)';
ThemeNewLocale.parameters = {
  docs: {
    description: {
      story: `Пользователь может создать свою локаль. Для этого в объект theme.locales 
      добавляется соответсвующий ключ, значением которого является объект типа Locale.
      Данный объект содержит в себе перечисление текстовых констант для компонентов библиотеки, а также содержит
      свойство firstDayOfWeek. Свойство firstDayOfWeek (значение св-ва - число от 0 до 6) обозначает, 
      с какого дня начинается неделя для данной локали, где 0 - это воскресенье.`,
    },
  },
};

export const RedeclareLocaleParams = Template3.bind({});
RedeclareLocaleParams.args = {};
RedeclareLocaleParams.storyName =
  'Пример переопределения текстовых констант с помощью пропса locale в компоненте ProgressStepper';
RedeclareLocaleParams.parameters = {
  docs: {
    description: {
      story: `В некоторых случаях может быть необходимо изменить значения текстовых констант для отдельных
        компонентов. Для этого у компонентов, использующих текстовые константы, есть специальный параметр locale - объект, в
        котором можно задать альтернативные значения текстовых констант, отличные от тех, что заданы в theme.locales.
        Текстовая константа, заданная через пропс locale компонента имеет больший приоритет, чем та же константа, заданная в
        theme.locale.`,
    },
  },
};
