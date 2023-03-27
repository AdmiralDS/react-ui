import { DropDownItem } from '#src/components/DropDownItem';
import { DropDownMenu } from '#src/components/DropDownMenu';
import { LIGHT_THEME } from '#src/components/themes';
import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { ReactComponent as CardSolid } from '@admiral-ds/icons/build/finance/CardSolid.svg';

const category = [
  {
    name: 'Категория 1',
    id: '1',
    content: [
      {
        id: '2',
        label: 'Номер Карты /****45',
        value: 1,
      },
      {
        id: '3',
        label: 'Номер Карты /****75',
        value: 2,
      },
      { id: '4', label: 'Номер Карты /****22', value: 3 },
      {
        id: '5',
        label: 'Номер Карты /****33',
        value: 4,
      },
    ],
  },
  {
    name: 'Категория 2',
    id: '9',
    content: [
      {
        id: '10',
        label: 'Номер Карты /****21',
        value: 5,
      },
      {
        id: '11',
        label: 'Номер Карты /****35',
        value: 6,
      },
      { id: '12', label: 'Номер Карты /****39', value: 7 },
      {
        id: '13',
        label: 'Номер Карты /****41',
        value: 8,
      },
    ],
  },
];

describe('DropDown', () => {
  beforeEach(() => {
    jest.clearAllTimers();
  });

  const mockRef = {
    current: null,
  };

  it('should render component', () => {
    const wrapper = render(
      <ThemeProvider theme={LIGHT_THEME}>
        <DropDownMenu targetRef={mockRef}>
          <DropDownItem value={1}>Option</DropDownItem>
        </DropDownMenu>
      </ThemeProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render small components', () => {
    const wrapper = render(
      <ThemeProvider theme={LIGHT_THEME}>
        <DropDownMenu dimension={'s'} targetRef={mockRef}>
          <DropDownItem dimension={'s'}>Option</DropDownItem>
        </DropDownMenu>
      </ThemeProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render group components', () => {
    const wrapper = render(
      <ThemeProvider theme={LIGHT_THEME}>
        <DropDownMenu tabIndex={-1} targetRef={mockRef}>
          {category.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <DropDownItem disabled key={item.id}>
                  {item.name}
                </DropDownItem>
                {item.content.map((subCategory) => {
                  return (
                    <DropDownItem tabIndex={0} key={subCategory.id} id={subCategory.id}>
                      {subCategory.label} <CardSolid width={24} height={24} />
                      <div>Дополнительный текст</div>
                    </DropDownItem>
                  );
                })}
              </React.Fragment>
            );
          })}
        </DropDownMenu>
        ,
      </ThemeProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should call onClick group when user clicks on component', () => {
    const handleClick = jest.fn();
    const wrapper = render(
      <ThemeProvider theme={LIGHT_THEME}>
        <DropDownMenu tabIndex={-1} targetRef={mockRef}>
          {category.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <DropDownItem disabled key={item.id}>
                  {item.name}
                </DropDownItem>
                {item.content.map((subCategory) => {
                  return (
                    <DropDownItem onClick={handleClick} tabIndex={0} key={subCategory.id} id={subCategory.id}>
                      {subCategory.label} <CardSolid width={24} height={24} />
                      <div>Дополнительный текст</div>
                    </DropDownItem>
                  );
                })}
              </React.Fragment>
            );
          })}
        </DropDownMenu>
        ,
      </ThemeProvider>,
    );
    fireEvent.click(wrapper.getByText(category[0].content[0].label));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should call onClick when user clicks on component', () => {
    const handleClick = jest.fn();
    render(
      <ThemeProvider theme={LIGHT_THEME}>
        <DropDownMenu dimension={'s'} targetRef={mockRef}>
          <DropDownItem onClick={handleClick}>Option</DropDownItem>
        </DropDownMenu>
      </ThemeProvider>,
    );

    fireEvent.click(screen.getByText(`Option`));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
