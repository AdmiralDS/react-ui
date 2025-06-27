import { useState } from 'react';
import { LIGHT_THEME, Label, Calendar, T } from '@admiral-ds/react-ui';
import type { Theme, Locale } from '@admiral-ds/react-ui';
import styled, { ThemeProvider } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > div {
    margin-bottom: 24px;
  }
`;

export const LocaleThemeNewLocaleTemplate = () => {
  function setDeLocale(theme?: Theme): Theme {
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
      fileInput: {
        metricUnits: ['Kb', 'Mb', 'Gb'],
      },
      groupActionsPane: {
        inputPlaceholder: 'In der Tabelle suchen',
      },
      hint: {
        closeButtonAriaLabel: 'Tipp schließen',
      },
      imageViewer: {
        flipHorizontallyText: 'Horizontal spiegeln',
        flipVerticallyText: 'Vertikal spiegeln',
        rotateLeftText: 'Nach links drehen',
        rotateRightText: 'Nach rechts drehen',
        zoomInText: 'Heranzoomen',
        zoomOutText: 'Herauszoomen',
        backwardText: 'Zurück',
        forwardText: 'Weiterleiten',
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
      textArea: {
        copyTextMessage: 'Text kopieren',
        copiedMessage: 'Kopiert',
      },
    };
    if (theme) {
      return { ...theme, currentLocale: 'de', locales: { ...theme.locales, de: deLocale } };
    }
    LIGHT_THEME.currentLocale = 'de';
    LIGHT_THEME.locales = { ...LIGHT_THEME.locales, de: deLocale };
    return LIGHT_THEME;
  }
  const [selected, setSelected] = useState<Date | null>(null);

  return (
    <Wrapper>
      <ThemeProvider theme={setDeLocale}>
        <T font="Body/Body 1 Long" as="div">
          Пользователь может создать свою локаль. Для этого в объект theme.locales добавляется соответсвующий ключ,
          значением которого является объект типа Locale. Данный объект содержит в себе перечисление текстовых констант
          для компонентов библиотеки, а также содержит свойство firstDayOfWeek. Свойство firstDayOfWeek (значение св-ва
          - число от 0 до 6) обозначает, с какого дня начинается неделя для данной локали, где 0 - это воскресенье.
        </T>
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
