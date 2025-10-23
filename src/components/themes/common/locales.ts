import type React from 'react';

/** Объект локали включает в себя все константы, используемые в компонентах и зависящие от изменения локали.
 * Также каждый компонент, использующий локализацию, имеет параметр locale.
 * Данный параметр включает в себя те же константы, что и в теме, и необходим в тех случаях,
 * если пользователь хочет перезадать значения констант точечно для отдельного компонента.
 * Подробное описание текстовых констант можно найти в параметре locale для каждого компонента. */
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
  fileInput: {
    metricUnits: [string, string, string];
  };
  groupActionsPane: {
    inputPlaceholder: string;
  };
  hint: {
    closeButtonAriaLabel: string;
  };
  imageViewer: {
    flipHorizontallyText: string;
    flipVerticallyText: string;
    rotateLeftText: string;
    rotateRightText: string;
    zoomOutText: string;
    zoomInText: string;
    backwardText: string;
    forwardText: string;
  };
  modal: {
    closeButtonAriaLabel: string;
  };
  paginationOne: {
    itemsPerPageText: string;
    pageSelectLabel: (page: number, totalPages: number) => string;
    pageSizeSelectLabel: (pageSize: number, totalItems: number) => string;
    itemRangeText: (min: number, max: number, total: number) => string;
    pageRangeText: (totalPages: number) => string;
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
  textArea: {
    copyTextMessage: string;
    copiedMessage: string;
  };
}

const ruLocale: Locale = {
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
  fileInput: {
    metricUnits: ['Кб', 'Мб', 'Гб'],
  },
  groupActionsPane: {
    inputPlaceholder: 'Искать в таблице',
  },
  hint: {
    closeButtonAriaLabel: 'Закрыть подсказку',
  },
  imageViewer: {
    flipHorizontallyText: 'Отразить по горизонтали',
    flipVerticallyText: 'Отразить по вертикали',
    rotateLeftText: 'Повернуть влево',
    rotateRightText: 'Повернуть вправо',
    zoomOutText: 'Уменьшить',
    zoomInText: 'Увеличить',
    backwardText: 'Назад',
    forwardText: 'Вперед',
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
  textArea: {
    copyTextMessage: 'Копировать текст',
    copiedMessage: 'Скопировано',
  },
};

const enLocale: Locale = {
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
  fileInput: {
    metricUnits: ['Kb', 'Mb', 'Gb'],
  },
  groupActionsPane: {
    inputPlaceholder: 'Search in table',
  },
  hint: {
    closeButtonAriaLabel: 'Close the hint',
  },
  imageViewer: {
    flipHorizontallyText: 'Flip horizontally',
    flipVerticallyText: 'Flip vertically',
    rotateLeftText: 'Rotate left',
    rotateRightText: 'Rotate right',
    zoomInText: 'Zoom in',
    zoomOutText: 'Zoom out',
    backwardText: 'Back',
    forwardText: 'Forward',
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
  textArea: {
    copyTextMessage: 'Copy text',
    copiedMessage: 'Copied',
  },
};

export const locales: { [localeCode: string]: Locale } = {
  ru: ruLocale,
  en: enLocale,
  'en-US': { ...enLocale, firstDayOfWeek: 0 },
};
