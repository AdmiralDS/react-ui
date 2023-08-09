import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ContentSwitcherItem } from '#src/components/ContentSwitcher/ContentSwitcherItem';
import { ContentSwitcher } from '#src/components/ContentSwitcher';
import { LIGHT_THEME } from '#src/components/themes';

const BUTTON_TEXT = 'Button';
const BUTTON_CLICK_TEXT = 'Button Click';
const BUTTON_DISABLED_TEXT = 'Button Disabled';

describe('ContentSwitcher', () => {
  it('should render component with Button', () => {
    const { container } = render(
      <ThemeProvider theme={LIGHT_THEME}>
        <ContentSwitcher dimension={'m'}>
          <ContentSwitcherItem>{BUTTON_TEXT}</ContentSwitcherItem>
        </ContentSwitcher>
      </ThemeProvider>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render component with Buttons', () => {
    const { container } = render(
      <ThemeProvider theme={LIGHT_THEME}>
        <ContentSwitcher dimension={'m'}>
          <ContentSwitcherItem>{BUTTON_TEXT}</ContentSwitcherItem>
          <ContentSwitcherItem>{BUTTON_TEXT}</ContentSwitcherItem>
          <ContentSwitcherItem>{BUTTON_TEXT}</ContentSwitcherItem>
          <ContentSwitcherItem>{BUTTON_TEXT}</ContentSwitcherItem>
        </ContentSwitcher>
      </ThemeProvider>,
    );
    expect(container).toMatchSnapshot();
  });

  test('renders the ContentSwitcher', () => {
    render(
      <ThemeProvider theme={LIGHT_THEME}>
        <ContentSwitcher dimension={'m'}>
          <ContentSwitcherItem>{BUTTON_TEXT}</ContentSwitcherItem>
        </ContentSwitcher>
      </ThemeProvider>,
    );
    expect(screen.getByRole('button')).toHaveTextContent(`${BUTTON_TEXT}`);
  });

  test('should call onClick when user clicks on last button', () => {
    const handleClick = jest.fn();
    render(
      <ThemeProvider theme={LIGHT_THEME}>
        <ContentSwitcher dimension={'m'}>
          <ContentSwitcherItem onClick={handleClick}>{BUTTON_TEXT}</ContentSwitcherItem>
          <ContentSwitcherItem onClick={handleClick}>{BUTTON_CLICK_TEXT}</ContentSwitcherItem>
        </ContentSwitcher>
      </ThemeProvider>,
    );

    fireEvent.click(screen.getByText(`${BUTTON_CLICK_TEXT}`));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('Dont should call onClick when user clicks on last button', () => {
    const handleClick = jest.fn();
    render(
      <ThemeProvider theme={LIGHT_THEME}>
        <ContentSwitcher dimension={'m'}>
          <ContentSwitcherItem onClick={handleClick}>{BUTTON_TEXT}</ContentSwitcherItem>
          <ContentSwitcherItem disabled onClick={handleClick}>
            {BUTTON_CLICK_TEXT}
          </ContentSwitcherItem>
        </ContentSwitcher>
      </ThemeProvider>,
    );

    fireEvent.click(screen.getByText(`${BUTTON_CLICK_TEXT}`));
    expect(handleClick).toHaveBeenCalledTimes(0);
  });

  test('should focus on component when user on press key tab', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();
    render(
      <ThemeProvider theme={LIGHT_THEME}>
        <ContentSwitcher data-testid="test" dimension={'m'}>
          <ContentSwitcherItem data-testid={BUTTON_CLICK_TEXT} onClick={handleClick}>
            {BUTTON_CLICK_TEXT}
          </ContentSwitcherItem>
          <ContentSwitcherItem data-testid={BUTTON_TEXT} onClick={handleClick}>
            {BUTTON_TEXT}
          </ContentSwitcherItem>
          <ContentSwitcherItem disabled onClick={handleClick}>
            {BUTTON_DISABLED_TEXT}
          </ContentSwitcherItem>
        </ContentSwitcher>
      </ThemeProvider>,
    );
    expect(document.body).toHaveFocus();
    await user.tab();
    expect(screen.getByTestId(BUTTON_CLICK_TEXT)).toHaveFocus();
    await user.tab();
    expect(screen.getByTestId(BUTTON_TEXT)).toHaveFocus();
    await user.tab();
    expect(document.body).toHaveFocus();
  });
});
