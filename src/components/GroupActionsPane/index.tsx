import React, { ButtonHTMLAttributes, HTMLAttributes, useState } from 'react';
import styled from 'styled-components';
import { Dimension as ButtonDimension } from '#src/components/TextButton/types';
import { ColumnsButton, MenuDimension } from '#src/components/GroupActionsPane/ColumnsButton';
import { SettingsButton } from '#src/components/GroupActionsPane/SettingsButton';
import { SearchBlock } from '#src/components/GroupActionsPane/SearchBlock';

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
  margin-right: 16px;
`;

const IconsBlock = styled.div<{ dimension?: PaneDimension }>`
  display: flex;
  flex: 1 0 auto;
  align-items: center;
  justify-content: flex-end;
`;

export interface ActionRenderProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  dimension: ButtonDimension;
}

export interface GroupActionsPaneProps extends HTMLAttributes<HTMLDivElement> {
  /** Размер панели */
  dimension?: PaneDimension;

  /** Массив объектов с видимостью колонок */
  columns: Array<{ name: string; visible: boolean }>;

  /** Значение строки поиска */
  searchValue: string;

  /** Обработчик изменения видимости колонок */
  onColumnsChange?: (columns: Array<{ name: string; visible: boolean }>) => void;

  /** Обработчик открытия строки поиска */
  onSearchEnter?: () => void;

  /** Обработчик смены фокусировки со строки поиска */
  onSearchLeave?: () => void;

  /** Обработчик изменения строки поиска */
  onChangeSearchValue: (e: React.ChangeEvent<HTMLInputElement>) => void;

  /** Объект, отображаемый в качестве меню настройки */
  settingsMenu?: React.ReactNode;

  /** Признак блокировки кнопок настройки таблицы */
  settingsButtonsDisabled?: boolean;

  /** Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
   * по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме
   **/
  locale?: {
    /** Placeholder инпута */
    inputPlaceholder?: string;
  };
}

export const GroupActionsPane = ({
  children,
  searchValue,
  dimension = 'xl',
  columns,
  settingsMenu,
  onColumnsChange,
  onSearchEnter,
  onSearchLeave,
  onChangeSearchValue,
  settingsButtonsDisabled = false,
  locale,
  ...props
}: React.PropsWithChildren<GroupActionsPaneProps>) => {
  const [searchOpened, setSearchOpened] = useState<boolean>(false);

  const iconButtonDimension: 's' | 'l' = ['s', 'm'].includes(dimension) ? 's' : 'l';

  const menuDimension: MenuDimension = dimension === 'xl' ? 'l' : dimension;

  const handleOpenSearch = () => {
    setSearchOpened(true);
    onSearchEnter?.();
  };

  const handleCloseSearch = () => {
    setSearchOpened(false);
    onSearchLeave?.();
  };

  return (
    <Pane dimension={dimension} {...props}>
      {!searchOpened && <Actions>{children}</Actions>}
      <IconsBlock>
        <SearchBlock
          searchValue={searchValue}
          onChangeSearchValue={onChangeSearchValue}
          dimension={iconButtonDimension}
          opened={searchOpened}
          onOpenSearch={handleOpenSearch}
          onCloseSearch={handleCloseSearch}
          locale={locale}
        />
        <ColumnsButton
          columns={columns}
          menuDimension={menuDimension}
          buttonDimension={iconButtonDimension}
          onColumnsChange={onColumnsChange}
          disabled={settingsButtonsDisabled}
        />
        {settingsMenu && (
          <SettingsButton
            menu={settingsMenu}
            buttonDimension={iconButtonDimension}
            disabled={settingsButtonsDisabled}
          />
        )}
      </IconsBlock>
    </Pane>
  );
};

GroupActionsPane.displayName = 'GroupActionsPane';

export const PaneSeparator = styled.div<{ dimension?: 's' | 'm' }>`
  width: 1px;
  height: ${({ dimension }) => (dimension === 's' ? '16px' : '20px')};
  background-color: ${({ theme }) => theme.color['Neutral/Neutral 20']};
  align-self: center;
`;
