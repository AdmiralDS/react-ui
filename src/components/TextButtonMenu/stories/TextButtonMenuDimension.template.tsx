import * as React from 'react';
import styled from 'styled-components';

import { MenuItem, TextButtonMenu, T } from '@admiral-ds/react-ui';
import type { TextButtonMenuProps, RenderOptionProps } from '@admiral-ds/react-ui';
import { ReactComponent as AttachFileOutline } from '@admiral-ds/icons/build/system/AttachFileOutline.svg';

const StyledText = styled(T)`
  margin: 10px 0;
`;

const WrapperButton = styled.div`
  display: flex;
  flex-direction: row;
  > * {
    flex: 1 0 200px;
    max-width: 300px;
  }
`;

const Separator = styled.div`
  height: 20px;
  width: 20px;
`;
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

export const TextButtonMenuDimensionTemplate = (props: TextButtonMenuProps) => {
  const [selected, setSelected] = React.useState<string | undefined>(undefined);
  const model = React.useMemo(() => {
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

  const handleSelectItem = (id: string) => {
    logSelectedId(id);
    setSelected(id);
  };
  return (
    <WrapperButton>
      <div>
        <StyledText font="Header/H6" forwardedAs="div">
          Dimension - M
        </StyledText>
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="m"
          text="Text Button"
          appearance="primary"
          onSelectItem={handleSelectItem}
          iconStart={<AttachFileOutline />}
        />
        <Separator />
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="m"
          text="Text Button"
          disabled
          onSelectItem={handleSelectItem}
          iconStart={<AttachFileOutline />}
        />
        <Separator />
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="m"
          text="Text Button"
          onSelectItem={handleSelectItem}
          iconStart={<AttachFileOutline />}
          loading
        />
        <Separator />
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="m"
          text="Text Button"
          appearance="primary"
          onSelectItem={handleSelectItem}
        />
        <Separator />
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="m"
          text="Text Button"
          disabled
          onSelectItem={handleSelectItem}
        />
        <Separator />
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="m"
          text="Text Button"
          onSelectItem={handleSelectItem}
          loading
        />
        <Separator />
        <StyledText font="Header/H6" forwardedAs="div">
          Dimension - S
        </StyledText>
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="s"
          text="Text Button"
          onSelectItem={handleSelectItem}
          iconStart={<AttachFileOutline />}
        />
        <Separator />
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="s"
          text="Text Button"
          onSelectItem={handleSelectItem}
          iconStart={<AttachFileOutline />}
          disabled
        />
        <Separator />
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="s"
          text="Text Button"
          onSelectItem={handleSelectItem}
          iconStart={<AttachFileOutline />}
          loading
        />
        <Separator />
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="s"
          text="Text Button"
          onSelectItem={handleSelectItem}
        />
        <Separator />
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="s"
          text="Text Button"
          onSelectItem={handleSelectItem}
          disabled
        />
        <Separator />
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="s"
          text="Text Button"
          onSelectItem={handleSelectItem}
          loading
        />
      </div>
      <div>
        <StyledText font="Header/H6" forwardedAs="div">
          Dimension - M
        </StyledText>
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="m"
          text="Text Button"
          appearance="secondary"
          onSelectItem={handleSelectItem}
          iconStart={<AttachFileOutline />}
        />
        <Separator />
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="m"
          text="Text Button"
          appearance="secondary"
          disabled
          onSelectItem={handleSelectItem}
          iconStart={<AttachFileOutline />}
        />
        <Separator />
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="m"
          text="Text Button"
          appearance="secondary"
          onSelectItem={handleSelectItem}
          iconStart={<AttachFileOutline />}
          loading
        />
        <Separator />
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="m"
          text="Text Button"
          appearance="secondary"
          onSelectItem={handleSelectItem}
        />
        <Separator />
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="m"
          text="Text Button"
          appearance="secondary"
          disabled
          onSelectItem={handleSelectItem}
        />
        <Separator />
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="m"
          text="Text Button"
          appearance="secondary"
          onSelectItem={handleSelectItem}
          loading
        />
        <Separator />
        <StyledText font="Header/H6" forwardedAs="div">
          Dimension - S
        </StyledText>
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="s"
          text="Text Button"
          appearance="secondary"
          onSelectItem={handleSelectItem}
          iconStart={<AttachFileOutline />}
        />
        <Separator />
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="s"
          text="Text Button"
          appearance="secondary"
          onSelectItem={handleSelectItem}
          iconStart={<AttachFileOutline />}
          disabled
        />
        <Separator />
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="s"
          text="Text Button"
          appearance="secondary"
          onSelectItem={handleSelectItem}
          iconStart={<AttachFileOutline />}
          loading
        />
        <Separator />
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="s"
          text="Text Button"
          appearance="secondary"
          onSelectItem={handleSelectItem}
        />
        <Separator />
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="s"
          text="Text Button"
          appearance="secondary"
          onSelectItem={handleSelectItem}
          disabled
        />
        <Separator />
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="s"
          text="Text Button"
          appearance="secondary"
          onSelectItem={handleSelectItem}
          loading
        />
      </div>
    </WrapperButton>
  );
};
