import { test, expect } from '@playwright/test';
import { getStorybookFrameLocator, UNDO_SHORTCUT } from '../utils';

test('basic render', async ({ page }) => {
  await page.goto('/?path=/story/admiral-2-1-input-textarea--text-area-playground');
  const frame = getStorybookFrameLocator(page);

  //const component = frame.getByTestId('textAreaWrapper');
  const textarea = frame.getByTestId('textAreaPlayground');
  await expect(textarea).toHaveText('Привет!');
});

test('resizable (ResizeObserver behavior)', async ({ page, browserName }) => {
  await page.goto('/?path=/story/admiral-2-1-input-textarea--text-area-playground&args=resizable:!true');

  const frame = getStorybookFrameLocator(page);
  const component = frame.getByTestId('textAreaWrapper');
  const textarea = frame.getByTestId('textAreaPlayground');

  const componentBox = await component.boundingBox();
  expect(componentBox).not.toBeNull();
  // Сохраняем исходную высоту через CSS
  const initialHeight = await component.evaluate((el) => parseFloat(getComputedStyle(el).height));

  if (browserName === 'webkit') {
    // Программно меняем размер textarea
    await textarea.evaluate((el) => {
      (el as HTMLElement).style.height = '200px';
    });

    // Дождёмся, пока ResizeObserver обновит высоту wrapper
    await expect
      .poll(() => component.evaluate((el) => parseFloat(getComputedStyle(el).height)), { timeout: 1000 })
      .toBeGreaterThan(initialHeight);
  } else {
    // Chromium / Firefox — имитируем drag мышью
    const textAreaBox = await textarea.boundingBox();
    const xStart = textAreaBox!.x + textAreaBox!.width - 2;
    const yStart = textAreaBox!.y + textAreaBox!.height - 2;

    await page.mouse.move(xStart, yStart);
    await page.mouse.down();
    await page.mouse.move(xStart, yStart + 100, { steps: 5 });
    await page.mouse.up();

    // Ждём, пока высота изменится
    await expect
      .poll(() => component.evaluate((el) => parseFloat(getComputedStyle(el).height)), { timeout: 1000 })
      .toBeGreaterThan(initialHeight);

    // Дополнительно проверяем через toHaveCSS, что высота действительно увеличилась
    await expect(component).toHaveCSS('height', `${initialHeight + 100}px`);
  }
});

test('autoheight with value undefined', async ({ page }) => {
  await page.goto('/?path=/story/admiral-2-1-input-textarea--text-area-playground');
  const frame = getStorybookFrameLocator(page);

  const component = frame.getByTestId('textAreaWrapper');
  const textarea = frame.getByTestId('textAreaPlayground');
  await textarea.fill('1\n2');

  const boxFirst = await component.boundingBox();
  await textarea.fill('');
  const boxSecond = await component.boundingBox();
  expect(boxSecond?.height).toBeCloseTo(boxFirst!.height, 0);

  await textarea.fill('1\n2\n3\n4\n5\n6');
  const boxThird = await component.boundingBox();
  expect(boxThird?.height).toBeCloseTo(boxFirst!.height, 0);
});

test('autoheight with value true', async ({ page }) => {
  await page.goto('/?path=/story/admiral-2-1-input-textarea--text-area-playground&args=autoHeightBoolean:!true');
  const frame = getStorybookFrameLocator(page);

  const component = frame.getByTestId('textAreaWrapper');
  const textarea = frame.getByTestId('textAreaPlayground');
  await textarea.fill('1');

  const boxFirst = await component.boundingBox();
  await textarea.fill('');
  const boxSecond = await component.boundingBox();
  expect(boxSecond?.height).toBeCloseTo(boxFirst!.height, 0);

  await textarea.fill('1\n2\n3\n4\n5\n6');
  const boxThird = await component.boundingBox();
  expect(boxThird?.height).toBeGreaterThan(boxSecond!.height);

  await textarea.fill('1');
  const boxFourth = await component.boundingBox();
  expect(boxFourth?.height).toBeCloseTo(boxFirst!.height, 0);
});

test('autoheight with min and max rows', async ({ page }) => {
  await page.goto(
    '/?path=/story/admiral-2-1-input-textarea--text-area-playground&args=autoHeightBoolean:!true;autoHeightMinRows:3;autoHeightMaxRows:5',
  );
  const frame = getStorybookFrameLocator(page);

  const component = frame.getByTestId('textAreaWrapper');
  const textarea = frame.getByTestId('textAreaPlayground');

  await textarea.fill('1\n2');
  const boxFirst = await component.boundingBox();
  await textarea.fill('1\n2\n3\n4\n5');
  const boxSecond = await component.boundingBox();
  expect(boxSecond?.height).toBeGreaterThan(boxFirst!.height);

  await textarea.fill('1\n2\n3\n4\n5\n6');
  const boxThird = await component.boundingBox();
  expect(boxThird?.height).toBeCloseTo(boxSecond!.height, 0);

  await textarea.fill('Привет!');
  const boxFourth = await component.boundingBox();
  expect(boxFourth?.height).toBeCloseTo(boxFirst!.height, 0);
});

test('native undo reverts last character', async ({ page }) => {
  await page.goto('/?path=/story/admiral-2-1-input-textarea--text-area-playground');
  const frame = getStorybookFrameLocator(page);
  const textarea = frame.getByTestId('textAreaPlayground');

  await textarea.click();
  await textarea.fill('hello');
  await textarea.pressSequentially('a');

    await page.keyboard.press(UNDO_SHORTCUT);

  await expect(textarea).toHaveValue('hello');
});
