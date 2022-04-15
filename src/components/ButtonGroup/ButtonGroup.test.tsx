import { ButtonGroupItem } from '#src/components/ButtonGroup/ButtonGroupItem';
import { ButtonGroup } from '#src/components/ButtonGroup';
import { LIGHT_THEME } from '#src/components/themes';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const BUTTON_TEXT = 'Button';
const BUTTON_CLICK_TEXT = 'Button Click';
const BUTTON_DISABLED_TEXT = 'Button Disabled';

describe('ButtonGroup', () => {
  it('should render component with Button', () => {
    const { container } = render(
      <ThemeProvider theme={LIGHT_THEME}>
        <ButtonGroup dimension={'m'}>
          <ButtonGroupItem>{BUTTON_TEXT}</ButtonGroupItem>
        </ButtonGroup>
      </ThemeProvider>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render component with Buttons', () => {
    const { container } = render(
      <ThemeProvider theme={LIGHT_THEME}>
        <ButtonGroup dimension={'m'}>
          <ButtonGroupItem>{BUTTON_TEXT}</ButtonGroupItem>
          <ButtonGroupItem>{BUTTON_TEXT}</ButtonGroupItem>
          <ButtonGroupItem>{BUTTON_TEXT}</ButtonGroupItem>
          <ButtonGroupItem>{BUTTON_TEXT}</ButtonGroupItem>
        </ButtonGroup>
      </ThemeProvider>,
    );
    expect(container).toMatchSnapshot();
  });

  test('renders the buttonGroup', () => {
    render(
      <ThemeProvider theme={LIGHT_THEME}>
        <ButtonGroup dimension={'m'}>
          <ButtonGroupItem>{BUTTON_TEXT}</ButtonGroupItem>
        </ButtonGroup>
      </ThemeProvider>,
    );
    expect(screen.getByRole('button')).toHaveTextContent(`${BUTTON_TEXT}`);
  });

  test('should call onClick when user clicks on last button', () => {
    const handleClick = jest.fn();
    render(
      <ThemeProvider theme={LIGHT_THEME}>
        <ButtonGroup dimension={'m'}>
          <ButtonGroupItem onClick={handleClick}>{BUTTON_TEXT}</ButtonGroupItem>
          <ButtonGroupItem onClick={handleClick}>{BUTTON_CLICK_TEXT}</ButtonGroupItem>
        </ButtonGroup>
      </ThemeProvider>,
    );

    fireEvent.click(screen.getByText(`${BUTTON_CLICK_TEXT}`));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('Dont should call onClick when user clicks on last button', () => {
    const handleClick = jest.fn();
    render(
      <ThemeProvider theme={LIGHT_THEME}>
        <ButtonGroup dimension={'m'}>
          <ButtonGroupItem onClick={handleClick}>{BUTTON_TEXT}</ButtonGroupItem>
          <ButtonGroupItem disabled onClick={handleClick}>
            {BUTTON_CLICK_TEXT}
          </ButtonGroupItem>
        </ButtonGroup>
      </ThemeProvider>,
    );

    fireEvent.click(screen.getByText(`${BUTTON_CLICK_TEXT}`));
    expect(handleClick).toHaveBeenCalledTimes(0);
  });

  test('should focus on component when user on press key tab', () => {
    const handleClick = jest.fn();
    render(
      <ThemeProvider theme={LIGHT_THEME}>
        <ButtonGroup data-testid="test" dimension={'m'}>
          <ButtonGroupItem data-testid={BUTTON_CLICK_TEXT} onClick={handleClick}>
            {BUTTON_CLICK_TEXT}
          </ButtonGroupItem>
          <ButtonGroupItem data-testid={BUTTON_TEXT} onClick={handleClick}>
            {BUTTON_TEXT}
          </ButtonGroupItem>
          <ButtonGroupItem disabled onClick={handleClick}>
            {BUTTON_DISABLED_TEXT}
          </ButtonGroupItem>
        </ButtonGroup>
      </ThemeProvider>,
    );
    expect(document.body).toHaveFocus();
    userEvent.tab();
    expect(screen.getByTestId(BUTTON_CLICK_TEXT)).toHaveFocus();
    userEvent.tab();
    expect(screen.getByTestId(BUTTON_TEXT)).toHaveFocus();
    userEvent.tab();
    expect(document.body).toHaveFocus();
  });
});
