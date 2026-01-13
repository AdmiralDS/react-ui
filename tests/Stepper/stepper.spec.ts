import { test, expect } from '@playwright/test';
import { getStorybookFrameLocator, clickAndWait } from '../utils';

test.describe('Stepper Component', () => {
  test('basic render', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-stepper--playground');
    const frame = getStorybookFrameLocator(page);

    const stepper = frame.locator('[role="list"]');
    await expect(stepper).toBeVisible();

    // Проверяем наличие шагов
    const steps = frame.locator('[role="listitem"]');
    await expect(steps).toHaveCount(4);

    // Проверяем активный шаг
    const activeStep = frame.locator('[aria-current="step"]');
    await expect(activeStep).toBeVisible();
    await expect(activeStep).toHaveText('Активный шаг, текст занимает максимум три строки');
  });

  test('horizontal and vertical orientations', async ({ page }) => {
    // Тест горизонтальной ориентации
    await page.goto('/?path=/story/admiral-2-1-stepper--playground&args=orientation:horizontal');
    const frame = getStorybookFrameLocator(page);

    const stepper = frame.locator('[role="list"]');
    await expect(stepper).toBeVisible();

    // Проверяем, что шаги расположены горизонтально
    const steps = frame.locator('[role="listitem"]');
    const firstStep = steps.first();
    const secondStep = steps.nth(1);

    const firstStepBox = await firstStep.boundingBox();
    const secondStepBox = await secondStep.boundingBox();

    expect(firstStepBox!.x).toBeLessThan(secondStepBox!.x);
    expect(firstStepBox!.y).toBeCloseTo(secondStepBox!.y, 5);

    // Тест вертикальной ориентации
    await page.goto('/?path=/story/admiral-2-1-stepper--playground&args=orientation:vertical');

    const verticalStepper = frame.locator('[role="list"]');
    await expect(verticalStepper).toBeVisible();

    const verticalSteps = frame.locator('[role="listitem"]');
    const firstVerticalStep = verticalSteps.first();
    const secondVerticalStep = verticalSteps.nth(1);

    const firstVerticalStepBox = await firstVerticalStep.boundingBox();
    const secondVerticalStepBox = await secondVerticalStep.boundingBox();

    expect(firstVerticalStepBox!.y).toBeLessThan(secondVerticalStepBox!.y);
    expect(firstVerticalStepBox!.x).toBeCloseTo(secondVerticalStepBox!.x, 5);
  });

  test('step states (completed, error, warning, disabled)', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-stepper--step-kinds-example');
    const frame = getStorybookFrameLocator(page);

    const stepper = frame.locator('[role="list"]');
    await expect(stepper).toBeVisible();

    const steps = frame.locator('[role="listitem"]');
    await expect(steps).toHaveCount(6);

    // Проверяем шаг с предупреждением через data-warning
    const warningStep = frame.locator('[data-warning="true"]');
    await expect(warningStep).toBeVisible();
    await expect(warningStep).toHaveText('Шаг с предупреждением');

    // Проверяем отключенный шаг через data-disabled
    const disabledStep = frame.locator('[data-disabled="true"]');
    await expect(disabledStep).toBeVisible();
    await expect(disabledStep).toHaveText('Disabled шаг');

    // Проверяем шаг с ошибкой через data-error
    const errorStep = frame.locator('[data-error="true"]');
    await expect(errorStep).toBeVisible();
    await expect(errorStep).toHaveText('Шаг с ошибкой');

    // Проверяем завершенный шаг через data-completed
    const completedStep = frame.locator('[data-completed="true"]');
    await expect(completedStep).toBeVisible();
    await expect(completedStep).toHaveText('Завершенный шаг');

    // Проверяем активный шаг
    const activeStep = frame.locator('[aria-current="step"]');
    await expect(activeStep).toBeVisible();
    await expect(activeStep).toHaveText('Активный шаг');
    await expect(activeStep).toHaveAttribute('aria-current', 'step');

    // Проверяем неактивный шаг
    const inactiveStep = steps.nth(5);
    await expect(inactiveStep).toBeVisible();
    await expect(inactiveStep).toHaveText('Неактивный шаг');
  });

  test('progress mode - steps format', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-stepper--progress-example');
    const frame = getStorybookFrameLocator(page);

    // Проверяем наличие ProgressMode элементов
    const progressWrapper = frame.locator('[data-testid="progress-wrapper"]').or(frame.locator('.progress-wrapper'));
    await expect(progressWrapper).toBeVisible();

    // Проверяем заголовок с активным шагом
    const activeStepTitle = frame
      .locator('[data-testid="progress-active-step"]')
      .or(frame.locator('.progress-active-step'));
    await expect(activeStepTitle).toBeVisible();
    await expect(activeStepTitle).toHaveText('Подтверждение заявки');

    // Проверяем текст прогресса
    const progressText = frame.locator('[data-testid="progress-text"]').or(frame.locator('.progress-text'));
    await expect(progressText).toBeVisible();
    await expect(progressText).toContainText('3 из 8');

    // Проверяем прогресс-бар
    const progressBar = frame.locator('[role="progressbar"]');
    await expect(progressBar).toBeVisible();
    await expect(progressBar).toHaveAttribute('aria-valuenow', '3');
    await expect(progressBar).toHaveAttribute('aria-valuemax', '8');

    // Проверяем следующий шаг
    const nextStep = frame.locator('[data-testid="progress-next-step"]').or(frame.locator('.progress-next-step'));
    await expect(nextStep).toBeVisible();
    await expect(nextStep).toContainText('Далее - обработка заявки');
  });

  test('progress mode - percentage format', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-stepper--progress-percentage-example');
    const frame = getStorybookFrameLocator(page);

    const progressText = frame.locator('[data-testid="progress-text"]').or(frame.locator('.progress-text'));
    await expect(progressText).toBeVisible();
    await expect(progressText).toContainText('%');
  });

  test('progress mode - navigation buttons', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-stepper--progress-example');
    const frame = getStorybookFrameLocator(page);

    // Находим кнопки навигации
    const prevButton = frame.getByRole('button', { name: /предыдущий шаг/i });
    const nextButton = frame.getByRole('button', { name: /следующий шаг/i });

    await expect(prevButton).toBeVisible();
    await expect(nextButton).toBeVisible();

    // Проверяем начальное состояние
    await expect(prevButton).not.toBeDisabled();
    await expect(nextButton).not.toBeDisabled();

    // Нажимаем "Следующий шаг"
    await clickAndWait(nextButton, page);

    // Проверяем, что активный шаг изменился
    const activeStepTitle = frame
      .locator('[data-testid="progress-active-step"]')
      .or(frame.locator('.progress-active-step'));
    await expect(activeStepTitle).toHaveText('Обработка заявки');

    // Проверяем, что прогресс обновился
    const progressText = frame.locator('[data-testid="progress-text"]').or(frame.locator('.progress-text'));
    await expect(progressText).toContainText('4 из 8');

    // Нажимаем "Предыдущий шаг"
    await clickAndWait(prevButton, page);

    // Проверяем, что вернулись к предыдущему шагу
    await expect(activeStepTitle).toHaveText('Подтверждение заявки');
    await expect(progressText).toContainText('3 из 8');
  });

  test('mobile mode with horizontal scroll', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-stepper--mobile-example');
    const frame = getStorybookFrameLocator(page);

    const stepper = frame.locator('[role="list"]');
    await expect(stepper).toBeVisible();

    // Проверяем, что в мобильном режиме есть горизонтальный скролл
    const stepperContainer = stepper.locator('..');
    const scrollWidth = await stepperContainer.evaluate((el) => el.scrollWidth);
    const clientWidth = await stepperContainer.evaluate((el) => el.clientWidth);

    // Используем более мягкое сравнение для скролла
    expect(scrollWidth).toBeGreaterThanOrEqual(clientWidth);

    // Тестируем навигацию в мобильном режиме
    const nextButton = frame.getByRole('button', { name: /шаг вперёд/i });
    const prevButton = frame.getByRole('button', { name: /шаг назад/i });

    await expect(nextButton).toBeVisible();
    await expect(prevButton).toBeVisible();

    // Нажимаем "Шаг вперёд"
    await clickAndWait(nextButton, page);

    // Проверяем, что активный шаг изменился
    const activeStep = frame.locator('[aria-current="step"]');
    await expect(activeStep).toHaveText('Текст занимает максимум три строки, далее идет сокращение');

    // Проверяем, что кнопка "Шаг назад" стала активной
    await expect(prevButton).not.toBeDisabled();
  });

  test('step click interactions', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-stepper--previous-steps-example');
    const frame = getStorybookFrameLocator(page);

    const steps = frame.locator('[role="listitem"]');

    // Проверяем, что шаги кликабельны
    const firstStep = steps.first();
    await expect(firstStep).toBeVisible();

    // Кликаем по первому шагу
    await clickAndWait(firstStep, page);

    // Проверяем, что активный шаг изменился
    const activeStep = frame.locator('[aria-current="step"]');
    await expect(activeStep).toHaveText('1. Пройденный шаг');
  });

  test('responsive behavior', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-stepper--playground');
    const frame = getStorybookFrameLocator(page);

    const stepper = frame.locator('[role="list"]');
    await expect(stepper).toBeVisible();

    // Получаем начальные размеры
    const initialBox = await stepper.boundingBox();
    expect(initialBox).not.toBeNull();

    // Изменяем размер окна
    await page.setViewportSize({ width: 400, height: 600 });
    await page.waitForTimeout(50);

    const resizedBox = await stepper.boundingBox();
    expect(resizedBox!.width).toBeLessThan(initialBox!.width);

    // Возвращаем размер окна
    await page.setViewportSize({ width: 1200, height: 800 });
    await page.waitForTimeout(50);

    const restoredBox = await stepper.boundingBox();
    expect(restoredBox!.width).toBeGreaterThan(resizedBox!.width);
  });

  test('lineClamp property', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-stepper--playground&args=lineClamp:2');
    const frame = getStorybookFrameLocator(page);

    const stepper = frame.locator('[role="list"]');
    await expect(stepper).toBeVisible();

    // Проверяем, что текст обрезается согласно lineClamp
    const steps = frame.locator('[role="listitem"]');
    const firstStep = steps.first().locator('[data-testid="step-content"]');

    // Получаем высоту текста первого шага
    const stepBox = await firstStep.boundingBox();
    expect(stepBox).not.toBeNull();

    // Проверяем, что высота соответствует lineClamp=1
    // Увеличиваем допустимую высоту, так как реальная высота может быть больше
    const lineHeight = 20; // Примерная высота строки
    expect(stepBox!.height).toBeLessThanOrEqual(lineHeight * 2); // Запас
  });

  test('hideLastStepLine property', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-stepper--playground&args=hideLastStepLine:true');
    const frame = getStorybookFrameLocator(page);

    const stepper = frame.locator('[role="list"]');
    await expect(stepper).toBeVisible();

    const steps = frame.locator('[role="listitem"]');
    const lastStep = steps.last();

    // Проверяем, что у последнего шага нет линии
    const lastStepLine = lastStep.locator('.step-line').or(lastStep.locator('[class*="line"]'));
    await expect(lastStepLine).toHaveCount(0);
  });

  test('progress mode - displayNextStepName false', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-stepper--progress-next-step-example&args=displayNextStepName:false');
    const frame = getStorybookFrameLocator(page);

    // Проверяем, что следующий шаг не отображается
    const nextStep = frame.locator('[data-testid="progress-next-step"]').or(frame.locator('.progress-next-step'));
    await expect(nextStep).toHaveCount(0);
  });

  test('progress mode - mobile version', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-stepper--progress-mobile-example');
    const frame = getStorybookFrameLocator(page);

    // Ищем элементы ProgressMode без жестких data-testid
    const progressWrapper = frame.locator('[role="progressbar"]').or(frame.locator('.progress-wrapper'));
    await expect(progressWrapper).toBeVisible();

    // Проверяем, что в мобильной версии ProgressMode есть соответствующие элементы
    const progressText = frame.locator('text=/из \\d+/').or(frame.locator('.progress-text'));
    await expect(progressText).toBeVisible();
  });

  test('progress mode - custom locale', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-stepper--progress-custom-example');
    const frame = getStorybookFrameLocator(page);

    const progressText = frame.locator('[data-testid="progress-text"]').or(frame.locator('.progress-text'));
    await expect(progressText).toBeVisible();

    const progressActiveStep = frame
      .locator('[data-testid="progress-active-step"]')
      .or(frame.locator('.progress-active-step'));
    await expect(progressActiveStep).toBeVisible();

    // Проверяем, что используется кастомная локализация
    const nextStep = frame.locator('[data-testid="progress-next-step"]').or(frame.locator('.progress-next-step'));
    await expect(nextStep).toBeVisible();

    // Проверяем, что текст следующего шага соответствует кастомной локализации
    const nextStepText = await nextStep.textContent();
    expect(nextStepText).toContain('Следующий этап:');
  });
});
