import * as React from 'react';
import { GroupActionsPane, PaneSeparator, typography, TextButton } from '@admiral-ds/react-ui';
import type { GroupActionsPaneProps, Theme } from '@admiral-ds/react-ui';
import { ReactComponent as GovernmentOutline } from '@admiral-ds/icons/build/category/GovernmentOutline.svg';
import { ReactComponent as TelegramOutline } from '@admiral-ds/icons/build/communication/TelegrammOutline.svg';
import { ReactComponent as AlertOutline } from '@admiral-ds/icons/build/category/AlertOutline.svg';
import { ReactComponent as CardSolid } from '@admiral-ds/icons/build/finance/CardSolid.svg';
import styled, { ThemeProvider } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const SettingsMenu = styled.div`
  width: 320px;
  height: 200px;
  ${typography['Body/Body 2 Long']}
  display: flex;
  align-items: center;
  justify-content: center;
`;

const columns: GroupActionsPaneProps['columns'] = [
  // { name: 'Тип сделки', visible: true },
  // { name: 'Дата сделки', visible: true },
  // { name: 'Сумма', visible: false },
  // { name: 'Валюта', visible: true },
  // { name: 'Ставка', visible: true },
  // { name: 'Статус', visible: true },
  { id: 'transfer_type', title: 'Тип сделки', visible: true },
  { id: 'transfer_date', title: 'Дата сделки', visible: true },
  { id: 'transfer_amount', title: 'Сумма', visible: false },
  { id: 'currency', title: 'Валюта', visible: true },
  { id: 'rate', title: 'Ставка', visible: true },
  { id: 'status', title: 'Статус', visible: true },
];

export const PaneSimpleTemplate = (args: GroupActionsPaneProps) => {
  const dimension = ['s', 'm'].includes(args.dimension || 'm') ? 's' : 'm';
  const [columnsVisibility, setColumnsVisibility] = React.useState<GroupActionsPaneProps['columns']>(columns);
  const [searchValue, setSearchValue] = React.useState<string>('');

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  const handleChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearchEnter = () => {
    console.log('Search input opened');
  };

  const handleSearchLeave = () => {
    console.log('Search input left');
  };

  return (
    <ThemeProvider theme={swapBorder}>
      <Wrapper>
        <GroupActionsPane
          {...args}
          searchValue={searchValue}
          onChangeSearchValue={handleChangeSearchValue}
          columns={columnsVisibility}
          onColumnsChange={setColumnsVisibility}
          onSearchEnter={handleSearchEnter}
          onSearchLeave={handleSearchLeave}
          columnsButtonDropContainerStyle={{ dropContainerClassName: 'columnsButtonDropContainerClass' }}
          settingsButtonDropContainerStyle={{ dropContainerClassName: 'settingsButtonDropContainerClass' }}
          settingsMenu={<SettingsMenu>Здесь может быть меню настройки</SettingsMenu>}
        >
          <TextButton text={'Action 1'} dimension={dimension} iconStart={<GovernmentOutline />} />
          <TextButton text={'Action 2'} dimension={dimension} iconStart={<TelegramOutline />} />
          <TextButton text={'Action 3'} dimension={dimension} iconStart={<AlertOutline />} disabled />
          <PaneSeparator dimension={dimension} />
          <TextButton text={'Action 4'} dimension={dimension} iconStart={<CardSolid />} />
        </GroupActionsPane>
      </Wrapper>
    </ThemeProvider>
  );
};
