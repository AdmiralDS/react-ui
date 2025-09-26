import { test, expect } from '@playwright/test';

test('basic render', async ({ page }) => {
  await page.goto('/?path=/story/admiral-2-1-input-textarea--text-area-playground');
  const frame = page.frameLocator('#storybook-preview-iframe');

  //const component = frame.getByTestId('textAreaWrapper');
  const textarea = frame.getByTestId('textAreaPlayground');
  await expect(textarea).toHaveText('Привет!');
});

test('resizable', async ({ page }) => {
  await page.goto('/?path=/story/admiral-2-1-input-textarea--text-area-playground&args=resizable:!true');
  const frame = page.frameLocator('#storybook-preview-iframe');

  const component = frame.getByTestId('textAreaWrapper');
  //const textarea = frame.getByTestId('textAreaPlayground');

  const boxFirst = await component.boundingBox();
  const xStart = boxFirst!.x + boxFirst!.width - 6;
  const yStart = boxFirst!.y + boxFirst!.height - 3;
  await page.mouse.move(xStart, yStart);
  await page.mouse.down();
  await page.mouse.move(xStart, yStart + 100);
  await page.mouse.up();

  const boxSecond = await component.boundingBox();
  expect(boxSecond?.height).toBeGreaterThan(boxFirst!.height);
});

test('autoheight with value undefined', async ({ page }) => {
  await page.goto('/?path=/story/admiral-2-1-input-textarea--text-area-playground');
  const frame = page.frameLocator('#storybook-preview-iframe');

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
  const frame = page.frameLocator('#storybook-preview-iframe');

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
  const frame = page.frameLocator('#storybook-preview-iframe');

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
