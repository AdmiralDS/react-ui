import { test, expect } from '@playwright/test';
import { getStorybookFrameLocator } from '../utils';

test.describe('MultiInput', () => {
  test('clear button clears initial chips in vertically constrained layout', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-input-multiinput--multi-input-init-chips-disabled');
    const frame = getStorybookFrameLocator(page);

    const input = frame.getByTestId('multi-input-init-input');
    const wrapperBox = frame.getByTestId('multi-input-init-wrapper');
    const container = frame.getByTestId('multi-input-init-container');
    const clearButton = frame.getByTestId('multi-input-init-clear-button');
    const wrapper = frame.locator('.wrapper-options');

    await wrapperBox.evaluate((element) => {
      const el = element as HTMLElement;
      el.style.height = '40px';
      el.style.overflow = 'hidden';
    });

    await expect(input).toBeVisible();
    await expect(clearButton).toBeVisible();
    await expect(wrapperBox).toHaveCSS('height', '40px');
    await expect(wrapperBox).toHaveCSS('overflow', 'hidden');
    await expect(wrapper.locator('.close-button')).toHaveCount(30);
    await expect(wrapper.getByText('chips1', { exact: true })).toBeVisible();
    await expect(wrapper.getByText('chips2', { exact: true })).toBeVisible();

    const wrapperBoxHeight = await wrapperBox.evaluate(
      (element) => (element as HTMLElement).getBoundingClientRect().height,
    );
    const containerHeight = await container.evaluate(
      (element) => (element as HTMLElement).getBoundingClientRect().height,
    );
    expect(containerHeight).toBeGreaterThan(wrapperBoxHeight);

    await frame.locator('body').click({ position: { x: 1, y: 1 } });
    await expect(input).not.toBeFocused();

    await clearButton.click();

    await expect(wrapper.locator('.close-button')).toHaveCount(1);
    await expect(wrapper.getByText('chips1', { exact: true })).toBeVisible();
    await expect(wrapper.getByText('chips2', { exact: true })).toHaveCount(0);
    await expect(input).not.toBeFocused();
  });
});
