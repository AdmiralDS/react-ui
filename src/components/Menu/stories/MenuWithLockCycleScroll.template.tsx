import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Menu, MenuItem, mediumGroupBorderRadius } from '@admiral-ds/react-ui';
import { STORY_ITEMS } from './data';
import type { MenuProps, RenderOptionProps, Theme, BorderRadiusType } from '@admiral-ds/react-ui';

const ITEMS_WITH_DISABLED_ITEMS = [...STORY_ITEMS];
ITEMS_WITH_DISABLED_ITEMS[0].disabled = true;
ITEMS_WITH_DISABLED_ITEMS[6].disabled = true;

const Wrapper = styled.div`
  border-radius: ${(p) => mediumGroupBorderRadius(p.theme.shape)};
  overflow: hidden;
  border-color: transparent;
  ${(p) => p.theme.shadow['Shadow 08']}
`;

export const MenuWithLockCycleScrollTemplate = (props: MenuProps & { themeBorderKind?: BorderRadiusType }) => {
  const model = React.useMemo(() => {
    return ITEMS_WITH_DISABLED_ITEMS.map((item) => ({
      id: item.id,
      disabled: item.disabled,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension={props.dimension} {...options} key={item.id}>
          {item.label}
        </MenuItem>
      ),
    }));
  }, [props.dimension]);

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = props.themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <Wrapper style={{ width: 'fit-content' }}>
        <Menu
          {...props}
          defaultIsActive={false}
          model={model}
          onForwardCycleApprove={() => false}
          onBackwardCycleApprove={() => false}
        />
      </Wrapper>
    </ThemeProvider>
  );
};
