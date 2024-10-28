import styled, { ThemeProvider } from 'styled-components';

import { GroupActionsPane, PaneSeparator, typography, TextButton, Button } from '@admiral-ds/react-ui';
import type { GroupActionsPaneProps, PaneColumn, BorderRadiusType } from '@admiral-ds/react-ui';
import { ReactComponent as GovernmentOutline } from '@admiral-ds/icons/build/category/GovernmentOutline.svg';
import { ReactComponent as TelegramOutline } from '@admiral-ds/icons/build/communication/TelegrammOutline.svg';
import { ReactComponent as AlertOutline } from '@admiral-ds/icons/build/category/AlertOutline.svg';
import { ReactComponent as CardSolid } from '@admiral-ds/icons/build/finance/CardSolid.svg';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';
import { useState } from 'react';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const SettingsMenu = styled.div`
  width: 320px;
  padding: 20px;
  ${typography['Body/Body 2 Long']}
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 28px;
  & > button:first-child {
    margin-right: 8px;
  }
`;

const columns: PaneColumn[] = [
  { id: 'transfer_type', title: 'Тип сделки', visible: true },
  { id: 'transfer_date', title: 'Дата сделки', visible: true },
  { id: 'transfer_amount', title: 'Сумма', visible: false },
  { id: 'currency', title: 'Валюта', visible: true },
  { id: 'rate', title: 'Ставка', visible: true },
  { id: 'status', title: 'Статус', visible: true },
  {
    id: 'custom',
    title: 'Очень длинное название поля, которое не помещается в выпадающий список по ширине',
    visible: false,
  },
];

export const PaneSimpleTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: GroupActionsPaneProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const dimension = ['s', 'm'].includes(props.dimension || 'm') ? 's' : 'm';
  const [columnsVisibility, setColumnsVisibility] = useState(columns);
  const [searchValue, setSearchValue] = useState<string>('');

  const handleChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearchEnter = () => {
    // eslint-disable-next-line no-console
    console.log('Search input opened');
  };

  const handleSearchLeave = () => {
    // eslint-disable-next-line no-console
    console.log('Search input left');
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderSettingsMenu = ({ closeMenu }: any) => (
    <SettingsMenu>
      Здесь могут быть опции с настройками и кнопки для применения/сбрасывания настроек
      <ButtonWrapper>
        <Button dimension="s" onClick={closeMenu}>
          Сохранить
        </Button>
        <Button dimension="s" onClick={closeMenu}>
          Очистить
        </Button>
      </ButtonWrapper>
    </SettingsMenu>
  );

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <Wrapper>
        <GroupActionsPane
          {...props}
          searchValue={searchValue}
          onChangeSearchValue={handleChangeSearchValue}
          columns={columnsVisibility}
          onColumnsChange={setColumnsVisibility}
          onSearchEnter={handleSearchEnter}
          onSearchLeave={handleSearchLeave}
          columnsButtonDropContainerStyle={{ dropContainerClassName: 'columnsButtonDropContainerClass' }}
          settingsButtonDropContainerStyle={{ dropContainerClassName: 'settingsButtonDropContainerClass' }}
          renderSettingsMenu={renderSettingsMenu}
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
