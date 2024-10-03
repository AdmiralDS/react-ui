import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { LIGHT_THEME } from '#src/components/themes';
import type { TabMenuProps } from '#src/components/TabMenu';
import { TabMenu } from '#src/components/TabMenu';

/**
 * В компоненте TabMenu для вычисления ширины всего компонента используется метод getBoundingClientRect().width.
 * В случае, если пропс mobile равен true, также используется метод scrollIntoView.
 * Для всех этих методов необходимо писать заглушки (mocks), в противном случае scrollIntoView не сработает,
 * а getBoundingClientRect будет возвращать нулевые значения.
 *
 * Вот ссылки с описанием подобных проблем:
 * https://stackoverflow.com/questions/38656541/change-element-size-using-jest
 * https://github.com/jsdom/jsdom/issues/135#issuecomment-68191941
 * Насколько я поняла Jest "запускает тесты с помощью поддельной реализации DOM" (через jsdom),
 * но jsdom справляется далеко не со всеми методами dom-элементов.
 *
 * Если не настраивать заглушки, то по умолчанию компонент отрендерится с нулевой шириной и все табы будут спрятаны в меню.
 */

// начальные значения свойств
const originalGetBoundingClientRect =
  Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'getBoundingClientRect') || {};
const originalScrollIntoView =
  Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'scrollIntoView') || (() => undefined);

// устанавливаем заглушки
beforeAll(() => {
  class IntersectionObserver {
    observe = jest.fn();
    disconnect = jest.fn();
    unobserve = jest.fn();
  }

  class ResizeObserver {
    observe = jest.fn();
    disconnect = jest.fn();
    unobserve = jest.fn();
  }

  Object.defineProperty(window, 'IntersectionObserver', {
    writable: true,
    configurable: true,
    value: IntersectionObserver,
  });

  Object.defineProperty(window, 'ResizeObserver', {
    writable: true,
    configurable: true,
    value: ResizeObserver,
  });

  Object.defineProperties(HTMLElement.prototype, {
    getBoundingClientRect: {
      // если установить в true, то можно будет перезадавать это свойство в отдельных тестах
      configurable: true,
      get: function () {
        return this.id === 'tabmenu'
          ? () => ({
              // устанавливаю ширину компонента в 1000, чтобы всем табам хватило места
              width: 1000,
              height: 0,
              x: 0,
              y: 0,
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              toJSON: () => undefined,
            })
          : () => ({
              width: 0,
              height: 0,
              x: 0,
              y: 0,
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              toJSON: () => undefined,
            });
      },
    },
  });

  Object.defineProperty(HTMLElement.prototype, 'scrollIntoView', {
    value: () => undefined,
    configurable: true,
    writable: true,
  });
});

// возвращаем начальные значения
afterAll(() => {
  Object.defineProperty(HTMLElement.prototype, 'getBoundingClientRect', originalGetBoundingClientRect);
  Object.defineProperty(HTMLElement.prototype, 'scrollIntoView', originalScrollIntoView);
});

describe('TabMenu', () => {
  const tabs = [
    {
      id: '1',
      content: 'Option 1',
      'data-testid': '1',
      className: 'tag',
    },
    {
      id: '2',
      content: 'Option 22',
      className: 'tag',
    },
    {
      id: '3',
      content: 'Option 333',
      className: 'tag',
    },
  ];
  const Component: React.FC<TabMenuProps> = (props) => {
    return (
      <ThemeProvider theme={LIGHT_THEME}>
        <TabMenu {...props} activeTab="1" tabs={tabs} id="tabmenu" />
      </ThemeProvider>
    );
  };

  // test #1
  it('should render default component', () => {
    const onChange = jest.fn();
    const wrapper = render(<Component activeTab="1" onChange={onChange} tabs={tabs} />);
    expect(wrapper).toMatchSnapshot();
  });

  // test #2
  it('should render mobile component', () => {
    /**
     * Все табы будут выведены в одну строку без меню. Если размеры компонента в тесте не важны,
     * то заглушку для clientWidth прописывать необязательно, обработчик onChange все равно будет вызван
     */
    const mobileOnChange = jest.fn();
    const wrapper = render(<Component activeTab="1" onChange={mobileOnChange} tabs={tabs} mobile />);
    fireEvent.click(wrapper.getAllByRole('tab')[0]);
    expect(mobileOnChange).toBeCalledTimes(1);
  });

  // test #3
  it('should call onChange when user clicks on first tab', () => {
    const onChange = jest.fn();
    const wrapper = render(<Component activeTab="1" onChange={onChange} tabs={tabs} />);
    fireEvent.click(wrapper.getByTestId('1'));
    expect(onChange).toBeCalledTimes(1);
  });
});
