import * as React from 'react';
import styled from 'styled-components';

import { OverflowMenu } from '#src/components/OverflowMenu';
import { Tooltip } from '#src/components/Tooltip';
import { BreadcrumbProps } from '#src/components/Breadcrumbs/BreadCrumb';
import { MenuItem, RenderOptionProps } from '#src/components/MenuItem';
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

const Menu = styled(OverflowMenu)`
  margin-left: 4px;
`;

export interface MenuButtonProps {
  /** Массив опций */
  options: Array<BreadcrumbProps>;
}

export const MenuButton: React.FC<MenuButtonProps> = ({ options }) => {
  const model = React.useMemo(() => {
    return options.map((item) => {
      const id = uid();
      return {
        id,
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
            <MenuItem dimension="s" {...options} key={id} role="option">
              <Option href={item.url}>{renderText()}</Option>
            </MenuItem>
          );
        },
      };
    });
  }, [options]);

  return <Menu dimension="s" items={model} />;
};
