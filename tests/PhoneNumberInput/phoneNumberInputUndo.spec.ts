import { test, expect } from '@playwright/test';
import { getStorybookFrameLocator } from '../utils';

const UNDO_SHORTCUT = process.platform === 'darwin' ? 'Meta+KeyZ' : 'Control+KeyZ';

test('native undo is disabled for PhoneNumberInput', async ({ page }) => {
  await page.goto('/?path=/story/admiral-2-1-input-phonenumberinput--phone-number-input-xl');
  const frame = getStorybookFrameLocator(page);
  const phoneInput = frame.locator('.text-input-native-input');

  await phoneInput.click();
  await phoneInput.fill('+79991234567');
  const valueAfterFill = await phoneInput.inputValue();

  await page.keyboard.press(UNDO_SHORTCUT);

  await expect(phoneInput).toHaveValue(valueAfterFill);
});
