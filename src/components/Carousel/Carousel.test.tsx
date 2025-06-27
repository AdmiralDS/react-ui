import { render, fireEvent, screen } from '@testing-library/react';
import { LIGHT_THEME } from '#src/components/themes';
import { ThemeProvider } from 'styled-components';
import { Carousel } from '../Carousel';

describe('Carousel', () => {
  const items = [
    <div key="0" aria-label="el0" data-testid="elem">
      Item 0
    </div>,
    <div key="1" aria-label="el1" data-testid="elem">
      Item 1
    </div>,
    <div key="2" aria-label="el2" data-testid="elem">
      Item 2
    </div>,
  ];
  const prevButtonProps = { 'data-testid': 'prevButton' };
  const nextButtonProps = { 'data-testid': 'nextButton' };

  it('should render correctly', () => {
    render(
      <ThemeProvider theme={LIGHT_THEME}>
        <Carousel data-testid="testCarousel" defaultItem={1}>
          {items}
        </Carousel>
      </ThemeProvider>,
    );
    expect(screen.getByText('Item 0')).toBeInTheDocument();
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
    expect(screen.getByTestId('testCarousel')).toMatchSnapshot();
  });

  it('should render correctly with primary appearance', () => {
    render(
      <ThemeProvider theme={LIGHT_THEME}>
        <Carousel
          data-testid="testCarousel"
          defaultItem={1}
          buttonAppearance="primary"
          sliderAppearance="primary"
          sliderPosition="outer"
        >
          {items}
        </Carousel>
      </ThemeProvider>,
    );
    expect(screen.getByText('Item 0')).toBeInTheDocument();
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
    expect(screen.getByTestId('testCarousel')).toMatchSnapshot();
  });

  it('should render correctly without prev/next buttons', () => {
    render(
      <ThemeProvider theme={LIGHT_THEME}>
        <Carousel
          data-testid="testCarousel"
          prevButtonPropsConfig={() => prevButtonProps}
          nextButtonPropsConfig={() => nextButtonProps}
          showButtons={false}
        >
          {items}
        </Carousel>
      </ThemeProvider>,
    );
    expect(screen.queryByTestId('prevButton')).toBeNull();
    expect(screen.queryByTestId('nextButton')).toBeNull();
    expect(screen.getByTestId('testCarousel')).toMatchSnapshot();
  });

  it('should handle click on next button', () => {
    render(
      <ThemeProvider theme={LIGHT_THEME}>
        <Carousel nextButtonPropsConfig={() => nextButtonProps}>{items}</Carousel>
      </ThemeProvider>,
    );
    fireEvent.click(screen.getByTestId('nextButton'));
    expect(screen.getByText('Item 1')).toBeInTheDocument();
  });

  it('should handle click on prev button', () => {
    render(
      <ThemeProvider theme={LIGHT_THEME}>
        <Carousel defaultItem={1} prevButtonPropsConfig={() => prevButtonProps}>
          {items}
        </Carousel>
      </ThemeProvider>,
    );
    fireEvent.click(screen.getByTestId('prevButton'));
    expect(screen.getByText('Item 0')).toBeInTheDocument();
  });

  it('should render additional items for infinite scroll', () => {
    render(
      <ThemeProvider theme={LIGHT_THEME}>
        <Carousel defaultItem={1} infiniteScroll>
          {items}
        </Carousel>
      </ThemeProvider>,
    );
    expect(screen.getAllByTestId('elem')).toHaveLength(5);
  });
});
