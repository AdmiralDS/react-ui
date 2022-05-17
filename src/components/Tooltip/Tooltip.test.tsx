import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { ThemeProvider } from 'styled-components';

import type { ITooltipProps } from '../Tooltip';
import { Tooltip } from '../Tooltip';
import { LIGHT_THEME } from '#src/components/themes';

describe('Tooltip', () => {
  jest.useFakeTimers();
  beforeEach(() => {
    jest.clearAllTimers();
  });

  // jsdom defines innerWidth and innerHeight as 1024 x 768
  const viewPortHeight = window.innerHeight;
  const wrapperHeight = 20;
  const wrapperLeft = 30;
  const wrapperTop = 30;
  const wrapperWidth = 100;
  const tooltipWidth = 120;

  const WrappedComponentWithTooltip = ({ renderContent, withDelay }: ITooltipProps) => (
    <ThemeProvider theme={LIGHT_THEME}>
      <Tooltip renderContent={renderContent} withDelay={withDelay}>
        <div data-testid="wrapped-component">Wrapped component</div>
      </Tooltip>
    </ThemeProvider>
  );

  it('should render component', () => {
    const wrapper = render(<WrappedComponentWithTooltip renderContent={() => ''} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render wrapped component', () => {
    const wrapper = render(<WrappedComponentWithTooltip renderContent={() => ''} />);
    expect(wrapper.getByTestId('wrapped-component')).toHaveTextContent('Wrapped component');
  });

  it('should pass all props to wrapped component', () => {
    const props = {
      className: 'wrappedClassName',
      'data-testId': 'wrappedTestId',
    };
    const wrapper = render(<WrappedComponentWithTooltip {...props} renderContent={() => ''} />);
    const wrappedComponent = wrapper.getByTestId('wrapped-component');
    expect(wrappedComponent.classList.contains('wrappedClassName'));
    expect(wrappedComponent.dataset.testId === 'wrappedTestId');
  });

  it('should render tooltip with provided text when mouse enters component', () => {
    const component = <WrappedComponentWithTooltip renderContent={() => 'tooltipText'} />;
    const { rerender } = render(component);
    act(() => {
      /**
       * Стандартный fireEvent.mouseEnter(smth) вызывает только React SyntheticEvent onMouseEnter,
       * но не вызывает listener, назначенный с помощью addEventListener. В связи с этим пишем свое кастомное событие.
       * https://github.com/testing-library/react-testing-library/issues/577
       */
      const mouseenter = new MouseEvent('mouseenter', {
        bubbles: true,
        cancelable: false,
      });
      fireEvent(screen.getByTestId('wrapped-component'), mouseenter);
      jest.runAllTimers();
    });
    rerender(component);
    expect(screen.getByText('tooltipText')).toHaveTextContent('tooltipText');
  });

  it('should show tooltip when component receives focus', () => {
    const component = <WrappedComponentWithTooltip renderContent={() => 'tooltipText'} />;
    const { rerender } = render(component);
    act(() => {
      fireEvent.focus(screen.getByTestId('wrapped-component'));
      jest.runAllTimers();
    });
    rerender(component);
    const styles = window.getComputedStyle(screen.getByText('tooltipText') as HTMLElement);
    expect(styles.visibility).toBe('visible');
  });

  it('should hide tooltip when mouse leaves component', () => {
    render(<WrappedComponentWithTooltip renderContent={() => 'tooltipText'} />);
    act(() => {
      fireEvent.mouseEnter(screen.getByTestId('wrapped-component'));
      fireEvent.mouseLeave(screen.getByTestId('wrapped-component'));
    });
    expect(screen.queryByText('tooltipText')).not.toBeInTheDocument();
  });

  it('should show tooltip with 1.5 seconds delay if prop "withDelay" is provided', () => {
    const component = <WrappedComponentWithTooltip renderContent={() => 'tooltipText'} withDelay />;
    const { rerender } = render(component);
    act(() => {
      const mouseenter = new MouseEvent('mouseenter', {
        bubbles: true,
        cancelable: false,
      });
      fireEvent(screen.getByTestId('wrapped-component'), mouseenter);
      jest.advanceTimersByTime(1500);
      rerender(component);
    });
    const styles = window.getComputedStyle(screen.getByText('tooltipText') as HTMLElement);
    expect(styles.visibility).toBe('visible');
  });
});
