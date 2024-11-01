import * as React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { LIGHT_THEME } from '#src/components/themes';

import type { BadgeProps } from '.';
import { Badge } from '.';

describe('Badge', () => {
  const Component = (props: BadgeProps) => (
    <ThemeProvider theme={LIGHT_THEME}>
      <Badge {...props}>5</Badge>
    </ThemeProvider>
  );
  it('should render default component', () => {
    const wrapper = render(<Component />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render component with small dimension', () => {
    const wrapper = render(<Component dimension="s" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render component with aria-label', () => {
    const wrapper = render(<Component />);
    expect(wrapper.getAllByLabelText('Количество 5')).toHaveLength(1);
  });
});
