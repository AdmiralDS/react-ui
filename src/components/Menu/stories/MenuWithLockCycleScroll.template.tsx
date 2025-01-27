import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Menu, MenuItem, mediumGroupBorderRadius, T } from '@admiral-ds/react-ui';
import { STORY_ITEMS } from './data';
import type { MenuProps, RenderOptionProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const ITEMS_WITH_DISABLED_ITEMS = [...STORY_ITEMS];
ITEMS_WITH_DISABLED_ITEMS[0].disabled = true;
ITEMS_WITH_DISABLED_ITEMS[6].disabled = true;

const parseShadow = (token: string) => token.replace('box-shadow: ', '').replace(';', '');

const Wrapper = styled.div`
  border-radius: var(--admiral-border-radius-Medium, ${(p) => mediumGroupBorderRadius(p.theme.shape)});
  overflow: hidden;
  border-color: transparent;
  box-shadow: var(--admiral-box-shadow-Shadow08, ${(p) => parseShadow(p.theme.shadow['Shadow 08'])});
`;

export const MenuWithLockCycleScrollTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: MenuProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
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

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Для блокировки цикличного обхода пунктов меню можно использовать onForwardCycleApprove и onBackwardCycleApprove.
      </T>
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
