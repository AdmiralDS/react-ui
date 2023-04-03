import { render } from '@testing-library/react';
import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import type { SelectTreeProps } from '#src/components/SelectTree';
import { SelectTree } from '#src/components/SelectTree';
import { LIGHT_THEME } from '#src/components/themes';

const selectTreeList = [
  {
    label: 'Текст заголовка, первый уровень компонента, размер M 40 1',
    id: '1',
    checked: false,
    children: [
      {
        label: 'Текст раскрывающейся строки, второй уровень компонента 1',
        id: '1-1',
        checked: false,
      },
      {
        label: 'Текст раскрывающейся строки, второй уровень компонента 2',
        id: '1-2',
        checked: false,
      },
      {
        label: 'Текст раскрывающейся строки, второй уровень компонента 3',
        id: '1-3',
        checked: false,
        children: [
          { label: 'Текст  строки, третий уровень компонента 1', id: '2-1', checked: false },
          { label: 'Текст  строки, третий уровень компонента 2', id: '2-2' },
          { label: 'Текст  строки, третий уровень компонента 3', id: '2-3' },
          { label: 'Текст  строки, третий уровень компонента 4', id: '2-4' },
          {
            label: 'Текст  строки с чекбоксом, третий уровень компонента 5',
            id: '2-5',
            checked: false,
            children: [
              { label: 'Текст  строки с чекбоксом, четвертый уровень компонента 1', id: '3-1', checked: false },
              { label: 'Текст  строки с чекбоксом, четвертый уровень компонента 2', id: '3-2', checked: false },
              {
                label:
                  'Текст  строки с чекбоксом, четвертый уровень компонента. Компонент используется для отображения дерева вложенных списков с возможностью выбора отдельных пунктов по логике\n' +
                  '    чекбоксов. Ширина строки настравивается вручную, по умолчанию это 768px' +
                  '    вложенности.',
                id: '3-3',
                checked: false,
              },
              {
                label: 'Текст  строки с чекбоксом, четвертый уровень компонента 4',
                id: '3-4',
                checked: false,
                children: [
                  { label: 'Текст  строки с чекбоксом, пятый уровень компонента 1', id: '4-1', checked: false },
                  { label: 'Текст  строки с чекбоксом, пятый уровень компонента 2', id: '4-2', checked: false },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  { label: 'Текст заголовка, первый уровень компонента, размер M 40 2', id: '2', checked: false },
  { label: 'Текст заголовка, первый уровень компонента, размер M 40 3', id: '3' },
  { label: 'Текст заголовка, первый уровень компонента, размер M 40 4', id: '4' },
];

describe('SelectTree', () => {
  beforeEach(() => {
    jest.clearAllTimers();
  });

  const Component = (props: SelectTreeProps) => (
    <ThemeProvider theme={LIGHT_THEME}>
      <SelectTree {...props} />
    </ThemeProvider>
  );

  it('should render component', () => {
    const wrapper = render(<Component list={selectTreeList} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render small components', () => {
    const wrapper = render(<Component list={selectTreeList} dimension="s" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render component with expanded lists', () => {
    const wrapper = render(<Component list={selectTreeList} dimension={'m'} expandAll />);
    expect(wrapper).toMatchSnapshot();
  });
});
