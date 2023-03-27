import * as React from 'react';
import { Menu } from '#src/components/Menu';
import { MenuItem } from '#src/components/Menu/MenuItem';
import type { MenuProps } from '#src/components/Menu';
import type { RenderOptionProps } from '#src/components/Menu/MenuItem';
import type { Theme } from '#src/components/themes';
import styled, { ThemeProvider } from 'styled-components';
import { createItems } from '#src/components/Menu/Stories/Templates/utils';
import { mediumGroupBorderRadius } from '#src/components/themes';

const ITEMS = createItems(200);

const Wrapper = styled.div`
  border-radius: ${(p) => mediumGroupBorderRadius(p.theme.shape)};
  overflow: hidden;
  border-color: transparent;
  ${(p) => p.theme.shadow['Shadow 08']}
`;

export const LargeNumberOfItemsTemplate = (props: MenuProps) => {
  const model = React.useMemo(() => {
    return ITEMS.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension={props.dimension} {...options} key={item.id}>
          {item.label}
        </MenuItem>
      ),
    }));
  }, [props.dimension]);

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (props as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <Wrapper style={{ width: 'fit-content' }}>
        <Menu {...props} model={model} />
      </Wrapper>
    </ThemeProvider>
  );
};
