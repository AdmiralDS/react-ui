import { act, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import { TreeSelect } from '#src/components/input/TreeSelect';
import { DropdownProvider } from '#src/components/DropdownProvider';
import { LIGHT_THEME } from '#src/components/themes';
import type { TreeSelectItemProps } from '#src/components/input/TreeSelect/types';

const items: TreeSelectItemProps[] = [
  {
    id: '1',
    label: 'Опция 1',
    checked: false,
    children: [
      { id: '1.1', label: 'Опция 1.1', checked: false },
      {
        id: '1.2',
        label: 'Опция 1.2',
        checked: false,
        children: [
          { id: '1.2.1', label: 'Опция 1.2.1', checked: false },
          { id: '1.2.2', label: 'Опция 1.2.2', checked: false },
        ],
      },
    ],
  },
  { id: '2', label: 'Опция 2', checked: false },
];

const renderTreeSelect = (props: Omit<React.ComponentProps<typeof TreeSelect>, 'items'> = {}) =>
  render(
    <ThemeProvider theme={LIGHT_THEME}>
      <DropdownProvider>
        <TreeSelect items={items} placeholder="Выберите элементы..." {...props} />
      </DropdownProvider>
    </ThemeProvider>,
  );

const getHoveredOption = (label: string) => screen.getByText(label).closest('[data-hovered]') as HTMLElement | null;

describe('TreeSelect showCheckedStrategy', () => {
  test('SHOW_ALL (default) displays parent and child chips', () => {
    renderTreeSelect({
      defaultValue: ['1', '1.1', '1.2', '1.2.1', '1.2.2'],
    });

    expect(screen.getByText('Опция 1')).toBeInTheDocument();
    expect(screen.getByText('Опция 1.2')).toBeInTheDocument();
    expect(screen.getByText('Опция 1.1')).toBeInTheDocument();
    expect(screen.getByText('Опция 1.2.1')).toBeInTheDocument();
    expect(screen.getByText('Опция 1.2.2')).toBeInTheDocument();
  });

  test('SHOW_CHILD displays only leaf chips', () => {
    renderTreeSelect({
      showCheckedStrategy: 'SHOW_CHILD',
      defaultValue: ['1', '1.1', '1.2', '1.2.1', '1.2.2'],
    });

    expect(screen.queryByText('Опция 1')).not.toBeInTheDocument();
    expect(screen.queryByText('Опция 1.2')).not.toBeInTheDocument();
    expect(screen.getByText('Опция 1.1')).toBeInTheDocument();
    expect(screen.getByText('Опция 1.2.1')).toBeInTheDocument();
    expect(screen.getByText('Опция 1.2.2')).toBeInTheDocument();
  });

  test('SHOW_PARENT collapses fully selected branch to parent chip', () => {
    renderTreeSelect({
      showCheckedStrategy: 'SHOW_PARENT',
      defaultValue: ['1.2.1', '1.2.2'],
    });

    expect(screen.getByText('Опция 1.2')).toBeInTheDocument();
    expect(screen.queryByText('Опция 1.2.1')).not.toBeInTheDocument();
    expect(screen.queryByText('Опция 1.2.2')).not.toBeInTheDocument();
  });

  test('SHOW_PARENT keeps child chip when branch selected partially', () => {
    renderTreeSelect({
      showCheckedStrategy: 'SHOW_PARENT',
      defaultValue: ['1.2.1'],
    });

    expect(screen.queryByText('Опция 1.2')).not.toBeInTheDocument();
    expect(screen.getByText('Опция 1.2.1')).toBeInTheDocument();
  });
});

describe('TreeSelect props forwarding', () => {
  test('forwards basic HTML input props to underlying input', () => {
    renderTreeSelect({
      id: 'tree-select-input',
      name: 'treeSelectName',
    });

    const input = screen.getByPlaceholderText('Выберите элементы...') as HTMLInputElement;
    expect(input).toHaveAttribute('id', 'tree-select-input');
    expect(input).toHaveAttribute('name', 'treeSelectName');
  });

  test('disabled state is reflected on open button props', () => {
    renderTreeSelect({
      disabled: true,
      readOnly: false,
      openButtonPropsConfig: () => ({ 'data-testid': 'treeSelectOpenButton' }),
    });

    expect(screen.getByTestId('treeSelectOpenButton')).toHaveAttribute('data-disabled', 'true');
  });

  test('readOnly hides open button', () => {
    renderTreeSelect({
      readOnly: true,
      openButtonPropsConfig: () => ({ 'data-testid': 'treeSelectOpenButton' }),
    });

    expect(screen.queryByTestId('treeSelectOpenButton')).toBeNull();
  });
});

describe('TreeSelect interaction states', () => {
  const openDropdown = () => {
    fireEvent.click(screen.getByPlaceholderText('Выберите элементы...'));
  };

  test('readOnly prevents opening dropdown on input click', () => {
    renderTreeSelect({ readOnly: true, defaultValue: ['1.1'] });

    openDropdown();

    expect(screen.queryByRole('checkbox', { name: 'Опция 1.1' })).not.toBeInTheDocument();
  });

  test('disabled prevents opening dropdown on input click', () => {
    renderTreeSelect({ disabled: true });

    openDropdown();

    expect(screen.queryByRole('checkbox', { name: 'Опция 1.1' })).not.toBeInTheDocument();
  });

  test('isLoading prevents opening dropdown on input click', () => {
    renderTreeSelect({ isLoading: true });

    openDropdown();

    expect(screen.queryByRole('checkbox', { name: 'Опция 1.1' })).not.toBeInTheDocument();
  });

  test('isLoading shows spinner', () => {
    renderTreeSelect({ isLoading: true });

    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  test('readOnly hides clear icon when chips are selected', () => {
    renderTreeSelect({
      readOnly: true,
      displayClearIcon: true,
      defaultValue: ['1.1'],
      clearButtonPropsConfig: () => ({ 'data-testid': 'treeSelectClearButton' }),
    });

    expect(screen.queryByTestId('treeSelectClearButton')).toBeNull();
  });

  test('disabled shows clear icon when chips are selected', () => {
    renderTreeSelect({
      disabled: true,
      displayClearIcon: true,
      defaultValue: ['1.1'],
      clearButtonPropsConfig: () => ({ 'data-testid': 'treeSelectClearButton' }),
    });

    expect(screen.getByTestId('treeSelectClearButton')).toBeInTheDocument();
    expect(screen.getByTestId('treeSelectClearButton')).toHaveAttribute('disabled');
  });

  test('isLoading shows clear icon alongside spinner when chips are selected', () => {
    renderTreeSelect({
      isLoading: true,
      displayClearIcon: true,
      defaultValue: ['1.1'],
      clearButtonPropsConfig: () => ({ 'data-testid': 'treeSelectClearButton' }),
    });

    expect(screen.getByTestId('treeSelectClearButton')).toBeInTheDocument();
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  test('disabled keeps chip close buttons visible', () => {
    renderTreeSelect({
      disabled: true,
      defaultValue: ['1.1'],
    });

    expect(document.querySelector('.close-button')).toBeInTheDocument();
  });

  test('isLoading keeps chip close buttons visible', () => {
    renderTreeSelect({
      isLoading: true,
      defaultValue: ['1.1'],
    });

    expect(document.querySelector('.close-button')).toBeInTheDocument();
  });

  test('disabled chip close button does not remove chip', () => {
    renderTreeSelect({
      disabled: true,
      defaultValue: ['1.1'],
    });

    const closeButton = document.querySelector('.close-button');
    expect(closeButton).toBeInTheDocument();
    fireEvent.click(closeButton?.parentElement as HTMLElement);

    expect(screen.getByText('Опция 1.1')).toBeInTheDocument();
  });

  test('disabled clear button does not clear selections', () => {
    renderTreeSelect({
      disabled: true,
      displayClearIcon: true,
      defaultValue: ['1.1'],
      clearButtonPropsConfig: () => ({ 'data-testid': 'treeSelectClearButton' }),
    });

    fireEvent.click(screen.getByTestId('treeSelectClearButton'));

    expect(screen.getByText('Опция 1.1')).toBeInTheDocument();
  });

  test('isLoading chip close button removes chip', () => {
    renderTreeSelect({
      isLoading: true,
      defaultValue: ['1.1'],
    });

    fireEvent.click(document.querySelector('.close-button') as HTMLElement);

    expect(screen.queryByText('Опция 1.1')).not.toBeInTheDocument();
  });

  test('isLoading marks open button as disabled', () => {
    renderTreeSelect({
      isLoading: true,
      openButtonPropsConfig: () => ({ 'data-testid': 'treeSelectOpenButton' }),
    });

    expect(screen.getByTestId('treeSelectOpenButton')).toHaveAttribute('data-disabled', 'true');
  });
});

describe('TreeSelect keyboard navigation', () => {
  test('opens dropdown on Space when focused', async () => {
    const user = userEvent.setup();
    renderTreeSelect();

    await user.tab();
    await user.keyboard('[Space]');

    expect(screen.getByRole('checkbox', { name: 'Опция 1' })).toBeInTheDocument();
  });

  test('opens dropdown on ArrowDown when focused', async () => {
    const user = userEvent.setup();
    renderTreeSelect();

    await user.tab();
    await user.keyboard('[ArrowDown]');

    expect(screen.getByRole('checkbox', { name: 'Опция 1' })).toBeInTheDocument();
  });

  test('closes dropdown on Escape', async () => {
    const user = userEvent.setup();
    renderTreeSelect();

    await user.tab();
    await user.keyboard('[Space]');
    expect(screen.getByRole('checkbox', { name: 'Опция 1' })).toBeInTheDocument();

    await user.keyboard('[Escape]');
    expect(screen.queryByRole('checkbox', { name: 'Опция 1' })).not.toBeInTheDocument();
  });

  test('navigates options with ArrowDown', async () => {
    const user = userEvent.setup();
    renderTreeSelect();

    await user.tab();
    await user.keyboard('[Space]');

    expect(getHoveredOption('Опция 1')).toHaveAttribute('data-hovered', 'true');

    await act(async () => {
      fireEvent.keyDown(document, { key: 'ArrowDown', code: 'ArrowDown' });
    });

    expect(getHoveredOption('Опция 1.1')).toHaveAttribute('data-hovered', 'true');
  });

  test('navigates options with ArrowUp', async () => {
    const user = userEvent.setup();
    renderTreeSelect();

    await user.tab();
    await user.keyboard('[Space]');

    await act(async () => {
      fireEvent.keyDown(document, { key: 'ArrowUp', code: 'ArrowUp' });
    });

    expect(getHoveredOption('Опция 2')).toHaveAttribute('data-hovered', 'true');
  });

  test('disabled prevents keyboard open', async () => {
    const user = userEvent.setup();
    renderTreeSelect({ disabled: true });

    await user.tab();
    await user.keyboard('[Space]');

    expect(screen.queryByRole('checkbox', { name: 'Опция 1' })).not.toBeInTheDocument();
  });

  test('navigates with preselectedModeActive using data-preselected', async () => {
    const user = userEvent.setup();
    renderTreeSelect({ preselectedModeActive: true });

    await user.tab();
    await user.keyboard('[Space]');

    const getPreselectedOption = (label: string) =>
      screen.getByText(label).closest('[data-preselected="true"]') as HTMLElement | null;

    expect(getPreselectedOption('Опция 1')).toBeInTheDocument();

    await act(async () => {
      fireEvent.keyDown(document, { key: 'ArrowDown', code: 'ArrowDown' });
    });

    expect(getPreselectedOption('Опция 1.1')).toBeInTheDocument();
  });

  test('navigates to first and last options with Home and End', async () => {
    const user = userEvent.setup();
    renderTreeSelect();

    const input = screen.getByPlaceholderText('Выберите элементы...') as HTMLInputElement;

    await user.tab();
    expect(input).toHaveFocus();

    await user.keyboard('[Space]');
    expect(getHoveredOption('Опция 1')).toHaveAttribute('data-hovered', 'true');

    await user.keyboard('{End}');
    expect(getHoveredOption('Опция 2')).toHaveAttribute('data-hovered', 'true');

    await user.keyboard('{Home}');
    expect(getHoveredOption('Опция 1')).toHaveAttribute('data-hovered', 'true');
  });

  test('does not intercept text-editing keys from input inside renderTopPanel', async () => {
    const user = userEvent.setup();
    renderTreeSelect({
      preselectedModeActive: true,
      renderTopPanel: () => <input data-testid="panel-search" placeholder="Поиск в панели" />,
    });

    await user.tab();
    await user.keyboard('[Space]');

    const getPreselectedOption = (label: string) =>
      screen.getByText(label).closest('[data-preselected="true"]') as HTMLElement | null;

    expect(getPreselectedOption('Опция 1')).toBeInTheDocument();

    const panelInput = screen.getByTestId('panel-search') as HTMLInputElement;
    await user.click(panelInput);
    expect(panelInput).toHaveFocus();

    await user.keyboard('abcd');
    expect(panelInput).toHaveValue('abcd');

    await user.keyboard('{Backspace}');
    expect(panelInput).toHaveValue('abc');

    await user.keyboard('{Home}');
    expect(panelInput.selectionStart).toBe(0);
    expect(getPreselectedOption('Опция 1')).toBeInTheDocument();

    await user.keyboard('{End}');
    expect(panelInput.selectionStart).toBe(3);
    expect(getPreselectedOption('Опция 1')).toBeInTheDocument();

    await user.keyboard('{ArrowLeft}');
    expect(panelInput.selectionStart).toBe(2);
    expect(getPreselectedOption('Опция 1')).toBeInTheDocument();

    await user.keyboard('{ArrowRight}');
    expect(panelInput.selectionStart).toBe(3);
    expect(getPreselectedOption('Опция 1')).toBeInTheDocument();

    // ArrowDown при фокусе в панели двигает preselected, фокус остаётся в input
    await user.keyboard('{ArrowDown}');
    expect(panelInput).toHaveFocus();
    expect(getPreselectedOption('Опция 1.1')).toBeInTheDocument();
  });

  test('selects preselected option from panel input on Enter', async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    renderTreeSelect({
      preselectedModeActive: true,
      onChange: handleChange,
      renderTopPanel: () => <input data-testid="panel-search" defaultValue="Опция 1" />,
    });

    await user.tab();
    await user.keyboard('[Space]');

    const panelInput = screen.getByTestId('panel-search') as HTMLInputElement;
    await user.click(panelInput);
    expect(panelInput).toHaveFocus();

    await user.keyboard('{ArrowDown}');
    await user.keyboard('{Enter}');

    expect(panelInput).toHaveFocus();
    expect(handleChange).toHaveBeenCalled();
    expect(screen.getByRole('checkbox', { name: 'Опция 1.1' })).toBeChecked();
  });

  test('keeps input focus after selecting values and closing dropdown via Escape', async () => {
    const user = userEvent.setup();
    renderTreeSelect();

    const input = screen.getByPlaceholderText('Выберите элементы...') as HTMLInputElement;

    await user.tab();
    expect(input).toHaveFocus();

    await user.keyboard('[Space]');
    await user.keyboard('{End}');
    await user.keyboard('[Space]');

    expect(screen.getByRole('checkbox', { name: 'Опция 2' })).toBeChecked();

    await user.keyboard('[Escape]');
    expect(screen.queryByRole('checkbox', { name: 'Опция 2' })).not.toBeInTheDocument();
    expect(input).toHaveFocus();

    await user.keyboard('[Space]');
    expect(screen.getByRole('checkbox', { name: 'Опция 2' })).toBeInTheDocument();
  });

  test('does not steal focus when dropdown closes by click outside', async () => {
    const user = userEvent.setup();
    render(
      <ThemeProvider theme={LIGHT_THEME}>
        <DropdownProvider>
          <input data-testid="other-field" />
          <TreeSelect items={items} placeholder="Выберите элементы..." />
        </DropdownProvider>
      </ThemeProvider>,
    );

    const treeSelectInput = screen.getByPlaceholderText('Выберите элементы...') as HTMLInputElement;
    const otherField = screen.getByTestId('other-field');

    await user.click(treeSelectInput);
    expect(screen.getByRole('checkbox', { name: 'Опция 1' })).toBeInTheDocument();

    await user.click(otherField);

    expect(screen.queryByRole('checkbox', { name: 'Опция 1' })).not.toBeInTheDocument();
    expect(otherField).toHaveFocus();
    expect(treeSelectInput).not.toHaveFocus();
  });
});
