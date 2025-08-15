import { useEffect, useMemo, useRef, useState } from 'react';

import { ActiveHorizontalTabSelector } from '#src/components/TabMenuComponent/containerElements';
import { HorizontalTabsContainer } from '#src/components/TabMenuComponent/containers';
import type { HorizontalTabsProps, TabWidthMapProps } from '#src/components/TabMenuComponent/types';
import { getTabWidthMap, getUnderlinePosition } from '#src/components/TabMenuComponent/utils';

export const HorizontalTabs = ({
  dimension = 'l',
  showUnderline,
  selectedTabId,
  defaultSelectedTabId,
  onSelectTab,
  tabsId,
  renderTab,
  tabIsDisabled,
  ...props
}: HorizontalTabsProps) => {
  //#region "Создание табов для отрисовки"
  const containerRef = useRef<HTMLDivElement>(null);

  const [selectedTabInner, setSelectedTabInner] = useState<string | undefined>(defaultSelectedTabId);
  const selectedTab = selectedTabId || selectedTabInner;
  const handleSelectTab = (tabId: string) => {
    if (!tabIsDisabled(tabId)) {
      setSelectedTabInner(tabId);
      onSelectTab?.(tabId);
    }
  };

  const horizontalTabs = useMemo(() => {
    return tabsId.map((tabId) => {
      return renderTab(tabId, tabId === selectedTab, handleSelectTab);
    });
  }, [tabsId, renderTab, dimension]);

  const [tabWidthMap, setTabWidthMap] = useState<Array<TabWidthMapProps>>([]);

  useEffect(() => {
    if (containerRef.current) {
      const tabWidth = getTabWidthMap(tabsId, containerRef.current.children);
      setTabWidthMap(tabWidth);
    }
  }, [containerRef, horizontalTabs]);
  //#endregion

  //#region "Параметры для корректной отрисовки TabActiveUnderline"
  const [underlineLeft, setUnderlineLeft] = useState(0);
  const [underlineWidth, setUnderlineWidth] = useState(0);

  const styleUnderline = () => {
    const { left, width } = getUnderlinePosition(tabWidthMap, selectedTabId);
    setUnderlineWidth(width);
    setUnderlineLeft(left);
  };

  useEffect(() => {
    styleUnderline();
  }, [selectedTab, tabWidthMap]);
  //#endregion

  //#region "Проверка видимости выбранной вкладки и скролл при необходимости"
  useEffect(() => {
    if (!containerRef.current || !selectedTab || !tabsId) return;

    const currentTabIndex = tabsId.findIndex((tab) => tab === selectedTab);
    const currentSelectedTab = (
      currentTabIndex >= 0 ? containerRef.current.children[currentTabIndex] : null
    ) as HTMLElement | null;

    if (!currentSelectedTab) return;

    // Проверяем, видна ли вкладка
    const isVisible = (element: HTMLElement) => {
      const rect = element.getBoundingClientRect();
      const containerRect = containerRef.current!.getBoundingClientRect();

      return rect.left >= containerRect.left && rect.right <= containerRect.right;
    };

    if (!isVisible(currentSelectedTab)) {
      // Прокручиваем контейнер до выбранной вкладки
      currentSelectedTab.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [selectedTab]);
  //#endregion

  return (
    <HorizontalTabsContainer {...props} ref={containerRef} $showUnderline={showUnderline}>
      {horizontalTabs}
      <ActiveHorizontalTabSelector $left={`${underlineLeft}px`} $width={`${underlineWidth}px`} $transition={true} />
    </HorizontalTabsContainer>
  );
};
HorizontalTabs.displayName = 'HorizontalTabs';
