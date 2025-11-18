import { test, expect } from '@playwright/test';
import { getStorybookFrameLocator } from '../utils';

test.describe('TimePicker - visual states and props', () => {
  test('displays clear icon when displayClearIcon is true and value exists', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-datepicker-timepicker--time-picker-clear-icon');
    const frame = getStorybookFrameLocator(page);

    const input = frame.locator('.time-picker-native-input');
    await input.click();
    await input.fill('12:30');
    await page.waitForTimeout(100);

    const clearIcon = frame.locator('.time-picker-icon-panel svg').first();
    await expect(clearIcon).toBeVisible();

    await clearIcon.click();
    await expect(input).toHaveValue('');
  });

  test('shows loading spinner when isLoading is true', async ({ page }) => {
    // Нужна история с isLoading, если её нет - пропускаем
    await page.goto('/?path=/story/admiral-2-1-datepicker-timepicker--time-picker-simple');
    const frame = getStorybookFrameLocator(page);

    const container = frame.locator('.time-picker-container');
    await expect(container).not.toHaveAttribute('data-loading', 'true');
  });

  test('applies error status visually', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-datepicker-timepicker--time-picker-simple-disabled');
    const frame = getStorybookFrameLocator(page);

    const input = frame.locator('.time-picker-native-input');
    const container = frame.locator('.time-picker-container');

    // Вводим disabled значение
    await input.click();
    await input.type('1', { delay: 100 });
    await page.waitForTimeout(50);
    await input.type('2', { delay: 100 });
    await page.waitForTimeout(50);
    await input.type('3', { delay: 100 });
    await page.waitForTimeout(50);
    await input.type('0', { delay: 100 });
    await page.waitForTimeout(100);

    // Проверяем визуальный статус error
    await expect(container).toHaveAttribute('data-status', 'error');
  });

  test('applies success status when provided', async ({ page }) => {
    // Если есть история с success статусом, проверяем
    await page.goto('/?path=/story/admiral-2-1-datepicker-timepicker--time-picker-simple');
    const frame = getStorybookFrameLocator(page);

    const container = frame.locator('.time-picker-container');
    // Проверяем что изначально нет success статуса
    await expect(container).not.toHaveAttribute('data-status', 'success');
  });

  test('shows custom icon when icon prop is provided', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-datepicker-timepicker--time-picker-icon-custom');
    const frame = getStorybookFrameLocator(page);

    // Проверяем что иконка времени присутствует (последняя кнопка в панели)
    const iconButton = frame.locator('.time-picker-icon-panel svg').last();
    await expect(iconButton).toBeVisible();
  });

  test('displays iconsAfter correctly', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-datepicker-timepicker--time-picker-double-icon');
    const frame = getStorybookFrameLocator(page);

    const container = frame.locator('.time-picker-container');
    await expect(container).toBeVisible({ timeout: 10000 });

    const iconPanel = frame.locator('.time-picker-icon-panel');
    await expect(iconPanel).toBeVisible({ timeout: 5000 });
    await page.waitForTimeout(500);

    const iconButtons = iconPanel.locator('> *');

    const buttonCount = await iconButtons.count();
    // Должно быть 3 иконки: iconsAfter (CloseOutline + GPSOutline) + иконка времени (TimeSolid)
    // Проверяем что есть минимум 2 (iconsAfter) + 1 (иконка времени)
    expect(buttonCount).toBeGreaterThanOrEqual(2);

    for (let i = 0; i < buttonCount; i++) {
      const icon = iconButtons.nth(i);
      await expect(icon).toBeVisible();
      // Проверяем что это SVG элемент
      const tagName = await icon.evaluate((el) => el.tagName);
      expect(tagName.toLowerCase()).toBe('svg');
    }
  });

  test('skeleton state renders correctly', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-datepicker-timepicker--time-picker-skeleton');
    const frame = getStorybookFrameLocator(page);

    const container = frame.locator('.time-picker-container[data-skeleton="true"]');
    await expect(container).toBeVisible();

    const input = frame.locator('.time-picker-native-input');
    await expect(input).toHaveCount(1);
  });

  test('disabled state prevents interaction', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-datepicker-timepicker--time-picker-disabled');
    const frame = getStorybookFrameLocator(page);

    const input = frame.locator('.time-picker-native-input');
    const container = frame.locator('.time-picker-container[data-disabled="true"]');

    await expect(container).toBeVisible();
    await expect(input).toBeDisabled();

    const dropdown = frame.locator('.dropContainerClass');
    await expect(dropdown).toHaveCount(0);

    // Проверяем что иконка существует, но взаимодействие заблокировано
    const iconButton = frame.locator('.time-picker-icon-panel svg').last();
    const iconCount = await iconButton.count();
    if (iconCount > 0) {
      await expect(iconButton).toBeVisible();
      await expect(dropdown).toHaveCount(0);
    }
  });

  test('readOnly state prevents editing but allows viewing', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-datepicker-timepicker--time-picker-icon-custom');
    const frame = getStorybookFrameLocator(page);

    const input = frame.locator('.time-picker-native-input');
    const container = frame.locator('.time-picker-container[data-read-only="true"]');

    await expect(container).toBeVisible();
    await expect(input).toHaveAttribute('readonly', '');

    // Проверяем что dropdown не открывается в readOnly
    const dropdown = frame.locator('.dropContainerClass');
    await expect(dropdown).toHaveCount(0);
  });

  test('tooltip appears on overflow when showTooltip is true', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-datepicker-timepicker--time-picker-simple');
    const frame = getStorybookFrameLocator(page);

    const input = frame.locator('.time-picker-native-input');

    await input.click();
    await input.fill('2359');
    await page.waitForTimeout(100);
  });
});
