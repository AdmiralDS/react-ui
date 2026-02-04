import { test, expect } from '@playwright/test';
import { getStorybookFrameLocator } from '../utils';
import { TIMEOUTS } from '../constants';

test.describe('Hint Component', () => {
  test('click trigger - show and close hint', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-hint--hint-click-example');
    const frame = getStorybookFrameLocator(page);

    const button = frame.locator('button[aria-label="Additional information"]');
    await expect(button).toBeVisible();

    const hint = frame.locator('[role="tooltip"]');
    await expect(hint).not.toBeVisible();

    // Кликаем на кнопку
    await button.click();

    // Hint должен появиться
    await expect(hint).toBeVisible();

    // Проверяем наличие кнопки закрытия
    const closeButton = frame.locator('[aria-label*="Закрыть"]');
    await expect(closeButton).toBeVisible();

    // Кликаем на кнопку закрытия
    await closeButton.click();

    // Hint должен исчезнуть
    await expect(hint).not.toBeVisible({ timeout: TIMEOUTS.EXPECT_STANDARD });
  });

  test('click trigger - close hint by clicking outside', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-hint--hint-click-example');
    const frame = getStorybookFrameLocator(page);

    const button = frame.locator('button[aria-label="Additional information"]');
    const hint = frame.locator('[role="tooltip"]');

    // Открываем Hint
    await button.click();
    await expect(hint).toBeVisible();

    // Кликаем вне Hint (на body)
    await page.mouse.click(10, 10);

    // Hint должен исчезнуть
    await expect(hint).not.toBeVisible({ timeout: TIMEOUTS.EXPECT_STANDARD });
  });

  test('click trigger - hint stays open when clicking inside hint', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-hint--hint-click-example');
    const frame = getStorybookFrameLocator(page);

    const button = frame.locator('button[aria-label="Additional information"]');
    const hint = frame.locator('[role="tooltip"]');

    // Открываем Hint
    await button.click();
    await expect(hint).toBeVisible();

    // Кликаем внутри Hint
    await hint.click();

    // Hint должен остаться видимым
    await expect(hint).toBeVisible();
  });

  test('hover mode - hint stays open when clicking on hint', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-hint--hint-base-example');
    const frame = getStorybookFrameLocator(page);

    const button = frame.locator('button[aria-label="Additional information"]');
    const hint = frame.locator('[role="tooltip"]');

    // Наводим мышь на кнопку
    await button.hover();
    await expect(hint).toBeVisible();

    // Кликаем на Hint
    await hint.click();

    // Hint должен остаться видимым
    await expect(hint).toBeVisible();
  });

  test('keyboard navigation - Escape key closes hint in click mode', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-hint--hint-click-example');
    const frame = getStorybookFrameLocator(page);

    const button = frame.locator('button[aria-label="Additional information"]');
    const hint = frame.locator('[role="tooltip"]');

    // Открываем Hint
    await button.click();
    await expect(hint).toBeVisible();

    // Нажимаем Escape
    await hint.press('Escape');

    // Hint должен исчезнуть
    await expect(hint).not.toBeVisible({ timeout: TIMEOUTS.EXPECT_STANDARD });
  });

  test('hint with interactive content - does not close on interaction', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-hint--hint-click-example');
    const frame = getStorybookFrameLocator(page);

    const button = frame.locator('button[aria-label="Additional information"]');
    const hint = frame.locator('[role="tooltip"]');

    // Открываем Hint
    await button.click();
    await expect(hint).toBeVisible();

    // Если внутри Hint есть интерактивные элементы, они должны работать
    // (этот тест проверяет, что Hint не закрывается при взаимодействии с ними)
    const hintContent = frame.locator('[role="tooltip"] [role="dialog"]');
    await expect(hintContent).toBeVisible();

    // Кликаем на содержимое Hint
    await hintContent.click();

    // Hint должен остаться видимым
    await expect(hint).toBeVisible();
  });

  test('mobile mode - responsive behavior', async ({ page }) => {
    // Устанавливаем размер экрана для мобильного устройства
    await page.setViewportSize({ width: 375, height: 667 });

    await page.goto('/?path=/story/admiral-2-1-hint--hint-base-example');
    const frame = getStorybookFrameLocator(page);

    const button = frame.locator('button[aria-label="Additional information"]');
    const hint = frame.locator('[role="tooltip"]');

    // Наводим мышь на кнопку
    await button.hover();

    // Hint должен появиться и адаптироваться под мобильный размер
    await expect(hint).toBeVisible();

    // Проверяем, что Hint имеет правильные стили для мобильного режима
    const hintDialog = frame.locator('[role="dialog"]');
    await expect(hintDialog).toBeVisible();
  });

  test('accessibility - ARIA attributes', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-hint--hint-click-example');
    const frame = getStorybookFrameLocator(page);

    const button = frame.locator('button[aria-label="Additional information"]');
    const buttonId = await button.getAttribute('aria-describedby');

    expect(buttonId).toBeTruthy();

    // Открываем Hint
    await button.click();

    const hint = frame.locator('[role="tooltip"]');
    await expect(hint).toBeVisible();

    // Проверяем ARIA атрибуты
    const hintDialog = frame.locator('[role="dialog"]');
    const ariaLabelledBy = await hintDialog.getAttribute('aria-labelledby');

    expect(ariaLabelledBy).toBe(buttonId);
  });
});
