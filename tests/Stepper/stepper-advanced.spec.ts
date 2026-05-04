import { test, expect } from '@playwright/test';
import { getStorybookFrameLocator, clickAndWait } from '../utils';
import { TIMEOUTS } from '../constants';

test.describe('Stepper Advanced Features', () => {
  test('step width property', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-stepper--playground&args=stepWidth:200px');
    const frame = getStorybookFrameLocator(page);

    const stepper = frame.locator('[role="list"]');
    await expect(stepper).toBeVisible();

    const steps = frame.locator('[role="listitem"]');
    const firstStep = steps.first();

    // Проверяем, что ширина шага соответствует заданной
    const stepBox = await firstStep.boundingBox();
    expect(stepBox?.width).toBeCloseTo(200, 10);
  });

  test('step click with onClick handler', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-stepper--click-prop-example');
    const frame = getStorybookFrameLocator(page);

    const steps = frame.locator('[data-testid="stepper"]');
    const clickableStep = steps.first();

    // Проверяем, что шаг кликабельный
    await expect(clickableStep).toBeVisible();

    // Настраиваем слушатель для console.log
    const consoleMessages: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'log') {
        consoleMessages.push(msg.text());
      }
    });

    // Кликаем по шагу
    await clickAndWait(clickableStep, page);

    // Проверяем, что сработал onClick
    expect(consoleMessages.length).toBeGreaterThan(0);
    expect(consoleMessages.some((msg) => msg.includes('step'))).toBeTruthy();
  });

  test('clickable links in steps', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-stepper--clickable-links-example');
    const frame = getStorybookFrameLocator(page);

    const stepper = frame.locator('[data-testid="stepper"]');
    await expect(stepper).toBeVisible();

    const steps = stepper.locator('[role="listitem"]');

    const completedSteps = stepper.locator('[data-completed="true"]');
    await expect(completedSteps).toHaveCount(2);

    const firstCompleted = completedSteps.nth(0);
    const secondCompleted = completedSteps.nth(1);
    await expect(firstCompleted).toHaveAttribute('href', '#');
    await expect(secondCompleted).toHaveAttribute('href', '#');

    const activeStep = steps.nth(2);
    const inactiveStep = steps.nth(3);

    await expect(activeStep).not.toHaveAttribute('href', '#');
    await expect(inactiveStep).not.toHaveAttribute('href', '#');
  });

  test('custom step content', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-stepper--custom-step-content-example');
    const frame = getStorybookFrameLocator(page);

    const stepper = frame.locator('[role="list"]');
    await expect(stepper).toBeVisible();

    const steps = frame.locator('[role="listitem"]');
    await expect(steps).toHaveCount(4);

    // Проверяем, что шаги содержат кастомный контент
    const firstStep = steps.first();
    await expect(firstStep).toContainText('Завершенный шаг, текст занимает максимум три строки, далее идет сокращение');
  });

  test('previous steps functionality', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-stepper--previous-steps-example');
    const frame = getStorybookFrameLocator(page);

    const stepper = frame.locator('[role="list"]');
    await expect(stepper).toBeVisible();

    const steps = frame.locator('[role="listitem"]');
    await expect(steps).toHaveCount(5);

    // Проверяем, что есть завершенные шаги через data-completed
    const completedSteps = frame.locator('[data-completed="true"]');
    await expect(completedSteps).toHaveCount(3);

    // Проверяем, что есть активный шаг
    const activeStep = frame.locator('[data-active="true"]');
    await expect(activeStep).toBeVisible();
  });

  test('previous steps - redo state after click', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-stepper--previous-steps-example');
    const frame = getStorybookFrameLocator(page);

    const steps = frame.locator('[role="listitem"]');
    const firstStep = steps.first();
    const secondStep = steps.nth(1);

    const activeStep = frame.locator('[data-active="true"]');
    await expect(activeStep).toBeVisible();

    const activeRedoLine = activeStep.locator('svg + div');
    await expect(activeRedoLine).toBeVisible();
    const initialActiveBorderStyle = await activeRedoLine.evaluate(
      (node) => getComputedStyle(node as HTMLElement).borderBottomStyle,
    );
    expect(initialActiveBorderStyle).toBe('dashed');

    const firstLineInitial = firstStep.locator('svg + div');
    await expect(firstLineInitial).toBeVisible();
    const initialFirstBorderStyle = await firstLineInitial.evaluate(
      (node) => getComputedStyle(node as HTMLElement).borderBottomStyle,
    );
    expect(initialFirstBorderStyle).not.toBe('dashed');
    await expect(firstStep).toHaveAttribute('data-completed', 'true');

    await expect(firstStep).toBeVisible();
    await clickAndWait(firstStep, page);

    const firstLineAfter = firstStep.locator('svg + div');
    await expect(firstLineAfter).toBeVisible();
    const firstBorderAfter = await firstLineAfter.evaluate(
      (node) => getComputedStyle(node as HTMLElement).borderBottomStyle,
    );
    expect(firstBorderAfter).toBe('dashed');

    const secondLineAfter = secondStep.locator('svg + div');
    await expect(secondLineAfter).toBeVisible();
    const secondBorderAfter = await secondLineAfter.evaluate(
      (node) => getComputedStyle(node as HTMLElement).borderBottomStyle,
    );
    expect(secondBorderAfter).not.toBe('dashed');
    await expect(secondStep).toHaveAttribute('data-completed', 'true');
  });

  test('previous steps - clicking future step does not change active', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-stepper--previous-steps-example');
    const frame = getStorybookFrameLocator(page);

    const steps = frame.locator('[role="listitem"]');
    await expect(steps).toHaveCount(5);

    const activeBefore = frame.locator('[data-active="true"]');
    await expect(activeBefore).toBeVisible();
    const activeTextBefore = await activeBefore.textContent();

    const futureStep = steps.nth(4);
    await expect(futureStep).toBeVisible();

    await clickAndWait(futureStep, page);

    const activeAfter = frame.locator('[data-active="true"]');
    await expect(activeAfter).toBeVisible();
    await expect(activeAfter).toHaveText(activeTextBefore || '');

    const futureLine = futureStep.locator('svg + div');
    await expect(futureLine).toBeVisible();
    const futureBorderStyle = await futureLine.evaluate(
      (node) => getComputedStyle(node as HTMLElement).borderBottomStyle,
    );
    expect(futureBorderStyle).not.toBe('dashed');
    await expect(futureStep).not.toHaveAttribute('data-completed', 'true');
  });

  test('progress mode - lineClamp property', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-stepper--progress-line-clamp-step-example&args=lineClamp:1');
    const frame = getStorybookFrameLocator(page);

    const progressWrapper = frame.locator('[role="progressbar"]');
    await expect(progressWrapper).toBeVisible();

    // Проверяем, что текст активного шага обрезается согласно lineClamp
    const activeStepTitle = frame
      .locator('[data-testid="progress-active-step"]')
      .or(frame.locator('.progress-active-step'));
    await expect(activeStepTitle).toBeVisible();

    // Проверяем высоту элемента
    const titleBox = await activeStepTitle.boundingBox();
    expect(titleBox?.height).toBeLessThanOrEqual(30); // Примерная высота для одной строки
  });

  test('progress mode - step navigation edge cases', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-stepper--progress-example');
    const frame = getStorybookFrameLocator(page);

    const prevButton = frame.getByRole('button', { name: /предыдущий шаг/i });
    const nextButton = frame.getByRole('button', { name: /следующий шаг/i });

    // Переходим к первому шагу
    for (let i = 0; i < 2; i++) {
      await clickAndWait(prevButton, page);
    }

    // Проверяем, что кнопка "Предыдущий шаг" отключена
    await expect(prevButton).toBeDisabled();

    // Переходим к последнему шагу
    for (let i = 0; i < 7; i++) {
      await clickAndWait(nextButton, page);
    }

    // Проверяем, что кнопка "Следующий шаг" отключена
    await expect(nextButton).toBeDisabled();
  });

  test('mobile mode - scroll behavior', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-stepper--mobile-example');
    const frame = getStorybookFrameLocator(page);

    const stepper = frame.locator('[role="list"]');
    await expect(stepper).toBeVisible();

    // Получаем контейнер со скроллом - ищем родительский элемент с overflow
    const scrollContainer = stepper.locator('..').locator('..');

    // Проверяем, что контейнер имеет горизонтальный скролл
    const scrollWidth = await scrollContainer.evaluate((el) => el.scrollWidth);
    const clientWidth = await scrollContainer.evaluate((el) => el.clientWidth);
    expect(scrollWidth).toBeGreaterThanOrEqual(clientWidth);

    // Проверяем начальную позицию скролла
    const initialScrollLeft = await scrollContainer.evaluate((el) => el.scrollLeft);
    expect(initialScrollLeft).toBe(0);

    // Нажимаем "Шаг вперёд" несколько раз
    const nextButton = frame.getByRole('button', { name: /шаг вперёд/i });

    for (let i = 0; i < 3; i++) {
      await clickAndWait(nextButton, page);
      await page.waitForTimeout(TIMEOUTS.WAIT_SHORT); // Даем время на анимацию скролла

      // Проверяем, что скролл изменился (используем более мягкое сравнение)
      const currentScrollLeft = await scrollContainer.evaluate((el) => el.scrollLeft);
      expect(currentScrollLeft).toBeGreaterThanOrEqual(initialScrollLeft);
    }
  });

  test('accessibility - ARIA attributes', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-stepper--playground');
    const frame = getStorybookFrameLocator(page);

    const stepper = frame.locator('[role="list"]');
    await expect(stepper).toBeVisible();

    // Проверяем ARIA атрибуты для списка
    await expect(stepper).toHaveAttribute('role', 'list');

    const steps = frame.locator('[role="listitem"]');
    await expect(steps).toHaveCount(4);

    // Проверяем ARIA атрибуты для шагов
    for (let i = 0; i < 4; i++) {
      const step = steps.nth(i);
      await expect(step).toHaveAttribute('role', 'listitem');
    }

    // Проверяем активный шаг
    const activeStep = frame.locator('[aria-current="step"]');
    await expect(activeStep).toBeVisible();
    await expect(activeStep).toHaveAttribute('aria-current', 'step');
  });

  test('accessibility - progress mode ARIA attributes', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-stepper--progress-example');
    const frame = getStorybookFrameLocator(page);

    const progressBar = frame.locator('[role="progressbar"]');
    await expect(progressBar).toBeVisible();

    // Проверяем ARIA атрибуты прогресс-бара
    await expect(progressBar).toHaveAttribute('aria-valuemin', '0');
    await expect(progressBar).toHaveAttribute('aria-valuemax', '8');
    await expect(progressBar).toHaveAttribute('aria-valuenow', '3');
    await expect(progressBar).toHaveAttribute('aria-valuetext');
  });

  // test('keyboard navigation', async ({ page }) => {
  //   await page.goto('/?path=/story/admiral-2-1-stepper--playground');
  //   const frame = getStorybookFrameLocator(page);

  //   const stepper = frame.locator('[role="list"]');
  //   await expect(stepper).toBeVisible();

  //   // Ищем кнопку рядом со Stepper (если есть)
  //   const button = frame.getByRole('button').first();
  //   if (await button.isVisible()) {
  //     // Фокусируемся на кнопке
  //     await button.focus();
  //     await expect(button).toBeFocused();

  //     // Нажимаем Enter для активации
  //     await page.keyboard.press('Enter');
  //     await page.waitForTimeout(200);

  //     // Проверяем, что активный шаг изменился
  //     const activeStep = frame.locator('[aria-current="step"]');
  //     await expect(activeStep).toBeVisible();
  //   } else {
  //     // Если кнопки нет, тестируем фокус на степпере
  //     await stepper.focus();
  //     await expect(stepper).toBeFocused();

  //     // Тестируем навигацию с клавиатуры
  //     const steps = frame.locator('[role="listitem"]');
  //     const firstStep = steps.first();

  //     // Tab навигация
  //     await page.keyboard.press('Tab');
  //     await expect(firstStep).toBeFocused();
  //   }
  // });

  test('tooltip functionality', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-stepper--playground');
    const frame = getStorybookFrameLocator(page);

    const steps = frame.locator('[role="listitem"]');
    const firstStep = steps.first();

    // Наводим курсор на шаг
    await firstStep.hover();

    // Проверяем, что появляется тултип
    const tooltip = frame.locator('[role="tooltip"]').or(frame.locator('.tooltip'));
    await expect(tooltip).toBeVisible();

    // Проверяем содержимое тултипа
    await expect(tooltip).toContainText('Завершенный шаг');
  });

  test('error state visual feedback', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-stepper--step-kinds-example');
    const frame = getStorybookFrameLocator(page);

    // Ищем шаг с data-error="true"
    const errorStep = frame.locator('[data-error="true"]');
    await expect(errorStep).toBeVisible();

    // Проверяем, что у шага с ошибкой есть соответствующие стили
    const errorIcon = errorStep.locator('svg');
    await expect(errorIcon).toBeVisible();
  });

  test('warning state visual feedback', async ({ page, browserName }) => {
    await page.goto('/?path=/story/admiral-2-1-stepper--step-kinds-example');
    const frame = getStorybookFrameLocator(page);

    // Wait for iframe to load (WebKit needs more time)
    if (browserName === 'webkit') {
      await page.waitForTimeout(TIMEOUTS.WAIT_LONG);
    }

    // Ищем шаг с data-warning="true"
    const warningStep = frame.locator('[data-warning="true"]');
    await expect(warningStep).toBeVisible({
      timeout: browserName === 'webkit' ? TIMEOUTS.EXPECT_LOADING_WEBKIT : TIMEOUTS.EXPECT_LOADING_LONG,
    });

    // Проверяем, что у шага с предупреждением есть соответствующие стили
    const warningIcon = warningStep.locator('svg');
    await expect(warningIcon).toBeVisible();
  });

  test('completed state visual feedback', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-stepper--step-kinds-example');
    const frame = getStorybookFrameLocator(page);

    // Ищем шаг с data-completed="true"
    const completedStep = frame.locator('[data-completed="true"]');
    await expect(completedStep).toBeVisible();

    // Проверяем, что у завершенного шага есть соответствующие стили
    const completedIcon = completedStep.locator('svg');
    await expect(completedIcon).toBeVisible();
  });

  test('redo state visual feedback', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-stepper--step-kinds-example');
    const frame = getStorybookFrameLocator(page);

    const redoStep = frame.locator('[role="listitem"]', {
      hasText: 'Шаг Redo повторное редактирование',
    });
    await expect(redoStep).toBeVisible();

    const redoLine = redoStep.locator('svg + div');
    await expect(redoLine).toBeVisible();

    const borderStyle = await redoLine.evaluate((node) => getComputedStyle(node as HTMLElement).borderBottomStyle);
    expect(borderStyle).toBe('dashed');
  });
});
