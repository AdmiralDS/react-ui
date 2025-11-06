import { test, expect } from '@playwright/test';
import { getStorybookFrameLocator, UNDO_SHORTCUT } from '../utils';

test('native undo reverts value for TextInput', async ({ page, browserName }) => {
  await page.goto('/?path=/story/admiral-2-1-input-textinput--text-input-playground');
  const frame = getStorybookFrameLocator(page);
  const textInput = frame.locator('.text-input-native-input');

  await textInput.click();
  await textInput.fill('First value');
  await textInput.fill('Second value');

  const valueBeforeUndo = await textInput.inputValue();
  await page.keyboard.press(UNDO_SHORTCUT);

  // разделение обусловлено реализацией системы undo/redo в разных движках
  if (browserName === 'webkit') {
    await expect(textInput).not.toHaveValue(valueBeforeUndo);
  } else {
    await expect(textInput).toHaveValue('First value');
  }
});
