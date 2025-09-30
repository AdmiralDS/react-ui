import type { Locator, Page } from '@playwright/test';

export async function clickAndWait(el: Locator, page: Page) {
  await el.click();
  // ждём анимацию
  await page.waitForTimeout(400);
}
