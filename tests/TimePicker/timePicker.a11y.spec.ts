import { test, expect } from '@playwright/test';
import { getStorybookFrameLocator, clickAndWait } from '../utils';
import { TIMEOUTS } from '../constants';

test.describe('TimePicker - data attributes and states', () => {
  test('disabled slot in dropdown has data-disabled attribute', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-input-timepicker--time-picker-simple-disabled');
    const frame = getStorybookFrameLocator(page);

    const input = frame.locator('.time-picker-native-input');
    await expect(input).toBeVisible();

    const iconButton = frame.locator('.time-picker-icon-panel svg').last();
    await expect(iconButton).toBeVisible();
    await clickAndWait(iconButton, page);

    const dropdown = frame.locator('.dropContainerClass');
    await expect(dropdown).toBeVisible();

    const disabledItem = dropdown.locator('[data-disabled="true"]').filter({ hasText: '12:30' }).first();
    await expect(disabledItem).toBeVisible({ timeout: TIMEOUTS.EXPECT_FAST });
    await expect(disabledItem).toHaveAttribute('data-disabled', 'true');

    await disabledItem.click();
    await expect(input).not.toHaveValue('12:30');
  });

  test('readOnly sets container data-read-only', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-input-timepicker--time-picker-icon-custom');
    const frame = getStorybookFrameLocator(page);

    const container = frame.locator('.time-picker-container[data-read-only="true"]');
    await expect(container).toBeVisible();
  });

  test('validates disabledSlots and shows error status on manual input', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-input-timepicker--time-picker-simple-disabled');
    const frame = getStorybookFrameLocator(page);

    const input = frame.locator('.time-picker-native-input');
    const container = frame.locator('.time-picker-container');

    await expect(container).not.toHaveAttribute('data-status', 'error');

    await input.click();
    await input.type('1', { delay: TIMEOUTS.TYPE_STANDARD });
    await page.waitForTimeout(TIMEOUTS.WAIT_SHORT);
    await input.type('2', { delay: TIMEOUTS.TYPE_STANDARD });
    await page.waitForTimeout(TIMEOUTS.WAIT_SHORT);
    await input.type('3', { delay: TIMEOUTS.TYPE_STANDARD });
    await page.waitForTimeout(TIMEOUTS.WAIT_SHORT);
    await input.type('0', { delay: TIMEOUTS.TYPE_STANDARD });
    await page.waitForTimeout(TIMEOUTS.WAIT_SHORT);

    await expect(input).toHaveValue('12:30');

    await expect(container).toHaveAttribute('data-status', 'error');

    await input.fill('');
    await input.type('1', { delay: TIMEOUTS.TYPE_STANDARD });
    await page.waitForTimeout(TIMEOUTS.WAIT_SHORT);
    await input.type('2', { delay: TIMEOUTS.TYPE_STANDARD });
    await page.waitForTimeout(TIMEOUTS.WAIT_SHORT);
    await input.type('0', { delay: TIMEOUTS.TYPE_STANDARD });
    await page.waitForTimeout(TIMEOUTS.WAIT_SHORT);
    await input.type('0', { delay: TIMEOUTS.TYPE_STANDARD });
    await page.waitForTimeout(TIMEOUTS.WAIT_SHORT);

    await expect(input).toHaveValue('12:00');
    await expect(container).not.toHaveAttribute('data-status', 'error');
  });
});
