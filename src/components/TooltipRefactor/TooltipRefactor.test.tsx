import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { ThemeProvider } from 'styled-components';

import type { ITooltipProps } from '.';
import { Tooltip, TOOLTIP_DELAY } from '.';
import { LIGHT_THEME } from '#src/components/themes';

describe('Tooltip', () => {
  jest.useFakeTimers();
  beforeEach(() => {
    jest.clearAllTimers();
  });

  const WrappedComponentWithTooltip = ({
    renderContent,
    withDelay,
  }: Omit<ITooltipProps, 'targetRef'> & { withDelay?: boolean }) => {
    const divRef = React.useRef<HTMLDivElement>(null);
    const [visible, setVisible] = React.useState(false);
    let showTooltipTimer: any;

    const show = () => {
      showTooltipTimer = window.setTimeout(() => setVisible(true), withDelay ? TOOLTIP_DELAY : 0);
    };
    const hide = () => {
      clearTimeout(showTooltipTimer);
      setVisible(false);
    };

    React.useEffect(() => {
      const button = divRef.current;
      if (button) {
        button.addEventListener('mouseenter', show);
        button.addEventListener('focus', show);
        button.addEventListener('mouseleave', hide);
        button.addEventListener('mousedown', hide);
        button.addEventListener('blur', hide);
        return () => {
          button.removeEventListener('mouseenter', show);
          button.removeEventListener('focus', show);
          button.removeEventListener('mouseleave', hide);
          button.removeEventListener('mousedown', hide);
          button.removeEventListener('blur', hide);
        };
      }
    }, [divRef.current]);

    return (
      <ThemeProvider theme={LIGHT_THEME}>
        {visible && <Tooltip targetRef={divRef} renderContent={renderContent} />}
        <div ref={divRef} data-testid="wrapped-component">
          Wrapped component
        </div>
      </ThemeProvider>
    );
  };

  it('should render component', () => {
    const wrapper = render(<WrappedComponentWithTooltip renderContent={() => ''} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render wrapped component', () => {
    const wrapper = render(<WrappedComponentWithTooltip renderContent={() => ''} />);
    expect(wrapper.getByTestId('wrapped-component')).toHaveTextContent('Wrapped component');
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
