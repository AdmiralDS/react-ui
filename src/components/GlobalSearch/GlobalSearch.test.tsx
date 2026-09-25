import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { GlobalSearch } from '#src/components/GlobalSearch';
import { MenuItem } from '#src/components/Menu/MenuItem';
import { LIGHT_THEME } from '#src/components/themes';

describe('GlobalSearch', () => {
  it('renders prefix value as ReactNode', () => {
    render(
      <ThemeProvider theme={LIGHT_THEME}>
        <GlobalSearch
          value=""
          onChange={jest.fn()}
          model={[]}
          prefixValue={<span data-testid="prefix-value">Prefix value</span>}
        />
      </ThemeProvider>,
    );

    expect(screen.getByTestId('prefix-value')).toBeInTheDocument();
  });

  it('renders prefix options as ReactNode', () => {
    const prefixValue = <span data-testid="selected-prefix">Selected prefix</span>;

    render(
      <ThemeProvider theme={LIGHT_THEME}>
        <GlobalSearch
          value=""
          onChange={jest.fn()}
          model={[]}
          prefixValue={prefixValue}
          prefixValueList={[prefixValue, <span key="other">Other prefix</span>]}
        />
      </ThemeProvider>,
    );

    fireEvent.mouseDown(screen.getByTestId('selected-prefix'));

    expect(screen.getAllByTestId('selected-prefix')).toHaveLength(2);
    expect(screen.getByText('Other prefix')).toBeInTheDocument();
  });

  it('passes ReactNode to custom prefix renderers', () => {
    const prefixValue = <span data-testid="custom-prefix-node">Prefix node</span>;

    render(
      <ThemeProvider theme={LIGHT_THEME}>
        <GlobalSearch
          value=""
          onChange={jest.fn()}
          model={[]}
          prefixValue={prefixValue}
          prefixValueList={[prefixValue]}
          renderPrefixValue={({ value }) => <div data-testid="custom-prefix-value">{value}</div>}
          renderPrefixOption={({ value, key, ...props }) => (
            <MenuItem key={key} {...props}>
              <div data-testid="custom-prefix-option">{value}</div>
            </MenuItem>
          )}
        />
      </ThemeProvider>,
    );

    expect(screen.getByTestId('custom-prefix-value')).toContainElement(screen.getByTestId('custom-prefix-node'));

    fireEvent.mouseDown(screen.getByTestId('custom-prefix-node'));

    expect(screen.getByTestId('custom-prefix-option')).toContainElement(screen.getAllByTestId('custom-prefix-node')[1]);
  });
});
