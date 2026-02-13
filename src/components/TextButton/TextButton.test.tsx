import React from 'react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { render, screen, fireEvent } from '@testing-library/react';
import styled, { ThemeProvider } from 'styled-components';
import { LIGHT_THEME } from '../themes';
import { TextButton } from './index';
import { ReactComponent as AttachFileOutline } from '@admiral-ds/icons/build/system/AttachFileOutline.svg';

const renderWithTheme = (ui: React.ReactElement) => render(<ThemeProvider theme={LIGHT_THEME}>{ui}</ThemeProvider>);

const LeftIcon = () => <span data-testid="left-icon">L</span>;
const RightIcon = () => <span data-testid="right-icon">R</span>;

describe('TextButton', () => {
  test('should render as a button with provided children', () => {
    renderWithTheme(<TextButton name="click me" text="Click me" />);
    const btn = screen.getByRole('button', { name: /click me/i });
    expect(btn).toBeInTheDocument();
  });

  test('should call onClick when clicked if enabled and not loading', () => {
    const onClick = jest.fn();
    renderWithTheme(<TextButton name="click me" text="Click me" onClick={onClick} />);
    const btn = screen.getByRole('button', { name: /click me/i });
    fireEvent.click(btn);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('should not call onClick when disabled', () => {
    const onClick = jest.fn();
    renderWithTheme(
      <TextButton disabled name="click me" text="Click me" onClick={onClick}>
        Click me
      </TextButton>,
    );
    const btn = screen.getByRole('button', { name: /click me/i });
    expect(btn).toHaveAttribute('disabled');
    fireEvent.click(btn);
    expect(onClick).not.toHaveBeenCalled();
  });

  test('should render left and right icons when provided', () => {
    renderWithTheme(<TextButton iconStart={<LeftIcon />} iconEnd={<RightIcon />} text="With Icons" />);
    expect(screen.getByTestId('left-icon')).toBeInTheDocument();
    expect(screen.getByTestId('right-icon')).toBeInTheDocument();
  });

  test('should apply correct dimension styles for dimension="s" vs "m" (snapshot)', () => {
    const { container: small } = renderWithTheme(<TextButton dimension="s">Small</TextButton>);
    const { container: medium } = renderWithTheme(<TextButton dimension="m">Medium</TextButton>);
    expect(small.firstChild).toMatchSnapshot();
    expect(medium.firstChild).toMatchSnapshot();
  });

  test('should render loading indicator and ignore clicks when loading', () => {
    const onClick = jest.fn();
    renderWithTheme(<TextButton loading name="loading" text="Loading" onClick={onClick} />);
    const btn = screen.getByRole('button');
    // Some implementations set aria-busy or data-attributes; assert at least disabled semantics
    expect(btn).toHaveAttribute('aria-busy', 'true');
    fireEvent.click(btn);
    expect(onClick).not.toHaveBeenCalled();
  });

  test('should forward data-testid to the root element', () => {
    renderWithTheme(<TextButton data-testid="text-button">Forward</TextButton>);
    expect(screen.getByTestId('text-button')).toBeInTheDocument();
  });

  test('should set aria-disabled="true" when disabled', () => {
    renderWithTheme(<TextButton disabled>Disabled</TextButton>);
    const btn = screen.getByRole('button');
    expect(btn).toHaveAttribute('aria-disabled', 'true');
  });

  const Row = styled.div`
    display: flex;
    flex-direction: row;
  `;

  const Column = styled.div`
    display: flex;
    flex-direction: column;
  `;

  test('should match snapshot (flex container)', () => {
    const { container: row } = renderWithTheme(
      <Row>
        <TextButton dimension="s" text="Row" iconStart={<AttachFileOutline />} />
      </Row>,
    );

    const { container: column } = renderWithTheme(
      <Column>
        <TextButton dimension="s" text="Column" iconStart={<AttachFileOutline />} iconEnd={<AttachFileOutline />} />
      </Column>,
    );

    expect(row.firstChild).toMatchSnapshot();
    expect(column.firstChild).toMatchSnapshot();
  });

  test('should match styled snapshot (hover/focus states included by jest-styled-components)', () => {
    const { container } = renderWithTheme(<TextButton>Snapshot</TextButton>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
