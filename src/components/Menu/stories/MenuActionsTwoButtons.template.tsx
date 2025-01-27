import * as React from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import { Button, MenuActionsPanel, Menu, MenuItem, mediumGroupBorderRadius, T } from '@admiral-ds/react-ui';
import type { MenuProps, RenderOptionProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

type StoryItem = {
  id: string;
  label: string;
  value: number;
  disabled?: boolean;
  readOnly?: boolean;
};

const STORY_ITEMS: Array<StoryItem> = [
  {
    id: '1',
    label: 'Option one',
    value: 1,
  },
  {
    id: '2',
    label: 'Option two',
    value: 2,
  },
  {
    id: '3',
    label: 'Option three',
    value: 3,
  },
  {
    id: '4',
    label: 'Option four',
    value: 4,
  },
  {
    id: '5',
    label: 'Option five',
    value: 5,
  },
  {
    id: '6',
    label: 'Option six',
    value: 7,
  },
  {
    id: '7',
    label: 'Option seven',
    value: 6,
  },
];

const ActionPanelFlex = css`
  display: flex;
  gap: 8px;
`;
const parseShadow = (token: string) => token.replace('box-shadow: ', '').replace(';', '');

const Wrapper = styled.div`
  border-radius: var(--admiral-border-radius-Medium, ${(p) => mediumGroupBorderRadius(p.theme.shape)});
  overflow: hidden;
  border-color: transparent;
  box-shadow: var(--admiral-box-shadow-Shadow08, ${(p) => parseShadow(p.theme.shadow['Shadow 08'])});
`;

export const MenuActionsTwoButtonsTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: MenuProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const model = React.useMemo(() => {
    return STORY_ITEMS.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension={props.dimension} {...options} key={item.id}>
          {item.label}
        </MenuItem>
      ),
    }));
  }, [props.dimension, STORY_ITEMS]);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Пример с Actions с двумя кнопками.
      </T>
      <Wrapper style={{ width: 'fit-content' }}>
        <Menu
          {...props}
          defaultIsActive={false}
          model={model}
          renderBottomPanel={({ dimension, menuActionsPanelCssMixin = ActionPanelFlex }) => {
            return (
              <MenuActionsPanel dimension={dimension} menuActionsPanelCssMixin={menuActionsPanelCssMixin}>
                <Button
                  dimension={'s'}
                  onClick={() => {
                    // eslint-disable-next-line no-console
                    console.log('Button 1 clicked');
                  }}
                >
                  Action 1
                </Button>
                <Button
                  dimension={'s'}
                  appearance="secondary"
                  onClick={() => {
                    // eslint-disable-next-line no-console
                    console.log('Button 2 clicked');
                  }}
                >
                  Action 2
                </Button>
              </MenuActionsPanel>
            );
          }}
        />
      </Wrapper>
    </ThemeProvider>
  );
};
