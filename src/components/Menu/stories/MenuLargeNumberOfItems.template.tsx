import * as React from 'react';
import { Menu, MenuItem, mediumGroupBorderRadius, T } from '@admiral-ds/react-ui';
import type { MenuProps, RenderOptionProps, BorderRadiusType } from '@admiral-ds/react-ui';
import styled, { ThemeProvider } from 'styled-components';
import { createItems } from './utils';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const ITEMS = createItems(200);

const parseShadow = (token: string) => token.replace('box-shadow: ', '').replace(';', '');

const Wrapper = styled.div`
  border-radius: var(--admiral-border-radius-Medium, ${(p) => mediumGroupBorderRadius(p.theme.shape)});
  overflow: hidden;
  border-color: transparent;
  box-shadow: var(--admiral-box-shadow-Shadow08, ${(p) => parseShadow(p.theme.shadow['Shadow 08'])});
`;

export const MenuLargeNumberOfItemsTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: MenuProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
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
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Пример с большим количеством item. Для проверки прокрутки меню при быстрой смене активного элемента.
      </T>
      <Wrapper style={{ width: 'fit-content' }}>
        <Menu {...props} defaultIsActive={false} model={model} />
      </Wrapper>
    </ThemeProvider>
  );
};
