import * as React from 'react';
import { render } from '@testing-library/react';

import type { CheckboxGroupProps } from './';
import { CheckboxGroup } from './';
import { CheckboxField as Checkbox } from '#src/components/form/CheckboxField';
import { LIGHT_THEME } from '#src/components/themes';
import { ThemeProvider } from 'styled-components';

describe('CheckboxGroup', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const Component = (props: CheckboxGroupProps) => (
    <ThemeProvider theme={LIGHT_THEME}>
      <CheckboxGroup {...props}>
        <Checkbox id="checkboxFieldMoscow">Москва</Checkbox>
        <Checkbox id="checkboxFieldVoronezh">Воронеж</Checkbox>
        <Checkbox id="checkboxFieldSamara">Самара</Checkbox>
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
