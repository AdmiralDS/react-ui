import { test, expect } from '@playwright/test';
import { getStorybookFrameLocator, clickAndWait } from '../utils';

test.describe('TimePicker - range constraints', () => {
  test('disables options outside startTime/endTime and allows inside', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-input-timepicker--time-picker-range');
    const frame = getStorybookFrameLocator(page);

    const input = frame.locator('.time-picker-native-input');
    const iconButton = frame.locator('.time-picker-icon-panel svg').last();
    await clickAndWait(iconButton, page);

    const dropdown = frame.locator('.dropContainerClass');
    await expect(dropdown).toBeVisible();

    const beforeStartTime = dropdown.getByText('08:30');
    await expect(beforeStartTime).toHaveCount(0);

    const inside = dropdown.getByText('09:00');
    await expect(inside).toBeVisible();
    await inside.click();
    await expect(input).toHaveValue('09:00');

    const afterEndTime = dropdown.getByText('18:30');
    await expect(afterEndTime).toHaveCount(0);
  });

  test('respects disabledSlots along with range', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-input-timepicker--time-picker-range-disabled');
    const frame = getStorybookFrameLocator(page);

    const input = frame.locator('.time-picker-native-input');
    const iconButton = frame.locator('.time-picker-icon-panel svg').last();
    await clickAndWait(iconButton, page);

    const dropdown = frame.locator('.dropContainerClass');
    await expect(dropdown).toBeVisible();

    // Inside range but disabled by disabledSlots
    const disabledOpt = dropdown.getByText('12:30');
    await disabledOpt.click();
    await expect(input).not.toHaveValue('12:30');

    // Select enabled option inside range
    const enabledOpt = dropdown.getByText('13:00');
    await enabledOpt.click();
    await expect(input).toHaveValue('13:00');
  });

  test('shows error status when manually entering disabled slot value', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-input-timepicker--time-picker-range-disabled');
    const frame = getStorybookFrameLocator(page);

    const input = frame.locator('.time-picker-native-input');
    const container = frame.locator('.time-picker-container');

    // Вводим disabled значение вручную
    await input.click();
    await input.type('1', { delay: 50 });
    await page.waitForTimeout(50);
    await input.type('2', { delay: 50 });
    await page.waitForTimeout(50);
    await input.type(':', { delay: 50 });
    await page.waitForTimeout(50);
    await input.type('3', { delay: 50 });
    await page.waitForTimeout(50);
    await input.type('0', { delay: 50 });
    await page.waitForTimeout(50);

    // Проверяем, что значение введено
    await expect(input).toHaveValue('12:30');

    // Проверяем, что установлен error статус
    await expect(container).toHaveAttribute('data-status', 'error');
  });
});
