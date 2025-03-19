import { fireEvent, render, screen } from '@testing-library/react';
import { LIGHT_THEME } from '#src/components/themes';
import { ThemeProvider } from 'styled-components';
import { CarouselSliderItem } from '.';

describe('CarouselSliderItem', () => {
  const carouselSliderItemRequiredProps = {
    onClick: jest.fn(),

    'aria-label': 'testItem',
    'data-testid': 'testItem',
  };

  it('should render item with default appearance', () => {
    render(
      <ThemeProvider theme={LIGHT_THEME}>
        <CarouselSliderItem {...carouselSliderItemRequiredProps} key={0} />
      </ThemeProvider>,
    );

    const itemElement = screen.getByTestId('testItem');
    expect(itemElement).toMatchSnapshot();
  });

  it('should render item with primary appearance', () => {
    render(
      <ThemeProvider theme={LIGHT_THEME}>
        <CarouselSliderItem {...carouselSliderItemRequiredProps} key={0} appearance="primary" />
      </ThemeProvider>,
    );

    const itemElement = screen.getByTestId('testItem');
    expect(itemElement).toMatchSnapshot();
  });

  it('should render current item with default appearance', () => {
    render(
      <ThemeProvider theme={LIGHT_THEME}>
        <CarouselSliderItem {...carouselSliderItemRequiredProps} key={0} isCurrent />
      </ThemeProvider>,
    );

    const itemElement = screen.getByTestId('testItem');
    expect(itemElement).toMatchSnapshot();
  });

  it('should render current item with primary appearance', () => {
    render(
      <ThemeProvider theme={LIGHT_THEME}>
        <CarouselSliderItem {...carouselSliderItemRequiredProps} key={0} appearance="primary" isCurrent />
      </ThemeProvider>,
    );

    const itemElement = screen.getByTestId('testItem');
    expect(itemElement).toMatchSnapshot();
  });

  it('should call onClick on item', () => {
    render(
      <ThemeProvider theme={LIGHT_THEME}>
        <CarouselSliderItem {...carouselSliderItemRequiredProps} key={0} />
      </ThemeProvider>,
    );

    const itemElement = screen.getByTestId('testItem');
    fireEvent.click(itemElement);
    const { onClick } = carouselSliderItemRequiredProps;
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
