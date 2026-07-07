import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { TreeSelect } from '@admiral-ds/react-ui';
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

export const RowCountLimitsTemplate = ({
  placeholder = 'Выберите элементы...',
  themeBorderKind,
  CSSCustomProps,
  ...props
}: TreeSelectProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const clearButtonProps = { 'data-testid': 'selectClearButton' };
  const openButtonProps = { 'data-testid': 'selectOpenButton' };
  const dropdownProps = { 'data-testid': 'dropdown-tree' };

  const [value, setValue] = useState<Array<string>>(['1.1', '1.2', '1.3', '2', '3']);

  const onChange = (newValue: string[]) => {
    setValue(newValue);
  };

  const treeProps: TreeSelectProps = {
    ...props,
    items: STORY_ITEMS,
    value,
    placeholder,
    onChange,
    minRowCount: 2,
    maxRowCount: 3,
  };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <TreeSelect
        {...treeProps}
        clearButtonPropsConfig={() => clearButtonProps}
        openButtonPropsConfig={() => openButtonProps}
        dropdownConfig={() => dropdownProps}
        displayClearIcon
      />
    </ThemeProvider>
  );
};
