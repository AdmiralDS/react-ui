import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { mediumGroupBorderRadius, Menu, MenuItemWithCheckbox, T } from '@admiral-ds/react-ui';
import type { MenuProps, RenderOptionProps, MenuModelItemProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

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

const parseShadow = (token: string) => token.replace('box-shadow: ', '').replace(';', '');

const Wrapper = styled.div`
  border-radius: var(--admiral-border-radius-Medium, ${(p) => mediumGroupBorderRadius(p.theme.shape)});
  overflow: hidden;
  border-color: transparent;
  box-shadow: var(--admiral-box-shadow-Shadow08, ${(p) => parseShadow(p.theme.shadow['Shadow 08'])});
`;

export const MenuCheckboxTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: MenuProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [checkedOptions, setCheckedOptions] = React.useState<Record<string, boolean>>({});
  const [active, setActive] = React.useState<string | undefined>();
  const model = React.useMemo<Array<MenuModelItemProps>>(() => {
    return storyItems.map(({ id, label, ...itemProps }) => ({
      id: id,
      ...itemProps,
      render: (options: RenderOptionProps) => (
        <MenuItemWithCheckbox checked={checkedOptions[id]} dimension={props.dimension} {...options} key={id}>
          {label}
        </MenuItemWithCheckbox>
      ),
    }));
  }, [props.dimension, checkedOptions]);

  const handleSelectItem = (id: string) => {
    // eslint-disable-next-line no-console
    console.log(`Option ${id} clicked`);
    setCheckedOptions((cheked) => {
      cheked[id] = !cheked[id];
      return { ...cheked };
    });
  };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Пример меню с пунктами, содержащими Checkbox.
      </T>
      <Wrapper style={{ width: 'fit-content' }}>
        <Menu
          {...props}
          active={active}
          onActivateItem={setActive}
          defaultIsActive={false}
          preselectedModeActive={false}
          model={model}
          onSelectItem={handleSelectItem}
          disableSelectedOptionHighlight={true}
        />
      </Wrapper>
    </ThemeProvider>
  );
};
