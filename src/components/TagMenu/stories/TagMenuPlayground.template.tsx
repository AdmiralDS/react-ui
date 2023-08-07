import * as React from 'react';
import { TagMenu, MenuItem } from '@admiral-ds/react-ui';
import type { TagMenuProps, TagOptionProps, RenderOptionProps, Theme } from '@admiral-ds/react-ui';
import { ReactComponent as CheckOutline } from '@admiral-ds/icons/build/service/CheckOutline.svg';
import { ThemeProvider } from 'styled-components';

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
const itemsDemo: Array<TagOptionProps> = [
  {
    id: '1',
    tagText: 'Option one',
    statusViaBackground: true,
    icon: <CheckOutline />,
    kind: 'danger',
  },
  {
    id: '2',
    tagText: 'Option two',
    statusViaBackground: true,
    kind: 'primary',
  },
  {
    id: '3',
    tagText: 'Option three',
    statusViaBackground: true,
    kind: 'success',
  },
  {
    id: '4',
    tagText: 'Option four',
    statusViaBackground: true,
    icon: <CheckOutline />,
    kind: 'warning',
  },
  {
    id: '5',
    tagText: 'Option five',
    kind: 'primary',
  },
  {
    id: '6',
    tagText: 'Option six',
    kind: 'neutral',
  },
  {
    id: '7',
    tagText: 'Option seven',
  },
];

export const TagMenuPlaygroundTemplate = (args: TagMenuProps) => {
  const [selected, setSelected] = React.useState<TagOptionProps | undefined>(itemsDemo[0]);
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  const model = React.useMemo(() => {
    return itemsDemo.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension="m" {...options} key={item.id}>
          {item.tagText}
        </MenuItem>
      ),
    }));
  }, [itemsDemo]);

  return (
    <>
      <ThemeProvider theme={swapBorder}>
        <TagMenu
          items={model}
          selected={selected}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(itemsDemo.find((item) => item.id === id));
          }}
          onVisibilityChange={handleVisibilityChange}
          {...args}
          data-dropdown-container-id="tag-menu-with-dropdown"
          className="tag-menu-class"
          dropContainerClassName="dropContainerClass"
        />
      </ThemeProvider>
    </>
  );
};
