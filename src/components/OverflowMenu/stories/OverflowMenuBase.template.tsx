import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { MenuItem, OverflowMenu } from '@admiral-ds/react-ui';
import type { OverflowMenuProps, RenderOptionProps, Theme, BorderRadiusType } from '@admiral-ds/react-ui';

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

const items: Array<any> = [
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

export const OverflowMenuBaseTemplate = (props: OverflowMenuProps & { themeBorderKind?: BorderRadiusType }) => {
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

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = props.themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
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
        data-dropdown-container-id="overflow-menu-with-dropdown"
        className="overflow-menu-class"
        dropContainerClassName="dropContainerClass"
      />
    </ThemeProvider>
  );
};
