import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Menu, MenuItem, mediumGroupBorderRadius, T } from '@admiral-ds/react-ui';
import type { MenuProps, RenderOptionProps, MenuModelItemProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

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
    children: [
      {
        id: '1-1',
        label: 'SubOption with long text 1-1',
        value: 11,
      },
      {
        id: '1-2',
        label: 'SubOption 1-2',
        value: 12,
      },
      {
        id: '1-3',
        label: 'SubOption 1-3',
        value: 13,
      },
    ],
  },
  {
    id: '2',
    label: 'Option two',
    value: 2,
    children: [
      {
        id: '2-1',
        label: 'SubOption with long text 2-1',
        value: 21,
      },
      {
        id: '2-2',
        label: 'SubOption 2-2',
        value: 22,
      },
      {
        id: '2-3',
        label: 'SubOption 2-3',
        value: 23,
      },
    ],
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
        label: 'SubOption with long text 4-1',
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
            children: [
              {
                id: '5-1-1',
                label: 'SubOption 5-1-1',
                value: 511,
              },
              {
                id: '5-1-2',
                label: 'SubOption 5-1-2',
                value: 512,
              },
            ],
          },
          {
            id: '4-3-3',
            label: 'SubOption 4-3-3',
            value: 433,
          },
          {
            id: '4-3-4',
            label: 'SubOption 4-3-4',
            value: 434,
          },
          {
            id: '4-3-5',
            label: 'SubOption 4-3-5',
            value: 435,
          },
          {
            id: '4-3-6',
            label: 'SubOption 4-3-6',
            value: 436,
          },
          {
            id: '4-3-7',
            label: 'SubOption 4-3-7',
            value: 437,
          },
          {
            id: '4-3-8',
            label: 'SubOption 4-3-8',
            value: 438,
          },
          {
            id: '4-3-9',
            label: 'SubOption 4-3-9',
            value: 439,
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
  {
    id: '8',
    label: 'Option eight',
    value: 8,
  },
  {
    id: '9',
    label: 'Option nine',
    value: 9,
  },
  {
    id: '10',
    label: 'Option ten',
    value: 10,
  },
  {
    id: '11',
    label: 'Option eleven',
    value: 11,
  },
];

const parseShadow = (token: string) => token.replace('box-shadow: ', '').replace(';', '');

const Wrapper = styled.div`
  border-radius: var(--admiral-border-radius-Medium, ${(p) => mediumGroupBorderRadius(p.theme.shape)});
  overflow: hidden;
  border-color: transparent;
  box-shadow: var(--admiral-box-shadow-Shadow08, ${(p) => parseShadow(p.theme.shadow['Shadow 08'])});
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const MenuMultiLevelTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: MenuProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const convertStoryItem = (storyItem: StoryItem): MenuModelItemProps => {
    const item: MenuModelItemProps = {
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

  const model: Array<MenuModelItemProps> = React.useMemo(() => {
    return STORY_ITEMS.map((item) => convertStoryItem(item));
  }, [props.dimension]);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Многоуровневая структура меню задается в модели данных, через указание дочерних элементов в свойстве subItems.
        Ограничения по количеству уровней вложенности нет, но не следует забывать о комфорте пользователей.
      </T>
      <Container>
        <Wrapper style={{ width: 'fit-content' }}>
          <Menu tabIndex={1} {...props} defaultIsActive={false} model={model} />
        </Wrapper>
        <Wrapper style={{ width: 'fit-content' }}>
          <Menu tabIndex={2} defaultIsActive={false} subMenuRenderDirection={'left'} {...props} model={model} />
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
};
