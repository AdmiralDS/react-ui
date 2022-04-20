import * as React from 'react';
import { DropDownItem } from '#src/components/DropDownItem';
import { LIGHT_THEME, DARK_THEME } from '#src/components/themes';
import { OverflowMenu } from '#src/components/OverflowMenu';
import styled from 'styled-components';

import type { BreadcrumbProps } from './BreadCrumb';
import { Tooltip } from '#src/components-ver2/Tooltip';

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
