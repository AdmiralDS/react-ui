import { test, expect } from '@playwright/test';
import { getStorybookFrameLocator, clickAndWait } from '../utils';

test.describe('TimePicker - dropdown and selection', () => {
  test('opens dropdown via icon and selects an option', async ({ page, browserName }) => {
    await page.goto('/?path=/story/admiral-2-1-input-timepicker--time-picker-simple');
    const frame = getStorybookFrameLocator(page);

    // Wait for iframe to load (WebKit needs more time)
    if (browserName === 'webkit') {
      await page.waitForTimeout(500);
    }

    const input = frame.locator('.time-picker-native-input');
    await expect(input).toBeVisible({ timeout: browserName === 'webkit' ? 10000 : 3000 });

    const iconButton = frame.locator('.time-picker-icon-panel svg').last();
    await clickAndWait(iconButton, page);

    const dropdown = frame.locator('.dropContainerClass');
    await expect(dropdown).toBeVisible();

    const option = dropdown.getByText('09:00');
    await option.click();

    await expect(input).toHaveValue('09:00');
  });

  test('dropdown closes on outside click', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-input-timepicker--time-picker-simple');
    const frame = getStorybookFrameLocator(page);

    const iconButton = frame.locator('.time-picker-icon-panel svg').last();
    await clickAndWait(iconButton, page);

    const dropdown = frame.locator('.dropContainerClass');
    await expect(dropdown).toBeVisible();

    const inputBox = frame.locator('.time-picker-container');
    await inputBox.click({ position: { x: 4, y: 10 } });
    await expect(dropdown).not.toBeVisible({ timeout: 50 });

    await clickAndWait(iconButton, page);
    await expect(dropdown).toBeVisible();

    const iconPanel = frame.locator('.time-picker-icon-panel');
    const panelBox = await iconPanel.boundingBox();
    if (!panelBox) throw new Error('Icon panel bounding box not found');
    // Кликаем в правый паддинг панели IconPanelAfter, чтобы не попасть по svg
    const paddingX = panelBox.x + panelBox.width - 2;
    const paddingY = panelBox.y + panelBox.height / 2;
    await page.mouse.click(paddingX, paddingY);

    await expect(dropdown).not.toBeVisible({ timeout: 100 });
  });
});
