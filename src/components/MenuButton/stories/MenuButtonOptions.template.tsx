import * as React from 'react';
import { css } from 'styled-components';

import { Button, MenuActionsPanel, MenuButton, MenuItem } from '@admiral-ds/react-ui';
import type { MenuButtonProps, RenderOptionProps } from '@admiral-ds/react-ui';
import { ReactComponent as MinusCircleOutline } from '@admiral-ds/icons/build/service/MinusCircleOutline.svg';

const ActionPanelFlex = css`
  display: flex;
  gap: 8px;
`;

const handleVisibilityChange = (isVisible: boolean) => {
  if (isVisible) {
    // eslint-disable-next-line no-console
    console.log('Menu opened');
  } else {
    // eslint-disable-next-line no-console
    console.log('Menu closed');
  }
};

const logSelectedId = (id: string) => {
  // eslint-disable-next-line no-console
  console.log(`selected: ${id}`);
};

const items = [
  {
    id: '1',
    display: 'Option one',
  },
  {
    id: '2',
    display: (
      <div style={{ display: 'flex', width: '115px', justifyContent: 'space-between', alignItems: 'center' }}>
        <MinusCircleOutline width={20} height={20} />
        Option two
      </div>
    ),
    disabled: true,
  },
  {
    id: '3',
    display: 'Option three',
  },
  {
    id: '4',
    display: 'Option four',
  },
];

export const MenuButtonOptionsTemplate = (props: MenuButtonProps) => {
  const [selected, setSelected] = React.useState<string | undefined>(undefined);
  const model = React.useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      render: (items: RenderOptionProps) => (
        <MenuItem dimension={props.dimension === 'xl' ? 'l' : props.dimension} {...items} key={item.id}>
          {item.display}
        </MenuItem>
      ),
      disabled: item.disabled,
    }));
  }, [props.dimension]);

  return (
    <>
      <MenuButton
        {...props}
        selected={selected}
        onSelectItem={(id) => {
          logSelectedId(id);
          setSelected(id);
        }}
        items={model}
        onVisibilityChange={handleVisibilityChange}
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
      >
        test
      </MenuButton>
    </>
  );
};
