import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Menu } from '#src/components/Menu';
import { MenuItem } from '#src/components/Menu/MenuItem';
import { mediumGroupBorderRadius } from '#src/components/themes';
import type { Theme } from '#src/components/themes';
import type { MenuProps } from '#src/components/Menu';
import type { RenderOptionProps, ItemProps } from '#src/components/Menu/MenuItem';

type StoryItem = {
  id: string;
  label: string;
  value: number;
  disabled?: boolean;
  readOnly?: boolean;
  children?: Array<StoryItem>;
};

const STORY_ITEMS: Array<StoryItem> = [
  {
    id: '1',
    label: 'Option one',
    value: 1,
  },
  {
    id: '2',
    label: 'Option two',
    value: 2,
  },
  {
    id: '3',
    label: 'Option three',
    value: 3,
  },
  {
    id: '4',
    label: 'four',
    value: 4,
    children: [
      {
        id: '4-1',
        label: 'SubOption 4-1',
        value: 41,
      },
      {
        id: '4-2',
        label: 'SubOption 4-2',
        value: 42,
      },
      {
        id: '4-3',
        label: 'SubOption 4-3',
        value: 43,
        children: [
          {
            id: '4-3-1',
            label: 'SubOption 4-3-1',
            value: 431,
          },
          {
            id: '4-3-2',
            label: 'SubOption 4-3-2',
            value: 432,
          },
          {
            id: '4-3-3',
            label: 'SubOption 4-3-3',
            value: 433,
          },
        ],
      },
    ],
  },
  {
    id: '5',
    label: 'Option five',
    value: 5,
  },
  {
    id: '6',
    label: 'Option six',
    value: 7,
  },
  {
    id: '7',
    label: 'Option seven',
    value: 6,
  },
];

const Wrapper = styled.div`
  border-radius: ${(p) => mediumGroupBorderRadius(p.theme.shape)};
  overflow: hidden;
  border-color: transparent;
  ${(p) => p.theme.shadow['Shadow 08']}
`;

export const MultiLevelTemplate = (props: MenuProps) => {
  const convertStoryItem = (storyItem: StoryItem): ItemProps => {
    const item: ItemProps = {
      id: storyItem.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension={props.dimension} {...options} key={storyItem.id}>
          {storyItem.label}
        </MenuItem>
      ),
    };

    if (storyItem.children) {
      item.subItems = storyItem.children?.map((child) => convertStoryItem(child));
    }

    return item;
  };

  const model: Array<ItemProps> = React.useMemo(() => {
    return STORY_ITEMS.map((item) => convertStoryItem(item));
  }, [props.dimension]);

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (props as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <Wrapper style={{ width: 'fit-content' }}>
        <Menu {...props} model={model} />
      </Wrapper>
    </ThemeProvider>
  );
};
