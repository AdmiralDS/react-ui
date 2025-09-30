import type { Locator, Page } from '@playwright/test';
import { expect } from '@playwright/test';

/**
 * Делает click по элементу
 * и ждет timeout (по умолчанию 400) мс (для отработки анимации).
 */
export async function clickAndWait(el: Locator, page: Page, timeout?: number) {
  await el.click();
  // ждём анимацию
  await page.waitForTimeout(timeout || 400);
}

/**
 * Программно меняет размер элемента через inline-стили
 * и дожидается применения новых размеров.
 */
export async function resizeElement(locator: Locator, width?: number, height?: number) {
  await locator.evaluate(
    (el, { width, height }) => {
      if (width) (el as HTMLElement).style.width = `${width}px`;
      if (height) (el as HTMLElement).style.height = `${height}px`;
    },
    { width, height },
  );

  // ждём, пока Playwright увидит изменения
  if (width) await expect(locator).toHaveCSS('width', `${width}px`);
  if (height) await expect(locator).toHaveCSS('height', `${height}px`);
}
