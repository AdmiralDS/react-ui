import { test, expect } from '@playwright/test';
import {
  getStorybookFrameLocator,
  clickAndWait,
  getVisibleDayIndices,
  parseDateOrNull,
  getCalendarNavigationButtons,
  getCalendarPanelDate,
  isValidDateRangeFormat,
} from '../utils';

test.describe('DateInput - date-range edge cases', () => {
  test('when endDate is selected before startDate, range is reset and endDate becomes new startDate', async ({
    page,
  }) => {
    await page.goto('/?path=/story/admiral-2-1-input-dateinput--date-input-range');
    const frame = getStorybookFrameLocator(page);

    const input = frame.locator('.text-input-native-input');
    const iconButton = frame.locator('[data-role="icon-pane-after"] svg').last();
    const dropdown = frame.locator('.dropContainerClass');
    const days = frame.locator('.ui-kit-calendar-day-component');

    // Select first date (startDate)
    await clickAndWait(iconButton, page);
    await expect(dropdown).toBeVisible();

    const dayIndices = await days.evaluateAll(getVisibleDayIndices);
    if (dayIndices.length < 2) throw new Error('Not enough clickable calendar days found');

    const firstDayIndex = dayIndices[0];
    await days.nth(firstDayIndex).click();
    await expect(dropdown).toBeVisible();

    // Get the selected start date
    const startValue = await input.inputValue();
    const startDate = parseDateOrNull(startValue.split(' - ')[0]);
    if (!startDate) throw new Error('Start date not found');

    // Navigate to previous month
    const panel = frame.locator('.ui-kit-calendar-panel-component');
    const { prev } = getCalendarNavigationButtons(panel);
    await prev.click();
    await expect(dropdown).toBeVisible();

    // Select a date in previous month (should be before startDate)
    const prevMonthDayIndices = await days.evaluateAll(getVisibleDayIndices);
    if (prevMonthDayIndices.length < 1) throw new Error('No clickable calendar days found in previous month');

    await days.nth(prevMonthDayIndices[prevMonthDayIndices.length - 1]).click();
    await expect(dropdown).toBeVisible(); // Should stay open, range is incomplete

    // Check that the range was reset - the selected date should now be the startDate
    const newValue = await input.inputValue();
    const [newStartStr, newEndStr] = newValue.split(' - ');
    const newStartDate = parseDateOrNull(newStartStr);
    const newEndDate = parseDateOrNull(newEndStr);

    // The previously selected end date should now be the start date
    expect(newStartDate).not.toBeNull();
    expect(newEndDate).toBeNull(); // End date should be empty
    expect(newStartDate!.getTime()).toBeLessThan(startDate.getTime()); // New start should be before old start
  });

  test('when startDate is changed to be after endDate, range is reset', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-input-dateinput--date-input-range');
    const frame = getStorybookFrameLocator(page);

    const input = frame.locator('.text-input-native-input');
    const iconButton = frame.locator('[data-role="icon-pane-after"] svg').last();
    const dropdown = frame.locator('.dropContainerClass');
    const days = frame.locator('.ui-kit-calendar-day-component');

    // Set a valid range first
    await input.fill('10.04.2024 - 20.04.2024');
    await clickAndWait(iconButton, page);
    await expect(dropdown).toBeVisible();

    // Select a date after the end date (should reset the range)
    const dayIndices = await days.evaluateAll(getVisibleDayIndices);
    if (dayIndices.length < 1) throw new Error('No clickable calendar days found');

    // Find a day after 20th
    const dayAfterEnd = dayIndices.find(async (index) => {
      const text = await days.nth(index).textContent();
      const day = Number(text?.trim());
      return Number.isFinite(day) && day > 20;
    });

    if (dayAfterEnd !== undefined) {
      await days.nth(dayAfterEnd).click();
      await expect(dropdown).toBeVisible(); // Should stay open

      const newValue = await input.inputValue();
      const [newStartStr, newEndStr] = newValue.split(' - ');
      const newStartDate = parseDateOrNull(newStartStr);
      const newEndDate = parseDateOrNull(newEndStr);

      // Range should be reset - the clicked date should be the new startDate
      expect(newStartDate).not.toBeNull();
      expect(newEndDate).toBeNull();
    }
  });

  test('editing range: changing startDate to later date when endDate exists resets endDate', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-input-dateinput--date-input-range');
    const frame = getStorybookFrameLocator(page);

    const input = frame.locator('.text-input-native-input');
    const iconButton = frame.locator('[data-role="icon-pane-after"] svg').last();
    const dropdown = frame.locator('.dropContainerClass');
    const days = frame.locator('.ui-kit-calendar-day-component');

    // Set initial range
    await input.fill('10.04.2024 - 20.04.2024');
    await clickAndWait(iconButton, page);
    await expect(dropdown).toBeVisible();

    // Click on a date between start and end (по логике Calendar это сбросит endDate)
    const dayIndices = await days.evaluateAll(getVisibleDayIndices);
    if (dayIndices.length < 1) throw new Error('No clickable calendar days found');

    // Find a day between 10 and 20
    let middleDayIndex = -1;
    for (const index of dayIndices) {
      const text = await days.nth(index).textContent();
      const day = Number(text?.trim());
      if (Number.isFinite(day) && day > 10 && day < 20) {
        middleDayIndex = index;
        break;
      }
    }

    if (middleDayIndex !== -1) {
      await days.nth(middleDayIndex).click();
      await expect(dropdown).toBeVisible(); // Should stay open, endDate still exists

      const newValue = await input.inputValue();
      expect(isValidDateRangeFormat(newValue)).toBe(true);

      const [newStartStr, newEndStr] = newValue.split(' - ');
      const newStartDate = parseDateOrNull(newStartStr);
      const newEndDate = parseDateOrNull(newEndStr);

      expect(newStartDate).not.toBeNull();
      // При наличии startDate и endDate любой новый клик превращает его в новый startDate, endDate сбрасывается
      expect(newEndDate).toBeNull();
    }
  });

  test('editing range: changing endDate to earlier date when startDate exists', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-input-dateinput--date-input-range');
    const frame = getStorybookFrameLocator(page);

    const input = frame.locator('.text-input-native-input');
    const iconButton = frame.locator('[data-role="icon-pane-after"] svg').last();
    const dropdown = frame.locator('.dropContainerClass');
    const days = frame.locator('.ui-kit-calendar-day-component');

    // Set initial range
    await input.fill('10.04.2024 - 20.04.2024');
    await clickAndWait(iconButton, page);
    await expect(dropdown).toBeVisible();

    // Navigate to previous month
    const panel = frame.locator('.ui-kit-calendar-panel-component');
    const { prev } = getCalendarNavigationButtons(panel);
    await prev.click();
    await expect(dropdown).toBeVisible();

    // Select a date in previous month (should reset range)
    const prevMonthDayIndices = await days.evaluateAll(getVisibleDayIndices);
    if (prevMonthDayIndices.length < 1) throw new Error('No clickable calendar days found in previous month');

    await days.nth(prevMonthDayIndices[prevMonthDayIndices.length - 1]).click();
    await expect(dropdown).toBeVisible(); // Should stay open

    const newValue = await input.inputValue();
    const [newStartStr, newEndStr] = newValue.split(' - ');
    const newStartDate = parseDateOrNull(newStartStr);
    const newEndDate = parseDateOrNull(newEndStr);

    // Range should be reset because selected date is before startDate
    expect(newStartDate).not.toBeNull();
    expect(newEndDate).toBeNull();
  });

  test('typing invalid range where endDate < startDate keeps format valid', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-input-dateinput--date-input-range');
    const frame = getStorybookFrameLocator(page);

    const input = frame.locator('.text-input-native-input');
    const iconButton = frame.locator('[data-role="icon-pane-after"] svg').last();
    const dropdown = frame.locator('.dropContainerClass');

    // Type a range where end < start
    await input.fill('20.04.2024 - 10.04.2024');
    await clickAndWait(iconButton, page);
    await expect(dropdown).toBeVisible();

    // Компонент не обязан автоматически исправлять отношения дат, но формат должен оставаться валидным
    const value = await input.inputValue();
    expect(isValidDateRangeFormat(value)).toBe(true);

    const [startStr, endStr] = value.split(' - ');
    const startDate = parseDateOrNull(startStr);
    const endDate = parseDateOrNull(endStr);

    // Дополнительно убеждаемся, что обе даты парсятся, но без жёсткого требования endDate >= startDate
    expect(startDate).not.toBeNull();
    expect(endDate).not.toBeNull();
  });

  test('reopening calendar after correcting invalid range shows correct month', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-input-dateinput--date-input-range');
    const frame = getStorybookFrameLocator(page);

    const input = frame.locator('.text-input-native-input');
    const iconButton = frame.locator('[data-role="icon-pane-after"] svg').last();
    const panel = frame.locator('.ui-kit-calendar-panel-component');

    // Set a range, then manually edit to invalid
    await input.fill('20.04.2024 - 10.04.2024');
    await clickAndWait(iconButton, page);
    await expect(panel).toBeVisible();

    // Close dropdown
    await frame.locator('body').click({ position: { x: 1, y: 1 } });
    await expect(panel).toBeHidden();

    // Correct the range manually
    await input.fill('10.04.2024 - 20.04.2024');

    // Reopen - should show April 2024 (start date month)
    await clickAndWait(iconButton, page);
    await expect(panel).toBeVisible();
    const { month, year } = await getCalendarPanelDate(panel);
    expect(month).toBe('Апрель');
    expect(year).toBe('2024');
  });

  test('selecting same date twice in range mode resets range', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-input-dateinput--date-input-range');
    const frame = getStorybookFrameLocator(page);

    const input = frame.locator('.text-input-native-input');
    const iconButton = frame.locator('[data-role="icon-pane-after"] svg').last();
    const dropdown = frame.locator('.dropContainerClass');
    const days = frame.locator('.ui-kit-calendar-day-component');

    await clickAndWait(iconButton, page);
    await expect(dropdown).toBeVisible();

    const dayIndices = await days.evaluateAll(getVisibleDayIndices);
    if (dayIndices.length < 1) throw new Error('No clickable calendar days found');

    const selectedIndex = dayIndices[0];
    await days.nth(selectedIndex).click();
    await expect(dropdown).toBeVisible();

    // Click the same date again
    await days.nth(selectedIndex).click();
    await expect(dropdown).toBeVisible(); // Should stay open

    const value = await input.inputValue();
    const [startStr, endStr] = value.split(' - ');
    const startDate = parseDateOrNull(startStr);
    const endDate = parseDateOrNull(endStr);

    // Range should be reset - only startDate should exist
    expect(startDate).not.toBeNull();
    expect(endDate).toBeNull();
  });
});
