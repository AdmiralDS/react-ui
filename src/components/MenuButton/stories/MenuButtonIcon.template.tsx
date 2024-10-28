import * as React from 'react';
import styled from 'styled-components';

import { MenuButton, MenuItem, T } from '@admiral-ds/react-ui';
import type { MenuButtonProps, RenderOptionProps } from '@admiral-ds/react-ui';
import { ReactComponent as MinusCircleOutline } from '@admiral-ds/icons/build/service/MinusCircleOutline.svg';
import { ReactComponent as StarSolid } from '@admiral-ds/icons/build/system/StarSolid.svg';

const WrapperVertical = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
`;

const Wrapper = styled.div`
  display: flex;
`;

const Separator = styled.div`
  height: 20px;
  width: 20px;
`;

const DarkDiv = styled.div`
  background-color: var(
    --admiral-color-Special_DarkStaticNeutral00,
    ${(p) => p.theme.color['Special/Dark Static Neutral 00']}
  );
  padding: 2px;
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

export const MenuButtonIconTemplate = (props: MenuButtonProps) => {
  const [selected, setSelected] = React.useState<string | undefined>(undefined);
  const modelL = React.useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      render: (items: RenderOptionProps) => (
        <MenuItem dimension="l" {...items} key={item.id}>
          {item.display}
        </MenuItem>
      ),
      disabled: item.disabled,
    }));
  }, []);
  const modelM = React.useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      render: (items: RenderOptionProps) => (
        <MenuItem dimension="m" {...items} key={item.id}>
          {item.display}
        </MenuItem>
      ),
      disabled: item.disabled,
    }));
  }, []);
  const modelS = React.useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      render: (items: RenderOptionProps) => (
        <MenuItem dimension="s" {...items} key={item.id}>
          {item.display}
        </MenuItem>
      ),
      disabled: item.disabled,
    }));
  }, []);

  return (
    <>
      <Wrapper>
        <WrapperVertical>
          <T font="Body/Body 1 Long" as="div">
            Size XL
          </T>
          <MenuButton
            {...props}
            appearance="primary"
            dimension="xl"
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelL}
            onVisibilityChange={handleVisibilityChange}
            iconStart={<StarSolid />}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...props}
            appearance="secondary"
            dimension="xl"
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelL}
            onVisibilityChange={handleVisibilityChange}
            iconStart={<StarSolid />}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...props}
            appearance="ghost"
            dimension="xl"
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelL}
            onVisibilityChange={handleVisibilityChange}
            iconStart={<StarSolid />}
          >
            Button 56
          </MenuButton>
          <DarkDiv>
            <MenuButton
              {...props}
              appearance="white"
              dimension="xl"
              selected={selected}
              onSelectItem={(id) => {
                logSelectedId(id);
                setSelected(id);
              }}
              items={modelL}
              onVisibilityChange={handleVisibilityChange}
              iconStart={<StarSolid />}
            >
              Button 56
            </MenuButton>
          </DarkDiv>
        </WrapperVertical>
        <Separator />
        <WrapperVertical>
          <T font="Body/Body 1 Long" as="div">
            Size L
          </T>
          <MenuButton
            {...props}
            appearance="primary"
            dimension="l"
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelL}
            onVisibilityChange={handleVisibilityChange}
            iconStart={<StarSolid />}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...props}
            appearance="secondary"
            dimension="l"
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelL}
            onVisibilityChange={handleVisibilityChange}
            iconStart={<StarSolid />}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...props}
            appearance="ghost"
            dimension="l"
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelL}
            onVisibilityChange={handleVisibilityChange}
            iconStart={<StarSolid />}
          >
            Button 56
          </MenuButton>
          <DarkDiv>
            <MenuButton
              {...props}
              appearance="white"
              dimension="l"
              selected={selected}
              onSelectItem={(id) => {
                logSelectedId(id);
                setSelected(id);
              }}
              items={modelL}
              onVisibilityChange={handleVisibilityChange}
              iconStart={<StarSolid />}
            >
              Button 56
            </MenuButton>
          </DarkDiv>
        </WrapperVertical>
        <Separator />
        <WrapperVertical>
          <T font="Body/Body 1 Long" as="div">
            Size M
          </T>
          <MenuButton
            {...props}
            appearance="primary"
            dimension="m"
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelM}
            onVisibilityChange={handleVisibilityChange}
            iconStart={<StarSolid />}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...props}
            appearance="secondary"
            dimension="m"
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelM}
            onVisibilityChange={handleVisibilityChange}
            iconStart={<StarSolid />}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...props}
            appearance="ghost"
            dimension="m"
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelM}
            onVisibilityChange={handleVisibilityChange}
            iconStart={<StarSolid />}
          >
            Button 56
          </MenuButton>
          <DarkDiv>
            <MenuButton
              {...props}
              appearance="white"
              dimension="m"
              selected={selected}
              onSelectItem={(id) => {
                logSelectedId(id);
                setSelected(id);
              }}
              items={modelM}
              onVisibilityChange={handleVisibilityChange}
              iconStart={<StarSolid />}
            >
              Button 56
            </MenuButton>
          </DarkDiv>
        </WrapperVertical>
        <Separator />
        <WrapperVertical>
          <T font="Body/Body 1 Long" as="div">
            Size S
          </T>
          <MenuButton
            {...props}
            appearance="primary"
            dimension="s"
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelS}
            onVisibilityChange={handleVisibilityChange}
            iconStart={<StarSolid />}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...props}
            appearance="secondary"
            dimension="s"
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelS}
            onVisibilityChange={handleVisibilityChange}
            iconStart={<StarSolid />}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...props}
            appearance="ghost"
            dimension="s"
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelS}
            onVisibilityChange={handleVisibilityChange}
            iconStart={<StarSolid />}
          >
            Button 56
          </MenuButton>
          <DarkDiv>
            <MenuButton
              {...props}
              appearance="white"
              dimension="s"
              selected={selected}
              onSelectItem={(id) => {
                logSelectedId(id);
                setSelected(id);
              }}
              items={modelS}
              onVisibilityChange={handleVisibilityChange}
              iconStart={<StarSolid />}
            >
              Button 56
            </MenuButton>
          </DarkDiv>
        </WrapperVertical>
      </Wrapper>
    </>
  );
};
