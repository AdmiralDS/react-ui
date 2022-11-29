import * as React from 'react';
import type { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
import styled from 'styled-components';

import { OverflowMenu } from '#src/components/OverflowMenu';
import { TooltipHoc } from '#src/components/TooltipHOC';
import type { BreadcrumbProps } from '#src/components/Breadcrumbs/BreadCrumb';
import type { RenderOptionProps } from '#src/components/Menu/MenuItem';
import { MenuItem } from '#src/components/Menu/MenuItem';
import { uid } from '#src/components/common/uid';

const Option = styled.a`
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 100%;
  height: 100%;
  text-decoration: none;

  &,
  &:visited,
  &:hover,
  &:active,
  &:focus {
    color: inherit;
  }
`;

const MenuItemWithTooltip = TooltipHoc(MenuItem);

export interface MenuButtonProps {
  /** Размер меню */
  dimension: 'm' | 's';
  /** Массив опций */
  options: Array<BreadcrumbProps>;
  /** Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css  */
  dropContainerCssMixin?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
}

export const MenuButton: React.FC<MenuButtonProps> = ({ dimension, options, dropContainerCssMixin }) => {
  const model = React.useMemo(() => {
    return options.map((item) => {
      const id = uid();
      return {
        id,
        render: (options: RenderOptionProps) => {
          const tooltip = item.text.length > 40;
          return tooltip ? (
            <MenuItemWithTooltip
              renderContent={() => item.text}
              dimension={dimension}
              {...options}
              key={id}
              role="option"
            >
              <Option href={item.url} as={item.linkAs} {...item.linkProps}>
                {item.text.slice(0, 37) + '...'}
              </Option>
            </MenuItemWithTooltip>
          ) : (
            <MenuItem dimension={dimension} {...options} key={id} role="option">
              <Option href={item.url} as={item.linkAs} {...item.linkProps}>
                {item.text}
              </Option>
            </MenuItem>
          );
        },
      };
    });
  }, [options]);

  return <OverflowMenu dimension={dimension} items={model} dropContainerCssMixin={dropContainerCssMixin} />;
};
