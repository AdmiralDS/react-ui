import { test, expect } from '@playwright/test';
import { getStorybookFrameLocator, UNDO_SHORTCUT } from '../utils';

test('native undo is disabled for NumberInput', async ({ page }) => {
  await page.goto('/?path=/story/admiral-2-1-input-numberinput--playground');
  const frame = getStorybookFrameLocator(page);
  const numberInput = frame.locator('.number-input-native-input');

  await numberInput.click();
  await numberInput.fill('123');
  const valueAfterFill = await numberInput.inputValue();

  await page.keyboard.press(UNDO_SHORTCUT);

  await expect(numberInput).toHaveValue(valueAfterFill);
});
