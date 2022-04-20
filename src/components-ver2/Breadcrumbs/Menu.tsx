import * as React from 'react';
import styled from 'styled-components';

import { DropDownItem } from '#src/components-ver2/DropDownItem';
import { OverflowMenu } from '#src/components-ver2/OverflowMenu';
import { Tooltip } from '#src/components-ver2/Tooltip';
import { BreadcrumbProps } from '#src/components-ver2/Breadcrumbs/BreadCrumb';

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

const Menu = styled(OverflowMenu)`
  margin-left: 4px;
`;

export interface MenuButtonProps {
  /** Массив опций */
  options: Array<BreadcrumbProps>;
}

export const MenuButton: React.FC<MenuButtonProps> = ({ options }) => {
  return (
    <>
      <Menu dimension="s">
        {options.map(({ text, url }) => {
          const tooltip = text.length > 40;
          const renderText = () =>
            tooltip ? (
              <Tooltip style={{ marginTop: '8px' }} renderContent={() => text}>
                {text.slice(0, 37) + '...'}
              </Tooltip>
            ) : (
              text
            );
          return (
            <DropDownItem key="text" role="option" value={text} dimension="s">
              <Option href={url}>{renderText()}</Option>
            </DropDownItem>
          );
        })}
      </Menu>
    </>
  );
};
