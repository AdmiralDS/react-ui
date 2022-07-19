import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ActionRenderProps, GroupActionsPane, PaneSeparator } from '#src/components/GroupActionsPane';
import styled, { ThemeProvider } from 'styled-components';
import { typography } from '#src/components/Typography';
import { ReactComponent as GovernmentOutline } from '@admiral-ds/icons/build/category/GovernmentOutline.svg';
import { ReactComponent as TelegramOutline } from '@admiral-ds/icons/build/communication/TelegrammOutline.svg';
import { ReactComponent as AlertOutline } from '@admiral-ds/icons/build/category/AlertOutline.svg';
import { ReactComponent as CardSolid } from '@admiral-ds/icons/build/finance/CardSolid.svg';
import { withDesign } from 'storybook-addon-designs';
import { Theme } from '#src/components/themes';
import { TextButton } from '#src/components/TextButton';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>Опциональная надстройка над таблицей. Размерность : xl - 56px, l - 48px, m - 40px, s - 32px</Desc>
);
export default {
  title: 'Admiral-2.1/Data Table/GroupActionsPane',
  decorators: [withDesign],
  component: GroupActionsPane,
  parameters: {
    componentSubtitle: <Description />,
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A91211',
      },
    ],
  },
  docs: {
    source: {
      type: 'code',
    },
  },
  argTypes: {
    dimension: {
      control: {
        type: 'radio',
        options: ['xl', 'l', 'm', 's'],
        defaultValue: 'xl',
      },
    },
  },
} as ComponentMeta<typeof GroupActionsPane>;

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

const columns = [
  { name: 'Тип сделки', visible: true },
  { name: 'Дата сделки', visible: true },
  { name: 'Сумма', visible: false },
  { name: 'Валюта', visible: true },
  { name: 'Ставка', visible: true },
  { name: 'Статус', visible: true },
];

const Simple: ComponentStory<typeof GroupActionsPane> = (args) => {
  const dimension = ['s', 'm'].includes(args.dimension || 'm') ? 's' : 'm';
  const [columnsVisibility, setColumnsVisibility] = useState(columns);
  const [searchValue, setSearchValue] = useState<string>('');

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
          settingsMenu={<SettingsMenu>Здесь может быть меню настройки</SettingsMenu>}
        >
          <TextButton text={'Action 1'} dimension={dimension} icon={<GovernmentOutline />} />
          <TextButton text={'Action 2'} dimension={dimension} icon={<TelegramOutline />} />
          <TextButton text={'Action 3'} dimension={dimension} icon={<AlertOutline />} disabled />
          <PaneSeparator dimension={dimension} />
          <TextButton text={'Action 4'} dimension={dimension} icon={<CardSolid />} />
        </GroupActionsPane>
      </Wrapper>
    </ThemeProvider>
  );
};

export const SimpleContainer = Simple.bind({});

SimpleContainer.storyName = 'Простой пример';
