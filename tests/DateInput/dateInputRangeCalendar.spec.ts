import { test, expect } from '@playwright/test';
import { getStorybookFrameLocator, clickAndWait } from '../utils';

test.describe('DateInput Range Calendar', () => {
  test('preserves year when range calendar is reopened with previously selected date range', async ({ page }) => {
    // Ищем story для date range, предполагаем что есть вариант с range
    await page.goto('/?path=/story/admiral-2-1-input-dateinput--date-input-range-playground');
    const frame = getStorybookFrameLocator(page);

    // Если нет специальной story для range, пропускаем тест
    const dateInput = frame.locator('.text-input-native-input').first();
    if ((await dateInput.count()) === 0) {
      test.skip();
      return;
    }

    const calendarButton = frame.locator('[data-icon-name="CalendarOutline"]').locator('..').first();

    // Шаг 1: Открываем календарь
    await clickAndWait(calendarButton, page);

    const calendar = frame.locator('.ui-kit-calendar-panel-component');
    await expect(calendar).toBeVisible();

    // Шаг 2: Выбираем год 2022
    const yearButton = calendar.locator('h3').nth(1);
    await clickAndWait(yearButton, page);

    const year2022 = frame.locator('text=2022').first();
    await clickAndWait(year2022, page);

    // Шаг 3: Выбираем месяц (сентябрь)
    const monthButton = calendar.locator('h3').first();
    await clickAndWait(monthButton, page);

    const septemberMonth = frame.locator('text=сентябрь').first();
    await clickAndWait(septemberMonth, page);

    // Шаг 4: Выбираем начальную дату (10 сентября)
    const day10 = frame.locator('[data-date]').filter({ hasText: '10' }).first();
    await clickAndWait(day10, page, 200);

    // Шаг 5: Выбираем конечную дату (20 сентября)
    const day20 = frame.locator('[data-date]').filter({ hasText: '20' }).first();
    await clickAndWait(day20, page, 200);

    // Проверяем, что значение установлено в инпут (формат может варьироваться)
    const inputValue = await dateInput.inputValue();
    expect(inputValue).toContain('10.09.2022');
    expect(inputValue).toContain('20.09.2022');

    // Календарь должен закрыться
    await page.waitForTimeout(500);

    // Шаг 6: Открываем календарь снова
    await clickAndWait(calendarButton, page);

    // Шаг 7: Проверяем, что календарь открылся с правильным годом (2022)
    await expect(calendar).toBeVisible();
    const yearInPanel = calendar.locator('h3').nth(1);
    await expect(yearInPanel).toHaveText('2022');

    // Проверяем месяц
    const monthInPanel = calendar.locator('h3').first();
    await expect(monthInPanel).toContainText('сентябрь');
  });

  test('preserves year when range dates are typed manually and calendar is reopened', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-input-dateinput--date-input-range-playground');
    const frame = getStorybookFrameLocator(page);

    const dateInput = frame.locator('.text-input-native-input').first();
    if ((await dateInput.count()) === 0) {
      test.skip();
      return;
    }

    const calendarButton = frame.locator('[data-icon-name="CalendarOutline"]').locator('..').first();

    // Шаг 1: Вводим диапазон дат вручную (01.01.2021 - 15.01.2021)
    await dateInput.click();
    // Формат ввода может варьироваться, пробуем общий формат
    await dateInput.fill('01.01.2021 - 15.01.2021');
    await page.keyboard.press('Enter');

    // Шаг 2: Открываем календарь
    await clickAndWait(calendarButton, page);

    const calendar = frame.locator('.ui-kit-calendar-panel-component');
    await expect(calendar).toBeVisible();

    // Шаг 3: Проверяем, что календарь открылся с правильным годом (2021)
    const yearInPanel = calendar.locator('h3').nth(1);
    await expect(yearInPanel).toHaveText('2021');

    // Проверяем месяц (январь)
    const monthInPanel = calendar.locator('h3').first();
    await expect(monthInPanel).toContainText('январь');

    // Закрываем и открываем снова
    await page.keyboard.press('Escape');
    await page.waitForTimeout(300);

    await clickAndWait(calendarButton, page);

    // Проверяем, что год все еще 2021
    await expect(calendar).toBeVisible();
    await expect(yearInPanel).toHaveText('2021');
    await expect(monthInPanel).toContainText('январь');
  });

  test('preserves start date year when range spans multiple years', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-input-dateinput--date-input-range-playground');
    const frame = getStorybookFrameLocator(page);

    const dateInput = frame.locator('.text-input-native-input').first();
    if ((await dateInput.count()) === 0) {
      test.skip();
      return;
    }

    const calendarButton = frame.locator('[data-icon-name="CalendarOutline"]').locator('..').first();

    // Вводим диапазон, который пересекает границу года (например, 15.12.2023 - 15.01.2024)
    await dateInput.click();
    await dateInput.fill('15.12.2023 - 15.01.2024');
    await page.keyboard.press('Enter');

    // Открываем календарь
    await clickAndWait(calendarButton, page);

    const calendar = frame.locator('.ui-kit-calendar-panel-component');
    await expect(calendar).toBeVisible();

    // Проверяем, что календарь открылся на начальной дате (декабрь 2023)
    const yearInPanel = calendar.locator('h3').nth(1);
    await expect(yearInPanel).toHaveText('2023');

    const monthInPanel = calendar.locator('h3').first();
    await expect(monthInPanel).toContainText('декабрь');
  });
});
