import { useTheme, css } from 'styled-components';
import { memo, useState, useMemo, useRef, useEffect } from 'react';

import { LIGHT_THEME } from '#src/components/themes';
import type { PaginationOneProps } from '#src/components/PaginationOne';
import { passDropdownDataAttributes } from '#src/components/common/utils/splitDataAttributes';

import { MenuButton } from './Menu';
import { PageNumberInput } from './PageNumberInput';

const extendMixin = (mixin?: ReturnType<typeof css>, showPageNumberInput?: boolean) => css`
  width: auto;
  min-width: ${showPageNumberInput ? 80 : 68}px;

  ${mixin};
`;

interface PageSelectProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  dimension: PaginationOneProps['dimension'];
  page: PaginationOneProps['page'];
  pageSize: PaginationOneProps['pageSize'];
  pageSelectDisabled: PaginationOneProps['pageSelectDisabled'];
  totalPages: number;
  localeLabel: ((...props: any) => string) | undefined;
  onChange: PaginationOneProps['onChange'];
  dropMaxHeight: string | number | undefined;
  menuWidth: string | undefined;
  pageNumberDropContainerStyle: PaginationOneProps['pageNumberDropContainerStyle'];
  dropContainerCssMixin: PaginationOneProps['dropContainerCssMixin'];
  showPageNumberInput: boolean;
}

export const PageSelect = memo(
  ({
    page,
    pageSize,
    pageSelectDisabled,
    totalPages,
    localeLabel,
    dimension,
    onChange,
    dropMaxHeight,
    menuWidth,
    pageNumberDropContainerStyle,
    dropContainerCssMixin,
    showPageNumberInput,
    ...props
  }: PageSelectProps) => {
    const theme = useTheme() || LIGHT_THEME;
    const { pageSelectLabel: theme_pageSelectLabel } = theme.locales[theme.currentLocale].paginationOne;
    const pageSelectLabel = localeLabel || theme_pageSelectLabel;

    const [isVisible, setIsVisible] = useState(false);
    const [activePageNumber, setActivePageNumber] = useState<string | undefined>(page.toString());
    const pageNumberInputRef = useRef<HTMLInputElement>(null);

    const dropMenuProps = passDropdownDataAttributes(props);
    const pages = useMemo(() => Array.from({ length: totalPages }, (_, k) => k + 1), [totalPages]);
    const selectedPageNumber = useMemo(() => page.toString(), [page]);

    useEffect(() => {
      setActivePageNumber(page.toString());
    }, [page]);

    const handlePageHover = (activePage?: string) => {
      if (activePage) {
        setActivePageNumber(activePage);
      }
    };

    const handlePageChange = (pageSelected: string) => {
      const page = Number.parseInt(pageSelected, 10);
      onChange({
        page,
        pageSize,
      });
      setIsVisible(false);
    };

    const handleClickOutside = () => {
      setActivePageNumber(selectedPageNumber);

      setIsVisible(false);
    };

    const handleMenuButtonClick = () => {
      if (isVisible) {
        setActivePageNumber(selectedPageNumber);
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    const handleMenuCycle = () => {
      pageNumberInputRef.current?.focus();
      return false;
    };

    return (
      <MenuButton
        dimension={dimension}
        options={pages}
        selected={selectedPageNumber}
        onSelectItem={handlePageChange}
        active={activePageNumber}
        onActivateItem={handlePageHover}
        disabled={pageSelectDisabled}
        aria-label={pageSelectLabel(page, totalPages)}
        menuMaxHeight={pageNumberDropContainerStyle?.menuMaxHeight || dropMaxHeight}
        dropContainerCssMixin={
          pageNumberDropContainerStyle?.dropContainerCssMixin || extendMixin(dropContainerCssMixin, showPageNumberInput)
        }
        dropContainerClassName={pageNumberDropContainerStyle?.dropContainerClassName}
        dropContainerStyle={pageNumberDropContainerStyle?.dropContainerStyle}
        menuWidth={pageNumberDropContainerStyle?.menuWidth || menuWidth}
        dropMenuDataAttributes={dropMenuProps}
        className="current-page-number-with-dropdown"
        isVisible={isVisible}
        onVisibilityChange={setIsVisible}
        onClickOutside={handleClickOutside}
        onClick={handleMenuButtonClick}
        onForwardCycleApprove={handleMenuCycle}
        onBackwardCycleApprove={handleMenuCycle}
        renderTopPanel={
          showPageNumberInput
            ? ({ dimension = 's' }) => {
                return (
                  <PageNumberInput
                    ref={pageNumberInputRef}
                    dimension={dimension}
                    page={page}
                    pageSize={pageSize}
                    totalPages={totalPages}
                    activePageNumber={activePageNumber}
                    setActivePageNumber={setActivePageNumber}
                    setMenuVisible={setIsVisible}
                    onChange={onChange}
                  />
                );
              }
            : undefined
        }
      >
        {page}
      </MenuButton>
    );
  },
);
