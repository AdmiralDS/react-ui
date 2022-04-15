import React from 'react';
import { render } from '@testing-library/react';

import { CheckboxGroup, CheckboxGroupProps } from './';
import { CheckboxField as Checkbox } from '#src/components-ver2/form/CheckboxField';
import { LIGHT_THEME } from '#src/components-ver2/themes';
import { ThemeProvider } from 'styled-components';

describe('CheckboxGroup', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const Component = (props: CheckboxGroupProps) => (
    <ThemeProvider theme={LIGHT_THEME}>
      <CheckboxGroup {...props}>
        <Checkbox>Москва</Checkbox>
        <Checkbox>Воронеж</Checkbox>
        <Checkbox>Самара</Checkbox>
      </CheckboxGroup>
    </ThemeProvider>
  );

  it('should render components', () => {
    const wrapper = render(<Component />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render component with label', () => {
    const wrapper = render(<Component dimension={'m'} label="Выберите города" />);
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
