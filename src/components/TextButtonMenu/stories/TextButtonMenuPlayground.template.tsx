import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { MenuItem, TextButtonMenu } from '@admiral-ds/react-ui';
import type { TextButtonMenuProps, RenderOptionProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
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

export const TextButtonMenuPlaygroundTemplate = ({
  text = 'Text Button',
  themeBorderKind,
  CSSCustomProps,
  ...props
}: TextButtonMenuProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
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

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <Wrapper>
        <TextButtonMenu
          {...props}
          text={text}
          selected={selected}
          dimension={props.dimension}
          loading={props.loading}
          disabled={props.disabled}
          appearance={props.appearance}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(id);
          }}
          items={model}
          onVisibilityChange={handleVisibilityChange}
          data-dropdown-container-id="text-button-menu-with-dropdown"
          className="text-button-menu-class"
          dropContainerClassName="dropContainerClass"
        />
      </Wrapper>
    </ThemeProvider>
  );
};
