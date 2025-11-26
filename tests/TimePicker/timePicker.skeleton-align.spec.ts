import { test, expect } from '@playwright/test';
import { getStorybookFrameLocator, clickAndWait } from '../utils';

test.describe('TimePicker - skeleton and dropdown alignment', () => {
  test('skeleton story sets data-skeleton on container', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-input-timepicker--time-picker-skeleton');
    const frame = getStorybookFrameLocator(page);

    const skeletonContainer = frame.locator('.time-picker-container[data-skeleton="true"]');
    await expect(skeletonContainer).toBeVisible();
  });

  test('default dropdown aligns to right edge of container', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-input-timepicker--time-picker-simple');
    const frame = getStorybookFrameLocator(page);

    const container = frame.getByTestId('testidTimePickerContainer');
    await expect(container).toBeVisible();

    const iconButton = frame.locator('.time-picker-icon-panel svg').last();
    await clickAndWait(iconButton, page);

    const dropdown = frame.locator('.dropContainerClass');
    await expect(dropdown).toBeVisible();

    const containerBox = await container.boundingBox();
    const dropdownBox = await dropdown.boundingBox();

    expect(containerBox).not.toBeNull();
    expect(dropdownBox).not.toBeNull();
    const containerRight =
      (containerBox as NonNullable<typeof containerBox>).x + (containerBox as NonNullable<typeof containerBox>).width;
    const dropdownRight =
      (dropdownBox as NonNullable<typeof dropdownBox>).x + (dropdownBox as NonNullable<typeof dropdownBox>).width;

    expect(dropdownRight).toBeCloseTo(containerRight, 1);
  });

  test('align dropdown story aligns left edge with container', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-input-timepicker--time-picker-align-dropdown-container');
    const frame = getStorybookFrameLocator(page);

    const container = frame.locator('.time-picker-container');
    await expect(container).toBeVisible();

    const iconButton = frame.locator('.time-picker-icon-panel svg').last();
    await clickAndWait(iconButton, page);

    const dropdown = frame.locator('.dropContainerClass');
    await expect(dropdown).toBeVisible();

    const containerBox = await container.boundingBox();
    const dropdownBox = await dropdown.boundingBox();

    expect(containerBox).not.toBeNull();
    expect(dropdownBox).not.toBeNull();
    const containerLeft = (containerBox as NonNullable<typeof containerBox>).x;
    const dropdownLeft = (dropdownBox as NonNullable<typeof dropdownBox>).x;

    expect(dropdownLeft).toBeCloseTo(containerLeft, 1);
  });
});
