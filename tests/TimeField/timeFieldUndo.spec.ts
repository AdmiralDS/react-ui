import { test, expect } from '@playwright/test';
import { getStorybookFrameLocator } from '../utils';

const UNDO_SHORTCUT = process.platform === 'darwin' ? 'Meta+KeyZ' : 'Control+KeyZ';

test('native undo is disabled for TimeField', async ({ page }) => {
  await page.goto('/?path=/story/admiral-2-1-form-field-timefield--time-field-input');
  const frame = getStorybookFrameLocator(page);
  const timeInput = frame.locator('.text-input-native-input');

  await timeInput.click();
  await timeInput.fill('1230');
  const valueAfterFill = await timeInput.inputValue();

  await page.keyboard.press(UNDO_SHORTCUT);

  await expect(timeInput).toHaveValue(valueAfterFill);
});
