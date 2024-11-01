import { useMemo, useState } from 'react';
import styled from 'styled-components';

import { MenuItem, OverflowMenu } from '@admiral-ds/react-ui';
import type { OverflowMenuProps, RenderOptionProps } from '@admiral-ds/react-ui';
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

export const OverflowMenuSizesOrientationTemplate = (props: OverflowMenuProps) => {
  const dimensionL = 'l';
  const dimensionM = 'm';
  const dimensionS = 's';
  const modelL = useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension={dimensionL} {...options} key={item.id}>
          {item.display}
        </MenuItem>
      ),
      disabled: item.disabled,
    }));
  }, []);
  const modelM = useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension={dimensionM} {...options} key={item.id}>
          {item.display}
        </MenuItem>
      ),
      disabled: item.id === '1',
    }));
  }, []);
  const modelS = useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension={dimensionS} {...options} key={item.id}>
          {item.display}
        </MenuItem>
      ),
      disabled: item.disabled,
    }));
  }, []);
  const [selected, setSelected] = useState<string | undefined>(undefined);

  return (
    <>
      <DisplayBlock>
        <OverflowMenu
          {...props}
          items={modelL}
          selected={selected}
          dimension={dimensionL}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(id);
          }}
          onVisibilityChange={handleVisibilityChange}
          aria-label="Overflow Menu component L"
        />
        <Separator />
        <OverflowMenu
          {...props}
          items={modelM}
          dimension={dimensionM}
          selected={selected}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(id);
          }}
          onVisibilityChange={handleVisibilityChange}
          aria-label="Overflow Menu component M"
        />
        <Separator />
        <OverflowMenu
          {...props}
          items={modelS}
          dimension={dimensionS}
          selected={selected}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(id);
          }}
          onVisibilityChange={handleVisibilityChange}
          aria-label="Overflow Menu component S"
        />
      </DisplayBlock>
      <Separator />
      <DisplayBlock>
        <OverflowMenu
          {...props}
          alignSelf="flex-start"
          items={modelL}
          dimension={dimensionL}
          isVertical
          selected={selected}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(id);
          }}
          onVisibilityChange={handleVisibilityChange}
          aria-label="Overflow Menu component vertical L"
        />
        <Separator />
        <OverflowMenu
          {...props}
          items={modelM}
          dimension={dimensionM}
          isVertical
          selected={selected}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(id);
          }}
          onVisibilityChange={handleVisibilityChange}
          aria-label="Overflow Menu component vertical M"
        />
        <Separator />
        <OverflowMenu
          {...props}
          items={modelS}
          dimension={dimensionS}
          isVertical
          selected={selected}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(id);
          }}
          onVisibilityChange={handleVisibilityChange}
          aria-label="Overflow Menu component vertical S"
        />
      </DisplayBlock>
    </>
  );
};
