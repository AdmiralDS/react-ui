import { test, expect } from '@playwright/test';
import { getStorybookFrameLocator, UNDO_SHORTCUT } from '../utils';

test('native undo removes last character for TextField', async ({ page }) => {
  await page.goto('/?path=/story/admiral-2-1-form-field-textfield--text-field-input');
  const frame = getStorybookFrameLocator(page);
  const textarea = frame.locator('[data-container-id="textFieldIdOne"] textarea').first();

  await textarea.click();
  await textarea.fill('hello');
  await textarea.pressSequentially('a');

  await page.keyboard.press(UNDO_SHORTCUT);

  await expect(textarea).toHaveValue('hello');
});
