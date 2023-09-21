import * as React from 'react';
import { Menu, MenuItem, mediumGroupBorderRadius } from '@admiral-ds/react-ui';
import type { MenuProps, RenderOptionProps, BorderRadiusType } from '@admiral-ds/react-ui';
import styled, { ThemeProvider } from 'styled-components';
import { createItems } from './utils';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const ITEMS = createItems(200);

const Wrapper = styled.div`
  border-radius: ${(p) => mediumGroupBorderRadius(p.theme.shape)};
  overflow: hidden;
  border-color: transparent;
  ${(p) => p.theme.shadow['Shadow 08']}
`;

export const MenuLargeNumberOfItemsTemplate = ({
  themeBorderKind,
  ...props
}: MenuProps & { themeBorderKind?: BorderRadiusType }) => {
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

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind)}>
      <Wrapper style={{ width: 'fit-content' }}>
        <Menu {...props} defaultIsActive={false} model={model} />
      </Wrapper>
    </ThemeProvider>
  );
};
