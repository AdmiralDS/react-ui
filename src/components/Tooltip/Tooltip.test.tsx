import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react';
import { ThemeProvider } from 'styled-components';

import type { ITooltipProps } from '.';
import { Tooltip, TOOLTIP_DELAY } from '.';
import { LIGHT_THEME } from '#src/components/themes';

describe('Tooltip', () => {
  jest.useFakeTimers();
  beforeEach(() => {
    jest.clearAllTimers();
  });

  const WrappedComponentWithTooltip = ({ renderContent, withDelay }: ITooltipProps & { withDelay?: boolean }) => {
    const divRef = React.useRef<HTMLDivElement>(null);
    const [visible, setVisible] = React.useState(false);
    const [timer, setTimer] = React.useState<ReturnType<typeof setTimeout>>();

    React.useEffect(() => {
      function show() {
        setTimer(setTimeout(() => setVisible(true), withDelay ? TOOLTIP_DELAY : 0));
      }
      function hide() {
        clearTimeout(timer);
        setVisible(false);
      }
      const div = divRef.current;
      if (div) {
        div.addEventListener('mouseenter', show);
        div.addEventListener('focus', show);
        div.addEventListener('mouseleave', hide);
        div.addEventListener('blur', hide);
        return () => {
          if (timer) clearTimeout(timer);
          div.removeEventListener('mouseenter', show);
          div.removeEventListener('focus', show);
          div.removeEventListener('mouseleave', hide);
          div.removeEventListener('blur', hide);
        };
      }
    }, [divRef.current, setTimer, setVisible, timer]);

    return (
      <ThemeProvider theme={LIGHT_THEME}>
        {visible && <Tooltip targetElement={divRef.current} renderContent={renderContent} />}
        <div ref={divRef} data-testid="wrapped-component">
          Wrapped component
        </div>
      </ThemeProvider>
    );
  };

  it('should render component', () => {
    const wrapper = render(<WrappedComponentWithTooltip targetElement={null} renderContent={() => ''} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render wrapped component', () => {
    const wrapper = render(<WrappedComponentWithTooltip targetElement={null} renderContent={() => ''} />);
    expect(wrapper.getByTestId('wrapped-component')).toHaveTextContent('Wrapped component');
  });

  it('should render tooltip with provided text when mouse enters component', () => {
    const component = <WrappedComponentWithTooltip targetElement={null} renderContent={() => 'tooltipText'} />;
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
    render(<WrappedComponentWithTooltip targetElement={null} renderContent={() => 'tooltipText'} />);
    act(() => {
      fireEvent.focus(screen.getByTestId('wrapped-component'));
      jest.runAllTimers();
    });
    expect(screen.queryByText('tooltipText')).toBeInTheDocument();
  });

  it('should hide tooltip when mouse leaves component', () => {
    render(<WrappedComponentWithTooltip targetElement={null} renderContent={() => 'tooltipText'} />);
    act(() => {
      fireEvent.mouseEnter(screen.getByTestId('wrapped-component'));
      fireEvent.mouseLeave(screen.getByTestId('wrapped-component'));
    });
    expect(screen.queryByText('tooltipText')).not.toBeInTheDocument();
  });

  it('should show tooltip with 1.5 seconds delay if prop "withDelay" is provided', () => {
    render(<WrappedComponentWithTooltip targetElement={null} renderContent={() => 'tooltipText'} withDelay />);
    act(() => {
      const mouseenter = new MouseEvent('mouseenter', {
        bubbles: true,
        cancelable: false,
      });
      fireEvent(screen.getByTestId('wrapped-component'), mouseenter);
    });
    expect(screen.queryByText('tooltipText')).not.toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(1500);
    });
    expect(screen.queryByText('tooltipText')).toBeInTheDocument();
  });
});
