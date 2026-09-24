import { expect, test } from '@playwright/test';
import type { Locator, Page } from '@playwright/test';
import { getStorybookFrameLocator } from '../utils';

const storyPath = '/?path=/story/admiral-2-1-atoms-field--field-with-clickable-label-text';

const clickLabelCenter = async (page: Page, field: Locator) => {
  const labelBox = await field.locator('label').boundingBox();

  expect(labelBox).not.toBeNull();

  if (labelBox) {
    await page.mouse.click(labelBox.x + labelBox.width / 2, labelBox.y + labelBox.height / 2);
  }
};

const clickBetweenLabelTexts = async (page: Page, field: Locator) => {
  const mainLabelBox = await field.getByText('Label text', { exact: true }).boundingBox();
  const additionalLabelBox = await field.getByText('Additional label text', { exact: true }).boundingBox();

  expect(mainLabelBox).not.toBeNull();
  expect(additionalLabelBox).not.toBeNull();

  if (mainLabelBox && additionalLabelBox) {
    const emptyAreaX = (mainLabelBox.x + mainLabelBox.width + additionalLabelBox.x) / 2;
    const emptyAreaY = mainLabelBox.y + mainLabelBox.height / 2;
    await page.mouse.click(emptyAreaX, emptyAreaY);
  }
};

test.describe('Field with clickable label text', () => {
  test('shows named default and custom forms', async ({ page }) => {
    await page.goto(storyPath);
    const frame = getStorybookFrameLocator(page);

    await expect(frame.getByRole('form', { name: 'Default: вся область лейбла кликабельная' })).toBeVisible();
    await expect(
      frame.getByRole('form', { name: 'Custom labelCssMixins: только текст лейбла кликабельный' }),
    ).toBeVisible();
  });

  test('default styles focus the input after clicking empty label space', async ({ page }) => {
    await page.goto(storyPath);
    const frame = getStorybookFrameLocator(page);
    const field = frame.locator('[data-container-id="default-label-field-one"]');
    const firstInput = frame.locator('#default-label-input-one');

    await frame.locator('#default-label-input-two').focus();
    await clickLabelCenter(page, field);

    await expect(firstInput).toBeFocused();
  });

  test('custom styles do not focus the input after clicking empty label space', async ({ page }) => {
    await page.goto(storyPath);
    const frame = getStorybookFrameLocator(page);
    const field = frame.locator('[data-container-id="custom-label-field-one"]');
    const firstInput = frame.locator('#custom-label-input-one');

    await frame.locator('#custom-label-input-two').focus();
    await clickBetweenLabelTexts(page, field);

    await expect(firstInput).not.toBeFocused();
  });

  test('custom styles focus the input after clicking main label text', async ({ page }) => {
    await page.goto(storyPath);
    const frame = getStorybookFrameLocator(page);
    const field = frame.locator('[data-container-id="custom-label-field-one"]');
    const firstInput = frame.locator('#custom-label-input-one');

    await frame.locator('#custom-label-input-two').focus();
    await field.getByText('Label text', { exact: true }).click();

    await expect(firstInput).toBeFocused();
  });

  test('custom styles focus the input after clicking additional label text', async ({ page }) => {
    await page.goto(storyPath);
    const frame = getStorybookFrameLocator(page);
    const field = frame.locator('[data-container-id="custom-label-field-one"]');
    const firstInput = frame.locator('#custom-label-input-one');

    await frame.locator('#custom-label-input-two').focus();
    await field.getByText('Additional label text', { exact: true }).click();

    await expect(firstInput).toBeFocused();
  });

  test('custom additional label has the same layout as the default additional label', async ({ page }) => {
    await page.goto(storyPath);
    const frame = getStorybookFrameLocator(page);
    const defaultField = frame.locator('[data-container-id="default-label-field-one"]');
    const customField = frame.locator('[data-container-id="custom-label-field-one"]');
    const defaultLabelBox = await defaultField.getByText('Additional label text', { exact: true }).boundingBox();
    const customLabelBox = await customField.getByText('Additional label text', { exact: true }).boundingBox();

    expect(defaultLabelBox).not.toBeNull();
    expect(customLabelBox).not.toBeNull();

    if (defaultLabelBox && customLabelBox) {
      expect(customLabelBox.x).toBeCloseTo(defaultLabelBox.x);
      expect(customLabelBox.width).toBeCloseTo(defaultLabelBox.width);
      expect(customLabelBox.height).toBeCloseTo(defaultLabelBox.height);
    }
  });
});
