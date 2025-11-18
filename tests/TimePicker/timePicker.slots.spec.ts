import { test, expect } from '@playwright/test';
import { getStorybookFrameLocator, clickAndWait } from '../utils';

test.describe('TimePicker - custom slots', () => {
  test('shows only hourly options from custom slots and selects one', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-input-timepicker--time-picker-simple-custom-slots');
    const frame = getStorybookFrameLocator(page);

    const input = frame.locator('.time-picker-native-input');
    const iconButton = frame.locator('.time-picker-icon-panel svg').last();
    await clickAndWait(iconButton, page);

    const dropdown = frame.locator('.dropContainerClass');
    await expect(dropdown).toBeVisible();

    await expect(dropdown.getByText('09:00')).toBeVisible();
    await expect(dropdown.getByText('09:30')).toHaveCount(0);

    await dropdown.getByText('21:00').click();
    await expect(input).toHaveValue('21:00');
  });
});
