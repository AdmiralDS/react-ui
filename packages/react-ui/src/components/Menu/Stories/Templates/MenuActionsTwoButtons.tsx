import * as React from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import { Button, MenuActionsPanel, Menu, MenuItem, mediumGroupBorderRadius } from '@admiral-ds/react-ui';
import type { Theme, MenuProps, RenderOptionProps } from '@admiral-ds/react-ui';

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

const Wrapper = styled.div`
  border-radius: ${(p) => mediumGroupBorderRadius(p.theme.shape)};
  overflow: hidden;
  border-color: transparent;
  ${(p) => p.theme.shadow['Shadow 08']}
`;

export const MenuActionsTwoButtonsTemplate = (props: MenuProps) => {
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

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (props as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
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
                    console.log('Button 1 clicked');
                  }}
                >
                  Action 1
                </Button>
                <Button
                  dimension={'s'}
                  appearance="secondary"
                  onClick={() => {
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