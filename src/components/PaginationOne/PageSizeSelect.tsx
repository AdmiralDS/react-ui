import { useTheme, css } from 'styled-components';
import { memo, useCallback, useEffect, useMemo, useState } from 'react';

import { LIGHT_THEME } from '#src/components/themes';
import type { PaginationOneProps } from '#src/components/PaginationOne';
import { passDropdownDataAttributes } from '#src/components/common/utils/splitDataAttributes';

import { MenuButton } from './Menu';

const extendMixin = (mixin?: ReturnType<typeof css>) => css`
  width: auto;
  min-width: 68px;

  ${mixin};
`;

interface PageSizeSelectProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  dimension: PaginationOneProps['dimension'];
  pageSize: PaginationOneProps['pageSize'];
  pageSizes: PaginationOneProps['pageSizes'];
  pageSizeSelectDisabled: PaginationOneProps['pageSizeSelectDisabled'];
  localeLabel: ((...props: any) => string) | undefined;
  totalItems: PaginationOneProps['totalItems'];
  onChange: PaginationOneProps['onChange'];
  dropMaxHeight: string | number | undefined;
  menuWidth: string | undefined;
  pageSizeDropContainerStyle: PaginationOneProps['pageSizeDropContainerStyle'];
  dropContainerCssMixin: PaginationOneProps['dropContainerCssMixin'];
  preselectedModeActive: boolean;
}

export const PageSizeSelect = memo(
  ({
    pageSize,
    pageSizes,
    pageSizeSelectDisabled,
    localeLabel,
    dimension,
    totalItems,
    onChange,
    dropMaxHeight,
    menuWidth,
    pageSizeDropContainerStyle,
    dropContainerCssMixin,
    preselectedModeActive,
    ...props
  }: PageSizeSelectProps) => {
    const theme = useTheme() || LIGHT_THEME;
    const { pageSizeSelectLabel: theme_pageSizeSelectLabel } = theme.locales[theme.currentLocale].paginationOne;
    const pageSizeSelectLabel = localeLabel || theme_pageSizeSelectLabel;

    const dropMenuProps = passDropdownDataAttributes(props);

    const [isVisible, setIsVisible] = useState(false);
    const [activePageSizeNumber, setActivePageSizeNumber] = useState<string | undefined>(pageSize.toString());
    const [preselectedPageSizeNumber, setPreselectedPageSizeNumber] = useState<string | undefined>(pageSize.toString());
    const selectedPageSizeNumber = useMemo(() => pageSize.toString(), [pageSize]);

    useEffect(() => {
      setActivePageSizeNumber(selectedPageSizeNumber);
      setPreselectedPageSizeNumber(selectedPageSizeNumber);
    }, [selectedPageSizeNumber]);

    const handlePageSizeHover = useCallback((activePageSize?: string) => {
      if (activePageSize) {
        setActivePageSizeNumber(activePageSize);
      }
    }, []);

    const handleClickOutside = useCallback(() => {
      setActivePageSizeNumber(selectedPageSizeNumber);
      setPreselectedPageSizeNumber(selectedPageSizeNumber);
      setIsVisible(false);
    }, [selectedPageSizeNumber]);

    const handleMenuButtonClick = useCallback(() => {
      if (isVisible) {
        setActivePageSizeNumber(selectedPageSizeNumber);
        setPreselectedPageSizeNumber(selectedPageSizeNumber);
        setIsVisible(false);
      } else {
        setPreselectedPageSizeNumber(selectedPageSizeNumber);
        setIsVisible(true);
      }
    }, [isVisible, selectedPageSizeNumber]);

    const handleSizeChange = (pageSizeSelected: string) => {
      const pageSize = Number.parseInt(pageSizeSelected, 10);
      onChange({ page: 1, pageSize: pageSize });
      setIsVisible(false);
    };

    return (
      <MenuButton
        dimension={dimension}
        options={pageSizes}
        selected={selectedPageSizeNumber}
        onSelectItem={handleSizeChange}
        active={activePageSizeNumber}
        preselected={preselectedModeActive ? preselectedPageSizeNumber : undefined}
        onActivateItem={handlePageSizeHover}
        onPreselectItem={preselectedModeActive ? setPreselectedPageSizeNumber : undefined}
        preselectedModeActive={preselectedModeActive}
        disabled={pageSizeSelectDisabled}
        aria-label={pageSizeSelectLabel(pageSize, totalItems)}
        menuMaxHeight={pageSizeDropContainerStyle?.menuMaxHeight || dropMaxHeight}
        menuWidth={pageSizeDropContainerStyle?.menuWidth || menuWidth}
        dropContainerCssMixin={pageSizeDropContainerStyle?.dropContainerCssMixin || extendMixin(dropContainerCssMixin)}
        dropContainerClassName={pageSizeDropContainerStyle?.dropContainerClassName}
        dropContainerStyle={pageSizeDropContainerStyle?.dropContainerStyle}
        dropMenuDataAttributes={dropMenuProps}
        className="records-per-page-with-dropdown"
        isVisible={isVisible}
        onVisibilityChange={setIsVisible}
        onClickOutside={handleClickOutside}
        onClick={handleMenuButtonClick}
      >
        {pageSize}
      </MenuButton>
    );
  },
);
