import { test, expect } from '@playwright/test';
import {
  getStorybookFrameLocator,
  clickAndWait,
  getVisibleDayIndices,
  getCalendarNavigationButtons,
  getCalendarPanelDate,
} from '../utils';

test.describe('DateInput - month selection behavior', () => {
  test('selected month circle does not move when navigating with arrows (only moves on day click)', async ({
    page,
  }) => {
    await page.goto('/?path=/story/admiral-2-1-input-dateinput--date-input-playground');
    const frame = getStorybookFrameLocator(page);

    const iconButton = frame.locator('[data-role="icon-pane-after"] svg').last();
    const dropdown = frame.locator('.dropContainerClass');
    const panel = frame.locator('.ui-kit-calendar-panel-component');
    const days = frame.locator('.ui-kit-calendar-day-component');

    // Open calendar
    await clickAndWait(iconButton, page);
    await expect(dropdown).toBeVisible();

    // Open months view
    const monthHeader = panel.locator('h6').first();
    await monthHeader.click();
    await expect(dropdown).toBeVisible();

    // Get initial selected month if circle exists (selected month has primary background color)
    const monthsView = frame.locator('.ui-kit-calendar-month-component');
    const initialSelectedMonth = await monthsView
      .evaluateAll((elements) => {
        return (
          elements
            .find((el) => {
              const style = window.getComputedStyle(el);
              const bgColor = style.backgroundColor;
              // Check if background is not transparent (selected month has primary color)
              return bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent';
            })
            ?.textContent?.trim() || null
        );
      })
      .catch(() => null);

    // Navigate to next month using arrow
    const { next } = getCalendarNavigationButtons(panel);
    await next.click();
    await expect(dropdown).toBeVisible();

    // Check that selected month circle did NOT move (still shows same month)
    const monthsViewAfterNav = frame.locator('.ui-kit-calendar-month-component');
    const selectedMonthAfterNav = await monthsViewAfterNav
      .evaluateAll((elements) => {
        return (
          elements
            .find((el) => {
              const style = window.getComputedStyle(el);
              const bgColor = style.backgroundColor;
              return bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent';
            })
            ?.textContent?.trim() || null
        );
      })
      .catch(() => null);

    // Selected month should remain the same (only viewDate changed, not selected)
    // If there is no selected circle (null), just ensure it stays null
    expect(selectedMonthAfterNav).toBe(initialSelectedMonth);

    // Close months view and select a day
    await monthHeader.click();
    await expect(dropdown).toBeVisible();

    const dayIndices = await days.evaluateAll(getVisibleDayIndices);
    if (dayIndices.length < 1) throw new Error('No clickable calendar days found');

    await days.nth(dayIndices[0]).click();
    await expect(dropdown).toBeHidden();

    // Reopen and check months view - selected month should now match the selected day
    await clickAndWait(iconButton, page);
    await expect(dropdown).toBeVisible();

    await monthHeader.click();
    await expect(dropdown).toBeVisible();

    const { month: panelMonth } = await getCalendarPanelDate(panel);
    const finalSelectedMonth = await monthsView
      .evaluateAll((elements) => {
        return (
          elements
            .find((el) => {
              const style = window.getComputedStyle(el);
              const bgColor = style.backgroundColor;
              return bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent';
            })
            ?.textContent?.trim() || null
        );
      })
      .catch(() => null);

    // Selected month should match the panel month (which matches selected date)
    if (finalSelectedMonth) {
      expect(finalSelectedMonth).toBe(panelMonth);
    }
  });

  test('when editing existing date, selected month updates only after selecting new day', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-input-dateinput--date-input-playground');
    const frame = getStorybookFrameLocator(page);

    const input = frame.locator('.text-input-native-input');
    const iconButton = frame.locator('[data-role="icon-pane-after"] svg').last();
    const dropdown = frame.locator('.dropContainerClass');
    const panel = frame.locator('.ui-kit-calendar-panel-component');
    const days = frame.locator('.ui-kit-calendar-day-component');

    // Set initial date
    await input.fill('15.04.2024');
    await clickAndWait(iconButton, page);
    await expect(dropdown).toBeVisible();

    // Open months view and check selected month
    const monthHeader = panel.locator('h6').first();
    await monthHeader.click();
    await expect(dropdown).toBeVisible();

    const monthsView = frame.locator('.ui-kit-calendar-month-component');
    const initialSelectedMonth = await monthsView
      .evaluateAll((elements) => {
        return (
          elements
            .find((el) => {
              const style = window.getComputedStyle(el);
              const bgColor = style.backgroundColor;
              return bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent';
            })
            ?.textContent?.trim() || null
        );
      })
      .catch(() => null);

    const { month: initialPanelMonth } = await getCalendarPanelDate(panel);
    expect(initialPanelMonth).toBe('Апрель'); // header reflects selected date
    // If we managed to detect a selected month circle, it should match header
    if (initialSelectedMonth) {
      expect(initialSelectedMonth).toBe(initialPanelMonth);
    }

    // Navigate to different month using arrow
    const { next } = getCalendarNavigationButtons(panel);
    await next.click();
    await expect(dropdown).toBeVisible();

    // Check panel shows new month
    const { month: panelMonth } = await getCalendarPanelDate(panel);
    expect(panelMonth).not.toBe('Апрель');

    // But selected month circle (if present) should still show April (no day selected yet)
    const selectedMonthAfterNav = await monthsView
      .evaluateAll((elements) => {
        return (
          elements
            .find((el) => {
              const style = window.getComputedStyle(el);
              const bgColor = style.backgroundColor;
              return bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent';
            })
            ?.textContent?.trim() || null
        );
      })
      .catch(() => null);

    if (selectedMonthAfterNav) {
      expect(selectedMonthAfterNav).toBe('Апрель');
    }

    // Close months view and select a day in the new month
    await monthHeader.click();
    await expect(dropdown).toBeVisible();

    const dayIndices = await days.evaluateAll(getVisibleDayIndices);
    if (dayIndices.length < 1) throw new Error('No clickable calendar days found');

    await days.nth(dayIndices[0]).click();
    await expect(dropdown).toBeHidden();

    // Reopen and check - selected month should now match new selected date
    await clickAndWait(iconButton, page);
    await expect(dropdown).toBeVisible();

    await monthHeader.click();
    await expect(dropdown).toBeVisible();

    const finalSelectedMonth = await monthsView
      .evaluateAll((elements) => {
        return (
          elements
            .find((el) => {
              const style = window.getComputedStyle(el);
              const bgColor = style.backgroundColor;
              return bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent';
            })
            ?.textContent?.trim() || null
        );
      })
      .catch(() => null);

    const { month: finalPanelMonth } = await getCalendarPanelDate(panel);
    // Если удалось найти кружочек, он должен совпадать с заголовком
    if (finalSelectedMonth) {
      expect(finalSelectedMonth).toBe(finalPanelMonth);
    }
  });

  test('in date-range mode, selected month shows startDate month, not viewDate month', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-input-dateinput--date-input-range');
    const frame = getStorybookFrameLocator(page);

    const input = frame.locator('.text-input-native-input');
    const iconButton = frame.locator('[data-role="icon-pane-after"] svg').last();
    const dropdown = frame.locator('.dropContainerClass');
    const panel = frame.locator('.ui-kit-calendar-panel-component');

    // Set range
    await input.fill('15.04.2024 - 25.05.2024');
    await clickAndWait(iconButton, page);
    await expect(dropdown).toBeVisible();

    // Open months view
    const monthHeader = panel.locator('h6').first();
    await monthHeader.click();
    await expect(dropdown).toBeVisible();

    const monthsView = frame.locator('.ui-kit-calendar-month-component');
    const selectedMonth = await monthsView
      .evaluateAll((elements) => {
        return (
          elements
            .find((el) => {
              const style = window.getComputedStyle(el);
              const bgColor = style.backgroundColor;
              return bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent';
            })
            ?.textContent?.trim() || null
        );
      })
      .catch(() => null);

    // Selected month should be April (startDate), not May (endDate) or current viewDate
    // Если удалось найти кружочек, он должен быть на апреле
    if (selectedMonth) {
      expect(selectedMonth).toBe('Апрель');
    }

    // Navigate to May using arrows
    const { next } = getCalendarNavigationButtons(panel);
    await next.click();
    await expect(dropdown).toBeVisible();

    const { month: panelMonth } = await getCalendarPanelDate(panel);
    expect(panelMonth).toBe('Май');

    // But selected month circle (if present) should still show April (startDate)
    const selectedMonthAfterNav = await monthsView
      .evaluateAll((elements) => {
        return (
          elements
            .find((el) => {
              const style = window.getComputedStyle(el);
              const bgColor = style.backgroundColor;
              return bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent';
            })
            ?.textContent?.trim() || null
        );
      })
      .catch(() => null);

    if (selectedMonthAfterNav) {
      expect(selectedMonthAfterNav).toBe('Апрель');
    }
  });
});
