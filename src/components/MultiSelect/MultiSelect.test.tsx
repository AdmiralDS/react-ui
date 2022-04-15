import { DropDownItem } from '#src/components/DropDownItem';
import { MultiSelect } from '#src/components/MultiSelect';
import { LIGHT_THEME } from '#src/components/themes';
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import userEvent from '@testing-library/user-event';

describe('MultiSelect', () => {
  beforeEach(() => {
    jest.clearAllTimers();
  });

  it('should render component', () => {
    const wrapper = render(
      <ThemeProvider theme={LIGHT_THEME}>
        <MultiSelect value={[]} onChange={() => ''}>
          <DropDownItem value={1}>Option</DropDownItem>
        </MultiSelect>
      </ThemeProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render small components', () => {
    const wrapper = render(
      <ThemeProvider theme={LIGHT_THEME}>
        <MultiSelect dimension={'s'} value={[]} onChange={() => ''}>
          <DropDownItem value={'1'}>Option</DropDownItem>
        </MultiSelect>
      </ThemeProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should open dropDown  when user clicks on component', () => {
    render(
      <ThemeProvider theme={LIGHT_THEME}>
        <MultiSelect data-testid="select" value={[]} onChange={() => ''}>
          <DropDownItem value={'1'}>Option one</DropDownItem>
          <DropDownItem value={'2'}>Option two</DropDownItem>
          <DropDownItem value={'3'}>Option three</DropDownItem>
        </MultiSelect>
      </ThemeProvider>,
    );

    fireEvent.click(screen.getByTestId('select'));

    expect(screen.getByText(`Option one`)).toHaveTextContent(`Option one`);
  });

  it('should open dropDown  when user clicks on option one', () => {
    render(
      <ThemeProvider theme={LIGHT_THEME}>
        <MultiSelect data-testid="select" value={[]} onChange={() => ''}>
          <DropDownItem value={'1'}>Option one</DropDownItem>
          <DropDownItem value={'2'}>Option two</DropDownItem>
          <DropDownItem value={'3'}>Option three</DropDownItem>
        </MultiSelect>
      </ThemeProvider>,
    );

    fireEvent.click(screen.getByTestId('select'));

    expect(screen.getByText(`Option one`)).toHaveTextContent(`Option one`);
    fireEvent.click(screen.getByText(`Option one`));
    expect(screen.getByText(`Option one`)).toHaveTextContent(`Option one`);
  });

  it('should hide dropdown when user presses Escape', () => {
    render(
      <ThemeProvider theme={LIGHT_THEME}>
        <MultiSelect data-testid="select" value={[]} onChange={() => ''}>
          <DropDownItem value={'1'}>Option one</DropDownItem>
          <DropDownItem value={'2'}>Option two</DropDownItem>
          <DropDownItem value={'3'}>Option three</DropDownItem>
        </MultiSelect>
      </ThemeProvider>,
    );

    userEvent.tab();
    const select = screen.getByTestId('select');

    fireEvent.keyDown(select, { key: ' ', code: '32' });

    const menu = screen.getAllByRole('listbox')[0];

    fireEvent.keyDown(menu, { key: 'Escape', code: 'Escape' });

    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });
});
