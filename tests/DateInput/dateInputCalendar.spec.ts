import { test, expect } from '@playwright/test';
import { getStorybookFrameLocator, clickAndWait } from '../utils';

test.describe('DateInput Calendar', () => {
  test('preserves year when calendar is reopened with previously selected date', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-input-dateinput--date-input-playground');
    const frame = getStorybookFrameLocator(page);

    // Находим инпут и кнопку календаря
    const dateInput = frame.locator('.text-input-native-input');
    const calendarButton = frame.locator('[data-icon-name="CalendarOutline"]').locator('..');

    // Шаг 1: Открываем календарь
    await clickAndWait(calendarButton, page);

    // Проверяем, что календарь открылся
    const calendar = frame.locator('.ui-kit-calendar-panel-component');
    await expect(calendar).toBeVisible();

    // Шаг 2: Кликаем на заголовок года, чтобы открыть выбор года
    const yearButton = calendar.locator('[data-testid="year-button"]').or(calendar.locator('h3').nth(1));
    await clickAndWait(yearButton, page);

    // Шаг 3: Выбираем год 2023 (предыдущий год)
    const year2023 = frame.locator('text=2023').first();
    await clickAndWait(year2023, page);

    // Проверяем, что год 2023 выбран в заголовке
    await expect(calendar.locator('text=2023').first()).toBeVisible();

    // Шаг 4: Выбираем месяц (например, ноябрь)
    const monthButton = calendar.locator('[data-testid="month-button"]').or(calendar.locator('h3').first());
    await clickAndWait(monthButton, page);

    const novemberMonth = frame.locator('text=ноябрь').first();
    await clickAndWait(novemberMonth, page);

    // Шаг 5: Выбираем день 15
    const day15 = frame.locator('[data-date]').filter({ hasText: '15' }).first();
    await clickAndWait(day15, page, 200);

    // Проверяем, что значение установлено в инпут
    await expect(dateInput).toHaveValue('15.11.2023');

    // Календарь должен закрыться автоматически
    await page.waitForTimeout(500);

    // Шаг 6: Открываем календарь снова
    await clickAndWait(calendarButton, page);

    // Шаг 7: Проверяем, что календарь открылся с правильным годом (2023, а не текущим)
    await expect(calendar).toBeVisible();
    const yearInPanel = calendar.locator('h3').nth(1);
    await expect(yearInPanel).toHaveText('2023');

    // Дополнительно проверяем, что месяц также сохранился
    const monthInPanel = calendar.locator('h3').first();
    await expect(monthInPanel).toContainText('ноябрь');
  });

  test('preserves year when date is typed manually and calendar is reopened', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-input-dateinput--date-input-playground');
    const frame = getStorybookFrameLocator(page);

    const dateInput = frame.locator('.text-input-native-input');
    const calendarButton = frame.locator('[data-icon-name="CalendarOutline"]').locator('..');

    // Шаг 1: Вводим дату вручную (например, 20.03.2022)
    await dateInput.click();
    await dateInput.fill('20.03.2022');
    await page.keyboard.press('Enter');

    // Проверяем, что значение установлено
    await expect(dateInput).toHaveValue('20.03.2022');

    // Шаг 2: Открываем календарь
    await clickAndWait(calendarButton, page);

    // Шаг 3: Проверяем, что календарь открылся с правильным годом (2022)
    const calendar = frame.locator('.ui-kit-calendar-panel-component');
    await expect(calendar).toBeVisible();

    const yearInPanel = calendar.locator('h3').nth(1);
    await expect(yearInPanel).toHaveText('2022');

    // Проверяем месяц (март)
    const monthInPanel = calendar.locator('h3').first();
    await expect(monthInPanel).toContainText('март');

    // Закрываем календарь
    await page.keyboard.press('Escape');
    await page.waitForTimeout(300);

    // Шаг 4: Открываем календарь снова
    await clickAndWait(calendarButton, page);

    // Шаг 5: Проверяем, что год все еще 2022
    await expect(calendar).toBeVisible();
    await expect(yearInPanel).toHaveText('2022');
    await expect(monthInPanel).toContainText('март');
  });

  test('preserves year for future dates when calendar is reopened', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-input-dateinput--date-input-playground');
    const frame = getStorybookFrameLocator(page);

    const dateInput = frame.locator('.text-input-native-input');
    const calendarButton = frame.locator('[data-icon-name="CalendarOutline"]').locator('..');

    // Вводим дату из будущего (например, 01.06.2027)
    await dateInput.click();
    await dateInput.fill('01.06.2027');
    await page.keyboard.press('Enter');

    await expect(dateInput).toHaveValue('01.06.2027');

    // Открываем календарь
    await clickAndWait(calendarButton, page);

    const calendar = frame.locator('.ui-kit-calendar-panel-component');
    await expect(calendar).toBeVisible();

    // Проверяем год
    const yearInPanel = calendar.locator('h3').nth(1);
    await expect(yearInPanel).toHaveText('2027');

    // Проверяем месяц
    const monthInPanel = calendar.locator('h3').first();
    await expect(monthInPanel).toContainText('июнь');
  });

  test('preserves year when switching between dates with different years', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-input-dateinput--date-input-playground');
    const frame = getStorybookFrameLocator(page);

    const dateInput = frame.locator('.text-input-native-input');
    const calendarButton = frame.locator('[data-icon-name="CalendarOutline"]').locator('..');
    const calendar = frame.locator('.ui-kit-calendar-panel-component');

    // Устанавливаем первую дату (2020)
    await dateInput.click();
    await dateInput.fill('10.05.2020');
    await page.keyboard.press('Enter');

    // Открываем календарь и проверяем год
    await clickAndWait(calendarButton, page);
    await expect(calendar).toBeVisible();
    let yearInPanel = calendar.locator('h3').nth(1);
    await expect(yearInPanel).toHaveText('2020');
    await page.keyboard.press('Escape');
    await page.waitForTimeout(300);

    // Меняем дату на другой год (2024)
    await dateInput.click();
    await dateInput.fill('25.12.2024');
    await page.keyboard.press('Enter');

    // Открываем календарь и проверяем, что год обновился на 2024
    await clickAndWait(calendarButton, page);
    await expect(calendar).toBeVisible();
    yearInPanel = calendar.locator('h3').nth(1);
    await expect(yearInPanel).toHaveText('2024');

    // Проверяем месяц
    const monthInPanel = calendar.locator('h3').first();
    await expect(monthInPanel).toContainText('декабрь');
  });
});
