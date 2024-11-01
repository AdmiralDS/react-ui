import { useMemo, useState } from 'react';
import styled from 'styled-components';

import { MenuItem, OverflowMenu } from '@admiral-ds/react-ui';
import type { RenderOptionProps, OverflowMenuProps } from '@admiral-ds/react-ui';
import { ReactComponent as MinusCircleOutline } from '@admiral-ds/icons/build/service/MinusCircleOutline.svg';

const Separator = styled.div`
  height: 20px;
  width: 8px;
`;

const DisplayBlock = styled.div`
  display: flex;
  align-items: flex-start;
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

interface ItemProps {
  id: string;
  display: React.ReactNode;
  disabled?: boolean;
}
const items: ItemProps[] = [
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
];

export const OverflowMenuOptionsTemplate = (props: OverflowMenuProps) => {
  const model = useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension={props.dimension} {...options} key={item.id}>
          {item.display}
        </MenuItem>
      ),
      disabled: item.disabled,
    }));
  }, [props.dimension]);

  const [selected, setSelected] = useState<string | undefined>(undefined);

  return (
    <DisplayBlock>
      <OverflowMenu
        {...props}
        items={model}
        selected={selected}
        onSelectItem={(id) => {
          logSelectedId(id);
          setSelected(id);
        }}
        onVisibilityChange={handleVisibilityChange}
        aria-label="Overflow Menu component"
      />
      <Separator />
      <OverflowMenu
        {...props}
        items={model}
        selected={selected}
        onSelectItem={(id) => {
          logSelectedId(id);
          setSelected(id);
        }}
        onVisibilityChange={handleVisibilityChange}
        aria-label="Overflow Menu component"
        disabled
      />
    </DisplayBlock>
  );
};
