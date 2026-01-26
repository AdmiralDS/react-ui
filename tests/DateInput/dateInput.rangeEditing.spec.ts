import { test, expect } from '@playwright/test';
import {
  getStorybookFrameLocator,
  clickAndWait,
  getVisibleDayIndices,
  parseRuInputDate,
  getCalendarNavigationButtons,
  getCalendarPanelDate,
  isValidDateRangeFormat,
} from '../utils';

test.describe('DateInput - date-range editing and viewDate behavior', () => {
  test('after selecting start date dropdown stays open; month navigation still works', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-input-dateinput--date-input-range');
    const frame = getStorybookFrameLocator(page);

    const iconButton = frame.locator('[data-role="icon-pane-after"] svg').last();
    const dropdown = frame.locator('.dropContainerClass');
    await clickAndWait(iconButton, page);
    await expect(dropdown).toBeVisible();

    const panel = frame.locator('.ui-kit-calendar-panel-component');
    const { month: monthBefore } = await getCalendarPanelDate(panel);

    const days = frame.locator('.ui-kit-calendar-day-component');
    const dayIndices = await days.evaluateAll(getVisibleDayIndices);
    if (dayIndices.length < 2) throw new Error('Not enough clickable calendar days found');

    await days.nth(dayIndices[0]).click();
    await expect(dropdown).toBeVisible();

    // Navigate to next month and ensure dropdown remains open (guards against premature close bugs)
    const { next } = getCalendarNavigationButtons(panel);
    await next.click();
    await expect(dropdown).toBeVisible();

    const { month: monthAfter } = await getCalendarPanelDate(panel);
    expect(monthAfter).not.toEqual(monthBefore);
  });

  test('can pick end date in a different month (range closes only after end is chosen)', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-input-dateinput--date-input-range');
    const frame = getStorybookFrameLocator(page);

    const input = frame.locator('.text-input-native-input');
    const iconButton = frame.locator('[data-role="icon-pane-after"] svg').last();
    const dropdown = frame.locator('.dropContainerClass');
    const panel = frame.locator('.ui-kit-calendar-panel-component');

    await clickAndWait(iconButton, page);
    await expect(dropdown).toBeVisible();

    const days = frame.locator('.ui-kit-calendar-day-component');
    const dayIndices = await days.evaluateAll(getVisibleDayIndices);
    if (dayIndices.length < 2) throw new Error('Not enough clickable calendar days found');

    await days.nth(dayIndices[0]).click();
    await expect(dropdown).toBeVisible();

    const { next } = getCalendarNavigationButtons(panel);
    await next.click(); // next month
    await expect(dropdown).toBeVisible();

    const nextMonthDayIndices = await days.evaluateAll(getVisibleDayIndices);
    if (nextMonthDayIndices.length < 1) throw new Error('No clickable calendar days found in next month');

    await days.nth(nextMonthDayIndices[nextMonthDayIndices.length - 1]).click();
    await expect(dropdown).toBeHidden();

    const value = await input.inputValue();
    expect(isValidDateRangeFormat(value)).toBe(true);

    const [startStr, endStr] = value.split(' - ');
    const start = parseRuInputDate(startStr);
    const end = parseRuInputDate(endStr);
    expect(end.getTime()).toBeGreaterThan(start.getTime());
  });

  test('typing partial range keeps dropdown open when trying to close while end date is missing', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-input-dateinput--date-input-range');
    const frame = getStorybookFrameLocator(page);

    const input = frame.locator('.text-input-native-input');
    const iconButton = frame.locator('[data-role="icon-pane-after"] svg').last();
    const dropdown = frame.locator('.dropContainerClass');

    await input.fill('16.04.2024 - __.__.____');
    await clickAndWait(iconButton, page);
    await expect(dropdown).toBeVisible();

    // Проверяем, что после выбора endDate календарь корректно закрывается (частичный диапазон из ввода не ломает поведение)
    const days = frame.locator('.ui-kit-calendar-day-component');
    const dayIndices = await days.evaluateAll(getVisibleDayIndices);
    if (dayIndices.length < 2) throw new Error('Not enough clickable calendar days found');

    await days.nth(dayIndices[1]).click();
    await expect(dropdown).toBeHidden();
  });

  test('reopen opens on start date month/year after full range is typed', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-input-dateinput--date-input-playground&args=type:date-range');
    const frame = getStorybookFrameLocator(page);

    const input = frame.locator('.text-input-native-input');
    const iconButton = frame.locator('[data-role="icon-pane-after"] svg').last();
    const panel = frame.locator('.ui-kit-calendar-panel-component');

    await input.fill('16.04.2024 - 23.04.2024');
    await clickAndWait(iconButton, page);
    await expect(panel).toBeVisible();
    await expect(panel.locator('h6').first()).toHaveText('Апрель');
    await expect(panel.locator('h6').nth(1)).toHaveText('2024');
  });
});
