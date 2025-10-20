import { test, expect } from '@playwright/test';
import { getStorybookFrameLocator, UNDO_SHORTCUT } from '../utils';

test('native undo is disabled for DateInput', async ({ page }) => {
  await page.goto('/?path=/story/admiral-2-1-input-dateinput--date-input-playground');
  const frame = getStorybookFrameLocator(page);
  const dateInput = frame.locator('.text-input-native-input');

  await dateInput.click();
  await dateInput.fill('12122023');
  const valueAfterFill = await dateInput.inputValue();

  await page.keyboard.press(UNDO_SHORTCUT);

  await expect(dateInput).toHaveValue(valueAfterFill);
});
