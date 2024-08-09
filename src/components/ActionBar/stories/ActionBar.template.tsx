import { useMemo } from 'react';

import type { ActionBarProps, BorderRadiusType, RenderOptionProps } from '@admiral-ds/react-ui';
import { ActionBar, ActionBarItemWithTooltip, ActionBarDropMenuItem } from '@admiral-ds/react-ui';

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
import { ThemeProvider } from 'styled-components';

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
      <ActionBar
        {...props}
        items={itemsMap}
        renderActionBarItem={renderActionBarItem}
        renderDropMenuItem={renderDropMenuItem}
        itemIsDisabled={itemIsDisabled}
        dimension={dimension}
      />
    </ThemeProvider>
  );
};
