// TreeSelect.spec.ts
import { test, expect } from '@playwright/test';
import { getStorybookFrameLocator } from '../utils';

test.describe('TreeSelect Component', () => {
  test('should render with default props', async ({ page }) => {
    await page.goto(`/?path=/story/admiral-2-1-input-treeselect--text-input-playground`);
    const frame = getStorybookFrameLocator(page);
    await expect(frame.locator('input[placeholder="Выберите элементы..."]')).toBeVisible(); // Используйте ваш placeholder
  });

  test('should open and close dropdown on click', async ({ page }) => {
    await page.goto(`/?path=/story/admiral-2-1-input-treeselect--text-input-playground`);
    const frame = getStorybookFrameLocator(page);
    const input = frame.locator('input[placeholder="Выберите элементы..."]'); // Используйте ваш placeholder
    const dropdown = frame.locator('[data-testid="dropdown-tree"]'); // Предполагается, что у DropDownTree есть data-testid, иначе используйте другой селектор

    // Клик по инпуту должен открыть dropdown
    await input.click();
    await expect(dropdown).toBeVisible();

    // Клик вне dropdown (например, по body) должен закрыть его
    await frame.locator('body').click({ position: { x: 0, y: 0 } }); // Клик в левый верхний угол
    await expect(dropdown).not.toBeVisible();
  });

  test('should select an item and show a chip', async ({ page }) => {
    await page.goto(`/?path=/story/admiral-2-1-input-treeselect--text-input-playground`);
    const frame = getStorybookFrameLocator(page);
    const input = frame.locator('input[placeholder="Выберите элементы..."]');
    const dropdown = frame.locator('[data-testid="dropdown-tree"]');
    const itemLabel = 'Опция 1.1';
    const itemCheckbox = frame.locator(`role=checkbox[name="${itemLabel}"]`);
    const wrapper = frame.locator('.wrapper-options');
    const chip = wrapper.getByText(itemLabel);
    await input.click();
    await expect(dropdown).toBeVisible();

    await itemCheckbox.click();
    // dropdown не закрылся
    await expect(dropdown).toBeVisible();
    // Ожидаем появления чипа
    await expect(chip).toBeVisible();
  });

  test('should delete a chip on close button click', async ({ page }) => {
    await page.goto(`/?path=/story/admiral-2-1-input-treeselect--text-input-playground`);
    const frame = getStorybookFrameLocator(page);

    const input = frame.locator('input[placeholder="Выберите элементы..."]');
    const itemLabel = 'Опция 1.1';
    const itemCheckbox = frame.locator(`role=checkbox[name="${itemLabel}"]`);

    const wrapper = frame.locator('.wrapper-options');
    const chip = wrapper.getByText(itemLabel);
    const chipCloseButton = chip.locator('~ .close-button'); // Используйте текст/роль кнопки закрытия чипа

    await input.click();
    await itemCheckbox.click();
    await expect(chip).toBeVisible();

    await chipCloseButton.click();
    await expect(chip).not.toBeVisible();
  });

  test('should clear all selections on clear icon click', async ({ page }) => {
    await page.goto(`/?path=/story/admiral-2-1-input-treeselect--text-input-playground`);
    const frame = getStorybookFrameLocator(page);

    const input = frame.locator('input[placeholder="Выберите элементы..."]');
    const itemLabel1 = 'Опция 1.1';
    const itemLabel2 = 'Опция 1.2';
    const itemCheckbox1 = frame.locator(`role=checkbox[name="${itemLabel1}"]`);
    const itemCheckbox2 = frame.locator(`role=checkbox[name="${itemLabel2}"]`);

    const wrapper = frame.locator('.wrapper-options');
    const chip1 = wrapper.getByText(itemLabel1);
    const chip2 = wrapper.getByText(itemLabel2, { exact: true });
    const clearIcon = frame.locator('[data-testid="selectClearButton"]');

    await input.click();
    await itemCheckbox1.click();
    await itemCheckbox2.click();
    await expect(chip1).toBeVisible();
    await expect(chip2).toBeVisible();

    await clearIcon.click();
    await expect(chip1).not.toBeVisible();
    await expect(chip2).not.toBeVisible();
  });

  test.skip('should render top and bottom panel', async ({ page }) => {
    await page.goto(`/?path=/story/admiral-2-1-input-treeselect--text-input-with-icon`);
    const frame = getStorybookFrameLocator(page);

    const input = frame.locator('input');
    const dropdown = frame.locator('[data-testid="dropdown-tree"]');
    const topPanel = frame.locator('text=Верхняя панель');
    const bottomPanel = frame.locator('text=Нижняя панель');

    await input.click();
    await expect(dropdown).toBeVisible();
    await expect(topPanel).toBeVisible();
    await expect(bottomPanel).toBeVisible();
  });

  test.skip('should not render top panel when renderTopPanel is false', async ({ page }) => {
    // Убедитесь, что тестовая среда или Story устанавливает renderTopPanel в false
    const input = page.locator('input[placeholder="Выберите элементы..."]');
    const dropdown = page.locator('[data-testid="dropdown-tree"]');
    const topPanel = page.locator('text=Это верхняя панель');

    await input.click();
    await expect(dropdown).toBeVisible();
    await expect(topPanel).not.toBeVisible();
  });

  test.skip('should not render bottom panel when renderBottomPanel is false', async ({ page }) => {
    // Убедитесь, что тестовая среда или Story устанавливает renderBottomPanel в false
    const input = page.locator('input[placeholder="Выберите элементы..."]');
    const dropdown = page.locator('[data-testid="dropdown-tree"]');
    const bottomPanel = page.locator('text=Это нижняя панель');

    await input.click();
    await expect(dropdown).toBeVisible();
    await expect(bottomPanel).not.toBeVisible();
  });

  // Дополнительный тест: проверка функциональности кнопки в верхней панели
  test.skip('should handle click on button in top panel', async ({ page }) => {
    const input = page.locator('input[placeholder="Выберите элементы..."]');
    const dropdown = page.locator('[data-testid="dropdown-tree"]');
    const topPanelButton = page.locator('role=button[name="Действие сверху"]'); // Используйте текст/роль кнопки из renderTopPanel

    await input.click();
    await expect(dropdown).toBeVisible();
    await expect(topPanelButton).toBeVisible();

    // Ожидаем событие в консоли или изменение состояния
    const consoleLog = await page.evaluate(
      () =>
        new Promise<string>((resolve) => {
          const originalLog = console.log;
          console.log = (msg) => {
            resolve(msg as string);
            console.log = originalLog; // Восстанавливаем originalLog
          };
        }),
    );

    await topPanelButton.click();

    // Проверяем, что сообщение из обработчика кнопки появилось в консоли
    // В реальном тесте можно проверить изменение DOM или вызов mock-функции
    expect(consoleLog).toContain('Кнопка в верхней панели нажата');
  });

  // Дополнительный тест: проверка функциональности кнопки в нижней панели
  test.skip('should handle click on button in bottom panel', async ({ page }) => {
    const input = page.locator('input[placeholder="Выберите элементы..."]');
    const dropdown = page.locator('[data-testid="dropdown-tree"]');
    const bottomPanelButton = page.locator('role=button[name="Действие снизу"]'); // Используйте текст/роль кнопки из renderBottomPanel

    await input.click();
    await expect(dropdown).toBeVisible();
    await expect(bottomPanelButton).toBeVisible();

    const consoleLog = await page.evaluate(
      () =>
        new Promise<string>((resolve) => {
          const originalLog = console.log;
          console.log = (msg) => {
            resolve(msg as string);
            console.log = originalLog;
          };
        }),
    );

    await bottomPanelButton.click();

    expect(consoleLog).toContain('Кнопка в нижней панели нажата');
  });

  // Дополнительный тест: проверка отображения количества выбранных элементов в нижней панели
  test.skip('should update count in bottom panel when items are selected', async ({ page }) => {
    const input = page.locator('input[placeholder="Выберите элементы..."]');
    const dropdown = page.locator('[data-testid="dropdown-tree"]');
    const itemLabel1 = 'Подкатегория 1.1';
    const itemLabel2 = 'Подкатегория 2.1';
    const itemCheckbox1 = page.locator(`role=checkbox[name="${itemLabel1}"]`);
    const itemCheckbox2 = page.locator(`role=checkbox[name="${itemLabel2}"]`);
    const bottomPanelCount = page
      .locator('text=Выбрано: 0')
      .or(page.locator('text=Выбрано: 1'))
      .or(page.locator('text=Выбрано: 2')); // Используйте текст счётчика

    await input.click();
    await expect(dropdown).toBeVisible();

    // Проверяем начальное состояние
    await expect(bottomPanelCount).toHaveText('Выбрано: 0');

    await itemCheckbox1.click();
    // Обновление может быть асинхронным, добавим ожидание
    await expect(bottomPanelCount).toHaveText('Выбрано: 1');

    await itemCheckbox2.click();
    await expect(bottomPanelCount).toHaveText('Выбрано: 2');
  });

  // Дополнительный тест: проверка отображения чипсов
  test.skip('should display selected chips correctly', async ({ page }) => {
    const input = page.locator('input[placeholder="Выберите элементы..."]');
    const itemLabel1 = 'Подкатегория 1.1';
    const itemLabel2 = 'Подкатегория 2.1';
    const itemCheckbox1 = page.locator(`role=checkbox[name="${itemLabel1}"]`);
    const itemCheckbox2 = page.locator(`role=checkbox[name="${itemLabel2}"]`);
    const chip1 = page.locator(`role=button[aria-label*="${itemLabel1}"]`);
    const chip2 = page.locator(`role=button[aria-label*="${itemLabel2}"]`);

    await input.click();
    await itemCheckbox1.click();
    await itemCheckbox2.click();

    await expect(chip1).toBeVisible();
    await expect(chip2).toBeVisible();
    await expect(page.locator('text=Подкатегория 1.1')).toBeVisible(); // Проверяем текст внутри чипа
    await expect(page.locator('text=Подкатегория 2.1')).toBeVisible();
  });
});
