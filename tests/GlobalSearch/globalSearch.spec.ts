import { expect, test } from '@playwright/test';

import { getStorybookFrameLocator } from '../utils';

test.describe('GlobalSearch', () => {
  test('renders and selects ReactNode prefixes', async ({ page }) => {
    await page.goto('/?path=/story/admiral-2-1-globalsearch--react-node-prefix');
    const frame = getStorybookFrameLocator(page);
    const globalSearch = frame.getByTestId('global-search-react-node-prefix');
    const peoplePrefix = globalSearch.getByTestId('global-search-prefix-people');
    const input = globalSearch.getByPlaceholder('Искать ...');

    await expect(globalSearch).toHaveAttribute('data-dimension', 'xl');
    await expect(input).toBeVisible();
    await expect(peoplePrefix).toBeVisible();
    await expect(peoplePrefix.locator('strong')).toHaveText('People');

    await input.fill('Leia');

    await expect(frame.getByText('Leia Organa', { exact: true })).toBeVisible();
    await expect(frame.getByText('Contract', { exact: true })).toHaveCount(0);

    await frame.getByText('Leia Organa', { exact: true }).click();

    await expect(input).toHaveValue('Leia Organa');

    await peoplePrefix.click();

    const prefixList = frame.getByRole('listbox');
    const documentsOption = prefixList.getByTestId('global-search-prefix-documents');

    await expect(prefixList).toBeVisible();
    await expect(documentsOption.locator('strong')).toHaveText('Documents');

    await documentsOption.click();

    await expect(prefixList).not.toBeVisible();
    await expect(globalSearch.getByTestId('global-search-prefix-documents')).toBeVisible();

    await input.fill('Contr');

    await expect(frame.getByText('Contract', { exact: true })).toBeVisible();
    await expect(frame.getByText('Leia Organa', { exact: true })).toHaveCount(0);

    await frame.getByText('Contract', { exact: true }).click();

    await expect(input).toHaveValue('Contract');
  });
});
