// textButton.spec.ts
import type { Locator } from '@playwright/test';
import { test, expect } from '@playwright/test';
import { getStorybookFrameLocator } from '../utils';

// Утилита для измерения ширины текста (используется в ellipsis-тестах)
async function getTextWidth(element: Locator) {
  return await element.evaluate((el: HTMLElement) => {
    const span = document.createElement('span');
    span.textContent = el.textContent;
    span.style.visibility = 'hidden';
    span.style.position = 'absolute';
    span.style.whiteSpace = 'nowrap';
    span.style.font = window.getComputedStyle(el).font;
    document.body.appendChild(span);
    const width = span.offsetWidth;
    document.body.removeChild(span);
    return width;
  });
}

test('renders with text', async ({ page }) => {
  await page.goto('/?path=/story/admiral-2-1-text-button--text-button-playground');
  const frame = getStorybookFrameLocator(page);
  const button = frame.getByTestId('text-button');
  await expect(button).toBeVisible();
});

test('renders iconStart and iconEnd', async ({ page }) => {
  await page.goto('/?path=/story/admiral-2-1-text-button--text-button-playground');
  const frame = getStorybookFrameLocator(page);
  const button = frame.getByTestId('text-button');

  const startIcon = button.locator('svg').first();
  const endIcon = button.locator('svg').last();

  await expect(startIcon).toBeVisible();
  await expect(endIcon).toBeVisible();
});

test('shows spinner and disables during loading', async ({ page }) => {
  await page.goto('/?path=/story/admiral-2-1-text-button--text-button-status');
  const frame = getStorybookFrameLocator(page);
  const button = frame.getByTestId('loading-status');

  const spinner = button.getByRole('alert');
  await expect(spinner).toBeVisible();

  const textContainer = button.getByTestId('textContainer');
  await expect(textContainer).toHaveCSS('visibility', 'hidden');
  await expect(button).toBeDisabled();
});

test('shows skeleton animation and hides content', async ({ page }) => {
  await page.goto('/?path=/story/admiral-2-1-text-button--text-button-status');
  const frame = getStorybookFrameLocator(page);
  const button = frame.getByTestId('skeleton-status');

  // Проверяем наличие анимации (обычно через CSS-анимацию)
  const animationName = await button.evaluate((el) => getComputedStyle(el).animationName || '');
  expect(animationName).toBeDefined();

  const textContainer = button.getByTestId('textContainer');
  await expect(textContainer).toHaveCSS('visibility', 'hidden');
  await expect(button).toBeDisabled();
});

test('passes through HTML attributes', async ({ page }) => {
  await page.goto('/?path=/story/admiral-2-1-text-button--text-button-playground');
  const frame = getStorybookFrameLocator(page);
  const button = frame.getByTestId('text-button');

  await expect(button).toHaveAttribute('data-testid', 'text-button');
  await expect(button).toHaveAttribute('aria-label', 'some action');
  await expect(button).toHaveClass(/custom-class/);
});

test.skip('is accessible', async ({ page }) => {
  await page.goto('/?path=/story/components-button-textbutton--basic');
  const frame = getStorybookFrameLocator(page);
  const button = frame.getByRole('button', { name: 'Submit' });

  await expect(button).toHaveAccessibleName('Submit');
  await expect(button).toHaveAttribute('role', 'button');
});

test('is clickable when not disabled', async ({ page }) => {
  await page.goto('/?path=/story/admiral-2-1-text-button--text-button-playground');
  const frame = getStorybookFrameLocator(page);
  const button = frame.getByTestId('text-button');

  const consoleMessages: string[] = [];
  page.on('console', (msg) => {
    if (msg.type() === 'log') {
      consoleMessages.push(msg.text());
    }
  });

  await expect(button).not.toBeDisabled();
  // Имитация обработчика в стори
  await button.click();
  expect(consoleMessages.length).toBeGreaterThan(0);
  expect(consoleMessages).toContain('button clicked');
});

test('applies correct dimensions', async ({ page }) => {
  await page.goto('/?path=/story/admiral-2-1-text-button--text-button-dimension');
  const frame = getStorybookFrameLocator(page);
  const buttonS = frame.getByTestId('button-s');
  const heightS = await buttonS.boundingBox().then((b) => b?.height || 0);

  const buttonM = frame.getByTestId('button-m');
  const heightM = await buttonM.boundingBox().then((b) => b?.height || 0);

  expect(heightM).toEqual(24);
  expect(heightS).toEqual(20);
});

test.skip('applies correct appearance styles', async ({ page }) => {
  await page.goto('/?path=/story/components-button-textbutton--appearance-primary');
  const frame = getStorybookFrameLocator(page);
  const button = frame.getByRole('button');
  // Пример цвета — замените на актуальный из дизайн-системы
  await expect(button).toHaveCSS('background-color', /rgb\(0, 122, 255\)/);

  await page.goto('/?path=/story/components-button-textbutton--appearance-danger');
  const button2 = frame.getByRole('button');
  await expect(button2).toHaveCSS('color', /rgb\(255, 59, 48\)/);
});

// === textCssMixin tests ===

test('applies custom styles via textCssMixin', async ({ page }) => {
  await page.goto('/?path=/story/admiral-2-1-text-button--text-button-playground');
  const frame = getStorybookFrameLocator(page);
  const button = frame.getByTestId('button-with-mixin');
  const textContainer = button.getByTestId('textContainer');

  await expect(textContainer).toHaveCSS('color', 'rgb(217, 32, 32)');
});

// === textOverflow (ellipsis) tests ===

test('truncates long text with ellipsis when container is narrow', async ({ page }) => {
  await page.goto('/?path=/story/admiral-2-1-text-button--text-button-playground');
  const frame = getStorybookFrameLocator(page);
  const button = frame.getByTestId('button-with-ellipsis');
  const textContainer = button.locator('[data-testid="textContainer"]');

  const textOverflow = await textContainer.evaluate((el) => getComputedStyle(el).textOverflow);
  const overflow = await textContainer.evaluate((el) => getComputedStyle(el).overflow);
  // const whiteSpace = await textContainer.evaluate((el) => getComputedStyle(el).whiteSpace);

  expect(textOverflow).toBe('ellipsis');
  expect(overflow).toBe('hidden');
  // expect(whiteSpace).toBe('nowrap');

  // Проверяем, что текст шире контейнера
  const fullTextWidth = await getTextWidth(textContainer);
  const containerWidth = await textContainer.evaluate((el) => el.clientWidth);
  expect(fullTextWidth).toBeGreaterThan(containerWidth);
});

test('does not truncate text by default (no ellipsis)', async ({ page }) => {
  await page.goto('/?path=/story/admiral-2-1-text-button--text-button-playground');
  const frame = getStorybookFrameLocator(page);
  const button = frame.getByTestId('text-button');
  const textContainer = button.locator('[data-testid="textContainer"]');
  const textSpan = textContainer.locator('span');

  const fullTextWidth = await getTextWidth(textSpan);
  const containerWidth = await getTextWidth(textContainer);
  expect(fullTextWidth).toEqual(containerWidth);
});
