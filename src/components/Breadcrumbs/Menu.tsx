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

export interface MenuButtonProps {
  /** Размер меню */
  dimension: 'm' | 's';
  /** Массив опций */
  options: Array<BreadcrumbProps>;
}

export const MenuButton: React.FC<MenuButtonProps> = ({ dimension, options }) => {
  const model = React.useMemo(() => {
    return options.map((item) => {
      const id = uid();
      return {
        id,
        render: (options: RenderOptionProps) => {
          const tooltip = item.text.length > 40;
          const itemRef = React.useRef(null);
          const [tooltipVisible, setTooltipVisible] = React.useState(false);
          return (
            <MenuItem ref={itemRef} dimension="s" {...options} key={id} role="option">
              <Option href={item.url}>{tooltip ? item.text.slice(0, 37) + '...' : item.text}</Option>
              {tooltip && (
                <Tooltip
                  targetRef={itemRef}
                  visible={tooltipVisible}
                  onVisibilityChange={(visible: boolean) => setTooltipVisible(visible)}
                  renderContent={() => item.text}
                />
              )}
            </MenuItem>
          );
        },
      };
    });
  }, [options]);

  return <OverflowMenu dimension={dimension} items={model} />;
};
