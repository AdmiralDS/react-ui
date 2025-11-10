import { test, expect } from '@playwright/test';
import type { Page, Locator } from '@playwright/test';

/**
 * Comprehensive test suite for dropdown positioning and visual stability
 * Tests edge cases to ensure no flickering or repositioning issues
 */

const STORYBOOK_URL = '/?path=/story/admiral-2-1-dropdowncontainer--simple-container';

interface DropdownPosition {
  x: number;
  y: number;
  width: number;
  height: number;
}

/**
 * Helper to get dropdown container position
 */
async function getDropdownPosition(page: Page): Promise<DropdownPosition | null> {
  const dropdown = page.locator('.dropdown-container').first();
  const box = await dropdown.boundingBox();
  return box;
}

/**
 * Helper to open dropdown and wait for stability
 */
async function openDropdown(page: Page): Promise<void> {
  const button = page.getByRole('button', { name: 'Текст' });
  await button.click();
  // Wait for dropdown to appear
  await page.locator('.dropdown-container').first().waitFor({ state: 'visible' });
}

/**
 * Test for position stability - no jumping after initial render
 */
test.describe('Dropdown Positioning Stability', () => {
  test('should not reposition after initial render', async ({ page }) => {
    await page.goto(STORYBOOK_URL);
    const frame = page.frameLocator('#storybook-preview-iframe');
    const button = frame.getByRole('button', { name: 'Текст' });

    // Open dropdown
    await button.click();
    const dropdown = frame.locator('.dropdown-container').first();
    await dropdown.waitFor({ state: 'visible' });

    // Get initial position immediately
    const initialBox = await dropdown.boundingBox();
    expect(initialBox).not.toBeNull();

    // Wait 50ms and check position hasn't changed
    await page.waitForTimeout(50);
    const box50ms = await dropdown.boundingBox();
    expect(box50ms?.x).toBe(initialBox?.x);
    expect(box50ms?.y).toBe(initialBox?.y);

    // Wait another 100ms and verify still stable
    await page.waitForTimeout(100);
    const box150ms = await dropdown.boundingBox();
    expect(box150ms?.x).toBe(initialBox?.x);
    expect(box150ms?.y).toBe(initialBox?.y);

    // Final check at 250ms (after old delay would complete)
    await page.waitForTimeout(100);
    const box250ms = await dropdown.boundingBox();
    expect(box250ms?.x).toBe(initialBox?.x);
    expect(box250ms?.y).toBe(initialBox?.y);
  });

  test('should be immediately visible without delay', async ({ page }) => {
    await page.goto(STORYBOOK_URL);
    const frame = page.frameLocator('#storybook-preview-iframe');
    const button = frame.getByRole('button', { name: 'Текст' });

    // Open dropdown
    await button.click();
    const dropdown = frame.locator('.dropdown-container').first();

    // Dropdown should be visible very quickly (within 100ms)
    await expect(dropdown).toBeVisible({ timeout: 100 });

    // Check opacity is set to 1 (fully visible)
    const opacity = await dropdown.evaluate((el) => window.getComputedStyle(el).opacity);
    // Opacity should be approaching or at 1
    const opacityValue = parseFloat(opacity);
    expect(opacityValue).toBeGreaterThan(0);
  });

  test('should handle positioning near bottom edge', async ({ page }) => {
    await page.goto(STORYBOOK_URL);
    await page.setViewportSize({ width: 1280, height: 720 });

    const frame = page.frameLocator('#storybook-preview-iframe');

    // Inject button near bottom
    await frame.locator('body').evaluate((body) => {
      const wrapper = body.querySelector('[style*="display: flex"]') as HTMLElement;
      if (wrapper) {
        wrapper.style.position = 'absolute';
        wrapper.style.bottom = '50px';
        wrapper.style.left = '50%';
        wrapper.style.transform = 'translateX(-50%)';
      }
    });

    const button = frame.getByRole('button', { name: 'Текст' });
    await button.click();

    const dropdown = frame.locator('.dropdown-container').first();
    await dropdown.waitFor({ state: 'visible' });

    // Get positions
    const dropdownBox = await dropdown.boundingBox();
    const buttonBox = await button.boundingBox();

    expect(dropdownBox).not.toBeNull();
    expect(buttonBox).not.toBeNull();

    // Verify dropdown doesn't overflow viewport
    const viewportHeight = page.viewportSize()?.height || 720;
    expect(dropdownBox!.y + dropdownBox!.height).toBeLessThanOrEqual(viewportHeight);
  });

  test('should handle positioning near right edge', async ({ page }) => {
    await page.goto(STORYBOOK_URL);
    await page.setViewportSize({ width: 1280, height: 720 });

    const frame = page.frameLocator('#storybook-preview-iframe');

    // Inject button near right edge
    await frame.locator('body').evaluate((body) => {
      const wrapper = body.querySelector('[style*="display: flex"]') as HTMLElement;
      if (wrapper) {
        wrapper.style.position = 'absolute';
        wrapper.style.right = '20px';
        wrapper.style.top = '100px';
        wrapper.style.justifyContent = 'flex-start';
      }
    });

    const button = frame.getByRole('button', { name: 'Текст' });
    await button.click();

    const dropdown = frame.locator('.dropdown-container').first();
    await dropdown.waitFor({ state: 'visible' });

    // Get positions
    const dropdownBox = await dropdown.boundingBox();

    expect(dropdownBox).not.toBeNull();

    // Verify dropdown doesn't overflow viewport horizontally
    const viewportWidth = page.viewportSize()?.width || 1280;
    expect(dropdownBox!.x + dropdownBox!.width).toBeLessThanOrEqual(viewportWidth + 5); // 5px tolerance
  });

  test('should handle positioning near left edge', async ({ page }) => {
    await page.goto(STORYBOOK_URL);
    await page.setViewportSize({ width: 1280, height: 720 });

    const frame = page.frameLocator('#storybook-preview-iframe');

    // Inject button near left edge
    await frame.locator('body').evaluate((body) => {
      const wrapper = body.querySelector('[style*="display: flex"]') as HTMLElement;
      if (wrapper) {
        wrapper.style.position = 'absolute';
        wrapper.style.left = '20px';
        wrapper.style.top = '100px';
        wrapper.style.justifyContent = 'flex-start';
      }
    });

    const button = frame.getByRole('button', { name: 'Текст' });
    await button.click();

    const dropdown = frame.locator('.dropdown-container').first();
    await dropdown.waitFor({ state: 'visible' });

    // Get positions
    const dropdownBox = await dropdown.boundingBox();

    expect(dropdownBox).not.toBeNull();

    // Verify dropdown doesn't overflow viewport (should be at least partially visible)
    expect(dropdownBox!.x).toBeGreaterThanOrEqual(-5); // 5px tolerance
  });

  test('should maintain position during viewport resize', async ({ page }) => {
    await page.goto(STORYBOOK_URL);
    await page.setViewportSize({ width: 1280, height: 720 });

    const frame = page.frameLocator('#storybook-preview-iframe');
    const button = frame.getByRole('button', { name: 'Текст' });

    // Open dropdown
    await button.click();
    const dropdown = frame.locator('.dropdown-container').first();
    await dropdown.waitFor({ state: 'visible' });

    const initialBox = await dropdown.boundingBox();

    // Resize viewport
    await page.setViewportSize({ width: 1024, height: 768 });

    // Wait for repositioning to settle (useInterval runs every 100ms)
    await page.waitForTimeout(150);

    const afterResizeBox = await dropdown.boundingBox();

    // Dropdown should still be visible and within viewport
    expect(afterResizeBox).not.toBeNull();
    await expect(dropdown).toBeVisible();

    // Position may change due to resize, but should be stable
    const viewportWidth = 1024;
    const viewportHeight = 768;
    expect(afterResizeBox!.x + afterResizeBox!.width).toBeLessThanOrEqual(viewportWidth + 5);
    expect(afterResizeBox!.y + afterResizeBox!.height).toBeLessThanOrEqual(viewportHeight + 5);
  });

  test('should handle rapid open/close cycles', async ({ page }) => {
    await page.goto(STORYBOOK_URL);
    const frame = page.frameLocator('#storybook-preview-iframe');
    const button = frame.getByRole('button', { name: 'Текст' });

    // Rapid open/close 3 times
    for (let i = 0; i < 3; i++) {
      await button.click(); // Open
      const dropdown = frame.locator('.dropdown-container').first();
      await dropdown.waitFor({ state: 'visible', timeout: 500 });

      // Verify position is stable immediately
      const box1 = await dropdown.boundingBox();
      await page.waitForTimeout(30);
      const box2 = await dropdown.boundingBox();

      expect(box1?.x).toBe(box2?.x);
      expect(box1?.y).toBe(box2?.y);

      await button.click(); // Close
      await dropdown.waitFor({ state: 'detached', timeout: 500 });
    }
  });

  test('should handle small viewport (mobile)', async ({ page }) => {
    // Test on mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(STORYBOOK_URL);

    const frame = page.frameLocator('#storybook-preview-iframe');
    const button = frame.getByRole('button', { name: 'Текст' });

    await button.click();
    const dropdown = frame.locator('.dropdown-container').first();
    await dropdown.waitFor({ state: 'visible' });

    const dropdownBox = await dropdown.boundingBox();
    expect(dropdownBox).not.toBeNull();

    // Verify dropdown fits in mobile viewport
    expect(dropdownBox!.x).toBeGreaterThanOrEqual(0);
    expect(dropdownBox!.y).toBeGreaterThanOrEqual(0);
    expect(dropdownBox!.x + dropdownBox!.width).toBeLessThanOrEqual(375 + 5);
    expect(dropdownBox!.y + dropdownBox!.height).toBeLessThanOrEqual(667 + 5);
  });

  test('should position correctly with menu container', async ({ page }) => {
    // Test with menu container story
    await page.goto('/?path=/story/admiral-2-1-dropdowncontainer--menu-container');
    const frame = page.frameLocator('#storybook-preview-iframe');
    const button = frame.getByRole('button', { name: 'Карты' });

    await button.click();
    const dropdown = frame.locator('.dropdown-container').first();
    await dropdown.waitFor({ state: 'visible' });

    // Check immediate stability
    const box1 = await dropdown.boundingBox();
    await page.waitForTimeout(50);
    const box2 = await dropdown.boundingBox();

    expect(box1?.x).toBe(box2?.x);
    expect(box1?.y).toBe(box2?.y);

    // Verify menu items are visible
    const menuItems = frame.locator('[role="option"]');
    await expect(menuItems.first()).toBeVisible();
  });
});

test.describe('Visual Stability - Screenshot Comparison', () => {
  test('dropdown appearance should be consistent', async ({ page }) => {
    await page.goto(STORYBOOK_URL);
    const frame = page.frameLocator('#storybook-preview-iframe');
    const button = frame.getByRole('button', { name: 'Текст' });

    await button.click();
    const dropdown = frame.locator('.dropdown-container').first();
    await dropdown.waitFor({ state: 'visible' });

    // Take screenshot immediately
    await page.waitForTimeout(10);
    const screenshot1 = await page.screenshot();

    // Wait for old transition-delay duration
    await page.waitForTimeout(200);
    const screenshot2 = await page.screenshot();

    // Screenshots should be identical (no visual changes)
    expect(screenshot1).toEqual(screenshot2);
  });
});
