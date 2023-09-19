import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { mediumGroupBorderRadius, Menu, MenuItemWithCheckbox } from '@admiral-ds/react-ui';
import type { MenuProps, RenderOptionProps, Theme, MenuModelItemProps, BorderRadiusType } from '@admiral-ds/react-ui';

interface StoryItem {
  id: string;
  label: string;
  readOnly?: boolean;
  disabled?: boolean;
}

const storyItems: Array<StoryItem> = [
  {
    id: '1',
    label: 'Option one',
    disabled: true,
  },
  {
    id: '2',
    label: 'Option two',
  },
  {
    id: '3',
    label: 'Option three',
    readOnly: true,
  },
  {
    id: '4',
    label: 'Option four',
  },
  {
    id: '5',
    label: 'Option five',
  },
  {
    id: '6',
    label: 'Option six',
  },
  {
    id: '7',
    label: 'Option seven',
  },
];

const Wrapper = styled.div`
  border-radius: ${(p) => mediumGroupBorderRadius(p.theme.shape)};
  overflow: hidden;
  border-color: transparent;
  ${(p) => p.theme.shadow['Shadow 08']}
`;

export const MenuCheckboxTemplate = ({
  themeBorderKind,
  ...props
}: MenuProps & { themeBorderKind?: BorderRadiusType }) => {
  const [selected, setSelected] = React.useState<string | undefined>();
  const [checkedOptions, setCheckedOptions] = React.useState<Array<string>>([]);

  const model = React.useMemo<Array<MenuModelItemProps>>(() => {
    return storyItems.map(({ id, label, ...itemProps }) => ({
      id: id,
      ...itemProps,
      render: (options: RenderOptionProps) => (
        <MenuItemWithCheckbox checked={checkedOptions.includes(id)} dimension={props.dimension} {...options} key={id}>
          {label}
        </MenuItemWithCheckbox>
      ),
    }));
  }, [props.dimension, checkedOptions, selected]);

  const handleSelectItem = (id: string) => {
    console.log(`Option ${id} clicked`);
    setSelected(id);
    const index = checkedOptions.findIndex((item) => item === id);
    if (index < 0) {
      checkedOptions.push(id);
    } else {
      checkedOptions.splice(index, 1);
    }
    setCheckedOptions([...checkedOptions]);
  };

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <Wrapper style={{ width: 'fit-content' }}>
        <Menu
          {...props}
          defaultIsActive={false}
          model={model}
          selected={selected}
          onSelectItem={handleSelectItem}
          disableSelectedOptionHighlight={true}
        />
      </Wrapper>
    </ThemeProvider>
  );
};
