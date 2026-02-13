import { test, expect } from '@playwright/test';
import { getStorybookFrameLocator } from '../utils';
import { UNDO_SHORTCUT } from '../constants';

test('native undo works', async ({ page, browserName }) => {
  await page.goto('/?path=/story/admiral-2-1-form-field-textfield--text-field-input');
  const frame = getStorybookFrameLocator(page);
  const textarea = frame.locator('[data-container-id="textFieldIdOne"] textarea').first();

  // очищаем поле и вставляем текст для теста
  await textarea.fill('');
  await textarea.click();
  // имитируем ввод с клавиатуры по одному символу
  await textarea.pressSequentially('hello');

  const valueBeforeUndo = await textarea.inputValue();
  await page.keyboard.press(UNDO_SHORTCUT);

  // разделение обусловлено реализацией системы undo/redo в разных движках
  if (browserName === 'chromium') {
    await expect(textarea).toHaveValue('hell');
  } else {
    await expect(textarea).not.toHaveValue(valueBeforeUndo);
  }
});
