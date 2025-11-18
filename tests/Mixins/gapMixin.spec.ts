import type { Locator } from '@playwright/test';
import { test, expect } from '@playwright/test';
import { getStorybookFrameLocator } from '../utils';

const STORY_PATH = '/?path=/story/admiral-2-1-mixins-gapmixin--gap-mixin-playground';

const roundValue = (value: number) => Math.round(value * 100) / 100;

const calculateHorizontalGap = async (container: Locator) => {
  const items = container.getByTestId('gapExampleItem');
  const firstBox = await items.nth(0).boundingBox();
  const secondBox = await items.nth(1).boundingBox();
  expect(firstBox).not.toBeNull();
  expect(secondBox).not.toBeNull();

  return roundValue(secondBox!.x - (firstBox!.x + firstBox!.width));
};

const calculateVerticalGap = async (container: Locator) => {
  const items = container.getByTestId('gapExampleItem');
  const firstBox = await items.nth(0).boundingBox();
  const secondBox = await items.nth(1).boundingBox();
  expect(firstBox).not.toBeNull();
  expect(secondBox).not.toBeNull();

  return roundValue(secondBox!.y - (firstBox!.y + firstBox!.height));
};

const calculateGridGaps = async (container: Locator) => {
  const items = container.getByTestId('gapExampleItem');
  const first = await items.nth(0).boundingBox();
  const second = await items.nth(1).boundingBox();
  const third = await items.nth(2).boundingBox();

  expect(first).not.toBeNull();
  expect(second).not.toBeNull();
  expect(third).not.toBeNull();

  return {
    horizontal: roundValue(second!.x - (first!.x + first!.width)),
    vertical: roundValue(third!.y - (first!.y + first!.height)),
  };
};

test.describe('gapMixin story', () => {
  test('horizontal mixin matches CSS flex gap spacing', async ({ page }) => {
    await page.goto(STORY_PATH);
    const frame = getStorybookFrameLocator(page);

    const cssRow = frame.getByTestId('cssHorizontalFlex');
    const mixinRow = frame.getByTestId('mixinHorizontalFlex');

    const cssGapValue = await calculateHorizontalGap(cssRow);
    const mixinGapValue = await calculateHorizontalGap(mixinRow);

    expect(cssGapValue).toBeCloseTo(12, 1);
    expect(mixinGapValue).toBeCloseTo(12, 1);
  });

  test('vertical mixin matches CSS column gap spacing', async ({ page }) => {
    await page.goto(STORY_PATH);
    const frame = getStorybookFrameLocator(page);

    const cssColumn = frame.getByTestId('cssVerticalFlex');
    const mixinColumn = frame.getByTestId('mixinVerticalFlex');

    const cssGapValue = await calculateVerticalGap(cssColumn);
    const mixinGapValue = await calculateVerticalGap(mixinColumn);

    expect(cssGapValue).toBeCloseTo(12, 1);
    expect(mixinGapValue).toBeCloseTo(12, 1);
  });

  test('both type matches CSS grid gaps for wrapped layouts', async ({ page }) => {
    await page.goto(STORY_PATH);
    const frame = getStorybookFrameLocator(page);

    const cssGrid = frame.getByTestId('cssGridLayout');
    const mixinBoth = frame.getByTestId('mixinBothFlex');

    const cssGaps = await calculateGridGaps(cssGrid);
    const mixinGaps = await calculateGridGaps(mixinBoth);

    expect(cssGaps.horizontal).toBeCloseTo(12, 1);
    expect(cssGaps.vertical).toBeCloseTo(12, 1);
    expect(mixinGaps.horizontal).toBeCloseTo(12, 1);
    expect(mixinGaps.vertical).toBeCloseTo(12, 1);
  });

  test('both type applies negative margins on all sides', async ({ page }) => {
    await page.goto(STORY_PATH);
    const frame = getStorybookFrameLocator(page);
    const mixinRow = frame.getByTestId('mixinBothFlex');
    const firstItem = mixinRow.getByTestId('gapExampleItem').first();

    await expect(mixinRow).toHaveCSS('margin-top', '-6px');
    await expect(mixinRow).toHaveCSS('margin-left', '-6px');
    await expect(mixinRow).toHaveCSS('margin-bottom', '-6px');
    await expect(mixinRow).toHaveCSS('margin-right', '-6px');

    await expect(firstItem).toHaveCSS('margin-top', '6px');
    await expect(firstItem).toHaveCSS('margin-left', '6px');
    await expect(firstItem).toHaveCSS('margin-bottom', '6px');
    await expect(firstItem).toHaveCSS('margin-right', '6px');
  });

  test('horizontal type affects only left/right margins', async ({ page }) => {
    await page.goto(STORY_PATH);
    const frame = getStorybookFrameLocator(page);
    const horizontalRow = frame.getByTestId('mixinHorizontalFlex');
    const firstItem = horizontalRow.getByTestId('gapExampleItem').first();

    await expect(horizontalRow).toHaveCSS('margin-left', '-6px');
    await expect(horizontalRow).toHaveCSS('margin-right', '-6px');
    await expect(horizontalRow).toHaveCSS('margin-top', '0px');
    await expect(horizontalRow).toHaveCSS('margin-bottom', '0px');

    await expect(firstItem).toHaveCSS('margin-left', '6px');
    await expect(firstItem).toHaveCSS('margin-right', '6px');
    await expect(firstItem).toHaveCSS('margin-top', '0px');
    await expect(firstItem).toHaveCSS('margin-bottom', '0px');
  });

  test('vertical type affects only top/bottom margins', async ({ page }) => {
    await page.goto(STORY_PATH);
    const frame = getStorybookFrameLocator(page);
    const verticalRow = frame.getByTestId('mixinVerticalFlex');
    const firstItem = verticalRow.getByTestId('gapExampleItem').first();

    await expect(verticalRow).toHaveCSS('margin-left', '0px');
    await expect(verticalRow).toHaveCSS('margin-right', '0px');
    await expect(verticalRow).toHaveCSS('margin-top', '-6px');
    await expect(verticalRow).toHaveCSS('margin-bottom', '-6px');

    await expect(firstItem).toHaveCSS('margin-left', '0px');
    await expect(firstItem).toHaveCSS('margin-right', '0px');
    await expect(firstItem).toHaveCSS('margin-top', '6px');
    await expect(firstItem).toHaveCSS('margin-bottom', '6px');
  });
});
