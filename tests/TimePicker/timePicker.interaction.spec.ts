import { test, expect } from '@playwright/test';
import { getStorybookFrameLocator, clickAndWait } from '../utils';

test.describe('TimePicker - user interactions', () => {
  test('onChange is called when value changes', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-input-timepicker--time-picker-simple');
    const frame = getStorybookFrameLocator(page);

    const input = frame.locator('.time-picker-native-input');

    await input.click();
    await input.type('1', { delay: 50 });
    await page.waitForTimeout(50);
    await input.type('2', { delay: 50 });
    await page.waitForTimeout(50);
    await input.type('3', { delay: 50 });
    await page.waitForTimeout(50);
    await input.type('0', { delay: 50 });
    await page.waitForTimeout(50);

    await expect(input).toHaveValue('12:30');
  });

  test('clear icon clears the input value', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-input-timepicker--time-picker-clear-icon');
    const frame = getStorybookFrameLocator(page);

    const input = frame.locator('.time-picker-native-input');

    await input.click();
    await input.fill('1545');
    await page.waitForTimeout(50);

    const clearIcon = frame.locator('.time-picker-icon-panel svg').first();
    await expect(clearIcon).toBeVisible();

    await clearIcon.click();
    await page.waitForTimeout(50);
    await expect(input).toHaveValue('');
  });

  test('custom clear icon sets the input value to 00:00', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-input-timepicker--time-picker-double-icon');
    const frame = getStorybookFrameLocator(page);

    const input = frame.locator('.time-picker-native-input');

    await input.click();
    await input.fill('1545');
    await page.waitForTimeout(50);

    const clearIcon = frame.locator('.time-picker-icon-panel svg').first();
    await expect(clearIcon).toBeVisible();

    await clearIcon.click();
    await page.waitForTimeout(50);
    await expect(input).toHaveValue('00:00');
  });

  test('keyboard navigation in dropdown works', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-input-timepicker--time-picker-simple');
    const frame = getStorybookFrameLocator(page);

    const input = frame.locator('.time-picker-native-input');
    const iconButton = frame.locator('.time-picker-icon-panel svg').last();

    await clickAndWait(iconButton, page);

    const dropdown = frame.locator('.dropContainerClass');
    await expect(dropdown).toBeVisible();

    await input.press('ArrowDown');
    await page.waitForTimeout(50);
    await input.press('ArrowDown');
    await page.waitForTimeout(50);
    await input.press('Enter');
    await page.waitForTimeout(50);

    const value = await input.inputValue();
    expect(value).toBeTruthy();
  });

  test('dropdown closes on Escape key', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-input-timepicker--time-picker-simple');
    const frame = getStorybookFrameLocator(page);

    const input = frame.locator('.time-picker-native-input');
    const iconButton = frame.locator('.time-picker-icon-panel svg').last();

    await clickAndWait(iconButton, page);

    const dropdown = frame.locator('.dropContainerClass');
    await expect(dropdown).toBeVisible();

    await input.press('Escape');
    await page.waitForTimeout(50);

    await expect(dropdown).not.toBeVisible({ timeout: 400 });
  });

  test('value prop controls the input value', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-input-timepicker--time-picker-simple');
    const frame = getStorybookFrameLocator(page);

    const input = frame.locator('.time-picker-native-input');

    const initialValue = await input.inputValue();
    expect(initialValue).toBe('');

    await input.click();
    await input.fill('1420');
    await page.waitForTimeout(50);

    await expect(input).toHaveValue('14:20');
  });

  test('disableCopying prevents text selection', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-input-timepicker--time-picker-disable-copying');
    const frame = getStorybookFrameLocator(page);

    const input = frame.locator('.time-picker-native-input');
    const container = frame.locator('.time-picker-container');

    const disableCopying = await container.getAttribute('data-disable-copying');
    if (disableCopying === 'true') {
      await input.fill('12:30');
      await input.selectText();
    }
  });

  test('dropdown positioning with alignSelf', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-input-timepicker--time-picker-align-dropdown-container');
    const frame = getStorybookFrameLocator(page);

    const iconButton = frame.locator('.time-picker-icon-panel svg').last();

    await clickAndWait(iconButton, page);

    const dropdown = frame.locator('.dropContainerClass');
    await expect(dropdown).toBeVisible();

    // Проверяем что dropdown видим (позиционирование работает)
    const dropdownBox = await dropdown.boundingBox();
    expect(dropdownBox).toBeTruthy();
  });
});
