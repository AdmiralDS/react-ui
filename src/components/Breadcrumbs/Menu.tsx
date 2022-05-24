import * as React from 'react';
import styled from 'styled-components';

import { DropDownItem } from '#src/components/DropDownItem';
import { OverflowMenu } from '#src/components/OverflowMenu';
import { Tooltip } from '#src/components/Tooltip';
import { BreadcrumbProps } from '#src/components/Breadcrumbs/BreadCrumb';
import { ItemProps, MenuItem, RenderOptionProps } from '#src/components/MenuItem';
import { useMemo } from 'react';

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

const Menu = styled(OverflowMenu)<{ items: Array<ItemProps> }>`
  margin-left: 4px;
`;

export interface MenuButtonProps {
  /** Массив опций */
  options: Array<BreadcrumbProps>;
}

export const MenuButton: React.FC<MenuButtonProps> = ({ options }) => {
  const model = useMemo(() => {
    return options.map((item) => ({
      id: item.text,
      render: (options: RenderOptionProps) => {
        const tooltip = item.text.length > 40;
        const renderText = () =>
          tooltip ? (
            <Tooltip style={{ marginTop: '8px' }} renderContent={() => item.text}>
              {item.text.slice(0, 37) + '...'}
            </Tooltip>
          ) : (
            item.text
          );
        return (
          <MenuItem dimension="s" {...options} key={item.text} role="option">
            <Option href={item.url}>{renderText()}</Option>
          </MenuItem>
        );
      },
    }));
  }, []);

  return (
    <>
      <Menu dimension="s" items={model} />
    </>
  );
};
