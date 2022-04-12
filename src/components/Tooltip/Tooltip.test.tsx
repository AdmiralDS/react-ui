import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { ThemeProvider } from 'styled-components';

import type { ITooltipProps } from '../Tooltip';
import { Tooltip } from '../Tooltip';
import { LIGHT_THEME } from '../themes';

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

  const getTooltipPosition = (direction: 'bottom' | 'left' | 'right' | 'top') => {
    switch (direction) {
      case 'top':
        return 'translate3d(20px, 22px, 0px)';
      case 'left':
        return 'translate3d(12px, 10px, 0px)';
      case 'right':
        return 'translate3d(108px, 10px, 0px)';
      case 'bottom':
      default:
        return 'translate3d(20px, 28px, 0px)';
    }
  };

  const createGetBoundingClientRectMockFn =
    ({
      bottom = 0,
      height = 0,
      left = 0,
      right = 0,
      top = 0,
      width = 0,
    }: {
      bottom?: number;
      height?: number;
      left?: number;
      right?: number;
      top?: number;
      width?: number;
    }) =>
    (): DOMRect => ({
      bottom,
      height,
      left,
      right,
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      toJSON: () => {},
      top,
      width,
      x: left,
      y: top,
    });

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
      fireEvent.mouseEnter(screen.getByTestId('wrapped-component'));
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
      fireEvent.mouseEnter(screen.getByTestId('wrapped-component'));
      jest.advanceTimersByTime(1500);
      rerender(component);
    });
    const styles = window.getComputedStyle(screen.getByText('tooltipText') as HTMLElement);
    expect(styles.visibility).toBe('visible');
  });

  it('should render tooltip in bottom direction by default if bottom space is enough', () => {
    const component = <WrappedComponentWithTooltip renderContent={() => 'tooltipText'} />;
    const { rerender } = render(component);

    const wrappedComponent = screen.getByTestId('wrapped-component').parentElement;
    if (wrappedComponent) {
      wrappedComponent.getBoundingClientRect = createGetBoundingClientRectMockFn({
        left: wrapperLeft,
        height: wrapperHeight,
        bottom: wrapperHeight,
        width: wrapperWidth,
      });
    }

    act(() => {
      fireEvent.mouseEnter(screen.getByTestId('wrapped-component'));
      jest.runAllTimers();
      rerender(component);
    });

    const tooltipComponent = screen.getByText('tooltipText');
    if (tooltipComponent) {
      tooltipComponent.getBoundingClientRect = createGetBoundingClientRectMockFn({
        width: tooltipWidth,
      });
    }

    act(() => {
      fireEvent.mouseEnter(screen.getByTestId('wrapped-component'));
      jest.runAllTimers();
    });

    const tooltipPosition = getTooltipPosition('bottom');
    expect(tooltipComponent?.style.transform.trim()).toBe(tooltipPosition);
  });

  it('should render tooltip in top direction if there is no space bottom', () => {
    const component = <WrappedComponentWithTooltip renderContent={() => 'tooltipText'} />;
    const { rerender } = render(component);

    const wrappedComponent = screen.getByTestId('wrapped-component').parentElement;
    if (wrappedComponent) {
      wrappedComponent.getBoundingClientRect = createGetBoundingClientRectMockFn({
        left: wrapperLeft,
        height: wrapperHeight,
        bottom: viewPortHeight,
        top: wrapperTop,
        width: wrapperWidth,
      });
    }

    act(() => {
      fireEvent.mouseEnter(screen.getByTestId('wrapped-component'));
      jest.runAllTimers();
      rerender(component);
    });

    const tooltipComponent = screen.getByText('tooltipText');
    if (tooltipComponent) {
      tooltipComponent.getBoundingClientRect = createGetBoundingClientRectMockFn({
        width: tooltipWidth,
      });
    }
    act(() => {
      fireEvent.mouseEnter(screen.getByTestId('wrapped-component'));
      jest.runAllTimers();
    });

    const tooltipPosition = getTooltipPosition('top');
    expect(tooltipComponent?.style.transform.trim()).toBe(tooltipPosition);
  });

  it('should render tooltip in left direction if tooltip is wider than wrapped component, there is no space right', () => {
    const component = <WrappedComponentWithTooltip renderContent={() => 'tooltipText'} />;
    const { rerender } = render(component);

    const wrappedComponent = screen.getByTestId('wrapped-component').parentElement;
    if (wrappedComponent) {
      wrappedComponent.getBoundingClientRect = createGetBoundingClientRectMockFn({
        // compensate scrollbar width
        bottom: viewPortHeight - 16,
        top: 0,
        right: 0,
        left: wrapperLeft,
        height: wrapperHeight,
        width: wrapperWidth,
      });
    }

    act(() => {
      fireEvent.mouseEnter(screen.getByTestId('wrapped-component'));
      jest.runAllTimers();
      rerender(component);
    });

    const tooltipComponent = screen.getByText('tooltipText');
    if (tooltipComponent) {
      tooltipComponent.getBoundingClientRect = createGetBoundingClientRectMockFn({
        width: 10,
      });
    }

    act(() => {
      fireEvent.mouseEnter(screen.getByTestId('wrapped-component'));
      jest.runAllTimers();
    });

    const tooltipPosition = getTooltipPosition('left');
    expect(tooltipComponent?.style.transform.trim()).toBe(tooltipPosition);
  });
  it('should render tooltip in right direction if tooltip is wider than wrapped component, there is no space left', () => {
    const component = <WrappedComponentWithTooltip renderContent={() => 'tooltipText'} />;
    const { rerender } = render(component);

    const wrappedComponent = screen.getByTestId('wrapped-component').parentElement;
    if (wrappedComponent) {
      wrappedComponent.getBoundingClientRect = createGetBoundingClientRectMockFn({
        height: wrapperHeight,
        width: wrapperWidth,
        right: wrapperWidth,
      });
    }

    act(() => {
      fireEvent.mouseEnter(screen.getByTestId('wrapped-component'));
      jest.runAllTimers();
      rerender(component);
    });

    const tooltipComponent = screen.getByText('tooltipText');
    if (tooltipComponent) {
      tooltipComponent.getBoundingClientRect = createGetBoundingClientRectMockFn({
        width: tooltipWidth,
      });
    }

    act(() => {
      fireEvent.mouseEnter(screen.getByTestId('wrapped-component'));
      jest.runAllTimers();
    });

    const tooltipPosition = getTooltipPosition('right');
    expect(tooltipComponent?.style.transform.trim()).toBe(tooltipPosition);
  });
});
