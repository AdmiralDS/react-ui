import { DropDownItem } from '#src/components/DropDownItem';
import { Select } from '#src/components/Select';
import { LIGHT_THEME } from '#src/components/themes';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';

describe('Select', () => {
  beforeEach(() => {
    jest.clearAllTimers();
  });

  it('should render component', () => {
    const wrapper = render(
      <ThemeProvider theme={LIGHT_THEME}>
        <Select value={'Селект'} onChange={() => ''}>
          <DropDownItem value={1}>Option</DropDownItem>
        </Select>
      </ThemeProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render small components', () => {
    const wrapper = render(
      <ThemeProvider theme={LIGHT_THEME}>
        <Select dimension={'s'} value={'Селект'} onChange={() => ''}>
          <DropDownItem value={'1'}>Option</DropDownItem>
        </Select>
      </ThemeProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should open dropDown when user clicks on component', () => {
    render(
      <ThemeProvider theme={LIGHT_THEME}>
        <Select data-testid="select" value={'Селект'} onChange={() => ''}>
          <DropDownItem data-testid="select-option" value={'1'}>
            Option one
          </DropDownItem>
          <DropDownItem data-testid="select-option" value={'2'}>
            Option two
          </DropDownItem>
          <DropDownItem data-testid="select-option" value={'3'}>
            Option three
          </DropDownItem>
        </Select>
      </ThemeProvider>,
    );

    fireEvent.click(screen.getByTestId('select'));

    expect(screen.getByText(`Option one`)).toHaveTextContent(`Option one`);
  });

  it('should work with clicks and touch events', () => {
    const handleChange = jest.fn();
    render(
      <ThemeProvider theme={LIGHT_THEME}>
        <Select value="empty" onChange={handleChange}>
          <DropDownItem value="option">Option</DropDownItem>
        </Select>
      </ThemeProvider>,
    );

    fireEvent.click(screen.getByText(`empty`));
    fireEvent.click(screen.getByText(`Option`));
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
