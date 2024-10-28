import { useMemo } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import type { ActionBarProps, BorderRadiusType, RenderOptionProps } from '@admiral-ds/react-ui';
import {
  ActionBar,
  ActionBarItemWithTooltip,
  ActionBarDropMenuItem,
  NotificationItem,
  NotificationItemContent,
  NotificationItemTitle,
} from '@admiral-ds/react-ui';

import {
  SystemSearchOutline,
  SystemEditOutline,
  ServiceArchiveOutline,
  CategoryHeartOutline,
  CategoryPinOutline,
  SystemEmailOutline,
  SystemAttachFileOutline,
  SystemLinkOutline,
  SystemExportOutline,
  SystemDeleteOutline,
} from '@admiral-ds/icons';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const items = [
  { itemId: '1', withDivider: false, name: 'Search', icon: <SystemSearchOutline />, disabled: false },
  { itemId: '2', withDivider: false, name: 'Edit', icon: <SystemEditOutline />, disabled: false },
  { itemId: '3', withDivider: true, name: 'Archive', icon: <ServiceArchiveOutline />, disabled: false },
  { itemId: '4', withDivider: false, name: 'Heart', icon: <CategoryHeartOutline />, disabled: false },
  { itemId: '5', withDivider: false, name: 'Pin', icon: <CategoryPinOutline />, disabled: false },
  { itemId: '6', withDivider: true, name: 'Email', icon: <SystemEmailOutline />, disabled: true },
  { itemId: '7', withDivider: false, name: 'Attach file', icon: <SystemAttachFileOutline />, disabled: false },
  { itemId: '8', withDivider: false, name: 'Attach link', icon: <SystemLinkOutline />, disabled: false },
  { itemId: '9', withDivider: false, name: 'Export', icon: <SystemExportOutline />, disabled: false },
  { itemId: '10', withDivider: false, name: 'Delete', icon: <SystemDeleteOutline />, disabled: false },
];

const Separator = styled.div<{ height: number }>`
  height: ${(p) => p.height}px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ActionBarTemplate = ({
  dimension = 'xl',
  themeBorderKind,
  CSSCustomProps,
  ...props
}: ActionBarProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const itemsMap = useMemo(() => {
    return items.map((item) => ({
      itemId: item.itemId,
      withDivider: item.withDivider,
    }));
  }, [items]);

  const renderActionBarItem = (itemId: string) => {
    const item = items.find((item) => item.itemId === itemId) || items[0];
    // eslint-disable-next-line no-console
    const handleClick = () => console.log(`${item.name} clicked`);
    return (
      <ActionBarItemWithTooltip
        dimension={dimension}
        id={item.itemId}
        key={item.itemId}
        renderContent={() => item.name}
        onClick={handleClick}
        disabled={item.disabled}
      >
        {item.icon}
      </ActionBarItemWithTooltip>
    );
  };
  const renderDropMenuItem = (itemId: string) => {
    const item = items.find((item) => item.itemId === itemId) || items[0];
    // eslint-disable-next-line no-console
    const handleClick = () => console.log(`${item.name} clicked`);
    return (options: RenderOptionProps) => {
      return (
        <ActionBarDropMenuItem dimension={dimension} {...options} key={itemId} onClick={handleClick}>
          {item.icon}
          {item.name}
        </ActionBarDropMenuItem>
      );
    };
  };
  const itemIsDisabled = (itemId: string) => {
    const currentTab = items.find((item) => item.itemId === itemId);
    return !!currentTab?.disabled;
  };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <Wrapper>
        <NotificationItem displayStatusIcon>
          <NotificationItemTitle>Action Bar</NotificationItemTitle>
          <NotificationItemContent>
            Action Bar — это панель действий с возможностью деления на логические группы с помощью разделителя.
            <Separator height={8} />
            Опционально или при нехватке места добавляется Overflow Menu. Над каждой кнопкой, входящей в состав
            компонента, при ховере, появляется Tooltip с подсказкой функции кнопки.
            <Separator height={8} />
            Компонент Action Bar представлен в 4х размерах по аналогии с обычными кнопками: XL (56), L (48), M (40), S
            (32).
            <Separator height={8} />
            По дефолту тултип появляется снизу от кнопки при ховере. Можно настроить появление тултипа справа, слева,
            сверху, в зависимости от расположения Action Bar. В случае, когда это действительно необходимо и смысл
            кнопки очевиден, опционально можно отключать тултип.
            <Separator height={8} />
            Если кнопки не помещаются в доступное горизонтальное пространство, они перемещаются в Dropdown Menu. Размеры
            выпадающего меню для Action Bar — L для XL и L размера Action Bar, M для M размера и S для размера S. При
            изменении ширины компонента, кнопки не помещающиеся в ширину Action Bar, перемещаются в Overflow Menu,
            добавляясь по порядку. Это означает, что последняя кнопка на панели действий также будет последней кнопкой
            внутри меню.
          </NotificationItemContent>
        </NotificationItem>
        <ActionBar
          {...props}
          items={itemsMap}
          renderActionBarItem={renderActionBarItem}
          renderDropMenuItem={renderDropMenuItem}
          itemIsDisabled={itemIsDisabled}
          dimension={dimension}
        />
      </Wrapper>
    </ThemeProvider>
  );
};
