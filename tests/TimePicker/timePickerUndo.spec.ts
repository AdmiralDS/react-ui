import { test, expect } from '@playwright/test';
import { clickAndWait, getStorybookFrameLocator } from '../utils';

const UNDO_SHORTCUT = process.platform === 'darwin' ? 'Meta+KeyZ' : 'Control+KeyZ';

test('native undo is disabled for TimePicker', async ({ page }) => {
  await page.goto('/?path=/story/admiral-2-1-datepicker-timepicker--time-picker-simple');
  const frame = getStorybookFrameLocator(page);
  const timeInput = frame.locator('.time-picker-native-input');

  await timeInput.click();
  await timeInput.fill('1230');
  const valueAfterFill = await timeInput.inputValue();

  await page.keyboard.press(UNDO_SHORTCUT);

  await expect(timeInput).toHaveValue(valueAfterFill);
});
