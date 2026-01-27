import { test, expect } from '@playwright/test';
import { getStorybookFrameLocator, clickAndWait, getVisibleDayIndices } from '../utils';

test('date-range calendar stays open after selecting start date', async ({ page }) => {
  await page.goto('/?path=/story/admiral-2-1-input-dateinput--date-input-range');
  const frame = getStorybookFrameLocator(page);

  const dropdown = frame.locator('.dropContainerClass');
  const iconButton = frame.locator('[data-role="icon-pane-after"] svg').last();
  await iconButton.click();
  await expect(dropdown).toBeVisible();

  const days = frame.locator('.ui-kit-calendar-day-component');
  const dayIndices = await days.evaluateAll(getVisibleDayIndices);

  if (dayIndices.length < 2) {
    throw new Error('Not enough clickable calendar days found');
  }

  await days.nth(dayIndices[0]).click();
  await expect(dropdown).toBeVisible();
  await days.nth(dayIndices[1]).click();
  await expect(dropdown).toBeHidden();
});

test('date-range calendar closes after picking end date when start date is typed', async ({ page }) => {
  await page.goto('/?path=/story/admiral-2-1-input-dateinput--date-input-range');
  const frame = getStorybookFrameLocator(page);

  const input = frame.locator('.text-input-native-input');
  const iconButton = frame.locator('[data-role="icon-pane-after"] svg').last();
  const dropdown = frame.locator('.dropContainerClass');

  await input.fill('16.04.2024 - __.__.____');
  await clickAndWait(iconButton, page);
  await expect(dropdown).toBeVisible();

  const days = frame.locator('.ui-kit-calendar-day-component');
  const result = await days.evaluateAll((elements) => {
    const startDay = 16;
    const visibleIndices = elements.reduce<number[]>((indices, el, index) => {
      const style = window.getComputedStyle(el);
      if (style.opacity !== '0' && style.pointerEvents !== 'none') {
        indices.push(index);
      }
      return indices;
    }, []);
    const targetIndex = visibleIndices.find((index) => {
      const text = elements[index].textContent?.trim() || '';
      const day = Number(text);
      return Number.isFinite(day) && day > startDay;
    });
    return targetIndex ?? visibleIndices[0] ?? -1;
  });
  const targetIndex = result;

  if (targetIndex === -1) {
    throw new Error('No clickable calendar day found');
  }

  await days.nth(targetIndex).click();
  await expect(dropdown).toBeHidden();
});
