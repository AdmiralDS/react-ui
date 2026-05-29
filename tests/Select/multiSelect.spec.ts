import { test, expect } from '@playwright/test';
import { getStorybookFrameLocator } from '../utils';
import type { Locator } from '@playwright/test';

// Вспомогательная функция для получения состояний чекбоксов
const getCheckboxStates = async (checkboxes: Locator) => {
  return await checkboxes.evaluateAll((checkboxes) =>
    (checkboxes as Array<HTMLInputElement>).map((cb: HTMLInputElement) => cb.checked),
  );
};

const getSelectedNativeOptions = async (options: Locator) => {
  return await options.evaluateAll((options) =>
    Array.from(options as Array<HTMLOptionElement>)
      .map((option: HTMLOptionElement) => (option.selected ? option.value : undefined))
      .filter((item) => item),
  );
};

/**
 * Тест проверяет выбор нескольких значений в мультиселекте с помощью кликов мыши
 *
 * @description
 * Логика теста:
 * 1. Открывает страницу с компонентом мультиселекта (SearchSelect в режиме multiple)
 * 2. Находит контейнер выбранных значений (.selectValueWrapper) и проверяет его наличие
 * 3. Открывает выпадающий список через нажатие Tab + Enter
 * 4. Дожидается появления контейнера дропдауна и опций выбора
 * 5. Проверяет начальное состояние: все чекбоксы должны быть не отмечены
 * 6. Кликает по опциям с индексами 0, 1 и 3 для их выбора
 * 7. Проверяет, что чекбоксы выбранных опций стали отмеченными, остальные - нет
 * 8. Проверяет отображение выбранного текста в valueWrapper
 * 9. Проверяет, что дропдаун остался открытым после выбора (мультиселект не закрывается)
 * 10. Снимает выделение с опции индекс 1 повторным кликом
 * 11. Проверяет, что чекбоксы опций 0 и 3 остались отмеченными, а опция 1 - снята
 *
 * @expectations
 * - Все чекбоксы изначально не отмечены
 * - После клика по опциям 0, 1, 3 они становятся отмеченными
 * - Выбранный текст отображается в valueWrapper
 * - Дропдаун остается открытым после выбора
 * - Повторный клик по выбранной опции снимает выделение
 */
test('selects multiselect value onClick', async ({ page }) => {
  // Setup
  await page.goto(`/?path=/story/admiral-2-1-input-select-режим-searchselect--multiple-with-add-option`);
  const frame = getStorybookFrameLocator(page);

  // Локаторы
  const valueWrapper = frame.locator('.selectValueWrapper').first();

  await expect(valueWrapper).toBeAttached({ timeout: 5000 });

  // Открываем дропдаун
  await valueWrapper.press('Tab');
  await valueWrapper.press('Enter');

  // Получаем опции
  const dropDownContainer = frame.locator('.dropdown-container').first();
  await expect(dropDownContainer).toBeVisible({ timeout: 5000 });

  const options = dropDownContainer.locator('[data-testid="option"]');
  const checkboxes = options.locator('input[type="checkbox"]');

  // Проверка начального состояния
  const initialStates = await getCheckboxStates(checkboxes);
  expect(initialStates.every((state) => state === false)).toBeTruthy();

  // Кликаем по опциям
  await options.nth(0).click();
  await options.nth(1).click();
  await options.nth(3).click();

  // Проверка после кликов
  const afterStates = await getCheckboxStates(checkboxes);

  afterStates.forEach((state, index) => {
    expect(state).toBe([0, 1, 3].includes(index) ? true : false);
  });

  // Проверка UI
  const text = await options.nth(0).textContent();
  await expect(valueWrapper.locator(`text="${text}"`)).toBeVisible();
  await expect(dropDownContainer).toBeVisible();

  // Проверяем uncheck
  await options.nth(1).click();

  const states = await getCheckboxStates(checkboxes);
  states.forEach((state, index) => {
    expect(state).toBe([0, 3].includes(index) ? true : false);
  });
});

/**
 * Тест проверяет выбор нескольких значений в мультиселекте с помощью клавиатурных стрелок
 *
 * @description
 * Логика теста:
 * 1. Открывает страницу с компонентом мультиселекта
 * 2. Находит контейнер выбранных значений (.selectValueWrapper)
 * 3. Открывает выпадающий список через нажатие Space (пробел)
 * 4. Дожидается появления дропдауна и опций выбора
 * 5. Выбирает второй элемент (индекс 1) через навигацию клавишами:
 *    - Стрелка вниз для перехода к опции
 *    - Enter для выбора
 * 6. Проверяет, что только опция с индексом 1 стала отмеченной
 * 7. Проверяет, что текст выбранной опции отображается в valueWrapper
 * 8. Меняет выделение через комбинацию клавиш:
 *    - Enter - снимает выделение со второго элемента
 *    - Стрелка вниз - переходит к третьему элементу
 *    - Enter - выбирает третий элемент
 *    - Стрелка вниз - переходит к пятому элементу
 *    - Enter - выбирает пятому элемент
 * 9. Проверяет финальное состояние: отмечены опции с индексами 3 и 5 (третий и пятый элементы)
 *
 * @notes
 * - Индексы 3 и 5 могут варьироваться в зависимости от данных компонента
 * - Тест проверяет навигацию с клавиатуры, что важно для accessibility
 * - В мультиселекте Enter на выбранном элементе снимает выделение
 * - Стрелки навигации работают по всем опциям в дропдауне
 *
 * @expectations
 * - Навигация стрелками корректно перемещает фокус между опциями
 * - Enter выбирает/снимает выделение текущей опции
 * - После всех действий отмечены только указанные опции
 * - Выбранные значения отображаются в valueWrapper
 */
test('selects multiselect value with arrows', async ({ page }) => {
  await page.goto(`/?path=/story/admiral-2-1-input-select-режим-searchselect--multiple-with-add-option`);
  const frame = getStorybookFrameLocator(page);

  const valueWrapper = frame.locator('.selectValueWrapper').first();
  await valueWrapper.waitFor({ state: 'attached' });

  // Открываем дропдаун
  await valueWrapper.press('Space');

  const dropDownContainer = frame.locator('.dropdown-container').first();
  await dropDownContainer.waitFor({ state: 'visible' });

  const options = dropDownContainer.locator('[data-testid="option"]');
  const checkboxes = options.locator('input[type="checkbox"]');

  // Выбираем второй элемент
  await valueWrapper.press('ArrowDown');
  await valueWrapper.press('Enter');

  // Проверяем
  let states = await getCheckboxStates(checkboxes);
  states.forEach((state, index) => {
    expect(state).toBe(index === 1 ? true : false);
  });
  const text = (await options.nth(1).textContent()) || '';
  await expect(valueWrapper).toContainText(text);

  // Меняем выделение
  await valueWrapper.press('Enter'); // снимаем второй
  await valueWrapper.press('ArrowDown'); // на третий
  await valueWrapper.press('Enter'); // выбираем третий
  await valueWrapper.press('ArrowDown'); // на пятый
  await valueWrapper.press('Enter'); // выбираем пятый

  // Финальная проверка
  states = await getCheckboxStates(checkboxes);
  states.forEach((state, index) => {
    expect(state).toBe([3, 5].includes(index) ? true : false);
  });
});

/**
 * Тест проверяет удаление выбранного значения мультиселекта через клик по кнопке закрытия на чипе
 *
 * @description
 * Логика теста:
 * 1. Открывает страницу с компонентом мультиселекта
 * 2. Находит контейнер выбранных значений и проверяет его наличие
 * 3. Открывает выпадающий список через нажатие Tab + Enter
 * 4. Дожидается появления дропдауна и опций выбора
 * 5. Выбирает три опции: с индексами 0, 1 и 3 (через клики)
 * 6. Закрывает дропдаун нажатием Escape
 * 7. Находит нативный select (скрытый) и его опции для проверки состояния
 * 8. Проверяет начальное состояние: в нативном select выбраны значения 'big', '0', '2'
 *    (соответствуют выбранным опциям)
 * 9. Находит кнопку закрытия на первом чипе (элемент .chip .close-button)
 * 10. Кликает по кнопке закрытия для удаления первого выбранного значения
 * 11. Ждет небольшую паузу для обновления UI (100ms)
 * 12. Проверяет конечное состояние: в нативном select остались выбраны значения '0', '2'
 *     (первое значение 'big' успешно удалено)
 *
 * @notes
 * - Тест работает со скрытым нативным select, который синхронизируется с кастомным UI
 * - Чипы отображают выбранные значения, у каждого есть кнопка закрытия
 * - После выбора опций дропдаун можно закрыть Escape для проверки чипов
 * - В тесте используются конкретные значения 'big', '0', '2' из данных компонента
 * - Пауза в 100ms необходима для завершения асинхронных обновлений UI
 *
 * @expectations
 * - После выбора опций нативный select содержит выбранные значения
 * - Кнопка закрытия на чипе существует и доступна для клика
 * - После клика по кнопке закрытия соответствующее значение удаляется из выбранных
 * - Нативный select отражает актуальное состояние после удаления
 * - Другие выбранные значения остаются неизменными
 */
test('deletes multiselect value onChipClick', async ({ page }) => {
  await page.goto(`/?path=/story/admiral-2-1-input-select-режим-searchselect--multiple-with-add-option`);
  const storybookFrame = getStorybookFrameLocator(page);

  const valueWrapper = storybookFrame.locator('.selectValueWrapper').first();
  await expect(valueWrapper).toBeAttached({ timeout: 5000 });

  // Открываем дропдаун
  await valueWrapper.press('Tab');
  await valueWrapper.press('Enter');

  // Получаем опции
  const dropDownContainer = storybookFrame.locator('.dropdown-container').first();
  await expect(dropDownContainer).toBeVisible({ timeout: 5000 });

  const options = dropDownContainer.locator('[data-testid="option"]');

  // Кликаем по опциям
  await options.nth(0).click();
  await options.nth(1).click();
  await options.nth(3).click();

  await valueWrapper.press('Escape');

  // Диагностика: ищем все select на странице
  const nativeSelect = storybookFrame.locator('select').first();
  const nativeOptions = nativeSelect.locator('option');

  // Проверка начального состояния
  const initialSelected = await getSelectedNativeOptions(nativeOptions);
  expect(initialSelected).toEqual(['big', '0', '2']); // big, 0, 2 выбраны

  // Находим кнопку закрытия (если у нее есть testid)
  const closeButton = valueWrapper.locator('.chip .close-button').first();
  await closeButton.click();

  // Ждем обновления
  await page.waitForTimeout(100);

  // Проверка конечного состояния
  const finalSelected = await getSelectedNativeOptions(nativeOptions);
  expect(finalSelected).toEqual(['0', '2']); // только two выбран
});

/**
 * Тест проверяет, что disabled опции не удаляются при многократном нажатии Backspace
 *
 * @description
 * Расширенная версия теста:
 * 1. Инициализация с несколькими enabled и одной disabled опцией
 * 2. Проверка, что Backspace удаляет только enabled опции
 * 3. После удаления всех enabled опций, disabled остается
 * 4. Повторные нажатия Backspace не удаляют disabled опцию
 */
test('should not delete disabled options on multiple Backspace presses', async ({ page }) => {
  await page.goto(`/?path=/story/admiral-2-1-input-select-режим-searchselect--multiple-with-apply`);
  const storybookFrame = getStorybookFrameLocator(page);

  const valueWrapper = storybookFrame.locator('.selectValueWrapper').first();
  const inputElem = valueWrapper.locator('input');
  const nativeSelect = storybookFrame.locator('select').first();
  const nativeOptions = nativeSelect.locator('option');

  await expect(valueWrapper).toBeAttached({ timeout: 5000 });

  // Открываем дропдаун
  await valueWrapper.press('Tab');
  await valueWrapper.press('Enter');

  // Получаем опции
  const dropDownContainer = storybookFrame.locator('.dropdown-container').first();
  await expect(dropDownContainer).toBeVisible({ timeout: 5000 });

  const options = dropDownContainer.locator('[data-testid="option"]');
  await options.nth(1).click();

  // Получаем начальные выбранные значения
  const getSelectedValues = async () => {
    return await nativeOptions.evaluateAll((opts) =>
      Array.from(opts as Array<HTMLOptionElement>)
        .filter((opt: HTMLOptionElement) => opt.selected)
        .map((opt: HTMLOptionElement) => opt.value),
    );
  };

  let selectedValues = await getSelectedValues();
  expect(selectedValues).toContain('big');
  expect(selectedValues).toContain('1');
  expect(selectedValues).toContain('3');
  expect(selectedValues).toContain('0');

  // Проверяем, что 'two' disabled
  const disabledOptions = await nativeOptions.evaluateAll((opts) =>
    Array.from(opts as Array<HTMLOptionElement>).reduce((acc: Record<string, boolean>, opt: HTMLOptionElement) => {
      acc[opt.value] = opt.disabled;
      return acc;
    }, {}),
  );

  const isBigDisabled = disabledOptions['big'];
  expect(isBigDisabled).toBe(true);
  const isOneDisabled = disabledOptions['1'];
  expect(isOneDisabled).toBe(true);
  const isThreeDisabled = disabledOptions['3'];
  expect(isThreeDisabled).toBe(true);

  // Первое Backspace - удаляем '0'
  await inputElem.press('Backspace');
  await page.waitForTimeout(100);

  selectedValues = await getSelectedValues();
  expect(selectedValues).not.toContain('0');
  expect(selectedValues).toContain('3');

  // Второе Backspace - пытаемся удалить disabled '3'
  await inputElem.press('Backspace');
  await page.waitForTimeout(100);

  selectedValues = await getSelectedValues();
  expect(selectedValues).toContain('3'); // disabled опция должна остаться
  expect(selectedValues).toHaveLength(3);

  // Третье Backspace - ничего не меняется
  await inputElem.press('Backspace');
  await page.waitForTimeout(100);

  selectedValues = await getSelectedValues();
  expect(selectedValues).toContain('3');
  expect(selectedValues).toHaveLength(3);

  // Проверка UI: чип 'two' все еще отображается
  await expect(valueWrapper.locator('.chip', { hasText: '10000' })).toBeVisible();
  await expect(valueWrapper.locator('.chip', { hasText: '30000' })).toBeVisible();
  await expect(valueWrapper.locator('.chip', { hasText: '00000' })).not.toBeVisible();
});
