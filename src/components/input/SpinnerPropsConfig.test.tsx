import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import {
  DateField,
  DateInput,
  DropdownProvider,
  InputField,
  LIGHT_THEME,
  PhoneNumberInput,
  PhoneInputField,
  Select,
  SelectField,
  SuggestField,
  SuggestInput,
  TextInput,
  TimeField,
  TimeInput,
  TimePicker,
  TreeSelect,
} from '@admiral-ds/react-ui';
import type { TextInputProps } from '@admiral-ds/react-ui';
import type { ReactNode } from 'react';

type LoadingProps = Pick<TextInputProps, 'isLoading' | 'dimension' | 'spinnerPropsConfig'>;

const components: [string, (props: LoadingProps) => ReactNode][] = [
  ['TextInput', (props) => <TextInput {...props} />],
  ['TimePicker', (props) => <TimePicker {...props} />],
  ['Select', (props) => <Select {...props} />],
  ['TreeSelect', (props) => <TreeSelect items={[]} {...props} />],
];

const wrappers: [string, (props: LoadingProps) => ReactNode][] = [
  ['DateInput', (props) => <DateInput {...props} />],
  ['TimeInput', (props) => <TimeInput {...props} />],
  ['PhoneNumberInput', (props) => <PhoneNumberInput {...props} />],
  ['SuggestInput', (props) => <SuggestInput {...props} />],
  ['InputField', (props) => <InputField {...props} />],
  ['DateField', (props) => <DateField {...props} />],
  ['TimeField', (props) => <TimeField {...props} />],
  ['SelectField', (props) => <SelectField {...props} />],
  ['SuggestField', (props) => <SuggestField {...props} />],
  ['PhoneInputField', (props) => <PhoneInputField {...props} />],
];

const renderComponent = (component: ReactNode) =>
  render(
    <ThemeProvider theme={LIGHT_THEME}>
      <DropdownProvider>{component}</DropdownProvider>
    </ThemeProvider>,
  );

describe.each(components)('%s spinnerPropsConfig', (_name, component) => {
  test.each(['s', 'm', 'xl'] as const)('passes defaults and applies attributes for dimension %s', (dimension) => {
    const spinnerPropsConfig = jest.fn(() => ({ 'data-test-id': 'loading-spinner', 'aria-label': 'Loading' }));
    const { container } = renderComponent(component({ isLoading: true, dimension, spinnerPropsConfig }));

    const spinner = screen.getByRole('alert');
    expect(spinner).toHaveAttribute('data-test-id', 'loading-spinner');
    expect(spinner).toHaveAttribute('aria-label', 'Loading');
    expect(spinnerPropsConfig).toHaveBeenCalledWith({ dimension: dimension === 's' ? 'ms' : 'm' });
    expect(container.querySelector('input, select')).not.toHaveAttribute('data-test-id');
  });

  test('allows overriding default spinner props', () => {
    renderComponent(component({ isLoading: true, spinnerPropsConfig: () => ({ dimension: 's', role: 'status' }) }));

    expect(screen.getByRole('status')).toHaveStyleRule('width', '16px');
    expect(screen.getByRole('status')).toHaveStyleRule('height', '16px');
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });

  test('does not render or configure a spinner when loading is inactive', () => {
    const spinnerPropsConfig = jest.fn(() => ({ 'data-test-id': 'loading-spinner' }));
    const { rerender } = renderComponent(component({ isLoading: true, spinnerPropsConfig }));
    expect(screen.getByRole('alert')).toBeInTheDocument();
    spinnerPropsConfig.mockClear();

    rerender(
      <ThemeProvider theme={LIGHT_THEME}>
        <DropdownProvider>{component({ isLoading: false, spinnerPropsConfig })}</DropdownProvider>
      </ThemeProvider>,
    );

    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    expect(spinnerPropsConfig).not.toHaveBeenCalled();
  });

  test('keeps default spinner behavior without configuration', () => {
    renderComponent(component({ isLoading: true }));

    expect(screen.getByRole('alert')).toHaveStyle({ width: '24px', height: '24px' });
  });
});

test.each(wrappers)('%s forwards spinnerPropsConfig to its input', (_name, component) => {
  renderComponent(component({ isLoading: true, spinnerPropsConfig: () => ({ 'data-test-id': 'loading-spinner' }) }));

  expect(screen.getByRole('alert')).toHaveAttribute('data-test-id', 'loading-spinner');
});
