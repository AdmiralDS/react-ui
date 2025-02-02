import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Menu, mediumGroupBorderRadius, checkboxTreeToMap, MenuItemWithCheckbox, T } from '@admiral-ds/react-ui';
import type {
  MenuProps,
  RenderOptionProps,
  CheckboxGroupItemProps,
  MenuModelItemProps,
  BorderRadiusType,
} from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const STORY_ITEMS: Array<CheckboxGroupItemProps> = [
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

const parseShadow = (token: string) => token.replace('box-shadow: ', '').replace(';', '');

const Wrapper = styled.div`
  border-radius: var(--admiral-border-radius-Medium, ${(p) => mediumGroupBorderRadius(p.theme.shape)});
  overflow: hidden;
  border-color: transparent;
  box-shadow: var(--admiral-box-shadow-Shadow08, ${(p) => parseShadow(p.theme.shadow['Shadow 08'])});
`;

export const MenuCheckboxGroupTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: MenuProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [internalModel, setInternalModel] = React.useState<Array<CheckboxGroupItemProps>>([...STORY_ITEMS]);
  const [activeOption, setActiveOption] = React.useState<string | undefined>();

  const map = React.useMemo(() => {
    return checkboxTreeToMap(internalModel);
  }, [internalModel]);

  const setChecked = (id: string, value: boolean) => {
    const mapItem = map.get(id);
    if (mapItem?.node.disabled) return;
    if (mapItem) {
      mapItem.node.checked = value;
    }

    if (mapItem?.dependencies?.length) {
      mapItem?.dependencies?.forEach((depId: string) => setChecked(depId, value));
    }
  };

  const toggleCheck = (id: string) => {
    const item = map.get(id);
    const hasChildren = !!item?.node.children;

    const indeterminate =
      item?.dependencies?.some((depId: string) => map.get(depId)?.node.checked) &&
      item?.dependencies?.some((depId: string) => !map.get(depId)?.node.checked);

    const checked = hasChildren
      ? indeterminate
        ? true
        : item?.dependencies?.every((depId: string) => map.get(depId)?.node.checked)
      : item?.node.checked;

    setChecked(id, !checked);

    setInternalModel([...internalModel]);
  };

  const model = React.useMemo(() => {
    const menuModel: MenuModelItemProps[] = [];
    map.forEach((item) => {
      const node = item.node;
      const hasChildren = !!node.children;
      const indeterminate =
        item.dependencies?.some((depId: string) => map.get(depId)?.node.checked) &&
        item.dependencies?.some((depId: string) => !map.get(depId)?.node.checked);
      const checked = hasChildren
        ? item.dependencies?.every((depId: string) => map.get(depId)?.node.checked)
        : !!node.checked;
      menuModel.push({
        id: node.id,
        render: (options: RenderOptionProps) => (
          <MenuItemWithCheckbox
            key={node.id}
            id={node.id}
            dimension={props.dimension}
            disabled={node.disabled}
            checked={checked}
            indeterminate={indeterminate}
            level={item.level}
            {...options}
          >
            {node.label}
          </MenuItemWithCheckbox>
        ),
        disabled: node.disabled,
      });
    });

    return menuModel;
  }, [props.dimension, map, activeOption]);

  const handleSelectItem = (id: string) => {
    // eslint-disable-next-line no-console
    console.log(`Option ${id} selected`);
    toggleCheck(id);
  };

  const handleActivateItem = (id: string | undefined) => {
    setActiveOption(id);
  };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Пример с CheckboxGroup.
      </T>
      <Wrapper style={{ width: 'fit-content' }}>
        <Menu
          {...props}
          defaultIsActive={false}
          model={model}
          onSelectItem={handleSelectItem}
          active={activeOption}
          onActivateItem={handleActivateItem}
          disableSelectedOptionHighlight={true}
        />
      </Wrapper>
    </ThemeProvider>
  );
};
