import { test, expect } from '@playwright/test';
import { clickAndWait, resizeElement } from '../utils';

test('basic render', async ({ page }) => {
  await page.goto('/?path=/story/admiral-2-1-tabs-tabmenuvertical--vertical-tab-menu-example');
  const frame = page.frameLocator('#storybook-preview-iframe');

  const tabMenu = frame.getByTestId('verticalTabMenuTemplate');
  await expect(tabMenu).toBeVisible();

  const overflowMenu = frame.locator('.overflow-menu-button-with-dropdown');
  await expect(overflowMenu).toBeVisible();

  const activeTab = frame.getByTestId('verticalTab3');
  await expect(activeTab).toBeVisible();

  const activeTabSelector = frame.locator('.active-vertical-tab-selector');
  await expect(activeTabSelector).toBeVisible();

  const activeTabBox = await activeTab.boundingBox();
  const activeTabSelectorBox = await activeTabSelector.boundingBox();
  expect(activeTabSelectorBox!.height).toBeCloseTo(activeTabBox!.height, 0);
  expect(activeTabSelectorBox!.y).toBeCloseTo(activeTabBox!.y, 0);
});

test('select tab logic', async ({ page }) => {
  await page.goto('/?path=/story/admiral-2-1-tabs-tabmenuvertical--vertical-tab-menu-example');
  const frame = page.frameLocator('#storybook-preview-iframe');

  const tab6 = frame.getByTestId('verticalTab6');
  await clickAndWait(tab6, page);

  const activeTabSelector = frame.locator('.active-vertical-tab-selector');
  const activeTabSelectorBox = await activeTabSelector.boundingBox();
  const tab6Box = await tab6.boundingBox();
  expect(activeTabSelectorBox!.y).toBeCloseTo(tab6Box!.y, 0);

  const tab7 = frame.getByTestId('verticalTab7');
  await expect(tab7).not.toBeVisible();

  const overflowMenu = frame.locator('.overflow-menu-button-with-dropdown');
  await clickAndWait(overflowMenu, page);

  const overflowTab7 = frame.getByTestId('overflowTab7');
  await clickAndWait(overflowTab7, page);

  await expect(tab7).toBeVisible();

  const tab7Box = await tab7.boundingBox();
  expect(tab7Box!.y).toBeCloseTo(activeTabSelectorBox!.y, 0);
});

test('resize tab menu height', async ({ page }) => {
  await page.goto('/?path=/story/admiral-2-1-tabs-tabmenuvertical--vertical-tab-menu-example');
  const frame = page.frameLocator('#storybook-preview-iframe');

  const wrapper = frame.getByTestId('templateWrapper');
  const wrapperBox = await wrapper.boundingBox();
  const tabMenu = frame.getByTestId('verticalTabMenuTemplate');
  const tabMenuBox1 = await tabMenu.boundingBox();

  await resizeElement(wrapper, wrapperBox!.width - 200, wrapperBox!.height);
  const tabMenuBox2 = await tabMenu.boundingBox();
  expect(tabMenuBox2!.height).toBeLessThan(tabMenuBox1!.height);

  await resizeElement(wrapper, wrapperBox!.width + 400, wrapperBox!.height);
  const tabMenuBox3 = await tabMenu.boundingBox();
  expect(tabMenuBox3!.height).toBeGreaterThan(tabMenuBox2!.height);
  expect(tabMenuBox3!.height).toBeGreaterThan(tabMenuBox1!.height);
});
