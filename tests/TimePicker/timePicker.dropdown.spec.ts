import { test, expect } from '@playwright/test';
import { getStorybookFrameLocator, clickAndWait } from '../utils';

test.describe('TimePicker - dropdown and selection', () => {
  test('opens dropdown via icon and selects an option', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-input-timepicker--time-picker-simple');
    const frame = getStorybookFrameLocator(page);

    const input = frame.locator('.time-picker-native-input');
    await expect(input).toBeVisible({ timeout: 5000 });
    await expect(input).toBeVisible();

    const iconButton = frame.locator('.time-picker-icon-panel svg').last();
    await clickAndWait(iconButton, page);

    const dropdown = frame.locator('.dropContainerClass');
    await expect(dropdown).toBeVisible();

    const option = dropdown.getByText('09:00');
    await option.click();

    await expect(input).toHaveValue('09:00');
  });

  // test('dropdown closes on outside click', async ({ page }) => {
  //   await page.goto('/?path=/story/admiral-2-1-input-timepicker--time-picker-simple');
  //   const frame = getStorybookFrameLocator(page);

  //   const iconButton = frame.locator('.time-picker-icon-panel svg').last();
  //   await clickAndWait(iconButton, page);

  //   const dropdown = frame.locator('.dropContainerClass');
  //   await expect(dropdown).toBeVisible();

  //   await page.mouse.click(5, 5);
  //   await expect(dropdown).not.toBeVisible({ timeout: 1000 });
  // });
});
