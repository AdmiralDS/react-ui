import React, { useMemo, useRef, useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ActionRenderProps, GroupActionsPane } from '#src/components/GroupActionsPane';
import { Button } from '#src/components/Button';
import styled, { ThemeProvider } from 'styled-components';
import { typography } from '#src/components/Typography';
import { ReactComponent as GovernmentOutline } from '@admiral-ds/icons/build/category/GovernmentOutline.svg';
import { ReactComponent as TelegramOutline } from '@admiral-ds/icons/build/communication/TelegrammOutline.svg';
import { ReactComponent as AlertOutline } from '@admiral-ds/icons/build/category/AlertOutline.svg';
import { ReactComponent as CardSolid } from '@admiral-ds/icons/build/finance/CardSolid.svg';
import { withDesign } from 'storybook-addon-designs';
// import { Menu } from '#src/components/Menu';
// import { MenuItem, RenderOptionProps } from '#src/components/MenuItem';
import { Theme } from '#src/components/themes';
import { TextButton } from '#src/components/TextButton';
// import { mediumGroupBorderRadius } from '#src/components/themes/borderRadius';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Компонент Dropdown Menu имеет три размера и может быть с иконкой или без. Высота строки : xl - 48px, m - 40px, s -
    32px
  </Desc>
);
export default {
  title: 'Admiral-2.1/GroupActionsPane',
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
  // argTypes: {
  //   themeBorderKind: {
  //     control: {
  //       type: 'radio',
  //       options: ['Border radius 0', 'Border radius 2', 'Border radius 4', 'Border radius 8'],
  //     },
  //   },
  // },
} as ComponentMeta<typeof GroupActionsPane>;

const StyledAdditionalText = styled.div`
  ${typography['Body/Body 2 Long']}
  color: ${({ theme }) => theme.color['Neutral/Neutral 50']};
  pointer-events: none;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const SettingsMenu = styled.div`
  width: 320px;
  height: 200px;
  ${typography['Body/Body 2 Long']}
  color: ${({ theme }) => theme.color['Neutral/Neutral 50']};
  background-color: ${({ theme }) => theme.color['Special/Elevated BG']};
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
  const actions = [
    {
      id: '1',
      render: ({ dimension }: ActionRenderProps) => (
        <TextButton text={'Action1'} dimension={dimension} icon={<GovernmentOutline />} />
      ),
    },
    {
      id: '2',
      render: ({ dimension }: ActionRenderProps) => (
        <TextButton text={'Telegram'} dimension={dimension} icon={<TelegramOutline />} />
      ),
    },
    {
      id: '3',
      render: ({ dimension }: ActionRenderProps) => (
        <TextButton text={'Alert'} dimension={dimension} icon={<AlertOutline />} />
      ),
    },
    {
      id: '4',
      render: ({ dimension }: ActionRenderProps) => (
        <TextButton text={'Bank card'} dimension={dimension} icon={<CardSolid />} />
      ),
    },
  ];

  const [columnsVisibility, setColumnsVisibility] = useState(columns);

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <Wrapper>
        <GroupActionsPane
          {...args}
          actions={actions}
          columns={columnsVisibility}
          onColumnsChange={setColumnsVisibility}
          settingsMenu={<SettingsMenu>Здесь может быть меню настройки</SettingsMenu>}
        />
      </Wrapper>
    </ThemeProvider>
  );
};

const TemplateWithMenu: ComponentStory<typeof GroupActionsPane> = (args) => {
  const actions = [
    {
      id: '1',
      render: ({ dimension }: ActionRenderProps) => (
        <TextButton text={'Action1'} dimension={dimension} icon={GovernmentOutline} />
      ),
    },
    {
      id: '2',
      render: ({ dimension }: ActionRenderProps) => (
        <TextButton text={'Telegram'} dimension={dimension} icon={TelegramOutline} />
      ),
    },
    {
      id: '3',
      render: ({ dimension }: ActionRenderProps) => (
        <TextButton text={'Alert'} dimension={dimension} icon={AlertOutline} />
      ),
    },
    {
      id: '4',
      render: ({ dimension }: ActionRenderProps) => (
        <TextButton text={'Bank card'} dimension={dimension} icon={CardSolid} />
      ),
    },
  ];

  const columns = [
    { name: 'Тип сделки', visible: true },
    { name: 'Дата сделки', visible: true },
    { name: 'Сумма', visible: true },
    { name: 'Валюта', visible: true },
    { name: 'Ставка', visible: true },
    { name: 'Статус', visible: true },
  ];

  return (
    <>
      <Wrapper>
        <GroupActionsPane
          {...args}
          actions={actions}
          columns={columns}
          settingsMenu={<SettingsMenu>Здесь может быть меню настройки</SettingsMenu>}
        />
      </Wrapper>
    </>
  );
};

export const SimpleContainer = Simple.bind({});
export const MenuContainer = TemplateWithMenu.bind({});

SimpleContainer.storyName = 'Простой пример';
MenuContainer.storyName = 'Контейнер с меню';
