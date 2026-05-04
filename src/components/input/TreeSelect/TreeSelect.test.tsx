import { render, screen } from '@testing-library/react';
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
