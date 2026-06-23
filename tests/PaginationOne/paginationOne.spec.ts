import { test, expect } from '@playwright/test';
import { clickAndWait, getStorybookFrameLocator } from '../utils';

const PLAYGROUND_STORY = '/?path=/story/admiral-2-1-data-table-paginationone--playground';
const TYPES_STORY = '/?path=/story/admiral-2-1-data-table-paginationone--pagination-types-example';
const PRESELECT_STORY = '/?path=/story/admiral-2-1-data-table-paginationone--preselect-mode-example';

test.describe('PaginationOne', () => {
  test.describe('render', () => {
    test('renders complex mode with page controls and range text', async ({ page }) => {
      await page.goto(PLAYGROUND_STORY);
      const frame = getStorybookFrameLocator(page);

      await expect(frame.getByText('Записей на странице:')).toBeVisible();
      await expect(frame.getByText('1–8 записей из 100')).toBeVisible();
      await expect(frame.getByText('из 13 страниц')).toBeVisible();
      await expect(frame.locator('.records-per-page-with-dropdown')).toHaveText('8');
      await expect(frame.locator('.current-page-number-with-dropdown')).toHaveText('1');
    });

    test('passes className and data attributes to root', async ({ page }) => {
      await page.goto(PLAYGROUND_STORY);
      const frame = getStorybookFrameLocator(page);

      const root = frame.locator('.pagination-class-name');
      await expect(root).toBeVisible();
      await expect(root).toHaveAttribute('data-dropdown-container-test-id', 'pagination-test-id-with-dropdown');
    });

    test('renders simple mode via story args', async ({ page }) => {
      await page.goto(`${PLAYGROUND_STORY}&args=simple:!true`);
      const frame = getStorybookFrameLocator(page);

      const root = frame.locator('[data-simple="true"]');
      await expect(root).toBeVisible();
      await expect(root.locator('.records-per-page-with-dropdown')).toHaveCount(0);
      await expect(root.locator('.current-page-number-with-dropdown')).toHaveCount(0);
      await expect(root.getByText('1–8 записей из 100')).toBeVisible();
    });

    test('renders dimension s on navigation buttons', async ({ page }) => {
      await page.goto(`${PLAYGROUND_STORY}&args=dimension:s`);
      const frame = getStorybookFrameLocator(page);

      const backButton = frame.getByRole('button', { name: 'Предыдущая страница, выбрать' });
      await expect(backButton).toHaveAttribute('data-dimension', 's');
    });

    test('updates range text when totalItems changes', async ({ page }) => {
      await page.goto(`${PLAYGROUND_STORY}&args=totalItems:25`);
      const frame = getStorybookFrameLocator(page);

      await expect(frame.getByText('1–8 записей из 25')).toBeVisible();
      await expect(frame.getByText('из 4 страниц')).toBeVisible();
    });

    test('shows singular page text when only one page exists', async ({ page }) => {
      await page.goto(`${PLAYGROUND_STORY}&args=totalItems:5`);
      const frame = getStorybookFrameLocator(page);

      await expect(frame.getByText('1–5 записей из 5')).toBeVisible();
      await expect(frame.getByText('из 1 страницы')).toBeVisible();
      await expect(frame.getByRole('button', { name: 'Следующая страница, выбрать' })).toBeDisabled();
    });
  });

  test.describe('navigation', () => {
    test('navigates between pages with side buttons', async ({ page }) => {
      await page.goto(PLAYGROUND_STORY);
      const frame = getStorybookFrameLocator(page);

      const backButton = frame.getByRole('button', { name: 'Предыдущая страница, выбрать' });
      const forwardButton = frame.getByRole('button', { name: 'Следующая страница, выбрать' });

      await expect(backButton).toBeDisabled();
      await expect(forwardButton).toBeEnabled();

      await clickAndWait(forwardButton, page);

      await expect(frame.locator('.current-page-number-with-dropdown')).toHaveText('2');
      await expect(frame.getByText('9–16 записей из 100')).toBeVisible();
      await expect(backButton).toBeEnabled();

      await clickAndWait(backButton, page);

      await expect(frame.locator('.current-page-number-with-dropdown')).toHaveText('1');
      await expect(frame.getByText('1–8 записей из 100')).toBeVisible();
    });

    test('disables forward button on the last page', async ({ page }) => {
      await page.goto(PLAYGROUND_STORY);
      const frame = getStorybookFrameLocator(page);

      const forwardButton = frame.getByRole('button', { name: 'Следующая страница, выбрать' });

      for (let i = 0; i < 12; i++) {
        await clickAndWait(forwardButton, page);
      }

      await expect(frame.locator('.current-page-number-with-dropdown')).toHaveText('13');
      await expect(frame.getByText('97–100 записей из 100')).toBeVisible();
      await expect(forwardButton).toBeDisabled();
    });

    test('navigates in simple mode from types story', async ({ page }) => {
      await page.goto(TYPES_STORY);
      const frame = getStorybookFrameLocator(page);

      const simplePagination = frame.locator('[data-simple="true"]').last();
      const forwardButton = simplePagination.getByRole('button', { name: 'Следующая страница, выбрать' });

      await clickAndWait(forwardButton, page);
      await expect(simplePagination.getByText('9–16 записей из 100')).toBeVisible();
    });
  });

  test.describe('dropdowns', () => {
    test('changes page size from dropdown and resets to first page', async ({ page }) => {
      await page.goto(PLAYGROUND_STORY);
      const frame = getStorybookFrameLocator(page);
      const forwardButton = frame.getByRole('button', { name: 'Следующая страница, выбрать' });

      await clickAndWait(forwardButton, page);
      await expect(frame.locator('.current-page-number-with-dropdown')).toHaveText('2');

      const pageSizeButton = frame.locator('.records-per-page-with-dropdown');
      await clickAndWait(pageSizeButton, page);

      await expect(frame.locator('.pageSizeDropContainerClass')).toBeVisible();
      const pageSizeListbox = frame.getByRole('listbox').last();
      await clickAndWait(pageSizeListbox.getByText('20', { exact: true }), page);

      await expect(pageSizeButton).toHaveText('20');
      await expect(frame.locator('.current-page-number-with-dropdown')).toHaveText('1');
      await expect(frame.getByText('1–20 записей из 100')).toBeVisible();
      await expect(frame.getByText('из 5 страниц')).toBeVisible();
    });

    test('changes page from dropdown', async ({ page }) => {
      await page.goto(PLAYGROUND_STORY);
      const frame = getStorybookFrameLocator(page);

      const pageButton = frame.locator('.current-page-number-with-dropdown');
      await clickAndWait(pageButton, page);

      await expect(frame.locator('.pageNumberDropContainerClass')).toBeVisible();
      const pageListbox = frame.getByRole('listbox').last();
      await clickAndWait(pageListbox.getByText('4', { exact: true }), page);

      await expect(pageButton).toHaveText('4');
      await expect(frame.getByText('25–32 записей из 100')).toBeVisible();
      await expect(frame.getByRole('button', { name: 'Страница 4 из 13' })).toBeVisible();
    });

    test('closes page dropdown when trigger is clicked again', async ({ page }) => {
      await page.goto(PLAYGROUND_STORY);
      const frame = getStorybookFrameLocator(page);

      const pageButton = frame.locator('.current-page-number-with-dropdown');
      await clickAndWait(pageButton, page);
      await expect(frame.getByRole('listbox').last()).toBeVisible();

      await clickAndWait(pageButton, page);
      await expect(frame.getByRole('listbox')).toHaveCount(0);
    });

    test('lists all page size options from playground', async ({ page }) => {
      await page.goto(PLAYGROUND_STORY);
      const frame = getStorybookFrameLocator(page);

      await clickAndWait(frame.locator('.records-per-page-with-dropdown'), page);
      const listbox = frame.getByRole('listbox').last();

      for (const size of ['8', '20', '50', '100', '200']) {
        await expect(listbox.getByText(size, { exact: true })).toBeVisible();
      }
    });
  });

  test.describe('disabled state', () => {
    test('disables only page select', async ({ page }) => {
      await page.goto(`${PLAYGROUND_STORY}&args=pageSelectDisabled:!true`);
      const frame = getStorybookFrameLocator(page);

      await expect(frame.locator('.current-page-number-with-dropdown')).toBeDisabled();
      await expect(frame.locator('.records-per-page-with-dropdown')).toBeEnabled();
    });

    test('disables only page size select', async ({ page }) => {
      await page.goto(`${PLAYGROUND_STORY}&args=pageSizeSelectDisabled:!true`);
      const frame = getStorybookFrameLocator(page);

      await expect(frame.locator('.records-per-page-with-dropdown')).toBeDisabled();
      await expect(frame.locator('.current-page-number-with-dropdown')).toBeEnabled();
    });

    test('disables both selects', async ({ page }) => {
      await page.goto(`${PLAYGROUND_STORY}&args=pageSelectDisabled:!true;pageSizeSelectDisabled:!true`);
      const frame = getStorybookFrameLocator(page);

      await expect(frame.locator('.records-per-page-with-dropdown')).toBeDisabled();
      await expect(frame.locator('.current-page-number-with-dropdown')).toBeDisabled();
    });
  });

  test.describe('page select menu', () => {
    test('navigates options with arrow keys when showPageNumberInput is enabled', async ({ page }) => {
      await page.goto(`${PLAYGROUND_STORY}&args=showPageNumberInput:!true;preselectedModeActive:!true`);
      const frame = getStorybookFrameLocator(page);

      const pageButton = frame.locator('.current-page-number-with-dropdown');
      await clickAndWait(pageButton, page);

      const listbox = frame.getByRole('listbox').last();
      const input = listbox.getByRole('textbox');

      await expect(input).toBeFocused();
      await expect(listbox.locator('[data-preselected="true"]')).toHaveText('1');

      await input.press('ArrowDown');
      await expect(listbox.locator('[data-preselected="true"]')).toHaveText('2');
      await expect(input).toHaveValue('2');

      await input.press('ArrowDown');
      await expect(listbox.locator('[data-preselected="true"]')).toHaveText('3');
      await expect(input).toHaveValue('3');

      await input.press('ArrowUp');
      await expect(listbox.locator('[data-preselected="true"]')).toHaveText('2');
      await expect(input).toHaveValue('2');

      await input.press('Enter');

      await expect(pageButton).toHaveText('2');
      await expect(frame.getByText('9–16 записей из 100')).toBeVisible();
    });
  });

  test.describe('preselect mode', () => {
    test('renders preselect story with enabled mode', async ({ page }) => {
      await page.goto(PRESELECT_STORY);
      const frame = getStorybookFrameLocator(page);

      await expect(frame.locator('.pagination-preselect-story')).toBeVisible();
      await expect(frame.getByText(/preselectedModeActive/)).toBeVisible();
    });

    test('keeps active and preselected separate during keyboard navigation', async ({ page }) => {
      await page.goto(PRESELECT_STORY);
      const frame = getStorybookFrameLocator(page);

      const pageButton = frame.locator('.current-page-number-with-dropdown');
      await clickAndWait(pageButton, page);

      const listbox = frame.getByRole('listbox').last();
      const input = listbox.getByRole('textbox');

      await expect(listbox.locator('[data-hovered="true"]')).toHaveText('1');
      await expect(listbox.locator('[data-preselected="true"]')).toHaveText('1');

      await input.press('ArrowDown');

      await expect(listbox.locator('[data-hovered="true"]')).toHaveText('1');
      await expect(listbox.locator('[data-preselected="true"]')).toHaveText('2');
      await expect(input).toHaveValue('2');
    });

    test('cycles to last page with page number input and renders surrounding options', async ({ page }) => {
      await page.goto(PRESELECT_STORY);
      const frame = getStorybookFrameLocator(page);

      const pageButton = frame.locator('.current-page-number-with-dropdown');
      await clickAndWait(pageButton, page);

      const listbox = frame.getByRole('listbox').last();
      const input = listbox.getByRole('textbox');

      await input.press('ArrowUp');

      await expect(listbox.locator('[data-preselected="true"]')).toHaveText('32');
      await expect(input).toHaveValue('32');
      await expect(listbox.getByText('29', { exact: true })).toBeVisible();
      await expect(listbox.getByText('32', { exact: true })).toBeVisible();
    });

    test('cycles to last page without page number input', async ({ page }) => {
      await page.goto(`${PLAYGROUND_STORY}&args=preselectedModeActive:!true;totalItems:250`);
      const frame = getStorybookFrameLocator(page);

      const pageButton = frame.locator('.current-page-number-with-dropdown');
      await clickAndWait(pageButton, page);

      const listbox = frame.getByRole('listbox').last();

      await page.keyboard.press('ArrowUp');

      await expect(listbox.locator('[data-preselected="true"]')).toHaveText('32');
      await expect(listbox.getByText('29', { exact: true })).toBeVisible();
      await expect(listbox.getByText('32', { exact: true })).toBeVisible();
    });
  });

  test.describe('showPageNumberInput', () => {
    test('changes page via number input on Enter', async ({ page }) => {
      await page.goto(`${PLAYGROUND_STORY}&args=showPageNumberInput:!true`);
      const frame = getStorybookFrameLocator(page);

      const pageButton = frame.locator('.current-page-number-with-dropdown');
      await clickAndWait(pageButton, page);

      const input = frame.getByRole('listbox').last().getByRole('textbox');
      await expect(input).toBeVisible();
      await input.fill('6');
      await input.press('Enter');

      await expect(pageButton).toHaveText('6');
      await expect(frame.getByText('41–48 записей из 100')).toBeVisible();
    });

    test('clamps page number to last page', async ({ page }) => {
      await page.goto(`${PLAYGROUND_STORY}&args=showPageNumberInput:!true`);
      const frame = getStorybookFrameLocator(page);

      const pageButton = frame.locator('.current-page-number-with-dropdown');
      await clickAndWait(pageButton, page);

      const input = frame.getByRole('listbox').last().getByRole('textbox');
      await input.fill('999');
      await input.press('Enter');

      await expect(pageButton).toHaveText('13');
      await expect(frame.getByText('97–100 записей из 100')).toBeVisible();
    });

    test('does not change page on Escape', async ({ page }) => {
      await page.goto(`${PLAYGROUND_STORY}&args=showPageNumberInput:!true`);
      const frame = getStorybookFrameLocator(page);

      const pageButton = frame.locator('.current-page-number-with-dropdown');
      await clickAndWait(pageButton, page);

      const input = frame.getByRole('listbox').last().getByRole('textbox');
      await input.fill('6');
      await input.press('Escape');

      await expect(pageButton).toHaveText('1');
      await expect(frame.getByText('1–8 записей из 100')).toBeVisible();
    });
  });

  test.describe('complex and simple types story', () => {
    test('renders complex mode with both dropdowns', async ({ page }) => {
      await page.goto(TYPES_STORY);
      const frame = getStorybookFrameLocator(page);

      const complexPagination = frame.locator('[data-simple="false"]').first();
      await expect(complexPagination.getByText('Записей на странице:')).toBeVisible();
      await expect(complexPagination.locator('.records-per-page-with-dropdown')).toBeVisible();
      await expect(complexPagination.locator('.current-page-number-with-dropdown')).toBeVisible();
    });

    test('renders simple mode without dropdowns', async ({ page }) => {
      await page.goto(TYPES_STORY);
      const frame = getStorybookFrameLocator(page);

      const simplePagination = frame.locator('[data-simple="true"]').last();
      await expect(simplePagination.getByText(/\d+–\d+ записей из \d+/)).toBeVisible();
      await expect(simplePagination.locator('.records-per-page-with-dropdown')).toHaveCount(0);
      await expect(simplePagination.locator('.current-page-number-with-dropdown')).toHaveCount(0);
    });
  });
});
