import React from 'react';

/** Подробное описание текстовых констант можно найти в locale*/
export interface Locale {
  /** Число от 0 до 6, где 0 - это воскресенье */
  firstDayOfWeek: number;
  badge: {
    amountAriaLabel: string;
  };
  calendar: {
    backwardText: string;
    forwardText: string;
    nextMonthText: string;
    previousMonthText: string;
    returnText: string;
    selectYearText: string;
    selectMonthText: string;
  };
  groupActionsPane: {
    inputPlaceholder: string;
  };
  hint: {
    closeButtonAriaLabel: string;
  };
  modal: {
    closeButtonAriaLabel: string;
  };
  paginationOne: {
    itemsPerPageText: string;
    pageSelectLabel: (...props: any) => string;
    pageSizeSelectLabel: (...props: any) => string;
    itemRangeText: (...props: any) => string;
    pageRangeText: (props: any) => string;
    backwardText: string;
    forwardText: string;
  };
  paginationTwo: {
    inputPlaceholder: string;
    itemRangeText: (min: number, max: number, total: number) => string;
  };
  progressStepper: {
    stepName: [string, string];
    renderNextStepName: (nextStepName: string) => React.ReactNode;
    progressText: (activeStepNumber: number, stepsAmount: number, stepNamePlural: string) => string;
  };
  select: {
    emptyMessage: string;
  };
  suggestInput: {
    emptyMessage: string;
  };
  table: {
    emptyMessage: React.ReactNode;
  };
}

export const locales: { [localeCode: string]: Locale } = {
  ru: {
    firstDayOfWeek: 1,
    badge: {
      amountAriaLabel: 'Количество',
    },
    calendar: {
      backwardText: 'Назад',
      forwardText: 'Вперед',
      nextMonthText: 'Следующий месяц',
      previousMonthText: 'Предыдущий месяц',
      returnText: 'Вернуться',
      selectYearText: 'Выбор года',
      selectMonthText: 'Выбор месяца',
    },
    groupActionsPane: {
      inputPlaceholder: 'Искать в таблице',
    },
    hint: {
      closeButtonAriaLabel: 'Закрыть подсказку',
    },
    modal: {
      closeButtonAriaLabel: 'Закрыть модальное окно',
    },
    paginationOne: {
      itemsPerPageText: 'Записей на странице:',
      pageSelectLabel: (page: number, totalPages: number) => `Страница ${page} из ${totalPages}`,
      pageSizeSelectLabel: (pageSize: number, total: number) => `Записей ${pageSize} из ${total}`,
      itemRangeText: (min: number, max: number, total: number) => `${min}–${max} записей из ${total}`,
      pageRangeText: (total: number) => `из ${total} ${total === 1 ? 'страницы' : 'страниц'}`,
      backwardText: 'Предыдущая страница, выбрать',
      forwardText: 'Следующая страница, выбрать',
    },
    paginationTwo: {
      inputPlaceholder: '№ страницы',
      itemRangeText: (min: number, max: number, total: number) => `${min}–${max} записей из ${total}`,
    },
    progressStepper: {
      renderNextStepName: (stepName: string) => `Далее - ${stepName}`,
      stepName: ['шаг', 'шагов'],
      progressText: (activeStepNumber: number, stepsAmount: number, stepNamePlural: string) =>
        `${activeStepNumber} из ${stepsAmount} ${stepNamePlural}`,
    },
    select: {
      emptyMessage: 'Нет совпадений',
    },
    suggestInput: {
      emptyMessage: 'Нет совпадений',
    },
    table: {
      emptyMessage: 'Нет совпадений',
    },
  },
  en: {
    firstDayOfWeek: 1,
    badge: {
      amountAriaLabel: 'Amount',
    },
    calendar: {
      backwardText: 'Back',
      forwardText: 'Forward',
      nextMonthText: 'Next month',
      previousMonthText: 'Previous month',
      returnText: 'Return',
      selectYearText: 'Select year',
      selectMonthText: 'Select month',
    },
    groupActionsPane: {
      inputPlaceholder: 'Search in table',
    },
    hint: {
      closeButtonAriaLabel: 'Close the hint',
    },
    modal: {
      closeButtonAriaLabel: 'Close the modal window',
    },
    paginationOne: {
      itemsPerPageText: 'Entries on the page:',
      pageSelectLabel: (page: number, totalPages: number) => `Page ${page} of ${totalPages}`,
      pageSizeSelectLabel: (pageSize: number, total: number) => `Entries ${pageSize} out of ${total}`,
      itemRangeText: (min: number, max: number, total: number) => `${min}–${max}  entries out of ${total}`,
      pageRangeText: (total: number) => `from ${total} ${total === 1 ? 'page' : 'pages'}`,
      backwardText: 'Previous page, select',
      forwardText: 'Next page, select',
    },
    paginationTwo: {
      inputPlaceholder: 'Page number',
      itemRangeText: (min: number, max: number, total: number) => `${min}–${max} entries out of ${total}`,
    },
    progressStepper: {
      renderNextStepName: (stepName: string) => `Next - ${stepName}`,
      stepName: ['step', 'steps'],
      progressText: (activeStepNumber: number, stepsAmount: number, stepNamePlural: string) =>
        `${activeStepNumber} from ${stepsAmount} ${stepNamePlural}`,
    },
    select: {
      emptyMessage: 'No matches',
    },
    suggestInput: {
      emptyMessage: 'No matches',
    },
    table: {
      emptyMessage: 'No matches',
    },
  },
  'en-US': {
    firstDayOfWeek: 0,
    badge: {
      amountAriaLabel: 'Amount',
    },
    calendar: {
      backwardText: 'Back',
      forwardText: 'Forward',
      nextMonthText: 'Next month',
      previousMonthText: 'Previous month',
      returnText: 'Return',
      selectYearText: 'Select year',
      selectMonthText: 'Select month',
    },
    groupActionsPane: {
      inputPlaceholder: 'Search in table',
    },
    hint: {
      closeButtonAriaLabel: 'Close the hint',
    },
    modal: {
      closeButtonAriaLabel: 'Close the modal window',
    },
    paginationOne: {
      itemsPerPageText: 'Entries on the page:',
      pageSelectLabel: (page: number, totalPages: number) => `Page ${page} of ${totalPages}`,
      pageSizeSelectLabel: (pageSize: number, total: number) => `Entries ${pageSize} out of ${total}`,
      itemRangeText: (min: number, max: number, total: number) => `${min}–${max}  entries out of ${total}`,
      pageRangeText: (total: number) => `from ${total} ${total === 1 ? 'page' : 'pages'}`,
      backwardText: 'Previous page, select',
      forwardText: 'Next page, select',
    },
    paginationTwo: {
      inputPlaceholder: 'Page number',
      itemRangeText: (min: number, max: number, total: number) => `${min}–${max} entries out of ${total}`,
    },
    progressStepper: {
      renderNextStepName: (stepName: string) => `Next - ${stepName}`,
      stepName: ['step', 'steps'],
      progressText: (activeStepNumber: number, stepsAmount: number, stepNamePlural: string) =>
        `${activeStepNumber} from ${stepsAmount} ${stepNamePlural}`,
    },
    select: {
      emptyMessage: 'No matches',
    },
    suggestInput: {
      emptyMessage: 'No matches',
    },
    table: {
      emptyMessage: 'No matches',
    },
  },
};
