import * as React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { LIGHT_THEME } from '#src/components/themes';
import { FileInputField } from '#src/components/form/FileInputField';

const getNativeFileInput = (container: HTMLElement) => container.querySelector('input[type="file"]');

const renderFileInputField = (props: React.ComponentProps<typeof FileInputField>) =>
  render(
    <ThemeProvider theme={LIGHT_THEME}>
      <FileInputField {...props} />
    </ThemeProvider>,
  );

describe('FileInputField', () => {
  test('does not pass field-only props to native file input', () => {
    const { container } = renderFileInputField({
      dimension: 'xl',
      label: 'Label',
      title: 'Upload files',
      skeleton: false,
      displayInline: false,
      displayCharacterCounter: false,
      characterCounterVisibilityThreshold: 0.8,
      status: 'error',
      extraText: 'Error text',
    });

    const input = getNativeFileInput(container);
    expect(input).toBeInTheDocument();
    expect(input).not.toHaveAttribute('skeleton');
    expect(input).not.toHaveAttribute('characterCounterVisibilityThreshold');
    expect(input).not.toHaveAttribute('displayCharacterCounter');
    expect(input).not.toHaveAttribute('displayInline');
    expect(input).not.toHaveAttribute('status');
    expect(input).not.toHaveAttribute('extraText');
  });

  test('shows skeleton state on drop zone wrapper and disables native input', () => {
    const { container } = renderFileInputField({
      dimension: 'xl',
      label: 'Label',
      title: 'Upload files',
      skeleton: true,
    });

    const input = getNativeFileInput(container);
    expect(container.querySelector('[data-skeleton="true"]')).toBeInTheDocument();
    expect(input).toBeDisabled();
    expect(input).not.toHaveAttribute('skeleton');
  });

  test('passes valid native input attributes to file input', () => {
    const { container } = renderFileInputField({
      dimension: 'xl',
      label: 'Label',
      title: 'Upload files',
      name: 'documents',
      accept: '.pdf',
      'aria-required': true,
    });

    const input = getNativeFileInput(container) as HTMLInputElement;
    expect(input).toHaveAttribute('name', 'documents');
    expect(input).toHaveAttribute('accept', '.pdf');
    expect(input).toHaveAttribute('aria-required', 'true');
  });
});
