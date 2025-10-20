import { test, expect } from '@playwright/test';
import { getStorybookFrameLocator } from '../utils';

const UNDO_SHORTCUT = process.platform === 'darwin' ? 'Meta+KeyZ' : 'Control+KeyZ';

test('native undo restores previous value for InputField', async ({ page }) => {
  await page.goto('/?path=/story/admiral-2-1-form-field-inputfield--input-field-example');
  const frame = getStorybookFrameLocator(page);
  const input = frame.locator('[data-container-id="inputFieldIdOne"] .text-input-native-input');
  const initialValue = await input.inputValue();

  await input.click();
  await input.fill('New value');

  await page.keyboard.press(UNDO_SHORTCUT);

  await expect(input).toHaveValue(initialValue);
});
