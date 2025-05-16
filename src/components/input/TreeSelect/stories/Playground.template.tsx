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

export const PlaygroundTemplate = ({
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

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <TreeSelect
        {...treeProps}
        clearButtonPropsConfig={() => clearButtonProps}
        openButtonPropsConfig={() => openButtonProps}
      />
    </ThemeProvider>
  );
};
