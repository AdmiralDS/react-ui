import type { PaginationOneProps } from '#src/components/PaginationOne';
import { PaginationOne } from '#src/components/PaginationOne';
import { DropdownProvider } from '#src/components/DropdownProvider';
import { LIGHT_THEME } from '#src/components/themes';
import { act, useState } from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';

const PAGE_SIZES = [8, 20, 50];
const TOTAL_ITEMS = 100;

const defaultLocale = {
  itemsPerPageText: 'Items per page:',
  pageSelectLabel: (page: number, totalPages: number) => `Page ${page} of ${totalPages}`,
  pageSizeSelectLabel: (pageSize: number, total: number) => `${pageSize} of ${total} records`,
  itemRangeText: (min: number, max: number, total: number) => `${min}-${max} of ${total}`,
  pageRangeText: (total: number) => `of ${total} ${total === 1 ? 'page' : 'pages'}`,
  backwardText: 'Previous page',
  forwardText: 'Next page',
};

type WrapperProps = Partial<PaginationOneProps> & {
  initialPage?: number;
  initialPageSize?: number;
};

const renderPagination = (props: Partial<PaginationOneProps> = {}) => {
  const onChange = props.onChange ?? jest.fn();

  return render(
    <ThemeProvider theme={LIGHT_THEME}>
      <DropdownProvider>
        <PaginationOne
          page={1}
          pageSize={8}
          pageSizes={PAGE_SIZES}
          totalItems={TOTAL_ITEMS}
          onChange={onChange}
          locale={defaultLocale}
          {...props}
        />
      </DropdownProvider>
    </ThemeProvider>,
  );
};

const PaginationOneWrapper = ({ initialPage = 1, initialPageSize = 8, onChange, ...props }: WrapperProps) => {
  const [page, setPage] = useState(initialPage);
  const [pageSize, setPageSize] = useState(initialPageSize);

  const handleChange: PaginationOneProps['onChange'] = (result) => {
    setPage(result.page);
    setPageSize(result.pageSize);
    onChange?.(result);
  };

  return (
    <ThemeProvider theme={LIGHT_THEME}>
      <DropdownProvider>
        <PaginationOne
          page={page}
          pageSize={pageSize}
          pageSizes={PAGE_SIZES}
          totalItems={TOTAL_ITEMS}
          onChange={handleChange}
          locale={defaultLocale}
          {...props}
        />
      </DropdownProvider>
    </ThemeProvider>
  );
};

describe('PaginationOne', () => {
  beforeAll(() => {
    HTMLElement.prototype.scrollIntoView = jest.fn();

    class IntersectionObserver {
      observe = jest.fn();
      disconnect = jest.fn();
      unobserve = jest.fn();
    }

    Object.defineProperty(window, 'IntersectionObserver', {
      writable: true,
      configurable: true,
      value: IntersectionObserver,
    });
  });

  describe('render', () => {
    it('renders complex mode with locale texts and range info', () => {
      render(<PaginationOneWrapper />);

      expect(screen.getByText('Items per page:')).toBeInTheDocument();
      expect(screen.getByText('1-8 of 100')).toBeInTheDocument();
      expect(screen.getByText('of 13 pages')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Page 1 of 13' })).toHaveTextContent('1');
      expect(screen.getByRole('button', { name: '8 of 100 records' })).toHaveTextContent('8');
    });

    it('renders simple mode without page and page size selects', () => {
      render(<PaginationOneWrapper simple />);

      expect(screen.getByText('1-8 of 100')).toBeInTheDocument();
      expect(screen.queryByRole('button', { name: /Page \d+ of \d+/ })).not.toBeInTheDocument();
      expect(screen.queryByRole('button', { name: /of \d+ records/ })).not.toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Next page' })).toBeInTheDocument();
    });

    it('uses theme locale when locale prop is not provided', () => {
      renderPagination({ locale: undefined });

      expect(screen.getByText('Записей на странице:')).toBeInTheDocument();
      expect(screen.getByText('1–8 записей из 100')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Предыдущая страница, выбрать' })).toBeInTheDocument();
    });

    it('applies dimension to navigation buttons', () => {
      renderPagination({ dimension: 's' });

      expect(screen.getByRole('button', { name: 'Previous page' })).toHaveAttribute('data-dimension', 's');
      expect(screen.getByRole('button', { name: 'Next page' })).toHaveAttribute('data-dimension', 's');
    });

    it('passes HTML attributes to the root wrapper', () => {
      const { container } = renderPagination({ className: 'custom-pagination' });

      const root = container.querySelector('.custom-pagination');
      expect(root).toBeInTheDocument();
      expect(root).toHaveAttribute('data-simple', 'false');
    });

    it('sets data-simple on root in simple mode', () => {
      const { container } = renderPagination({ simple: true, className: 'pagination-simple' });

      expect(container.querySelector('.pagination-simple')).toHaveAttribute('data-simple', 'true');
    });

    it('applies leftButtonPropsConfig and rightButtonPropsConfig', () => {
      renderPagination({
        leftButtonPropsConfig: () => ({ 'data-testid': 'pagination-back' }),
        rightButtonPropsConfig: () => ({ 'data-testid': 'pagination-forward' }),
      });

      expect(screen.getByTestId('pagination-back')).toBeInTheDocument();
      expect(screen.getByTestId('pagination-forward')).toBeInTheDocument();
    });

    it('renders all pageSizes options in the dropdown', async () => {
      renderPagination({ pageSizes: [10, 25, 50] });

      await act(async () => {
        fireEvent.click(screen.getByRole('button', { name: '8 of 100 records' }));
      });

      const listbox = await screen.findByRole('listbox');
      expect(within(listbox).getByText('10')).toBeInTheDocument();
      expect(within(listbox).getByText('25')).toBeInTheDocument();
      expect(within(listbox).getByText('50')).toBeInTheDocument();
    });

    it('matches snapshot in complex mode', () => {
      const { container } = render(<PaginationOneWrapper />);
      expect(container).toMatchSnapshot();
    });

    it('matches snapshot in simple mode', () => {
      const { container } = render(<PaginationOneWrapper simple />);
      expect(container).toMatchSnapshot();
    });
  });

  describe('locale', () => {
    it('overrides all locale strings', () => {
      renderPagination({
        locale: {
          itemsPerPageText: 'Rows:',
          pageSelectLabel: (page, total) => `Go to ${page}/${total}`,
          pageSizeSelectLabel: (size) => `Show ${size}`,
          itemRangeText: (min, max, total) => `Showing ${min} to ${max} of ${total}`,
          pageRangeText: (total) => `Total pages: ${total}`,
          backwardText: 'Back',
          forwardText: 'Forward',
        },
      });

      expect(screen.getByText('Rows:')).toBeInTheDocument();
      expect(screen.getByText('Showing 1 to 8 of 100')).toBeInTheDocument();
      expect(screen.getByText('Total pages: 13')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Go to 1/13' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Show 8' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Back' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Forward' })).toBeInTheDocument();
    });

    it('uses singular pageRangeText when there is only one page', () => {
      renderPagination({
        page: 1,
        pageSize: 20,
        totalItems: 15,
        locale: defaultLocale,
      });

      expect(screen.getByText('of 1 page')).toBeInTheDocument();
    });
  });

  describe('drop container styles', () => {
    it('applies pageSizeDropContainerStyle.dropContainerClassName', async () => {
      renderPagination({
        pageSizeDropContainerStyle: { dropContainerClassName: 'custom-page-size-menu' },
      });

      await act(async () => {
        fireEvent.click(screen.getByRole('button', { name: '8 of 100 records' }));
      });

      expect(document.querySelector('.custom-page-size-menu')).toBeInTheDocument();
    });

    it('applies pageNumberDropContainerStyle.dropContainerClassName', async () => {
      renderPagination({
        pageNumberDropContainerStyle: { dropContainerClassName: 'custom-page-number-menu' },
      });

      await act(async () => {
        fireEvent.click(screen.getByRole('button', { name: 'Page 1 of 13' }));
      });

      expect(document.querySelector('.custom-page-number-menu')).toBeInTheDocument();
    });

    it('applies deprecated dropContainerClassName via pageNumberDropContainerStyle', async () => {
      renderPagination({
        pageNumberDropContainerStyle: { dropContainerClassName: 'legacy-drop-menu' },
      });

      await act(async () => {
        fireEvent.click(screen.getByRole('button', { name: 'Page 1 of 13' }));
      });

      expect(document.querySelector('.legacy-drop-menu')).toBeInTheDocument();
    });
  });

  describe('side buttons', () => {
    it('disables back button on the first page and forward button on the last page', () => {
      const { unmount } = render(<PaginationOneWrapper initialPage={1} />);

      expect(screen.getByRole('button', { name: 'Previous page' })).toBeDisabled();
      expect(screen.getByRole('button', { name: 'Next page' })).toBeEnabled();

      unmount();

      render(<PaginationOneWrapper initialPage={13} />);

      expect(screen.getByRole('button', { name: 'Previous page' })).toBeEnabled();
      expect(screen.getByRole('button', { name: 'Next page' })).toBeDisabled();
    });

    it('navigates between pages using side buttons', async () => {
      const handleChange = jest.fn();
      render(<PaginationOneWrapper onChange={handleChange} />);

      await act(async () => {
        fireEvent.click(screen.getByRole('button', { name: 'Next page' }));
      });

      expect(handleChange).toHaveBeenCalledWith({ page: 2, pageSize: 8 });
      expect(screen.getByRole('button', { name: 'Page 2 of 13' })).toHaveTextContent('2');
      expect(screen.getByText('9-16 of 100')).toBeInTheDocument();

      await act(async () => {
        fireEvent.click(screen.getByRole('button', { name: 'Previous page' }));
      });

      expect(handleChange).toHaveBeenLastCalledWith({ page: 1, pageSize: 8 });
      expect(screen.getByRole('button', { name: 'Page 1 of 13' })).toHaveTextContent('1');
    });

    it('navigates in simple mode', async () => {
      const handleChange = jest.fn();
      render(<PaginationOneWrapper simple onChange={handleChange} />);

      await act(async () => {
        fireEvent.click(screen.getByRole('button', { name: 'Next page' }));
      });

      expect(handleChange).toHaveBeenCalledWith({ page: 2, pageSize: 8 });
      expect(screen.getByText('9-16 of 100')).toBeInTheDocument();
    });
  });

  describe('page size select', () => {
    it('changes page size and resets page to 1', async () => {
      const handleChange = jest.fn();
      render(<PaginationOneWrapper initialPage={3} onChange={handleChange} />);

      const pageSizeButton = screen.getByRole('button', { name: '8 of 100 records' });
      await act(async () => {
        fireEvent.click(pageSizeButton);
      });

      const listbox = await screen.findByRole('listbox');
      await act(async () => {
        fireEvent.click(within(listbox).getByText('20'));
      });

      expect(handleChange).toHaveBeenCalledWith({ page: 1, pageSize: 20 });
      expect(screen.getByRole('button', { name: '20 of 100 records' })).toHaveTextContent('20');
      expect(screen.getByText('1-20 of 100')).toBeInTheDocument();
      expect(screen.getByText('of 5 pages')).toBeInTheDocument();
    });

    it('does not open menu when page size select is disabled', async () => {
      render(<PaginationOneWrapper pageSizeSelectDisabled />);

      const pageSizeButton = screen.getByRole('button', { name: '8 of 100 records' });
      expect(pageSizeButton).toBeDisabled();

      await act(async () => {
        fireEvent.click(pageSizeButton);
      });

      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });
  });

  describe('page select', () => {
    it('changes current page from dropdown', async () => {
      const handleChange = jest.fn();
      render(<PaginationOneWrapper onChange={handleChange} />);

      const pageButton = screen.getByRole('button', { name: 'Page 1 of 13' });
      await act(async () => {
        fireEvent.click(pageButton);
      });

      const listbox = await screen.findByRole('listbox');
      await act(async () => {
        fireEvent.click(within(listbox).getByText('3'));
      });

      expect(handleChange).toHaveBeenCalledWith({ page: 3, pageSize: 8 });
      expect(screen.getByRole('button', { name: 'Page 3 of 13' })).toHaveTextContent('3');
      expect(screen.getByText('17-24 of 100')).toBeInTheDocument();
    });

    it('closes dropdown when page button is clicked again', async () => {
      render(<PaginationOneWrapper />);

      const pageButton = screen.getByRole('button', { name: 'Page 1 of 13' });

      await act(async () => {
        fireEvent.click(pageButton);
      });
      expect(await screen.findByRole('listbox')).toBeInTheDocument();

      await act(async () => {
        fireEvent.click(pageButton);
      });
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });

    it('does not open menu when page select is disabled', async () => {
      render(<PaginationOneWrapper pageSelectDisabled />);

      const pageButton = screen.getByRole('button', { name: 'Page 1 of 13' });
      expect(pageButton).toBeDisabled();

      await act(async () => {
        fireEvent.click(pageButton);
      });

      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });
  });

  describe('showPageNumberInput', () => {
    it('changes page after entering number and pressing Enter', async () => {
      const handleChange = jest.fn();
      const user = userEvent.setup();
      render(<PaginationOneWrapper showPageNumberInput onChange={handleChange} />);

      await act(async () => {
        fireEvent.click(screen.getByRole('button', { name: 'Page 1 of 13' }));
      });

      const input = await screen.findByRole('textbox');
      await user.clear(input);
      await user.type(input, '5');
      await user.keyboard('{Enter}');

      expect(handleChange).toHaveBeenCalledWith({ page: 5, pageSize: 8 });
      expect(screen.getByRole('button', { name: 'Page 5 of 13' })).toHaveTextContent('5');
    });

    it('clamps page number to totalPages on Enter', async () => {
      const handleChange = jest.fn();
      const user = userEvent.setup();
      render(<PaginationOneWrapper showPageNumberInput onChange={handleChange} />);

      await act(async () => {
        fireEvent.click(screen.getByRole('button', { name: 'Page 1 of 13' }));
      });

      const input = await screen.findByRole('textbox');
      await user.clear(input);
      await user.type(input, '999');
      await user.keyboard('{Enter}');

      expect(handleChange).toHaveBeenCalledWith({ page: 13, pageSize: 8 });
    });

    it('clamps page number to 1 when value is below minimum', async () => {
      const handleChange = jest.fn();
      const user = userEvent.setup();
      render(<PaginationOneWrapper showPageNumberInput onChange={handleChange} />);

      await act(async () => {
        fireEvent.click(screen.getByRole('button', { name: 'Page 1 of 13' }));
      });

      const input = await screen.findByRole('textbox');
      await user.clear(input);
      await user.type(input, '0');
      await user.keyboard('{Enter}');

      expect(handleChange).toHaveBeenCalledWith({ page: 1, pageSize: 8 });
    });

    it('strips non-digit characters from input', async () => {
      const user = userEvent.setup();
      render(<PaginationOneWrapper showPageNumberInput />);

      await act(async () => {
        fireEvent.click(screen.getByRole('button', { name: 'Page 1 of 13' }));
      });

      const input = await screen.findByRole('textbox');
      await user.clear(input);
      await user.type(input, 'a4b');

      expect(input).toHaveValue('4');
    });

    it('closes menu on Escape without changing page', async () => {
      const handleChange = jest.fn();
      const user = userEvent.setup();
      render(<PaginationOneWrapper showPageNumberInput onChange={handleChange} />);

      await act(async () => {
        fireEvent.click(screen.getByRole('button', { name: 'Page 1 of 13' }));
      });

      const input = await screen.findByRole('textbox');
      await user.clear(input);
      await user.type(input, '5');
      await user.keyboard('{Escape}');

      expect(handleChange).not.toHaveBeenCalled();
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Page 1 of 13' })).toHaveTextContent('1');
    });
  });

  describe('edge cases', () => {
    it('shows one page when totalItems is zero', () => {
      renderPagination({ totalItems: 0 });

      expect(screen.getByText('0-0 of 0')).toBeInTheDocument();
      expect(screen.getByText('of 1 page')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Next page' })).toBeDisabled();
    });

    it('clamps range on the last page when items do not fill the page', () => {
      renderPagination({ page: 13, pageSize: 8, totalItems: 100 });

      expect(screen.getByText('97-100 of 100')).toBeInTheDocument();
    });

    it('uses safe page size when pageSize is zero for total pages calculation', () => {
      renderPagination({ pageSize: 0, totalItems: 50 });

      expect(screen.getByText('of 50 pages')).toBeInTheDocument();
    });

    it('clamps range start when page number exceeds total pages', () => {
      renderPagination({ page: 100, pageSize: 8, totalItems: 10 });

      expect(screen.getByText('10-10 of 10')).toBeInTheDocument();
    });
  });
});
