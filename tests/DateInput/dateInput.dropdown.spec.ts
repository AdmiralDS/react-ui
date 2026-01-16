import { test, expect } from '@playwright/test';
import { getStorybookFrameLocator, clickAndWait } from '../utils';

test.describe('DateInput - dropdown and selection', () => {
  test('opens dropdown via icon and selects a date', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-input-dateinput--date-input-playground');
    const frame = getStorybookFrameLocator(page);

    const input = frame.locator('.text-input-native-input');
    await expect(input).toBeVisible({ timeout: 3000 });

    const iconButton = frame.locator('[data-role="icon-pane-after"] svg').last();
    await clickAndWait(iconButton, page);

    const dropdown = frame.locator('.dropContainerClass');
    await expect(dropdown).toBeVisible();

    const todayButton = dropdown.getByRole('button', { name: /сегодня|today/i }).first();
    if (await todayButton.isVisible().catch(() => false)) {
      await todayButton.click();
      await expect(dropdown).not.toBeVisible({ timeout: 1000 });
    }
  });

  test('dropdown closes on outside click', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-input-dateinput--date-input-playground');
    const frame = getStorybookFrameLocator(page);

    const iconButton = frame.locator('[data-role="icon-pane-after"] svg').last();
    await clickAndWait(iconButton, page);

    const dropdown = frame.locator('.dropContainerClass');
    await expect(dropdown).toBeVisible();

    const input = frame.locator('.text-input-native-input');
    const inputBox = await input.boundingBox();
    if (!inputBox) throw new Error('Input bounding box not found');
    await page.mouse.click(inputBox.x - 8, inputBox.y + inputBox.height / 2);
    await expect(dropdown).not.toBeVisible({ timeout: 100 });

    await clickAndWait(iconButton, page);
    await expect(dropdown).toBeVisible();

    const iconPanel = frame.locator('[data-role="icon-pane-after"]');
    const panelBox = await iconPanel.boundingBox();
    if (!panelBox) throw new Error('Icon panel bounding box not found');
    const paddingX = panelBox.x + panelBox.width - 2;
    const paddingY = panelBox.y + panelBox.height / 2;
    await page.mouse.click(paddingX, paddingY);

    await expect(dropdown).not.toBeVisible({ timeout: 100 });
  });
});
