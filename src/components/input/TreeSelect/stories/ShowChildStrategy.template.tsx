import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { TreeSelect, T } from '@admiral-ds/react-ui';
import { Separator } from '../../Select/stories/styled';
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
];

export const ShowChildStrategyTemplate = ({
  placeholder = 'Выберите элементы...',
  themeBorderKind,
  CSSCustomProps,
  ...props
}: TreeSelectProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const clearButtonProps = { 'data-testid': 'selectClearButton' };
  const openButtonProps = { 'data-testid': 'selectOpenButton' };
  const dropdownProps = { 'data-testid': 'dropdown-tree' };
  const [value, setValue] = useState<Array<string>>();

  const onChange = (newValue: string[]) => {
    setValue(newValue);
  };

  const treeProps: TreeSelectProps = {
    ...props,
    items: STORY_ITEMS,
    value,
    placeholder,
    onChange,
    showCheckedStrategy: 'SHOW_CHILD',
  };

  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        Показываются только чипсы конечных дочерних опций: чипсы групп не отображаются
      </T>
      <Separator $height={20} />
      <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
        <TreeSelect
          {...treeProps}
          clearButtonPropsConfig={() => clearButtonProps}
          openButtonPropsConfig={() => openButtonProps}
          dropdownConfig={() => dropdownProps}
          displayClearIcon
        />
      </ThemeProvider>
    </>
  );
};
