import React, { ButtonHTMLAttributes, forwardRef, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import { Dimension as ButtonDimension } from '#src/components/TextButton/types';
import { ItemProps, MenuItem, RenderOptionProps } from '#src/components/MenuItem';
import { Checkbox } from '#src/components/Checkbox';
import { Label } from '#src/components/Checkbox/Label';
import { Menu } from '#src/components/Menu';
import { ColumnsButton, MenuDimension } from '#src/components/GroupActionsPane/ColumnsButton';
import { SettingsButton } from '#src/components/GroupActionsPane/SettingsButton';
import { SearchButton } from '#src/components/GroupActionsPane/SearchButton';

export type PaneDimension = 's' | 'm' | 'l' | 'xl';

const Pane = styled.div<{ dimension?: PaneDimension }>`
  height: ${({ dimension }) => {
    switch (dimension) {
      case 's':
        return '32px';
      case 'm':
        return '40px';
      case 'l':
        return '48px';
      case 'xl':
        return '56px';
      default:
        return '56px';
    }
  }};
  width: 100%;
  background-color: ${({ theme }) => theme.color['Neutral/Neutral 00']};
  display: flex;
  justify-content: space-between;
`;

const Actions = styled.div`
  display: flex;
  column-gap: 16px;
`;

const IconsBlock = styled.div<{ dimension?: PaneDimension }>`
  display: flex;
  flex: 1 0 auto;
  align-items: center;
  justify-content: flex-end;
`;

// const IconButton = styled.button<{ dimension?: PaneDimension }>`
//   height: ${({ dimension }) => (dimension === 's' || dimension === 'm' ? 32 : 48)}px;
//   width: ${({ dimension }) => (dimension === 's' || dimension === 'm' ? 32 : 48)}px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//
//   svg {
//     height: ${({ dimension }) => (dimension === 's' || dimension === 'm' ? 20 : 24)}px;
//     width: ${({ dimension }) => (dimension === 's' || dimension === 'm' ? 20 : 24)}px;
//   }
// `;

const ColumnsMenu = styled(Menu)`
  width: 320px;
`;

const ColumnsMenuItem = styled(MenuItem)`
  display: flex;
  justify-content: flex-start;
`;

const ColumnLabel = styled(Label)`
  margin-left: 10px;
`;

export interface ActionRenderProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  dimension: ButtonDimension;
}

export interface GroupAction {
  id: string;
  render: (options: ActionRenderProps) => React.ReactNode;
}

export interface GroupActionsPaneProps extends Omit<HTMLDivElement, 'children'> {
  dimension?: PaneDimension;
  actions: Array<GroupAction>;
  columns: Array<{ name: string; visible: boolean }>;
  onColumnsChange?: (columns: Array<{ name: string; visible: boolean }>) => void;
  onSearch?: (value: string) => void;
  settingsMenu?: React.ReactNode;
  // onColumnsListChange?: ({ name: string, visible: boolean }) => void;
}

export const GroupActionsPane = forwardRef<HTMLDivElement, GroupActionsPaneProps>(
  ({ actions, dimension = 'xl', columns, settingsMenu, onColumnsChange }: GroupActionsPaneProps, ref) => {
    const [searchOpened, setSearchOpened] = useState<boolean>(false);
    const [columnsListOpened, setColumnsListOpened] = useState<boolean>(false);
    // const [settingsOpened, setSettingsOpened] = useState<boolean>(false);
    const plusButtonRef = useRef<HTMLButtonElement | null>(null);
    const settingsButtonRef = useRef<HTMLButtonElement | null>(null);

    const renderActions = () => {
      const buttonDimension: ButtonDimension = ['s', 'm'].includes(dimension) ? 's' : 'm';
      return actions.map((action) => action.render({ dimension: buttonDimension }));
    };

    const iconButtonDimension: 's' | 'l' = ['s', 'm'].includes(dimension) ? 's' : 'l';
    const renderColumns = useMemo<Array<ItemProps>>(() => {
      return columns.map(
        (column, index): ItemProps => ({
          id: index.toString(),
          render: (options: RenderOptionProps) => (
            <ColumnsMenuItem {...options}>
              <Checkbox checked={column.visible} />
              <ColumnLabel dimension={'s'}>{column.name}</ColumnLabel>
            </ColumnsMenuItem>
          ),
        }),
      );
    }, [columns]);

    const handlePlusClick = () => {
      setColumnsListOpened((prevOpened) => !prevOpened);
    };

    const handleClickOutside = (e: Event) => {
      if (e.target && plusButtonRef.current?.contains(e.target as Node)) {
        return;
      }
      setColumnsListOpened(false);
    };

    const menuDimension: MenuDimension = dimension === 'xl' ? 'l' : dimension;

    return (
      <Pane ref={ref}>
        {!searchOpened && <Actions>{renderActions()}</Actions>}
        <IconsBlock>
          <SearchButton buttonDimension={iconButtonDimension} onOpenSearch={setSearchOpened} />
          <ColumnsButton
            columns={columns}
            menuDimension={menuDimension}
            buttonDimension={iconButtonDimension}
            onColumnsChange={onColumnsChange}
          />
          {settingsMenu && <SettingsButton menu={settingsMenu} buttonDimension={iconButtonDimension} />}
        </IconsBlock>
      </Pane>
    );
  },
);
