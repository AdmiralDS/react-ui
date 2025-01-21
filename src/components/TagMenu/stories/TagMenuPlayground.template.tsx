import * as React from 'react';
import { TagMenu, MenuItem } from '@admiral-ds/react-ui';
import type { TagMenuProps, TagOptionProps, RenderOptionProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ReactComponent as CheckOutline } from '@admiral-ds/icons/build/service/CheckOutline.svg';
import { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

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

export const TagMenuPlaygroundTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: TagMenuProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [selected, setSelected] = React.useState<TagOptionProps | undefined>(itemsDemo[0]);

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
      <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
        <TagMenu
          items={model}
          selected={selected}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(itemsDemo.find((item) => item.id === id));
          }}
          onVisibilityChange={handleVisibilityChange}
          {...props}
          data-dropdown-container-id="tag-menu-with-dropdown"
          className="tag-menu-class"
          dropContainerClassName="dropContainerClass"
        />
      </ThemeProvider>
    </>
  );
};
