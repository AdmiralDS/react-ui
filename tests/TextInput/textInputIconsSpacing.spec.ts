import { test, expect } from '@playwright/test';

import { getStorybookFrameLocator } from '../utils';

const STORY_PATH = '/?path=/story/admiral-2-1-input-textinput--text-input-with-icon';

test.describe('TextInput icons spacing', () => {
  test('reserves space for nested icons and keeps them accessible', async ({ page }) => {
    await page.goto(STORY_PATH);
    const frame = getStorybookFrameLocator(page);

    // Третий инпут в истории — с тремя иконками + крестик
    const targetInput = frame.locator('.text-input-native-input').nth(2);
    await targetInput.click();
    await targetInput.fill(
      'Очень-очень-очень длинный текст для проверки того, что иконки точно-точно-точно не перекрывают содержимое инпута',
    );

    const container = targetInput.locator('xpath=..');
    const iconPanel = container.locator('[data-role="icon-pane-after"]');
    await expect(iconPanel).toHaveCount(1);

    // 3 пользовательские иконки + иконка очистки
    const iconButtons = iconPanel.locator(':scope > *');
    await expect(iconButtons).toHaveCount(4);

    const paddingRight = await targetInput.evaluate((el) =>
      parseFloat(window.getComputedStyle(el).paddingRight || '0'),
    );
    expect(paddingRight).toBeGreaterThanOrEqual(140); // 16 + (24 + 8) * 4 = 144px

    const [inputBox, panelBox] = await Promise.all([targetInput.boundingBox(), iconPanel.boundingBox()]);
    expect(inputBox && panelBox).toBeTruthy();

    if (inputBox && panelBox) {
      const safeTextAreaEnd = inputBox.x + inputBox.width - paddingRight;
      expect(panelBox.x).toBeGreaterThanOrEqual(safeTextAreaEnd - 1);
    }
  });
});
