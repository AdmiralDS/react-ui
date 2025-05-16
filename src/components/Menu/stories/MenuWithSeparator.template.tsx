import styled, { css, ThemeProvider } from 'styled-components';
import { Menu, MenuItem, mediumGroupBorderRadius, T, Divider } from '@admiral-ds/react-ui';
import type { MenuProps, RenderOptionProps, BorderRadiusType, MenuModelItemProps } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

type StoryItem = {
  id: string;
  label: string;
  value: number;
  disabled?: boolean;
  readOnly?: boolean;
};

const STORY_ITEMS: Array<StoryItem> = [
  {
    id: '1',
    label: 'Абабков',
    value: 1,
  },
  {
    id: '2',
    label: 'Абакумов',
    value: 2,
  },
  {
    id: '3',
    label: 'Абалакин',
    value: 3,
  },
  {
    id: '4',
    label: 'Бабаев',
    value: 4,
  },
  {
    id: '5',
    label: 'Бабаков',
    value: 5,
  },
  {
    id: '6',
    label: 'Бабченко',
    value: 7,
  },
  {
    id: '7',
    label: 'Вакуленко',
    value: 6,
  },
  {
    id: '8',
    label: 'Валуев',
    value: 8,
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
  display: flex;
  flex-direction: row;
  column-gap: 50px;
`;

const padding = css<{ $dimension?: MenuProps['dimension'] }>`
  padding: ${({ $dimension }) => {
    switch ($dimension) {
      case 'l':
        return '12px 16px';
      case 'm':
        return '8px 16px';
      case 's':
        return '6px 12px';
      default:
        return '12px 16px';
    }
  }};
`;

const TStyled = styled.div<{ $dimension?: MenuProps['dimension'] }>`
  display: flex;
  align-items: center;
  box-sizing: border-box;

  ${padding};
`;

export const MenuWithSeparatorTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: MenuProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const model = (hideTitle?: boolean) => {
    let menuModelItems: MenuModelItemProps[] = [];

    const groupModelItems = (arr: StoryItem[]) => {
      const modelItems = [...arr];
      const groupItems: StoryItem[] = [];

      modelItems.forEach((item) => (modelItems[0].label[0] === item.label[0] ? groupItems.push(item) : null));
      modelItems.splice(0, groupItems.length);

      menuModelItems = [...menuModelItems, ...renderItems(groupItems, modelItems.length === 0, hideTitle)];

      if (modelItems.length > 0) groupModelItems(modelItems);
    };

    groupModelItems(STORY_ITEMS);
    return menuModelItems;
  };

  const renderItems = (modelItems: StoryItem[], isLastGroup: boolean, hideTitle?: boolean) =>
    modelItems.map((item, id) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <>
          {id === 0 && !hideTitle && (
            <TStyled font="Subtitle/Subtitle 2" $dimension={props.dimension} as={T}>
              {item.label[0]}
            </TStyled>
          )}
          <MenuItem dimension={props.dimension} {...options} key={item.id}>
            {item.label}
          </MenuItem>
          {modelItems.length === id + 1 && !isLastGroup && <Divider />}
        </>
      ),
    }));

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <Container>
        <Wrapper style={{ width: '300px' }}>
          <Menu {...props} dimension={props.dimension} defaultIsActive={false} model={model()} />
        </Wrapper>
        <Wrapper style={{ width: '300px' }}>
          <Menu {...props} dimension={props.dimension} defaultIsActive={false} model={model(true)} />
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
};
