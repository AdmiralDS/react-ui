import { test, expect } from '@playwright/test';
import { getStorybookFrameLocator, clickAndWait } from '../utils';

test.describe('TimePicker - skeleton and dropdown alignment', () => {
  test('skeleton story sets data-skeleton on container', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-datepicker-timepicker--time-picker-skeleton');
    const frame = getStorybookFrameLocator(page);

    const skeletonContainer = frame.locator('.time-picker-container[data-skeleton="true"]');
    await expect(skeletonContainer).toBeVisible();
  });

  test('align dropdown story opens dropdown', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-datepicker-timepicker--time-picker-align-dropdown-container');
    const frame = getStorybookFrameLocator(page);

    const iconButton = frame.locator('.time-picker-icon-panel svg').last();
    await clickAndWait(iconButton, page);

    await expect(frame.locator('.dropContainerClass')).toBeVisible();
  });
});
