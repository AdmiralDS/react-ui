import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react';
import { ThemeProvider } from 'styled-components';
import { LIGHT_THEME } from '#src/components/themes';

import type { HintProps } from '../Hint';
import { Hint } from '../Hint';

jest.mock('@admiral-ds/icons/build/service/CloseOutline.svg', () => ({
  ReactComponent: () => <div> CloseOutline </div>,
}));

describe('Hint', () => {
  jest.useFakeTimers();
  beforeEach(() => {
    jest.clearAllTimers();
  });

  const WrappedComponentWithTooltip = ({
    renderContent,
    visibilityTrigger,
  }: Omit<HintProps, 'visible' | 'onVisibilityChange'>) => {
    const [visible, setVisible] = React.useState(false);
    const handleChange = (visible: boolean) => setVisible(visible);
    return (
      <ThemeProvider theme={LIGHT_THEME}>
        <Hint
          visible={visible}
          onVisibilityChange={handleChange}
          anchorId="static-test-id"
          renderContent={renderContent}
          visibilityTrigger={visibilityTrigger}
        >
          <div data-testid="wrapped-component">Wrapped component</div>
        </Hint>
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

  it('should show hint when mouse enters component', () => {
    const tooltipText = 'foo bar baz';
    render(<WrappedComponentWithTooltip renderContent={() => tooltipText} />);
    act(() => {
      fireEvent.mouseEnter(screen.getByTestId('wrapped-component'));
    });
    expect(screen.getByText(tooltipText)).toHaveTextContent(tooltipText);
  });

  it('should hide hint when mouse leaves component', () => {
    const originalRAF = window.requestAnimationFrame;
    const rafCallbacks: Array<FrameRequestCallback> = [];
    window.requestAnimationFrame = (callback: FrameRequestCallback) => {
      rafCallbacks.push(callback);
      return 0;
    };

    render(<WrappedComponentWithTooltip renderContent={() => 'hintText'} />);
    act(() => {
      fireEvent.mouseEnter(screen.getByTestId('wrapped-component'));
    });
    act(() => {
      fireEvent.mouseLeave(screen.getByTestId('wrapped-component'), {
        relatedTarget: document.body,
      });
    });
    // Выполняем все колбэки requestAnimationFrame
    act(() => {
      rafCallbacks.forEach((cb) => cb(0));
      rafCallbacks.length = 0;
    });
    expect(screen.queryByText('hintText')).not.toBeInTheDocument();

    window.requestAnimationFrame = originalRAF;
  });

  it('should show hint when user clicks component', () => {
    render(<WrappedComponentWithTooltip renderContent={() => 'hintText'} visibilityTrigger="click" />);
    act(() => {
      fireEvent.click(screen.getByTestId('wrapped-component'));
    });
    expect(screen.getByText('hintText')).toHaveTextContent('hintText');
  });

  it('should hide hint when user clicks on close button inside hint', () => {
    render(<WrappedComponentWithTooltip renderContent={() => 'hintText'} visibilityTrigger="click" />);
    act(() => {
      fireEvent.click(screen.getByTestId('wrapped-component'));
    });
    act(() => {
      fireEvent.click(screen.getByLabelText('Закрыть подсказку'));
    });
    expect(screen.queryByText('hintText')).not.toBeInTheDocument();
  });

  it('should NOT close hint if selection is inside hint (mouse)', () => {
    render(
      <WrappedComponentWithTooltip
        renderContent={() => <span data-testid="hint-inner">hintText</span>}
        visibilityTrigger="click"
      />,
    );
    act(() => {
      fireEvent.click(screen.getByTestId('wrapped-component'));
    });
    const hintContent = screen.getByText('hintText');

    // Мокаем window.getSelection для jsdom
    const fakeRange = { commonAncestorContainer: hintContent };
    const fakeSelection = {
      rangeCount: 1,
      getRangeAt: () => fakeRange,
    };
    const origGetSelection = window.getSelection;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    window.getSelection = () => fakeSelection as any;

    act(() => {
      fireEvent.mouseDown(document.body);
    });

    expect(screen.getByText('hintText')).toBeInTheDocument();

    window.getSelection = origGetSelection;
  });

  it('should NOT close hint if selection is inside hint (touch)', () => {
    render(
      <WrappedComponentWithTooltip
        renderContent={() => <span data-testid="hint-inner">hintText</span>}
        visibilityTrigger="click"
      />,
    );
    act(() => {
      fireEvent.click(screen.getByTestId('wrapped-component'));
    });
    const hintContent = screen.getByText('hintText');

    // Мокаем window.getSelection для jsdom
    const fakeRange = { commonAncestorContainer: hintContent };
    const fakeSelection = {
      rangeCount: 1,
      getRangeAt: () => fakeRange,
    };
    const origGetSelection = window.getSelection;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    window.getSelection = () => fakeSelection as any;

    // Генерируем touchstart вне Hint
    act(() => {
      const event = new window.Event('touchstart', { bubbles: true });
      document.body.dispatchEvent(event);
    });

    expect(screen.getByText('hintText')).toBeInTheDocument();
    window.getSelection = origGetSelection;
  });

  it('should NOT close hint when clicking interactive element (input) inside hint (mouse)', () => {
    render(
      <WrappedComponentWithTooltip
        renderContent={() => (
          <div>
            <input data-testid="hint-input" defaultValue="abc" />
            <span>hintText</span>
          </div>
        )}
        visibilityTrigger="click"
      />,
    );
    act(() => {
      fireEvent.click(screen.getByTestId('wrapped-component'));
    });

    const input = screen.getByTestId('hint-input');
    act(() => {
      fireEvent.mouseDown(input);
      fireEvent.click(input);
    });

    expect(screen.getByText('hintText')).toBeInTheDocument();
  });

  it('should NOT close hint when touching interactive element (input) inside hint (touch)', () => {
    render(
      <WrappedComponentWithTooltip
        renderContent={() => (
          <div>
            <input data-testid="hint-input-touch" defaultValue="xyz" />
            <span>hintText</span>
          </div>
        )}
        visibilityTrigger="click"
      />,
    );
    act(() => {
      fireEvent.click(screen.getByTestId('wrapped-component'));
    });

    const input = screen.getByTestId('hint-input-touch');
    act(() => {
      const event = new window.Event('touchstart', { bubbles: true });
      input.dispatchEvent(event);
    });

    expect(screen.getByText('hintText')).toBeInTheDocument();
  });
});
