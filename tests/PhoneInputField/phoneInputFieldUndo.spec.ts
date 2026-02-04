import { test, expect } from '@playwright/test';
import { getStorybookFrameLocator } from '../utils';
import { UNDO_SHORTCUT } from '../constants';

test('native undo is disabled for PhoneInputField', async ({ page }) => {
  await page.goto('/?path=/story/admiral-2-1-form-field-phoneinputfield--phone-input-field-example');
  const frame = getStorybookFrameLocator(page);
  const phoneInput = frame.locator('[data-container-id="phoneInputFieldIdOne"] .text-input-native-input');

  await phoneInput.click();
  await phoneInput.fill('+79991234567');
  const valueAfterFill = await phoneInput.inputValue();

  await page.keyboard.press(UNDO_SHORTCUT);

  await expect(phoneInput).toHaveValue(valueAfterFill);
});
