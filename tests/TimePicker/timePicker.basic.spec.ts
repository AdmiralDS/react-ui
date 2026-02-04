import { test, expect } from '@playwright/test';
import { getStorybookFrameLocator } from '../utils';
import { TIMEOUTS } from '../constants';

test.describe('TimePicker - basic interactions', () => {
  test('typing masks to HH:MM and ignores non-digits', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-input-timepicker--time-picker-simple');
    const frame = getStorybookFrameLocator(page);

    const input = frame.locator('.time-picker-native-input');
    await expect(input).toBeVisible();

    await input.click();
    await input.fill('12xx3a0');
    await expect(input).toHaveValue('12:30');
  });

  test('placeholder is visible and value updates with typing', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-input-timepicker--time-picker-simple');
    const frame = getStorybookFrameLocator(page);

    const input = frame.locator('.time-picker-native-input');
    await expect(input).toHaveAttribute('placeholder', 'чч:мм');

    await input.click();
    await input.fill('0930');
    await expect(input).toHaveValue('09:30');
  });

  test('adding zeroes to HH:MM', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-input-timepicker--time-picker-simple');
    const frame = getStorybookFrameLocator(page);

    const input = frame.locator('.time-picker-native-input');
    await expect(input).toHaveAttribute('placeholder', 'чч:мм');

    await input.click();
    // Вводим символы по одному с задержкой, чтобы маска успевала отработать
    await input.type('3', { delay: TIMEOUTS.TYPE_STANDARD });
    await page.waitForTimeout(TIMEOUTS.WAIT_SHORT);
    await input.type('7', { delay: TIMEOUTS.TYPE_STANDARD });
    await page.waitForTimeout(TIMEOUTS.WAIT_SHORT);
    await expect(input).toHaveValue('03:07');
  });

  test('writing : only after the minutes digit', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-input-timepicker--time-picker-simple');
    const frame = getStorybookFrameLocator(page);

    const input = frame.locator('.time-picker-native-input');
    await expect(input).toHaveAttribute('placeholder', 'чч:мм');

    await input.click();
    await input.type('3', { delay: TIMEOUTS.TYPE_STANDARD });
    await page.waitForTimeout(TIMEOUTS.WAIT_SHORT);
    await expect(input).toHaveValue('03');

    await input.type('2', { delay: TIMEOUTS.TYPE_STANDARD });
    await page.waitForTimeout(TIMEOUTS.WAIT_SHORT);
    await expect(input).toHaveValue('03:2');

    await input.fill('');
    await input.type('3', { delay: TIMEOUTS.TYPE_STANDARD });
    await page.waitForTimeout(TIMEOUTS.WAIT_SHORT);
    await expect(input).toHaveValue('03');
  });

  test('ignore invalid hour the second digit after 2', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-input-timepicker--time-picker-simple');
    const frame = getStorybookFrameLocator(page);

    const input = frame.locator('.time-picker-native-input');
    await expect(input).toHaveAttribute('placeholder', 'чч:мм');

    await input.click();
    await input.type('2', { delay: TIMEOUTS.TYPE_STANDARD });
    await page.waitForTimeout(TIMEOUTS.WAIT_SHORT);
    await input.type('3', { delay: TIMEOUTS.TYPE_STANDARD });
    await page.waitForTimeout(TIMEOUTS.WAIT_SHORT);
    await input.type('3', { delay: TIMEOUTS.TYPE_STANDARD });
    await page.waitForTimeout(TIMEOUTS.WAIT_SHORT);
    await input.type('0', { delay: TIMEOUTS.TYPE_STANDARD });
    await page.waitForTimeout(TIMEOUTS.WAIT_SHORT);
    await expect(input).toHaveValue('23:30');

    await input.fill('');
    await input.type('2', { delay: TIMEOUTS.TYPE_STANDARD });
    await page.waitForTimeout(TIMEOUTS.WAIT_SHORT);
    await input.type('4', { delay: TIMEOUTS.TYPE_STANDARD });
    await page.waitForTimeout(TIMEOUTS.WAIT_SHORT);
    await input.type('5', { delay: TIMEOUTS.TYPE_STANDARD });
    await page.waitForTimeout(TIMEOUTS.WAIT_SHORT);
    await input.type('6', { delay: TIMEOUTS.TYPE_STANDARD });
    await page.waitForTimeout(TIMEOUTS.WAIT_SHORT);
    await input.type('7', { delay: TIMEOUTS.TYPE_STANDARD });
    await page.waitForTimeout(TIMEOUTS.WAIT_SHORT);
    await input.type('8', { delay: TIMEOUTS.TYPE_STANDARD });
    await page.waitForTimeout(TIMEOUTS.WAIT_SHORT);
    await input.type('9', { delay: TIMEOUTS.TYPE_STANDARD });
    await page.waitForTimeout(TIMEOUTS.WAIT_SHORT);
    await expect(input).toHaveValue('2');
  });
});
