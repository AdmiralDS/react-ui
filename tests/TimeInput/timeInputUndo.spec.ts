import { test, expect } from '@playwright/test';
import { getStorybookFrameLocator } from '../utils';
import { UNDO_SHORTCUT } from '../constants';

test('native undo is disabled for TimeInput', async ({ page }) => {
  await page.goto('/?path=/story/deprecated-timeinput-deprecated-используйте-timepicker--time-input-simple');
  const frame = getStorybookFrameLocator(page);
  const timeInput = frame.locator('.text-input-native-input').first();

  await timeInput.click();
  await timeInput.fill('12:30');
  const valueAfterFill = await timeInput.inputValue();

  await page.keyboard.press(UNDO_SHORTCUT);

  await expect(timeInput).toHaveValue(valueAfterFill);
});
