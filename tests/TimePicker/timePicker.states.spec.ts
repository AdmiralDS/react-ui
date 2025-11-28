import { test, expect } from '@playwright/test';
import { getStorybookFrameLocator, clickAndWait } from '../utils';

test.describe('TimePicker - readOnly & disabled options', () => {
  test('readOnly: time icon absent, extra icon works, no dropdown', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-input-timepicker--time-picker-icon-custom');
    const frame = getStorybookFrameLocator(page);

    const input = frame.locator('.time-picker-native-input');
    await expect(input).toBeVisible();

    const buttons = frame.locator('.time-picker-icon-panel svg');
    await expect(buttons).toHaveCount(1);

    await clickAndWait(buttons.first(), page);
    await expect(input).toHaveValue('12:00');

    await expect(frame.locator('.dropContainerClass')).toHaveCount(0);
  });

  test('disabled options are not selectable in simple-disabled story', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-input-timepicker--time-picker-simple-disabled');
    const frame = getStorybookFrameLocator(page);

    const input = frame.locator('.time-picker-native-input');
    const iconButton = frame.locator('.time-picker-icon-panel svg').last();
    await clickAndWait(iconButton, page);

    const dropdown = frame.locator('.dropContainerClass');
    await expect(dropdown).toBeVisible();

    const disabledItem = dropdown.getByText('12:30');
    await disabledItem.click();
    await expect(input).not.toHaveValue('12:30');

    const enabledItem = dropdown.getByText('12:00');
    await enabledItem.click();
    await expect(input).toHaveValue('12:00');
  });
});
