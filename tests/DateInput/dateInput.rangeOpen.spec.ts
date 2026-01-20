import { test, expect } from '@playwright/test';
import { getStorybookFrameLocator } from '../utils';

const RU_MONTHS = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];

test('date-range calendar opens on selected month and year', async ({ page }) => {
  await page.goto('/?path=/story/admiral-2-1-input-dateinput--date-input-playground&args=type:date-range');
  const frame = getStorybookFrameLocator(page);
  const dateRangeInput = frame.locator('.text-input-native-input');
  const calendarIcon = frame.locator('svg').first();

  await dateRangeInput.fill('16.04.2024 - 23.04.2024');
  await calendarIcon.click();

  const panel = frame.locator('.ui-kit-calendar-panel-component');
  await expect(panel).toBeVisible();
  await expect(panel.locator('h6').first()).toHaveText('Апрель');
  await expect(panel.locator('h6').nth(1)).toHaveText('2024');
});

test('date-range calendar opens on end date when start date is empty', async ({ page }) => {
  await page.goto('/?path=/story/admiral-2-1-input-dateinput--date-input-playground&args=type:date-range');
  const frame = getStorybookFrameLocator(page);
  const dateRangeInput = frame.locator('.text-input-native-input');
  const calendarIcon = frame.locator('svg').first();

  await dateRangeInput.fill('__.__.____ - 23.04.2024');
  await calendarIcon.click();

  const panel = frame.locator('.ui-kit-calendar-panel-component');
  await expect(panel).toBeVisible();
  await expect(panel.locator('h6').first()).toHaveText('Апрель');
  await expect(panel.locator('h6').nth(1)).toHaveText('2024');
});

test('date-range calendar respects controlled viewDate', async ({ page }) => {
  await page.goto('/?path=/story/admiral-2-1-input-dateinput--date-input-with-button-today&args=type:date-range');
  const frame = getStorybookFrameLocator(page);
  const dateRangeInput = frame.locator('.text-input-native-input');
  const calendarIcon = frame.locator('svg').first();
  const panel = frame.locator('.ui-kit-calendar-panel-component');

  await calendarIcon.click();
  await expect(panel).toBeVisible();
  await frame.locator('text=Сегодня').click();
  await frame.locator('body').click({ position: { x: 1, y: 1 } });
  await expect(panel).toBeHidden();
  await calendarIcon.click();

  await dateRangeInput.fill('16.04.2024 - 23.04.2024');
  await frame.locator('body').click({ position: { x: 1, y: 1 } });
  await expect(panel).toBeHidden();
  await calendarIcon.click();

  const today = new Date();
  const expectedMonth = RU_MONTHS[today.getMonth()];
  const expectedYear = String(today.getFullYear());

  await expect(panel).toBeVisible();
  await expect(panel.locator('h6').first()).toHaveText(expectedMonth);
  await expect(panel.locator('h6').nth(1)).toHaveText(expectedYear);
});
