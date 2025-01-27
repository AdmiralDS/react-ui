import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Menu, MenuItem, mediumGroupBorderRadius, T } from '@admiral-ds/react-ui';
import type { MenuProps, RenderOptionProps, BorderRadiusType } from '@admiral-ds/react-ui';
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
    label: 'Option four',
    value: 4,
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

export const MenuWithPreselectTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: MenuProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const model = React.useMemo(() => {
    return STORY_ITEMS.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension={props.dimension} {...options} key={item.id}>
          {item.label}
        </MenuItem>
      ),
    }));
  }, [props.dimension]);

  const [preselected, setPreselected] = React.useState<string | undefined>(undefined);

  const handleMenuKeyDown = (e: KeyboardEvent) => {
    if (e.key.match(/^[A-Za-z0-9]/)) {
      const item = STORY_ITEMS.find((item) => item.label.toLowerCase().startsWith(`option ${e.key}`));
      if (item) {
        setPreselected(item.id);
        e.preventDefault();
        e.stopPropagation();
      }
    }
  };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Для активации работы режима preselected в меню необходимо указать preselectedModeActive. Переключение элементов
        в состояние preselected может осуществляться в неконтролируемом режиме, а для поиска нужного элемента меню по
        нажатию на кнопку необходимо перевести компонент в контролируемый режим и написать обработчик. Пример указан в
        коде.
      </T>
      <Container>
        <Wrapper style={{ width: 'fit-content' }}>
          <Menu
            {...props}
            defaultIsActive={false}
            model={model}
            preselectedModeActive
            preselected={preselected}
            onPreselectItem={setPreselected}
            onMenuKeyDown={handleMenuKeyDown}
          />
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
};
