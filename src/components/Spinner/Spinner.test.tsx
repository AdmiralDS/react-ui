import React from 'react';
import { render } from '@testing-library/react';

import { Spinner } from './';

describe('Spinner', () => {
  it('should render default component', () => {
    const wrapper = render(<Spinner />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render component with small dimension', () => {
    const wrapper = render(<Spinner dimension="s" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render component with inverse color', () => {
    const wrapper = render(<Spinner inverse />);
    expect(wrapper).toMatchSnapshot();
  });
});
