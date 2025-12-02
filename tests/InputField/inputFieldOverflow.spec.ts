import { test, expect } from '@playwright/test';
import { getStorybookFrameLocator } from '../utils';

test.describe('InputField Overflow and CSS Mixins', () => {
  test('default overflow behavior - text wrapping', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-form-field-inputfield--input-field-input');
    const frame = getStorybookFrameLocator(page);
    const field = frame.locator('[data-container-id="inputFieldIdEleven"]');

    // Проверяем MainLabel (label) - должен переноситься
    const mainLabel = field.locator('label > div:first-child');
    await expect(mainLabel).toBeVisible();
    await expect(mainLabel).toHaveCSS('overflow-wrap', 'break-word');
    await expect(mainLabel).toHaveCSS('word-wrap', 'break-word');

    // Проверяем AdditionalLabel - должен обрезаться троеточием
    const additionalLabel = field.locator('label > div:last-child');
    await expect(additionalLabel).toBeVisible();
    await expect(additionalLabel).toHaveCSS('overflow', 'hidden');
    await expect(additionalLabel).toHaveCSS('text-overflow', 'ellipsis');
    await expect(additionalLabel).toHaveCSS('white-space', 'nowrap');

    // Проверяем ExtraText - должен переноситься
    // ExtraText находится в ExtrasContainer после инпута
    const extraText = field
      .locator('div')
      .filter({ hasText: /И дополнительный текст/ })
      .first();
    await expect(extraText).toBeVisible();
    await expect(extraText).toHaveCSS('overflow-wrap', 'normal');
    await expect(extraText).toHaveCSS('word-wrap', 'normal');
  });

  test('tooltip appears for additionalLabel on overflow', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-form-field-inputfield--input-field-input');
    const frame = getStorybookFrameLocator(page);
    const field = frame.locator('[data-container-id="inputFieldIdEleven"]');
    const additionalLabel = field.locator('label > div:last-child');

    await expect(additionalLabel).toBeVisible();

    // Проверяем, что текст обрезается (есть переполнение)
    const hasOverflow = await additionalLabel.evaluate((el) => {
      const htmlEl = el as HTMLElement;
      return htmlEl.scrollWidth > htmlEl.offsetWidth || htmlEl.scrollHeight > htmlEl.offsetHeight;
    });
    expect(hasOverflow).toBe(true);

    await additionalLabel.hover();
    await page.waitForTimeout(300);

    // Проверяем, что тултип появился
    const tooltip = frame.locator('[role="tooltip"]');
    await expect(tooltip).toBeVisible();

    // Проверяем содержимое тултипа
    const tooltipText = await tooltip.textContent();
    expect(tooltipText).toContain('Дополнительный лейбл');
  });

  test('tooltip is disabled when disableAdditionalLabelTooltip is true', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-form-field-inputfield--input-field-input');
    const frame = getStorybookFrameLocator(page);
    const field = frame.locator('[data-container-id="inputFieldIdTwelve"]');
    const additionalLabel = field.locator('label > div:last-child');

    await expect(additionalLabel).toBeVisible();

    // Проверяем, что текст обрезается (есть переполнение)
    const hasOverflow = await additionalLabel.evaluate((el) => {
      const htmlEl = el as HTMLElement;
      return htmlEl.scrollWidth > htmlEl.offsetWidth || htmlEl.scrollHeight > htmlEl.offsetHeight;
    });
    expect(hasOverflow).toBe(true);

    await additionalLabel.hover();
    await page.waitForTimeout(300);

    // Проверяем, что тултип НЕ появился (отключен через disableAdditionalLabelTooltip)
    const tooltip = frame.locator('[role="tooltip"]');
    await expect(tooltip).not.toBeVisible({ timeout: 1000 });
  });

  test('overflow detection works correctly', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-form-field-inputfield--input-field-input');
    const frame = getStorybookFrameLocator(page);

    // Тестируем поле с дефолтным поведением
    const fieldDefault = frame.locator('[data-container-id="inputFieldIdEleven"]');
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

    // Проверяем AdditionalLabel - должен иметь переполнение по ширине (ellipsis)
    const additionalLabel = fieldDefault.locator('label > div:last-child');
    const additionalLabelScrollWidth = await additionalLabel.evaluate((el) => (el as HTMLElement).scrollWidth);
    const additionalLabelOffsetWidth = await additionalLabel.evaluate((el) => (el as HTMLElement).offsetWidth);
    expect(additionalLabelScrollWidth).toBeGreaterThan(additionalLabelOffsetWidth);

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
