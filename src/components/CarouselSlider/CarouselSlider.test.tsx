import { fireEvent, render, screen } from '@testing-library/react';
import { LIGHT_THEME } from '#src/components/themes';
import { ThemeProvider } from 'styled-components';
import { CarouselSlider, CarouselSliderItem } from '../CarouselSlider';

describe('CarouselSlider', () => {
  const carouselSliderRequiredProps = {
    onClick: jest.fn(),

    'data-testid': 'testSlider',
  };
  const testChildren = [...Array(5).keys()].map((item) => {
    return <CarouselSliderItem data-testid={`child`} aria-label={`Item ${item}`} key={item} isCurrent={item === 2} />;
  });
  it('should render correctly with children', () => {
    render(
      <ThemeProvider theme={LIGHT_THEME}>
        <CarouselSlider {...carouselSliderRequiredProps}>{...testChildren}</CarouselSlider>
      </ThemeProvider>,
    );

    const childElements = screen.getAllByTestId('child');
    expect(childElements).toHaveLength(5);
    fireEvent.click(childElements[0]);
    const { onClick } = carouselSliderRequiredProps;
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
