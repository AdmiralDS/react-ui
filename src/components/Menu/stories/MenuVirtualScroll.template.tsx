import * as React from 'react';
import { Menu, MenuItem, mediumGroupBorderRadius } from '@admiral-ds/react-ui';
import type { MenuProps, RenderOptionProps, BorderRadiusType, MenuModelItemProps } from '@admiral-ds/react-ui';
import styled, { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

export const createItems = (length: number, level: number = 1) => {
  const title = level > 1 ? 'SubItem' : 'Item';
  return Array.from({ length }).map((option, index) => ({ label: `${title} ${index}0000`, id: `${level}-${index}` }));
};

type ModelItems = { label: string; id: string; subItems?: Array<ModelItems> };

const ITEMS: Array<ModelItems> = createItems(40);
ITEMS.forEach((item) => {
  if (Math.random() > 0.5) {
    item.subItems = createItems(Math.round(40 * Math.random()), 2);
  }
});

const Wrapper = styled.div`
  border-radius: var(--admiral-border-radius-Medium, ${(p) => mediumGroupBorderRadius(p.theme.shape)});
  overflow: hidden;
  border-color: transparent;
  box-shadow: var(--admiral-box-shadow-Shadow08, ${(p) => parseShadow(p.theme.shadow['Shadow 08'])});
`;

export const MenuVirtualScrollTemplate = ({
  themeBorderKind,
  ...props
}: MenuProps & { themeBorderKind?: BorderRadiusType }) => {
  const model = React.useMemo(() => {
    return ITEMS.map((item) => {
      const modelItem = {
        id: item.id,
        render: (options: RenderOptionProps) => (
          <MenuItem dimension={props.dimension} {...options} key={item.id}>
            {item.label}
          </MenuItem>
        ),
      };

      if (item.subItems) {
        (modelItem as MenuModelItemProps).subItems = item.subItems.map((subItem) => {
          return {
            id: subItem.id,
            render: (options: RenderOptionProps) => (
              <MenuItem dimension={props.dimension} {...options} key={subItem.id}>
                {subItem.label}
              </MenuItem>
            ),
          };
        });
      }

      return modelItem;
    });
  }, [props.dimension]);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind)}>
      <Wrapper style={{ width: 'fit-content' }}>
        <Menu {...props} defaultIsActive={false} virtualScroll={{ itemHeight: 'auto' }} model={model} />
      </Wrapper>
    </ThemeProvider>
  );
};
