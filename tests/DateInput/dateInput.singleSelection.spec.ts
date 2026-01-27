import { test, expect } from '@playwright/test';
import {
  getStorybookFrameLocator,
  clickAndWait,
  getVisibleDayIndices,
  isValidDateFormat,
  getCalendarNavigationButtons,
  getCalendarPanelDate,
} from '../utils';

test.describe('DateInput - single date', () => {
  test('selecting a day closes dropdown and writes value to input', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-input-dateinput--date-input-playground');
    const frame = getStorybookFrameLocator(page);

    const input = frame.locator('.text-input-native-input');
    const iconButton = frame.locator('[data-role="icon-pane-after"] svg').last();
    const dropdown = frame.locator('.dropContainerClass');

    await clickAndWait(iconButton, page);
    await expect(dropdown).toBeVisible();

    const days = frame.locator('.ui-kit-calendar-day-component');
    const dayIndices = await days.evaluateAll(getVisibleDayIndices);
    if (dayIndices.length < 1) throw new Error('No clickable calendar days found');

    await days.nth(dayIndices[0]).click();
    await expect(dropdown).toBeHidden();

    const value = await input.inputValue();
    expect(isValidDateFormat(value)).toBe(true);
  });

  test('navigation via next/prev month buttons does not close dropdown', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-input-dateinput--date-input-playground');
    const frame = getStorybookFrameLocator(page);

    const iconButton = frame.locator('[data-role="icon-pane-after"] svg').last();
    const dropdown = frame.locator('.dropContainerClass');
    await clickAndWait(iconButton, page);
    await expect(dropdown).toBeVisible();

    const panel = frame.locator('.ui-kit-calendar-panel-component');
    const { month: monthBefore } = await getCalendarPanelDate(panel);

    const { next, prev } = getCalendarNavigationButtons(panel);
    await next.click();
    await expect(dropdown).toBeVisible();

    const { month: monthAfter } = await getCalendarPanelDate(panel);
    expect(monthAfter).not.toEqual(monthBefore);

    await prev.click();
    await expect(dropdown).toBeVisible();
  });
});
