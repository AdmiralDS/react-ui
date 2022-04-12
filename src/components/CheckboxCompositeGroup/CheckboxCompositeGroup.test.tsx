import { LIGHT_THEME } from '#/components/themes';
import React from 'react';
import { render } from '@testing-library/react';

import { CheckboxCompositeGroup, CheckboxCompositeGroupProps } from './';
import { CheckboxField as Checkbox } from '../form/CheckboxField';
import { CheckboxGroup } from '../CheckboxGroup';
import { ThemeProvider } from 'styled-components';

describe('CheckboxCompositeGroup', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const initialValue = [
    { label: 'Москва', id: '1', checked: false },
    { label: 'Воронеж', id: '2', checked: false },
    { label: 'Самара', id: '3', checked: false },
    { label: 'Омск', id: '4', checked: false },
  ];

  const Component = (props: CheckboxCompositeGroupProps) => (
    <ThemeProvider theme={LIGHT_THEME}>
      <CheckboxCompositeGroup {...props}>
        <Checkbox indeterminate>Города :</Checkbox>
        <CheckboxGroup>
          {initialValue.map((item) => {
            return (
              <Checkbox name={item.label} key={item.id}>
                {item.label}
              </Checkbox>
            );
          })}
        </CheckboxGroup>
      </CheckboxCompositeGroup>
    </ThemeProvider>
  );

  it('should render components', () => {
    const wrapper = render(<Component />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render component with label', () => {
    const wrapper = render(<Component dimension={'m'} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render component with small dimension', () => {
    const wrapper = render(<Component dimension={'s'} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render component with disabled state', () => {
    const wrapper = render(<Component disabled />);
    expect(wrapper).toMatchSnapshot();
  });
});
