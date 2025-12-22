import { useMemo } from 'react';
import type { css } from 'styled-components';
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

const IconContainer = styled.div<{ $dimension: MenuButtonProps['dimension'] }>`
  width: ${({ $dimension }) => ($dimension == 'm' ? 20 : 16)}px;
  height: ${({ $dimension }) => ($dimension == 'm' ? 20 : 16)}px;
  flex-shrink: 0;
  margin-right: 8px;

  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  }
`;

const MenuItemWithTooltip = TooltipHoc(MenuItem);

const OverflowMenuStyled = styled(OverflowMenu)`
  margin: 0 4px 0 4px;
`;

export interface MenuButtonProps {
  /** Размер меню */
  dimension: 'm' | 's';
  /** Массив опций */
  options: Array<BreadcrumbProps>;
  /** Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css  */
  dropContainerCssMixin?: ReturnType<typeof css>;
  /** Позволяет добавлять класс на контейнер выпадающего меню  */
  dropContainerClassName?: string;
  /** Позволяет добавлять стили на контейнер выпадающего меню  */
  dropContainerStyle?: React.CSSProperties;
}

export const MenuButton: React.FC<MenuButtonProps> = ({
  dimension,
  options,
  dropContainerCssMixin,
  dropContainerClassName,
  dropContainerStyle,
}) => {
  const model = useMemo(() => {
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
              disabled={item.disabled}
            >
              <Option {...(item.disabled ? {} : { href: item.url })} as={item.linkAs} {...item.linkProps}>
                {item.iconStart && <IconContainer $dimension={dimension}>{item.iconStart}</IconContainer>}
                {item.text.slice(0, 37) + '...'}
              </Option>
            </MenuItemWithTooltip>
          ) : (
            <MenuItem dimension={dimension} {...options} disabled={item.disabled} key={id} role="option">
              <Option {...(item.disabled ? {} : { href: item.url })} as={item.linkAs} {...item.linkProps}>
                {item.iconStart && <IconContainer $dimension={dimension}>{item.iconStart}</IconContainer>}
                {item.text}
              </Option>
            </MenuItem>
          );
        },
      };
    });
  }, [options]);

  return (
    <OverflowMenuStyled
      dimension={dimension}
      items={model}
      dropContainerCssMixin={dropContainerCssMixin}
      alignSelf="auto"
      dropContainerClassName={dropContainerClassName}
      dropContainerStyle={dropContainerStyle}
    />
  );
};
