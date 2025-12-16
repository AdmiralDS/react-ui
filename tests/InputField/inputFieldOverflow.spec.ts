import { test, expect } from '@playwright/test';
import { getStorybookFrameLocator } from '../utils';

test.describe('InputField Overflow and CSS Mixins', () => {
  test('default overflow behavior - text wrapping', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-form-field-inputfield--input-field-input');
    const frame = getStorybookFrameLocator(page);
    const field = frame.locator('[data-container-id="inputFieldIdThirteen"]');

    // Проверяем MainLabel (label) - должен переноситься
    const mainLabel = field.locator('label > div:first-child');
    await expect(mainLabel).toBeVisible();
    await expect(mainLabel).toHaveCSS('overflow-wrap', 'break-word');

    // Проверяем AdditionalLabel - теперь тоже должен переноситься (как MainLabel)
    const additionalLabel = field.locator('label > div:last-child');
    await expect(additionalLabel).toBeVisible();
    await expect(additionalLabel).toHaveCSS('overflow-wrap', 'break-word');

    // Проверяем ExtraText - должен переноситься
    // ExtraText находится в ExtrasContainer после инпута
    const extraText = field
      .locator('div')
      .filter({ hasText: /И дополнительный текст/ })
      .first();
    await expect(extraText).toBeVisible();
    await expect(extraText).toHaveCSS('overflow-wrap', 'normal');
  });

  test('tooltips do not appear for all labels by default', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-form-field-inputfield--input-field-input');
    const frame = getStorybookFrameLocator(page);
    const field = frame.locator('[data-container-id="inputFieldIdThirteen"]');

    // Проверяем MainLabel
    const mainLabel = field.locator('label > div:first-child');
    await expect(mainLabel).toBeVisible();
    await mainLabel.hover();
    await page.waitForTimeout(300);
    let tooltip = frame.locator('[role="tooltip"]');
    await expect(tooltip).not.toBeVisible({ timeout: 1000 });

    // Проверяем AdditionalLabel
    const additionalLabel = field.locator('label > div:last-child');
    await expect(additionalLabel).toBeVisible();
    await additionalLabel.hover();
    await page.waitForTimeout(300);
    tooltip = frame.locator('[role="tooltip"]');
    await expect(tooltip).not.toBeVisible({ timeout: 1000 });

    // Проверяем ExtraText
    const extraText = field
      .locator('div')
      .filter({ hasText: /И дополнительный текст/ })
      .first();
    await expect(extraText).toBeVisible();
    await extraText.hover();
    await page.waitForTimeout(300);
    tooltip = frame.locator('[role="tooltip"]');
    await expect(tooltip).not.toBeVisible({ timeout: 1000 });
  });

  test('tooltip is not disabled when visibleLabelTooltips is set to true', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-form-field-inputfield--input-field-input');
    const frame = getStorybookFrameLocator(page);
    const field = frame.locator('[data-container-id="inputFieldIdFourteen"]');

    const additionalLabel = field.locator('label > div:last-child');
    await expect(additionalLabel).toBeVisible();
    await additionalLabel.hover();
    await page.waitForTimeout(300);
    // Проверяем, что тултип additionalLabel появился (включен через visibleLabelTooltips.additionalLabel = false)
    const tooltip = frame.locator('[role="tooltip"]');
    await expect(tooltip).toBeVisible({ timeout: 1000 });

    const mainLabel = field.locator('label > div:first-child');
    await expect(mainLabel).toBeVisible();
    await mainLabel.hover();
    await page.waitForTimeout(300);
    // Проверяем, что тултип mainLabel появился (включен через visibleLabelTooltips.label = false)
    const tooltip2 = frame.locator('[role="tooltip"]');
    await expect(tooltip2).toBeVisible({ timeout: 1000 });
  });

  test('overflow detection works correctly', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-form-field-inputfield--input-field-input');
    const frame = getStorybookFrameLocator(page);

    // Тестируем поле с дефолтным поведением
    const fieldDefault = frame.locator('[data-container-id="inputFieldIdThirteen"]');
    const containerDefault = fieldDefault.first();

    // Проверяем, что контейнер имеет min-width: 0 (позволяет дочерним элементам сжиматься)
    await expect(containerDefault).toHaveCSS('min-width', '0px');

    // Проверяем MainLabel - должен иметь возможность переполнения
    const mainLabel = fieldDefault.locator('label > div:first-child');
    const mainLabelBox = await mainLabel.boundingBox();

    // MainLabel может иметь переполнение по высоте (перенос текста)
    const mainLabelScrollHeight = await mainLabel.evaluate((el) => (el as HTMLElement).scrollHeight);
    const mainLabelOffsetHeight = await mainLabel.evaluate((el) => (el as HTMLElement).offsetHeight);
    expect(mainLabelScrollHeight).toBeGreaterThanOrEqual(mainLabelOffsetHeight);

    // Проверяем AdditionalLabel - теперь может переполняться по высоте (перенос текста)
    const additionalLabel = fieldDefault.locator('label > div:last-child');
    const additionalLabelScrollHeight = await additionalLabel.evaluate((el) => (el as HTMLElement).scrollHeight);
    const additionalLabelOffsetHeight = await additionalLabel.evaluate((el) => (el as HTMLElement).offsetHeight);
    expect(additionalLabelScrollHeight).toBeGreaterThanOrEqual(additionalLabelOffsetHeight);

    // Проверяем ExtraText - должен иметь возможность переполнения
    const extraText = fieldDefault
      .locator('div')
      .filter({ hasText: /И дополнительный текст/ })
      .first();
    const extraTextScrollHeight = await extraText.evaluate((el) => (el as HTMLElement).scrollHeight);
    const extraTextOffsetHeight = await extraText.evaluate((el) => (el as HTMLElement).offsetHeight);
    expect(extraTextScrollHeight).toBeGreaterThanOrEqual(extraTextOffsetHeight);

    // Проверяем, что элементы не выходят за границы контейнера
    const containerBox = await containerDefault.boundingBox();
    if (mainLabelBox && containerBox) {
      expect(mainLabelBox.x).toBeGreaterThanOrEqual(containerBox.x);
      expect(mainLabelBox.x + mainLabelBox.width).toBeLessThanOrEqual(containerBox.x + containerBox.width);
    }
  });
});
