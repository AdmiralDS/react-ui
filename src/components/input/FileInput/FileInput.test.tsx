import * as React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { LIGHT_THEME } from '#src/components/themes';
import { FileInput } from '#src/components/input/FileInput';

const getNativeFileInput = (container: HTMLElement) => container.querySelector('input[type="file"]');

const renderFileInput = (props: React.ComponentProps<typeof FileInput>) =>
  render(
    <ThemeProvider theme={LIGHT_THEME}>
      <FileInput {...props} />
    </ThemeProvider>,
  );

describe('FileInput', () => {
  test('does not pass component-specific props to native file input', () => {
    const { container } = renderFileInput({
      dimension: 'xl',
      title: 'Upload files',
      width: 400,
      status: 'error',
      extraText: 'Error text',
      skeleton: false,
    });

    const input = getNativeFileInput(container);
    expect(input).toBeInTheDocument();
    expect(input).not.toHaveAttribute('skeleton');
    expect(input).not.toHaveAttribute('dimension');
    expect(input).not.toHaveAttribute('width');
    expect(input).not.toHaveAttribute('status');
    expect(input).not.toHaveAttribute('extraText');
  });

  test('shows skeleton state on drop zone wrapper', () => {
    const { container } = renderFileInput({
      dimension: 'xl',
      title: 'Upload files',
      skeleton: true,
    });

    const input = getNativeFileInput(container);
    expect(container.querySelector('[data-skeleton="true"]')).toBeInTheDocument();
    expect(input).toBeDisabled();
    expect(input).not.toHaveAttribute('skeleton');
  });

  test('does not pass skeleton to native input in custom render mode', () => {
    const { container } = renderFileInput({
      dimension: 'm',
      skeleton: false,
      renderCustomFileInput: ({ onQueryUpload }) => (
        <button type="button" onClick={onQueryUpload}>
          Upload
        </button>
      ),
    });

    const input = getNativeFileInput(container);
    expect(input).toBeInTheDocument();
    expect(input).not.toHaveAttribute('skeleton');
  });
});
