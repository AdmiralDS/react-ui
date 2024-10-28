import * as React from 'react';
import styled from 'styled-components';

import { MultiButton } from '@admiral-ds/react-ui';
import type { MultiButtonProps } from '@admiral-ds/react-ui';

const Separator = styled.div`
  width: 20px;
  height: 20px;
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

const handleMainButtonClick = () => {
  // eslint-disable-next-line no-console
  console.log('Main button clicked');
};

const itemsDemo = [
  {
    id: '1',
    render: 'Option one',
  },
  {
    id: '2',
    render: 'Option two',
  },
  {
    id: '3',
    render: 'Option three',
  },
  {
    id: '4',
    render: 'Option four',
  },
  {
    id: '5',
    render: 'Option five',
  },
  {
    id: '6',
    render: 'Option six',
  },
  {
    id: '7',
    render: 'Option seven',
  },
];

const itemsDisabled = [
  {
    id: '1',
    render: 'Option one',
  },
  {
    id: '2',
    render: 'Option two',
  },
  {
    id: '3',
    render: 'Option three',
    disabled: true,
  },
  {
    id: '4',
    render: 'Option four',
  },
  {
    id: '5',
    render: 'Option five',
    disabled: true,
  },
  {
    id: '6',
    render: 'Option six',
  },
  {
    id: '7',
    render: 'Option seven',
  },
];

export const MultiButtonDisabledTemplate = (props: MultiButtonProps) => {
  const [selected, setSelected] = React.useState<string | undefined>(undefined);
  const [selected2, setSelected2] = React.useState<string | undefined>(undefined);
  const [selected3, setSelected3] = React.useState<string | undefined>(undefined);

  const model = React.useMemo(() => {
    return itemsDisabled.slice(1, itemsDisabled.length);
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
          {itemsDemo[0].render}
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
          {itemsDemo[0].render}
        </MultiButton>
        <Separator />
        <MultiButton
          {...props}
          appearance="tertiary"
          disabled
          selected={selected3}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected3(id);
          }}
          items={model}
          onVisibilityChange={handleVisibilityChange}
          onMainButtonClick={handleMainButtonClick}
        >
          {itemsDemo[0].render}
        </MultiButton>
        <Separator />
        <MultiButton
          {...props}
          appearance="primary"
          disabledMainButton
          selected={selected3}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected3(id);
          }}
          items={model}
          onVisibilityChange={handleVisibilityChange}
          onMainButtonClick={handleMainButtonClick}
        >
          {itemsDemo[0].render}
        </MultiButton>
      </div>
    </>
  );
};
