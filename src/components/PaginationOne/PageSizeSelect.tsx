import { useTheme, css } from 'styled-components';
import { memo } from 'react';

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
    ...props
  }: PageSizeSelectProps) => {
    const theme = useTheme() || LIGHT_THEME;
    const { pageSizeSelectLabel: theme_pageSizeSelectLabel } = theme.locales[theme.currentLocale].paginationOne;
    const pageSizeSelectLabel = localeLabel || theme_pageSizeSelectLabel;

    const dropMenuProps = passDropdownDataAttributes(props);

    const handleSizeChange = (pageSizeSelected: string) => {
      const pageSize = Number.parseInt(pageSizeSelected, 10);
      onChange({ page: 1, pageSize: pageSize });
    };

    return (
      <MenuButton
        dimension={dimension}
        options={pageSizes}
        selected={pageSize.toString()}
        onSelectItem={handleSizeChange}
        disabled={pageSizeSelectDisabled}
        aria-label={pageSizeSelectLabel(pageSize, totalItems)}
        menuMaxHeight={pageSizeDropContainerStyle?.menuMaxHeight || dropMaxHeight}
        menuWidth={pageSizeDropContainerStyle?.menuWidth || menuWidth}
        dropContainerCssMixin={pageSizeDropContainerStyle?.dropContainerCssMixin || extendMixin(dropContainerCssMixin)}
        dropContainerClassName={pageSizeDropContainerStyle?.dropContainerClassName}
        dropContainerStyle={pageSizeDropContainerStyle?.dropContainerStyle}
        dropMenuDataAttributes={dropMenuProps}
        className="records-per-page-with-dropdown"
      >
        {pageSize}
      </MenuButton>
    );
  },
);
