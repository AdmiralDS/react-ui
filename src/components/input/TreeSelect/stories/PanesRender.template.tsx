import { useState } from 'react';
import { ThemeProvider, styled } from 'styled-components';

import { TreeSelect, Button, T } from '@admiral-ds/react-ui';
import type { BorderRadiusType, TreeSelectItemProps, TreeSelectProps } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

const STORY_ITEMS: Array<TreeSelectItemProps> = [
  {
    id: '1',
    label: 'Опция 1',
    checked: false,
    children: [
      {
        id: '1.1',
        label: 'Опция 1.1',
        checked: false,
      },
      {
        id: '1.2',
        label: 'Опция 1.2',
        checked: false,
        children: [
          {
            id: '1.2.1',
            label: 'Опция 1.2.1',
            checked: false,
          },
          {
            id: '1.2.2',
            label: 'Опция 1.2.2',
            checked: false,
          },
          {
            id: '1.2.3',
            label: 'Опция 1.2.3',
            checked: false,
          },
        ],
      },
      {
        id: '1.3',
        label: 'Опция 1.3',
        checked: false,
      },
    ],
  },
  {
    id: '2',
    label: 'Опция 2',
    checked: false,
  },
  {
    id: '3',
    label: 'Опция 3',
    checked: false,
  },
];

const ContentWrapper = styled.div`
  margin: 8px;
`;

export const PanesRenderTemplate = ({
  placeholder = 'Placeholder',
  themeBorderKind,
  CSSCustomProps,
  ...props
}: TreeSelectProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const clearButtonProps = { 'data-testid': 'selectClearButton' };
  const openButtonProps = { 'data-testid': 'selectOpenButton' };
  const [value, setValue] = useState(['1.2.1', '1.2.2']);

  const onChange = (newValue: string[]) => {
    console.log('onChange ', newValue);
    setValue(newValue);
  };

  const onSelect = (value: string) => {
    console.log('onSelect ', value);
  };

  const onDeselect = (value: string) => {
    console.log('onDeselect ', value);
  };

  const onClearIconClick = () => {
    console.log('onClearIconClick');
  };

  const onOpenChange = (open: boolean) => {
    console.log('onOpenChange', open);
  };

  const treeProps: TreeSelectProps = {
    ...props,
    items: STORY_ITEMS,
    value,
    placeholder,
    onChange,
    onSelect,
    onDeselect,
    onClearIconClick,
    onOpenChange,
  };

  // Пример функции для верхней панели
  const topPanelContent = () => (
    <ContentWrapper>
      <T font="Body/Body 1 Long" as="div">
        Это верхняя панель
      </T>
      <Button
        dimension="s"
        onClick={() => {
          console.log('Кнопка в верхней панели нажата');
        }}
      >
        Действие сверху
      </Button>
    </ContentWrapper>
  );

  // Пример функции для нижней панели
  const bottomPanelContent = () => (
    <ContentWrapper>
      <T font="Body/Body 1 Long" as="div">
        Это нижняя панель
      </T>
      <div style={{ marginTop: '4px' }}>Выбрано: {value.length} элементов</div>
      <Button
        dimension="s"
        onClick={() => {
          console.log('Кнопка в нижней панели нажата');
        }}
      >
        Действие снизу
      </Button>
    </ContentWrapper>
  );

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <TreeSelect
        {...treeProps}
        clearButtonPropsConfig={() => clearButtonProps}
        openButtonPropsConfig={() => openButtonProps}
        renderTopPanel={topPanelContent}
        renderBottomPanel={bottomPanelContent}
      />
    </ThemeProvider>
  );
};
