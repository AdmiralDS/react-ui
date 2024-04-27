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
    render(<WrappedComponentWithTooltip renderContent={() => 'hintText'} />);
    act(() => {
      fireEvent.mouseEnter(screen.getByTestId('wrapped-component'));
      fireEvent.mouseLeave(screen.getByTestId('wrapped-component'));
    });
    expect(screen.queryByText('hintText')).not.toBeInTheDocument();
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
});
