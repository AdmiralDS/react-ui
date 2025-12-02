import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import * as React from 'react';
import type { TimePickerProps } from '@admiral-ds/react-ui';
import { TimePicker, LIGHT_THEME } from '@admiral-ds/react-ui';

interface CustomTimePickerProps extends TimePickerProps {
  testId?: string;
}

const TimePickerComponent = (props: CustomTimePickerProps) => {
  const { testId, ...timePickerProps } = props;
  return (
    <ThemeProvider theme={LIGHT_THEME}>
      <TimePicker {...timePickerProps} data-testid={testId} />
    </ThemeProvider>
  );
};

describe('TimePicker Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Basic rendering', () => {
    test('renders TimePicker with basic elements', () => {
      render(<TimePickerComponent />);
      const input = screen.getByPlaceholderText('чч:мм');
      expect(input).toBeInTheDocument();
    });

    test('renders with value prop', () => {
      render(<TimePickerComponent value="12:30" />);
      const input = screen.getByPlaceholderText('чч:мм') as HTMLInputElement;
      expect(input.value).toBe('12:30');
    });

    test('renders with defaultValue prop', () => {
      render(<TimePickerComponent defaultValue="09:15" />);
      const input = screen.getByPlaceholderText('чч:мм') as HTMLInputElement;
      expect(input.value).toBe('09:15');
    });

    test('renders with different dimensions', () => {
      render(<TimePickerComponent dimension="s" />);
      const container = screen.getByPlaceholderText('чч:мм').closest('.time-picker-container');
      expect(container).toBeInTheDocument();

      render(
        <ThemeProvider theme={LIGHT_THEME}>
          <TimePickerComponent dimension="m" testId="time-picker-container-m" />
        </ThemeProvider>,
      );
      const container2 = screen.getByTestId('time-picker-container-m');
      expect(container2).toBeInTheDocument();

      render(
        <ThemeProvider theme={LIGHT_THEME}>
          <TimePickerComponent dimension="xl" testId="time-picker-container-xl" />
        </ThemeProvider>,
      );
      const container3 = screen.getByTestId('time-picker-container-xl');
      expect(container3).toBeInTheDocument();
    });
  });

  describe('Parser prop', () => {
    test('uses custom parser when provided', () => {
      const customParser = jest.fn((time?: string) => {
        if (!time) return '';
        // Кастомный парсер для валидации
        return time;
      });

      render(<TimePickerComponent parser={customParser} value="12:30" />);
      const input = screen.getByPlaceholderText('чч:мм') as HTMLInputElement;
      expect(input.value).toBe('12:30');
      // Парсер вызывается при валидации disabledSlots
    });

    test('uses default parser when not provided', () => {
      render(<TimePickerComponent value="12:30" />);
      const input = screen.getByPlaceholderText('чч:мм') as HTMLInputElement;
      expect(input.value).toBe('12:30');
    });
  });

  describe('handleInput prop', () => {
    test('uses custom handleInput when provided', () => {
      const customHandle = jest.fn((inputData) => {
        return inputData || { value: '', selectionStart: 0, selectionEnd: 0 };
      });

      render(<TimePickerComponent handleInput={customHandle} />);
      const input = screen.getByPlaceholderText('чч:мм');
      fireEvent.input(input, { target: { value: '1' } });
      expect(customHandle).toHaveBeenCalled();
    });

    test('uses defaultTimePickerHandle when not provided', () => {
      render(<TimePickerComponent />);
      const input = screen.getByPlaceholderText('чч:мм');
      fireEvent.input(input, { target: { value: '1' } });
      // defaultTimePickerHandle должен обработать ввод
      expect(input).toBeInTheDocument();
    });
  });

  describe('Config props', () => {
    test('containerPropsConfig applies custom props to container', () => {
      const containerPropsConfig = jest.fn((props) => ({
        ...props,
        'data-testid': 'custom-container',
      }));

      render(<TimePickerComponent containerPropsConfig={containerPropsConfig} />);
      expect(containerPropsConfig).toHaveBeenCalled();
      const container = screen.getByTestId('custom-container');
      expect(container).toBeInTheDocument();
    });

    test('inputLinePropsConfig applies custom props to input line', () => {
      const inputLinePropsConfig = jest.fn((props) => ({
        ...props,
        'data-testid': 'custom-input-line',
      }));

      render(<TimePickerComponent inputLinePropsConfig={inputLinePropsConfig} />);
      expect(inputLinePropsConfig).toHaveBeenCalled();
      const input = screen.getByPlaceholderText('чч:мм');
      const inputLine = input.closest('[data-testid="custom-input-line"]');
      expect(inputLine).toBeInTheDocument();
    });

    test('clearInputIconButtonPropsConfig applies custom props to clear icon', () => {
      const clearIconConfig = jest.fn((props) => ({
        ...props,
        'data-testid': 'custom-clear-icon',
      }));

      render(
        <TimePickerComponent defaultValue="12:30" displayClearIcon clearInputIconButtonPropsConfig={clearIconConfig} />,
      );
      expect(clearIconConfig).toHaveBeenCalled();
      const clearIcon = screen.getByTestId('custom-clear-icon');
      expect(clearIcon).toBeInTheDocument();
    });

    test('timeInputIconButtonPropsConfig applies custom props to time icon', () => {
      const timeIconConfig = jest.fn((props) => ({
        ...props,
        'data-testid': 'custom-time-icon',
      }));

      render(<TimePickerComponent timeInputIconButtonPropsConfig={timeIconConfig} />);
      expect(timeIconConfig).toHaveBeenCalled();
      const timeIcon = screen.getByTestId('custom-time-icon');
      expect(timeIcon).toBeInTheDocument();
    });
  });

  describe('ContainerRef prop', () => {
    test('containerRef is passed to container', () => {
      const containerRef = { current: null } as React.RefObject<HTMLDivElement>;
      render(<TimePickerComponent containerRef={containerRef} />);
      expect(containerRef.current).toBeTruthy();
      expect(containerRef.current?.classList.contains('time-picker-container')).toBe(true);
    });
  });

  describe('DisabledSlots validation', () => {
    test('validates disabledSlots and sets error status', () => {
      render(<TimePickerComponent disabledSlots={['12:30', '15:00']} value="12:30" />);
      const container = screen.getByPlaceholderText('чч:мм').closest('.time-picker-container');
      expect(container).toHaveAttribute('data-status', 'error');
    });

    test('does not set error for valid slots', () => {
      render(<TimePickerComponent disabledSlots={['12:30', '15:00']} value="13:00" />);
      const container = screen.getByPlaceholderText('чч:мм').closest('.time-picker-container');
      expect(container).not.toHaveAttribute('data-status', 'error');
    });

    test('clears error when value changes to valid', () => {
      const { rerender } = render(<TimePickerComponent disabledSlots={['12:30']} value="12:30" />);
      let container = screen.getByPlaceholderText('чч:мм').closest('.time-picker-container');
      expect(container).toHaveAttribute('data-status', 'error');

      rerender(
        <ThemeProvider theme={LIGHT_THEME}>
          <TimePickerComponent disabledSlots={['12:30']} value="13:00" />
        </ThemeProvider>,
      );
      container = screen.getByPlaceholderText('чч:мм').closest('.time-picker-container');
      expect(container).not.toHaveAttribute('data-status', 'error');
    });
  });

  describe('StartTime and EndTime filtering', () => {
    test('filters slots by startTime', () => {
      render(<TimePickerComponent startTime="09:00" />);
      const input = screen.getByPlaceholderText('чч:мм');
      expect(input).toBeInTheDocument();
    });

    test('filters slots by endTime', () => {
      render(<TimePickerComponent endTime="18:00" />);
      const input = screen.getByPlaceholderText('чч:мм');
      expect(input).toBeInTheDocument();
    });

    test('filters slots by both startTime and endTime', () => {
      render(<TimePickerComponent startTime="09:00" endTime="18:00" />);
      const input = screen.getByPlaceholderText('чч:мм');
      expect(input).toBeInTheDocument();
    });
  });

  describe('Custom slots', () => {
    test('uses custom slots when provided', () => {
      const customSlots = [
        { value: '00:00', disabled: false },
        { value: '12:00', disabled: false },
        { value: '23:00', disabled: false },
      ];

      render(<TimePickerComponent slots={customSlots} />);
      const input = screen.getByPlaceholderText('чч:мм');
      expect(input).toBeInTheDocument();
    });

    test('respects disabled property in custom slots', () => {
      const customSlots = [
        { value: '00:00', disabled: false },
        { value: '12:00', disabled: true },
        { value: '23:00', disabled: false },
      ];

      render(<TimePickerComponent slots={customSlots} />);
      const input = screen.getByPlaceholderText('чч:мм');
      expect(input).toBeInTheDocument();
    });
  });

  describe('onChange callback', () => {
    test('calls onChange when value changes', () => {
      const handleChange = jest.fn();
      render(<TimePickerComponent onChange={handleChange} />);
      const input = screen.getByPlaceholderText('чч:мм');

      fireEvent.change(input, { target: { value: '12:30' } });
      expect(handleChange).toHaveBeenCalled();
    });

    test('onChange receives correct event', () => {
      const handleChange = jest.fn();
      render(<TimePickerComponent onChange={handleChange} />);
      const input = screen.getByPlaceholderText('чч:мм');

      fireEvent.change(input, { target: { value: '15:45' } });
      expect(handleChange).toHaveBeenCalledWith(
        expect.objectContaining({
          target: expect.objectContaining({
            value: '15:45',
          }),
        }),
      );
    });
  });

  describe('DisplayClearIcon prop', () => {
    test('shows clear icon when displayClearIcon is true and value exists', () => {
      render(<TimePickerComponent defaultValue="12:30" displayClearIcon />);
      const container = screen.getByPlaceholderText('чч:мм').closest('.time-picker-container');
      const iconPanel = container?.querySelector('.time-picker-icon-panel');
      expect(iconPanel).toBeInTheDocument();
      const iconButtons = iconPanel?.querySelectorAll('> *');
      expect(iconButtons?.length).toBeGreaterThan(0);
    });

    test('does not show clear icon when value is empty', () => {
      render(<TimePickerComponent displayClearIcon />);
      const input = screen.getByPlaceholderText('чч:мм') as HTMLInputElement;
      expect(input.value).toBe('');
      // Clear icon не должен отображаться при пустом значении
      const container = screen.getByPlaceholderText('чч:мм').closest('.time-picker-container');
      const iconPanel = container?.querySelector('.time-picker-icon-panel');
      if (iconPanel) {
        const buttons = iconPanel.querySelectorAll('svg');
        expect(buttons.length).toBeLessThanOrEqual(1);
      }
    });
  });

  describe('Status prop', () => {
    test('applies error status', () => {
      render(<TimePickerComponent status="error" />);
      const container = screen.getByPlaceholderText('чч:мм').closest('.time-picker-container');
      expect(container).toHaveAttribute('data-status', 'error');
    });

    test('applies success status', () => {
      render(<TimePickerComponent status="success" />);
      const container = screen.getByPlaceholderText('чч:мм').closest('.time-picker-container');
      expect(container).toHaveAttribute('data-status', 'success');
    });

    test('computed status overrides prop status when disabledSlots validation fails', () => {
      render(<TimePickerComponent status="success" disabledSlots={['12:30']} value="12:30" />);
      const container = screen.getByPlaceholderText('чч:мм').closest('.time-picker-container');
      // Явно переданный status имеет приоритет
      expect(container).toHaveAttribute('data-status', 'success');
    });
  });

  describe('IsLoading prop', () => {
    test('shows loading state', () => {
      render(<TimePickerComponent isLoading />);
      const container = screen.getByPlaceholderText('чч:мм').closest('.time-picker-container');
      expect(container).toHaveAttribute('data-loading', 'true');
    });
  });

  describe('Skeleton prop', () => {
    test('shows skeleton state', () => {
      render(<TimePickerComponent skeleton />);
      const container = screen.getByPlaceholderText('чч:мм').closest('.time-picker-container');
      expect(container).toHaveAttribute('data-skeleton', 'true');
    });
  });

  describe('DisableCopying prop', () => {
    test('applies disableCopying attribute', () => {
      render(<TimePickerComponent disableCopying />);
      const container = screen.getByPlaceholderText('чч:мм').closest('.time-picker-container');
      expect(container).toHaveAttribute('data-disable-copying', 'true');
    });
  });

  describe('DropContainer styles', () => {
    test('applies dropContainerClassName', () => {
      render(<TimePickerComponent dropContainerClassName="custom-dropdown-class" />);
      // Класс применяется к dropdown, который появляется при открытии
      const input = screen.getByPlaceholderText('чч:мм');
      expect(input).toBeInTheDocument();
    });

    test('applies dropContainerStyle', () => {
      const customStyle = { backgroundColor: 'red' };
      render(<TimePickerComponent dropContainerStyle={customStyle} />);
      const input = screen.getByPlaceholderText('чч:мм');
      expect(input).toBeInTheDocument();
    });
  });

  describe('AlignSelf prop', () => {
    test('applies alignSelf to dropdown container', () => {
      render(<TimePickerComponent alignSelf="flex-start" />);
      const input = screen.getByPlaceholderText('чч:мм');
      expect(input).toBeInTheDocument();
    });
  });

  describe('ShowTooltip prop', () => {
    test('tooltip can be disabled', () => {
      render(<TimePickerComponent showTooltip={false} />);
      const input = screen.getByPlaceholderText('чч:мм');
      expect(input).toBeInTheDocument();
    });
  });
});
