import * as React from 'react';
import styled from 'styled-components';

import { MenuItem, MultiButton } from '@admiral-ds/react-ui';
import type { MultiButtonProps, MultiButtonItem, RenderOptionProps } from '@admiral-ds/react-ui';

const Separator = styled.div`
  width: 20px;
  height: 20px;
`;

const handleVisibilityChange = (isVisible: boolean) => {
  if (isVisible) {
    console.log('Menu opened');
  } else {
    console.log('Menu closed');
  }
};

const logSelectedId = (id: string) => {
  console.log(`selected: ${id}`);
};

const handleMainButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  console.log('Main button clicked');
};

const itemsDemo: Array<MultiButtonItem> = [
  {
    id: '1',
    display: 'Option one',
  },
  {
    id: '2',
    display: 'Option two',
  },
  {
    id: '3',
    display: 'Option three',
  },
  {
    id: '4',
    display: 'Option four',
  },
  {
    id: '5',
    display: 'Option five',
  },
  {
    id: '6',
    display: 'Option six',
  },
  {
    id: '7',
    display: 'Option seven',
  },
];

const itemsDisabled: Array<MultiButtonItem> = [
  {
    id: '1',
    display: 'Option one',
  },
  {
    id: '2',
    display: 'Option two',
  },
  {
    id: '3',
    display: 'Option three',
    disabled: true,
  },
  {
    id: '4',
    display: 'Option four',
  },
  {
    id: '5',
    display: 'Option five',
    disabled: true,
  },
  {
    id: '6',
    display: 'Option six',
  },
  {
    id: '7',
    display: 'Option seven',
  },
];

export const MultiButtonDisabledTemplate = (props: MultiButtonProps) => {
  const [selected, setSelected] = React.useState<string | undefined>(undefined);
  const [selected2, setSelected2] = React.useState<string | undefined>(undefined);

  const model = React.useMemo(() => {
    return itemsDisabled.slice(1, itemsDisabled.length).map((item) => ({
      id: item.id,
      render: (items: RenderOptionProps) => (
        <MenuItem dimension={props.dimension === 'xl' ? 'l' : props.dimension} {...items} key={item.id}>
          {item.display}
        </MenuItem>
      ),
      disabled: item.disabled,
    }));
  }, [props.dimension, itemsDisabled]);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <MultiButton
          {...props}
          appearance="primary"
          disabled
          selected={selected}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(id);
          }}
          items={model}
          onVisibilityChange={handleVisibilityChange}
          onMainButtonClick={handleMainButtonClick}
        >
          {itemsDemo[0].display}
        </MultiButton>
        <Separator />
        <MultiButton
          {...props}
          appearance="secondary"
          disabled
          selected={selected2}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected2(id);
          }}
          items={model}
          onVisibilityChange={handleVisibilityChange}
          onMainButtonClick={handleMainButtonClick}
        >
          {itemsDemo[0].display}
        </MultiButton>
      </div>
    </>
  );
};
