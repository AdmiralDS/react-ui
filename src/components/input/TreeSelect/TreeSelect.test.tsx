import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { TreeSelect } from '#src/components/input/TreeSelect';
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

const renderTreeSelect = (props: Omit<React.ComponentProps<typeof TreeSelect>, 'items'>) =>
  render(
    <ThemeProvider theme={LIGHT_THEME}>
      <TreeSelect items={items} placeholder="Выберите элементы..." {...props} />
    </ThemeProvider>,
  );

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
